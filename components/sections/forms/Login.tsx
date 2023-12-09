"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Link from "next/link";
import { useState } from "react";
import { redirect } from "next/navigation";
import { useSession, signIn } from "next-auth/react";

import { Loader2 } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Checkbox } from "@/components/ui/Checkbox";

const formSchema = z.object({
  email: z.string().email({
    message: "Veuillez saisir une adresse email valide.",
  }),
  password: z.string().min(8, {
    message: "Veuillez saisir un mot de passe d'au moins 8 caractères.",
  }),
  rememberMe: z.boolean(),
});

export default function LoginForm() {
  const { data: session } = useSession();

  if (session) {
    return redirect("/login/welcome/form");
  }

  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);

    const Data = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
    });

    if (Data?.status !== 200) {
      form.setError("email", {
        type: "manual",
        message:
          "L'adresse email peut être incorrecte ou le compte n'existe pas.",
      });
      form.setError("password", {
        type: "manual",
        message: "Le mot de passe peut être incorrect.",
      });
    } else {
      window.location.href = "/login/welcome/form";
    }

    setLoading(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Adresse email</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mot de Passe</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex items-center justify-between">
          <FormField
            control={form.control}
            name="rememberMe"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="ml-1 -mt-1 block text-sm leading-6 text-gray-700">
                    Souviens-toi de moi
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />

          <div className="text-sm leading-6">
            <Link
              href="/forgot-password"
              className="font-semibold text-blue-600 hover:text-blue-500"
            >
              Mot de passe oublié ?
            </Link>
          </div>
        </div>

        <div>
          {loading ? (
            <Button type="submit" className="flex w-full justify-center">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              En cours...
            </Button>
          ) : (
            <Button type="submit" className="flex w-full justify-center">
              Se connecter
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
}
