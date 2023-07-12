/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  mdiShieldHalfFull,
  mdiHeart,
  mdiLightningBolt,
  mdiHeartCircleOutline,
  mdiArrowUp,
} from "@mdi/js";

export type Attribut = {
  Nom: AttributsName;
  Description: string;
  Icon: string;
};

export enum AttributsName {
  PV = "PV",
  REFLEXES = "REFLEXES",
  STRESS = "STRESS",
  RESILIENCE = "RESILIENCE",
  INITIATIVE = "INITIATIVE",
}

export class AttributService {
  private static AttributsList: Array<Attribut> = [
    {
      Nom: AttributsName.PV,
      Description:
        "Votre maximum de PV est egal à 3 fois la Vigueur + 4 + 1d4 par niveau supplémentaire après le niveau 1. ",
      Icon: mdiHeart,
    },

    {
      Nom: AttributsName.REFLEXES,
      Description: "Vous avez 1 point de Réflexes par point d'Agilité.",
      Icon: mdiShieldHalfFull,
    },

    {
      Nom: AttributsName.INITIATIVE,
      Description:
        "Vous avez 1 point d'initiative par point d'Agilité et par niveau.",
      Icon: mdiArrowUp,
    },

    {
      Nom: AttributsName.STRESS,
      Description: "Votre seuil de stress est égale à Intelligence + Charisme",
      Icon: mdiLightningBolt,
    },
    {
      Nom: AttributsName.RESILIENCE,
      Description: "Vous avez 1 point de Résiliance par point de Vigueur",
      Icon: mdiHeartCircleOutline,
    },
  ];

  static getAttributsByNames(names: Array<AttributsName>) {
    return this.AttributsList.filter((a) => names.includes(a.Nom));
  }
}
