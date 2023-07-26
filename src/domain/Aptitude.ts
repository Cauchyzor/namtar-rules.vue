/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { CaracteritiqueName } from "./Caracteristique";
import { CompetenceName } from "./Competence";

// TODO Faire le tire en cloche (vecteur?)

export type Aptitude = {
  Nom: string;
  Description: string;
  Image: string;
  Type: AptitudeType;
  Vecteur: Vecteur;
  Effets: Map<EffetName, number>;
  ExtensionsEffet: Map<ExtensionEffetName, number>;
};

export type AptitudeType = {
  Nom: AptitudeTypeName;
  Description: string;
  DescriptionDetails: string;
};

export enum AptitudeTypeName {
  EVOCATION = "Evocation",
  MALEFICE = "Malefice",
  NECROMANCIE = "Necromancie",
  ENVOUTEMENT = "Envoutement",
  BENEDICTION = "Bénédiction",
  MANTRA = "Mantra",
  CYTOMANCIE = "Cytomancie",
  POSTURE = "Posture",
  TECHNIQUE = "Technique",
  RIPOSTE = "Riposte",
}

export type Vecteur = {
  Nom: VecteurName;
  Description: string;
  Difficulte: string;
  TypesCompatibilities: AptitudeTypeName[];
};

enum VecteurName {
  ALTERATION_OBJET = "Altération d'objet",
  CARESSE = "Caresse",
  CARESSE_ONIRIQUE = "Caresse onirique",
  CHANT = "Chant",
  CONTACT = "Contact",
  FRAPPE = "Frappe",
  FRAPPE_ONIRIQUE = "Frappe onirique",
  EXPLOITATION_CADRAVRE = "Exploitation de cadavre",
  EXPLOSION_CADAVRE = "Explosion de cadavre",
  MANTRA = "Mantra",
  MEDITATION_ECLAIRE = "Méditation éclaire",
  PROJECTILE = "Projectile",
  ONDE = "Onde",
  REGARD = "Regard",
  SOUFFLE = "Souffle",
  POSTURE = "Posture",
  TECHNIQUE_ENGAGEMENT = "Technique d'engagement",
  RIPOSTE = "Riposte",
}

export type Effet = {
  Nom: EffetName;
  Description: string;
  IsCummulable: boolean;
  StabiliteParTypeAptitude: Map<AptitudeTypeName, number>;
};

enum EffetName {
  ATTAQUE_DOUBLE = "Attaque double",
  ATOUT = "Atout",
  BOUCLIER = "Bouclier",
  BRISE_POSTURE = "Brise Posture",
  CHALEUR = "Chaleur",
  DEBILITANT = "Débilitant",
  DRAIN_FLUIDE = "Drain de fluide",
  ENTRAVE = "Entrave",
  FORCE = "Force",
  LEVITATION = "Levitation",
  ILLUSION = "Illusion",
  MANTRA = "Mantra",
  OBSTRUCTION = "Obstruction",
  PUISSANT = "Puissant",
  RENVERSEMENT = "Renversement",
  SOIN = "Soin",
  SOIN_DE_STRESS = "Soin de stress",
  TELEPATHE = "Télépathe",
  VAMPIRISME = "Vampirisme",
}

export type ExtensionEffet = {
  Nom: ExtensionEffetName;
  Description: string;
  IsCummulable: boolean;
  StabiliteParTypeAptitude: Map<AptitudeTypeName, number>;
};

enum ExtensionEffetName {
  ANGLE_MORT = "Angle mort",
  CIBLE_GALVANISE = "Cible galvanisée",
  CIBLE_MAUDITE = "Cible maudite",
  CATALYSEUR = "Catalyseur",
  CONTRE_COUP = "Contre-coup",
  DIFFICILE = "Difficile",
  ENERGIE_ACTIVATION = "Energie d'activation",
  FEINTE = "Feinte",
  FIN_POSTURE = "Fin de Posture",
  INCENTATION_RAPIDE = "Incantation rapide",
  INGREDIENT = "Ingredient",
  MAITRISE_CORPS_A_CORPS = "Maitrise du corps à corps",
  MAITRISE_PUGILAT = "Maitrise de la pugilat",
  UTILISATEUR_MAUDIT = "Utilisateur maudit",
  UTILISATEUR_GALVANISE = "Utilisateur galvanisé",
  ZONE = "Zone d'effet",
}

