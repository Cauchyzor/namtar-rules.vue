/* eslint-disable @typescript-eslint/no-non-null-assertion */
export type Capacite = {
  Nom: string;
  Description: string;
  Image: string;
  Type: CapaciteType;
  Vecteur: Vecteur;
  Effets: Map<EffetName, number>;
  AmeliorationsEffet: Map<AmeliorationEffetName, number>;
};

export type CapaciteType = {
  Nom: CapaciteTypeName;
  Description: string;
  DescriptionDetails: string;
};

enum CapaciteTypeName {
  EVOCATION = "Evocation",
  MALEFICE = "Malefice",
  NECROMANCIE = "Necromancie",
  ENVOUTEMENT = "Envoutement",
  BENEDICTION = "Bénédiction",
  MANTRA = "Mantra",
}

export type Vecteur = {
  Nom: VecteurName;
  Description: string;
  Difficulte: string;
};

enum VecteurName {
  CONTACT = "Contact",
  EXPLOSION_CADAVRE = "Explosion de cadavre",
  SOUFFLE = "Souffle",
  PROJECTILE = "Projectile",
  ONDE = "Onde",
  SOURCE_UNIQUEMENT = "Source uniquement",
}

export type Effet = {
  Nom: string;
  Description: string;
  IsCummulable: boolean;
  StabiliteParTypeCapacite: Map<CapaciteTypeName, number>;
};

enum EffetName {
  ATOUT = "Atout",
  CHALEUR = "Chaleur",
  ENTRAVE = "Entrave",
  FORCE = "Force",
  LEVITATION = "Levitation",
  SOIN_DE_STRESS = "Soin de stress",
  TELEPATHE = "Télépathe",
  INFORTUNE = "Infortune",
  SOIN = "Soin",
  VAMPIRISME = "Vampirisme",
  MANTRA = "Mantra",
}

export type AmeliorationEffet = {
  Nom: AmeliorationEffetName;
  Description: string;
  IsCummulable: boolean;
  StabiliteParTypeCapacite: Map<CapaciteTypeName, number>;
};

enum AmeliorationEffetName {
  ANGLE_MORT = "Angle mort",
  CATALYSEUR = "Catalyseur",
  CONTRE_COUP = "Contre-coup",
  DIFFICILE = "Difficile",
  ECHANGE_DE_REGARD = "Echange de regards",
  ENERGIE_ACTIVATION = "Energie d'activation",
  INCENTATION_RAPIDE = "Incantation rapide",
  INGREDIENT = "Ingredient",
  ZONE = "Zone d'effet",
}

export class CapaciteService {
  //TODO Exporter les capacitées dans des fichiers JSON + gérer la lecture et l'ecriture
  private static Types: Array<CapaciteType> = [
    {
      Nom: CapaciteTypeName.EVOCATION,
      Description:
        "L'utilisateur puise dans son endurance pour généré de l'energie.",
      DescriptionDetails: "Chaque point de stress investi produit 1 point de stabilité."
    },
    {
      Nom: CapaciteTypeName.MALEFICE,
      Description:
        "L'energie du malefice est nouris par l'infortune de la cible.",
        DescriptionDetails: "Chaque menaces subit par la cible genère 2 point de stabilité."
      },
    {
      Nom: CapaciteTypeName.NECROMANCIE,
      Description:
        "La capacité est générée avec l'energie d'un residuelle d'un ou plusieurs cadavre ou d'une source d'energie. 2 points de stabilité par niveau cummulés par les cadavres.",
      DescriptionDetails: "Chaque niveau du cadavre genère 1 point de stabilité. Plusieurs cadavres peuvent être utilisé en additionnant leurs niveaux."
    },
    {
      Nom: CapaciteTypeName.ENVOUTEMENT,
      Description:
        "Corrompt les atouts de la cible pour générer ces effets.",
        DescriptionDetails: "Chaque atout supprimé genère 1 point de stabilité."
      },
    {
      Nom: CapaciteTypeName.BENEDICTION,
      Description:
        "Converti les atouts du groupe pour generer des effets.",
        DescriptionDetails: "Chaque atout supprimé genère 1 point de stabilité."
    },
    {
      Nom: CapaciteTypeName.MANTRA,
      Description: "Les effets sont passif.",
      DescriptionDetails: "Les mantras sont toujours stable."
    },
  ];

