/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Aptitude, AptitudeFixed, AptitudeType } from "src/model/Aptitude";
import { AttributsName } from "src/model/Attribut";
import { CaracteritiqueName } from "src/model/Caracteristique";
import { CompetenceName } from "src/model/Competence";

export enum AptitudeTypeName {
  AMELIORATION = "Amélioration",
  BENEDICTION = "Bénédiction",
  CYTOMANCIE = "Cytomancie",
  EVOCATION = "Évocation",
  INJONCTION = "Injonction",
  MANTRA = "Mantra",
  NÉCROMANCIE = "Nécromancie",
  POSTURE = "Posture",
  REACTION = "Réaction",
  TECHNIQUE_CORPS_A_CORPS = "Technique au corps à corps",
}

export class ServiceAptitude {
  private static Types: Array<AptitudeType> = [
    {
      Nom: AptitudeTypeName.EVOCATION,
      Description: `Vous effectuez un test en opposition d'${CompetenceName.ENTROPIE_DU_FLUIDE} (${CaracteritiqueName.INTELLIGENCE}) contre une cible à portée moyenne. Vous n'avez pas besoin de voir la cible. Vous devez avoir une main libre pour effectuer des composantes somatique.`,
    },
    {
      Nom: AptitudeTypeName.NÉCROMANCIE,
      Description:
        "L'aptitude consomme un ou plusieurs cadavres frais (quelques heures maximum) à porté courte dont le niveau de puissance cumulé doit correspondre au rang de l'aptitude.",
    },
    {
      Nom: AptitudeTypeName.BENEDICTION,
      Description:
        "Toute les creature au choix a porté courte reçoivent des bonus pour le reste de la journée. Le lanceur ne peut donner qu'une seule benediction à la fois.",
    },
    {
      Nom: AptitudeTypeName.MANTRA,
      Description:
        "Un mantra vous octroie des bonus passifs de manière permanente.",
    },
    {
      Nom: AptitudeTypeName.TECHNIQUE_CORPS_A_CORPS,
      Description: `Vous effectuez un jet d'attaque avec la compétence ${CompetenceName.CORPS_A_CORPS} (${CaracteritiqueName.VIGUEUR} ou ${CaracteritiqueName.AGILITE}) et appliquez des effets supplémentaire selon l'aptitude.`,
    },
    {
      Nom: AptitudeTypeName.AMELIORATION,
      Description:
        "Vous octroi des bonus tant que cette amelioration est active sur la piece d'équipement.",
    },
    {
      Nom: AptitudeTypeName.INJONCTION,
      Description:
        "Vous appliquer vos effets sur une cible qui peut vous voir.",
    },
    {
      Nom: AptitudeTypeName.POSTURE,
      Description:
        "La posture vous octroie des bonus situationnel jusqu'a ce que vous décidiez de la rompre gratuitement à votre tour, ou qu'elle ce termine prématurément.",
    },
    {
      Nom: AptitudeTypeName.REACTION,
      Description: "Cette aptitude peut être déclenché lors d'une réaction.",
    },
  ];

