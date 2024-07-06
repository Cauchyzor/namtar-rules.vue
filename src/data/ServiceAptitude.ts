/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Aptitude, AptitudeRang, AptitudeType } from "src/model/Aptitude";
import { AttributsName } from "src/model/Attribut";
import { CaracteristiqueName } from "src/model/Caracteristique";
import { CompetenceName } from "src/model/Competence";

export enum AptitudeTypeName {
  // TODO : Mutation (liée aux concept de 'ethnotraits') - Aptitude liée a un trait
  AMELIORATION = "Amélioration",
  BENEDICTION = "Bénédiction",
  EVOCATION = "Évocation",
  INVOCATION = "Invocation",
  INJONCTION = "Injonction",
  MANTRA = "Mantra",
  ENTRAÎNEMENT = "Entraînement",
  NÉCROMANCIE = "Nécromancie",
  PROJECTILE_PHYSIQUE = "Projectile physique",
  POSTURE = "Posture",
  REACTION = "Réaction",
  TECHNIQUE_CORPS_A_CORPS = "Technique au corps à corps",
}

export class ServiceAptitude {
  private static Types: Array<AptitudeType> = [
    {
      Nom: AptitudeTypeName.EVOCATION,
      Description: `Vous effectuez un test en opposition d'${CompetenceName.ENTROPIE_DU_FLUIDE} (${CaracteristiqueName.INTELLIGENCE}) contre une cible. Vous n'avez pas besoin de voir la cible. Vous devez avoir une main libre pour effectuer des composantes somatique. Vous provoquez immédiatement une attaque d'opportunité contre vous.`,
    },
    {
      Nom: AptitudeTypeName.PROJECTILE_PHYSIQUE,
      Description: `Vous effectuez un jet d'attaque a distance avec compétence d'${CompetenceName.ENTROPIE_DU_FLUIDE} (${CaracteristiqueName.INTELLIGENCE}). Vous devez avoir une main libre pour effectuer des composantes somatique. Vous provoquez immédiatement une attaque d'opportunité contre vous.`,
    },
    {
      Nom: AptitudeTypeName.INVOCATION,
      Description: `Vous appliquez les effets de l'aptitude sur la zone ciblée en effectuant en test d'${CompetenceName.ENTROPIE_DU_FLUIDE} (${CaracteristiqueName.INTELLIGENCE}) de DD3. Vous n'avez pas besoin de voir la cible. Vous devez avoir une main libre pour effectuer des composantes somatique. Vous provoquez immédiatement une attaque d'opportunité contre vous.`,
    },
    {
      Nom: AptitudeTypeName.NÉCROMANCIE,
      Description:
        "L'aptitude consomme l'énergie résiduelle d'un ou plusieurs cadavres frais (quelques heures maximum), ou des personnes neutralisée. Vous n'avez pas besoin de voir la cible. Vous devez avoir une main libre pour effectuer des composantes somatique. Vous provoquez immédiatement une attaque d'opportunité contre vous.",
    },
    {
      Nom: AptitudeTypeName.BENEDICTION,
      Description:
        "Toute les créatures au choix à 9m ou moins de vous lors de l'appel de la benediction reçoivent des bonus jusqu'au prochain repos long. Le lanceur ne peut prodiguer qu'une seule benediction à la fois.",
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
        "Une amélioration octroie un bonus sur la pièce d'équipement ciblée jusqu'à ce que l'utilisateur décide de la retirer avec une action libre. Le lanceur de cette aptitude ne peut l'affecter qu'à une seule pièce d'équipement à la fois, ou alors l'amélioration s'estompe immédiatement de l'ancienne pièce d'équipement.",
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
    // APTITUDES MINEURE
    new Aptitude(
      "Concentration",
      `Vous sacrifiez vos dés de ${AttributsName.REFLEXES} ainsi que votre mouvement afin d'ajouter autant de dés de supériorités (d4) que votre rang d'${CompetenceName.ARME_A_DISTANCE} à vos jets d'attaques. Lorsque cette posture se termine, vous ne pouvez regagner vos dés de ${AttributsName.REFLEXES} qu'au début de votre prochain tour.`,
      AptitudeTypeName.POSTURE,
      new Map([[CompetenceName.ARME_A_DISTANCE, 1]])
    ),
    new Aptitude(
      "Forte tête",
      `Lorsque vous êtes la cible d'${AptitudeTypeName.INJONCTION}, la cible subit 1 dé de handicap un 1 dé supplémentaire pour tout les deux point de ${CaracteristiqueName.CHARISME} que vous possédez. Vous montez au rang 1 votre compétence de ${CompetenceName.NÉGOCIATION}, ou d'${CompetenceName.INTIMIDATION} `,
      AptitudeTypeName.ENTRAÎNEMENT,
      new Map([[CompetenceName.DISCRETION, 2]])
    ),
    new Aptitude(
      "Attraction",
      "La cible est projetée à terre dans votre direction sur une distance de 1m par succès net au maximum. Elle subit également 1 point de dégâts par avantages net.",
      AptitudeTypeName.EVOCATION,
      new Map([[CompetenceName.ENTROPIE_DU_FLUIDE, 1]])
    ),
    new Aptitude(
      "Riposte",
      `Vous mettez fin a votre ${AptitudeTypeName.POSTURE} si vous en aviez une, et vous ajoutez votre rang de ${CompetenceName.CORPS_A_CORPS} ou de ${CompetenceName.COORDINATION} a votre prochain jet de défense.`,
      AptitudeTypeName.REACTION,
      new Map([[CompetenceName.CORPS_A_CORPS, 1]])
    ),
    new Aptitude(
      "Couteaux de glace",
      `Vous formez de fines lames nées de condensation et les projetez a une vitesse démesurée sur la cible. Vous formez autant de couteaux que votre valeur de ${AttributsName.SPIRITHIUM} et chacun des couteau inflige 1 point de dégât par succès et par triomphe. Vous pouvez cibler plusieurs creature sur lesquelles vous avez une ligne de vue, jusqu'à 27m`,
      AptitudeTypeName.PROJECTILE_PHYSIQUE,
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
      `Pour chaque avantage généré lors du jet d'attaque, l'adversaire perd 1 dé de ${AttributsName.REFLEXES} jusqu'à son prochain tour. Cette technique ne peut pas infliger de dégâts.`,
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
      "Frappe primitive",
      `Si l'attaque réussie, la cible subit 2 point de dégât supplémentaire par ${AptitudeTypeName.MANTRA} qu'elle possède`,
      AptitudeTypeName.TECHNIQUE_CORPS_A_CORPS,
      new Map([
        [CompetenceName.CORPS_A_CORPS, 1],
        [CompetenceName.SURVIE, 1],
      ])
    ),
    new Aptitude(
      "Drain spirituel",
      `La cible perd 1 dés d'${AttributsName.SPIRITHIUM} par succès net et vous en gagnez 1 par avantage net.`,
      AptitudeTypeName.EVOCATION,
      new Map([[CompetenceName.ENTROPIE_DU_FLUIDE, 1]])
    ),
    new Aptitude(
      "Pacte de maîtrise",
      `Vous pouvez utiliser votre caractéristique de ${CaracteristiqueName.CHARISME} au lieu de celle requise pour l'arme au corps a corps que vous désignez pour effectuer vos jet d'attaques au corps à corps.`,
      AptitudeTypeName.MANTRA,
      new Map([
        [CompetenceName.NÉGOCIATION, 1],
        [CompetenceName.CORPS_A_CORPS, 1],
      ])
    ),
    new Aptitude(
      "Pacte de précision",
      `Vous pouvez utiliser votre caractéristique de ${CaracteristiqueName.CHARISME} au lieu de celle requise pour l'arme à distance que vous désignez.`,
      AptitudeTypeName.MANTRA,
      new Map([
        [CompetenceName.NÉGOCIATION, 1],
        [CompetenceName.ARME_A_DISTANCE, 1],
      ])
    ),
    new Aptitude(
      "Équilibrage",
      "L'arme qui reçois l'amélioration ajoute 1 dé de supériorité à tout les jet d'attaque fait avec celle-ci",
      AptitudeTypeName.AMELIORATION,
      new Map([[CompetenceName.INGÉNIERIE, 1]])
    ),
    new Aptitude(
      '"Craignez-moi !"',
      `Vous faite un test en opposition d'${CompetenceName.INTIMIDATION} (${CaracteristiqueName.CHARISME}) ou (${CaracteristiqueName.VIGUEUR}) qui peut vous entendre et vous voir. Si la cible rate son test, elle est Terrorisée`,
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
      "Vous pouvez utiliser votre réaction pour effectuer une attaque d'opportunité avec une arme de jet ou un objet à porté de main contre un adversaire qui ce déplace à 9m ou moins de vous.",
      AptitudeTypeName.REACTION,
      new Map([[CompetenceName.MAGOUILLE, 1]])
    ),
    new Aptitude(
      "Illusion Cauchemardesque",
      `Vous effectuez un test de ${CompetenceName.TROMPERIE} de DD2 et consommez 1 dé d'${AttributsName.SPIRITHIUM} et invoquez un fantasme sur la position ciblée au maximum à 9m. Toutes les creatures qui voient ce fantasme et qui ont un score de ${CaracteristiqueName.CHARISME} inférieur au résultat sont terrifiés tant que l'illusions est présentant. L'illusion dure 1 tour et un tour supplémentaire pour chaque avantages net. Vous perdez 1 dé d'${AttributsName.SPIRITHIUM} par menaces net.`,
      AptitudeTypeName.INVOCATION,
      new Map([
        [CompetenceName.TROMPERIE, 1],
        [CompetenceName.INTIMIDATION, 1],
      ])
    ),
    new Aptitude(
      "Animation morbide",
      `Une créature que vous pouvez contrôler à son tour emerge du cadavre organique le plus proche. Cette creature possède 2 point dans toutes ses caractéristique, est considéré de niveau 1, ce déplace de 1m par action, et attaque à mains nue. Elle attaque aussitôt après être invoquée et lance ensuite son initiative comme n'importe quelle creature. Vous devez consommer autant de dés d'${AttributsName.SPIRITHIUM} que le niveau du cadavre ciblé. Les creatures peuvent vivre autant de tour que votre valeur d'${CaracteristiqueName.INTELLIGENCE}, et vous pouvez en contrôler autant que la somme de vos rang en ${CompetenceName.MÉDECINE} et ${CompetenceName.ENTROPIE_DU_FLUIDE}.`,
      AptitudeTypeName.NÉCROMANCIE,
      new Map([
        [CompetenceName.MÉDECINE, 1],
        [CompetenceName.ENTROPIE_DU_FLUIDE, 1],
      ])
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
      new Map([[CompetenceName.OCCULTISME, 1]])
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
      `Vous consommez 1 dé de ${AttributsName.SPIRITHIUM} et relancez immédiatement un dé au choix sur le résultat d'un test de ${CompetenceName.PILOTAGE}.`,
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
    new Aptitude(
      "Mémoires liquides",
      `Vous avez la possibilité de ceder des connaissances ésotériques dans une manifestation du fluide afin de garder l'esprit clair. A chaque gains de niveau, vous choisissez une aptitude que vous ne connaissez pas et vous la renseignée dans vos mémoires liquides. A n'importe quel moment, vous pouvez dépensez 3 point d'action pour échanger une aptitude connue contre une autre sauvegardée dans vos mémoires liquides. Vous ne pouvez renseigner que des aptitudes des types : ${AptitudeTypeName.EVOCATION},  ${AptitudeTypeName.INVOCATION} et ${AptitudeTypeName.NÉCROMANCIE}`,
      AptitudeTypeName.MANTRA,
      new Map([
        [CompetenceName.HISTOIRE, 1],
        [CompetenceName.ENTROPIE_DU_FLUIDE, 1],
      ])
    ),
    new Aptitude(
      "Rupture mentale",
      `Vous consommez autant de dé d’${AttributsName.SPIRITHIUM} que souhaitez et les opposez aux dés d’${AttributsName.SPIRITHIUM} restant de la cible. La cible subit 3 point de dégât par succès. Si vous avez plus d'avantage que sa valeur de Vigueur, elle perd sa réaction par défaut jusqu'à son prochain tour.`,
      AptitudeTypeName.INJONCTION,
      new Map([
        [CompetenceName.ENTROPIE_DU_FLUIDE, 1],
        [CompetenceName.CHARME, 1],
      ])
    ),
    new Aptitude(
      "Balise victorieuse",
      `Vous invoquez sur votre position une représentation de vos convictions que seul vous pouvez voir, et qui galvanise toutes les créatures autours. Cette balise possède autant de charges que votre valeur d'${AttributsName.SPIRITHIUM}. Les membres à moins de 9m de la balise peuvent à chacun de leur tour relancer un dé lors de leur jet d'attaque, et consommer alors une charge de la balise. Lorsqu'elle atteint 0 charge, elle se désintègre.`,
      AptitudeTypeName.INVOCATION,
      new Map([
        [CompetenceName.HISTOIRE, 1],
        [CompetenceName.CHARME, 1],
      ])
    ),
    new Aptitude(
      "Blindage",
      `Cette amélioration ne peut être affectée qu'aux armures ou protection métallique. L'utilisateur de l'armure augmente sa défense d'autant de dé que votre rang d'${CompetenceName.INGÉNIERIE}.`,
      AptitudeTypeName.AMELIORATION,
      new Map([
        [CompetenceName.INGÉNIERIE, 1],
        [CompetenceName.SURVIE, 1],
      ])
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
      `Vous gagnez 1 dé de supériorité par rang de ${CompetenceName.VIGILANCE} contre les attaques au corps à corps contre vous. Pour chaque attaque menaces générées sur le jet d'attaque contre vous, celui qui maintient la bénédiction consomme 1 dé d'${AttributsName.SPIRITHIUM}. La bénédiction prends fin si le prodigue n'a plus de dés d'${AttributsName.SPIRITHIUM}.`,
      AptitudeTypeName.BENEDICTION,
      new Map([
        [CompetenceName.OCCULTISME, 1],
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
      "Fureur",
      `Lors d'un jet d'attaque, vous pouvez choisir de sacrifier un ou plusieurs dé de ${AttributsName.REFLEXES} pour relancer autant de d6 sur votre jet d'attaque.`,
      AptitudeTypeName.ENTRAÎNEMENT,
      new Map([[CompetenceName.CORPS_A_CORPS, 1]])
    ),
    new Aptitude(
      "Nova morbide",
      `Doit cibler un cadavre. Ce dernier libère une énergie mortelle et blesse toutes les créatures sur 3m autour de lui. Lancez autant de d6 que le maximum de dé de ${AttributsName.SPIRITHIUM} du cadavre, et opposez le résultat à chacun de leur score de ${AttributsName.REFLEXES}. Vous infligez 3 point de dégâts par succès.`,
      AptitudeTypeName.NÉCROMANCIE,
      new Map([
        [CompetenceName.ENTROPIE_DU_FLUIDE, 1],
        [CompetenceName.MÉDECINE, 1],
      ])
    ),
    new Aptitude(
      "Griffe dimensionnelle",
      `Vous réalisez un jet d'attaque en opposant vos dés de ${AttributsName.SPIRITHIUM} restant à la défense de la cible. Vous infligez autant de dégât par succès et par triomphe que votre rang d'${CompetenceName.ENTROPIE_DU_FLUIDE}. Vous dépensez 1 dé d'${AttributsName.SPIRITHIUM}.`,
      AptitudeTypeName.TECHNIQUE_CORPS_A_CORPS,
      new Map([
        [CompetenceName.CORPS_A_CORPS, 1],
        [CompetenceName.ENTROPIE_DU_FLUIDE, 1],
      ])
    ),
    new Aptitude(
      "Echophagie",
      `A chaque fois que vous regagnez au moins 1 dé d'${AttributsName.SPIRITHIUM}, y compris pendant les repos court, vous pouvez lancer gratuitement 1 dé de vie pour vous soigner immédiatement. Vous ne regagnez plus de dès de vie lors des repos long.`,
      AptitudeTypeName.MANTRA,
      new Map([
        [CompetenceName.SURVIE, 1],
        [CompetenceName.OCCULTISME, 1],
      ])
    ),
    new Aptitude(
      "Mage de guerre",
      `Vous pouvez lancer toutes vos ${AptitudeTypeName.EVOCATION} par le biais d'une arme au corps à corps. Vous effectuez alors un jet d'attaque à l'arme en dépensant 1 point d'action supplémentaire et déclarant quelle aptitude vous appliquez avec votre arme. L'${AptitudeTypeName.EVOCATION} n'applique ses effets que si l'attaque réussie. Le nombre de succès qui determine alors les effets de l'aptitude est déterminé par le nombre d'avantages et de triomphe (chacun comptant pour 1 succès). Les dégâts de l'arme sont compté normalement.`,
      AptitudeTypeName.ENTRAÎNEMENT,
      new Map([
        [CompetenceName.CORPS_A_CORPS, 1],
        [CompetenceName.ENTROPIE_DU_FLUIDE, 1],
      ])
    ),
    new Aptitude(
      "Bombe improvisée",
      `Si vous avez a votre disposition de trois ingredients adéquats (un combustible, une mèche et un contenant), vous pouvez effectuer un test de ${CompetenceName.INGÉNIERIE} (${CaracteristiqueName.INTELLIGENCE}) de DD3 pour créer une bombe artisanal que vous pouvez utiliser comme arme de jet. La puissance de la bombe est déterminée par le MJ en fonction du combustible et de la réussite de test.`,
      AptitudeTypeName.AMELIORATION,
      new Map([
        [CompetenceName.INGÉNIERIE, 1],
        [CompetenceName.ARME_A_DISTANCE, 1],
      ])
    ),
    new Aptitude(
      "Vivacité impossible",
      `Vous pouvez à tout moment sacrifier autant de dés de ${AttributsName.REFLEXES} que votre rang de ${CompetenceName.MAGOUILLE} et de gagnez aux choix : 1m de déplacement par dés sacrifiés lors du prochain déplacement, ou d'ajouter autant de dé de supériorité a votre prochaine attaque `,
      AptitudeTypeName.ENTRAÎNEMENT,
      new Map([
        [CompetenceName.MAGOUILLE, 1],
        [CompetenceName.CORPS_A_CORPS, 1],
      ])
    ),
    new Aptitude(
      "Vol de vitesse",
      `La cible à moins de 18m de vous perd autant de dé de réflexes (d6) que votre rang d'${CompetenceName.ENTROPIE_DU_FLUIDE}. Vous ou un allié à 18m ou moins de vous bénéficie d'autant de dés de supériorités supplémentaires à son prochain jet d'attaque ou de défense. L'effet cesse à ce moment.`,
      AptitudeTypeName.EVOCATION,
      new Map([
        [CompetenceName.ENTROPIE_DU_FLUIDE, 1],
        [CompetenceName.TROMPERIE, 1],
      ])
    ),
    new Aptitude(
      "Rejet primitif",
      `Vous détruisez immédiatement toutes les créations de type ${AptitudeTypeName.INVOCATION} à 18m autour de vous. Pour chaque ${AptitudeTypeName.INVOCATION} détruite, vous subissez 1d4 dégât.`,
      AptitudeTypeName.INJONCTION,
      new Map([
        [CompetenceName.INTIMIDATION, 1],
        [CompetenceName.SURVIE, 1],
      ])
    ),
    new Aptitude(
      "Terreur nocturne",
      "La cible a moins de 9m est aveuglée pendant 1 tour et 1 tours supplémentaire par triomphe.Elle subit 1 point de dégât par succès tant qu'elle reste aveuglée.",
      AptitudeTypeName.EVOCATION,
      new Map([
        [CompetenceName.TROMPERIE, 1],
        [CompetenceName.CHARME, 1],
      ])
    ),
    new Aptitude(
      "Anticipation surnaturelle",
      `Vous pouvez à tout moment décider de consommer autant de dé de ${AttributsName.SPIRITHIUM} que votre score de ${CompetenceName.PERSPICACITÉ} pour les ajouter à vos dés de ${AttributsName.REFLEXES}.`,
      AptitudeTypeName.MANTRA,
      new Map([
        [CompetenceName.PERSPICACITÉ, 1],
        [CompetenceName.ENTROPIE_DU_FLUIDE, 1],
      ])
    ),
    new Aptitude(
      "Fracture temporelle",
      `Vous effectuez un test d'${CompetenceName.OCCULTISME} (${CaracteristiqueName.INTELLIGENCE}) opposé à la cible. Si elle échoue, elle pert 1 point d'action et 1 point d'action supplémentaire par triomphe (maximum 2).`,
      AptitudeTypeName.INVOCATION,
      new Map([
        [CompetenceName.OCCULTISME, 1],
        [CompetenceName.HISTOIRE, 1],
      ])
    ),
    new Aptitude(
      "Foulée de l'ombre",
      `Vous vous déplacez instantanément sans déclencher d'attaque d'opportunité jusqu'à la créature ciblée sur une distance de 9m pour chaque rang en ${CompetenceName.ATHLÉTISME}. Votre prochaine attaque au corps à corps ou ${AptitudeTypeName.TECHNIQUE_CORPS_A_CORPS} coûte 1 point d'action en moins (minimum 1). Vous consommez 1 dé d'${AttributsName.SPIRITHIUM}.`,
      AptitudeTypeName.INVOCATION,
      new Map([
        [CompetenceName.MAGOUILLE, 1],
        [CompetenceName.DISCRETION, 1],
      ])
    ),
    new Aptitude(
      "Sanctuaire",
      `Les cibles de la bénédiction ne peuvent pas être la cible d'agressions. La bénédiction est retirée immédiatement si la cible de la bénédiction effectue une attaque ou une aptitude qui blesse une creature. A chaque début de tour du lanceur, il consomme et lance 1 dé d'${AttributsName.SPIRITHIUM}. Si la valeur du dé est supérieur à la somme de sa valeur de ${CompetenceName.NÉGOCIATION} et de ${CompetenceName.CHARME}, la bénédiction prend fin immédiatement.`,
      AptitudeTypeName.BENEDICTION,
      new Map([
        [CompetenceName.CHARME, 1],
        [CompetenceName.NÉGOCIATION, 1],
      ])
    ),
    new Aptitude(
      "Technique du pugiliste",
      "Attaquer au corps à corps lorsque vous êtes à mains nues ne coûte qu'1 point d'action.",
      AptitudeTypeName.ENTRAÎNEMENT,
      new Map([
        [CompetenceName.ATHLÉTISME, 1],
        [CompetenceName.CORPS_A_CORPS, 1],
      ])
    ),
    new Aptitude(
      "Tir à bout portant",
      "Vous effectuez une attaque à l'arme à distance sur une cible située a moins de 3m de vous sans déclencher d'attaque d’opportunité. Si elle réussie, vous gagez 1 action que vous pouvez utiliser immédiatement pour vous déplacer, vous mettre à couvert ou vous désengagez.",
      AptitudeTypeName.ENTRAÎNEMENT,
      new Map([
        [CompetenceName.NÉGOCIATION, 1],
        [CompetenceName.MAGOUILLE, 1],
      ])
    ),
    new Aptitude(
      "Expertise",
      "Vous augmentez jusqu'au rang 1 deux compétences de votre choix.",
      AptitudeTypeName.ENTRAÎNEMENT,
      new Map([
        [CompetenceName.NÉGOCIATION, 1],
        [CompetenceName.MAGOUILLE, 1],
      ])
    ),
    new Aptitude(
      "Fuite de pouvoir",
      `Vous dépensez 1 dé d'${AttributsName.SPIRITHIUM}. Si la cible a moins de 18m est en train d'utiliser une aptitude de type ${AptitudeTypeName.EVOCATION}, ${AptitudeTypeName.INVOCATION}, ${AptitudeTypeName.INVOCATION}, ${AptitudeTypeName.NÉCROMANCIE} ou ${AptitudeTypeName.BENEDICTION}, elle est immédiatement interrompue. Vous récupérez 1 dé d'${AttributsName.SPIRITHIUM}.`,
      AptitudeTypeName.REACTION,
      new Map([
        [CompetenceName.OCCULTISME, 1],
        [CompetenceName.VIGILANCE, 1],
      ])
    ),
    new Aptitude(
      "Extraction de pensée",
      `La cible doit être neutralisée. Vous dépensez 1 dés d'${AttributsName.SPIRITHIUM}. Vous pouvez alors extirper de sa mémoire une pensée qui répond à une indication que vous pouvez intuiter clairement, quelques seconde d'un événement qu'elle aurait vécu et qui vous apparaît comme si vous vous y étiez à sa place. Pour chaque avantage vous pouvez préciser la pensée, étendre la durée du souvenir. Si il n'y a aucun succès mais quelques avantages, vous pouvez récupéré des pensée autres mais aucune correspondant à ce que vous cherchiez précisément`,
      AptitudeTypeName.EVOCATION,
      new Map([
        [CompetenceName.PERSPICACITÉ, 1],
        [CompetenceName.MÉDECINE, 1],
      ])
    ),
    new Aptitude(
      "Morsure de Namtar",
      `Vous réaliser un jet d'attaque et infligez 2 point de dégât par succès. Vous volez à la cible 1 dé de ${AttributsName.SPIRITHIUM} par Triomphes et par avantages.`,
      AptitudeTypeName.TECHNIQUE_CORPS_A_CORPS,
      new Map([
        [CompetenceName.CORPS_A_CORPS, 1],
        [CompetenceName.ENTROPIE_DU_FLUIDE, 1],
        [CompetenceName.SURVIE, 1],
      ])
    ),
    new Aptitude(
      "Vœu de puissance",
      `Pactiser avec les puissances obscures est un jeu dangereux, mais vous n'êtes pas mauvais. Vous augmentez de manière permanente votre total de dé d'${AttributsName.SPIRITHIUM} de 1 pour chaque rang investis en ${CompetenceName.ENTROPIE_DU_FLUIDE}.`,
      AptitudeTypeName.MANTRA,
      new Map([
        [CompetenceName.ENTROPIE_DU_FLUIDE, 1],
        [CompetenceName.OCCULTISME, 1],
        [CompetenceName.NÉGOCIATION, 1],
      ])
    ),
    new Aptitude(
      "Foulée démoniaque",
      `Vous pouvez dépenser un dé d'${AttributsName.SPIRITHIUM} pour gagnez 1 point d'action qui doit être dépensé pour effectuer un mouvement. Vous ne pouvez utiliser cette aptitude qu'une seule fois par tour.`,
      AptitudeTypeName.MANTRA,
      new Map([
        [CompetenceName.ENTROPIE_DU_FLUIDE, 1],
        [CompetenceName.ATHLÉTISME, 1],
        [CompetenceName.COORDINATION, 1],
      ])
    ),
    new Aptitude(
      "Vampire d'âme",
      `Vous absorbez l’énergie résiduelle de la creature neutralisée ou récemment morte et regagnez 1 dé ${AttributsName.SPIRITHIUM}. Vous gagnez 1 dé supplémentaire si vous touchez la cible.`,
      AptitudeTypeName.NÉCROMANCIE,
      new Map([
        [CompetenceName.ENTROPIE_DU_FLUIDE, 1],
        [CompetenceName.MÉDECINE, 1],
        [CompetenceName.OCCULTISME, 1],
      ])
    ),
    // RANK MAJEUR
    new Aptitude(
      "Puits de flétrissure",
      `Le cadavre visé à moins de 27m dégage une aura nécrotique. Toutes les creatures à moins de 9m subissent subissent autant de dés de handicap que de dé d'${AttributsName.SPIRITHIUM} sur tout leurs jet d'attaque.`,
      AptitudeTypeName.NÉCROMANCIE,
      new Map([
        [CompetenceName.CORPS_A_CORPS, 2],
        [CompetenceName.PERSPICACITÉ, 1],
      ])
    ),
    new Aptitude(
      "Posture d'attrition",
      "A chacune de vos attaques au corps à corps, vous pouvez choisir de remplacer jusqu'à 2 succès par autant avantages.",
      AptitudeTypeName.POSTURE,
      new Map([
        [CompetenceName.CORPS_A_CORPS, 2],
        [CompetenceName.PERSPICACITÉ, 1],
      ])
    ),
    new Aptitude(
      "Chrono-stase",
      "La cible bénéficie d'un point d'action supplémentaire par tour pendant 1 tour et 1 tour supplémentaire tout les deux succès net. La chrono-stase est fragile et peut se rompre si la cible génère des menaces lors de ses actions.",
      AptitudeTypeName.INVOCATION,
      new Map([[CompetenceName.HISTOIRE, 2]])
    ),
    new Aptitude(
      "Communication maîtrisée",
      `Vous augmentez votre valeur de ${CaracteristiqueName.CHARISME} de 1 point.`,
      AptitudeTypeName.ENTRAÎNEMENT,
      new Map([[CompetenceName.CHARME, 2]])
    ),
    new Aptitude(
      "Enchaînement",
      `Lorsque vous choisissez d'attaquer une creature au corps à corps ou d'effectuer une ${AptitudeTypeName.TECHNIQUE_CORPS_A_CORPS}, la prochaine attaque au corps à corps coûte 1 point d'action en moins (minimum 1).`,
      AptitudeTypeName.ENTRAÎNEMENT,
      new Map([[CompetenceName.CORPS_A_CORPS, 2]])
    ),
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
      `Vous Augmentez votre valeur d'${CaracteristiqueName.ADRESSE} de 1 de manière permanente.`,
      AptitudeTypeName.ENTRAÎNEMENT,
      new Map([[CompetenceName.ARME_A_DISTANCE, 2]])
    ),
    new Aptitude(
      "Présence déstabilisante",
      "Lors d'un test en opposition ou d'un jet d'attaque contre elle, votre cible est terrifiée jusqu'à son prochain tour si le résultat des dés génère au moins 2 avantages.",
      AptitudeTypeName.MANTRA,
      new Map([[CompetenceName.INTIMIDATION, 2]])
    ),
    new Aptitude(
      "Signature de rebond de puissance",
      `Vous pouvez octroyer chacune de vos amélioration à une cible supplémentaire par rang en ${CompetenceName.INGÉNIERIE}. Une pièce d'équipement ne peut pas bénéficier de la même ${AptitudeTypeName.AMELIORATION} deux fois.`,
      AptitudeTypeName.MANTRA,
      new Map([[CompetenceName.INGÉNIERIE, 2]])
    ),
    new Aptitude(
      "Singularité",
      `Vous créez un nano trou noir sur l'emplacement de votre choix à 18m ou moins de vous. Toutes les creatures à 9m ou moins de la singularité et dont le score de ${CaracteristiqueName.VIGUEUR} est inférieur au nombre de succès net sont immédiatement projetées sur 3m vers la singularité et sont à terre. Vous pouvez augmenter la projection de 1m par avantages net, et vous infligez également 3 point de dégâts par triomphe. Chaque début de tour du lanceur provoque une pulsation qui applique ces effets. Le lanceur perd 2 dés d'${AttributsName.SPIRITHIUM} jusqu'à ce qu'il n'ai plus de dés ou que l'invocation soit brisée.`,
      AptitudeTypeName.INVOCATION,
      new Map([
        [CompetenceName.ENTROPIE_DU_FLUIDE, 2],
        [CompetenceName.OCCULTISME, 1],
      ])
    ),
    new Aptitude(
      "Savoir sublimé",
      `Vous Augmentez votre valeur d'${CaracteristiqueName.INTELLIGENCE} de 1 de manière permanente.`,
      AptitudeTypeName.MANTRA,
      new Map([[CompetenceName.ENTROPIE_DU_FLUIDE, 2]])
    ),
    new Aptitude(
      "Revers cinétique",
      `Vous dépensez autant de dé d'${AttributsName.SPIRITHIUM} au jets de défense de la cible de votre choix à 9m ou moins de vous. Si l'attaque est bloquée de cette manière, vous regagnez 1 dé d'${AttributsName.SPIRITHIUM}.`,
      AptitudeTypeName.REACTION,
      new Map([
        [CompetenceName.ENTROPIE_DU_FLUIDE, 1],
        [CompetenceName.VIGILANCE, 2],
      ])
    ),
    new Aptitude(
      "Volonté de fer",
      `Vous pouvez octroyer autant de bénédiction que votre valeur de ${CaracteristiqueName.CHARISME} en même temps.`,
      AptitudeTypeName.MANTRA,
      new Map([[CompetenceName.OCCULTISME, 2]])
    ),
    new Aptitude(
      "Eruption",
      `Vous incinérez toute la zone en face de vous, sur un cone de 9m de long et jusqu'a 3m de large. Toutes les creatures subissent 3 point de dégâts par succès et par triomphe. Vous dépensez 2 dé d'${AttributsName.SPIRITHIUM}`,
      AptitudeTypeName.INVOCATION,
      new Map([[CompetenceName.ENTROPIE_DU_FLUIDE, 2]])
    ),
    new Aptitude(
      "Cri de frustration",
      `La cible qui tente d'attaquer perd tout ses dés de supériorité et subit 1 point de dégât part dé perdu de cette manière.Vous dépensé 1 dé d'${AttributsName.SPIRITHIUM}.`,
      AptitudeTypeName.MANTRA,
      new Map([[CompetenceName.DISCRETION, 2]])
    ),
    new Aptitude(
      "Festin morbide",
      `Vous regagnez autant de ${AttributsName.DV} que la moitié des DV du cadavre le plus proche.`,
      AptitudeTypeName.NÉCROMANCIE,
      new Map([
        [CompetenceName.MÉDECINE, 1],
        [CompetenceName.OCCULTISME, 2],
      ])
    ),
    new Aptitude(
      "Précision risquée",
      "Sur le résultat net de vos jet d'attaques, vous pouvez choisir de remplacer deux succès par 1 triomphe.",
      AptitudeTypeName.NÉCROMANCIE,
      new Map([[CompetenceName.COORDINATION, 2]])
    ),
    new Aptitude(
      "L'ombre me protège",
      "Vous gagnez autant de dès de supériorité que votre valeurs de discretion sur vos jet d'attaques et de défense. Si une aptitude qui vous vise génère de la lumière (feu, lumière..), vous ne pouvez pas lancer de dès en opposition.",
      AptitudeTypeName.MANTRA,
      new Map([[CompetenceName.DISCRETION, 2]])
    ),
    // RANK SUPÉRIEUR
    new Aptitude(
      "Assaut brutal",
      `Si le nombre d'avantages net est supérieur la valeur de ${CaracteristiqueName.VIGUEUR} et de ${AttributsName.REFLEXES} de la cible, elle est a terre, même si l'attaque échoue.`,
      AptitudeTypeName.TECHNIQUE_CORPS_A_CORPS,
      new Map([
        [CompetenceName.CORPS_A_CORPS, 2],
        [CompetenceName.ATHLÉTISME, 2],
      ])
    ),
    new Aptitude(
      "Aura de la liche",
      `Vous gagnez 1 dés de supériorité pour chaque cadavres a moins de 27m  de vous, jusqu'a un maximum égal a votre score d'${AttributsName.SPIRITHIUM}.`,
      AptitudeTypeName.MANTRA,
      new Map([
        [CompetenceName.MÉDECINE, 2],
        [CompetenceName.OCCULTISME, 2],
      ])
    ),
    new Aptitude(
      "Lumière aveuglante",
      "Vous provoquez un flash lumineux aveuglant sur votre position. Toutes les creatures à moins de 27m de vous et regardant dans votre direction qui ratent leurs test sont aveuglées pendant 1 tout et 1 tour supplémentaire par triomphe. Elles subissent également 1 point de dégât par avantages net.",
      AptitudeTypeName.EVOCATION,
      new Map([
        [CompetenceName.HISTOIRE, 2],
        [CompetenceName.OCCULTISME, 2],
      ])
    ),
    new Aptitude(
      "Maîtrise somatiques",
      `Toutes les aptitudes de type ${AptitudeTypeName.EVOCATION} et de rang ${AptitudeRang.MINEURE} coûtent 1 point d'action en moins (minimum 1).`,
      AptitudeTypeName.ENTRAÎNEMENT,
      new Map([
        [CompetenceName.ENTROPIE_DU_FLUIDE, 2],
        [CompetenceName.COORDINATION, 2],
      ])
    ),
    new Aptitude(
      "Affûtage moléculaire",
      "L'arme tranchante ciblée inflige 1 point de dégât supplémentaire par avantage et par triomphe.",
      AptitudeTypeName.AMELIORATION,
      new Map([
        [CompetenceName.TROMPERIE, 2],
        [CompetenceName.VIGILANCE, 2],
      ])
    ),
    new Aptitude(
      "Maladresse",
      "Si la cible génère au moins 3 menaces ou 1 Désastre sur sont jet d'attaque, elle subit immédiatement 1 point de dégât par menaces et son attaque rate.",
      AptitudeTypeName.REACTION,
      new Map([
        [CompetenceName.TROMPERIE, 2],
        [CompetenceName.VIGILANCE, 2],
      ])
    ),
    new Aptitude(
      "Evocations rapides",
      `Vous pouvez dépensez 1 dé d'${AttributsName.SPIRITHIUM} en plus lors de vos aptitudes de type ${AptitudeTypeName.EVOCATION}, et vous ne provoquez plus d'attaque d’opportunités`,
      AptitudeTypeName.REACTION,
      new Map([
        [CompetenceName.TROMPERIE, 2],
        [CompetenceName.VIGILANCE, 2],
      ])
    ),
    new Aptitude(
      "Arme consciente",
      `L'arme semble habité et murmure des conseil dans une langue inconnue que seul son porteur au moment du déclenchement de l'aptitude peut entendre. Son porteur gagne 1 Réaction par tour tant qu'il possède l'arme en mains mais perd 1 dé d'${AttributsName.SPIRITHIUM} par désastre sur ses jet d'attaques.`,
      AptitudeTypeName.REACTION,
      new Map([
        [CompetenceName.TROMPERIE, 2],
        [CompetenceName.VIGILANCE, 2],
      ])
    ),
    // TODO : Aptitudes : Voies Ancestrale (Histoire + compétences martiales)
    // TODO : Aptitudes : Voies Primitives (Survie + compétences martiales)
    // TODO : Creation d'une prothèse d'ingé (ethnotraits ? // entropie du fluide // Aptitude particulière ?)
    // TODO : Aptitude : régénération de dé de Spirithium
    // TODO : Aptitude : Ajout de point d'action ou de réaction
    // TODO : Aptitude pour achevez des cibles aux portes de la mort ?
    // TODO : Aptitude spéciales contres les invocation
    // TODO : Histoire + Entropie = Invocation d’entité +/- consciente
    // TODO : Occultisme + Entropie = Invocation de concepts
    // TODO : Médecine + Entropie = Nécromancie
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
