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
  PV = "Point de vie",
  REFLEXES = "Réflexes",
  ÉSOTÉRISME = "Ésotérisme", //TODO : Remplacer par Sprithium ?
  RÉCUPÉRATION = "Récupération",
  INITIATIVE = "Initiative",
}

export class AttributService {
  private static AttributsList: Array<Attribut> = [
    {
      Nom: AttributsName.PV,
      Description:
        "Votre maximum de PV est égal à 3 fois la Vigueur + 4. Vous ajoutez 1d4 PV à votre maximum par niveau supplémentaire après le niveau 1.",
      Icon: mdiHeart,
    },

    {
      Nom: AttributsName.REFLEXES,
      Description:
        "Vous recevez 1 dé de réflexe (d6) votre par point d'Agilité. Avec votre équipement, ils constituent votre principale défense.",
      Icon: mdiShieldHalfFull,
    },

    {
      Nom: AttributsName.INITIATIVE,
      Description:
        "Vous avez 1 dé d'initiative (d6) par point d'Agilité et par niveau. Ils déterminent votre réactivité lors des situations de stress.",
      Icon: mdiArrowUp,
    },

    {
      Nom: AttributsName.ÉSOTÉRISME,
      Description:
        "Vous avez autant de dé d'ésotérisme (d6) que la somme de votre Intelligence et votre Charisme. Ils qualifient votre lien avec le fluide et la puissance que vous pouvez en tirer.",
      Icon: mdiLightningBolt,
    },
    {
      Nom: AttributsName.RÉCUPÉRATION,
      Description:
        "Vous avez 1 dé de vie (d4) par point de Vigueur et par niveau. Ils vous permettent de vous soigner.",
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
