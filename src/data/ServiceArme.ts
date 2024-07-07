import { Arme, ArmeDistanceItem } from "src/model/Armes";
import { CaracteristiqueName } from "src/model/Caracteristique";
import { CompetenceName } from "src/model/Competence";

export class ServiceArme {
  private static ARMES: Array<Arme> = [
    {
      Nom: "Lance de force",
      Dégâts: "2 point de dommage par triomphe + 2 point de dommage par succès",
      Special: [
        "Ajoutez 1 dé de défense (d6) à votre total.",
        "Vous pouvez decider d'activer la cellule avant le jet d'attaque. Si l'attaque réussie : la cible subit l'effet Choc(1) et la cellule est consommée. Recharger la cellule demande une action",
      ],
      Competence: CompetenceName.CORPS_A_CORPS,
      Description:
        "De conception simple, et de matériaux divers dépendant de l'origine de sa fabrication, la lance de force et l'instrument de base pour tout voyageur galactique qui souhaite parcourir de grandes distances et avoir de quoi éloigner les créatures sauvages. Une cellule énergétique remplaçable permet de générer de puissantes décharges étourdissantes",
      Encombrement: 3,
      Rareté: 3,
      Prix: 100,
    },
    {
      Nom: "Mains nues",
      Dégâts: "1 point de dommage par triomphe et par succès",
      Special: [
        "Vous subissez 1 blessure par désavantages net sur son jet d'attaque.",
      ],
      Competence: CompetenceName.CORPS_A_CORPS,
      Description: "Aucun",
      Encombrement: 0,
      Rareté: 0,
      Prix: 0,
    },
    {
      Nom: "Matraque électrique",
      Dégâts:
        "2 point de dommages par triomphe net + 1 point de dommage par succès",
      Special: [
        "Vous pouvez dépenser 3 avantages pour étourdir la cible jusqu'à sont prochain tour.",
      ],
      Competence: CompetenceName.CORPS_A_CORPS,
      Description: "Aucun",
      Encombrement: 1,
      Rareté: 2,
      Prix: 100,
    },
    {
      Nom: "couteau moléculaire",
      Dégâts:
        "4 point de dommages par triomphe net + 2 point de dommage par succès",
      Special: ["Aucune"],
      Competence: CompetenceName.CORPS_A_CORPS,
      Description:
        "Une lame très tranchante, capable de découper tout ce qui serai moins solide que son metal.",
      Encombrement: 1,
      Rareté: 2,
      Prix: 50,
    },
    {
      Nom: "Rapière-laser",
      Dégâts:
        "5 point de dommages par triomphe net + 1 point de dommage par succès",
      Special: [
        `Vous pouvez utilisez votre caractéristique ${CaracteristiqueName.AGILITE} au lieu de la force pour effectuer votre jet d'attaque au ${CompetenceName.CORPS_A_CORPS}`,
      ],
      Competence: CompetenceName.CORPS_A_CORPS,
      Description:
        "Instrument létal dans un alliage très résistant générant une grande quantitée d'energie à sont bout. Une cellule d'énergie permet une rapide rotation de la pointe avant impact. Très dangereux entre des mains agiles et un alignement chaotique.",
      Encombrement: 1,
      Rareté: 2,
      Prix: 100,
    },
    {
      Nom: "Sabre moléculaire",
      Dégâts:
        "3 point de dommages par triomphe net + 2 point de dommage par succès",
      Special: ["Ajoutez 1 dé de défense (d6) à votre total."],
      Competence: CompetenceName.CORPS_A_CORPS,
      Description:
        "Précis et maniable, c'est l'arme de prédilection de la plupart des bretteurs partant en territoire hostile.",
      Encombrement: 1,
      Rareté: 2,
      Prix: 100,
    },
    {
      Nom: "Marteau à impulsion",
      Dégâts:
        "2 point de dommages par triomphe, par succès, et par avantages net.",
      Special: [
        "Vous pouvez dépenser 2 avantages pour renverser la cible et consommant la cellule.",
        "Requis 3 en Vigueur",
      ],
      Competence: CompetenceName.CORPS_A_CORPS,
      Description:
        "Arme de corps à corps redoutable, comprenant dans un sa conception une cellule à fusion remplaçable qui se décharge à l'impact",
      Encombrement: 5,
      Rareté: 5,
      Prix: 400,
    },
    {
      Nom: "Gants renforcés",
      Dégâts: "2 point de dommage par triomphe + 1 point de dommage par succès",
      Special: ["Aucun"],
      Competence: CompetenceName.CORPS_A_CORPS,
      Description:
        "Équipement des pugilistes, ils permettent de ne pas s’abîmer les mains, et d'infliger de sévères contusions.",
      Encombrement: 5,
      Rareté: 5,
      Prix: 400,
    },
    {
      Nom: "Vibro-hache",
      Dégâts: "4 point de dommage par succès + 3 point de dommage par succès",
      Special: ["Requis 3 en Vigueur"],
      Competence: CompetenceName.CORPS_A_CORPS,
      Description:
        "Plus lourde qu'un sabre, la vibro-hache est aussi plus difficile à manier efficacement, mais peut infliger de terribles dégâts",
      Encombrement: 5,
      Rareté: 5,
      Prix: 400,
    },
  ];

