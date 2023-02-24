/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { CaracteritiqueName } from './Caracteristique';

export type Competence = {
  Nom: CompetenceName;
  BaseCaracteristique: CaracteritiqueName;
  ShortDescription: string;
};

export enum CompetenceName {
  ATHLETISME = 'Athlétisme',
  CORPS_A_CORPS = 'Corps à corps',
  PUGILAT = 'Pugilat',
  COORDINATION = 'Coordination',
  PILOTAGE = 'Pilotage',
  ARME_A_DISTANCE = 'Arme à distance',
  CONNAISSANCE_HISTOIRE = 'Connaissance - Histoire',
  CONNAISSANCE_CULTES = 'Connaissance - Cultes',
  MEDECINE = 'Médecine',
  SURVIE = 'Survie',
  INGENIERIE = 'Ingénierie',
  ENTROPIE_DU_FLUIDE = 'Entropie du fluide',
  CHARME = 'Charme',
  NEGOCIATION = 'Négociation',
  TROMPERIE = 'Tromperie',
  PERSPICACITE = 'Prespicacité',
  ALTERATION = 'Altération du fluide',
  INTIMIDATION = 'Intimidation',
}

export class CompetenceService {
  private static CompetencesList: Array<Competence> = [
    {
      Nom: CompetenceName.ATHLETISME,
      BaseCaracteristique: CaracteritiqueName.VIGUEUR,
      ShortDescription: 'Sauter, grimper, soulever de lourdes charges.',
    },
    {
      Nom: CompetenceName.CORPS_A_CORPS,
      BaseCaracteristique: CaracteritiqueName.VIGUEUR,
      ShortDescription: 'Porter une attaque avec une arme au corps à corps.',
    },
    {
      Nom: CompetenceName.PUGILAT,
      BaseCaracteristique: CaracteritiqueName.VIGUEUR,
      ShortDescription: 'Attaquer a main nue, lutter contre un adversaire.',
    },
    {
      Nom: CompetenceName.COORDINATION,
      BaseCaracteristique: CaracteritiqueName.AGILITE,
      ShortDescription:
        'Garder un equilibre, effectuer des accrobatie, habilité manuelle.',
    },
    {
      Nom: CompetenceName.PILOTAGE,
      BaseCaracteristique: CaracteritiqueName.AGILITE,
      ShortDescription: 'Manoeuvrer un vehicule terrestre ou aerospacial.',
    },
    {
      Nom: CompetenceName.ARME_A_DISTANCE,
      BaseCaracteristique: CaracteritiqueName.AGILITE,
      ShortDescription: 'Porter une attaque avec une arme à distance.',
    },
    {
      Nom: CompetenceName.CONNAISSANCE_HISTOIRE,
      BaseCaracteristique: CaracteritiqueName.INTELLIGENCE,
      ShortDescription:
        "Réagir et argumenter sur un fait lié à l'Histoire de la galaxie.",
    },
    {
      Nom: CompetenceName.CONNAISSANCE_CULTES,
      BaseCaracteristique: CaracteritiqueName.INTELLIGENCE,
      ShortDescription:
        'Réagir et argumenter sur un fait lié à un culte, une religions ou une croyance.',
    },
    {
      Nom: CompetenceName.MEDECINE,
      BaseCaracteristique: CaracteritiqueName.INTELLIGENCE,
      ShortDescription:
        'Appliquer des premier soins ou manipuler des outils de medecine.',
    },
    {
      Nom: CompetenceName.SURVIE,
      BaseCaracteristique: CaracteritiqueName.INTELLIGENCE,
      ShortDescription:
        'Trouver un chemin sûr, reconnaitre des substances nutritives ou danguereuses.',
    },
    {
      Nom: CompetenceName.INGENIERIE,
      BaseCaracteristique: CaracteritiqueName.INTELLIGENCE,
      ShortDescription:
        'Réparer un objet mecanique ou interagir avec un terminal informatique.',
    },
    {
      Nom: CompetenceName.ENTROPIE_DU_FLUIDE,
      BaseCaracteristique: CaracteritiqueName.INTELLIGENCE,
      ShortDescription:
        "Invoquer des materialisation du Fluide, resentir des sources d'energie du Fluide.",
    },
    {
      Nom: CompetenceName.CHARME,
      BaseCaracteristique: CaracteritiqueName.CHARISME,
      ShortDescription:
        'Obtenir une faveur de la cible sans avoir recours à la négociation.',
    },
    {
      Nom: CompetenceName.NEGOCIATION,
      BaseCaracteristique: CaracteritiqueName.CHARISME,
      ShortDescription:
        'Marchander, argumenter sur une decision de manière plus ou moins rationnelle.',
    },
    {
      Nom: CompetenceName.TROMPERIE,
      BaseCaracteristique: CaracteritiqueName.CHARISME,
      ShortDescription:
        'Déguiser un scène ou une personne, mentir à un individu.',
    },
    {
      Nom: CompetenceName.PERSPICACITE,
      BaseCaracteristique: CaracteritiqueName.CHARISME,
      ShortDescription:
        'Capcité passive à detecter le mensonge ou mettre en evidence ce qui ne le sont pas.',
    },
    {
      Nom: CompetenceName.INTIMIDATION,
      BaseCaracteristique: CaracteritiqueName.CHARISME,
      ShortDescription: 'Obtenir un service ou un objet par la menace.',
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
