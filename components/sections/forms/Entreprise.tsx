import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/Command";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { Calendar } from "@/components/ui/Calendar";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { ToastAction } from "@/components/ui/Toast";

import PlusDivider from "@/components/overall/Divider";

import { industries } from "@/data/industries";
import { cn, isValidUrl } from "@/lib/utils";
import { SessionType } from "@/types/session";

import { LuChevronsUpDown } from "react-icons/lu";
import { FaCheck } from "react-icons/fa6";
import { Loader2, CalendarIcon } from "lucide-react";

const formSchema = z.object({
  companyName: z
    .string({
      required_error: "Le nom de l'entreprise est requis",
      invalid_type_error:
        "Le nom de l'entreprise doit être une chaîne de caractères",
    })
    .nonempty("Le nom de l'entreprise ne peut pas être vide"),
  description: z
    .string({
      required_error: "La description est requise",
      invalid_type_error: "La description doit être une chaîne de caractères",
    })
    .nonempty("La description ne peut pas être vide"),
  industry: z
    .string({
      required_error: "Le secteur d'activité est requis",
      invalid_type_error:
        "Le secteur d'activité doit être une chaîne de caractères",
    })
    .nonempty("Le secteur d'activité ne peut pas être vide"),
  companySize: z.string({
    required_error: "La taille de l'entreprise est requise",
    invalid_type_error:
      "La taille de l'entreprise doit être une chaîne de caractères",
  }),
  foundedDate: z.date({
    required_error: "La date de fondation est requise",
    invalid_type_error: "La date de fondation doit être une date valide",
  }),
  websiteUrl: z
    .string()
    .optional()
    .refine(
      (url) => !url || isValidUrl(url),
      "L'URL du site web doit être une URL valide"
    ),
});

export default function EnterpriseForm(session: SessionType) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      industry: "",
      companySize: "",
      foundedDate: new Date(),
      description: "",
      websiteUrl: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);

    try {
      const userData = {
        ...values,
        user: {
          ...session,
        },
      };

      const res = await fetch("/api/entreprise", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (res.status !== 200) {
        throw new Error(await res.text());
      }

      // TODO: Redirect to /app

    } catch (error: any) {
      toast({
        title: "Quelque chose s'est mal passé",
        description: error.message.split(":")[2],
        variant: "destructive",
        action: (
          <ToastAction
            onClick={() => {
              window.location.reload();
            }}
            altText="Try again"
          >
            Réessayer
          </ToastAction>
        ),
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <PlusDivider />
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Nom de l'entreprise <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="Nom de l'entreprise" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Description <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Décrivez votre entreprise en quelques mots..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="industry"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>
                Secteur d'activité <span className="text-red-500">*</span>
              </FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-full justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? industries.find(
                            (industry) => industry.value === field.value
                          )?.label
                        : "Choisir un secteur d'activité"}
                      <LuChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                  <Command>
                    <CommandInput placeholder="Rechercher un secteur d'activité..." />
                    <CommandEmpty>Aucun secteur d'activité trouvé</CommandEmpty>
                    <CommandGroup>
                      {industries.slice(0, 6).map((industry) => (
                        <CommandItem
                          value={industry.label}
                          key={industry.value}
                          onSelect={() => {
                            form.setValue("industry", industry.value);
                          }}
                        >
                          <FaCheck
                            className={cn(
                              "mr-2 h-4 w-4",
                              industry.value === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {industry.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid gap-4 lg:grid-cols-2 sm:grid-cols-1">
          <FormField
            control={form.control}
            name="companySize"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Taille de l'entreprise <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Choisir la taille d'entreprise" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1-10">1 - 10</SelectItem>
                      <SelectItem value="10-50">10 - 50</SelectItem>
                      <SelectItem value="50-100">50 - 100</SelectItem>
                      <SelectItem value="100-500">100 - 500</SelectItem>
                      <SelectItem value="500+">500 +</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="foundedDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Date de création <span className="text-red-500">*</span>
                </FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Choisir une date de création</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="websiteUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Votre siteweb{" "}
                <span className="text-muted-foreground">(optionnel)</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="https://www.example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {loading ? (
          <Button type="submit" className="flex w-full justify-center">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            En cours...
          </Button>
        ) : (
          <Button type="submit" className="flex w-full justify-center">
            Enregistrer
          </Button>
        )}
      </form>
    </Form>
  );
}