  private static ARME_DISTANCE: Array<ArmeDistanceItem> = [
    {
      Nom: "Cutter a plasma",
      Dégâts: "2 point de dommage par succès et par avantage",
      Special: [
        "Vous ne déclencher pas de frappe d'opportunité lorsque vous tirer sur une personne au corps à corps avec vous.",
      ],
      Competence: CompetenceName.ARME_A_DISTANCE,
      Description:
        "Un bricolage simple permet de surcharger l'apport en énergie de l'outil, et d'en faire une 'arme a distance non létale' très utilisée dans les milieux industriel qui projette de la grenaille de metal en fusion. Très douloureux, la gerbe de grenaille est également difficile à éviter ou a parer.",
      Encombrement: 3,
      Rareté: 2,
      Prix: 400,
      Munition: "3 Munition faible densité",
      PorteMax: "15m",
    },
    {
      Nom: "Pacificateur",
      Dégâts: "2 point de dommage par succès et par triomphe",
      Special: ["La cible perd 1 dé de réflexes par triomphe."],
      Competence: CompetenceName.ARME_A_DISTANCE,
      Description:
        "Arme anti-émeute conçus dans un contexte ou l’intégrité physique des émeutiers n'est pas prise en compte dans le cahier des charges.",
      Encombrement: 3,
      Rareté: 3,
      Prix: 600,
      Munition: "6 Munition faible densité",
      PorteMax: "30m",
    },
    {
      Nom: "Fusil anti-nuisible",
      Dégâts: "3 point de dommage par succès et par triomphe net",
      Special: [
        "Inflige 2 blessure à l'utilisateur par désavantages net sur un jet d'attaque à distance avec cette arme.",
        "Requis 3 en vigueur.",
      ],
      Competence: CompetenceName.ARME_A_DISTANCE,
      Description:
        "L'une des rare armes que l'on trouve parmi les populations civiles, pensée pour faire face aux horreurs de l'espace depuis la pacifications. C'est un fusil d'une taille démesurée pour lutter contre des creatures démesurées. Le recul pourrait briser un bras trop faible. Mais quel est l'ingénieur à l'origine de ce truc ?",
      Encombrement: 5,
      Rareté: 5,
      Prix: 900,
      Munition: "1 Munition hybride à haute densité",
      PorteMax: "50m",
    },
    {
      Nom: "Fusil d'assaut",
      Dégâts: "15 Dommage + 1 par succès et par triomphe",
      Special: [],
      Competence: CompetenceName.ARME_A_DISTANCE,
      Description:
        "Arme des troupes régulière des super-civilisations. Comme toutes les armes à énergie, celui qui possède ce fusil et dispose d'assez de cellule haute densité n'a globalement pas grands chose à craindre de ses congénères humanoïdes.",
      Encombrement: 4,
      Rareté: 5,
      Prix: 3000,
      Munition: "10 Munitions haute densité",
      PorteMax: "30m",
    },
  ];

  static getAllArmesList() {
    return [...this.ARMES, ...this.ARME_DISTANCE];
  }

  static findArmesByNames(names: Array<string>) {
    return this.getAllArmesList().filter((arme) => names.includes(arme.Nom));
  }
}
