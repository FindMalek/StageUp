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
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Calendar } from "@/components/ui/Calendar";
import { Separator } from "@/components/ui/Separator";
import { ToastAction } from "@/components/ui/Toast";

import PlusDivider from "@/components/overall/Divider";

import { universities } from "@/data/universities";
import { cn, isValidUrl } from "@/lib/utils";
import { SessionType } from "@/types/session";

import { LuChevronsUpDown } from "react-icons/lu";
import { FaCheck } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { Loader2, CalendarIcon } from "lucide-react";

const formSchema = z.object({
  overview: z
    .string({
      required_error: "La description est obligatoire",
      invalid_type_error: "La description doit être une chaîne de caractères",
    })
    .nonempty({
      message: "La description ne peut pas être vide",
    }),
  university: z
    .string({
      required_error: "L'université est obligatoire",
      invalid_type_error: "L'université doit être une chaîne de caractères",
    })
    .nonempty({
      message: "L'université ne peut pas être vide",
    }),
  fieldOfStudy: z
    .string({
      required_error: "Le domaine d'étude est obligatoire",
      invalid_type_error:
        "Le domaine d'étude doit être une chaîne de caractères",
    })
    .nonempty({
      message: "Le domaine d'étude ne peut pas être vide",
    }),
  resumeUrl: z
    .string({
      required_error: "Le lien de votre CV est obligatoire",
      invalid_type_error:
        "Le lien de votre CV doit être une chaîne de caractères",
    })
    .nonempty({
      message: "Le lien de votre CV ne peut pas être vide",
    }),
  portfolioUrl: z
    .string()
    .optional()
    .refine(
      (url) => !url || isValidUrl(url),
      "L'URL du votre siteweb doit être une URL valide"
    ),
  degrees: z.array(
    z
      .object({
        degreeName: z
          .string({
            required_error: "Le nom du diplôme est obligatoire",
            invalid_type_error:
              "Le nom du diplôme doit être une chaîne de caractères",
          })
          .nonempty({
            message: "Le nom du diplôme ne peut pas être vide",
          }),
        institution: z
          .string({
            required_error: "L'institution est obligatoire",
            invalid_type_error:
              "L'institution doit être une chaîne de caractères",
          })
          .nonempty({
            message: "L'institution ne peut pas être vide",
          }),
        dateObtained: z.date({
          required_error: "La date de fondation est requise",
          invalid_type_error: "La date de fondation doit être une date valide",
        }),
      })
      .optional()
  ),
});

export default function InternForm(session: SessionType) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [degrees, setDegrees] = useState<z.infer<typeof formSchema>["degrees"]>(
    []
  );
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      university: "",
      fieldOfStudy: "",
      overview: "",
      resumeUrl: "",
      portfolioUrl: "",
      degrees: [],
    },
  });

  const addDegree = () => {
    setDegrees([
      ...degrees,
      { degreeName: "", institution: "", dateObtained: new Date() },
    ]);
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      const userData = {
        ...values,
        user: {
          ...session,
        },
      };

      const intern = await fetch("/api/intern", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (intern.status !== 200) {
        throw new Error(await intern.text());
      }

      const internData = await intern.json();
      const degrees = await fetch("/api/degree", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          intern: internData.intern,
          degrees: userData.degrees,
        }),
      });

      if (degrees.status !== 200) {
        throw new Error(await degrees.text());
      }

      window.location.href = "/applications";
      
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
          name="university"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>
                Université <span className="text-red-500">*</span>
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
                        ? universities.find(
                            (university) => university.value === field.value
                          )?.value
                        : "Choisir votre université"}
                      <LuChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                  <Command>
                    <CommandInput placeholder="Rechercher votre université..." />
                    <CommandEmpty>Aucun université a été trouvé</CommandEmpty>
                    <CommandGroup>
                      {universities.map((university) => (
                        <CommandItem
                          value={university.value}
                          key={university.value}
                          onSelect={() => {
                            form.setValue("university", university.value);
                          }}
                        >
                          <FaCheck
                            className={cn(
                              "mr-2 h-4 w-4",
                              university.value === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {university.value}
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

        <FormField
          control={form.control}
          name="fieldOfStudy"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Domaine d'étude <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Choisir votre domaine d'étude" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {universities
                      .find((uni) => uni.value === form.watch("university"))
                      ?.fieldsOfStudy.map((studyField) => (
                        <SelectItem key={studyField} value={studyField}>
                          {studyField}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="overview"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Description <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Décrivez-vous en quelques mots..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid gap-4 lg:grid-cols-2 sm:grid-cols-1">
          <FormField
            control={form.control}
            name="resumeUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Votre CV <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://drive.google.com/file/..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="portfolioUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Votre portfolio{" "}
                  <span className="text-muted-foreground">(optionnel)</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="https://www.example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="relative">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex items-center justify-between">
            <span className="bg-white pr-3 text-base font-semibold leading-6 text-gray-900">
              Diplome
            </span>
            <Button
              type="button"
              onClick={addDegree}
              className="inline-flex items-center gap-x-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              <FaPlus
                className="-ml-1 -mr-0.5 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              <span>Ajouter</span>
            </Button>
          </div>
        </div>

        {degrees.map((degree, index) => (
          <div key={index} className="space-y-6">
            <div className="grid gap-4 lg:grid-cols-2 sm:grid-cols-1">
              <FormField
                control={form.control}
                name={`degrees.${index}.degreeName` as const}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Nom du diplôme <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Génie logiciel..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={`degrees.${index}.institution` as const}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Institution <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Institut supérieur de gestion..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name={`degrees.${index}.dateObtained` as const}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Date d'obtention <span className="text-red-500">*</span>
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
                            <span>Choisir la date d'obtention</span>
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
            <Separator />
          </div>
        ))}

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