export class AptitudeService {
  //TODO Exporter les capacitées dans des fichiers JSON + gérer la lecture et l'ecriture
  private static Types: Array<AptitudeType> = [
    {
      Nom: AptitudeTypeName.EVOCATION,
      Description:
        "La conversion de l'energie sombre par le fluide est activée par l'utilisateur qui utilise son corps comme catalyseur. L'utilisateur subit du stress pour stabiliser et matérialiser son aptitude.",
      DescriptionDetails:
        "Chaque point de stress investi produit 1 point de stabilité.",
    },
    {
      Nom: AptitudeTypeName.MALEFICE,
      Description:
        "L'utilisateur se sert des menace de la cible pour corompre la signature de la cible qui devient le catalyseur d'une matérialisation néfaste de l'énergie sombre. La puissance du maléfice est nourrie par les menaces accumulées par la cible.",
      DescriptionDetails:
        "Chaque menaces subit par la cible génère 2 points de stabilité. Les menaces ne sont pas consommées.",
    },
    {
      Nom: AptitudeTypeName.NECROMANCIE,
      Description:
        "La force vitale résidelle d'un cadavre est utilisée comme catalyseur de l'énergie sombre. La qualitée de l'individu et le nombre d'individu renforce l'apptitude.",
      DescriptionDetails:
        "Chaque niveau du cadavre génère 2 points de stabilité. Plusieurs cadavres peuvent être utilisés en additionnant leurs niveaux.",
    },
    {
      Nom: AptitudeTypeName.ENVOUTEMENT,
      Description:
        "Le lanceur corrompt l'empreinte onirique de la cible pour qu'elle devienne un catalyseur d'énergie néfaste. La concordance de la cible est déteriorée dans le processus. L'apptitude consume les atouts de la cible pour générer des effets.",
      DescriptionDetails: "Chaque atout supprimé génère 1 point de stabilité.",
    },
    {
      Nom: AptitudeTypeName.BENEDICTION,
      Description:
        "Le lanceur utilise l'empreinte onirique de la cible consentante pour qu'elle devienne un catalyseur. Les atouts du groupe sont consommé pour générer des effets.",
      DescriptionDetails: "Chaque atout consommé génère 2 points de stabilité.",
    },
    {
      Nom: AptitudeTypeName.MANTRA,
      Description:
        "Un mantra est une modification permanante de la signature onirique de la cible pour apprécier certain effets du fluide sur son comportement et ses capacités. Les effets sont passifs.",
      DescriptionDetails:
        "Les mantras sont toujours stables et les effets constants depuis sa creation.",
    },
    {
      Nom: AptitudeTypeName.CYTOMANCIE,
      Description:
        "L'énergie sombre est stockée dans des cellules sacrifiées par le lanceur. Le lanceur sacrifie des PV pour générer ses effets",
      DescriptionDetails: "Chaque PV sacrifié genère 1 point de stabilité.",
    },
    {
      Nom: AptitudeTypeName.TECHNIQUE,
      Description:
        "Un mouvement qui requiert une grande concentration. L'apptitude se déroule comme une action complexe.",
      DescriptionDetails:
        "Action ou attaque qui se déroule comme une action complexe.",
    },
    {
      Nom: AptitudeTypeName.RIPOSTE,
      Description: "Une technique qui s'effectue lors d'une réaction",
      DescriptionDetails: "Attaque qui consomme votre réaction.",
    },
    {
      Nom: AptitudeTypeName.POSTURE,
      Description:
        "Une posture travaillée et maîtrisée permet de mieux appréhender une situation. Elle s'active avec une réaction. Une seule posture active à la fois.",
      DescriptionDetails:
        "Les postures sont toujours stables et se déclenchent en consommant une réaction.",
    },
  ];

