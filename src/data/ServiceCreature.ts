import { AttributsName } from "src/model/Attribut";
import { CaracteritiqueName } from "src/model/Caracteristique";
import { CompetenceName } from "src/model/Competence";
import { Creature } from "src/model/Creature";
import { ServiceAptitude } from "./ServiceAptitude";
import { ServiceArme } from "./ServiceArme";

export class ServiceCreature {
  private static Types: Array<Creature> = [
    new Creature(
      "Drone de pacification létale ESS1",
      1,
      new Map([
        [CaracteritiqueName.VIGUEUR, 1],
        [CaracteritiqueName.AGILITE, 3],
        [CaracteritiqueName.ADRESSE, 4],
        [CaracteritiqueName.INTELLIGENCE, 2],
        [CaracteritiqueName.CHARISME, 1],
      ]),
      new Map([
        [AttributsName.INITIATIVE, "3"],
        [AttributsName.PV, "7 + 2d4"],
        [AttributsName.RECUPERATION, "3d4"],
        [AttributsName.REFLEXES, "3d6"],
        [AttributsName.STRESS, "3"],
      ]),
      new Map([
        [CompetenceName.INGENIERIE, 1],
        [CompetenceName.ARME_A_DISTANCE, 2],
        [CompetenceName.VIGILANCE, 2],
      ]),
      ServiceAptitude.findAptitudesByNames(["Équilibrage"]),
      ServiceArme.findArmesByNames(["Pacificateur"])
    ),
  ];
}
