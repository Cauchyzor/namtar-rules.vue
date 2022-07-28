import { heart, heartCircle, flash, shieldHalf } from "ionicons/icons";

export type Attribut = {
  Nom: string;
  Description: string;
};

export const ATTRIBUTS = Object.freeze({
  PV: {
    Nom: "PV",
    Description: "Votre maximum de PV est egal à 3 fois la Vigueur + 5",
    Icon: heart
  },
  DEFENSE: {
    Nom: "Défense",
    Description: "Vous avez 1 point de Défense par point d'Agilité, en plus des bonus de l'équipement",
    Icon: shieldHalf
  },
  STRESS: {
    Nom: "Stress",
    Description: "Votre seuil de stress est égale a Intelligence + Charisme",
    Icon: flash
  },
  RESILIENCE: {
    Nom: "Résilience",
    Description: "Vous avez 1 point de Résiliance par point de Vigueur",
    Icon: heartCircle
  },
});