  private static VecteursList: Array<Vecteur> = [
    {
      Nom: VecteurName.ALTERATION_OBJET,
      Description:
        "Les effets sont prisonnier d'un objet au contact du lanceur. Le lanceur peut choisir de relacher les effets à sa guise. Sinon, ils sont libérés quelques secondes après que l'objet est été relaché.",
      Difficulte: `Test d'${CompetenceName.ENTROPIE_DU_FLUIDE} (${CaracteritiqueName.INTELLIGENCE}) de DD3`,
      TypesCompatibilities: [
        AptitudeTypeName.BENEDICTION,
        AptitudeTypeName.CYTOMANCIE,
        AptitudeTypeName.EVOCATION,
      ],
    },
    {
      Nom: VecteurName.CONTACT,
      Description: "Les effets sont appliqués à la cible touchée.",
      Difficulte: `Attaque engagée de ${CompetenceName.ENTROPIE_DU_FLUIDE} (${CaracteritiqueName.VIGUEUR})`,
      TypesCompatibilities: [
        AptitudeTypeName.CYTOMANCIE,
        AptitudeTypeName.ENVOUTEMENT,
        AptitudeTypeName.EVOCATION,
        AptitudeTypeName.MALEFICE,
      ],
    },
    {
      Nom: VecteurName.FRAPPE,
      Description:
        "Les effets sont appliqué sur une attaque à main nue ou avec une arme au corps à corps. Un equilibre certain doit être trouver par l'utilisateur pour captialiser sur son arme et l'aptitude.",
      Difficulte: `Attaque engagée de ${CompetenceName.CORPS_A_CORPS} (${CaracteritiqueName.VIGUEUR}) ou de ${CompetenceName.PUGILAT} (${CaracteritiqueName.VIGUEUR}). La qualité de la réussite de l'aptitude est déterminée par les atouts net plutôt que par les succès. Les dégats de l'arme utilisé sont calculés normalement.`,
      TypesCompatibilities: [
        AptitudeTypeName.CYTOMANCIE,
        AptitudeTypeName.ENVOUTEMENT,
        AptitudeTypeName.EVOCATION,
        AptitudeTypeName.MALEFICE,
      ],
    },
    {
      Nom: VecteurName.FRAPPE_ONIRIQUE,
      Description:
        "La lanceur materialise l'aptitude directement sur la cible à portée de voix grâce a son empreinte laissée dans le fluide. ",
      Difficulte: `Attaque distance de ${CompetenceName.ENTROPIE_DU_FLUIDE} (${CaracteritiqueName.CHARISME}). Le DD est augmentée 1 fois en plus de la distance.`,
      TypesCompatibilities: [
        AptitudeTypeName.BENEDICTION,
        AptitudeTypeName.ENVOUTEMENT,
        AptitudeTypeName.MALEFICE,
      ],
    },
    {
      Nom: VecteurName.REGARD,
      Description:
        "Les effets sont appliqués à la cible avec qui vous avez un contact visuel mutuel.",
      Difficulte: `Test opposé de ${CompetenceName.ENTROPIE_DU_FLUIDE} (${CaracteritiqueName.CHARISME}) et ${CompetenceName.PERSPICACITE} (${CaracteritiqueName.CHARISME}) de la cible.`,
      TypesCompatibilities: [
        AptitudeTypeName.ENVOUTEMENT,
        AptitudeTypeName.MALEFICE,
      ],
    },
    {
      Nom: VecteurName.SOUFFLE,
      Description:
        "Le lanceur canalyse l'energie dans ses poumons, et applique des effets dans un cône devant lui sur une courte distance",
      Difficulte: `Attaque a distance de ${CompetenceName.ENTROPIE_DU_FLUIDE} (${CaracteritiqueName.VIGUEUR}).`,
      TypesCompatibilities: [
        AptitudeTypeName.CYTOMANCIE,
        AptitudeTypeName.ENVOUTEMENT,
        AptitudeTypeName.EVOCATION,
        AptitudeTypeName.MALEFICE,
      ],
    },
    {
      Nom: VecteurName.PROJECTILE,
      Description:
        "Le lanceur génère un projectile qui se déplace à grande vitesse jusqu'à l'endroit indiqué, et applique ses effets à l'impact avant de s'estomper.",
      Difficulte: `Attaque à distance de ${CompetenceName.ENTROPIE_DU_FLUIDE} (${CaracteritiqueName.INTELLIGENCE}).`,
      TypesCompatibilities: [
        AptitudeTypeName.CYTOMANCIE,
        AptitudeTypeName.EVOCATION,
      ],
    },
    {
      Nom: VecteurName.ONDE,
      Description:
        "Le lanceur génère une onde qui applique les effets du sort sur toutes les cibles à portée courte autour de lui.",
      Difficulte: `Test de ${CompetenceName.ENTROPIE_DU_FLUIDE} (${CaracteritiqueName.INTELLIGENCE}) de DD4 à portée courte. Le DD augmente une fois pour chaque rangs de portée supplémentaires.`,
      TypesCompatibilities: [
        AptitudeTypeName.BENEDICTION,
        AptitudeTypeName.CYTOMANCIE,
        AptitudeTypeName.ENVOUTEMENT,
        AptitudeTypeName.EVOCATION,
        AptitudeTypeName.MALEFICE,
      ],
    },
    {
      Nom: VecteurName.CHANT,
      Description:
        "Le lanceur entonne un chant ou une mélodie galvanisatrice. Les membres du groupes qui marmonnent le chant avec le lanceurs beneficient alors de ses effets.",
      Difficulte: `Test de ${CompetenceName.ENTROPIE_DU_FLUIDE} (${CaracteritiqueName.CHARISME}) de DD3 du lanceur. Pas de tests pour les créatures.`,
      TypesCompatibilities: [AptitudeTypeName.BENEDICTION],
    },
    {
      Nom: VecteurName.MEDITATION_ECLAIRE,
      Description:
        "Le lanceur pratique une introspection rapide pour effectuer appliquer les effets de l'aptitude sur lui-même.",
      Difficulte: `Test de ${CompetenceName.ENTROPIE_DU_FLUIDE} (${CaracteritiqueName.INTELLIGENCE}) de DD2 du lanceur.`,
      TypesCompatibilities: [
        AptitudeTypeName.BENEDICTION,
        AptitudeTypeName.CYTOMANCIE,
        AptitudeTypeName.ENVOUTEMENT,
        AptitudeTypeName.EVOCATION,
      ],
    },
    {
      Nom: VecteurName.CARESSE,
      Description:
        "Le lanceur applique les effets de l'aptitudes à la cible touchée concentante.",
      Difficulte: `Test de ${CompetenceName.ENTROPIE_DU_FLUIDE} (${CaracteritiqueName.CHARISME}) de DD2 du lanceur.`,
      TypesCompatibilities: [
        AptitudeTypeName.BENEDICTION,
        AptitudeTypeName.CYTOMANCIE,
        AptitudeTypeName.ENVOUTEMENT,
        AptitudeTypeName.EVOCATION,
      ],
    },
    {
      Nom: VecteurName.CARESSE_ONIRIQUE,
      Description:
        "La lanceur materialise l'aptitude directement sur la cible consentante à portée de voix grâce a son empreinte laissée dans le fluide. ",
      Difficulte: `Attaque distance de ${CompetenceName.ENTROPIE_DU_FLUIDE} (${CaracteritiqueName.CHARISME}) qui ignore l'équipement et la couverture. Le DD est augmentée 1 fois en plus de la distance.`,
      TypesCompatibilities: [
        AptitudeTypeName.BENEDICTION,
        AptitudeTypeName.ENVOUTEMENT,
        AptitudeTypeName.MALEFICE,
      ],
    },
    {
      Nom: VecteurName.EXPLOSION_CADAVRE,
      Description:
        "Le lanceur utilise le cadavre ou la source d'énergie pour répendre un souffle à portée courte.",
      Difficulte: `Test de ${CompetenceName.ENTROPIE_DU_FLUIDE} (${CaracteritiqueName.INTELLIGENCE}) de DD3 à portée courte. Le DD augmente une fois pour chaque rangs de portée supplémentaires.`,
      TypesCompatibilities: [AptitudeTypeName.NECROMANCIE],
    },
    {
      Nom: VecteurName.EXPLOITATION_CADRAVRE,
      Description:
        "Le lanceur absorbe le cadavre ou la source d'énergie à son contact.",
      Difficulte: `Test de ${CompetenceName.ENTROPIE_DU_FLUIDE} (${CaracteritiqueName.INTELLIGENCE}) de DD2.`,
      TypesCompatibilities: [AptitudeTypeName.NECROMANCIE],
    },
    {
      Nom: VecteurName.MANTRA,
      Description:
        "Un mantra est une caracteristique du corps du lanceur qui lui permet de recevoir des bénefices du fluide. ",
      Difficulte: "Aucune (passif)",
      TypesCompatibilities: [AptitudeTypeName.MANTRA],
    },
    {
      Nom: VecteurName.POSTURE,
      Description:
        "Une posture permet à son utilisateur de bénéficier d'effets passif.",
      Difficulte: "Aucune (passif)",
      TypesCompatibilities: [AptitudeTypeName.POSTURE],
    },
    {
      Nom: VecteurName.TECHNIQUE_ENGAGEMENT,
      Description:
        "Un mouvement ou une attaque au corps à corps (avec une arme ou à main nue).",
      Difficulte: "Jet d'Attaque au corps à corps ou de pugilat",
      TypesCompatibilities: [AptitudeTypeName.TECHNIQUE],
    },
    {
      Nom: VecteurName.RIPOSTE,
      Description: "Une attaque ou action qui se déroule lors d'une reaction",
      Difficulte: "Aucune",
      TypesCompatibilities: [AptitudeTypeName.TECHNIQUE],
    },
  ];

