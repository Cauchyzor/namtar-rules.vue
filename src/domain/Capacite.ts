/* eslint-disable @typescript-eslint/no-non-null-assertion */
export type Capacite = {
  Nom: string;
  Description: string;
  Image: string,
  Type: CapaciteType;
  Vecteur: Vecteur;
  Effets: Map<EffetName, number>;
  AmeliorationsEffet: Map<AmeliorationEffetName, number>;
};

export type CapaciteType = {
  Nom: CapaciteTypeName;
  Description: string;
};

enum CapaciteTypeName {
  EVOCATION = "Evocation",
  MALEFICE = "Malefice",
  NECROMANCIE = "Necromancie",
  ENVOUTEMENT = "Envoutement",
  BENEDICTION = "Bénédiction",
  MANTRA = "Mantra",
  INCONNUE = "Inconnue",
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
  FORCE = "Force",
  MORAL = "Moral",
  INFORTUNE = "Infortune",
  SOIN = "Soin",
  VAMPIRISME = "Vampirisme",
  VOL = "Vol",
}

export type AmeliorationEffet = {
  Nom: AmeliorationEffetName;
  Description: string;
  IsCummulable: boolean;
  StabiliteParTypeCapacite: Map<CapaciteTypeName, number>;
};

enum AmeliorationEffetName {
  CATALYSEUR = "Catalyseur",
  CONTRE_COUP = "Contre-coup",
  DIFFICILE = "Difficile",
  ENERGIE_ACTIVATION = "Energie d'activation",
  INGREDIENT = "Ingredient",
  PERSONNEL = "Personnel",
  ZONE = "Zone d'effet",
}
export class CapaciteService {
  private static CapaciteTypes: Array<CapaciteType> = [
    {
      Nom: CapaciteTypeName.EVOCATION,
      Description:
        "L'utilisateur puise dans son endurence pour généré de l'energie. 1 point de Stress est converti en 1 point de Stabilité.",
    },
    {
      Nom: CapaciteTypeName.MALEFICE,
      Description:
        "L'energie du malefice est nouris par l'infortune de la cible. Chaque menaces de la cible augmente la Stabilité de 1.",
    },
    {
      Nom: CapaciteTypeName.NECROMANCIE,
      Description:
        "La capacité est générée avec l'energie d'un residuelle d'un cadavre ou d'une source d'energie.",
    },
    {
      Nom: CapaciteTypeName.ENVOUTEMENT,
      Description: "Corrompt les atouts de la cible pour générer ces effets.",
    },
    {
      Nom: CapaciteTypeName.BENEDICTION,
      Description: "Converti les atouts du groupe pour generer ses effets.",
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
        "Medecine (Intelligence) Difficulté egale a la sommes des niveau des cadavres",
    },
    {
      Nom: VecteurName.SOUFFLE,
      Description:
        "Le lanceur canalyse l'energie dans ses poumons, et applique ces effets dans un cône devant lui sur courte distance",
      Difficulte:
        "Test d'évocation (Vigueur) de difficulté dépendant de la distance couverte",
    },
    {
      Nom: VecteurName.PROJECTILE,
      Description:
        "Le lanceur génère un projectile qui se déplace à grande vitesse jusqu'à l'endoit indiqué, et applique ses effets a l'impact avant de s'estomper.",
      Difficulte: "Attaque à distance d'évocation (Intelligence)",
    },
    {
      Nom: VecteurName.ONDE,
      Description:
        "Le lanceur génère une onde qui applique les effets du sort sur toutes les cibles à porté courte autour de lui.",
      Difficulte:
        "Test d'évocation d'évocation (Intelligence) de difficulté dépendant de la distance couverte",
    },
  ];

