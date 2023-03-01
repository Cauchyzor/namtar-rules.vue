/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { CaracteritiqueName } from './Caracteristique';
import { CompetenceName } from './Competence';

// TODO Augmentation de la défense ?
// TODO Stepper pour creer une aptitude

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

enum AptitudeTypeName {
  EVOCATION = 'Evocation',
  MALEFICE = 'Malefice',
  NECROMANCIE = 'Necromancie',
  ENVOUTEMENT = 'Envoutement',
  BENEDICTION = 'Bénédiction',
  MANTRA = 'Mantra',
}

export type Vecteur = {
  Nom: VecteurName;
  Description: string;
  Difficulte: string;
};

enum VecteurName {
  CONTACT = 'Contact',
  HALUCINATION = 'Halucination',
  SOUFFLE = 'Souffle',
  PROJECTILE = 'Projectile',
  ONDE = 'Onde',
  SOURCE_UNIQUEMENT = 'Source uniquement',
}

export type Effet = {
  Nom: EffetName;
  Description: string;
  IsCummulable: boolean;
  StabiliteParTypeAptitude: Map<AptitudeTypeName, number>;
};

enum EffetName {
  ATOUT = 'Atout',
  CHALEUR = 'Chaleur',
  ENTRAVE = 'Entrave',
  FORCE = 'Force',
  LEVITATION = 'Levitation',
  ILLUSION = 'Illusion',
  INFORTUNE = 'Infortune',
  SOIN_DE_STRESS = 'Soin de stress',
  TELEPATHE = 'Télépathe',
  SOIN = 'Soin',
  VAMPIRISME = 'Vampirisme',
  MANTRA = 'Mantra',
}

export type ExtensionEffet = {
  Nom: ExtensionEffetName;
  Description: string;
  IsCummulable: boolean;
  StabiliteParTypeAptitude: Map<AptitudeTypeName, number>;
};

enum ExtensionEffetName {
  ANGLE_MORT = 'Angle mort',
  CATALYSEUR = 'Catalyseur',
  CONTRE_COUP = 'Contre-coup',
  DIFFICILE = 'Difficile',
  ECHANGE_DE_REGARD = 'Echange de regards',
  ENERGIE_ACTIVATION = "Energie d'activation",
  INCENTATION_RAPIDE = 'Incantation rapide',
  INGREDIENT = 'Ingredient',
  ZONE = "Zone d'effet",
}

export class AptitudeService {
  //TODO Exporter les capacitées dans des fichiers JSON + gérer la lecture et l'ecriture
  private static Types: Array<AptitudeType> = [
    {
      Nom: AptitudeTypeName.EVOCATION,
      Description:
        "L'utilisateur puise dans son endurance pour générer de l'energie.",
      DescriptionDetails:
        'Chaque point de stress investi produit 1 point de stabilité.',
    },
    {
      Nom: AptitudeTypeName.MALEFICE,
      Description:
        "L'energie du malefice est nouris par les menaces accumulées par la cible.",
      DescriptionDetails:
        'Chaque menaces subit par la cible genère 2 point de stabilité.',
    },
    {
      Nom: AptitudeTypeName.NECROMANCIE,
      Description:
        "L'aptitude est générée avec l'energie residuelle d'un ou plusieurs cadavre ou d'une source d'energie.",
      DescriptionDetails:
        'Chaque niveau du cadavre genère 2 point de stabilité. Plusieurs cadavres peuvent être utilisé en additionnant leurs niveaux.',
    },
    {
      Nom: AptitudeTypeName.ENVOUTEMENT,
      Description:
        'Corrompt et consume les atouts de la cible pour générer des effets.',
      DescriptionDetails: 'Chaque atout supprimé genère 1 point de stabilité.',
    },
    {
      Nom: AptitudeTypeName.BENEDICTION,
      Description: 'Consomme les atouts du groupe pour generer des effets.',
      DescriptionDetails: 'Chaque atout supprimé genère 2 point de stabilité.',
    },
    {
      Nom: AptitudeTypeName.MANTRA,
      Description: 'Les effets sont passif.',
      DescriptionDetails: 'Les mantras sont toujours stable.',
    },
  ];

