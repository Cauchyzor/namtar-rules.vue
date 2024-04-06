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
  REFLEXES = "RÉFLEXES",
  STRESS = "STRESS",
  RECUPERATION = "RECUPERATION",
  INITIATIVE = "INITIATIVE",
}

export class AttributService {
  private static AttributsList: Array<Attribut> = [
    {
      Nom: AttributsName.PV,
      Description:
        "Votre maximum de PV est égal à 3 fois la Vigueur + 4 + 1d4 par niveau supplémentaire après le niveau 1.",
      Icon: mdiHeart,
    },

    {
      Nom: AttributsName.REFLEXES,
      Description:
        "Vous ajoutez 1 dés de défense (d6) à vos jet de défense par point d'Agilité.",
      Icon: mdiShieldHalfFull,
    },

    {
      Nom: AttributsName.INITIATIVE,
      Description:
        "Vous avez 1 dé d'initiative (d6) par point d'Agilité et par niveau. Ils sont utilisés lors des jet d'initiative.",
      Icon: mdiArrowUp,
    },

    {
      Nom: AttributsName.STRESS,
      Description: "Votre seuil de stress est égale à Intelligence + Charisme.",
      Icon: mdiLightningBolt,
    },
    {
      Nom: AttributsName.RECUPERATION,
      Description:
        "Vous avez 2 dès de vie (d4) par point de Vigueur et par niveau. Ils vous permettent de vous soigner.",
      Icon: mdiHeartCircleOutline,
    },
  ];

  static findAttributsByNames(names: Array<AttributsName>) {
    return this.AttributsList.filter((a) => names.includes(a.Nom));
  }

  static findAttributeIcon(name: AttributsName) {
    return this.AttributsList.find((attr) => attr.Nom == name)?.Icon || "";
  }
}