  private static EffectsList: Array<Effet> = [
    {
      Nom: EffetName.ATOUT,
      Description:
        "La cible gagne 1 atout (Cummulable) sur sont prochain test.",
      IsCummulable: true,
      StabiliteParTypeCapacite: new Map([
        [CapaciteTypeName.EVOCATION, -4],
        [CapaciteTypeName.BENEDICTION, -2],
      ]),
    },
    {
      Nom: EffetName.CHALEUR,
      Description:
        "Inflige 1 Dommage (Cummulable) par succes net et par avantages",
      IsCummulable: true,
      StabiliteParTypeCapacite: new Map([
        [CapaciteTypeName.EVOCATION, -4],
        [CapaciteTypeName.MALEFICE, -3],
        [CapaciteTypeName.NECROMANCIE, -1],
      ]),
    },
    {
      Nom: EffetName.FORCE,
      Description:
        "Inflige 1 Dommage (Cummulable) par succes net. Les cibles dont la Vigueur est inferieur au nombre d'avantage générés sont renversés",
      IsCummulable: true,
      StabiliteParTypeCapacite: new Map([
        [CapaciteTypeName.EVOCATION, -3],
        [CapaciteTypeName.NECROMANCIE, -1],
      ]),
    },
    {
      Nom: EffetName.MORAL,
      Description:
        "La cible est soigné d'1 point de stress (Cummulable) par succes net",
      IsCummulable: true,
      StabiliteParTypeCapacite: new Map([
        [CapaciteTypeName.EVOCATION, -4],
        [CapaciteTypeName.BENEDICTION, -2],
        [CapaciteTypeName.NECROMANCIE, -2],
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
      Nom: EffetName.SOIN,
      Description:
        "La cible dépense immediatement 1 point de résilience (Cummulable) pour regagner ses PV. Chaque avantage soigne 1 Point de stress.",
      IsCummulable: true,
      StabiliteParTypeCapacite: new Map([
        [CapaciteTypeName.EVOCATION, -4],
        [CapaciteTypeName.BENEDICTION, -3],
      ]),
    },
    {
      Nom: EffetName.VAMPIRISME,
      Description:
        "Inflige 1 Dommage (Cummulable) par succes net. Si l'effet est appliqué, le lanceur regagne 1 (Cummulable) point de vitalité",
      IsCummulable: true,
      StabiliteParTypeCapacite: new Map([
        [CapaciteTypeName.EVOCATION, -6],
        [CapaciteTypeName.MALEFICE, -4],
      ]),
    },
    {
      Nom: EffetName.VOL,
      Description:
        "La cible de gabarit 1 (Cummulable) au maximum est en levitation pendant un bref instant.",
      IsCummulable: true,
      StabiliteParTypeCapacite: new Map([
        [CapaciteTypeName.EVOCATION, -6],
        [CapaciteTypeName.BENEDICTION, -6],
      ]),
    },
  ];

  private static AmeliorationList: Array<AmeliorationEffet> = [
    {
      Nom: AmeliorationEffetName.CATALYSEUR,
      Description:
        "Vous devez tenir en main un objet qui vous aide à lancer le sort. Le gain en stabilité dépends de la qualité du cataliseur.",
      IsCummulable: false,
      StabiliteParTypeCapacite: new Map([
        [CapaciteTypeName.EVOCATION, -1],
        [CapaciteTypeName.BENEDICTION, -1],
      ]),
    },
    {
      Nom: AmeliorationEffetName.DIFFICILE,
      Description: "Subissez 1 infortune sur votre jet.",
      IsCummulable: true,
      StabiliteParTypeCapacite: new Map([
        [CapaciteTypeName.EVOCATION, -1],
        [CapaciteTypeName.BENEDICTION, -1],
      ]),
    },
    {
      Nom: AmeliorationEffetName.ENERGIE_ACTIVATION,
      Description:
        "La capacité n'applique ses effets uniquement si la cible est victime déjà d'un effet. Cet effet est déterminé à la conception du sort.",
      IsCummulable: false,
      StabiliteParTypeCapacite: new Map([
        [CapaciteTypeName.EVOCATION, -1],
        [CapaciteTypeName.BENEDICTION, -1],
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
    {
      Nom: AmeliorationEffetName.PERSONNEL,
      Description: "La capacité ne peut être lancé que sur son lanceur.",
      IsCummulable: false,
      StabiliteParTypeCapacite: new Map([[CapaciteTypeName.BENEDICTION, -1]]),
    },
  ];

  private static CapaciteList: Array<Capacite> = [
    {
      Nom: "Eclat de feu",
      Description:
        "Vous formez une sphère d'energie et la projetez dans la direction de la cible. A son contact, la cible est brulée et subit des dommages.",
      Image: "",
      Type: this.getCapacityTypeByName(CapaciteTypeName.EVOCATION),
      Vecteur: this.getVecteurByName(VecteurName.PROJECTILE),
      Effets: new Map([[EffetName.CHALEUR, 1]]),
      AmeliorationsEffet: new Map(),
    },
    {
      Nom: "Touché guerisseur",
      Description:
        "Vous posez vos mains sur une cible consentante. La cible dépense immédiatement 1 point de Résiliance pour regagner ses PV perdus.",
      Image: "",
      Type: this.getCapacityTypeByName(CapaciteTypeName.BENEDICTION),
      Vecteur: this.getVecteurByName(VecteurName.CONTACT),
      Effets: new Map([[EffetName.SOIN, 1]]),
      AmeliorationsEffet: new Map(),
    },
    {
      Nom: "Nova mortelle",
      Description:
        "L'energie résiduelle du cadavre visé s'echape violament et renverse les cibles a portée courtes",
      Image: "",
      Type: this.getCapacityTypeByName(CapaciteTypeName.NECROMANCIE),
      Vecteur: this.getVecteurByName(VecteurName.EXPLOSION_CADAVRE),
      Effets: new Map([[EffetName.FORCE, 2]]),
      AmeliorationsEffet: new Map([[AmeliorationEffetName.ZONE, 1]]),
    },
  ];

  static getCapacityTypeByName(name: CapaciteTypeName) {
    return this.CapaciteTypes.find((ct) => ct.Nom === name)!;
  }
  static getVecteurByName(name: VecteurName) {
    return this.VecteursList.find((vt) => vt.Nom === name)!;
  }
  static getAllCapacites() {
    return this.CapaciteList;
  }
}