  private static VecteursList: Array<Vecteur> = [
    {
      Nom: VecteurName.CONTACT,
      Description: 'Les effets sont appliqués à la cible touchée.',
      Difficulte: `Attaque engagée de ${CompetenceName.PUGILAT} (${CaracteritiqueName.INTELLIGENCE})`,
    },
    {
      Nom: VecteurName.HALUCINATION,
      Description: 'Les effet sont appliqué à la cible en visuel.',
      Difficulte: `Opposition entre ${CompetenceName.TROMPERIE} (${CaracteritiqueName.CHARISME}) et ${CompetenceName.PERSPICACITE} (${CaracteritiqueName.CHARISME})`,
    },
    {
      Nom: VecteurName.SOUFFLE,
      Description:
        "Le lanceur canalyse l'energie dans ses poumons, et applique ces effets dans un cône devant lui sur courte distance",
      Difficulte: `Test de ${CompetenceName.ENTROPIE_DU_FLUIDE} (${CaracteritiqueName.VIGUEUR}) de difficulté dépendant de la distance couverte`,
    },
    {
      Nom: VecteurName.PROJECTILE,
      Description:
        "Le lanceur génère un projectile qui se déplace à grande vitesse jusqu'à l'endoit indiqué, et applique ses effets a l'impact avant de s'estomper.",
      Difficulte: `Attaque à distance de ${CompetenceName.ENTROPIE_DU_FLUIDE} (${CaracteritiqueName.INTELLIGENCE}).`,
    },
    {
      Nom: VecteurName.ONDE,
      Description:
        'Le lanceur génère une onde qui applique les effets du sort sur toutes les cibles à porté courte autour de lui.',
      Difficulte: `Test de ${CompetenceName.ENTROPIE_DU_FLUIDE} (${CaracteritiqueName.INTELLIGENCE}) de DD3 à portée courte, et +1 au DD pour chaque rangs supplémentaires.`,
    },
    {
      Nom: VecteurName.SOURCE_UNIQUEMENT,
      Description:
        "Les effets sont appliqués à la source de l'aptitude (dépends du type de aptitude). Aucune difficulté sur les cibles dépourvues de volonté, consantentes ou sur vous même.",
      Difficulte: `Test opposé de ${CompetenceName.ENTROPIE_DU_FLUIDE} (${CaracteritiqueName.CHARISME}) du lanceur contre ${CompetenceName.PERSPICACITE} (${CaracteritiqueName.CHARISME}).`,
    },
  ];