  private static EffectsList: Array<Effet> = [
    {
      Nom: EffetName.ATOUT,
      Description:
        "La cible gagne 1 atout (cumulable). S'estompe à la fin de la rencontre ou au bout d'une dizaine de secondes.",
      IsCummulable: true,
      StabiliteParTypeAptitude: new Map([
        [AptitudeTypeName.BENEDICTION, -2],
        [AptitudeTypeName.EVOCATION, -4],
        [AptitudeTypeName.NECROMANCIE, -2],
        [AptitudeTypeName.CYTOMANCIE, -2],
      ]),
    },
    {
      Nom: EffetName.BOUCLIER,
      Description:
        "La cible gagne augmente sa défense de 1 point. S'estompe à la fin de la rencontre ou au bout d'une dizaine de secondes",
      IsCummulable: true,
      StabiliteParTypeAptitude: new Map([
        [AptitudeTypeName.BENEDICTION, -6],
        [AptitudeTypeName.EVOCATION, -8],
        [AptitudeTypeName.NECROMANCIE, -4],
        [AptitudeTypeName.CYTOMANCIE, -4],
      ]),
    },
    {
      Nom: EffetName.CHALEUR,
      Description:
        "Inflige 2 blessures (cumulable) par triomphe, par succès et par atouts net.",
      IsCummulable: true,
      StabiliteParTypeAptitude: new Map([
        [AptitudeTypeName.ENVOUTEMENT, -5],
        [AptitudeTypeName.EVOCATION, -4],
        [AptitudeTypeName.MALEFICE, -3],
        [AptitudeTypeName.NECROMANCIE, -1],
        [AptitudeTypeName.CYTOMANCIE, -3],
      ]),
    },
    {
      Nom: EffetName.DEBILITANT,
      Description:
        "La cible perd sa prochaine reaction. Si vous avez plus de succès net que sa valeur d'intelligence, elle joue une de ses actions à la fin du tour.",
      IsCummulable: false,
      StabiliteParTypeAptitude: new Map([
        [AptitudeTypeName.ENVOUTEMENT, -4],
        [AptitudeTypeName.EVOCATION, -4],
        [AptitudeTypeName.MALEFICE, -4],
        [AptitudeTypeName.NECROMANCIE, -2],
        [AptitudeTypeName.CYTOMANCIE, -4],
      ]),
    },
    {
      Nom: EffetName.DRAIN_FLUIDE,
      Description:
        "Chaque succès et triomphe vol 1 point de stress à l'adversaire.",
      IsCummulable: true,
      StabiliteParTypeAptitude: new Map([
        [AptitudeTypeName.ENVOUTEMENT, -1],
        [AptitudeTypeName.EVOCATION, -2],
        [AptitudeTypeName.MALEFICE, -1],
        [AptitudeTypeName.CYTOMANCIE, -1],
        [AptitudeTypeName.BENEDICTION, -2],
      ]),
    },
    {
      Nom: EffetName.ENTRAVE,
      Description:
        "La cible perd sa capacité de déplacement au premier succès. Si le total de succès net est supérieur à sa valeur de vigueur, elle est immobilisée.",
      IsCummulable: false,
      StabiliteParTypeAptitude: new Map([
        [AptitudeTypeName.EVOCATION, -3],
        [AptitudeTypeName.MALEFICE, -2],
        [AptitudeTypeName.ENVOUTEMENT, -1],
        [AptitudeTypeName.NECROMANCIE, -1],
        [AptitudeTypeName.CYTOMANCIE, -2],
      ]),
    },
    {
      Nom: EffetName.FORCE,
      Description:
        "Inflige 1 blessure (cumulable) par triomphe et succès net. Les cibles dont la vigueur est inférieure au nombre de succès net sont renversées.",
      IsCummulable: true,
      StabiliteParTypeAptitude: new Map([
        [AptitudeTypeName.EVOCATION, -3],
        [AptitudeTypeName.NECROMANCIE, -1],
        [AptitudeTypeName.CYTOMANCIE, -1],
      ]),
    },
    {
      Nom: EffetName.TELEPATHE,
      Description:
        "Permet de communiquer brièvement avec la cible par la pensée. Chaque succès permet soit de faire durer le lien quelques secondes de plus.",
      IsCummulable: false,
      StabiliteParTypeAptitude: new Map([
        [AptitudeTypeName.CYTOMANCIE, -2],
        [AptitudeTypeName.EVOCATION, -2],
        [AptitudeTypeName.BENEDICTION, -1],
        [AptitudeTypeName.MALEFICE, -1],
        [AptitudeTypeName.ENVOUTEMENT, -1],
      ]),
    },
    {
      Nom: EffetName.OBSTRUCTION,
      Description:
        "Pour niveau de résultat (1 succès, 2, 3, 5, 8 ...), une menace est infligée à la cible",
      IsCummulable: true,
      StabiliteParTypeAptitude: new Map([
        [AptitudeTypeName.EVOCATION, -2],
        [AptitudeTypeName.MALEFICE, -1],
        [AptitudeTypeName.ENVOUTEMENT, -2],
        [AptitudeTypeName.CYTOMANCIE, -2],
      ]),
    },
    {
      Nom: EffetName.ILLUSION,
      Description:
        "Vous pouvez faire halluciner la cible pour que ses sens lui indiquent ce que vous voulez (déterminé à la création de l'aptitude). Chaque succès permet de rendre l'illusion plus précise et efficace, et affecte plus de sens.",
      IsCummulable: false,
      StabiliteParTypeAptitude: new Map([
        [AptitudeTypeName.EVOCATION, -2],
        [AptitudeTypeName.MALEFICE, -1],
        [AptitudeTypeName.ENVOUTEMENT, -1],
      ]),
    },
    {
      Nom: EffetName.SOIN_DE_STRESS,
      Description:
        "La cible est soignée d'1 point de stress (cumulable) par triomphe et succès net.",
      IsCummulable: true,
      StabiliteParTypeAptitude: new Map([
        [AptitudeTypeName.BENEDICTION, -2],
        [AptitudeTypeName.EVOCATION, -3],
        [AptitudeTypeName.NECROMANCIE, -2],
        [AptitudeTypeName.CYTOMANCIE, -2],
      ]),
    },
    {
      Nom: EffetName.SOIN,
      Description:
        "La cible dépense immédiatement 1 point de résilience (cumulable) pour regagner ses PV. Chaque triomphe soigne d'un point de stress",
      IsCummulable: true,
      StabiliteParTypeAptitude: new Map([
        [AptitudeTypeName.BENEDICTION, -3],
        [AptitudeTypeName.EVOCATION, -4],
        [AptitudeTypeName.NECROMANCIE, -3],
        [AptitudeTypeName.CYTOMANCIE, -3],
      ]),
    },
    {
      Nom: EffetName.VAMPIRISME,
      Description:
        "Inflige 1 blessure (cumulable) par triomphe et succès net. Si l'effet est appliqué, le lanceur regagne 1 (cumulable) PV.",
      IsCummulable: true,
      StabiliteParTypeAptitude: new Map([
        [AptitudeTypeName.ENVOUTEMENT, -10],
        [AptitudeTypeName.EVOCATION, -6],
        [AptitudeTypeName.MALEFICE, -4],
        [AptitudeTypeName.CYTOMANCIE, -2],
      ]),
    },
    {
      Nom: EffetName.LEVITATION,
      Description:
        "La cible de gabarit 1 (cumulable) au maximum est en lévitation pendant un bref instant. Chaque succès permet de prolonger l'effet pendant quelques secondes",
      IsCummulable: true,
      StabiliteParTypeAptitude: new Map([
        [AptitudeTypeName.EVOCATION, -6],
        [AptitudeTypeName.CYTOMANCIE, -6],
        [AptitudeTypeName.BENEDICTION, -6],
      ]),
    },
    {
      Nom: EffetName.MANTRA,
      Description: "Voir la description",
      IsCummulable: false,
      StabiliteParTypeAptitude: new Map(),
    },
    {
      Nom: EffetName.PUISSANT,
      Description: "Vous infliger 1 point de dégats supplémentaire par succès.",
      IsCummulable: false,
      StabiliteParTypeAptitude: new Map([[AptitudeTypeName.TECHNIQUE, -2]]),
    },

    {
      Nom: EffetName.RENVERSEMENT,
      Description:
        "Si la somme des succès est superieur à la vigueur de la cible, elle est renversée.",
      IsCummulable: false,
      StabiliteParTypeAptitude: new Map([[AptitudeTypeName.TECHNIQUE, -1]]),
    },
    {
      Nom: EffetName.ATTAQUE_DOUBLE,
      Description:
        "Vous attaquez et lancez deux fois un jet d'attaque pendant l'execution de cette technique.",
      IsCummulable: false,
      StabiliteParTypeAptitude: new Map([[AptitudeTypeName.TECHNIQUE, -4]]),
    },
    {
      Nom: EffetName.BRISE_POSTURE,
      Description: "La cible perd sa posture.",
      IsCummulable: false,
      StabiliteParTypeAptitude: new Map([
        [AptitudeTypeName.TECHNIQUE, -2],
        [AptitudeTypeName.EVOCATION, -3],
        [AptitudeTypeName.ENVOUTEMENT, -1],
        [AptitudeTypeName.MALEFICE, -2],
        [AptitudeTypeName.CYTOMANCIE, -3],
      ]),
    },
  ];

