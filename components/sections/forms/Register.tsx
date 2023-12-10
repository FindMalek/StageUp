"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useToast } from "@hooks/use-toast";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useState } from "react";

import { SessionType } from "@/types/session";

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
import { ToastAction } from "@/components/ui/Toast";

const formSchema = z.object({
  username: z.string().min(3, {
    message: "Le nom d'utilisateur doit contenir au moins 3 caractères.",
  }),
  email: z.string().email({
    message: "Veuillez saisir une adresse email valide.",
  }),
  password: z
    .string()
    .min(8, {
      message: "Le mot de passe doit contenir au moins 8 caractères.",
    })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/, {
      message:
        "Le mot de passe doit contenir au moins 1 lettre majuscule, 1 lettre minuscule, 1 chiffre et 1 caractère spécial.",
    }),
});

export default function RegisterForm() {
	const { data: session } = useSession() as SessionType;

	if (
		session &&
		session.user &&
		(session.user.isIntern || session.user.isEnterprise)
	) {
		return redirect("/internships");
	} else if (session && session.user) {
		return redirect("/login/welcome/form");
	}

  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      const response = await fetch("/api/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
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

      await signIn("credentials", {
        redirect: false,
        email: values.email,
        password: values.password,
      });
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
    setLoading(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom d'utilisateur</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

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
          {loading ? (
            <Button type="submit" className="flex w-full justify-center">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              En cours...
            </Button>
          ) : (
            <Button type="submit" className="flex w-full justify-center">
              Continue{" "}
              <span aria-hidden="true" className="pl-2">
                →
              </span>
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
}
