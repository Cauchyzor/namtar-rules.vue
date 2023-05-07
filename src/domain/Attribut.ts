/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  mdiShieldHalfFull,
  mdiHeart,
  mdiLightningBolt,
  mdiHeartCircleOutline,
} from '@mdi/js';

export type Attribut = {
  Nom: AttributsName;
  Description: string;
  Icon: string;
};

export enum AttributsName {
  PV = 'PV',
  DEFENSE = 'DEFENSE',
  STRESS = 'STRESS',
  RESILIENCE = 'RESILIENCE',
}

export class AttributService {
  private static AttributsList: Array<Attribut> = [
    {
      Nom: AttributsName.PV,
      Description: 'Votre maximum de PV est egal à 3 fois la Vigueur + 5',
      Icon: mdiHeart,
    },

    {
      Nom: AttributsName.DEFENSE,
      Description: "Vous avez 1 point de Défense par point d'Agilité.",
      Icon: mdiShieldHalfFull,
    },

    {
      Nom: AttributsName.STRESS,
      Description: 'Votre seuil de stress est égale à Intelligence + Charisme',
      Icon: mdiLightningBolt,
    },
    {
      Nom: AttributsName.RESILIENCE,
      Description: 'Vous avez 1 point de Résiliance par point de Vigueur',
      Icon: mdiHeartCircleOutline,
    },
  ];

  static getAttributsByNames(names: Array<AttributsName>) {
    return this.AttributsList.filter((a) => names.includes(a.Nom));
  }
}
