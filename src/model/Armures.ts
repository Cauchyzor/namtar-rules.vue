import { CaracteritiqueName } from "./Caracteristique";
import { Equipement } from "./Equipement";

export interface ArmureItem extends Equipement {
  Defense: number;
  Special: Array<string>;
}

export class ArmureService {
  private static ArmureItems: Array<ArmureItem> = [
    {
      Nom: "Ceinture multi-usage",
      Encombrement: 1,
      Rarete: 1,
      Description:
        "Permet un accès rapide sur des objets de 1 d'encombrement ou moins. Maximum 4 emplacements.",
      Prix: 50,
      Defense: 0,
      Special: [],
    },
    {
      Nom: "Cartouchière",
      Encombrement: 1,
      Rarete: 1,
      Description:
        "Accès rapides sur des celulles d'énergies ou des munitions. Maximum 8 d'encombrement",
      Prix: 50,
      Defense: 0,
      Special: [],
    },
    {
      Nom: "Armures legères",
      Encombrement: 3,
      Rarete: 2,
      Description:
        "Ensemble avec une veste et un pantalon renforcé avec des plaques de metal. Sommaire et bon marché",
      Prix: 50,
      Defense: 1,
      Special: [],
    },
    {
      Nom: "Combinaison spaciale",
      Encombrement: 3,
      Rarete: 3,
      Description:
        "Ensemble avec une veste et un pantalon renforcé avec des plaques de metal. Sommaire et bon marché",
      Prix: 450,
      Defense: 1,
      Special: ["La combinaisons peut être scéllée pour resister au vide"],
    },
    {
      Nom: "Vêtements banals",
      Encombrement: 2,
      Rarete: 1,
      Description:
        "Ensemble avec une veste et un pantalon dans un tissus lourd ou du cuir parfois. Sommaire et bon marché",
      Prix: 100,
      Defense: 0,
      Special: ["La combinaisons peut être scéllée pour resister au vide"],
    },
    {
      Nom: "Vêtements renforcés",
      Encombrement: 3,
      Rarete: 3,
      Description:
        "Ensemble corps complet contenant des plaques de métal habilement réparties, entres les coutures, aux endroits les plus exposés sans pour autant trop gêner le porteur",
      Prix: 2000,
      Defense: 2,
      Special: [],
    },
    {
      Nom: "Armure matelassée",
      Encombrement: 5,
      Rarete: 3,
      Description:
        "Larges bande de tissus et de metal assemblée sous forme de cuirrasse pour fournir une bonnes protections",
      Prix: 800,
      Defense: 2,
      Special: [
        `Le score d'${CaracteritiqueName.AGILITE} est limité à 4 pour tous les tests`,
      ],
    },
    {
      Nom: "Cuirasse métalique",
      Encombrement: 5,
      Rarete: 5,
      Description:
        "Armure lourde mais capable de résister au assaut les plus violants",
      Prix: 4000,
      Defense: 3,
      Special: [
        `Le score d'${CaracteritiqueName.AGILITE} est limité à 4 pour tous les tests`,
      ],
    },
    {
      Nom: "Armure lourde scellée",
      Encombrement: 8,
      Rarete: 8,
      Description:
        "Ensemble scellé d'enormes plaques de metales ouvragée pour acqueillir un humanoïde, équipé d'un systeme de filtration de l'air. Généralement réservée à des troupes militaires fortunées pour des abordages spatiaux.",
      Prix: 15000,
      Defense: 4,
      Special: [
        `Le score d'${CaracteritiqueName.AGILITE} est limité à 3 pour tous les tests`,
        "Résistant aux armes énergetiques",
      ],
    },
  ];

  static getAllArmureItems() {
    return this.ArmureItems;
  }
}
