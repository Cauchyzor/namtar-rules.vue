import { Equipement } from "./Equipement";

export interface ArmureItem extends Equipement {
  Defense: number;
  Special: Array<string>;
}
