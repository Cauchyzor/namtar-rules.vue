/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Attribut, AttributService, AttributsName } from "./Attribut";

export type Caracteristique = {
  Nom: CaracteristiqueName;
  Description: string;
  Attributs: Array<Attribut>;
};

export enum CaracteristiqueName {
  VIGUEUR = "Vigueur",
  AGILITE = "Agilité",
  ADRESSE = "Adresse",
  INTELLIGENCE = "Intelligence",
  CHARISME = "Charisme",
}

export class CaracteristiqueService {
  private static CaracteristiquesList: Array<Caracteristique> = [
    {
      Nom: CaracteristiqueName.VIGUEUR,
      Description:
        "Traduit la force, la musculature, la vitalité et la robustesse physique",
      Attributs: AttributService.findAttributsByNames([
        AttributsName.PV,
        AttributsName.DV,
      ]),
    },
    {
      Nom: CaracteristiqueName.AGILITE,
      Description: "Determine la souplesse et la vivacité des mouvements.",
      Attributs: AttributService.findAttributsByNames([
        AttributsName.REFLEXES,
        AttributsName.INITIATIVE,
      ]),
    },
    {
      Nom: CaracteristiqueName.ADRESSE,
      Description:
        "Représente la précision et le contrôle des mouvements subtiles.",
      Attributs: AttributService.findAttributsByNames([]),
    },
    {
      Nom: CaracteristiqueName.INTELLIGENCE,
      Description:
        "Mesure la capacité de raisonnement, la mémoire et la sagesse d'un personnage.",
      Attributs: AttributService.findAttributsByNames([
        AttributsName.ÉSOTÉRISME,
      ]),
    },
    {
      Nom: CaracteristiqueName.CHARISME,
      Description:
        "Représente la force de caractère, l'assurance et la subtilité du personnage dans sa communication.",
      Attributs: AttributService.findAttributsByNames([
        AttributsName.ÉSOTÉRISME,
      ]),
    },
  ];

  static getAllCaracteristiques() {
    return this.CaracteristiquesList;
  }

  static getCaracteristique(name: CaracteristiqueName) {
    return this.CaracteristiquesList.find((c) => c.Nom === name);
  }
}
