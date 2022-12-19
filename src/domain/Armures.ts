import { EquipementItem } from './Equipement';

export interface ArmureItem extends EquipementItem {
  Defense: number;
  Special: Array<string>;
}