  private static EffectsList: Array<Effet> = [
    {
      Nom: EffetName.ATOUT,
      Description:
        'La cible gagne 1 atout (Cummulable) sur sont prochain test.',
      IsCummulable: true,
      StabiliteParTypeAptitude: new Map([
        [AptitudeTypeName.BENEDICTION, -2],
        [AptitudeTypeName.EVOCATION, -4],
        [AptitudeTypeName.NECROMANCIE, -2],
      ]),
    },
    {
      Nom: EffetName.CHALEUR,
      Description:
        'Inflige 2 Dommage (Cummulable) par succes net et par avantage',
      IsCummulable: true,
      StabiliteParTypeAptitude: new Map([
        [AptitudeTypeName.ENVOUTEMENT, -8],
        [AptitudeTypeName.EVOCATION, -4],
        [AptitudeTypeName.MALEFICE, -3],
        [AptitudeTypeName.NECROMANCIE, -1],
      ]),
    },
    {
      Nom: EffetName.ENTRAVE,
      Description:
        'La cible perd sa capacité de déplacement si 1 succès. Elle est neutralisée a partir de 2 succès. Elle est complètment paralysé et ne peut pas pensé a partir de 3 succès.',
      IsCummulable: true,
      StabiliteParTypeAptitude: new Map([
        [AptitudeTypeName.EVOCATION, -3],
        [AptitudeTypeName.NECROMANCIE, -1],
      ]),
    },
    {
      Nom: EffetName.FORCE,
      Description:
        'Inflige 1 Dommage (Cummulable) par succes net. Les cibles dont la Vigueur est inferieur au nombre de succès générés sont renversés',
      IsCummulable: true,
      StabiliteParTypeAptitude: new Map([
        [AptitudeTypeName.EVOCATION, -3],
        [AptitudeTypeName.NECROMANCIE, -1],
      ]),
    },
    {
      Nom: EffetName.TELEPATHE,
      Description:
        'Permet de communiquer brievement avec la cible par la pensée. Chaque succès permet soit de faire durer le liens quelques seconde de plus.',
      IsCummulable: true,
      StabiliteParTypeAptitude: new Map([
        [AptitudeTypeName.EVOCATION, -2],
        [AptitudeTypeName.BENEDICTION, -1],
        [AptitudeTypeName.MALEFICE, -1],
        [AptitudeTypeName.ENVOUTEMENT, -1],
      ]),
    },
    {
      Nom: EffetName.INFORTUNE,
      Description:
        'La cible subit 1 Infortune (Cummulable) sur sont prochain test.',
      IsCummulable: true,
      StabiliteParTypeAptitude: new Map([
        [AptitudeTypeName.EVOCATION, -2],
        [AptitudeTypeName.MALEFICE, -1],
        [AptitudeTypeName.ENVOUTEMENT, -2],
      ]),
    },
    {
      Nom: EffetName.ILLUSION,
      Description:
        "Vous pouvez faire haluciner la cible pour que ses sens lui indique ce que vous voulez (determiné à la creation de l'aptitude). Chaque succès permet de rendre l'illusion plus précise et efficace, et affecte plus de sens.",
      IsCummulable: true,
      StabiliteParTypeAptitude: new Map([
        [AptitudeTypeName.EVOCATION, -2],
        [AptitudeTypeName.MALEFICE, -1],
        [AptitudeTypeName.ENVOUTEMENT, -1],
      ]),
    },
    {
      Nom: EffetName.SOIN_DE_STRESS,
      Description:
        "La cible est soigné d'1 point de stress (Cummulable) par succes net",
      IsCummulable: true,
      StabiliteParTypeAptitude: new Map([
        [AptitudeTypeName.BENEDICTION, -2],
        [AptitudeTypeName.EVOCATION, -3],
        [AptitudeTypeName.NECROMANCIE, -2],
      ]),
    },
    {
      Nom: EffetName.SOIN,
      Description:
        'La cible dépense immediatement 1 point de résilience (Cummulable) pour regagner ses PV. Chaque avantage soigne 1 Point de stress.',
      IsCummulable: true,
      StabiliteParTypeAptitude: new Map([
        [AptitudeTypeName.BENEDICTION, -3],
        [AptitudeTypeName.EVOCATION, -4],
        [AptitudeTypeName.NECROMANCIE, -3],
      ]),
    },
    {
      Nom: EffetName.VAMPIRISME,
      Description:
        "Inflige 1 Dommage (Cummulable) par succes net. Si l'effet est appliqué, le lanceur regagne 1 (Cummulable) point de vitalité",
      IsCummulable: true,
      StabiliteParTypeAptitude: new Map([
        [AptitudeTypeName.ENVOUTEMENT, -10],
        [AptitudeTypeName.EVOCATION, -6],
        [AptitudeTypeName.MALEFICE, -4],
      ]),
    },
    {
      Nom: EffetName.LEVITATION,
      Description:
        'La cible de gabarit 1 (Cummulable) au maximum est en levitation pendant un bref instant.',
      IsCummulable: true,
      StabiliteParTypeAptitude: new Map([
        [AptitudeTypeName.EVOCATION, -6],
        [AptitudeTypeName.BENEDICTION, -6],
      ]),
    },
    {
      Nom: EffetName.MANTRA,
      Description: 'Voir la description',
      IsCummulable: false,
      StabiliteParTypeAptitude: new Map(),
    },
  ];

