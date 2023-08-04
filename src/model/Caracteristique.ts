/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Attribut, AttributService, AttributsName } from "./Attribut";

export type Caracteristique = {
  Nom: CaracteritiqueName;
  Description: string;
  Attributs: Array<Attribut>;
};

export enum CaracteritiqueName {
  VIGUEUR = "Vigueur",
  AGILITE = "Agilité",
  ADRESSE = "Adresse",
  INTELLIGENCE = "Intelligence",
  CHARISME = "Charisme",
}

export class CaracteristiqueService {
  private static CaracteristiquesList: Array<Caracteristique> = [
    {
      Nom: CaracteritiqueName.VIGUEUR,
      Description:
        "Traduit la force, la musculature, la vitalité et la robustesse physique",
      Attributs: AttributService.findAttributsByNames([
        AttributsName.PV,
        AttributsName.RESILIENCE,
      ]),
    },
    {
      Nom: CaracteritiqueName.AGILITE,
      Description: "Determine la souplesse et la vivacité des mouvements.",
      Attributs: AttributService.findAttributsByNames([
        AttributsName.REFLEXES,
        AttributsName.INITIATIVE,
      ]),
    },
    {
      Nom: CaracteritiqueName.ADRESSE,
      Description:
        "Représente la précision et le contrôle des mouvements subtiles.",
      Attributs: AttributService.findAttributsByNames([]),
    },
    {
      Nom: CaracteritiqueName.INTELLIGENCE,
      Description:
        "Mesure la capacité de raisonnement, la mémoire et la sagesse d'un personnage.",
      Attributs: AttributService.findAttributsByNames([AttributsName.STRESS]),
    },
    {
      Nom: CaracteritiqueName.CHARISME,
      Description:
        "Représente la force de caractère, l'assurance et la subtilité du personnage dans sa communication.",
      Attributs: AttributService.findAttributsByNames([AttributsName.STRESS]),
    },
  ];

  static getAllCaracteristiques() {
    return this.CaracteristiquesList;
  }

  static getCaracteristique(name: CaracteritiqueName) {
    return this.CaracteristiquesList.find((c) => c.Nom === name);
  }
}
