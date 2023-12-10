import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/Dialog';
import { Button } from '@/components/ui/Button';

import NewInternshipForm from '@/components/sections/forms/NewInternship';

import { Plus } from 'lucide-react';

export function DialogNewInternship() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="ml-auto h-8 ">
          <Plus className="h-4 w-4" />
          <div className="ml-2 hidden lg:flex">Ajouter un stage</div>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] lg:max-w-[720px]">
        <DialogHeader>
          <DialogTitle>Ajouter un stage</DialogTitle>
          <DialogDescription>
            Formulaire d'ajout d'un stage, à remplir par l'entreprise.
          </DialogDescription>
        </DialogHeader>

        <NewInternshipForm />
      </DialogContent>
    </Dialog>
  );
}
