/* eslint-disable @typescript-eslint/no-non-null-assertion */
enum CapaciteTypeName {
  ALTERATION_ARME = "Alteration d'arme",
  BENEDICTION_CONTACT = "Bénédiction au contact",
  CANTIQUE = "Cantique",
  ENVOUTEMENT_CONTACT = "Envoutement au contact",
  EVOCATION_CONTACT = "Evocation au contact",
  EVOCATION_ONDE = "Onde",
  EVOCATION_PROJECTILE = "Projectile materiel",
  EVOCATION_SOUFFLE = "Souffle",
  FRAPPE = "Frappe",
  MALEFICE_CONTACT = "Malefice au contact",
  MANTRA = "Mantra",
  NECROMANCIE = "Necromancie",
  ORDRE = "Ordre",
  PRIERE = "Prière",
}

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

export type Capacite = {
  Nom: string;
  Description: string;
  Image: string;
  Type: CapaciteType;
  Effets: Map<EffetName, number>;
  AmeliorationsEffet: Map<AmeliorationEffetName, number>;
};

export type CapaciteType = {
  Nom: CapaciteTypeName;
  Source: string;
  Description: string;
  Test: string;
};

export type Effet = {
  Nom: string;
  Description: string;
  IsCummulable: boolean;
  StabiliteParTypeCapacite: Map<CapaciteTypeName, number>;
};

export type AmeliorationEffet = {
  Nom: AmeliorationEffetName;
  Description: string;
  IsCummulable: boolean;
  StabiliteParTypeCapacite: Map<CapaciteTypeName, number>;
};

enum AmeliorationEffetName {
  ANGLE_MORT = 'Angle mort',
  CATALYSEUR = "Catalyseur",
  CONTRE_COUP = "Contre-coup",
  DIFFICILE = "Difficile",
  ENERGIE_ACTIVATION = "Energie d'activation",
  INGREDIENT = "Ingredient",
  ZONE = "Zone d'effet",
}

export class CapaciteService {
  //TODO Exporter les capacitées dans des fichiers JSON + gérer la lecture et l'ecriture
  private static Types: Array<CapaciteType> = [
    {
      Nom: CapaciteTypeName.ALTERATION_ARME,
      Source: "1 point de stress est converti en 1 point de stabilité.",
      Description: "Le lanceur altère un object pour lui permettre de transmettre des effets par son contact",
      Test: "Test d'ingenierie (Charisme)",
    },
    {
      Nom: CapaciteTypeName.BENEDICTION_CONTACT,
      Description: "Le lanceur consomme les atouts d'une cible consentante pour générer ces effets.",
      Source: "2 point de stabilité par atout chez la cible.",
      Test: "Test de medecine (Charisme) de DD1"
    },
    {
      Nom: CapaciteTypeName.CANTIQUE,
      Description: "Le lanceur consomme les atouts des cibles consentantes à porté de sa voix pour générer ses effets.",
      Source: "2 point de stabilité par atout chez la cible.",
      Test: "Test de charme (Charisme) de DD égal au nombre de personnes affectées."
    },
    {
      Nom: CapaciteTypeName.ENVOUTEMENT_CONTACT,
      Description: "Le lanceur corrompt les atouts de la cible pour générer ces effets. Ces atouts sont consommés",
      Source: "1 point de stabilité par atout chez la cible.",
      Test: "Jet d'attaque de pugilat (Charisme)."
    },
    {
      Nom: CapaciteTypeName.EVOCATION_CONTACT,
      Source: "1 point de stress est converti en 1 point de stabilité.",
      Description: "Le lanceur invoque les effets a l'aide de son energie propre et les projette sur la cible a son contact.",
      Test: "Jet d'attaque de pugilat (Intelligence)",
    },
    {
      Nom: CapaciteTypeName.EVOCATION_ONDE,
      Source: "1 point de stress est converti en 1 point de stabilité.",
      Description: "Le lanceur génère une onde qui applique les effets du sort sur toutes les cibles adjacentes à lui.",
      Test: "Test de maitrise de fluide (Intelligence) de DD2",
    },
    {
      Nom: CapaciteTypeName.EVOCATION_PROJECTILE,
      Source: "1 point de stress est converti en 1 point de stabilité.",
      Description: "Le lanceur génère un projectile qui se déplace à grande vitesse jusqu'à l'endoit indiqué, et applique ses effets a l'impact avant de s'estomper.",
      Test: "Jet d'attaque à distance de maitrise du fluide (Intelligence)",
    },
    {
      Nom: CapaciteTypeName.EVOCATION_SOUFFLE,
      Source: "1 point de stabilité pour 1 point de stress",
      Description: "Le lanceur expulse les effets materialisés sous la forme d'un souffle en face de lui, qui affecte les cibles à porté courte.",
      Test: "Test de maitrise de fluide (Vigueur) de DD2"
    },
    {
      Nom: CapaciteTypeName.FRAPPE,
      Source: "1 point de stabilité 1 dé de difficulté supplementaire.",
      Description: "Le lanceur altère l'énergie déployé par son attaque pour appliquer des effets supplémentaire.",
      Test: "Jet d'attaque dépendant de l'arme "   
    },
    {
      Nom: CapaciteTypeName.MALEFICE_CONTACT,
      Source: "3 point de stabilitée pour chaque infortune de la cible. Ces infortunes sont consommées",
      Description: "Le lanceur altère l'energie de la cible a son contact pour produir certain effets",
      Test: "Jet d'attaque de pugilat (Charisme)"
    },
    {
      Nom: CapaciteTypeName.MANTRA,
      Source: "Inhérente au personnage",
      Description: "La capacitée applique ces effets de manière passive, ou par le biais d'une action gratuite.",
      Test: "Aucun"
    },
    {
      Nom: CapaciteTypeName.NECROMANCIE,
      Description: "La capacité est générée avec l'energie d'un residuelle d'un ou plusieurs cadavre. Les effets sont appliqués à toutes les creatures adjacentes au cadavre.",
      Source: "La stabilité est égale au niveau du cadavre ou la sommes des niveau des cadavres",
      Test: "Test de medecine (Charisme) de DD égal au niveau du cadavre ou la somme des niveau des cadavres."
    },
  ];

