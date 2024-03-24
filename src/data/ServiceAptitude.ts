/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Aptitude, AptitudeFixed, AptitudeType } from "src/model/Aptitude";
import { AttributsName } from "src/model/Attribut";
import { CaracteritiqueName } from "src/model/Caracteristique";
import { CompetenceName } from "src/model/Competence";

export enum AptitudeTypeName {
  EVOCATION = "Évocation",
  NECROMANCIE = "Nécromancie",
  BENEDICTION = "Bénédiction",
  MANTRA = "Mantra",
  CYTOMANCIE = "Cytomancie",
  POSTURE = "Posture",
  TECHNIQUE = "Technique",
  REACTION = "Réaction",
}

export class ServiceAptitude {
  // TODO Exporter les capacités dans des fichiers JSON + gérer la lecture et l'écriture
  // TODO Aptitude : Triomphe sur les 5 sur des attaques a distances
  // TODO Posture : Augmente la Défense
  // TODO Riposte : Premier mouvement de la foudre : Vous vous déplacez a porté courte instantanément si le chemin et dégagé et porté un coups au corps a corps. Une fois par jours.
  // TODO Faire le tire en cloche (vecteur?)

  private static Types: Array<AptitudeType> = [
    {
      Nom: AptitudeTypeName.EVOCATION,
      Description:
        "La conversion de l'énergie sombre par le fluide est activée par l'utilisateur qui utilise son corps comme catalyseur. L'utilisateur subit du stress pour stabiliser et matérialiser son aptitude.",
      DescriptionDetails:
        "Chaque point de stress investi produit 1 point de stabilité.",
    },
    {
      Nom: AptitudeTypeName.NECROMANCIE,
      Description:
        "La force vitale résiduelle d'un cadavre est utilisée comme catalyseur de l'énergie sombre. La qualité de l'individu et le nombre d'individu renforce l'aptitude.",
      DescriptionDetails:
        "Chaque niveau du cadavre génère 2 points de stabilité. Plusieurs cadavres peuvent être utilisés en additionnant leurs niveaux.",
    },
    {
      Nom: AptitudeTypeName.BENEDICTION,
      Description:
        "Le lanceur utilise l'empreinte onirique de la cible consentante pour qu'elle devienne un catalyseur. Les avantages du groupe sont consommé pour générer des effets.",
      DescriptionDetails:
        "Chaque avantage consommé génère 2 points de stabilité.",
    },
    {
      Nom: AptitudeTypeName.MANTRA,
      Description:
        "Un mantra est une modification permanente de la signature onirique de la cible pour apprécier certain effets du fluide sur son comportement et ses capacités. Les effets sont passifs.",
      DescriptionDetails:
        "Les mantras sont toujours stables et les effets constants depuis sa creation.",
    },
    {
      Nom: AptitudeTypeName.TECHNIQUE,
      Description:
        "Un mouvement qui requiert une grande concentration. l'aptitude se déroule comme une action complexe.",
      DescriptionDetails:
        "Action ou attaque qui se déroule comme une action complexe.",
    },
    {
      Nom: AptitudeTypeName.REACTION,
      Description: "Une aptitude qui s'effectue lors d'une réaction",
      DescriptionDetails: "Aptitude lors de votre réaction.",
    },
    {
      Nom: AptitudeTypeName.POSTURE,
      Description:
        "Une posture travaillée et maîtrisée permet de mieux appréhender une situation. Elle s'active avec une réaction. Une seule posture active à la fois.",
      DescriptionDetails:
        "Les postures sont toujours stables et se déclenchent en consommant une réaction.",
    },
  ];