  private static VecteursList: Array<Vecteur> = [
    {
      Nom: VecteurName.CONTACT,
      Description: "Les effets sont appliqué a la cible touchée.",
      Difficulte: "Attaque engagée de Pugilat (Intelligence)",
    },
    {
      Nom: VecteurName.EXPLOSION_CADAVRE,
      Description:
        "L'energie residuel du cadavre visé a portée longue est utilisé pour appliquer des effets sur tout les cibles a porté courte du cadavre.",
      Difficulte:
        "Medecine (Intelligence) de difficulté égale à la sommes des niveaux des cadavres",
    },
    {
      Nom: VecteurName.SOUFFLE,
      Description:
        "Le lanceur canalyse l'energie dans ses poumons, et applique ces effets dans un cône devant lui sur courte distance",
      Difficulte:
        "Test de maitrise de fluide (Vigueur) de difficulté dépendant de la distance couverte",
    },
    {
      Nom: VecteurName.PROJECTILE,
      Description:
        "Le lanceur génère un projectile qui se déplace à grande vitesse jusqu'à l'endoit indiqué, et applique ses effets a l'impact avant de s'estomper.",
      Difficulte: "Attaque à distance de maitrise de fluide (Intelligence)",
    },
    {
      Nom: VecteurName.ONDE,
      Description:
        "Le lanceur génère une onde qui applique les effets du sort sur toutes les cibles à porté courte autour de lui.",
      Difficulte:
        "Test de maitrise de fluide (Intelligence) de difficulté dépendant de la distance couverte",
    },
    {
      Nom: VecteurName.SOURCE_UNIQUEMENT,
      Description:
        "Les effets sont appliqués à la source de la capacité (dépends du type de la capacité).",
      Difficulte: "Aucune",
    },
  ];

