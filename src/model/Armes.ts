import { CompetenceName } from "./Competence";
import { Equipement } from "./Equipement";

export interface Arme extends Equipement {
  Dégâts: string;
  Special: Array<string>;
  Competence: CompetenceName;
}

export interface ArmeDistanceItem extends Arme {
  Munition: string;
  PorteMax: string;
}