  private static AptitudeList: Array<Aptitude> = [
    new AptitudeFixed(
      "Concentration",
      `Vous sacrifier autant de dés de ${AttributsName.REFLEXES} et votre mouvement afin de l'ajouter a vos jet d'attaques. Lorsque cette posture ce termine, vous ne pouvez regagner vos dés de ${AttributsName.REFLEXES} qu'au début de votre prochain tour.`,
      AptitudeTypeName.POSTURE,
      new Map([[CompetenceName.ARME_A_DISTANCE, 1]])
    ),
    new AptitudeFixed(
      "Ruée",
      "Vous vous déplacez de deux niveau de porté au lieux d'un seul lors de ce tour.",
      AptitudeTypeName.TECHNIQUE,
      new Map([[CompetenceName.ATHLETISME, 1]])
    ),
    new AptitudeFixed(
      "Combatant agile",
      `Vous gagnez 1 dé de ${AttributsName.REFLEXES} par points dans la compétence ${CompetenceName.COORDINATION}`,
      AptitudeTypeName.POSTURE,
      new Map([[CompetenceName.COORDINATION, 1]])
    ),
    new AptitudeFixed(
      "Feinte",
      `Pour chaque avantage généré lors du jet d'attaque, l'adversaire perd 1 dé de ${AttributsName.REFLEXES}`,
      AptitudeTypeName.TECHNIQUE,
      new Map([[CompetenceName.CORPS_A_CORPS, 1]])
    ),
    new AptitudeFixed(
      "Couverture improbable",
      `Au prix de votre réaction et de votre mouvement, vous pouvez realisez un test de ${CompetenceName.DISCRETION} don le DD est égale à la somme des rang de ${CompetenceName.VIGILANCE} des adversaires que ne vous ont pas dans leurs champs de vision. Si le test est réussi, vous êtes considéré comme caché auprès de ces adversaires.`,
      AptitudeTypeName.TECHNIQUE,
      new Map([[CompetenceName.DISCRETION, 1]])
    ),
    new AptitudeFixed(
      "\"Comme à l'entrainement'\"",
      `Vous subissez 1 point de stress et relancez immédiatement un dé au choix sur le résultat d'un test de ${CompetenceName.PILOTAGE}`,
      AptitudeTypeName.TECHNIQUE,
      new Map([[CompetenceName.PILOTAGE, 1]])
    ),
    new AptitudeFixed(
      "Rigueur scientifique",
      `Lorsque vous utiliser une ${AptitudeTypeName.EVOCATION}, vous pouvez regagnez la moitié du coût en point de stress si vous echouez votre jet d'attaque.`,
      AptitudeTypeName.MANTRA,
      new Map([[CompetenceName.HISTOIRE, 1]])
    ),
    new AptitudeFixed(
      "Posture diplomatique",
      `Vous pouvez relancer autant de dés que votre rang de ${CompetenceName.NEGOCIATION} sur vos tests lors d'interaction sociales pour demander des faveurs ou un service.`,
      AptitudeTypeName.MANTRA,
      new Map([[CompetenceName.NEGOCIATION, 1]])
    ),
    new AptitudeFixed(
      "Frappes sournoises",
      "Chaque fois que vous frappez un adversaire au corps-à-corps face à laquelle vous avez un avantage, vous infligez 1 point de dégâts supplémentaire par triomphe.",
      AptitudeTypeName.POSTURE,
      new Map([
        [CompetenceName.DISCRETION, 1],
        [CompetenceName.CORPS_A_CORPS, 1],
      ])
    ),
    new AptitudeFixed(
      "Bombe improvisée",
      `Si vous avez a votre disposition de trois ingredients adéquats (un combustible, une mèche et un contenant), vous pouvez effectuer un test de ${CompetenceName.INGENIERIE} (${CaracteritiqueName.INTELLIGENCE}) de DD3 pour creer une bombe artisanal que vous pouvez utiliser comme arme de jet. La puissance de la bombe est déterminée par le MJ en fonction du combustible et de la réussite de test.`,
      AptitudeTypeName.EVOCATION,
      new Map([
        [CompetenceName.INGENIERIE, 1],
        [CompetenceName.ARME_A_DISTANCE, 1],
      ])
    ),
    new AptitudeFixed(
      "Posture du dueliste",
      "Pendant une phase de combat, vous avez un avantage sur vos jet d'attaque face à un ennemi qui à déjà effectuer une attaque contre vous et seulement vous.Si l'adversaire en question subit une attaque d'une autre source que vous, le duel est rompu et vous subissez deux désavantages sur vos jet d'attaque pendant votre tour.",
      AptitudeTypeName.POSTURE,
      new Map([[CompetenceName.CORPS_A_CORPS, 1]])
    ),
  ];

  static findAptitudesByNames(names: Array<string>) {
    return this.AptitudeList.filter((apt) => names.includes(apt.Nom));
  }
  static findAptTypeByName(name: AptitudeTypeName) {
    return this.Types.find((ct) => ct.Nom === name)!;
  }
  static findAllAptitudes() {
    return this.AptitudeList;
  }

  static findAllTypes() {
    return this.Types;
  }
}