  private static EffectsList: Array<Effet> = [
    {
      Nom: EffetName.ATOUT,
      Description:
        "La cible gagne 1 atout (Cummulable) sur sont prochain test.",
      IsCummulable: true,
      StabiliteParTypeCapacite: new Map([
        [CapaciteTypeName.BENEDICTION, -2],
        [CapaciteTypeName.EVOCATION, -4],
        [CapaciteTypeName.NECROMANCIE, -2],
      ]),
    },
    {
      Nom: EffetName.CHALEUR,
      Description:
        "Inflige 2 Dommage (Cummulable) par succes net et par avantage",
      IsCummulable: true,
      StabiliteParTypeCapacite: new Map([
        [CapaciteTypeName.ENVOUTEMENT, -8],
        [CapaciteTypeName.EVOCATION, -4],
        [CapaciteTypeName.MALEFICE, -3],
        [CapaciteTypeName.NECROMANCIE, -1],
      ]),
    },
    {
      Nom: EffetName.ENTRAVE,
      Description:
        "La cible perd sa capacité de déplacement si 1 succès. Elle est neutralisée a partir de 2 succès. Elle est complètment paralysé et ne peut pas pensé a partir de 3 succès.",
      IsCummulable: true,
      StabiliteParTypeCapacite: new Map([
        [CapaciteTypeName.EVOCATION, -3],
        [CapaciteTypeName.NECROMANCIE, -1],
      ]),
    },
    {
      Nom: EffetName.FORCE,
      Description:
        "Inflige 1 Dommage (Cummulable) par succes net. Les cibles dont la Vigueur est inferieur au nombre de succès générés sont renversés",
      IsCummulable: true,
      StabiliteParTypeCapacite: new Map([
        [CapaciteTypeName.EVOCATION, -3],
        [CapaciteTypeName.NECROMANCIE, -1],
      ]),
    },
    {
      Nom: EffetName.TELEPATHE,
      Description:
        "Permet de communiquer brievement avec la cible par la pensée. Chaque succès permet soit de faire durer le liens quelques seconde de plus.",
      IsCummulable: true,
      StabiliteParTypeCapacite: new Map([
        [CapaciteTypeName.EVOCATION, -2],
        [CapaciteTypeName.BENEDICTION, -1],
        [CapaciteTypeName.MALEFICE, -1],
        [CapaciteTypeName.ENVOUTEMENT, -1],
      ]),
    },
    {
      Nom: EffetName.INFORTUNE,
      Description:
        "La cible subit 1 Infortune (Cummulable) sur sont prochain test.",
      IsCummulable: true,
      StabiliteParTypeCapacite: new Map([
        [CapaciteTypeName.EVOCATION, -2],
        [CapaciteTypeName.MALEFICE, -1],
        [CapaciteTypeName.ENVOUTEMENT, -2],
      ]),
    },
    {
      Nom: EffetName.SOIN_DE_STRESS,
      Description:
        "La cible est soigné d'1 point de stress (Cummulable) par succes net",
      IsCummulable: true,
      StabiliteParTypeCapacite: new Map([
        [CapaciteTypeName.BENEDICTION, -2],
        [CapaciteTypeName.EVOCATION, -3],
        [CapaciteTypeName.NECROMANCIE, -2],
      ]),
    },
    {
      Nom: EffetName.SOIN,
      Description:
        "La cible dépense immediatement 1 point de résilience (Cummulable) pour regagner ses PV. Chaque avantage soigne 1 Point de stress.",
      IsCummulable: true,
      StabiliteParTypeCapacite: new Map([
        [CapaciteTypeName.BENEDICTION, -3],
        [CapaciteTypeName.EVOCATION, -4],
        [CapaciteTypeName.NECROMANCIE, -3],
      ]),
    },
    {
      Nom: EffetName.VAMPIRISME,
      Description:
        "Inflige 1 Dommage (Cummulable) par succes net. Si l'effet est appliqué, le lanceur regagne 1 (Cummulable) point de vitalité",
      IsCummulable: true,
      StabiliteParTypeCapacite: new Map([
        [CapaciteTypeName.ENVOUTEMENT, -10],
        [CapaciteTypeName.EVOCATION, -6],
        [CapaciteTypeName.MALEFICE, -4],
      ]),
    },
    {
      Nom: EffetName.LEVITATION,
      Description:
        "La cible de gabarit 1 (Cummulable) au maximum est en levitation pendant un bref instant.",
      IsCummulable: true,
      StabiliteParTypeCapacite: new Map([
        [CapaciteTypeName.EVOCATION, -6],
        [CapaciteTypeName.BENEDICTION, -6],
      ]),
    },
    {
      Nom: EffetName.MANTRA,
      Description: "Voir la description",
      IsCummulable: false,
      StabiliteParTypeCapacite: new Map(),
    },
  ];