  private static ExtensionList: Array<ExtensionEffet> = [
    {
      Nom: ExtensionEffetName.ANGLE_MORT,
      Description:
        'Vous devez vous situer en dehors du champs de vision de la cible.',
      IsCummulable: false,
      StabiliteParTypeAptitude: new Map([
        [AptitudeTypeName.ENVOUTEMENT, -2],
        [AptitudeTypeName.EVOCATION, -1],
        [AptitudeTypeName.MALEFICE, -2],
      ]),
    },
    {
      Nom: ExtensionEffetName.CATALYSEUR,
      Description:
        'Vous devez tenir en main un objet qui vous aide à lancer le sort. Le gain en stabilité dépends de la qualité du cataliseur.',
      IsCummulable: false,
      StabiliteParTypeAptitude: new Map([
        [AptitudeTypeName.BENEDICTION, -1],
        [AptitudeTypeName.ENVOUTEMENT, -2],
        [AptitudeTypeName.EVOCATION, -1],
        [AptitudeTypeName.MALEFICE, -2],
        [AptitudeTypeName.NECROMANCIE, -2],
      ]),
    },
    {
      Nom: ExtensionEffetName.DIFFICILE,
      Description: 'Ajouter 1 dé de difficulté sur votre jet.',
      IsCummulable: true,
      StabiliteParTypeAptitude: new Map([
        [AptitudeTypeName.BENEDICTION, -1],
        [AptitudeTypeName.ENVOUTEMENT, -1],
        [AptitudeTypeName.EVOCATION, -1],
        [AptitudeTypeName.MALEFICE, -1],
        [AptitudeTypeName.NECROMANCIE, -1],
      ]),
    },
    {
      Nom: ExtensionEffetName.INCENTATION_RAPIDE,
      Description:
        "Augmentez 3 fois la difficultée. de l'aptitude. l'aptitude est lancée comme une manoeuvre plutot qu'une action",
      IsCummulable: true,
      StabiliteParTypeAptitude: new Map([
        [AptitudeTypeName.BENEDICTION, -1],
        [AptitudeTypeName.ENVOUTEMENT, -1],
        [AptitudeTypeName.EVOCATION, -1],
        [AptitudeTypeName.MALEFICE, -1],
        [AptitudeTypeName.NECROMANCIE, -1],
      ]),
    },
    {
      Nom: ExtensionEffetName.ECHANGE_DE_REGARD,
      Description:
        "L'aptitude ne necessite pas de mains libres pour reussir. Le lanceur doit pouvoir fixer sa cible dans les yeux.",
      IsCummulable: false,
      StabiliteParTypeAptitude: new Map([
        [AptitudeTypeName.BENEDICTION, -4],
        [AptitudeTypeName.ENVOUTEMENT, -2],
        [AptitudeTypeName.EVOCATION, -2],
        [AptitudeTypeName.MALEFICE, -2],
      ]),
    },
    {
      Nom: ExtensionEffetName.ENERGIE_ACTIVATION,
      Description:
        "L'aptitude n'applique ses effets uniquement si la cible est victime déjà d'un effet. Cet effet est déterminé à la conception du sort.",
      IsCummulable: false,
      StabiliteParTypeAptitude: new Map([
        [AptitudeTypeName.BENEDICTION, -2],
        [AptitudeTypeName.ENVOUTEMENT, -2],
        [AptitudeTypeName.EVOCATION, -2],
        [AptitudeTypeName.MALEFICE, -2],
      ]),
    },
    {
      Nom: ExtensionEffetName.INGREDIENT,
      Description:
        "Vous devez consommer un objet possédant une signature energetique. Cet objet est déterminé lors de la conception de l'aptitude. Le gains de stabilité dépend de la puissance de l'objet",
      IsCummulable: true,
      StabiliteParTypeAptitude: new Map([
        [AptitudeTypeName.EVOCATION, -1],
        [AptitudeTypeName.BENEDICTION, -1],
      ]),
    },
    {
      Nom: ExtensionEffetName.CONTRE_COUP,
      Description:
        'Le lanceur subit 1 dommage ignorant la protection pour chaque désavantage généré.',
      IsCummulable: false,
      StabiliteParTypeAptitude: new Map([
        [AptitudeTypeName.EVOCATION, -1],
        [AptitudeTypeName.BENEDICTION, -1],
      ]),
    },
  ];

