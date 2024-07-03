/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { CaracteristiqueName } from "./Caracteristique";

export type Competence = {
  Nom: CompetenceName;
  BaseCaracteristique: CaracteristiqueName;
  ShortDescription: string;
};

export enum CompetenceName {
  ARME_A_DISTANCE = "Arme à distance",
  ATHLÉTISME = "Athlétisme",
  CHARME = "Charme",
  OCCULTISME = "Occultisme",
  HISTOIRE = "Histoire",
  COORDINATION = "Coordination",
  CORPS_A_CORPS = "Corps à corps",
  DISCRETION = "Discrétion",
  ENTROPIE_DU_FLUIDE = "Entropie du fluide",
  INGÉNIERIE = "Ingénierie",
  INTIMIDATION = "Intimidation",
  MAGOUILLE = "Magouille",
  MÉDECINE = "Médecine",
  NÉGOCIATION = "Négociation",
  PERSPICACITÉ = "Perspicacité",
  PILOTAGE = "Pilotage",
  SURVIE = "Survie",
  TROMPERIE = "Tromperie",
  VIGILANCE = "Vigilance",
}

export class CompetenceService {
  private static CompetencesList: Array<Competence> = [
    {
      Nom: CompetenceName.ARME_A_DISTANCE,
      BaseCaracteristique: CaracteristiqueName.ADRESSE,
      ShortDescription: "Utiliser une arme à distance avec efficacité.",
    },
    {
      Nom: CompetenceName.ATHLÉTISME,
      BaseCaracteristique: CaracteristiqueName.VIGUEUR,
      ShortDescription: "Sauter, grimper, soulever de lourdes charges.",
    },
    {
      Nom: CompetenceName.COORDINATION,
      BaseCaracteristique: CaracteristiqueName.AGILITE,
      ShortDescription:
        "Garder l'équilibre, effectuer des acrobaties, habilité manuelle.",
    },
    {
      Nom: CompetenceName.CORPS_A_CORPS,
      BaseCaracteristique: CaracteristiqueName.VIGUEUR,
      ShortDescription: "Porter une attaque avec une arme au corps à corps.",
    },
    {
      Nom: CompetenceName.DISCRETION,
      BaseCaracteristique: CaracteristiqueName.AGILITE,
      ShortDescription: "S'approcher sans attirer l'attention.",
    },
    {
      Nom: CompetenceName.PILOTAGE,
      BaseCaracteristique: CaracteristiqueName.ADRESSE,
      ShortDescription: "Manoeuver un véhicule terrestre ou aérospatial.",
    },
    {
      Nom: CompetenceName.HISTOIRE,
      BaseCaracteristique: CaracteristiqueName.INTELLIGENCE,
      ShortDescription:
        "Réagir et argumenter sur un fait lié à l'Histoire de la galaxie.",
    },
    {
      Nom: CompetenceName.OCCULTISME,
      BaseCaracteristique: CaracteristiqueName.INTELLIGENCE,
      ShortDescription:
        "Réagir et argumenter sur un fait lié à un culte, une religions ou une croyance.",
    },
    {
      Nom: CompetenceName.MÉDECINE,
      BaseCaracteristique: CaracteristiqueName.INTELLIGENCE,
      ShortDescription:
        "Appliquer des premier soins ou manipuler des outils de médecine.",
    },
    {
      Nom: CompetenceName.SURVIE,
      BaseCaracteristique: CaracteristiqueName.INTELLIGENCE,
      ShortDescription:
        "Trouver un chemin sûr, reconnaître des substances nutritives ou dangereuses.",
    },
    {
      Nom: CompetenceName.INGÉNIERIE,
      BaseCaracteristique: CaracteristiqueName.INTELLIGENCE,
      ShortDescription:
        "Réparer un objet mécanique ou interagir avec un terminal informatique.",
    },
    {
      Nom: CompetenceName.ENTROPIE_DU_FLUIDE,
      BaseCaracteristique: CaracteristiqueName.INTELLIGENCE,
      ShortDescription:
        "Invoquer des matérialisation du Fluide, ressentir des sources d’énergie du Fluide.",
    },
    {
      Nom: CompetenceName.CHARME,
      BaseCaracteristique: CaracteristiqueName.CHARISME,
      ShortDescription:
        "Obtenir une faveur de la cible sans avoir recours à la négociation.",
    },
    {
      Nom: CompetenceName.NÉGOCIATION,
      BaseCaracteristique: CaracteristiqueName.CHARISME,
      ShortDescription:
        "Marchander, argumenter sur une decision de manière plus ou moins rationnelle.",
    },
    {
      Nom: CompetenceName.TROMPERIE,
      BaseCaracteristique: CaracteristiqueName.CHARISME,
      ShortDescription:
        "Déguiser un scène ou une personne, mentir à un individu.",
    },
    {
      Nom: CompetenceName.PERSPICACITÉ,
      BaseCaracteristique: CaracteristiqueName.CHARISME,
      ShortDescription:
        "Capacité passive à detecter le mensonge ou mettre en evidence ce qui ne l'est pas.",
    },
    {
      Nom: CompetenceName.INTIMIDATION,
      BaseCaracteristique: CaracteristiqueName.CHARISME,
      ShortDescription: "Obtenir un service ou un objet par la menace.",
    },
    {
      Nom: CompetenceName.VIGILANCE,
      BaseCaracteristique: CaracteristiqueName.INTELLIGENCE,
      ShortDescription:
        "Detecter le danger, remarquer des détails significatif.",
    },
  ];
  /**
   *
   * @param name List all competences with this Caracteristique by default
   * @returns
   */
  static getCompetencesByCaracteristique(name: CaracteristiqueName) {
    return this.CompetencesList.filter((c) => c.BaseCaracteristique === name);
  }
  /**
   * Return all Competences with info
   * @returns
   */
  static getAllCompetences() {
    return this.CompetencesList;
  }
}
