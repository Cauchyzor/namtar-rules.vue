/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  Aptitude,
  AptitudeFixed,
  AptitudeType,
  Effet,
  ExtensionEffet,
  Vecteur,
} from "src/model/Aptitude";
import { AttributsName } from "src/model/Attribut";
import { CaracteritiqueName } from "src/model/Caracteristique";
import { CompetenceName } from "src/model/Competence";

export enum VecteurName {
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

export enum AptitudeTypeName {
  EVOCATION = "Évocation",
  MALEFICE = "Maléfice",
  NECROMANCIE = "Nécromancie",
  ENVOUTEMENT = "Envoûtement",
  BENEDICTION = "Bénédiction",
  MANTRA = "Mantra",
  CYTOMANCIE = "Cytomancie",
  POSTURE = "Posture",
  TECHNIQUE = "Technique",
  RIPOSTE = "Riposte",
}
export enum EffetName {
  ATTAQUE_DOUBLE = "Attaque double",
  ATOUT = "Atout",
  BOUCLIER = "Bouclier",
  BRISE_POSTURE = "Brise Posture",
  CHALEUR = "Chaleur",
  DEBILITANT = "Débilitant",
  DRAIN_FLUIDE = "Drain de fluide",
  ENTRAVE = "Entrave",
  FORCE = "Force",
  LEVITATION = "Lévitation",
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

export enum ExtensionEffetName {
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
  INGREDIENT = "Ingrédient",
  MAITRISE_CORPS_A_CORPS = "Maîtrise du corps à corps",
  MAITRISE_PUGILAT = "Maîtrise de la pugilat",
  UTILISATEUR_MAUDIT = "Utilisateur maudit",
  UTILISATEUR_GALVANISE = "Utilisateur galvanisé",
  ZONE = "Zone d'effet",
}

export enum Multiplicateur {
  NON_CUMMULABLE = 0,
  UN = 1,
  DEUX = 2,
  TROIS = 3,
}

export enum Cible {
  UTILISATEUR = "Vous",
  OBJET = "L'objet",
  UNIQUE = "La cible",
  MULTIPLE = "Les cibles",
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
      Nom: AptitudeTypeName.MALEFICE,
      Description:
        "L'utilisateur se sert des menace de la cible pour corrompre la signature de la cible qui devient le catalyseur d'une matérialisation néfaste de l'énergie sombre. La puissance du maléfice est nourrie par les menaces accumulées par la cible.",
      DescriptionDetails:
        "Chaque menaces subit par la cible génère 2 points de stabilité. Les menaces ne sont pas consommées.",
    },
    {
      Nom: AptitudeTypeName.NECROMANCIE,
      Description:
        "La force vitale résiduelle d'un cadavre est utilisée comme catalyseur de l'énergie sombre. La qualité de l'individu et le nombre d'individu renforce l'aptitude.",
      DescriptionDetails:
        "Chaque niveau du cadavre génère 2 points de stabilité. Plusieurs cadavres peuvent être utilisés en additionnant leurs niveaux.",
    },
    {
      Nom: AptitudeTypeName.ENVOUTEMENT,
      Description:
        "Le lanceur corrompt l'empreinte onirique de la cible pour qu'elle devienne un catalyseur d'énergie néfaste. La concordance de la cible est détériorée dans le processus. l'aptitude consume les atouts de la cible pour générer des effets.",
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
        "Un mantra est une modification permanente de la signature onirique de la cible pour apprécier certain effets du fluide sur son comportement et ses capacités. Les effets sont passifs.",
      DescriptionDetails:
        "Les mantras sont toujours stables et les effets constants depuis sa creation.",
    },
    {
      Nom: AptitudeTypeName.CYTOMANCIE,
      Description:
        "L'énergie sombre est stockée dans des cellules sacrifiées par le lanceur. Le lanceur sacrifie des PV pour générer ses effets",
      DescriptionDetails: "Chaque PV sacrifié génère 1 point de stabilité.",
    },
    {
      Nom: AptitudeTypeName.TECHNIQUE,
      Description:
        "Un mouvement qui requiert une grande concentration. l'aptitude se déroule comme une action complexe.",
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
    new Vecteur(
      VecteurName.ALTERATION_OBJET,
      `Vous effectuez un Test d'${CompetenceName.ENTROPIE_DU_FLUIDE} (${CaracteritiqueName.INTELLIGENCE}) de DD3. L'arme en main appliquera des effets supplémentaire en plus des dégâts de l'arme, lors du prochain jet d'attaque réussi.`,
      Cible.OBJET,
      Multiplicateur.NON_CUMMULABLE,
      [
        AptitudeTypeName.BENEDICTION,
        AptitudeTypeName.CYTOMANCIE,
        AptitudeTypeName.EVOCATION,
      ]
    ),
    new Vecteur(
      VecteurName.CONTACT,
      `Vous effectuez une attaque engagée d'${CompetenceName.ENTROPIE_DU_FLUIDE} (${CaracteritiqueName.VIGUEUR}).`,
      Cible.UNIQUE,
      Multiplicateur.NON_CUMMULABLE,
      [
        AptitudeTypeName.CYTOMANCIE,
        AptitudeTypeName.ENVOUTEMENT,
        AptitudeTypeName.EVOCATION,
        AptitudeTypeName.MALEFICE,
      ]
    ),
    new Vecteur(
      VecteurName.FRAPPE,
      `Vous effectuez une attaque engagée de ${CompetenceName.CORPS_A_CORPS} (${CaracteritiqueName.VIGUEUR}) ou de ${CompetenceName.PUGILAT} (${CaracteritiqueName.VIGUEUR}). La qualité de la réussite de l'aptitude est déterminée par les avantages net plutôt que par les succès. Les dégâts de l'arme utilisée sont calculés normalement.`,
      Cible.UNIQUE,
      Multiplicateur.NON_CUMMULABLE,
      [
        AptitudeTypeName.CYTOMANCIE,
        AptitudeTypeName.ENVOUTEMENT,
        AptitudeTypeName.EVOCATION,
        AptitudeTypeName.MALEFICE,
      ]
    ),
    new Vecteur(
      VecteurName.FRAPPE_ONIRIQUE,
      `Vous effectuez une attaque distance d'${CompetenceName.ENTROPIE_DU_FLUIDE} (${CaracteritiqueName.CHARISME}). Le DD est augmentée 1 fois en plus de la distance.`,
      Cible.UNIQUE,
      Multiplicateur.NON_CUMMULABLE,
      [
        AptitudeTypeName.BENEDICTION,
        AptitudeTypeName.ENVOUTEMENT,
        AptitudeTypeName.MALEFICE,
      ]
    ),
    new Vecteur(
      VecteurName.REGARD,
      `Vous effectuez un Test opposé d'${CompetenceName.ENTROPIE_DU_FLUIDE} (${CaracteritiqueName.CHARISME}) contre la ${CompetenceName.PERSPICACITE} (${CaracteritiqueName.CHARISME}) de la cible.`,
      Cible.UNIQUE,
      Multiplicateur.NON_CUMMULABLE,
      [AptitudeTypeName.ENVOUTEMENT, AptitudeTypeName.MALEFICE]
    ),
    new Vecteur(
      VecteurName.SOUFFLE,
      `Vous effectuez une attaque a distance d'${CompetenceName.ENTROPIE_DU_FLUIDE} (${CaracteritiqueName.VIGUEUR}) pour frapper toutes les cibles dans un cône à portée courte devant vous.`,
      Cible.MULTIPLE,
      Multiplicateur.NON_CUMMULABLE,
      [
        AptitudeTypeName.CYTOMANCIE,
        AptitudeTypeName.ENVOUTEMENT,
        AptitudeTypeName.EVOCATION,
        AptitudeTypeName.MALEFICE,
      ]
    ),
    new Vecteur(
      VecteurName.PROJECTILE,
      `Vous effectuez une attaque à distance d'${CompetenceName.ENTROPIE_DU_FLUIDE} (${CaracteritiqueName.INTELLIGENCE}) et lancez un projectile immatériel sur la cible.`,
      Cible.UNIQUE,
      Multiplicateur.NON_CUMMULABLE,
      [AptitudeTypeName.CYTOMANCIE, AptitudeTypeName.EVOCATION]
    ),
    new Vecteur(
      VecteurName.ONDE,
      `Vous effectuez un Test d'${CompetenceName.ENTROPIE_DU_FLUIDE} (${CaracteritiqueName.INTELLIGENCE}) de DD4 et projetez une déflagration immatérielle à portée courte, touchant toutes les créatures autours de vous. `,
      Cible.MULTIPLE,
      Multiplicateur.NON_CUMMULABLE,
      [
        AptitudeTypeName.BENEDICTION,
        AptitudeTypeName.CYTOMANCIE,
        AptitudeTypeName.ENVOUTEMENT,
        AptitudeTypeName.EVOCATION,
        AptitudeTypeName.MALEFICE,
      ]
    ),
    new Vecteur(
      // TODO revoir le vecteur chant pour expliciter 'membre du groupe'
      VecteurName.CHANT,
      `Vous effectuez un Test d'${CompetenceName.ENTROPIE_DU_FLUIDE} (${CaracteritiqueName.CHARISME}) de DD3 pour entonner un chant qui applique des effets sur toutes les membres du groupes à porté de voix.`,
      Cible.MULTIPLE,
      Multiplicateur.NON_CUMMULABLE,
      [AptitudeTypeName.BENEDICTION]
    ),
    new Vecteur(
      VecteurName.MEDITATION_ECLAIRE,
      `Vous effectuez un test d'${CompetenceName.ENTROPIE_DU_FLUIDE} (${CaracteritiqueName.INTELLIGENCE}) de DD2.`,
      Cible.UTILISATEUR,
      Multiplicateur.NON_CUMMULABLE,
      [
        AptitudeTypeName.BENEDICTION,
        AptitudeTypeName.CYTOMANCIE,
        AptitudeTypeName.ENVOUTEMENT,
        AptitudeTypeName.EVOCATION,
      ]
    ),
    new Vecteur(
      VecteurName.CARESSE,
      `Vous effectuez un test d'${CompetenceName.ENTROPIE_DU_FLUIDE} (${CaracteritiqueName.CHARISME}) de DD2 et appliquez des effets à la cible touchée consentante.`,
      Cible.UNIQUE,
      Multiplicateur.NON_CUMMULABLE,
      [
        AptitudeTypeName.BENEDICTION,
        AptitudeTypeName.CYTOMANCIE,
        AptitudeTypeName.ENVOUTEMENT,
        AptitudeTypeName.EVOCATION,
      ]
    ),
    new Vecteur(
      VecteurName.CARESSE_ONIRIQUE,
      `Vous effectuez un test d'${CompetenceName.ENTROPIE_DU_FLUIDE} (${CaracteritiqueName.CHARISME}) de DD3 et appliquez des effets à la cible touchée consentante. Le DD est augmentée 1 fois de plus par niveau de porté.`,
      Cible.UNIQUE,
      Multiplicateur.NON_CUMMULABLE,
      [
        AptitudeTypeName.BENEDICTION,
        AptitudeTypeName.ENVOUTEMENT,
        AptitudeTypeName.MALEFICE,
      ]
    ),
    new Vecteur(
      // TODO : Augmenter la portée effective de l'explosion de cadavre pour appliquer des effets
      VecteurName.EXPLOSION_CADAVRE,
      `Vous effectuez un test d'${CompetenceName.ENTROPIE_DU_FLUIDE} (${CaracteritiqueName.INTELLIGENCE}) de DD3. Le DD augmente une fois pour chaque rangs de portée supplémentaires. Les cibles à portée courte du cadavre ciblé subissent `,
      Cible.MULTIPLE,
      Multiplicateur.NON_CUMMULABLE,
      [AptitudeTypeName.NECROMANCIE]
    ),
    new Vecteur(
      VecteurName.EXPLOITATION_CADRAVRE,
      `Vous effectuez un test d'${CompetenceName.ENTROPIE_DU_FLUIDE} (${CaracteritiqueName.INTELLIGENCE}) de DD2 pour récupérer l'énergie résiduelle d'un cadavre.`,
      Cible.UTILISATEUR,
      Multiplicateur.NON_CUMMULABLE,
      [AptitudeTypeName.NECROMANCIE]
    ),
    new Vecteur(
      VecteurName.MANTRA,
      "Les mantra dans des capacités passives.",
      Cible.UTILISATEUR,
      Multiplicateur.NON_CUMMULABLE,
      [AptitudeTypeName.MANTRA]
    ),
    new Vecteur(
      VecteurName.POSTURE,
      "Les postures donnent des bonus passif pendant leur utilisation. Se mettre dans une posture consomme une réaction.",
      Cible.UTILISATEUR,
      Multiplicateur.NON_CUMMULABLE,
      [AptitudeTypeName.POSTURE]
    ),
    new Vecteur(
      VecteurName.TECHNIQUE_ENGAGEMENT,
      "Vous effectuez un jet d'attaque au corps à corps.",
      Cible.UNIQUE,
      Multiplicateur.NON_CUMMULABLE,
      [AptitudeTypeName.TECHNIQUE]
    ),
    new Vecteur(
      VecteurName.RIPOSTE,
      "Vous utiliser cette aptitude de la même manière qu'une réaction.",
      Cible.UNIQUE,
      Multiplicateur.NON_CUMMULABLE,
      [AptitudeTypeName.TECHNIQUE]
    ),
  ];

