/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Aptitude, AptitudeType } from "src/model/Aptitude";
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
  ENTRAÎNEMENT = "Entraînement",
  NÉCROMANCIE = "Nécromancie",
  POSTURE = "Posture",
  REACTION = "Réaction",
  TECHNIQUE_CORPS_A_CORPS = "Technique au corps à corps",
}

export class ServiceAptitude {
  private static Types: Array<AptitudeType> = [
    {
      Nom: AptitudeTypeName.EVOCATION,
      Description: `Vous effectuez un test en opposition d'${CompetenceName.ENTROPIE_DU_FLUIDE} (${CaracteritiqueName.INTELLIGENCE}) contre une cible à portée moyenne. Vous n'avez pas besoin de voir la cible. Vous devez avoir une main libre pour effectuer des composantes somatique. Vous provoquez immédiatement une attaque d'opportunité contre vous.`,
    },
    {
      Nom: AptitudeTypeName.NÉCROMANCIE,
      Description:
        "L'aptitude consomme l'énergie résiduelle d'un ou plusieurs cadavres frais (quelques heures maximum) à porté moyenne. Vous n'avez pas besoin de voir la cible. Vous devez avoir une main libre pour effectuer des composantes somatique. Vous provoquez immédiatement une attaque d'opportunité contre vous.",
    },
    {
      Nom: AptitudeTypeName.BENEDICTION,
      Description:
        "Toute les creature au choix a porté courte reçoivent des bonus pour le reste de la journée. Le lanceur ne peut donner qu'une seule benediction à la fois.",
    },
    {
      Nom: AptitudeTypeName.MANTRA,
      Description:
        "Un mantra vous octroie des bonus passifs de manière permanente. Il représente une alteration permanente du personnage provoquée par ses interactions passées avec le fluide.",
    },
    {
      Nom: AptitudeTypeName.ENTRAÎNEMENT,
      Description:
        "Un Entraînement vous octroie des bonus passifs de manière permanente. Il représente une longue experience théorique et pratique pour perfectionner ses aptitudes.",
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
        "Vous appliquer vos effets sur une cible qui vous voit et vous entend.",
    },
    {
      Nom: AptitudeTypeName.POSTURE,
      Description:
        "La posture vous octroie des bonus situationnel jusqu'à ce que vous décidiez de la rompre gratuitement à votre tour, ou qu'elle ce termine prématurément.",
    },
    {
      Nom: AptitudeTypeName.REACTION,
      Description: "Cette aptitude peut être déclenché lors d'une réaction.",
    },
  ];

