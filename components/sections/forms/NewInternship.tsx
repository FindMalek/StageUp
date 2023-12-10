'use client';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/Form';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Textarea } from '@/components/ui/Textarea';
import { ToastAction } from '@/components/ui/Toast';

import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  positionTitle: z
    .string({
      required_error: 'Le titre de la position est requis',
      invalid_type_error:
        'Le titre de la position doit être une chaîne de caractères'
    })
    .nonempty('Le titre de la position ne peut pas être vide'),
  description: z
    .string({
      required_error: 'La description est requise',
      invalid_type_error: 'La description doit être une chaîne de caractères'
    })
    .nonempty('La description ne peut pas être vide'),
  location: z
    .string({
      required_error: 'La localisation est requise',
      invalid_type_error: 'La localisation doit être une chaîne de caractères'
    })
    .nonempty('La localisation ne peut pas être vide'),
  duration: z
    .string({
      required_error: 'La durée est requise',
      invalid_type_error: 'La durée doit être une chaîne de caractères'
    })
    .nonempty('La durée ne peut pas être vide'),
  documentationFileUrl: z.string(),
  questions: z
    .array(
      z.string({
        required_error: 'La question est requise',
        invalid_type_error: 'La question doit être une chaîne de caractères'
      })
    )
    .nonempty('Vous devez ajouter au moins une question'),
  keywords: z
    .array(
      z.string({
        required_error: 'Le mot-clé est requis',
        invalid_type_error: 'Le mot-clé doit être une chaîne de caractères'
      })
    )
    .nonempty('Vous devez ajouter au moins un mot-clé')
});

export default function NewInternshipForm() {
  const MAX_QUESTIONS = 3;
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState(['']);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      positionTitle: '',
      description: '',
      location: '',
      duration: '',
      documentationFileUrl: '',
      questions: [],
      keywords: []
    }
  });

  const handleAddQuestion = () => {
    if (questions.length < MAX_QUESTIONS) {
      setQuestions([...questions, '']);
    }
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    values.duration = values.duration + ' mois';
    setLoading(true);

    try {
      const res = await fetch('/api/internship', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (res.status !== 201) {
        throw new Error(await res.text());
      }

      window.location.reload();
    } catch (error: any) {
      toast({
        title: "Quelque chose s'est mal passé",
        description: error.message.split(':')[2],
        variant: 'destructive',
        action: (
          <ToastAction
            onClick={() => {
              window.location.reload();
            }}
            altText="Try again"
          >
            Réessayer
          </ToastAction>
        )
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 overflow-y-auto sm:h-[500px] lg:h-[600px]"
      >
        <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
          <FormField
            control={form.control}
            name="positionTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Titre du stage <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Développeur web..." {...field} />
                </FormControl>
                <FormDescription>
                  Le titre du stage doit être le plus précis possible.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Localisation <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Monastir..." {...field} />
                </FormControl>
                <FormDescription>
                  La localisation du stage ou le type de stage (télétravail,
                  présentiel, etc.).
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
          <FormField
            control={form.control}
            name="documentationFileUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fichier de documentation</FormLabel>
                <FormControl>
                  <Input id="documentationFileUrl" type="file" {...field} />
                </FormControl>
                <FormDescription>
                  Le fichier de documentation doit être un fichier PDF.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="duration"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Durée du stage <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <div className="relative mt-2 rounded-md shadow-sm">
                    <Input placeholder="2..." {...field} />
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                      <span className="text-gray-500 sm:text-sm">Mois</span>
                    </div>
                  </div>
                </FormControl>
                {/**
                 * Either show the FormMessage or the FormDescription
                 */}
                <FormDescription>La durée du stage en mois.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

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
                  placeholder="La description du stage doit être le plus précis possible."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
          <div>
            <Label>
              Questions <span className="text-red-500">*</span>
            </Label>
            {questions.map((question, index) => (
              <FormField
                control={form.control}
                name={`questions.${index}`}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Quelle est la question ?"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            {questions.length < MAX_QUESTIONS && (
              <Button
                variant="outline"
                type="button"
                onClick={handleAddQuestion}
                className="w-full text-center"
              >
                Ajouter une question
              </Button>
            )}
          </div>

          <FormField
            control={form.control}
            name="keywords"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Mots-clés <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Les mots-clés doivent être séparés par des virgules. Exemple : React, Node.js, TypeScript, etc."
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {loading ? (
          <Button type="submit" className="flex w-full justify-center">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            En cours...
          </Button>
        ) : (
          <Button type="submit" className="flex w-full justify-center">
            Ajouter le stage
          </Button>
        )}
      </form>
    </Form>
  );
}
