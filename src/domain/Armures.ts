import { EquipementItem } from './Equipement';

export interface ArmureItem extends EquipementItem {
  Defense: number;
  Special: Array<string>;
}

export class ArmureService {
  private static EquipementItems: Array<ArmureItem> = [
    {
      Nom: 'Ceinture multi-usage',
      Encombrement: 1,
      Rarete: 1,
      Description: "Permet d'éclairer une large zone autour du porteur",
      Prix: 50,
      Defense: 0,
      Special: [],
    },
    {
      Nom: 'Cartouchière',
      Encombrement: 1,
      Rarete: 1,
      Description:
        "Accès rapides sur des celulles ou munitions jusquà 8 d'encombrement",
      Prix: 50,
      Defense: 0,
      Special: [],
    },
    {
      Nom: 'Armures legères',
      Encombrement: 1,
      Rarete: 1,
      Description:
        'Ensemble avec une veste et un pantalon renforcé avec des plaques de metal. Sommaire et bon marché',
      Prix: 50,
      Defense: 1,
      Special: [],
    },
  ];

  static getAllEquipementItems() {
    return this.EquipementItems;
  }
}
