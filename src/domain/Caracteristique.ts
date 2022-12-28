/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Attribut, AttributService, AttributsName } from './Attribut';

export type Caracteristique = {
  Nom: CaracteritiqueName;
  Description: string;
  Attributs: Array<Attribut>;
};

export enum CaracteritiqueName {
  VIGUEUR = 'Vigueur',
  AGILITE = 'Agilité',
  INTELLIGENCE = 'Intelligence',
  CHARISME = 'Charisme',
}

export class CaracteristiqueService {
  private static CaracteristiquesList: Array<Caracteristique> = [
    {
      Nom: CaracteritiqueName.VIGUEUR,
      Description:
        'Traduit la force, la musculature, la vitalité et la robustesse physique',
      Attributs: AttributService.getAttributsByNames([
        AttributsName.PV,
        AttributsName.RESILIENCE,
      ]),
    },
    {
      Nom: CaracteritiqueName.AGILITE,
      Description:
        "Determine la souplesse, la finesse dans les mouvement et l'adresse.",
      Attributs: AttributService.getAttributsByNames([AttributsName.DEFENSE]),
    },
    {
      Nom: CaracteritiqueName.INTELLIGENCE,
      Description:
        "Mesure la capacité de raisonnement, la mémoire et la sagesse d'un personnage.",
      Attributs: AttributService.getAttributsByNames([AttributsName.STRESS]),
    },
    {
      Nom: CaracteritiqueName.CHARISME,
      Description:
        "Représente la force de caractère, l'assurance et la subtilité du personnage dans sa communication.",
      Attributs: AttributService.getAttributsByNames([AttributsName.STRESS]),
    },
  ];

  static getAllCaracteristiques() {
    return this.CaracteristiquesList;
  }

  static getCaracteristique(name: CaracteritiqueName) {
    return this.CaracteristiquesList.find((c) => c.Nom === name);
  }
}
