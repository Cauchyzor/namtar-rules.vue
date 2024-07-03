import { AttributsName } from "src/model/Attribut";
import { CaracteristiqueName } from "src/model/Caracteristique";
import { CompetenceName } from "src/model/Competence";
import { Creature } from "src/model/Creature";
import { ServiceAptitude } from "./ServiceAptitude";
import { ServiceArme } from "./ServiceArme";
import { ServiceArmure } from "./ServiceArmure";

export class ServiceCreature {
  private static Types: Array<Creature> = [
    new Creature(
      "Drone de pacification létale ESS1",
      1,
      new Map([
        [CaracteristiqueName.VIGUEUR, 1],
        [CaracteristiqueName.AGILITE, 3],
        [CaracteristiqueName.ADRESSE, 4],
        [CaracteristiqueName.INTELLIGENCE, 2],
        [CaracteristiqueName.CHARISME, 1],
      ]),
      new Map([
        [AttributsName.INITIATIVE, "3"],
        [AttributsName.PV, "7 + 2d4"],
        [AttributsName.DV, "3d4"],
        [AttributsName.REFLEXES, "3d6"],
        [AttributsName.ÉSOTÉRISME, "3"],
      ]),
      new Map([
        [CompetenceName.INGÉNIERIE, 1],
        [CompetenceName.ARME_A_DISTANCE, 2],
        [CompetenceName.VIGILANCE, 2],
      ]),
      ServiceAptitude.findAptitudesByNames(["Équilibrage"]),
      ServiceArme.findArmesByNames(["Pacificateur"])
    ),
    new Creature(
      "Goule de Namtar",
      1,
      new Map([
        [CaracteristiqueName.VIGUEUR, 3],
        [CaracteristiqueName.AGILITE, 3],
        [CaracteristiqueName.ADRESSE, 2],
        [CaracteristiqueName.INTELLIGENCE, 1],
        [CaracteristiqueName.CHARISME, 1],
      ]),
      new Map([
        [AttributsName.INITIATIVE, "3"],
        [AttributsName.PV, "12 + 2d4"],
        [AttributsName.DV, "3d4"],
        [AttributsName.REFLEXES, "3d6"],
        [AttributsName.ÉSOTÉRISME, "2d6"],
      ]),
      new Map([
        [CompetenceName.CORPS_A_CORPS, 1],
        [CompetenceName.ENTROPIE_DU_FLUIDE, 1],
        [CompetenceName.VIGILANCE, 1],
      ]),
      ServiceAptitude.findAptitudesByNames([
        "Echophagie",
        "Morsure de Namtar",
        "Griffe dimensionnelle",
      ]),
      ServiceArme.findArmesByNames([])
    ),
    // TODO : Il manque des compétences
    new Creature(
      "Garde Imperial",
      4,
      new Map([
        [CaracteristiqueName.VIGUEUR, 4],
        [CaracteristiqueName.AGILITE, 3],
        [CaracteristiqueName.ADRESSE, 4],
        [CaracteristiqueName.INTELLIGENCE, 2],
        [CaracteristiqueName.CHARISME, 2],
      ]),
      new Map([
        [AttributsName.INITIATIVE, "4"],
        [AttributsName.PV, "16 + 7d4"],
        [AttributsName.DV, "8d4"],
        [AttributsName.REFLEXES, "4d6"],
        [AttributsName.ÉSOTÉRISME, "4d6"],
      ]),
      new Map([
        [CompetenceName.CORPS_A_CORPS, 1],
        [CompetenceName.ARME_A_DISTANCE, 2],
        [CompetenceName.ATHLÉTISME, 1],
        [CompetenceName.VIGILANCE, 1],
      ]),
      ServiceAptitude.findAptitudesByNames([
        "Concentration",
        "Ruée",
        "En joue",
        "Entraînement au tir",
      ]),
      ServiceArme.findArmesByNames(["Fusil d'assaut"]),
      ServiceArmure.findArmuresByNames([
        "Armure lourde scellée",
        "Cartouchière",
        "Ceinture multi-usage",
      ])
    ),
    new Creature(
      "La Sentinelle Vorace",
      5,
      new Map([
        [CaracteristiqueName.VIGUEUR, 8],
        [CaracteristiqueName.AGILITE, 3],
        [CaracteristiqueName.ADRESSE, 4],
        [CaracteristiqueName.INTELLIGENCE, 2],
        [CaracteristiqueName.CHARISME, 5],
      ]),
      new Map([
        [AttributsName.INITIATIVE, "3"],
        [AttributsName.PV, "28 + 12d4"],
        [AttributsName.DV, "13d4"],
        [AttributsName.REFLEXES, "3d6"],
        [AttributsName.ÉSOTÉRISME, "7d6"],
      ]),
      new Map([
        [CompetenceName.CORPS_A_CORPS, 1],
        [CompetenceName.ENTROPIE_DU_FLUIDE, 2],
        [CompetenceName.DISCRETION, 1],
        [CompetenceName.VIGILANCE, 1],
      ]),
      ServiceAptitude.findAptitudesByNames(["Griffe dimensionnelle"]),
      ServiceArme.findArmesByNames([]),
      ServiceArmure.findArmuresByNames([])
    ),
  ];
}
