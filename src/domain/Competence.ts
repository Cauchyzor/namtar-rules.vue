import { Caracteristique, CARACTERISTIQUES } from "./Caracteristique";

export type Competence = {
  Nom: string;
  BaseCaracteristique: Caracteristique;
};

export const COMPETENCES = Object.freeze({
  ATHLETISME: {
    Nom: "Athletisme",
    BaseCaracteristique: CARACTERISTIQUES.VIGUEUR,
  },
  CORPS_A_CORPS: {
    Nom: "Corps à Corps",
    BaseCaracteristique: CARACTERISTIQUES.VIGUEUR,
  },
  PUGILAT: {
    Nom: "Pugilat",
    BaseCaracteristique: CARACTERISTIQUES.VIGUEUR,
  },
  COORDINATION: {
    Nom: "Coordination",
    BaseCaracteristique: CARACTERISTIQUES.AGILITE,
  },
  PILOTAGE: {
    Nom: "Pilotage",
    BaseCaracteristique: CARACTERISTIQUES.AGILITE,
  },
  ARME_A_ENERGIE: {
    Nom: "Arme à énergie",
    BaseCaracteristique: CARACTERISTIQUES.AGILITE,
  },
  CONNAISSANCE_HISTOIRE: {
    Nom: "Connaissance - Histoire",
    BaseCaracteristique: CARACTERISTIQUES.INTELLIGENCE,
  },
  CONNAISSANCE_CULTES: {
    Nom: "Connaissance - Cultes",
    BaseCaracteristique: CARACTERISTIQUES.INTELLIGENCE,
  },
  MEDECINE: {
    Nom: "Médecine",
    BaseCaracteristique: CARACTERISTIQUES.INTELLIGENCE,
  },
  SURVIE: {
    Nom: "Survie",
    BaseCaracteristique: CARACTERISTIQUES.INTELLIGENCE,
  },
  INGENIERIE: {
    Nom: "Ingénierie",
    BaseCaracteristique: CARACTERISTIQUES.INTELLIGENCE,
  },
  EVOCATION: {
    Nom: "Evocation",
    BaseCaracteristique: CARACTERISTIQUES.INTELLIGENCE,
  },
  CHARME: {
    Nom: "Charme",
    BaseCaracteristique: CARACTERISTIQUES.CHARISME,
  },
  NEGOCIATION: {
    Nom: "Négociation",
    BaseCaracteristique: CARACTERISTIQUES.CHARISME,
  },
  TROMPERIE: {
    Nom: "Tromperie",
    BaseCaracteristique: CARACTERISTIQUES.CHARISME,
  },
  PERSPICACITE: {
    Nom: "Perspicacité",
    BaseCaracteristique: CARACTERISTIQUES.CHARISME,
  },
  ALTERATION: {
    Nom: "Altération",
    BaseCaracteristique: CARACTERISTIQUES.CHARISME,
  },
  Intimidation: {
    Nom: "Intimidation",
    BaseCaracteristique: CARACTERISTIQUES.CHARISME,
  },
});
