/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Aptitude, AptitudeType } from "src/model/Aptitude";
import { AttributsName } from "src/model/Attribut";
import { CaracteritiqueName } from "src/model/Caracteristique";
import { CompetenceName } from "src/model/Competence";

export enum AptitudeTypeName {
  // TODO : Mutation (liée aux concept de 'ethnotrait') - Aptitude liée a un trait
  AMELIORATION = "Amélioration",
  BENEDICTION = "Bénédiction",
  EVOCATION = "Évocation",
  INVOCATION = "Invocation",
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
      Nom: AptitudeTypeName.INVOCATION,
      Description: `Vous appliquez les effets de l'aptitude sur la zone ciblée en effectuant en test d'${CompetenceName.ENTROPIE_DU_FLUIDE} (${CaracteritiqueName.INTELLIGENCE}). Vous n'avez pas besoin de voir la cible. Vous devez avoir une main libre pour effectuer des composantes somatique. Vous provoquez immédiatement une attaque d'opportunité contre vous.`,
    },
    {
      Nom: AptitudeTypeName.NÉCROMANCIE,
      Description:
        "L'aptitude consomme l'énergie résiduelle d'un ou plusieurs cadavres frais (quelques heures maximum), ou des personnes neutralisée à porté moyenne. Vous n'avez pas besoin de voir la cible. Vous devez avoir une main libre pour effectuer des composantes somatique. Vous provoquez immédiatement une attaque d'opportunité contre vous.",
    },
    {
      Nom: AptitudeTypeName.BENEDICTION,
      Description:
        "Toute les creature au choix à porté courte lors de l'appel de la benediction reçoivent des bonus jusqu'au prochain repos long. Le lanceur ne peut prodiguer qu'une seule benediction à la fois.",
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
      Description:
        "Vous effectuez un jet d'attaque avec la compétence et la caractéristique requise par votre arme et appliquez des effets supplémentaire selon l'aptitude.",
    },
    {
      Nom: AptitudeTypeName.AMELIORATION,
      Description:
        "Une amélioration octroie un bonus sur la pièce d'équipement ciblée jusqu'à ce que l'utilisateur décide de la retirer avec une action libre. Une telle aptitude ne peut être affectée qu'à une seule pièce d'équipement à la fois.",
    },
    {
      Nom: AptitudeTypeName.INJONCTION,
      Description:
        "Vous appliquez vos effets sur une cible qui vous voit et vous entend.",
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
      `Vous sacrifiez autant de dés de ${AttributsName.REFLEXES} ainsi que votre mouvement afin d'ajouter autant de dés de supériorités (d4) à vos jets d'attaques. Lorsque cette posture se termine, vous ne pouvez regagner vos dés de ${AttributsName.REFLEXES} qu'au début de votre prochain tour.`,
      AptitudeTypeName.POSTURE,
      new Map([[CompetenceName.ARME_A_DISTANCE, 1]])
    ),
    new Aptitude(
      "Attraction",
      "La cible est projetée dans votre direction sur une distance de 1m par succès net, et se retrouve à terre. Elle subit également 1 point de dégâts par avantages net.",
      AptitudeTypeName.EVOCATION,
      new Map([[CompetenceName.ENTROPIE_DU_FLUIDE, 1]])
    ),
    new Aptitude(
      "Ruée",
      "Vous augmentez de 2m votre vitesse de déplacement. Cette posture prend fin si vous effectuez une attaque ou une aptitude.",
      AptitudeTypeName.POSTURE,
      new Map([[CompetenceName.ATHLÉTISME, 1]])
    ),
    new Aptitude(
      "Présence envoûtante",
      `Vous pouvez relancer autant de dés que votre rang de ${CompetenceName.CHARME} lors de vos test avec cette compétence.`,
      AptitudeTypeName.MANTRA,
      new Map([[CompetenceName.CHARME, 1]])
    ),
    new Aptitude(
      "Pose prudente",
      `Vous augmentez votre valeur de ${AttributsName.REFLEXES} de 1 par rang de ${CompetenceName.COORDINATION}`,
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
      `Vous pouvez réaliser immédiatement mouvement gratuit et puis effectuez un test de ${CompetenceName.DISCRETION} dont le DD est égale à la somme des rang de ${CompetenceName.VIGILANCE} des adversaires. Le test échoue si vous êtes toujours dans le champs de vision de l'une d'entre elle. Si le test est réussi, vous êtes considéré comme caché auprès de ces adversaires.`,
      AptitudeTypeName.REACTION,
      new Map([[CompetenceName.DISCRETION, 1]])
    ),
    new Aptitude(
      "Équilibrage",
      "L'arme qui reçois l'amélioration ajoute 1 dé de supériorité à tout les jet d'attaque fait avec celle-ci",
      AptitudeTypeName.AMELIORATION,
      new Map([[CompetenceName.INGÉNIERIE, 1]])
    ),
    new Aptitude(
      '"Craignez-moi !"',
      `Vous faite un test en opposition d'${CompetenceName.INTIMIDATION} (${CaracteritiqueName.CHARISME}) ou (${CaracteritiqueName.VIGUEUR}). Si la cible rate son test, elle est Terrorisée`,
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
      "Avant d'effectuer une attaque, vous pouvez choisir de subir 1 point de dégâts par avantages générés lors du jet l'attaque, et d'infliger un point de dégât aux adversaires également.",
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
      "Armure de l'impassible",
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
      "Entraînement spécial au tir",
      "Vous Augmentez votre valeur d'Adresse de 1 de manière permanente.",
      AptitudeTypeName.ENTRAÎNEMENT,
      new Map([[CompetenceName.ARME_A_DISTANCE, 2]])
    ),
    new Aptitude(
      "Rupture mentale",
      `Vous consommez autant de dé d’${AttributsName.ÉSOTÉRISME} que souhaitez et les opposez aux dés d’${AttributsName.ÉSOTÉRISME} restant de la cible. La cible subit 3 point de dégât par succès. Si vous avez plus d'avantage que sa valeur de Vigueur, elle perd sa réaction par défaut jusqu'à son prochain tour.`,
      AptitudeTypeName.INJONCTION,
      new Map([
        [CompetenceName.ENTROPIE_DU_FLUIDE, 1],
        [CompetenceName.CHARME, 1],
      ])
    ),
    new Aptitude(
      "Signature de rebond de puissance",
      `Vous pouvez octroyer une amélioration supplémentaire par rang en ${CompetenceName.INGÉNIERIE}. Une arme ne peux pas bénéficier de la même ${AptitudeTypeName.AMELIORATION} deux fois.`,
      AptitudeTypeName.MANTRA,
      new Map([[CompetenceName.INGÉNIERIE, 2]])
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
      "Égide",
      `Vous gagnez 1 dé de supériorité par rang de ${CompetenceName.VIGILANCE} contre les attaques au corps à corps contre vous. Pour chaque attaque menaces générées sur le jet d'attaque contre vous, celui qui maintient la bénédiction consomme 1 dé d'${AttributsName.ÉSOTÉRISME}. La bénédiction prends fin si le prodigue n'a plus de dés d'${AttributsName.ÉSOTÉRISME}.`,
      AptitudeTypeName.BENEDICTION,
      new Map([
        [CompetenceName.MYTHOLOGIE, 1],
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
      `Doit cibler un cadavre. Ce dernier libère une énergie mortelle et blesse toutes les créatures sur 3m autour de lui. Lancez autant de d6 que le maximum dé d’ésotérisme du cadavre, et opposez le résultat à chacun de leur score de ${AttributsName.REFLEXES}. Vous infligez 3 point de dégâts par succès.`,
      AptitudeTypeName.NÉCROMANCIE,
      new Map([
        [CompetenceName.ENTROPIE_DU_FLUIDE, 1],
        [CompetenceName.MÉDECINE, 1],
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
      `A chaque fois que vous regagnez des dés d'${AttributsName.ÉSOTÉRISME}, y compris pendant les repos court, vous pouvez lancer gratuitement 1 dé de vie pour vous soigner immédiatement. Vous ne regagnez plus de dès de vie lors des repos long.`,
      AptitudeTypeName.MANTRA,
      new Map([
        [CompetenceName.SURVIE, 1],
        [CompetenceName.MYTHOLOGIE, 1],
      ])
    ),
    new Aptitude(
      "Mage de guerre",
      `Vous pouvez lancer toutes vos ${AptitudeTypeName.EVOCATION} sur une cible unique par le biais d'une arme au corps à corps. Vous effectuez alors un jet d'attaque avec les caractéristiques de l'arme et en dépensant 1 point d'action supplémentaire. L'${AptitudeTypeName.EVOCATION} n'applique ses effets que si l'attaque réussie. Le nombre de succès qui determine alors les effets de l'aptitude est déterminé par le résultat net des avantages et des triomphe (chacun comptant pour 1 succès).`,
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
      `Vous pouvez à tout moment décider de consommer autant de dé d'ésotérisme que votre score de ${CompetenceName.PERSPICACITÉ} pour les ajouter à vos dés de ${AttributsName.REFLEXES}.`,
      AptitudeTypeName.MANTRA,
      new Map([
        [CompetenceName.PERSPICACITÉ, 1],
        [CompetenceName.ENTROPIE_DU_FLUIDE, 1],
      ])
    ),
    // RANK 3
    new Aptitude(
      "Morsure de Namtar",
      "Vous réaliser un jet d'attaque et infligez 2 point de dégât par succès. Vous volez à la cible 1 dé d'ésotérisme par Triomphes et par avantages.",
      AptitudeTypeName.TECHNIQUE_CORPS_A_CORPS,
      new Map([
        [CompetenceName.CORPS_A_CORPS, 1],
        [CompetenceName.ENTROPIE_DU_FLUIDE, 1],
        [CompetenceName.SURVIE, 1],
      ])
    ),
    new Aptitude(
      "Vœu de puissance",
      `Pactiser avec les puissances obscures est un jeu dangereux, mais vous n'êtes pas mauvais. Vous augmentez de manière permanente votre total de dé d'${AttributsName.ÉSOTÉRISME} de 1 pour chaque rang investis en ${CompetenceName.ENTROPIE_DU_FLUIDE}.`,
      AptitudeTypeName.MANTRA,
      new Map([
        [CompetenceName.ENTROPIE_DU_FLUIDE, 1],
        [CompetenceName.HISTOIRE, 1],
        [CompetenceName.NÉGOCIATION, 1],
      ])
    ),
    new Aptitude(
      "Singularité",
      `Vous créez un nano trou noir sur l'emplacement de votre choix à moins de 18m de vous. Toutes les creatures à moins de 9m et dont le score de ${CaracteritiqueName.VIGUEUR} est inférieur au nombre de succès net sont immédiatement projetées sur 3m vers la singularité et sont à terre. Vous pouvez augmenter la projection de 1m par avantages net, et vous infligez également 3 point de dégâts par triomphe. Chaque début de tour du lanceur provoque une pulsation qui applique ces effets. Le lanceur perd 2 dés d'${AttributsName.ÉSOTÉRISME} jusqu'à ce qu'il n'ai plus de dés ou que l'invocation soit brisée.`,
      AptitudeTypeName.INVOCATION,
      new Map([
        [CompetenceName.ENTROPIE_DU_FLUIDE, 2],
        [CompetenceName.MYTHOLOGIE, 1],
      ])
    ),
    new Aptitude(
      "Revers cinétique",
      `Vous ajouter autant de dé d'${AttributsName.ÉSOTÉRISME} au jets de défense de la cible de votre choix dans un rayon de 9m. Si l'attaque est bloquée de cette manière, vous regagnez 1 dé d'${AttributsName.ÉSOTÉRISME}.`,
      AptitudeTypeName.REACTION,
      new Map([
        [CompetenceName.ENTROPIE_DU_FLUIDE, 1],
        [CompetenceName.VIGILANCE, 2],
      ])
    ),
    new Aptitude(
      "Vampire d'âme",
      `Vous absorber l’énergie résiduelle de la creature neutralisée ou récemment morte et regagnez 1 dé ${AttributsName.ÉSOTÉRISME}. Vous gagnez 1 dé supplémentaire si vous touchez la cible.`,
      AptitudeTypeName.NÉCROMANCIE,
      new Map([
        [CompetenceName.ENTROPIE_DU_FLUIDE, 1],
        [CompetenceName.MÉDECINE, 1],
        [CompetenceName.MYTHOLOGIE, 1],
      ])
    ),
    new Aptitude(
      "Attrition",
      "A chacune de vos attaques au corps à corps, vous pouvez choisir de remplacer jusqu'à 2 succès par autant avantages.",
      AptitudeTypeName.POSTURE,
      new Map([
        [CompetenceName.CORPS_A_CORPS, 2],
        [CompetenceName.PERSPICACITÉ, 1],
      ])
    ),
    // new Aptitude(
    //   "Mémoires liquides",
    //   `Vous pouvez remplacer une aptitude que vous avez préparé contre une autre aptitude que vous connaissez.`,
    //   AptitudeTypeName.INVOCATION,
    //   new Map([
    //     [CompetenceName.HISTOIRE, 2],
    //     [CompetenceName.ENTROPIE_DU_FLUIDE, 1],
    //   ])
    // ),
    // TODO : Creation d'une prothèse d'ingé (ethnotraits ? // entropie du fluide // Aptitude particulière ?)
    // TODO : Rupture spirituelle - Aptitude qui fait des dégât en fonction du pouvoir / nombre de mantra de la cible ?
    // TODO : Aptitude pour achevez des cibles aux portes de la mort ?
    // TODO : Aptitude spéciales contres les invocation
    // TODO : Histoire + Entropie = Invocation d'entitée +/- consciente
    // TODO : Mythologie + Entropie = Invocation de conceptes
    // TODO : Medecine + Entropie = Necromancié
    // TODO : Aptitude vol de pensée // interroger une personne inconsciente?
    // TODO : Aptitude : Mémoire liquides : Changement d'aptitude en plain combat : a implémenter quand l'apprentissage des compétences sera mûri.
    // TODO : Concept pour classer les aptitudes : Si pas d'expertise = Aptitude mineurs (un aventurier de lvl1 peut les maitrisé) : Si 1 expertise = aptitudes majeur , si 2 expertise aptitude elite, si 3 expertise = aptitude légendaire
    // TODO : Aptitude : Réduction du temps d'action des aptitudes mineurs ?
    // RANK 4
    new Aptitude(
      "Assaut brutal",
      `Si le nombre d'avantages net est supérieur la valeur de ${CaracteritiqueName.VIGUEUR} et de ${AttributsName.REFLEXES} de la cible, elle est a terre, même si l'attaque échoue.`,
      AptitudeTypeName.TECHNIQUE_CORPS_A_CORPS,
      new Map([
        [CompetenceName.CORPS_A_CORPS, 2],
        [CompetenceName.ATHLÉTISME, 2],
      ])
    ),
    // TODO : Aptitudes : Voies Ancestrale (Histoire + compétences martiales)
    // TODO : Aptitudes : Voies Primitives (Survie + compétences martiales)
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
