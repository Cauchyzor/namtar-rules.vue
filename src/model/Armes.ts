import { CompetenceName } from "./Competence";
import { Equipement } from "./Equipement";

export interface Arme extends Equipement {
  Degats: string;
  Special: Array<string>;
  Competence: CompetenceName;
}

export interface ArmeDistanceItem extends Arme {
  Munition: string;
  PorteMax: string;
}
