"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { Label } from "@/components/ui/Label";

import InternForm from "@/components/sections/forms/Intern";
import EnterpriseForm from "@/components/sections/forms/Entreprise";

import { SessionType } from "@/types/session";

export default function EntityForm(session: SessionType) {
  const [selectedEntity, setSelectedEntity] = useState("");

  const handleSelectChange = (value: string) => {
    setSelectedEntity(value);
  };

  return (
    <>
      <Label>Vous êtes ?</Label>
      <Select onValueChange={handleSelectChange}>
        <SelectTrigger className="w-full mt-2">
          <SelectValue
            className="w-full text-left"
            placeholder="Choisissez votre type d'inscription"
          />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="entreprise">
            S'inscrire en tant qu'entreprise
          </SelectItem>
          <SelectItem value="intern">
            S'inscrire en tant que stagiaire
          </SelectItem>
        </SelectContent>
      </Select>

      {selectedEntity === "entreprise" && <EnterpriseForm {...session} />}
      {selectedEntity === "intern" && <InternForm {...session} />}
    </>
  );
}
