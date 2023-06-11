import { CaracteritiqueName } from './Caracteristique';
import { CompetenceName } from './Competence';
import { EquipementItem } from './Equipement';

export interface ArmeItem extends EquipementItem {
  Degats: string;
  Special: Array<string>;
  Competence: CompetenceName;
}

export enum NiveauPorte {
  ENGAGE = 'Engagé',
  COURTE = 'Courte',
  MOYENNE = 'Moyenne',
  LONGUE = 'Longue',
  EXTREME = 'Extrème',
}

export interface ArmeDistanceItem extends ArmeItem {
  Munition: string;
  PorteMax: NiveauPorte;
}
export class ArmesService {
  private static ARMES: Array<ArmeItem> = [
    {
      Nom: 'Bâton de force',
      Degats: `${CaracteritiqueName.VIGUEUR} + 2 point de dommage par succès`,
      Special: [
        "Augmente votre défense liée à l'équipuement de 1 point",
        "Vous pouvez decider d'activer la cellule avant le jet d'attaque. Si l'attaque réussie : la cible subit l'effet Choc(1) et la cellule est consommée. Recharger la cellule demande une action",
      ],
      Competence: CompetenceName.CORPS_A_CORPS,
      Description:
        "De conçeption simple, et de materiaux divers dépendant de l'origine de sa fabrication, le bâton de force et l'instrument de base pour tout voyageur galactique qui souhaite parcourir de grandes distances et avoir de quoi éloigner les créatures sauvages. Une celulle énergetique remplacable permet de générer de puissantes décharges étourdissantes",
      Encombrement: 3,
      Rarete: 3,
      Prix: 100,
    },
    {
      Nom: 'Mains nues',
      Degats: `${CaracteritiqueName.VIGUEUR} + 1 point de dommage par succès`,
      Special: [
        "L'utilisateur subit 1 blessure par désavantages sur son jet d'attaque.",
      ],
      Competence: CompetenceName.PUGILAT,
      Description: 'Aucun',
      Encombrement: 0,
      Rarete: 0,
      Prix: 0,
    },
    {
      Nom: 'Matraque électrique',
      Degats: `${CaracteritiqueName.VIGUEUR} + 1 point de dommage par succès et par avantage`,
      Special: ["Vous pouvez dépenser 2 atout pour étourdir l'enemi."],
      Competence: CompetenceName.CORPS_A_CORPS,
      Description: 'Aucun',
      Encombrement: 1,
      Rarete: 2,
      Prix: 100,
    },
    {
      Nom: 'couteau moleculaire',
      Degats: `${CaracteritiqueName.VIGUEUR} + 2 point de dommage par succès`,
      Special: ['Aucune'],
      Competence: CompetenceName.CORPS_A_CORPS,
      Description:
        'Une lame trés tranchante, capable de découper tout ce qui serai moins solide que son metal.',
      Encombrement: 1,
      Rarete: 2,
      Prix: 50,
    },
    {
      Nom: 'Sabre moleculaire',
      Degats: `${CaracteritiqueName.VIGUEUR} + 2 point de dommage par succès`,
      Special: ["Augmente votre defense liée à l'équipement de 1 point"],
      Competence: CompetenceName.CORPS_A_CORPS,
      Description:
        "Précis et maniable, c'est l'arme de prédilection de la plupart des bretteurs partant en territoir hostile.",
      Encombrement: 1,
      Rarete: 2,
      Prix: 100,
    },
    {
      Nom: 'Marteau à impulsion',
      Degats: `${CaracteritiqueName.VIGUEUR} + 2 point de dommage par succès et par avantage`,
      Special: [
        'Vous pouvez dépenser 2 avantages pour renverser la cible et consommant la cellule.',
        'Requis 3 en Vigueur',
      ],
      Competence: CompetenceName.CORPS_A_CORPS,
      Description:
        "Arme de corps à corps redoutable, comprenant dans un sa conception une celulle à fusion remplaçable qui se décharge à l'impact",
      Encombrement: 5,
      Rarete: 5,
      Prix: 400,
    },
    {
      Nom: 'Gants renforcés',
      Degats: `${CaracteritiqueName.VIGUEUR} + 1 point de dommage par succès et par avantages.`,
      Special: ['Aucun'],
      Competence: CompetenceName.PUGILAT,
      Description:
        "Equipement des pugilites, ils permettent de ne pas s'abimer les mains, et d'infliger de sevères contusions.",
      Encombrement: 5,
      Rarete: 5,
      Prix: 400,
    },
    {
      Nom: 'Vibro-hache',
      Degats: `${CaracteritiqueName.VIGUEUR} + 3 point de dommage par succès`,
      Special: ['Requis 3 en Vigueur'],
      Competence: CompetenceName.CORPS_A_CORPS,
      Description:
        "Plus lourde qu'un sabre, la vibro-hache est aussi plus difficile à manier efficacement, mais peut infliger de terribles dégâts",
      Encombrement: 5,
      Rarete: 5,
      Prix: 400,
    },
  ];

  private static ARME_DISTANCE: Array<ArmeDistanceItem> = [
    {
      Nom: 'Cutter a plasma',
      Degats: '3 + 2 point de dommage par succès',
      Special: ['Aucun'],
      Competence: CompetenceName.ARME_A_DISTANCE,
      Description:
        "Un bricolage simple permet de surcharger l'apport en energie de l'outil, et d'en faire une 'arme a distance non létale' trés utilisée dans les milieux industriel qui projette de la grenaille de metal en fusion. Trés douloureux.",
      Encombrement: 3,
      Rarete: 2,
      Prix: 400,
      Munition: '3 Munition faible densitée',
      PorteMax: NiveauPorte.COURTE,
    },
    {
      Nom: 'Fusil anti-nuisible',
      Degats: '5 + 3 point de dommage par succès et avantages',
      Special: [
        "Inflige 2 blessure à l'utilisateur par désavantage sur un test ou un jet d'attaque à distance avec cette arme.",
        'Requis 3 en vigueur.',
      ],
      Competence: CompetenceName.ARME_A_DISTANCE,
      Description:
        "L'une des rare armes que l'on trouve parmis les populations civiles, pensée pour faire face aux horreures de l'espace depuis la pacifications. C'est un fusil d'une taille démesurée pour lutter contre des creatures démeusurées. Le recul pourrait briser un bras trop faible. Mais quel est l'ingénieur à l'origine de ce truc ?",
      Encombrement: 5,
      Rarete: 5,
      Prix: 900,
      Munition: '1 Munition hybride à haute densité',
      PorteMax: NiveauPorte.LONGUE,
    },
  ];

  static getAllArmesList() {
    return [...this.ARMES, ...this.ARME_DISTANCE];
  }
}
