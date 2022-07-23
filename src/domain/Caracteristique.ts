import { Attribut, ATTRIBUTS } from "./Attribut";

export type Caracteristique = {
  Nom: string;
  Description: string;
  Attributs: Array<Attribut>;
};

export const CARACTERISTIQUES = Object.freeze({
  VIGUEUR: {
    Nom: "Vigueur",
    Description:
      "Traduit la force, la musculature, la vitalité et la robustesse physique",
    Attributs: [ATTRIBUTS.PV, ATTRIBUTS.RESILIENCE],
  },
  AGILITE: {
    Nom: "Agilité",
    Description:
      "Determine la souplesse, la finesse dans les mouvement et l'adresse.",
    Attributs: [ATTRIBUTS.DEFENSE],
  },
  INTELLIGENCE: {
    Nom: "Intelligence",
    Description:
      "Mesure la capacitée de raisonnement, la mémoire et la sagesse d'un personnage.",
    Attributs: [ATTRIBUTS.STRESS],
  },
  CHARISME: {
    Nom: "Charisme",
    Description:
      "Mesure la capacitée de raisonnement, la mémoire et la sagesse d'un personnage.",
    Attributs: [ATTRIBUTS.STRESS],
  },
});
