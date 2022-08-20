/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { heart, heartCircle, flash, shieldHalf } from "ionicons/icons";

export type Attribut = {
  Nom: AttributsName;
  Description: string;
  Icon: string;
};

export enum AttributsName {
  PV = "PV",
  DEFENSE = "DEFENSE",
  STRESS = "STRESS",
  RESILIENCE = "RESILIENCE",
}

export class AttributService {
  private static AttributsList: Array<Attribut> = [
    {
      Nom: AttributsName.PV,
      Description: "Votre maximum de PV est egal à 3 fois la Vigueur + 5",
      Icon: heart,
    },

    {
      Nom: AttributsName.DEFENSE,
      Description:
        "Vous avez 1 point de Défense par point d'Agilité, en plus des bonus de l'équipement",
      Icon: shieldHalf,
    },

    {
      Nom: AttributsName.STRESS,
      Description: "Votre seuil de stress est égale a Intelligence + Charisme",
      Icon: flash,
    },
    {
      Nom: AttributsName.RESILIENCE,
      Description: "Vous avez 1 point de Résiliance par point de Vigueur",
      Icon: heartCircle,
    },
  ];

  static getAttributsByNames(names: Array<AttributsName>) {
    return this.AttributsList.filter((a) => names.includes(a.Nom));
  }
}
