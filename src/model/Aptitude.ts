/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { ServiceAptitude, AptitudeTypeName } from "src/data/ServiceAptitude";
import { CompetenceName } from "./Competence";

/**
 * Un aptitude est un don, passif, technique, sort, etc.. qu'un personnage peut acquérir.
 * La classe abstraite permet de regrouper les aptitudes définit par le MJ et celle part les
 * joueurs suivant le système de creation d'aptitude.
 */

export type AptitudeType = {
  Nom: AptitudeTypeName;
  Description: string;
};

export class Aptitude {
  Nom: string;
  Description: string;
  Type: AptitudeType;
  MaîtrisesRequise: Map<CompetenceName, number>;

  constructor(
    nom: string,
    description: string,
    typeName: AptitudeTypeName,
    maîtrises: Map<CompetenceName, number>
  ) {
    this.Nom = nom;
    this.Description = description;
    this.Type = ServiceAptitude.findAptTypeByName(typeName);
    this.MaîtrisesRequise = maîtrises;
  }

  get NiveauDeMaîtrise(): number {
    return Array.from(this.MaîtrisesRequise.values()).reduce(
      (acc, curr) => acc + curr
    );
  }
}