  private static EffectsList: Array<Effet> = [
    new Effet(
      EffetName.ATOUT,
      "La cible gagne %M% atout(s). S'estompe à la fin de la rencontre ou au bout d'une dizaine de secondes",
      Multiplicateur.UN,
      new Map([
        [AptitudeTypeName.BENEDICTION, -2],
        [AptitudeTypeName.EVOCATION, -4],
        [AptitudeTypeName.NECROMANCIE, -2],
        [AptitudeTypeName.CYTOMANCIE, -2],
      ])
    ),
    new Effet(
      EffetName.BOUCLIER,
      "La cible gagne %M% point(s) au score de défense. L'effet s'estompe à la fin de la rencontre ou au bout d'une dizaine de secondes",
      Multiplicateur.UN,
      new Map([
        [AptitudeTypeName.BENEDICTION, -6],
        [AptitudeTypeName.EVOCATION, -8],
        [AptitudeTypeName.NECROMANCIE, -4],
        [AptitudeTypeName.CYTOMANCIE, -4],
      ])
    ),
    new Effet(
      EffetName.CHALEUR,
      "La cible perd %M% PV par triomphe, par succès et par avantage net sur le score de jet.",
      Multiplicateur.DEUX,
      new Map([
        [AptitudeTypeName.ENVOUTEMENT, -5],
        [AptitudeTypeName.EVOCATION, -4],
        [AptitudeTypeName.MALEFICE, -3],
        [AptitudeTypeName.NECROMANCIE, -1],
        [AptitudeTypeName.CYTOMANCIE, -3],
      ])
    ),
    new Effet(
      EffetName.DEBILITANT,
      "La cible perd sa prochaine réaction. Si vous avez plus de succès net que la valeur d'intelligence, elle joue une de ses actions à la fin du tour.",
      Multiplicateur.NON_CUMMULABLE,
      new Map([
        [AptitudeTypeName.ENVOUTEMENT, -4],
        [AptitudeTypeName.EVOCATION, -4],
        [AptitudeTypeName.MALEFICE, -4],
        [AptitudeTypeName.NECROMANCIE, -2],
        [AptitudeTypeName.CYTOMANCIE, -4],
      ])
    ),
    new Effet(
      EffetName.DRAIN_FLUIDE,
      "La cible perd %M% point(s) de stress par succès et triomphe net sur le jet. Vous regagnez autant de point de stress.",
      Multiplicateur.UN,
      new Map([
        [AptitudeTypeName.ENVOUTEMENT, -1],
        [AptitudeTypeName.EVOCATION, -2],
        [AptitudeTypeName.MALEFICE, -1],
        [AptitudeTypeName.CYTOMANCIE, -1],
        [AptitudeTypeName.BENEDICTION, -2],
      ])
    ),
    new Effet(
      EffetName.ENTRAVE,
      "La cible est entravée et ne peut plus se déplacer. Si le total de succès net est supérieur à sa valeur de vigueur, elle est immobilisée.",
      Multiplicateur.NON_CUMMULABLE,
      new Map([
        [AptitudeTypeName.EVOCATION, -3],
        [AptitudeTypeName.MALEFICE, -2],
        [AptitudeTypeName.ENVOUTEMENT, -1],
        [AptitudeTypeName.NECROMANCIE, -1],
        [AptitudeTypeName.CYTOMANCIE, -2],
      ])
    ),
    new Effet(
      EffetName.FORCE,
      "La cible perd %M% PV par succès net et le double par triomphe net sur le jet. Les cibles dont la vigueur est inférieure au nombre de succès net sont renversées.",
      Multiplicateur.UN,
      new Map([
        [AptitudeTypeName.EVOCATION, -3],
        [AptitudeTypeName.NECROMANCIE, -1],
        [AptitudeTypeName.CYTOMANCIE, -1],
      ])
    ),
    new Effet(
      EffetName.TELEPATHE,
      "Vous pouvez communiquer brièvement avec la cible par la pensée. Chaque succès permet soit de faire durer le lien quelques secondes de plus et permet de transmettre d'avantage d'informations.",
      Multiplicateur.NON_CUMMULABLE,
      new Map([
        [AptitudeTypeName.CYTOMANCIE, -2],
        [AptitudeTypeName.EVOCATION, -2],
        [AptitudeTypeName.BENEDICTION, -1],
        [AptitudeTypeName.MALEFICE, -1],
        [AptitudeTypeName.ENVOUTEMENT, -1],
      ])
    ),
    new Effet(
      EffetName.OBSTRUCTION,
      "La cible subit %M% menace(s) pour chaque niveau de résultat (1 succès, 2, 3, 5, 8 ...).",
      Multiplicateur.UN,
      new Map([
        [AptitudeTypeName.EVOCATION, -2],
        [AptitudeTypeName.MALEFICE, -1],
        [AptitudeTypeName.ENVOUTEMENT, -2],
        [AptitudeTypeName.CYTOMANCIE, -2],
      ])
    ),
    //TODO Faire un effets qui génère des désavantages
    //TODO Faire un effets qui génère des avantages
    new Effet(
      EffetName.ILLUSION,
      "La cible subit une hallucination sur l'un de ses sens qui lui indique ce que vous voulez (déterminé à la création de l'aptitude). Chaque succès supplémentaire permet de rendre l'illusion plus précise et efficace, et chaque triomphe affecte un sens supplémentaire.",
      Multiplicateur.NON_CUMMULABLE,
      new Map([
        [AptitudeTypeName.EVOCATION, -2],
        [AptitudeTypeName.MALEFICE, -1],
        [AptitudeTypeName.ENVOUTEMENT, -1],
      ])
    ),
    new Effet(
      EffetName.SOIN_DE_STRESS,
      "La cible regagne %M% point(s) de stress par triomphe et succès net sur le jet.",
      Multiplicateur.UN,
      new Map([
        [AptitudeTypeName.BENEDICTION, -2],
        [AptitudeTypeName.EVOCATION, -3],
        [AptitudeTypeName.NECROMANCIE, -2],
        [AptitudeTypeName.CYTOMANCIE, -2],
      ])
    ),
    new Effet(
      EffetName.SOIN,
      "La cible dépense immediate de jusqu'à %M% point de résilience qu'elle possède pour effectuez un soin. Chaque triomphe soigne d'un point de stress.",
      Multiplicateur.UN,
      new Map([
        [AptitudeTypeName.BENEDICTION, -3],
        [AptitudeTypeName.EVOCATION, -4],
        [AptitudeTypeName.NECROMANCIE, -3],
        [AptitudeTypeName.CYTOMANCIE, -3],
      ])
    ),
    new Effet(
      EffetName.VAMPIRISME,
      "La cible perd %M% PV par triomphe et succès net sur le jet. Vous regagnez autant de PV.",
      Multiplicateur.UN,
      new Map([
        [AptitudeTypeName.ENVOUTEMENT, -10],
        [AptitudeTypeName.EVOCATION, -6],
        [AptitudeTypeName.MALEFICE, -4],
        [AptitudeTypeName.CYTOMANCIE, -2],
      ])
    ),
    new Effet(
      EffetName.LEVITATION,
      "Vous gagnez la capacité de vous déplacer par lévitation pendant un bref instant. Chaque succès permet de prolonger l'effet pendant quelques secondes. Gabarit maximum : %M%.",
      Multiplicateur.UN,
      new Map([
        [AptitudeTypeName.EVOCATION, -6],
        [AptitudeTypeName.CYTOMANCIE, -6],
        [AptitudeTypeName.BENEDICTION, -6],
      ])
    ),
    new Effet(
      EffetName.MANTRA,
      "Les effets des mantra sont intégralement déterminés par description libre.",
      Multiplicateur.NON_CUMMULABLE,
      new Map()
    ),
    new Effet(
      EffetName.PUISSANT,
      "Vous infligez %M% dégât supplémentaire par succès sur le jet d'attaque réussit contre elle.",
      Multiplicateur.NON_CUMMULABLE,
      new Map([[AptitudeTypeName.TECHNIQUE, -2]])
    ),
    new Effet(
      EffetName.RENVERSEMENT,
      `La cibles est mise a terre si la somme des succès est supérieur son score de ${CaracteritiqueName.VIGUEUR}`,
      Multiplicateur.NON_CUMMULABLE,
      new Map([[AptitudeTypeName.TECHNIQUE, -1]])
    ),
    new Effet(
      EffetName.ATTAQUE_DOUBLE,
      "Vous pouvez immédiatement attaquer une seconde fois si vous avez attaqué a ce tour.",
      Multiplicateur.NON_CUMMULABLE,
      new Map([[AptitudeTypeName.TECHNIQUE, -4]])
    ),
    new Effet(
      EffetName.BRISE_POSTURE,
      "La cible perte sa posture.",
      Multiplicateur.NON_CUMMULABLE,
      new Map([
        [AptitudeTypeName.TECHNIQUE, -2],
        [AptitudeTypeName.EVOCATION, -3],
        [AptitudeTypeName.ENVOUTEMENT, -1],
        [AptitudeTypeName.MALEFICE, -2],
        [AptitudeTypeName.CYTOMANCIE, -3],
      ])
    ),
  ];