  private static EffectsList: Array<Effet> = [
    {
      Nom: EffetName.ATOUT,
      Description:
        "La cible gagne 1 atout (Cummulable) sur sont prochain test.",
      IsCummulable: true,
      StabiliteParTypeCapacite: new Map([
        [CapaciteTypeName.BENEDICTION_CONTACT, -2],
        [CapaciteTypeName.PRIERE, -2],
        [CapaciteTypeName.EVOCATION_CONTACT, -4],
        [CapaciteTypeName.NECROMANCIE, -2],
      ]),
    },
    {
      Nom: EffetName.CHALEUR,
      Description:
        "Inflige 2 Dommage (Cummulable) par succes net et par avantage",
      IsCummulable: true,
      StabiliteParTypeCapacite: new Map([
        [CapaciteTypeName.ENVOUTEMENT_CONTACT, -8],
        [CapaciteTypeName.EVOCATION_CONTACT, -4],
        [CapaciteTypeName.MALEFICE_CONTACT, -3],
        [CapaciteTypeName.NECROMANCIE, -1],
      ]),
    },
    {
      Nom: EffetName.ENTRAVE,
      Description:
        "La cible perd sa capacité de déplacement si 1 succès. Elle est neutralisée a partir de 2 succès. Elle est complètment paralysé et ne peut pas pensé a partir de 3 succès.",
      IsCummulable: true,
      StabiliteParTypeCapacite: new Map([
        [CapaciteTypeName.EVOCATION_CONTACT, -3],
        [CapaciteTypeName.NECROMANCIE, -1],
      ]),
    },
    {
      Nom: EffetName.FORCE,
      Description:
        "Inflige 1 Dommage (Cummulable) par succes net. Les cibles dont la Vigueur est inferieur au nombre de succès générés sont renversés",
      IsCummulable: true,
      StabiliteParTypeCapacite: new Map([
        [CapaciteTypeName.EVOCATION_CONTACT, -3],
        [CapaciteTypeName.NECROMANCIE, -1],
      ]),
    },
    {
      Nom: EffetName.TELEPATHE,
      Description:
        "Permet de communiquer brievement avec la cible par la pensée. Chaque succès permet soit de faire durer le liens quelques seconde de plus.",
      IsCummulable: true,
      StabiliteParTypeCapacite: new Map([
        [CapaciteTypeName.EVOCATION_CONTACT, -2],
        [CapaciteTypeName.BENEDICTION_CONTACT, -1],
        [CapaciteTypeName.MALEFICE_CONTACT, -1],
        [CapaciteTypeName.ENVOUTEMENT_CONTACT, -1],
      ]),
    },
    {
      Nom: EffetName.INFORTUNE,
      Description:
        "La cible subit 1 Infortune (Cummulable) sur sont prochain test.",
      IsCummulable: true,
      StabiliteParTypeCapacite: new Map([
        [CapaciteTypeName.EVOCATION_CONTACT, -2],
        [CapaciteTypeName.MALEFICE_CONTACT, -1],
        [CapaciteTypeName.ENVOUTEMENT_CONTACT, -2],
      ]),
    },
    {
      Nom: EffetName.SOIN_DE_STRESS,
      Description:
        "La cible est soigné d'1 point de stress (Cummulable) par succes net",
      IsCummulable: true,
      StabiliteParTypeCapacite: new Map([
        [CapaciteTypeName.BENEDICTION_CONTACT, -2],
        [CapaciteTypeName.EVOCATION_CONTACT, -3],
        [CapaciteTypeName.NECROMANCIE, -2],
      ]),
    },
    {
      Nom: EffetName.SOIN,
      Description:
        "La cible dépense immediatement 1 point de résilience (Cummulable) pour regagner ses PV. Chaque avantage soigne 1 Point de stress.",
      IsCummulable: true,
      StabiliteParTypeCapacite: new Map([
        [CapaciteTypeName.BENEDICTION_CONTACT, -3],
        [CapaciteTypeName.EVOCATION_CONTACT, -4],
        [CapaciteTypeName.NECROMANCIE, -3],
      ]),
    },
    {
      Nom: EffetName.VAMPIRISME,
      Description:
        "Inflige 1 Dommage (Cummulable) par succes net. Si l'effet est appliqué, le lanceur regagne 1 (Cummulable) point de vitalité",
      IsCummulable: true,
      StabiliteParTypeCapacite: new Map([
        [CapaciteTypeName.ENVOUTEMENT_CONTACT, -10],
        [CapaciteTypeName.EVOCATION_CONTACT, -6],
        [CapaciteTypeName.MALEFICE_CONTACT, -4],
      ]),
    },
    {
      Nom: EffetName.LEVITATION,
      Description:
        "La cible de gabarit 1 (Cummulable) au maximum est en levitation pendant un bref instant.",
      IsCummulable: true,
      StabiliteParTypeCapacite: new Map([
        [CapaciteTypeName.EVOCATION_CONTACT, -6],
        [CapaciteTypeName.BENEDICTION_CONTACT, -6],
      ]),
    },
    {
      Nom: EffetName.MANTRA,
      Description:
        "Voir la description",
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
        [CapaciteTypeName.ENVOUTEMENT_CONTACT, -2],
        [CapaciteTypeName.EVOCATION_CONTACT, -1],
        [CapaciteTypeName.MALEFICE_CONTACT, -2],
      ]),
    },
    {
      Nom: AmeliorationEffetName.CATALYSEUR,
      Description:
        "Vous devez tenir en main un objet qui vous aide à lancer le sort. Le gain en stabilité dépends de la qualité du cataliseur.",
      IsCummulable: false,
      StabiliteParTypeCapacite: new Map([
        [CapaciteTypeName.BENEDICTION_CONTACT, -1],
        [CapaciteTypeName.ENVOUTEMENT_CONTACT, -2],
        [CapaciteTypeName.EVOCATION_CONTACT, -1],
        [CapaciteTypeName.MALEFICE_CONTACT, -2],
        [CapaciteTypeName.NECROMANCIE, -2],
      ]),
    },
    {
      Nom: AmeliorationEffetName.DIFFICILE,
      Description: "Ajouter 1 dé de difficulté sur votre jet.",
      IsCummulable: true,
      StabiliteParTypeCapacite: new Map([
        [CapaciteTypeName.BENEDICTION_CONTACT, -1],
        [CapaciteTypeName.ENVOUTEMENT_CONTACT, -1],
        [CapaciteTypeName.EVOCATION_CONTACT, -1],
        [CapaciteTypeName.MALEFICE_CONTACT, -1],
        [CapaciteTypeName.NECROMANCIE, -1],
      ]),
    },
    {
      Nom: AmeliorationEffetName.ENERGIE_ACTIVATION,
      Description:
        "La capacité n'applique ses effets uniquement si la cible est victime déjà d'un effet. Cet effet est déterminé à la conception du sort.",
      IsCummulable: false,
      StabiliteParTypeCapacite: new Map([
        [CapaciteTypeName.BENEDICTION_CONTACT, -2],
        [CapaciteTypeName.ENVOUTEMENT_CONTACT, -2],
        [CapaciteTypeName.EVOCATION_CONTACT, -2],
        [CapaciteTypeName.MALEFICE_CONTACT, -2],
      ]),
    },
    {
      Nom: AmeliorationEffetName.INGREDIENT,
      Description:
        "Vous devez consommer un objet possédant une signature energetique. Cet objet est déterminé lors de la conception de la capacité. Le gains de stabilité dépend de la puissance de l'objet",
      IsCummulable: true,
      StabiliteParTypeCapacite: new Map([
        [CapaciteTypeName.EVOCATION_CONTACT, -1],
        [CapaciteTypeName.BENEDICTION_CONTACT, -1],
      ]),
    },
    {
      Nom: AmeliorationEffetName.CONTRE_COUP,
      Description:
        "Le lanceur subit 1 dommage ignorant la protection pour chaque désavantage généré.",
      IsCummulable: false,
      StabiliteParTypeCapacite: new Map([
        [CapaciteTypeName.EVOCATION_CONTACT, -1],
        [CapaciteTypeName.BENEDICTION_CONTACT, -1],
      ]),
    },
  ];

  private static CapaciteList: Array<Capacite> = [
    {
      Nom: "Eclat de feu",
      Description:
        "Vous formez une sphère d'energie et la projetez dans la direction de la cible. A son contact, la cible est brulée et subit des dommages.",
      Image: "",
      Type: this.findCapacityTypeByName(CapaciteTypeName.EVOCATION_CONTACT),
      Effets: new Map([[EffetName.CHALEUR, 1]]),
      AmeliorationsEffet: new Map(),
    },
    {
      Nom: "Touché guerisseur",
      Description:
        "Vous posez vos mains sur une cible consentante. La cible dépense immédiatement 1 point de Résiliance pour regagner ses PV perdus.",
      Image: "",
      Type: this.findCapacityTypeByName(CapaciteTypeName.BENEDICTION_CONTACT),
      Effets: new Map([[EffetName.SOIN, 1]]),
      AmeliorationsEffet: new Map(),
    },
    {
      Nom: "Nova mortelle",
      Description:
        "L'energie résiduelle du cadavre visé s'echape violament et renverse les cibles a portée courtes",
      Image: "",
      Type: this.findCapacityTypeByName(CapaciteTypeName.NECROMANCIE),
      Effets: new Map([[EffetName.FORCE, 2]]),
      AmeliorationsEffet: new Map([[AmeliorationEffetName.ZONE, 1]]),
    },
    {
      Nom: "Mantra: le Berserk",
      Description:
        "Vous devenez colerique et inconsient en situation de conflit. Avant de lancer un jet d'attaque, vous pouvez choisir de 'sacrifier' vos dés de défense pour les additionner à vos dés sur votre jet d'attaques. Ces dès ne sont plus utilisable pour vous defendre jusqu'au prochain tour",
      Image: "",
      Type: this.findCapacityTypeByName(CapaciteTypeName.MANTRA),
      Effets: new Map(),
      AmeliorationsEffet: new Map(),
    },
    {
      Nom: "Mantra: l'échophagique",
      Description:
        "Vous êtes constament affamé, et ne sembler être rassasié qu'après avoir voler de l'echo auprès d'une source exterieur. Vous vous comportez comme un drogué vis a vis de cette source d'energie. Chaque jours passé sans consommer de l'echo baisse votre santé max de 1 point. Lorsque vous récupez de l'echo, vous pouvez dépenser un point de résiliance, ou dépenser 3 atout pour regagner un point de résiliance.",
      Image: "",
      Type: this.findCapacityTypeByName(CapaciteTypeName.MANTRA),
      Effets: new Map(),
      AmeliorationsEffet: new Map(),
    },
    {
      Nom: "Mantra: le distant",
      Description:
        "Vous n'aimez pas le contact avec les autres, et vous montrez trés irrassible quand vous etimez des personnes trop proches de vous. Vous avez 1 point de défense supplémentaire",
      Image: "",
      Type: this.findCapacityTypeByName(CapaciteTypeName.MANTRA),
      Effets: new Map(),
      AmeliorationsEffet: new Map(),
    },
    {
      Nom: "Morsure de Namtar",
      Description:
        "",
      Image: "",
      Type: this.findCapacityTypeByName(CapaciteTypeName.EVOCATION_CONTACT),
      Effets: new Map([[EffetName.VAMPIRISME, 1]]),
      AmeliorationsEffet: new Map(),
    },

  ];

  static findCapacityTypeByName(name: CapaciteTypeName) {
    return this.Types.find((ct) => ct.Nom === name)!;
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
    return this.Types
  }
  static getAllEffect() {
    return this.EffectsList
  }
  static getAllAmelioration() {
    return this.AmeliorationList
  }
  static computeCost(capacity: Capacite) {
    if (capacity.Type.Nom === CapaciteTypeName.MANTRA) {
      return 0
    }
    let totalCost = 0
    capacity.Effets.forEach((rank, effectName) => {
      totalCost += rank * (this.findEffetByName(effectName)?.StabiliteParTypeCapacite.get(capacity.Type.Nom) || 99)
    })
    capacity.AmeliorationsEffet.forEach((rank, ameliorationName) => {
      totalCost += rank * (this.findAmeliorationEffetByName(ameliorationName)?.StabiliteParTypeCapacite.get(capacity.Type.Nom) || 99)
    })
    return totalCost
  }
}
