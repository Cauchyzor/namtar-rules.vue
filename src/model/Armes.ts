import { CaracteritiqueName } from "./Caracteristique";
import { CompetenceName } from "./Competence";
import { Equipement } from "./Equipement";

export interface Arme extends Equipement {
  Degats: string;
  Special: Array<string>;
  Competence: CompetenceName;
}

export enum NiveauPorte {
  ENGAGE = "Engagé",
  COURTE = "Courte",
  MOYENNE = "Moyenne",
  LONGUE = "Longue",
  EXTREME = "Extrème",
}

export interface ArmeDistanceItem extends Arme {
  Munition: string;
  PorteMax: NiveauPorte;
}
export class ArmesService {
  private static ARMES: Array<Arme> = [
    {
      Nom: "Bâton de force",
      Degats: "2 point de dommage par triomphe + 2 point de dommage par succès",
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
      Nom: "Mains nues",
      Degats: "1 point de dommage par triomphe et par succès",
      Special: [
        "L'utilisateur subit 1 blessure par menaces net sur son jet d'attaque.",
      ],
      Competence: CompetenceName.PUGILAT,
      Description: "Aucun",
      Encombrement: 0,
      Rarete: 0,
      Prix: 0,
    },
    {
      Nom: "Matraque électrique",
      Degats:
        "2 point de dommages par triomphe net + 1 point de dommage par succès",
      Special: ["Vous pouvez dépenser 2 atout pour étourdir l'enemi."],
      Competence: CompetenceName.CORPS_A_CORPS,
      Description: "Aucun",
      Encombrement: 1,
      Rarete: 2,
      Prix: 100,
    },
    {
      Nom: "couteau moleculaire",
      Degats:
        "4 point de dommages par triomphe net + 2 point de dommage par succès",
      Special: ["Aucune"],
      Competence: CompetenceName.CORPS_A_CORPS,
      Description:
        "Une lame trés tranchante, capable de découper tout ce qui serai moins solide que son metal.",
      Encombrement: 1,
      Rarete: 2,
      Prix: 50,
    },
    {
      Nom: "Perce-maille",
      Degats:
        "5 point de dommages par triomphe net + 1 point de dommage par succès",
      Special: [
        `Vous pouvez utilisez votre caractéristique ${CaracteritiqueName.AGILITE} au lieu de la force pour effectuer votre jet d'attaque au ${CompetenceName.CORPS_A_CORPS}`,
      ],
      Competence: CompetenceName.CORPS_A_CORPS,
      Description:
        "Un épieu dans un alliage très résistant. Une cellule d'énergie permet une rapide rotation de la pointe avant impact. Très dangereux entre des mains agiles et un alignement chaotique.",
      Encombrement: 1,
      Rarete: 2,
      Prix: 100,
    },
    {
      Nom: "Sabre moleculaire",
      Degats:
        "3 point de dommages par triomphe net + 2 point de dommage par succès",
      Special: ["Augmente votre defense liée à l'équipement de 1 point"],
      Competence: CompetenceName.CORPS_A_CORPS,
      Description:
        "Précis et maniable, c'est l'arme de prédilection de la plupart des bretteurs partant en territoir hostile.",
      Encombrement: 1,
      Rarete: 2,
      Prix: 100,
    },
    {
      Nom: "Marteau à impulsion",
      Degats:
        "2 point de dommages par triomphe, par succès, et par atouts net.",
      Special: [
        "Vous pouvez dépenser 2 atouts pour renverser la cible et consommant la cellule.",
        "Requis 3 en Vigueur",
      ],
      Competence: CompetenceName.CORPS_A_CORPS,
      Description:
        "Arme de corps à corps redoutable, comprenant dans un sa conception une celulle à fusion remplaçable qui se décharge à l'impact",
      Encombrement: 5,
      Rarete: 5,
      Prix: 400,
    },
    {
      Nom: "Gants renforcés",
      Degats: "2 point de dommage par triomphe + 1 point de dommage par succès",
      Special: ["Aucun"],
      Competence: CompetenceName.PUGILAT,
      Description:
        "Equipement des pugilites, ils permettent de ne pas s'abimer les mains, et d'infliger de sevères contusions.",
      Encombrement: 5,
      Rarete: 5,
      Prix: 400,
    },
    {
      Nom: "Vibro-hache",
      Degats: "4 point de dommage par succès + 3 point de dommage par succès",
      Special: ["Requis 3 en Vigueur"],
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
      Nom: "Cutter a plasma",
      Degats: "3 + 2 point de dommage par succès",
      Special: ["Aucun"],
      Competence: CompetenceName.ARME_A_DISTANCE,
      Description:
        "Un bricolage simple permet de surcharger l'apport en energie de l'outil, et d'en faire une 'arme a distance non létale' trés utilisée dans les milieux industriel qui projette de la grenaille de metal en fusion. Trés douloureux.",
      Encombrement: 3,
      Rarete: 2,
      Prix: 400,
      Munition: "3 Munition faible densitée",
      PorteMax: NiveauPorte.COURTE,
    },
    {
      Nom: "Fusil anti-nuisible",
      Degats: "3 point de dommage par succès et par atouts net",
      Special: [
        "Inflige 2 blessure à l'utilisateur par menace net sur un jet d'attaque à distance avec cette arme.",
        "Requis 3 en vigueur.",
      ],
      Competence: CompetenceName.ARME_A_DISTANCE,
      Description:
        "L'une des rare armes que l'on trouve parmis les populations civiles, pensée pour faire face aux horreures de l'espace depuis la pacifications. C'est un fusil d'une taille démesurée pour lutter contre des creatures démeusurées. Le recul pourrait briser un bras trop faible. Mais quel est l'ingénieur à l'origine de ce truc ?",
      Encombrement: 5,
      Rarete: 5,
      Prix: 900,
      Munition: "1 Munition hybride à haute densité",
      PorteMax: NiveauPorte.LONGUE,
    },
  ];

  static getAllArmesList() {
    return [...this.ARMES, ...this.ARME_DISTANCE];
  }
}