  private static AptitudeList: Array<Aptitude> = [
    {
      Nom: 'Eclat de feu',
      Description:
        "Vous formez une sphère d'energie et la projetez dans la direction de la cible. A son contact, la cible est brulée et subit des dommages.",
      Image: '',
      Type: this.findCapacityTypeByName(AptitudeTypeName.EVOCATION),
      Vecteur: this.findVecteurByName(VecteurName.PROJECTILE),
      Effets: new Map([[EffetName.CHALEUR, 1]]),
      ExtensionsEffet: new Map(),
    },
    {
      Nom: 'Touché guerisseur',
      Description:
        'Vous posez vos mains sur une cible consentante. La cible dépense immédiatement 1 point de Résiliance pour regagner ses PV perdus.',
      Image: '',
      Type: this.findCapacityTypeByName(AptitudeTypeName.BENEDICTION),
      Vecteur: this.findVecteurByName(VecteurName.CONTACT),
      Effets: new Map([[EffetName.SOIN, 1]]),
      ExtensionsEffet: new Map(),
    },
    {
      Nom: 'Nova mortelle',
      Description:
        "L'energie résiduelle du cadavre visé s'echape violament et renverse les cibles a portée courtes",
      Image: '',
      Type: this.findCapacityTypeByName(AptitudeTypeName.NECROMANCIE),
      Vecteur: this.findVecteurByName(VecteurName.SOURCE_UNIQUEMENT),
      Effets: new Map([[EffetName.FORCE, 2]]),
      ExtensionsEffet: new Map([[ExtensionEffetName.ZONE, 1]]),
    },
    {
      Nom: 'Mantra: le Berserk',
      Description:
        "Vous devenez colerique et inconsient en situation de conflit. Avant de lancer un jet d'attaque, vous pouvez choisir de 'sacrifier' vos dés de défense pour les additionner à vos dés sur votre jet d'attaques. Ces dès ne sont plus utilisable pour vous defendre jusqu'au prochain tour",
      Image: '',
      Type: this.findCapacityTypeByName(AptitudeTypeName.MANTRA),
      Vecteur: this.findVecteurByName(VecteurName.SOURCE_UNIQUEMENT),
      Effets: new Map(),
      ExtensionsEffet: new Map(),
    },
    {
      Nom: "Mantra: l'échophagique",
      Description:
        "Vous êtes constament affamé, et ne sembler être rassasié qu'après avoir voler de l'echo auprès d'une source exterieur. Vous vous comportez comme un drogué vis a vis de cette source d'energie. Chaque jours passé sans consommer de l'echo baisse votre santé max de 1 point. Lorsque vous récupez de l'echo, vous pouvez dépenser un point de résiliance, ou dépenser 3 atout pour regagner un point de résiliance.",
      Image: '',
      Type: this.findCapacityTypeByName(AptitudeTypeName.MANTRA),
      Vecteur: this.findVecteurByName(VecteurName.SOURCE_UNIQUEMENT),
      Effets: new Map(),
      ExtensionsEffet: new Map(),
    },
    {
      Nom: 'Mantra: le distant',
      Description:
        "Vous n'aimez pas le contact avec les autres, et vous montrez trés irrassible quand vous etimez des personnes trop proches de vous. Vous avez 1 point de défense supplémentaire",
      Image: '',
      Type: this.findCapacityTypeByName(AptitudeTypeName.MANTRA),
      Vecteur: this.findVecteurByName(VecteurName.SOURCE_UNIQUEMENT),
      Effets: new Map(),
      ExtensionsEffet: new Map(),
    },
    {
      Nom: 'Morsure de Namtar',
      Description: '',
      Image: '',
      Type: this.findCapacityTypeByName(AptitudeTypeName.EVOCATION),
      Vecteur: this.findVecteurByName(VecteurName.CONTACT),
      Effets: new Map([[EffetName.VAMPIRISME, 1]]),
      ExtensionsEffet: new Map(),
    },
  ];

  static findCapacityTypeByName(name: AptitudeTypeName) {
    return this.Types.find((ct) => ct.Nom === name)!;
  }
  static findVecteurByName(name: VecteurName) {
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
    type: AptitudeType,
    effects: Map<EffetName, number>,
    extention: Map<ExtensionEffetName, number>
  ) {
    if (type.Nom === AptitudeTypeName.MANTRA) {
      return 0;
    }
    let totalCost = 0;
    effects.forEach((rank, effectName) => {
      totalCost +=
        rank *
        (this.findEffetByName(effectName)?.StabiliteParTypeAptitude.get(
          type.Nom
        ) || 999);
    });
    extention.forEach((rank, extension) => {
      totalCost +=
        rank *
        (this.findExtensionByName(extension)?.StabiliteParTypeAptitude.get(
          type.Nom
        ) || 999);
    });
    return totalCost;
  }
}
