import { ArmureItem } from "src/model/Armures";
import { CaracteristiqueName } from "src/model/Caracteristique";

export class ServiceArmure {
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
        "Accès rapides sur des cellules d'énergies ou des munitions. Maximum 8 d'encombrement",
      Prix: 50,
      Defense: 0,
      Special: [],
    },
    {
      Nom: "Armures légères",
      Encombrement: 3,
      Rarete: 2,
      Description:
        "Ensemble avec une veste et un pantalon renforcé avec des plaques de metal. Sommaire et bon marché",
      Prix: 50,
      Defense: 1,
      Special: [],
    },
    {
      Nom: "Combinaison spacial",
      Encombrement: 3,
      Rarete: 3,
      Description:
        "Ensemble avec une veste et un pantalon renforcé avec des plaques de metal. Sommaire et bon marché",
      Prix: 450,
      Defense: 1,
      Special: ["La combinaisons peut être scellée pour resister au vide"],
    },
    {
      Nom: "Vêtements banals",
      Encombrement: 2,
      Rarete: 1,
      Description:
        "Ensemble avec une veste et un pantalon dans un tissus lourd ou du cuir parfois. Sommaire et bon marché",
      Prix: 100,
      Defense: 0,
      Special: ["La combinaisons peut être scellée pour resister au vide"],
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
        "Larges bande de tissus et de metal assemblée sous forme de cuirasse pour fournir une bonnes protections",
      Prix: 800,
      Defense: 2,
      Special: [
        `Le score d'${CaracteristiqueName.AGILITE} est limité à 4 pour tous les tests`,
      ],
    },
    {
      Nom: "Cuirasse métallique",
      Encombrement: 5,
      Rarete: 5,
      Description:
        "Armure lourde mais capable de résister au assaut les plus violant",
      Prix: 4000,
      Defense: 3,
      Special: [
        `Le score d'${CaracteristiqueName.AGILITE} est limité à 4 pour tous les tests`,
      ],
    },
    {
      Nom: "Armure lourde scellée",
      Encombrement: 8,
      Rarete: 8,
      Description:
        "Ensemble scellé d’énormes plaques de metals ouvragées pour accueillir un humanoïde, équipé d'un système de filtration de l'air. Généralement réservée à des troupes militaires fortunées pour des abordages spatiaux.",
      Prix: 15000,
      Defense: 4,
      Special: [
        `Le score d'${CaracteristiqueName.AGILITE} est limité à 3 pour tous les tests`,
        "Résistant aux armes énergétiques",
      ],
    },
  ];

  static getAllArmureItems() {
    return this.ArmureItems;
  }
  static findArmuresByNames(names: Array<string>) {
    return this.getAllArmureItems().filter((armure) =>
      names.includes(armure.Nom)
    );
  }
}
