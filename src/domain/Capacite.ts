export type Capacite = {
  Nom: string;
  Type: CapaciteType;
  Vecteur: Vecteur;
  Effets: Array<Effet>;
};

export type CapaciteType = {
  Description: string;
  Source: string;
};

enum CapaciteTypeName {
  EVOCATION = "Evocation",
  MALEFICE = "Malefice",
  NECROMANCIE = "Necromancie",
  ENVOUTEMENT = "Envoutement",
  BENEDICTION = "Injonction",
}

const CAPACITE_TYPES = Object.freeze({
  EVOCATION: {
    Nom: "Evocation",
    Description: "L'utilisateur puise dans son endurence pour généré de l'energie. 1 point de Stress est converti en 1 point de Stabilité."
  },
  MALEFICE: {
    Nom: "Malefice",
    Description: "L'energie du malefice est nouris par l'infortune de la cible. Chaque menaces de la cible augmente la Stabilité de 1.",
  },
  NECROMANCIE: {
    Nom: "Necromancie",
    Description: "La capacité est générée avec l'energie d'un residuelle d'un cadavre ou d'une source d'energie.",
  },
  ENVOUTEMENT: {
    Nom: "Envoutement",
    Description: "Corrompt les atouts de la cible pour générer ces effets.",
  },
  BENEDICTION: {
    Nom: "Benediction",
    Description: "Converti les atouts du groupe pour generer ses effets.",
  },
});

export type Vecteur = {
  Description: string;
  Difficulte: string;
};

const VECTEURS = Object.freeze({
  CONTACT: {
    Difficulte: "Attaque engagée de Pugilat (Intelligence)",
  },
  SOUFFLE: {
    Difficulte: "Test d'évocation (Vigueur) de difficulté dépendant de la distance couverte",
  },
  PROJECTILE: {
    Difficulte: "Attaque à distance d'évocation (Intelligence)",
  },
  ONDE: {
    Difficulte: "Test d'évocation d'évocation (Intelligence) de difficulté dépendant de la distance couverte",
  },
  EXPLOSION_CADAVRE: {
    Difficulte:
      "Medecine (Intelligence) Difficulté egale a la sommes des niveau des cadavres",
  },
});

export type Effet = {
  Description: string;
  IsCummulable: boolean;
  StabiliteParTypeCapacite: Map<CapaciteTypeName, number>;
};

export const EFFETS = Object.freeze({
  ATOUT: {
    Description:
      "La cible gagne 1 atout (Cummulable) sur sont prochain test.",
    IsCummulable: true,
    StabiliteParTypeCapacite: {
      [CapaciteTypeName.EVOCATION]: -4,
      [CapaciteTypeName.BENEDICTION]: -2,
    },
  },
  CHALEUR: {
    Description:
      "Inflige 1 Dommage (Cummulable) par succes net et par avantages",
    IsCummulable: true,
    StabiliteParTypeCapacite: {
      [CapaciteTypeName.EVOCATION]: -4,
      [CapaciteTypeName.MALEFICE]: -3,
      [CapaciteTypeName.NECROMANCIE]: -1,
    },
  },
  FORCE: {
    Description:
      "Inflige 1 Dommage (Cummulable) par succes net. Les cibles dont la Vigueur est inferieur au nombre d'avantage générés sont renversés",
    IsCummulable: true,
    StabiliteParTypeCapacite: {
      [CapaciteTypeName.EVOCATION]: -3,
      [CapaciteTypeName.NECROMANCIE]: -1,
    },
  },
  MORAL: {
    Description:
      "La cible est soigné d'1 point de stress (Cummulable) par succes net",
    IsCummulable: true,
    StabiliteParTypeCapacite: {
      [CapaciteTypeName.EVOCATION]: -4,
      [CapaciteTypeName.BENEDICTION]: -2,
      [CapaciteTypeName.NECROMANCIE]: -2,
    },
  },
  INFORTUNE: {
    Description:
      "La cible subit 1 Infortune (Cummulable) sur sont prochain test.",
    IsCummulable: true,
    StabiliteParTypeCapacite: {
      [CapaciteTypeName.EVOCATION]: -2,
      [CapaciteTypeName.MALEFICE]: -1,
      [CapaciteTypeName.ENVOUTEMENT]: -2,
    },
  },
  SOIN: {
    Description:
      "La cible dépense immediatement 1 point de résilience (Cummulable) pour regagner ses PV. Chaque avantage soigne 1 Point de stress.",
    IsCummulable: true,
    StabiliteParTypeCapacite: {
      [CapaciteTypeName.EVOCATION]: -4,
      [CapaciteTypeName.BENEDICTION]: -3,
    },
  },
  VAMPIRISME: {
    Description:
      "Inflige 1 Dommage (Cummulable) par succes net. Si l'effet est appliqué, le lanceur regagne 1 (Cummulable) point de vitalité",
    IsCummulable: true,
    StabiliteParTypeCapacite: {
      [CapaciteTypeName.EVOCATION]: -6,
      [CapaciteTypeName.MALEFICE]: -4,
    },
  },
  VOL: {
    Description:
      "La cible de gabarit 1 (Cummulable) au maximum est en levitation pendant un bref instant.",
    IsCummulable: true,
    StabiliteParTypeCapacite: {
      [CapaciteTypeName.EVOCATION]: -6,
      [CapaciteTypeName.BENEDICTION]: -6,
    },
  },
});

const AMELIORATION = Object.freeze({
  CATALYSEUR: {
    Description: "Vous devez tenir en main un objet qui vous aide à lancer le sort. Le gain en stabilité dépends de la qualité du cataliseur.",
    IsCummulable: false,
    StabiliteParTypeCapacite: {
      [CapaciteTypeName.EVOCATION]: -1,
      [CapaciteTypeName.BENEDICTION]: -1,
    }
  }, DIFFICILE: {
    Description: "Subissez 1 infortune sur votre jet.",
    IsCummulable: true,
    StabiliteParTypeCapacite: {
      [CapaciteTypeName.EVOCATION]: -1,
      [CapaciteTypeName.BENEDICTION]: -1,
    }
  },
  ENERGIE_ACTIVATION: {
    Description: "La capacité n'applique ses effets uniquement si la cible est victime déjà d'un effet. Cet effet est déterminé à la conception du sort.",
    IsCummulable: false,
    StabiliteParTypeCapacite: {
      [CapaciteTypeName.EVOCATION]: -1,
      [CapaciteTypeName.BENEDICTION]: -1,
    }
  },
  INGREDIENT: {
    Description: "Vous devez consommer un objet possédant une signature energetique. Cet objet est déterminé lors de la conception de la capacité. Le gains de stabilité dépend de la puissance de l'objet",
    IsCummulable: true,
    StabiliteParTypeCapacite: {
      [CapaciteTypeName.EVOCATION]: -1,
      [CapaciteTypeName.BENEDICTION]: -1,
    }
  },
  CONTRE_COUP: {
    Description: "Le lanceur subit 1 dommage ignorant la protection pour chaque désavantage généré.",
    IsCummulable: false,
    StabiliteParTypeCapacite: {
      [CapaciteTypeName.EVOCATION]: -1,
      [CapaciteTypeName.BENEDICTION]: -1,
    }
  },
  PERSONNEL: {
    Description: "La capacité ne peut être lancé que sur son lanceur.",
    IsCummulable: false,
    StabiliteParTypeCapacite: {
      [CapaciteTypeName.EVOCATION]: -1,
      [CapaciteTypeName.BENEDICTION]: -1,
    },
    VecteurAvailable: ["INJONCTION", "PROJECTILE"]
  }
})
