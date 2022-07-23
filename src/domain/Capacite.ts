export type Capacite = {
    Nom: string,
    Type: CapaciteType,
    Vecteur: Vecteur,
    Effets: Array<Effet>,
}
export type CapaciteType = {
    Description: string,
    Source: string,
}

enum CapaciteTypeName {
    EVOCATION = "Evocation",
    MALEFICE = "Malefice",
    NECROMANCIE = "Necromancie",
    ENVOUTEMENT = "Envoutement",
    BENEDICTION = "Injonction",
}

const CAPACITE_TYPES_LIST: Map<CapaciteTypeName, CapaciteType> = new Map([
    [CapaciteTypeName.EVOCATION, {
        Description: "Desc",
        Source: "source"
    }],
    [CapaciteTypeName.MALEFICE, {
        Description: "Desc",
        Source: "source"
    }],
    [CapaciteTypeName.NECROMANCIE, {
        Description: "Desc",
        Source: "source"
    }],
    [CapaciteTypeName.ENVOUTEMENT, {
        Description: "Desc",
        Source: "source"
    }],
    [CapaciteTypeName.BENEDICTION, {
        Description: "Desc",
        Source: "source"
    }],
])


export type Vecteur = {
    Difficulte: String
}

enum TypeVecteur {
    CONTACT = "Contact",
    SOUFFLE = "Souffle",
    PROJECTILE = "Projectile physique",
    ONDE = "Onde",
    EXPLOSION_CADAVRE = "Explosion de cadavre",
    CHANT = "Chant",
    INJONCTION = "Injonction",
    MELODIE = "Mélodie",
    AUGMENTATION = "Augmentation d'arme",
}

const VECTEURS_LIST: Map<TypeVecteur, Vecteur> = new Map([
    [TypeVecteur.CONTACT, {
        Difficulte: "Pugilat (Intelligence) contre Defense"
    }],
    [TypeVecteur.SOUFFLE, {
        Difficulte: "Evocation (Vigueur) contre Defense"
    }],
    [TypeVecteur.PROJECTILE, {
        Difficulte: "Evocation (Intelligence) contre Protection"
    }],
    [TypeVecteur.ONDE, {
        Difficulte: "Evocation (Intelligence) Difficultée 6"
    }],
    [TypeVecteur.EXPLOSION_CADAVRE, {
        Difficulte: "Medecine (Intelligence) Difficulté egale a la sommes des niveau des cadavres",
    }]
])

export type Effet = {
    Description: string
    IsCummulable: boolean,
    StabiliteParTypeCapacite: Map<CapaciteTypeName, number>
}

export const EFFETS_LIST = Object.freeze({
    CHALEUR: {
        Description: "Inflige 1 Dommage (Cummulable) par Succes net et par Avantage",
        IsCummulable: true,
        StabiliteParTypeCapacite: {
            [CapaciteTypeName.EVOCATION]: 4,
            [CapaciteTypeName.MALEFICE]: 3,
            [CapaciteTypeName.NECROMANCIE]: 1,
        }
    },
    FORCE: {
        Description: "Inflige 1 Dommage (Cummulable) par Succes net. Les cibles dont la Vigueur est inferieur au nombre d'Avantage générés sont renversés",
        IsCummulable: true,
        StabiliteParTypeCapacite: {
            [CapaciteTypeName.EVOCATION]: 3,
            [CapaciteTypeName.NECROMANCIE]: 1,
        }
    },
    MORAL: {
        Description: "La cible est soigné d'1 Point de Stress (Cummulable) par Succes net",
        IsCummulable: true,
        StabiliteParTypeCapacite: {
            [CapaciteTypeName.EVOCATION]: 4,
            [CapaciteTypeName.BENEDICTION]: 2,
        }
    },
    SOIN: {
        Description: "La cible dépense immediatement 1 point de Résilience (Cummulable) pour regagner ses PV. Chaque Avantage soigne 1 Point de Stress.",
        IsCummulable: true,
        StabiliteParTypeCapacite: {
            [CapaciteTypeName.EVOCATION]: 4,
            [CapaciteTypeName.BENEDICTION]: 3,
        }
    },
    SOUTIEN: {
        Description: "La cible gagne 1 Avantage (Cummulable) sur sont prochain test.",
        IsCummulable: true,
        StabiliteParTypeCapacite: {
            [CapaciteTypeName.EVOCATION]: 4,
            [CapaciteTypeName.BENEDICTION]: 2,
        }
    },
    VAMPIRISME: {
        Description: "Inflige 1 Dommage (Cummulable) par Succes net. Si l'effet est appliqué, le lanceur regagne 1 (Cummulable) point de vitalité",
        IsCummulable: true,
        StabiliteParTypeCapacite: {
            [CapaciteTypeName.EVOCATION]: 6,
            [CapaciteTypeName.MALEFICE]: 4,
        }
    },
    VOL: {
        Description: "La cible de gabarit 1 (Cummulable) au maximum est en levitation pendant un bref instant.",
        IsCummulable: true,
        StabiliteParTypeCapacite: {
            [CapaciteTypeName.EVOCATION]: 6,
            [CapaciteTypeName.BENEDICTION]: 6,
        }
    }
});