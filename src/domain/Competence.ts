/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { CaracteritiqueName } from "./Caracteristique";

export type Competence = {
  Nom: CompetenceName;
  BaseCaracteristique: CaracteritiqueName;
};

export enum CompetenceName {
  ATHLETISME = "Athlétisme",
  CORPS_A_CORPS = "Corps à corps",
  PUGILAT = "Pugilat",
  COORDINATION = "Coordination",
  PILOTAGE = "Pilotage",
  ARME_A_ENERGIE = "Arme à energie",
  CONNAISSANCE_HISTOIRE = "Connaissance - Histoire",
  CONNAISSANCE_CULTES = "Connaissance - Cultes",
  MEDECINE = "Médecine",
  SURVIE = "Survie",
  INGENIERIE = "Ingénierie",
  EVOCATION = "Evocation",
  CHARME = "Charme",
  NEGOCIATION = "Négociation",
  TROMPERIE = "Tromperie",
  PERSPICACITE = "Prespicacité",
  ALTERATION = "Altération",
  INTIMIDATION = "Intimidation",
}

export class CompetenceService {
  private static CompetencesList: Array<Competence> = [
    {
      Nom: CompetenceName.ATHLETISME,
      BaseCaracteristique: CaracteritiqueName.VIGUEUR,
    },
    {
      Nom: CompetenceName.CORPS_A_CORPS,
      BaseCaracteristique: CaracteritiqueName.VIGUEUR,
    },
    {
      Nom: CompetenceName.PUGILAT,
      BaseCaracteristique: CaracteritiqueName.VIGUEUR,
    },
    {
      Nom: CompetenceName.COORDINATION,
      BaseCaracteristique: CaracteritiqueName.AGILITE,
    },
    {
      Nom: CompetenceName.PILOTAGE,
      BaseCaracteristique: CaracteritiqueName.AGILITE,
    },
    {
      Nom: CompetenceName.ARME_A_ENERGIE,
      BaseCaracteristique: CaracteritiqueName.AGILITE,
    },
    {
      Nom: CompetenceName.CONNAISSANCE_HISTOIRE,
      BaseCaracteristique: CaracteritiqueName.INTELLIGENCE,
    },
    {
      Nom: CompetenceName.CONNAISSANCE_CULTES,
      BaseCaracteristique: CaracteritiqueName.INTELLIGENCE,
    },
    {
      Nom: CompetenceName.MEDECINE,
      BaseCaracteristique: CaracteritiqueName.INTELLIGENCE,
    },
    {
      Nom: CompetenceName.SURVIE,
      BaseCaracteristique: CaracteritiqueName.INTELLIGENCE,
    },

    {
      Nom: CompetenceName.INGENIERIE,
      BaseCaracteristique: CaracteritiqueName.INTELLIGENCE,
    },
    {
      Nom: CompetenceName.EVOCATION,
      BaseCaracteristique: CaracteritiqueName.INTELLIGENCE,
    },
    {
      Nom: CompetenceName.CHARME,
      BaseCaracteristique: CaracteritiqueName.CHARISME,
    },
    {
      Nom: CompetenceName.NEGOCIATION,
      BaseCaracteristique: CaracteritiqueName.CHARISME,
    },
    {
      Nom: CompetenceName.TROMPERIE,
      BaseCaracteristique: CaracteritiqueName.CHARISME,
    },
    {
      Nom: CompetenceName.PERSPICACITE,
      BaseCaracteristique: CaracteritiqueName.CHARISME,
    },

    {
      Nom: CompetenceName.ALTERATION,
      BaseCaracteristique: CaracteritiqueName.CHARISME,
    },
    {
      Nom: CompetenceName.INTIMIDATION,
      BaseCaracteristique: CaracteritiqueName.CHARISME,
    },
  ];
  /**
   *
   * @param name List all competences with this Caracteristique by default
   * @returns
   */
  static getCompetencesByCaracteristique(name: CaracteritiqueName) {
    return this.CompetencesList.filter((c) => c.BaseCaracteristique === name);
  }
  /**
   * Returne all Competences with info
   * @returns
   */
  static getAllCompetences() {
    return this.CompetencesList;
  }
}