  private static AmeliorationList: Array<AmeliorationEffet> = [
    {
      Nom: AmeliorationEffetName.ANGLE_MORT,
      Description:
        "Vous devez vous situer en dehors du champs de vision de la cible.",
      IsCummulable: false,
      StabiliteParTypeCapacite: new Map([
        [CapaciteTypeName.ENVOUTEMENT, -2],
        [CapaciteTypeName.EVOCATION, -1],
        [CapaciteTypeName.MALEFICE, -2],
      ]),
    },
    {
      Nom: AmeliorationEffetName.CATALYSEUR,
      Description:
        "Vous devez tenir en main un objet qui vous aide à lancer le sort. Le gain en stabilité dépends de la qualité du cataliseur.",
      IsCummulable: false,
      StabiliteParTypeCapacite: new Map([
        [CapaciteTypeName.BENEDICTION, -1],
        [CapaciteTypeName.ENVOUTEMENT, -2],
        [CapaciteTypeName.EVOCATION, -1],
        [CapaciteTypeName.MALEFICE, -2],
        [CapaciteTypeName.NECROMANCIE, -2],
      ]),
    },
    {
      Nom: AmeliorationEffetName.DIFFICILE,
      Description: "Ajouter 1 dé de difficulté sur votre jet.",
      IsCummulable: true,
      StabiliteParTypeCapacite: new Map([
        [CapaciteTypeName.BENEDICTION, -1],
        [CapaciteTypeName.ENVOUTEMENT, -1],
        [CapaciteTypeName.EVOCATION, -1],
        [CapaciteTypeName.MALEFICE, -1],
        [CapaciteTypeName.NECROMANCIE, -1],
      ]),
    },
    {
      Nom: AmeliorationEffetName.INCENTATION_RAPIDE,
      Description: "Augmentez 3 fois la difficultée. de la capacité. La capacité est lancée comme une manoeuvre plutot qu'une action",
      IsCummulable: true,
      StabiliteParTypeCapacite: new Map([
        [CapaciteTypeName.BENEDICTION, -1],
        [CapaciteTypeName.ENVOUTEMENT, -1],
        [CapaciteTypeName.EVOCATION, -1],
        [CapaciteTypeName.MALEFICE, -1],
        [CapaciteTypeName.NECROMANCIE, -1],
      ]),
    },
    {
      Nom: AmeliorationEffetName.ECHANGE_DE_REGARD,
      Description:
        "La capacité ne necessite pas de mains libres pour reussir. Le lanceur doit pouvoir fixer sa cible dans les yeux.",
      IsCummulable: false,
      StabiliteParTypeCapacite: new Map([
        [CapaciteTypeName.BENEDICTION, -4],
        [CapaciteTypeName.ENVOUTEMENT, -2],
        [CapaciteTypeName.EVOCATION, -2],
        [CapaciteTypeName.MALEFICE, -2],
      ]),
    },
    {
      Nom: AmeliorationEffetName.ENERGIE_ACTIVATION,
      Description:
        "La capacité n'applique ses effets uniquement si la cible est victime déjà d'un effet. Cet effet est déterminé à la conception du sort.",
      IsCummulable: false,
      StabiliteParTypeCapacite: new Map([
        [CapaciteTypeName.BENEDICTION, -2],
        [CapaciteTypeName.ENVOUTEMENT, -2],
        [CapaciteTypeName.EVOCATION, -2],
        [CapaciteTypeName.MALEFICE, -2],
      ]),
    },
    {
      Nom: AmeliorationEffetName.INGREDIENT,
      Description:
        "Vous devez consommer un objet possédant une signature energetique. Cet objet est déterminé lors de la conception de la capacité. Le gains de stabilité dépend de la puissance de l'objet",
      IsCummulable: true,
      StabiliteParTypeCapacite: new Map([
        [CapaciteTypeName.EVOCATION, -1],
        [CapaciteTypeName.BENEDICTION, -1],
      ]),
    },
    {
      Nom: AmeliorationEffetName.CONTRE_COUP,
      Description:
        "Le lanceur subit 1 dommage ignorant la protection pour chaque désavantage généré.",
      IsCummulable: false,
      StabiliteParTypeCapacite: new Map([
        [CapaciteTypeName.EVOCATION, -1],
        [CapaciteTypeName.BENEDICTION, -1],
      ]),
    },
  ];