  private static ExtensionList: Array<ExtensionEffet> = [
    {
      Nom: ExtensionEffetName.ANGLE_MORT,
      Description:
        "Vous devez vous situer en dehors du champ de vision de la cible.",
      IsCummulable: false,
      StabiliteParTypeAptitude: new Map([
        [AptitudeTypeName.ENVOUTEMENT, 2],
        [AptitudeTypeName.EVOCATION, 2],
        [AptitudeTypeName.CYTOMANCIE, 2],
        [AptitudeTypeName.MALEFICE, 2],
      ]),
    },
    {
      Nom: ExtensionEffetName.CATALYSEUR,
      Description:
        "Vous devez tenir en main un objet onirique qui vous aide à lancer le sort. La puissance du catalyseur doit être égale ou supérieure au rang de cette extension.",
      IsCummulable: true,
      StabiliteParTypeAptitude: new Map([
        [AptitudeTypeName.BENEDICTION, 1],
        [AptitudeTypeName.ENVOUTEMENT, 1],
        [AptitudeTypeName.EVOCATION, 1],
        [AptitudeTypeName.CYTOMANCIE, 1],
        [AptitudeTypeName.MALEFICE, 1],
        [AptitudeTypeName.NECROMANCIE, 1],
      ]),
    },
    {
      Nom: ExtensionEffetName.CIBLE_GALVANISE,
      Description:
        "La ou les cibles de l'aptitude doivent être sous les effets d'au moins autant d'atout que le rang de cette extension.",
      IsCummulable: false,
      StabiliteParTypeAptitude: new Map([
        [AptitudeTypeName.CYTOMANCIE, 2],
        [AptitudeTypeName.ENVOUTEMENT, 3],
        [AptitudeTypeName.EVOCATION, 2],
        [AptitudeTypeName.NECROMANCIE, 1],
        [AptitudeTypeName.MALEFICE, 3],
      ]),
    },
    {
      Nom: ExtensionEffetName.CIBLE_MAUDITE,
      Description:
        "La ou les cibles de l'aptitude doivent être sous les effets d'au moins 1 menace pour chaque rang de cette extension.",
      IsCummulable: false,
      StabiliteParTypeAptitude: new Map([
        [AptitudeTypeName.CYTOMANCIE, 2],
        [AptitudeTypeName.ENVOUTEMENT, 3],
        [AptitudeTypeName.EVOCATION, 2],
        [AptitudeTypeName.NECROMANCIE, 1],
        [AptitudeTypeName.MALEFICE, 3],
      ]),
    },

    {
      Nom: ExtensionEffetName.UTILISATEUR_GALVANISE,
      Description:
        "Vous devez être sous les effets d'au moins 1 atout pour chaque rang de cette extension.",
      IsCummulable: false,
      StabiliteParTypeAptitude: new Map([
        [AptitudeTypeName.CYTOMANCIE, 2],
        [AptitudeTypeName.ENVOUTEMENT, 3],
        [AptitudeTypeName.EVOCATION, 2],
        [AptitudeTypeName.NECROMANCIE, 1],
        [AptitudeTypeName.MALEFICE, 3],
      ]),
    },
    {
      Nom: ExtensionEffetName.DIFFICILE,
      Description: "Ajouter 1 dé de difficulté sur votre jet.",
      IsCummulable: true,
      StabiliteParTypeAptitude: new Map([
        [AptitudeTypeName.BENEDICTION, 1],
        [AptitudeTypeName.ENVOUTEMENT, 1],
        [AptitudeTypeName.EVOCATION, 1],
        [AptitudeTypeName.CYTOMANCIE, 1],
        [AptitudeTypeName.MALEFICE, 1],
        [AptitudeTypeName.NECROMANCIE, 1],
      ]),
    },
    {
      Nom: ExtensionEffetName.INCENTATION_RAPIDE,
      Description:
        "L'aptitude peut être lancée pendant un déplacement, mais vous augmentez 2 fois la difficulté de l'aptitude. ",
      IsCummulable: true,
      StabiliteParTypeAptitude: new Map([
        [AptitudeTypeName.BENEDICTION, 1],
        [AptitudeTypeName.ENVOUTEMENT, 1],
        [AptitudeTypeName.EVOCATION, 1],
        [AptitudeTypeName.CYTOMANCIE, 1],
        [AptitudeTypeName.MALEFICE, 1],
        [AptitudeTypeName.NECROMANCIE, 1],
      ]),
    },
    {
      Nom: ExtensionEffetName.ENERGIE_ACTIVATION,
      Description:
        "L'aptitude n'applique pas ses effets uniquement si la cible est victime déjà d'un effet. Cet effet est déterminé à la conception du sort.",
      IsCummulable: false,
      StabiliteParTypeAptitude: new Map([
        [AptitudeTypeName.BENEDICTION, 2],
        [AptitudeTypeName.ENVOUTEMENT, 2],
        [AptitudeTypeName.CYTOMANCIE, 2],
        [AptitudeTypeName.EVOCATION, 2],
        [AptitudeTypeName.MALEFICE, 2],
      ]),
    },
    {
      Nom: ExtensionEffetName.UTILISATEUR_GALVANISE,
      Description:
        "Vous devez être sous les effets d'au moins autant d'atout que le rang de cette extension.",
      IsCummulable: false,
      StabiliteParTypeAptitude: new Map([
        [AptitudeTypeName.CYTOMANCIE, 3],
        [AptitudeTypeName.ENVOUTEMENT, 3],
        [AptitudeTypeName.EVOCATION, 3],
        [AptitudeTypeName.NECROMANCIE, 2],
        [AptitudeTypeName.MALEFICE, 3],
      ]),
    },

    {
      Nom: ExtensionEffetName.UTILISATEUR_MAUDIT,
      Description:
        "Vous devez être sous les effets d'au moins autant menace que le rang de cette extension.",
      IsCummulable: false,
      StabiliteParTypeAptitude: new Map([
        [AptitudeTypeName.CYTOMANCIE, 3],
        [AptitudeTypeName.ENVOUTEMENT, 3],
        [AptitudeTypeName.EVOCATION, 3],
        [AptitudeTypeName.NECROMANCIE, 2],
        [AptitudeTypeName.MALEFICE, 3],
      ]),
    },
    {
      Nom: ExtensionEffetName.INGREDIENT,
      Description:
        "Vous devez consommer un objet possédant une signature énergétique commune. Cet objet est déterminé lors de la conception de l'aptitude.",
      IsCummulable: true,
      StabiliteParTypeAptitude: new Map([
        [AptitudeTypeName.BENEDICTION, 1],
        [AptitudeTypeName.CYTOMANCIE, 1],
        [AptitudeTypeName.ENVOUTEMENT, 1],
        [AptitudeTypeName.EVOCATION, 1],
        [AptitudeTypeName.NECROMANCIE, 1],
        [AptitudeTypeName.MALEFICE, 1],
      ]),
    },
    {
      Nom: ExtensionEffetName.CONTRE_COUP,
      Description: "Le lanceur subit 1 blessure par menace net.",
      IsCummulable: true,
      StabiliteParTypeAptitude: new Map([
        [AptitudeTypeName.EVOCATION, 1],
        [AptitudeTypeName.CYTOMANCIE, 1],
        [AptitudeTypeName.BENEDICTION, 1],
        [AptitudeTypeName.MALEFICE, 1],
        [AptitudeTypeName.NECROMANCIE, 1],
        [AptitudeTypeName.ENVOUTEMENT, 2],
        [AptitudeTypeName.TECHNIQUE, 1],
      ]),
    },
    {
      Nom: ExtensionEffetName.MAITRISE_CORPS_A_CORPS,
      Description: `Le rang de maîtrise dans la compétence ${CompetenceName.CORPS_A_CORPS} doit être supérieur ou égal au rang de cette extension.`,
      IsCummulable: true,
      StabiliteParTypeAptitude: new Map([
        [AptitudeTypeName.TECHNIQUE, 1],
        [AptitudeTypeName.RIPOSTE, 1],
      ]),
    },
    {
      Nom: ExtensionEffetName.MAITRISE_PUGILAT,
      Description: `Le rang de maîtrise dans la compétence ${CompetenceName.PUGILAT} doit être supérieur ou égal au rang de cette extension.`,
      IsCummulable: true,
      StabiliteParTypeAptitude: new Map([[AptitudeTypeName.TECHNIQUE, 1]]),
    },
    {
      Nom: ExtensionEffetName.FEINTE,
      Description: "La technique n'inflige pas de dégat.",
      IsCummulable: false,
      StabiliteParTypeAptitude: new Map([[AptitudeTypeName.TECHNIQUE, 2]]),
    },
    {
      Nom: ExtensionEffetName.FIN_POSTURE,
      Description: "La technique met fin à la posture de l'utilisateur.",
      IsCummulable: false,
      StabiliteParTypeAptitude: new Map([[AptitudeTypeName.TECHNIQUE, 2]]),
    },
  ];