  private static AptitudeList: Array<Aptitude> = [
    // RANK 1
    new Aptitude(
      "Concentration",
      `Vous sacrifiez autant de dés de ${AttributsName.REFLEXES} et votre mouvement afin d'ajouter autant de dés à vos jets d'attaques. Lorsque cette posture se termine, vous ne pouvez regagner vos dés de ${AttributsName.REFLEXES} qu'au début de votre prochain tour.`,
      AptitudeTypeName.POSTURE,
      new Map([[CompetenceName.ARME_A_DISTANCE, 1]])
    ),
    new Aptitude(
      "Ruée",
      "Vous vous déplacez de deux niveau de porté au lieux d'un seul lors de ce tour. Cette posture prend fin au début de votre prochain tour.",
      AptitudeTypeName.POSTURE,
      new Map([[CompetenceName.ATHLÉTISME, 1]])
    ),
    new Aptitude(
      "Présence envoûtante",
      `Vous pouvez relancer autant de dés que votre rang de ${CompetenceName.CHARME} lors de vos test avec cette compétence. Vous aimez beaucoup être le centre d’intérêt des conversations.`,
      AptitudeTypeName.MANTRA,
      new Map([[CompetenceName.CHARME, 1]])
    ),
    new Aptitude(
      "Combatant agile",
      `Vous gagnez 1 dé de ${AttributsName.REFLEXES} par points dans la compétence ${CompetenceName.COORDINATION}`,
      AptitudeTypeName.POSTURE,
      new Map([[CompetenceName.COORDINATION, 1]])
    ),
    new Aptitude(
      "Feinte",
      `Pour chaque avantage généré lors du jet d'attaque, l'adversaire perd 1 dé de ${AttributsName.REFLEXES}. Cette technique ne peut pas infliger de dégâts.`,
      AptitudeTypeName.TECHNIQUE_CORPS_A_CORPS,
      new Map([[CompetenceName.CORPS_A_CORPS, 1]])
    ),
    new Aptitude(
      "Couverture improbable",
      `Vous vous déplacer d'un niveau de porté au maximum et pouvez réaliser un test de ${CompetenceName.DISCRETION} dont le DD est égale à la somme des rang de ${CompetenceName.VIGILANCE} des adversaires. Le test échoue si vous êtes toujours dans le champs de vision de l'une d'entre elle. Si le test est réussi, vous êtes considéré comme caché auprès de ces adversaires.`,
      AptitudeTypeName.REACTION,
      new Map([[CompetenceName.DISCRETION, 1]])
    ),
    new Aptitude(
      "Eclat",
      "Vous consommé autant de dé d’ésotérisme que souhaitez et les opposez aux dé d’ésotérisme restant de la cible. La cible subit 3 point de dégât par succès. Si vous avez plus d'avantage que sa valeur de Vigueur, elle perd sa réaction jusqu'a son prochain tour.",
      AptitudeTypeName.EVOCATION,
      new Map([[CompetenceName.ENTROPIE_DU_FLUIDE, 1]])
    ),
    new Aptitude(
      "Équilibrage",
      "L'arme qui reçois l'amélioration ajoute 1 dé de supériorité à tout les jet d'attaque fait avec celle-ci",
      AptitudeTypeName.AMELIORATION,
      new Map([[CompetenceName.INGÉNIERIE, 1]])
    ),
    new Aptitude(
      '"Craignez-moi !"',
      `Vous faite un test en opposition d'${CompetenceName.INTIMIDATION} (${CaracteritiqueName.CHARISME}) ou (${CaracteritiqueName.VIGUEUR}). Si la cible rate son test, elle est terrifiée`,
      AptitudeTypeName.INJONCTION,
      new Map([[CompetenceName.INTIMIDATION, 1]])
    ),
    new Aptitude(
      "Observateur éclairé",
      `Vous bénéficiez d'autant de dés de supériorité que votre rang de ${CompetenceName.HISTOIRE} lors de vos test ou vous pouvez faire intervenir des notions d'histoire ou d'investigation.`,
      AptitudeTypeName.ENTRAÎNEMENT,
      new Map([[CompetenceName.HISTOIRE, 1]])
    ),
    new Aptitude(
      "Coup bas",
      "Vous pouvez utiliser votre réaction pour effectuer une attaque d'opportunité avec une arme de jet ou un objet à porté de main contre un adversaire qui ce déplace a porté courte.",
      AptitudeTypeName.REACTION,
      new Map([[CompetenceName.MAGOUILLE, 1]])
    ),
    new Aptitude(
      "Médecine de terrain",
      `Vous pouvez relancer autant de dés que votre rang de ${CompetenceName.MÉDECINE} lors de vos tests avec cette compétence.`,
      AptitudeTypeName.ENTRAÎNEMENT,
      new Map([[CompetenceName.MÉDECINE, 1]])
    ),
    new Aptitude(
      "Ordre de douleur",
      "Vous pouvez choisir au moment d'effectuer un jet d'attaque à l'arme de subir 1 point de dégâts par avantagés générés, mais d'en infliger un aux adversaires également.",
      AptitudeTypeName.BENEDICTION,
      new Map([[CompetenceName.MYTHOLOGIE, 1]])
    ),
    new Aptitude(
      "Attitude diplomatique",
      `Vous pouvez relancer autant de dés que votre rang de ${CompetenceName.NÉGOCIATION} sur vos tests lors d'interaction sociales pour demander des faveurs ou un service.`,
      AptitudeTypeName.ENTRAÎNEMENT,
      new Map([[CompetenceName.NÉGOCIATION, 1]])
    ),
    new Aptitude(
      "",
      `Vous bénéficiez d'autant de dés de supériorité que votre rang de ${CompetenceName.PERSPICACITÉ} lors vous subissez des tests en opposition de ${CompetenceName.CHARME}, ${CompetenceName.NÉGOCIATION} ou de ${CompetenceName.TROMPERIE}`,
      AptitudeTypeName.POSTURE,
      new Map([[CompetenceName.PERSPICACITÉ, 1]])
    ),
    new Aptitude(
      '"Comme à l’entraînement"',
      `Vous consommez 1 dé s'ésotérisme et relancez immédiatement un dé au choix sur le résultat d'un test de ${CompetenceName.PILOTAGE}.`,
      AptitudeTypeName.POSTURE,
      new Map([[CompetenceName.PILOTAGE, 1]])
    ),
    new Aptitude(
      "Instincts de survie",
      `Vous pouvez relancer autant de dés que votre rang de ${CompetenceName.SURVIE} lors de vos tests avec cette compétence.`,
      AptitudeTypeName.ENTRAÎNEMENT,
      new Map([[CompetenceName.SURVIE, 1]])
    ),
    new Aptitude(
      "Menteur né",
      `Vous pouvez relancer autant de dés que votre rang de ${CompetenceName.TROMPERIE} lors de vos test avec cette compétence.`,
      AptitudeTypeName.ENTRAÎNEMENT,
      new Map([[CompetenceName.TROMPERIE, 1]])
    ),
    new Aptitude(
      "Sauvegarde instinctive",
      `Lorsque vous êtes la cible d'un jet d'attaque, vous pouvez relancer autant de dés ${AttributsName.REFLEXES} que votre rang de ${CompetenceName.VIGILANCE}`,
      AptitudeTypeName.REACTION,
      new Map([[CompetenceName.VIGILANCE, 1]])
    ),
    // RANK 2
    // TODO : RANK2 : Blindage / Amélioration / Augmentation de la défense
    // TODO : RANK2 : Pacte de la lame ?
    // TODO : RANK2 : Pacte de la guerre (arme a distance) ?
    new Aptitude(
      "Entraînement physique",
      "Vous Augmentez votre valeur de Vigueur de 1 de manière permanente. Vous êtes plutôt quelqu'un de discipliné.",
      AptitudeTypeName.ENTRAÎNEMENT,
      new Map([[CompetenceName.ATHLÉTISME, 2]])
    ),
    new Aptitude(
      "Entraînement tactique",
      "Vous Augmentez votre valeur d'Agilité de 1 de manière permanente. Vous êtes plutôt quelqu'un de discipliné.",
      AptitudeTypeName.ENTRAÎNEMENT,
      new Map([[CompetenceName.COORDINATION, 2]])
    ),
    new Aptitude(
      "Entraînement au tir",
      "Vous Augmentez votre valeur d'Adresse de 1 de manière permanente. Vous êtes plutôt quelqu'un de discipliné.",
      AptitudeTypeName.ENTRAÎNEMENT,
      new Map([[CompetenceName.ARME_A_DISTANCE, 2]])
    ),
    new Aptitude(
      "En joue",
      "Vous avez une reaction supplémentaire par tour que vous pouvez utiliser uniquement pour effectuer une attaque d’opportunité avec une arme a distance que vous tenez en main.",
      AptitudeTypeName.POSTURE,
      new Map([
        [CompetenceName.ARME_A_DISTANCE, 1],
        [CompetenceName.VIGILANCE, 1],
      ])
    ),
    new Aptitude(
      "Frappes sournoises",
      "Chaque fois que vous frappez un adversaire au corps-à-corps face et que vous avez au moins 1 dé de supériorité, vous infligez 1 point de dégâts supplémentaire par triomphe.",
      AptitudeTypeName.POSTURE,
      new Map([
        [CompetenceName.DISCRETION, 1],
        [CompetenceName.CORPS_A_CORPS, 1],
      ])
    ),
    new Aptitude(
      "Nova morbide",
      `Le cadavre ciblé 'explose' et blesse toutes les créatures à porté courte. Lancez autant de d6 que le maximum dé d’ésotérisme du cadavre, et opposez le résultat à chacun de leur score de ${AttributsName.REFLEXES}.Vous infligez 3 point de dégâts par succès.`,
      AptitudeTypeName.NÉCROMANCIE,
      new Map([
        [CompetenceName.ENTROPIE_DU_FLUIDE, 1],
        [CompetenceName.MÉDECINE, 1],
      ])
    ),
    new Aptitude(
      "Morsure de Namtar",
      "Vous réaliser un jet d'attaque et infligez 2 point de dégât par succès. Vous volez à la cible 1 dé d'ésotérisme par Triomphes et par avantages.",
      AptitudeTypeName.TECHNIQUE_CORPS_A_CORPS,
      new Map([
        [CompetenceName.CORPS_A_CORPS, 1],
        [CompetenceName.ENTROPIE_DU_FLUIDE, 1],
      ])
    ),
    new Aptitude(
      "Griffe dimensionnelle",
      `Vous réalisez un jet d'attaque en opposant vos dés d'ésotérisme restant a la défense de la cible. Vous infligez autant de dégât par succès et par triomphe que votre rang d'${CompetenceName.ENTROPIE_DU_FLUIDE}. Vous dépensez 1 dé d'ésotérisme.`,
      AptitudeTypeName.TECHNIQUE_CORPS_A_CORPS,
      new Map([
        [CompetenceName.CORPS_A_CORPS, 1],
        [CompetenceName.ENTROPIE_DU_FLUIDE, 1],
      ])
    ),
    new Aptitude(
      "Echophagie",
      "Vous relancer 1 dé de vie et soignez vous du montant indiqué à chaque fois que vous regagner des dé d'ésotérisme. Vous montrez clairement des signes d'addiction, qui semblent se calmer lorsque le fluide ce manifeste près de vous.",
      AptitudeTypeName.MANTRA,
      new Map([
        [CompetenceName.SURVIE, 1],
        [CompetenceName.ENTROPIE_DU_FLUIDE, 1],
      ])
    ),
    new Aptitude(
      "Mage de guerre",
      `Pouvez lancer toutes vos ${AptitudeTypeName.EVOCATION} sur une cible unique par le biais d'une arme au corps à corps. Vous effectuez alors un jet d'attaque avec les caractéristiques de l'arme, et dépensez aussi autant de dé d'ésotérisme requis par l'${AptitudeTypeName.EVOCATION}. L'${AptitudeTypeName.EVOCATION} n'applique ses que si l'attaque réussie. Le nombre de succès qui determine alors les effets de l'aptitude est déterminé par le résultat net des avantages et des triomphe (chacun comptant pour 1 succès). Vous avec un petit complexe de supériorité.`,
      AptitudeTypeName.MANTRA,
      new Map([
        [CompetenceName.CORPS_A_CORPS, 1],
        [CompetenceName.ENTROPIE_DU_FLUIDE, 1],
      ])
    ),
    new Aptitude(
      "Bombe improvisée",
      `Si vous avez a votre disposition de trois ingredients adéquats (un combustible, une mèche et un contenant), vous pouvez effectuer un test de ${CompetenceName.INGÉNIERIE} (${CaracteritiqueName.INTELLIGENCE}) de DD3 pour créer une bombe artisanal que vous pouvez utiliser comme arme de jet. La puissance de la bombe est déterminée par le MJ en fonction du combustible et de la réussite de test.`,
      AptitudeTypeName.AMELIORATION,
      new Map([
        [CompetenceName.INGÉNIERIE, 1],
        [CompetenceName.ARME_A_DISTANCE, 1],
      ])
    ),
    new Aptitude(
      "Vol de vitesse",
      `La cible perd autant de dé de réflexes (d6) que votre rang d'${CompetenceName.ENTROPIE_DU_FLUIDE}. Vous ou un allié à porté moyenne bénéficie d'autant de dés de supériorités supplémentaires à son prochain jet d'attaque ou de défense. L'effet cesse à ce moment.`,
      AptitudeTypeName.EVOCATION,
      new Map([
        [CompetenceName.ENTROPIE_DU_FLUIDE, 1],
        [CompetenceName.TROMPERIE, 1],
      ])
    ),
    new Aptitude(
      "Anticipation surnaturelle",
      `Vous pouvez à tout moment décider de consommer autant de dé d'ésotérisme que votre score de ${CompetenceName.PERSPICACITÉ} pour les ajouter à vos dés de ${AttributsName.REFLEXES}. Vous avez constamment l'impression que quelqu'un ou que quelque chose vous veux du mal.`,
      AptitudeTypeName.MANTRA,
      new Map([
        [CompetenceName.PERSPICACITÉ, 1],
        [CompetenceName.ENTROPIE_DU_FLUIDE, 1],
      ])
    ),
    // RANK 3
    new Aptitude(
      "Vœu de puissance",
      `Pactiser avec les puissances obscures est un jeu dangereux, mais vous n'êtes pas mauvais. Vous augmentez de manière permanente votre total de dé d'${AttributsName.ÉSOTÉRISME} de 1 pour chaque rang investis en ${CompetenceName.ENTROPIE_DU_FLUIDE}.`,
      AptitudeTypeName.MANTRA,
      new Map([
        [CompetenceName.ENTROPIE_DU_FLUIDE, 1],
        [CompetenceName.MYTHOLOGIE, 1],
        [CompetenceName.NÉGOCIATION, 1],
      ])
    ),
    // TODO : Creation d'une prothèse d'ingé // amelioration ? entropie du fluide // Aptitude particulière ?
    // TODO : Aptitude qui fait des dégât en fonction du pouvoir / nombre de mantra de la cible ?
    // TODO : Aptitude pour achevez des cibles aux portes de la mort ?
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
