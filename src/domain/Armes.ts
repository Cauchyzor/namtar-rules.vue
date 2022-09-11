import { CompetenceName } from "./Competence";
import { Equipement } from "./Equipement";

export class Arme extends Equipement {
  Degats: string;
  Special: Array<string>;
  Competence: CompetenceName;

  constructor({
    Nom = "Arme inconnue",
    Degats = "1 point de dommage par succès",
    Special = ["Aucun"],
    Competence = CompetenceName.CORPS_A_CORPS,
    Description = "Aucune",
    Encombrement = 3,
    Rarete = 3,
    Prix = 100,
  }) {
    super({ Nom, Encombrement, Rarete, Description, Prix });
    this.Degats = Degats;
    this.Special = Special;
    this.Competence = Competence;
  }
}

export class ArmesService {
  private static ARMES: Array<Arme> = [
    new Arme({
      Nom: "Bâton de force",
      Degats: "1 point de dommage par succès",
      Special: [
        "Vous pouvez decider d'activer la cellule avant le jet d'attaque. Si l'attaque réussie : la cible subit 1 point de dégat supplémentaire par avantages et la cellule est consommée. Recharger la cellule demande une manoeuvre",
      ],
      Competence: CompetenceName.CORPS_A_CORPS,
      Description:
        "De conçeption simple, et de materiaux divers dépendant de l'origine de sa fabrication, le bâton de force et l'instrument de base pour tout voyageur galactique qui souhaite parcourir de grandes distances et avoir de quoi éloigner les créatures sauvages. Une celulle énergetique remplacable permet de générer de puissantes décharges étourdissantes",
      Encombrement: 3,
      Rarete: 3,
      Prix: 100,
    }),
    new Arme({
      Nom: "Mains nues",
      Degats: "1 point de dommage pour 2 succès",
      Special: [
        "Vous avez des difficultés pour toucher des cibles maniant des armes avec plus d'allonge face a vous. Vous subissez 1 infortune par rang adverse de corps à corps ou pugilat, dependant de l'arme.",
      ],
      Competence: CompetenceName.PUGILAT,
      Description: "Aucun",
      Encombrement: 0,
      Rarete: 0,
      Prix: 0,
    }),
    new Arme({
      Nom: "Vibro-lame",
      Degats: "2 point de dommage par succès",
      Special: [
        "Vous avez des difficultés pour toucher des cibles maniant des armes avec plus d'allonge face a vous. Vous subissez 1 infortune par rang adverse de corps à corps ou pugilat, dependant de l'arme.",
      ],
      Competence: CompetenceName.CORPS_A_CORPS,
      Description: "Aucun",
      Encombrement: 1,
      Rarete: 2,
      Prix: 100,
    }),
    new Arme({
      Nom: "Vibro-sabre",
      Degats: "1 point de dommage par succès",
      Special: ["Aucun"],
      Competence: CompetenceName.CORPS_A_CORPS,
      Description:
        "Précis et maniable, c'est l'arme de prédilection de la pluparts des bagarreurs qui veulent ce faire respecter",
      Encombrement: 1,
      Rarete: 2,
      Prix: 100,
    }),
    new Arme({
      Nom: "Marteau à impulsion",
      Degats: "1 point de dommage par succès",
      Special: [
        "Vous pouvez dépenser vos avantages pour augmenter les dégats total.",
        "Vous pouvez dépenser 2 avantages pour renverser la cible en consommant la cellule.",
        "Requis 3 en Vigueur",
      ],
      Competence: CompetenceName.CORPS_A_CORPS,
      Description:
        "Arme de corps à corps redoutable, comprenant dans un sa conçeption une celulle à fusion remplaçable qui décharge de solide détonations à l'impact",
      Encombrement: 5,
      Rarete: 5,
      Prix: 400,
    }),
    new Arme({
      Nom: "Gants renforcés",
      Degats: "1 point de dommage par succès",
      Special: [
        "Dégat non létal par défaut",
        "Vous avez des difficultés pour toucher des cibles maniant des armes avec plus d'allonge face a vous. Vous subissez 1 infortune par rang adverse de corps à corps ou pugilat, dependant de l'arme.",
      ],
      Competence: CompetenceName.PUGILAT,
      Description:
        "Plus lourde qu'un sabre, la vibro-hache est aussi plus difficile à manier efficacement, mais peut infliger de terribles dégâts",
      Encombrement: 5,
      Rarete: 5,
      Prix: 400,
    }),
    new Arme({
      Nom: "Vibro-hache",
      Degats: "2 point de dommage par succès",
      Special: ["Requis 3 en Vigueur"],
      Competence: CompetenceName.CORPS_A_CORPS,
      Description:
        "Plus lourde qu'un sabre, la vibro-hache est aussi plus difficile à manier efficacement, mais peut infliger de terribles dégâts",
      Encombrement: 5,
      Rarete: 5,
      Prix: 400,
    }),
  ];
}
