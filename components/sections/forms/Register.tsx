"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useToast } from "@hooks/use-toast";
import { useSession } from "next-auth/react";

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
import { ToastAction } from "@/components/ui/Toast";

const formSchema = z.object({
  email: z.string().email({
    message: "Veuillez saisir une adresse email valide.",
  }),
  password: z.string().min(8, {
    message: "Le mot de passe doit contenir au moins 8 caractères.",
  }),
});

export default function RegisterForm() {
  const { data: session } = useSession();

  if (session) {
    window.location.href = "/login/welcome/form";
  }

  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        window.location.href = "/login/welcome/form";
      } else {
        toast({
          title: "Connexion échouée.",
          // @ts-ignore: Object is possibly 'null'.
          description: response.message,
          variant: "destructive",
          action: (
            <ToastAction
              altText="Try again"
              onClick={() => {
                window.location.reload();
              }}
            >
              Veuillez réessayer.
            </ToastAction>
          ),
        });
        const data = await response.json();
        throw new Error(data.message);
      }
    } catch (error) {
      toast({
        title: "Une erreur s'est produite.",
        // @ts-ignore: Object is possibly 'null'.
        description: error.message,
        variant: "destructive",
        action: (
          <ToastAction
            altText="Try again"
            onClick={() => {
              form.reset();
            }}
          >
            Veuillez réessayer.
          </ToastAction>
        ),
      });
    }
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

        <div>
          <Button type="submit" className="flex w-full justify-center">
            Continue{" "}
            <span aria-hidden="true" className="pl-2">
              →
            </span>
          </Button>
        </div>
      </form>
    </Form>
  );
}
