import { Arme, ArmeDistanceItem, NiveauPorte } from "src/model/Armes";
import { CaracteritiqueName } from "src/model/Caracteristique";
import { CompetenceName } from "src/model/Competence";

export class ServiceArme {
  private static ARMES: Array<Arme> = [
    {
      Nom: "Bâton de force",
      Degats: "2 point de dommage par triomphe + 2 point de dommage par succès",
      Special: [
        "Ajoutez 1 dé de défense (d6) à votre total.",
        "Vous pouvez decider d'activer la cellule avant le jet d'attaque. Si l'attaque réussie : la cible subit l'effet Choc(1) et la cellule est consommée. Recharger la cellule demande une action",
      ],
      Competence: CompetenceName.CORPS_A_CORPS,
      Description:
        "De conception simple, et de matériaux divers dépendant de l'origine de sa fabrication, le bâton de force et l'instrument de base pour tout voyageur galactique qui souhaite parcourir de grandes distances et avoir de quoi éloigner les créatures sauvages. Une cellule énergétique remplaçable permet de générer de puissantes décharges étourdissantes",
      Encombrement: 3,
      Rarete: 3,
      Prix: 100,
    },
    {
      Nom: "Mains nues",
      Degats: "1 point de dommage par triomphe et par succès",
      Special: [
        "Vous subissez 1 blessure par désavantages net sur son jet d'attaque.",
      ],
      Competence: CompetenceName.CORPS_A_CORPS,
      Description: "Aucun",
      Encombrement: 0,
      Rarete: 0,
      Prix: 0,
    },
    {
      Nom: "Matraque électrique",
      Degats:
        "2 point de dommages par triomphe net + 1 point de dommage par succès",
      Special: ["Vous pouvez dépenser 2 avantages pour étourdir la cible."],
      Competence: CompetenceName.CORPS_A_CORPS,
      Description: "Aucun",
      Encombrement: 1,
      Rarete: 2,
      Prix: 100,
    },
    {
      Nom: "couteau moléculaire",
      Degats:
        "4 point de dommages par triomphe net + 2 point de dommage par succès",
      Special: ["Aucune"],
      Competence: CompetenceName.CORPS_A_CORPS,
      Description:
        "Une lame très tranchante, capable de découper tout ce qui serai moins solide que son metal.",
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
      Nom: "Sabre moléculaire",
      Degats:
        "3 point de dommages par triomphe net + 2 point de dommage par succès",
      Special: ["Ajoutez 1 dé de défense (d6) à votre total."],
      Competence: CompetenceName.CORPS_A_CORPS,
      Description:
        "Précis et maniable, c'est l'arme de prédilection de la plupart des bretteurs partant en territoire hostile.",
      Encombrement: 1,
      Rarete: 2,
      Prix: 100,
    },
    {
      Nom: "Marteau à impulsion",
      Degats:
        "2 point de dommages par triomphe, par succès, et par avantages net.",
      Special: [
        "Vous pouvez dépenser 2 avantages pour renverser la cible et consommant la cellule.",
        "Requis 3 en Vigueur",
      ],
      Competence: CompetenceName.CORPS_A_CORPS,
      Description:
        "Arme de corps à corps redoutable, comprenant dans un sa conception une cellule à fusion remplaçable qui se décharge à l'impact",
      Encombrement: 5,
      Rarete: 5,
      Prix: 400,
    },
    {
      Nom: "Gants renforcés",
      Degats: "2 point de dommage par triomphe + 1 point de dommage par succès",
      Special: ["Aucun"],
      Competence: CompetenceName.CORPS_A_CORPS,
      Description:
        "Équipement des pugilistes, ils permettent de ne pas s’abîmer les mains, et d'infliger de sévères contusions.",
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
        "Un bricolage simple permet de surcharger l'apport en énergie de l'outil, et d'en faire une 'arme a distance non létale' très utilisée dans les milieux industriel qui projette de la grenaille de metal en fusion. Très douloureux.",
      Encombrement: 3,
      Rarete: 2,
      Prix: 400,
      Munition: "3 Munition faible densité",
      PorteMax: NiveauPorte.COURTE,
    },
    {
      Nom: "Pacificateur",
      Degats: "2 point de dommage par succès et par triomphe",
      Special: [
        "La cible perd 1 dé de réflexes par triomphe sur le jet d'attaque jusqu'au prochain repos court.",
      ],
      Competence: CompetenceName.ARME_A_DISTANCE,
      Description:
        "Arme anti-émeute conçus dans un contexte ou l’intégrité physique des émeutiers n'est pas prise en compte dans le cahier des charges.",
      Encombrement: 3,
      Rarete: 3,
      Prix: 600,
      Munition: "6 Munition faible densité",
      PorteMax: NiveauPorte.MOYENNE,
    },
    {
      Nom: "Fusil anti-nuisible",
      Degats: "3 point de dommage par succès et par avantages net",
      Special: [
        "Inflige 2 blessure à l'utilisateur par désavantages net sur un jet d'attaque à distance avec cette arme.",
        "Requis 3 en vigueur.",
      ],
      Competence: CompetenceName.ARME_A_DISTANCE,
      Description:
        "L'une des rare armes que l'on trouve parmi les populations civiles, pensée pour faire face aux horreurs de l'espace depuis la pacifications. C'est un fusil d'une taille démesurée pour lutter contre des creatures démesurées. Le recul pourrait briser un bras trop faible. Mais quel est l'ingénieur à l'origine de ce truc ?",
      Encombrement: 5,
      Rarete: 5,
      Prix: 900,
      Munition: "1 Munition hybride à haute densité",
      PorteMax: NiveauPorte.LONGUE,
    },
    {
      Nom: "Fusil d'assaut",
      Degats: "15 Dommage + 1 par succès et par triomphe",
      Special: [],
      Competence: CompetenceName.ARME_A_DISTANCE,
      Description:
        "Arme des troupes régulière de l'empire. Comme toutes les armes à énergie, celui qui possède ce fusil et dispose d'assez de cellule haute densité n'a globalement pas grands chose à craindre de ses congénères humanoïdes.",
      Encombrement: 4,
      Rarete: 5,
      Prix: 3000,
      Munition: "10 Munitions haute densité",
      PorteMax: NiveauPorte.MOYENNE,
    },
  ];

  static getAllArmesList() {
    return [...this.ARMES, ...this.ARME_DISTANCE];
  }

  static findArmesByNames(names: Array<string>) {
    return this.getAllArmesList().filter((arme) => names.includes(arme.Nom));
  }
}