  private static AptitudeList: Array<Aptitude> = [
    {
      Nom: "Eclat de feu",
      Description:
        "Vous formez une sphère d'énergie et la projetez dans la direction de la cible. À son contact, la cible est brûlée et subit des dommages.",
      Image: "",
      Type: this.findAptTypeByName(AptitudeTypeName.EVOCATION),
      Vecteur: this.findAptVecteurByName(VecteurName.PROJECTILE),
      Effets: new Map([[EffetName.CHALEUR, 1]]),
      ExtensionsEffet: new Map(),
    },
    {
      Nom: "Touché guerisseur",
      Description:
        "Vous posez vos mains sur une cible consentante. La cible dépense immédiatement 1 point de résilience pour regagner ses PV perdus.",
      Image: "",
      Type: this.findAptTypeByName(AptitudeTypeName.BENEDICTION),
      Vecteur: this.findAptVecteurByName(VecteurName.CARESSE),
      Effets: new Map([[EffetName.SOIN, 1]]),
      ExtensionsEffet: new Map(),
    },
    {
      Nom: "Nova mortelle",
      Description:
        "L'énergie résiduelle du cadavre visé s'échappe violemment et renverse les cibles à portée courte.",
      Image: "",
      Type: this.findAptTypeByName(AptitudeTypeName.NECROMANCIE),
      Vecteur: this.findAptVecteurByName(VecteurName.ONDE),
      Effets: new Map([[EffetName.FORCE, 2]]),
      ExtensionsEffet: new Map([[ExtensionEffetName.ZONE, 1]]),
    },
    {
      Nom: "Le Berserk",
      Description:
        "Vous devenez colérique et inconscient en situation de conflit. Avant de lancer un jet d'attaque, vous pouvez choisir de « sacrifier » vos dés de défense donnée par votre valeur de réflexes pour les additionner à vos dés sur votre jet d'attaques. Ses dés ne sont plus utilisables pour vous défendre jusqu'au prochain tour.",
      Image: "",
      Type: this.findAptTypeByName(AptitudeTypeName.MANTRA),
      Vecteur: this.findAptVecteurByName(VecteurName.MANTRA),
      Effets: new Map(),
      ExtensionsEffet: new Map(),
    },
    {
      Nom: "L'Échophage",
      Description: `Lorsque vous appliquez l'effet ${EffetName.DRAIN_FLUIDE} ou subissez l'effet ${EffetName.SOIN_DE_STRESS}, vous pouvez dépenser immédiatement un point de résilience pour regagner des PV, ou dépenser 1 atout pour regagner un point de résilience. Vous êtes constamment affamé, et ne sembler être rassasié qu'après-avoir volé du fluide auprès d'une source extérieur. Vous vous comportez comme un drogué vis à vis de cette source d'énergie. Chaque jour passé sans consommer du fluide baisse votre santé max de 1 point jusqu'à un minimum de 1. Lorsque vous récurez de l'énergie via le fluide, vous pouvez dépenser un point de résilience, ou dépenser 3 atouts pour regagner un point de résilience.`,
      Image: "",
      Type: this.findAptTypeByName(AptitudeTypeName.MANTRA),
      Vecteur: this.findAptVecteurByName(VecteurName.MANTRA),
      Effets: new Map(),
      ExtensionsEffet: new Map(),
    },
    {
      Nom: "Le Distant",
      Description:
        "Vous avez 1 point de défense supplémentaire. Vous n'aimez pas le contact avec les autres, et vous montrez très irascible quand vous estimez des personnes trop proches de vous.",
      Image: "",
      Type: this.findAptTypeByName(AptitudeTypeName.MANTRA),
      Vecteur: this.findAptVecteurByName(VecteurName.MANTRA),
      Effets: new Map(),
      ExtensionsEffet: new Map(),
    },
    {
      Nom: "Morsure de Namtar",
      Description:
        "Vous drainez l'énergie de la cible touchée pour vous soigner.",
      Image: "",
      Type: this.findAptTypeByName(AptitudeTypeName.CYTOMANCIE),
      Vecteur: this.findAptVecteurByName(VecteurName.FRAPPE),
      Effets: new Map([[EffetName.DRAIN_FLUIDE, 1]]),
      ExtensionsEffet: new Map([[ExtensionEffetName.DIFFICILE, 1]]),
    },
    {
      Nom: "Le Fluidophobique",
      Description:
        "Vous gagnez un atout chaque fois que vous effectuez un jet d'attaque ou un jet d'opposition avec une créature utilisant le fluide. Vous ne pouvez pas utiliser d'aptitude autre que des mantras. Vous vous montrez toujours très antipathique envers les utilisateurs du fluide.",
      Image: "",
      Type: this.findAptTypeByName(AptitudeTypeName.MANTRA),
      Vecteur: this.findAptVecteurByName(VecteurName.MANTRA),
      Effets: new Map(),
      ExtensionsEffet: new Map(),
    },
    {
      Nom: "L'Honorable Dueliste",
      Description:
        "Le personnage à un esprit de compétition très marqué. Pendant une phase de combat, vous avez gagnez un atout avant d'effectuer un jet d'attaque face à un ennemi s'il n'a déjà effectuer une attaque contre vous et seulement vous, et n'a subit aucune attaque autre que les vôtres. Vous subissez immédiatement deux menaces si le duel est rompu.",
      Image: "",
      Type: this.findAptTypeByName(AptitudeTypeName.MANTRA),
      Vecteur: this.findAptVecteurByName(VecteurName.MANTRA),
      Effets: new Map(),
      ExtensionsEffet: new Map(),
    },
  ];

