/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  mdiShieldHalfFull,
  mdiHeart,
  mdiLightningBolt,
  mdiHeartCircleOutline,
  mdiArrowUp,
  mdiArrowRightBold,
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
  DV = "Dès de vie",
  INITIATIVE = "Initiative",
  DÉPLACEMENT = "Déplacement",
}

export class AttributService {
  private static AttributsList: Array<Attribut> = [
    {
      Nom: AttributsName.PV,
      Description:
        "Il représente votre résistance fasse aux agression avant d'être hors combat. Vous avez au total 4 + 3 point de vie supplémentaire par point de Vigueur. Vous gagnez aussi 1d4 PV par niveau supplémentaire après le niveau 1.",
      Icon: mdiHeart,
    },

    {
      Nom: AttributsName.REFLEXES,
      Description:
        "Avec votre équipement, ils constituent votre principale défense. Vous ajoutez 1d6 à votre pool de dés de réflexes par point en Agilité. ",
      Icon: mdiShieldHalfFull,
    },

    {
      Nom: AttributsName.INITIATIVE,
      Description:
        "Determine votre réactivité lors des situations de stress. Vous ajoutez 1d6 votre pool de dés d'initiative par point en Agilité et par niveau.",
      Icon: mdiArrowUp,
    },

    {
      Nom: AttributsName.ÉSOTÉRISME,
      Description:
        "Qualifie votre lien avec le fluide et la puissance que vous pouvez en tirer. Vous gagnez 1d6 à votre pool de dés d’ésotérisme par point en Intelligence et en Charisme.",
      Icon: mdiLightningBolt,
    },
    {
      Nom: AttributsName.DV,
      Description:
        "Ils représente votre capacité de récupération et permettent de vous soigner. Vous gagnez 1d4 à votre pool de dés de vie par point de Vigueur et par niveau.",
      Icon: mdiHeartCircleOutline,
    },
    {
      Nom: AttributsName.DÉPLACEMENT,
      Description:
        "C'est la distance que vous pouvez parcourir lorsque vous choisissez l'action de se déplacer en situation de stress. Elle augmente avec des aptitudes. Par défaut, vous pouvez vous déplacer de 3 m par action.",
      Icon: mdiArrowRightBold,
    },
  ];

  static getAttributesMap() {
    const atrMap = new Map<AttributsName, Attribut>();
    this.AttributsList.forEach((atr) => atrMap.set(atr.Nom, atr));
    return atrMap;
  }

  static findAttributsByNames(names: Array<AttributsName>) {
    return this.AttributsList.filter((a) => names.includes(a.Nom));
  }

  static findAttributeIcon(name: AttributsName) {
    return this.AttributsList.find((attr) => attr.Nom == name)?.Icon || "";
  }
}