  private static CapaciteList: Array<Capacite> = [
    {
      Nom: "Eclat de feu",
      Description:
        "Vous formez une sphère d'energie et la projetez dans la direction de la cible. A son contact, la cible est brulée et subit des dommages.",
      Image: "",
      Type: this.findCapacityTypeByName(CapaciteTypeName.EVOCATION),
      Vecteur: this.findVecteurByName(VecteurName.PROJECTILE),
      Effets: new Map([[EffetName.CHALEUR, 1]]),
      AmeliorationsEffet: new Map(),
    },
    {
      Nom: "Touché guerisseur",
      Description:
        "Vous posez vos mains sur une cible consentante. La cible dépense immédiatement 1 point de Résiliance pour regagner ses PV perdus.",
      Image: "",
      Type: this.findCapacityTypeByName(CapaciteTypeName.BENEDICTION),
      Vecteur: this.findVecteurByName(VecteurName.CONTACT),
      Effets: new Map([[EffetName.SOIN, 1]]),
      AmeliorationsEffet: new Map(),
    },
    {
      Nom: "Nova mortelle",
      Description:
        "L'energie résiduelle du cadavre visé s'echape violament et renverse les cibles a portée courtes",
      Image: "",
      Type: this.findCapacityTypeByName(CapaciteTypeName.NECROMANCIE),
      Vecteur: this.findVecteurByName(VecteurName.EXPLOSION_CADAVRE),
      Effets: new Map([[EffetName.FORCE, 2]]),
      AmeliorationsEffet: new Map([[AmeliorationEffetName.ZONE, 1]]),
    },
    {
      Nom: "Mantra: le Berserk",
      Description:
        "Vous devenez colerique et inconsient en situation de conflit. Avant de lancer un jet d'attaque, vous pouvez choisir de 'sacrifier' vos dés de défense pour les additionner à vos dés sur votre jet d'attaques. Ces dès ne sont plus utilisable pour vous defendre jusqu'au prochain tour",
      Image: "",
      Type: this.findCapacityTypeByName(CapaciteTypeName.MANTRA),
      Vecteur: this.findVecteurByName(VecteurName.SOURCE_UNIQUEMENT),
      Effets: new Map(),
      AmeliorationsEffet: new Map(),
    },
    {
      Nom: "Mantra: l'échophagique",
      Description:
        "Vous êtes constament affamé, et ne sembler être rassasié qu'après avoir voler de l'echo auprès d'une source exterieur. Vous vous comportez comme un drogué vis a vis de cette source d'energie. Chaque jours passé sans consommer de l'echo baisse votre santé max de 1 point. Lorsque vous récupez de l'echo, vous pouvez dépenser un point de résiliance, ou dépenser 3 atout pour regagner un point de résiliance.",
      Image: "",
      Type: this.findCapacityTypeByName(CapaciteTypeName.MANTRA),
      Vecteur: this.findVecteurByName(VecteurName.SOURCE_UNIQUEMENT),
      Effets: new Map(),
      AmeliorationsEffet: new Map(),
    },
    {
      Nom: "Mantra: le distant",
      Description:
        "Vous n'aimez pas le contact avec les autres, et vous montrez trés irrassible quand vous etimez des personnes trop proches de vous. Vous avez 1 point de défense supplémentaire",
      Image: "",
      Type: this.findCapacityTypeByName(CapaciteTypeName.MANTRA),
      Vecteur: this.findVecteurByName(VecteurName.SOURCE_UNIQUEMENT),
      Effets: new Map(),
      AmeliorationsEffet: new Map(),
    },
    {
      Nom: "Morsure de Namtar",
      Description: "",
      Image: "",
      Type: this.findCapacityTypeByName(CapaciteTypeName.EVOCATION),
      Vecteur: this.findVecteurByName(VecteurName.CONTACT),
      Effets: new Map([[EffetName.VAMPIRISME, 1]]),
      AmeliorationsEffet: new Map(),
    },
  ];

  static findCapacityTypeByName(name: CapaciteTypeName) {
    return this.Types.find((ct) => ct.Nom === name)!;
  }
  static findVecteurByName(name: VecteurName) {
    return this.VecteursList.find((vt) => vt.Nom === name)!;
  }
  static findEffetByName(name: EffetName) {
    return this.EffectsList.find((e) => e.Nom === name)!;
  }
  static findAmeliorationEffetByName(name: AmeliorationEffetName) {
    return this.AmeliorationList.find((e) => e.Nom === name)!;
  }
  static getAllCapacites() {
    return this.CapaciteList;
  }
  static getAllTypes() {
    return this.Types;
  }
  static getAllEffect() {
    return this.EffectsList;
  }
  static getAllAmelioration() {
    return this.AmeliorationList;
  }
  static getAllVecteur() {
    return this.VecteursList;
  }
  static computeCost(capacity: Capacite) {
    if (capacity.Type.Nom === CapaciteTypeName.MANTRA) {
      return 0;
    }
    let totalCost = 0;
    capacity.Effets.forEach((rank, effectName) => {
      totalCost +=
        rank *
        (this.findEffetByName(effectName)?.StabiliteParTypeCapacite.get(
          capacity.Type.Nom
        ) || 99);
    });
    capacity.AmeliorationsEffet.forEach((rank, ameliorationName) => {
      totalCost +=
        rank *
        (this.findAmeliorationEffetByName(
          ameliorationName
        )?.StabiliteParTypeCapacite.get(capacity.Type.Nom) || 99);
    });
    return totalCost;
  }
}