  private static ExtensionList: Array<ExtensionEffet> = [
    new ExtensionEffet(
      ExtensionEffetName.ANGLE_MORT,
      "Vous devez vous situer en dehors du champ de vision de la cible.",
      Multiplicateur.NON_CUMMULABLE,
      new Map([
        [AptitudeTypeName.ENVOUTEMENT, 2],
        [AptitudeTypeName.EVOCATION, 2],
        [AptitudeTypeName.CYTOMANCIE, 2],
        [AptitudeTypeName.MALEFICE, 2],
      ])
    ),
    new ExtensionEffet(
      ExtensionEffetName.CATALYSEUR,
      "Vous devez tenir en main un objet onirique qui vous aide à lancer le sort. La puissance du catalyseur doit être égale ou supérieure au rang de cette extension (%M%).",
      Multiplicateur.UN,
      new Map([
        [AptitudeTypeName.BENEDICTION, 1],
        [AptitudeTypeName.ENVOUTEMENT, 1],
        [AptitudeTypeName.EVOCATION, 1],
        [AptitudeTypeName.CYTOMANCIE, 1],
        [AptitudeTypeName.MALEFICE, 1],
        [AptitudeTypeName.NECROMANCIE, 1],
      ])
    ),
    new ExtensionEffet(
      ExtensionEffetName.CIBLE_GALVANISE,
      "La ou les cibles de l'aptitude doivent être sous les effets d'au moins autant d'atout que le rang de cette extension (%M%). ",
      Multiplicateur.UN,
      new Map([
        [AptitudeTypeName.CYTOMANCIE, 2],
        [AptitudeTypeName.ENVOUTEMENT, 3],
        [AptitudeTypeName.EVOCATION, 2],
        [AptitudeTypeName.NECROMANCIE, 1],
        [AptitudeTypeName.MALEFICE, 3],
      ])
    ),
    new ExtensionEffet(
      ExtensionEffetName.CIBLE_MAUDITE,
      "La ou les cibles de l'aptitude doivent être sous les effets d'au moins 1 menace pour chaque rang de cette extension.",
      Multiplicateur.UN,
      new Map([
        [AptitudeTypeName.CYTOMANCIE, 2],
        [AptitudeTypeName.ENVOUTEMENT, 3],
        [AptitudeTypeName.EVOCATION, 2],
        [AptitudeTypeName.NECROMANCIE, 1],
        [AptitudeTypeName.MALEFICE, 3],
      ])
    ),
    new ExtensionEffet(
      ExtensionEffetName.UTILISATEUR_GALVANISE,
      "Vous devez être sous les effets d'au moins %M% atout pour chaque rang de cette extension.",
      Multiplicateur.UN,
      new Map([
        [AptitudeTypeName.CYTOMANCIE, 2],
        [AptitudeTypeName.ENVOUTEMENT, 3],
        [AptitudeTypeName.EVOCATION, 2],
        [AptitudeTypeName.NECROMANCIE, 1],
        [AptitudeTypeName.MALEFICE, 3],
      ])
    ),
    new ExtensionEffet(
      ExtensionEffetName.DIFFICILE,
      "Ajouter %M% dé de difficulté sur votre jet.",
      Multiplicateur.UN,
      new Map([
        [AptitudeTypeName.BENEDICTION, 1],
        [AptitudeTypeName.ENVOUTEMENT, 1],
        [AptitudeTypeName.EVOCATION, 1],
        [AptitudeTypeName.CYTOMANCIE, 1],
        [AptitudeTypeName.MALEFICE, 1],
        [AptitudeTypeName.NECROMANCIE, 1],
      ])
    ),
    new ExtensionEffet(
      ExtensionEffetName.INCENTATION_RAPIDE,
      "L'aptitude peut être lancée pendant un déplacement, mais vous augmentez 2 fois la difficulté de l'aptitude. ",
      Multiplicateur.NON_CUMMULABLE,
      new Map([
        [AptitudeTypeName.BENEDICTION, 1],
        [AptitudeTypeName.ENVOUTEMENT, 1],
        [AptitudeTypeName.EVOCATION, 1],
        [AptitudeTypeName.CYTOMANCIE, 1],
        [AptitudeTypeName.MALEFICE, 1],
        [AptitudeTypeName.NECROMANCIE, 1],
      ])
    ),
    new ExtensionEffet(
      ExtensionEffetName.ENERGIE_ACTIVATION,
      "L'aptitude n'applique pas ses effets uniquement si la cible est victime déjà d'un effet. Cet effet est déterminé à la conception du sort.",
      Multiplicateur.NON_CUMMULABLE,
      new Map([
        [AptitudeTypeName.BENEDICTION, 2],
        [AptitudeTypeName.ENVOUTEMENT, 2],
        [AptitudeTypeName.CYTOMANCIE, 2],
        [AptitudeTypeName.EVOCATION, 2],
        [AptitudeTypeName.MALEFICE, 2],
      ])
    ),
    new ExtensionEffet(
      ExtensionEffetName.UTILISATEUR_MAUDIT,
      "Vous devez être sous les effets d'au moins autant menace que le rang de cette extension. (%M%)",
      Multiplicateur.UN,
      new Map([
        [AptitudeTypeName.CYTOMANCIE, 3],
        [AptitudeTypeName.ENVOUTEMENT, 3],
        [AptitudeTypeName.EVOCATION, 3],
        [AptitudeTypeName.NECROMANCIE, 2],
        [AptitudeTypeName.MALEFICE, 3],
      ])
      // TODO Extension ingrédient : gérer différent types d'ingrédients (puissance, nombre...)
    ),
    new ExtensionEffet(
      ExtensionEffetName.INGREDIENT,
      "Vous devez consommer un objet possédant une signature énergétique commune. Cet objet est déterminé lors de la conception de l'aptitude.",
      Multiplicateur.NON_CUMMULABLE,
      new Map([
        [AptitudeTypeName.BENEDICTION, 1],
        [AptitudeTypeName.CYTOMANCIE, 1],
        [AptitudeTypeName.ENVOUTEMENT, 1],
        [AptitudeTypeName.EVOCATION, 1],
        [AptitudeTypeName.NECROMANCIE, 1],
        [AptitudeTypeName.MALEFICE, 1],
      ])
    ),
    new ExtensionEffet(
      ExtensionEffetName.CONTRE_COUP,
      "Le lanceur subit %M% blessure par menace net.",
      Multiplicateur.UN,
      new Map([
        [AptitudeTypeName.EVOCATION, 1],
        [AptitudeTypeName.CYTOMANCIE, 1],
        [AptitudeTypeName.BENEDICTION, 1],
        [AptitudeTypeName.MALEFICE, 1],
        [AptitudeTypeName.NECROMANCIE, 1],
        [AptitudeTypeName.ENVOUTEMENT, 2],
        [AptitudeTypeName.TECHNIQUE, 1],
      ])
    ),
    new ExtensionEffet(
      ExtensionEffetName.MAITRISE_CORPS_A_CORPS,
      `Le rang de maîtrise dans la compétence ${CompetenceName.CORPS_A_CORPS} doit être supérieur ou égal au rang de cette extension (%M%).`,
      Multiplicateur.UN,
      new Map([
        [AptitudeTypeName.TECHNIQUE, 1],
        [AptitudeTypeName.RIPOSTE, 1],
      ])
    ),
    new ExtensionEffet(
      ExtensionEffetName.FEINTE,
      "La technique n'inflige pas de dégât.",
      Multiplicateur.NON_CUMMULABLE,
      new Map([[AptitudeTypeName.TECHNIQUE, 2]])
    ),
    new ExtensionEffet(
      ExtensionEffetName.FIN_POSTURE,
      "La technique met fin à la posture de l'utilisateur.",
      Multiplicateur.NON_CUMMULABLE,
      new Map([[AptitudeTypeName.TECHNIQUE, 2]])
    ),
  ];

  private static AptitudeList: Array<Aptitude> = [
    new AptitudeFixed(
      "Concentration",
      `Vous sacrifier autant de dés de ${AttributsName.REFLEXES} afin de l'ajouter a vos jet d'attaques. Lorsque cette posture ce termine, vous ne pouvez regagner vos dés de ${AttributsName.REFLEXES} qu'au début de votre prochain tour.`,
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
  static findAptVecteurByName(name: VecteurName) {
    return this.VecteursList.find((vt) => vt.Nom === name)!;
  }
  static findEffetByName(name: EffetName) {
    return this.EffectsList.find((e) => e.Nom === name)!;
  }
  static findExtensionByName(name: ExtensionEffetName) {
    return this.ExtensionList.find((e) => e.Nom === name)!;
  }
  static findAllAptitudes() {
    return this.AptitudeList;
  }
  static findAllTypes() {
    return this.Types;
  }
  static findAllEffets() {
    return this.EffectsList;
  }
  static findAllExtensions() {
    return this.ExtensionList;
  }
  static findAllVecteur() {
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
      default:
        return "Erreur : type non répertorié";
    }
  }
}