  static findAptitudesByNames(names: Array<string>) {
    return this.AptitudeList.filter((apt) => names.includes(apt.Nom));
  }
  static findAptTypeByName(name: AptitudeTypeName) {
    return this.Types.find((ct) => ct.Nom === name)!;
  }
  static findAptVecteurByName(name: VecteurName) {
    return this.VecteursList.find((vt) => vt.Nom === name)!;
  }
  static findEffetByName(name: EffetName) {
    return this.EffectsList.find((e) => e.Nom === name)!;
  }
  static findExtensionByName(name: ExtensionEffetName) {
    return this.ExtensionList.find((e) => e.Nom === name)!;
  }
  static getAllAptitudes() {
    return this.AptitudeList;
  }
  static getAllTypes() {
    return this.Types;
  }
  static getAllEffect() {
    return this.EffectsList;
  }
  static getAllExtension() {
    return this.ExtensionList;
  }
  static getAllVecteur() {
    return this.VecteursList;
  }
  static computeStabilityScore(
    type: AptitudeTypeName,
    effects: Map<EffetName, number>,
    extension: Map<ExtensionEffetName, number>
  ) {
    if (type === AptitudeTypeName.MANTRA) {
      return 0;
    }
    let totalCost = 0;
    effects.forEach((rank, effectName) => {
      totalCost +=
        rank *
        (this.findEffetByName(effectName)?.StabiliteParTypeAptitude.get(type) ||
          999);
    });
    extension.forEach((rank, extension) => {
      totalCost +=
        rank *
        (this.findExtensionByName(extension)?.StabiliteParTypeAptitude.get(
          type
        ) || 999);
    });
    return totalCost;
  }

  static printAptitudeCost(stability: number, type: AptitudeTypeName) {
    if (stability > 0) return "Aucun";
    switch (type) {
      case AptitudeTypeName.EVOCATION:
        return `${Math.abs(stability)} point de stress`;
      case AptitudeTypeName.BENEDICTION:
        return `${Math.trunc(Math.abs(stability) / 2)} atouts`;
      case AptitudeTypeName.MALEFICE:
        return `${Math.trunc(Math.abs(stability) / 2)} menaces`;
      case AptitudeTypeName.NECROMANCIE:
        return `${Math.trunc(Math.abs(stability) / 2)} niveaux de puissance`;
      case AptitudeTypeName.ENVOUTEMENT:
        return `${Math.abs(stability)} atouts`;
      case AptitudeTypeName.CYTOMANCIE:
        return `${Math.trunc(Math.abs(stability))} PV sacrifié`;
      case AptitudeTypeName.TECHNIQUE:
        return stability === 0 ? "stable" : "Inutilisable";
      case AptitudeTypeName.MANTRA:
        return "Aucun";
      case AptitudeTypeName.POSTURE:
        return "Aucun";
    }
  }
}
