export type Attribut = {
  Nom: string;
  Description: string;
};

export const ATTRIBUTS = Object.freeze({
  PV: {
    Nom: "PV",
    Description: "Votre maximum de PV est egal à 10 + Vigueur",
  },
  DEFENSE: {
    Nom: "Défense",
    Description: "Vous avez 1 point de Défence par point d'Agilité",
  },
  STRESS: {
    Nom: "Stress",
    Description: "Votre seuil de stress est égale a Intelligence + Charisme",
  },
  RESILIENCE: {
    Nom: "Résilience",
    Description: "Vous avez 1 point de Résiliance par point de Vigueur",
  },
});