  private static AptitudeList: Array<Aptitude> = [
    // RANK 1
    // TODO : RANK2 : Blindage / Amélioration / Augmentation de la défense
    // TODO : RANK2 : En joue / Posture / Réaction supplémentaire pour tir
    // TODO : RANK2 : Entrainements / Augmentation de carac
    new AptitudeFixed(
      "Concentration",
      `Vous sacrifiez autant de dés de ${AttributsName.REFLEXES} et votre mouvement afin d'ajouter autant de dés à vos jets d'attaques. Lorsque cette posture se termine, vous ne pouvez regagner vos dés de ${AttributsName.REFLEXES} qu'au début de votre prochain tour.`,
      AptitudeTypeName.POSTURE,
      new Map([[CompetenceName.ARME_A_DISTANCE, 1]])
    ),
    new AptitudeFixed(
      "Ruée",
      "Vous vous déplacez de deux niveau de porté au lieux d'un seul lors de ce tour. Cette posture prend fin au début de votre prochain tour.",
      AptitudeTypeName.POSTURE,
      new Map([[CompetenceName.ATHLÉTISME, 1]])
    ),
    new AptitudeFixed(
      "Présence envoûtante",
      `Vous pouvez relancer autant de dés que votre rang de ${CompetenceName.CHARME} lors de vos test avec cette compétence.`,
      AptitudeTypeName.MANTRA,
      new Map([[CompetenceName.CHARME, 1]])
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
      AptitudeTypeName.TECHNIQUE_CORPS_A_CORPS,
      new Map([[CompetenceName.CORPS_A_CORPS, 1]])
    ),
    new AptitudeFixed(
      "Couverture improbable",
      `Vous vous déplacer d'un niveau de porté au maximum et pouvez réaliser un test de ${CompetenceName.DISCRETION} dont le DD est égale à la somme des rang de ${CompetenceName.VIGILANCE} des adversaires. Le test échoue si vous êtes toujours dans le champs de vision de l'une d'entre elle. Si le test est réussi, vous êtes considéré comme caché auprès de ces adversaires.`,
      AptitudeTypeName.REACTION,
      new Map([[CompetenceName.DISCRETION, 1]])
    ),
    new AptitudeFixed(
      "Eclat",
      "Vous subissez 3 point de stress. La cible subit 3 point de dégât par succès. Si vous avez plus d'avantage que sa valeur de Vigueur, elle perd sa réaction jusqu'a son prochain tour. Vous déclenchez automatiquement une attaque d'opportunité contre vous.",
      AptitudeTypeName.EVOCATION,
      new Map([[CompetenceName.ENTROPIE_DU_FLUIDE, 1]])
    ),
    new AptitudeFixed(
      "Équilibrage",
      "L'arme qui reçois l'amélioration ajoute 1 dé d'avantage à tout les jet d'attaque fait avec celle-ci",
      AptitudeTypeName.AMELIORATION,
      new Map([[CompetenceName.INGÉNIERIE, 1]])
    ),
    new AptitudeFixed(
      '"Craignez-moi !"',
      `Vous faite un test en opposition d'${CompetenceName.INTIMIDATION} (${CaracteritiqueName.CHARISME}) ou (${CaracteritiqueName.VIGUEUR}). Si la cible rate son test, elle est terrifiée`,
      AptitudeTypeName.INJONCTION,
      new Map([[CompetenceName.INTIMIDATION, 1]])
    ),
    new AptitudeFixed(
      "Observateur éclairé",
      `Vous bénéficiez d'autant de dés d'avantage que votre rang de ${CompetenceName.HISTOIRE} lors de vos test ou vous pouvez faire intervenir des notions d'histoire ou d'investigation.`,
      AptitudeTypeName.MANTRA,
      new Map([[CompetenceName.HISTOIRE, 1]])
    ),
    new AptitudeFixed(
      "Coup bas",
      "Vous pouvez utiliser votre réaction pour effectuer une attaque d'opportunité avec une arme de jet ou un objet contre un adversaire qui ce déplace a porté courte.",
      AptitudeTypeName.MANTRA,
      new Map([[CompetenceName.MAGOUILLE, 1]])
    ),
    new AptitudeFixed(
      "Médecine de terrain",
      `Vous pouvez relancer autant de dés que votre rang de ${CompetenceName.MÉDECINE} lors de vos test avec cette compétence.`,
      AptitudeTypeName.MANTRA,
      new Map([[CompetenceName.MÉDECINE, 1]])
    ),
    new AptitudeFixed(
      "Ordre de douleur",
      "Vous pouvez choisir au moment d'effectuer un jet d'attaque à l'arme de subir 1 point de dégâts par avantagés générés, mais d'en infliger un aux adversaires également.",
      AptitudeTypeName.BENEDICTION,
      new Map([[CompetenceName.MYTHOLOGIE, 1]])
    ),
    new AptitudeFixed(
      "Attitude diplomatique",
      `Vous pouvez relancer autant de dés que votre rang de ${CompetenceName.NÉGOCIATION} sur vos tests lors d'interaction sociales pour demander des faveurs ou un service.`,
      AptitudeTypeName.MANTRA,
      new Map([[CompetenceName.NÉGOCIATION, 1]])
    ),
    new AptitudeFixed(
      "Anticipation",
      `Vous ajoutez à vos dés de ${AttributsName.REFLEXES} autant de d6 que votre score de ${CompetenceName.PERSPICACITÉ}. Vous perdez 1 point de stress quand une attaque contre vous rate. Si vous n'avez plus de point de stress, vous ne pouvez plus profiter de ce mantra.`,
      AptitudeTypeName.MANTRA,
      new Map([[CompetenceName.PERSPICACITÉ, 1]])
    ),
    new AptitudeFixed(
      '"Comme à l’entraînement"',
      `Vous subissez 1 point de stress et relancez immédiatement un dé au choix sur le résultat d'un test de ${CompetenceName.PILOTAGE}`,
      AptitudeTypeName.POSTURE,
      new Map([[CompetenceName.PILOTAGE, 1]])
    ),
    new AptitudeFixed(
      "Sagacité",
      `Vous pouvez relancer autant de dés que votre rang de ${CompetenceName.SURVIE} lors de vos test avec cette compétence.`,
      AptitudeTypeName.MANTRA,
      new Map([[CompetenceName.SURVIE, 1]])
    ),
    new AptitudeFixed(
      "Menteur né",
      `Vous pouvez relancer autant de dés que votre rang de ${CompetenceName.TROMPERIE} lors de vos test avec cette compétence.`,
      AptitudeTypeName.MANTRA,
      new Map([[CompetenceName.TROMPERIE, 1]])
    ),
    new AptitudeFixed(
      "Sauvegarde instinctive",
      `Lorsque vous êtes la cible d'un jet d'attaque, vous pouvez relancer autant de dés ${AttributsName.REFLEXES} que votre rang de ${CompetenceName.VIGILANCE}`,
      AptitudeTypeName.REACTION,
      new Map([[CompetenceName.VIGILANCE, 1]])
    ),
    // RANK 2
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
      "Mage de guerre",
      `Pouvez lancer toutes vos ${AptitudeTypeName.EVOCATION} sur une cible unique par le biais d'une arme au corps à corps. Vous effectuez alors un Jet d'attaque avec les caractéristiques de l'arme, et dépensez autant de point de stress requis par l'${AptitudeTypeName.EVOCATION}. L'${AptitudeTypeName.EVOCATION} n'applique ses que si l'attaque réussie. Le nombre de succès qui determine alors les effets de l'aptitude est déterminé par le résultat net des avantages et des triomphe (chacun comptant pour 1 succès).`,
      AptitudeTypeName.MANTRA,
      new Map([
        [CompetenceName.CORPS_A_CORPS, 1],
        [CompetenceName.ENTROPIE_DU_FLUIDE, 1],
      ])
    ),
    new AptitudeFixed(
      "Bombe improvisée",
      `Si vous avez a votre disposition de trois ingredients adéquats (un combustible, une mèche et un contenant), vous pouvez effectuer un test de ${CompetenceName.INGÉNIERIE} (${CaracteritiqueName.INTELLIGENCE}) de DD3 pour créer une bombe artisanal que vous pouvez utiliser comme arme de jet. La puissance de la bombe est déterminée par le MJ en fonction du combustible et de la réussite de test.`,
      AptitudeTypeName.AMELIORATION,
      new Map([
        [CompetenceName.INGÉNIERIE, 1],
        [CompetenceName.ARME_A_DISTANCE, 1],
      ])
    ),
    // TODO : Creation d'une prothèse d'ingé // amelioration ? entropie du fluide // Aptitude particulière ?
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
