import { CompetenceName } from "./Competence";
import { Equipement } from "./Equipement";

export interface Arme extends Equipement {
  Degats: string;
  Special: Array<string>;
  Competence: CompetenceName;
}

export enum NiveauPorte {
  ENGAGE = "Engagé",
  COURTE = "Courte",
  MOYENNE = "Moyenne",
  LONGUE = "Longue",
  EXTREME = "Extrême",
}

export interface ArmeDistanceItem extends Arme {
  Munition: string;
  PorteMax: NiveauPorte;
}
