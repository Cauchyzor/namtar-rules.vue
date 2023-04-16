/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { CaracteritiqueName } from './Caracteristique';
import { CompetenceName } from './Competence';

// TODO Effet : Augmentation de la défense ?
// TODO Stepper pour creer une aptitude
// TODO Effet : perte de la réaction
// TODO Extention : consomme une réaction plutot qu'une action ?
// TODO Type d'aptitude : la frappe (attaque au corps a corps améliorée)
// TODO Type d'aptitude : Contre-attaque (Capitalise sur les menaces généré par une attaque enemie)
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
  DEBILITANT = 'Débilitant',
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
        "L'utilisateur subit du stress pour stabiliser et matérialiser son aptitude.",
      DescriptionDetails:
        'Chaque point de stress investi produit 1 point de stabilité.',
    },
    {
      Nom: AptitudeTypeName.MALEFICE,
      Description:
        "L'énergie du maléfice est nourrie par les menaces accumulées par la cible.",
      DescriptionDetails:
        'Chaque menaces subit par la cible génère 2 points de stabilité.',
    },
    {
      Nom: AptitudeTypeName.NECROMANCIE,
      Description:
        "L'aptitude est générée avec l'énergie résiduelle d'un ou plusieurs cadavres ou d'une source d'énergie.",
      DescriptionDetails:
        'Chaque niveau du cadavre génère 2 points de stabilité. Plusieurs cadavres peuvent être utilisés en additionnant leurs niveaux.',
    },
    {
      Nom: AptitudeTypeName.ENVOUTEMENT,
      Description:
        'le lanceur corrompt et consume les atouts de la cible pour générer des effets.',
      DescriptionDetails: 'Chaque atout supprimé génère 1 point de stabilité.',
    },
    {
      Nom: AptitudeTypeName.BENEDICTION,
      Description: 'Consomme les atouts du groupe pour générer des effets.',
      DescriptionDetails: 'Chaque atout supprimé génère 2 points de stabilité.',
    },
    {
      Nom: AptitudeTypeName.MANTRA,
      Description: 'Les effets sont passifs.',
      DescriptionDetails: 'Les mantras sont toujours stables.',
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
      Description: 'Les effets sont appliqués à la cible en visuel.',
      Difficulte: `Test opposé de ${CompetenceName.TROMPERIE} (${CaracteritiqueName.CHARISME}) et ${CompetenceName.PERSPICACITE} (${CaracteritiqueName.CHARISME}) de la cible.`,
    },
    {
      Nom: VecteurName.SOUFFLE,
      Description:
        "Le lanceur canalyse l'energie dans ses poumons, et applique des effets dans un cône devant lui sur une courte distance",
      Difficulte: `Attaque a distance de ${CompetenceName.ENTROPIE_DU_FLUIDE} (${CaracteritiqueName.VIGUEUR}).`,
    },
    {
      Nom: VecteurName.PROJECTILE,
      Description:
        "Le lanceur génère un projectile qui se déplace à grande vitesse jusqu'à l'endroit indiqué, et applique ses effets à l'impact avant de s'estomper.",
      Difficulte: `Attaque à distance de ${CompetenceName.ENTROPIE_DU_FLUIDE} (${CaracteritiqueName.INTELLIGENCE}).`,
    },
    {
      Nom: VecteurName.ONDE,
      Description:
        'Le lanceur génère une onde qui applique les effets du sort sur toutes les cibles à portée courte autour de lui.',
      Difficulte: `Test de ${CompetenceName.ENTROPIE_DU_FLUIDE} (${CaracteritiqueName.INTELLIGENCE}) de DD4 à portée courte. Le DD augmente une fois pour chaque rangs de portée supplémentaires.`,
    },
    {
      Nom: VecteurName.SOURCE_UNIQUEMENT,
      Description:
        "Les effets sont appliqués à la source de l'aptitude (dépends du type d'aptitude.). Aucune difficulté sur les cibles dépourvues de volonté, consentantes ou sur vous-même.",
      Difficulte: `Test opposé de ${CompetenceName.ENTROPIE_DU_FLUIDE} (${CaracteritiqueName.CHARISME}) du lanceur contre ${CompetenceName.PERSPICACITE} (${CaracteritiqueName.CHARISME}).`,
    },
  ];

  private static EffectsList: Array<Effet> = [
    {
      Nom: EffetName.ATOUT,
      Description: 'La cible gagne 1 atout (cumulable) sur son prochain test.',
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
        'Inflige 2 blessures (cumulable) par succès net et par avantage.',
      IsCummulable: true,
      StabiliteParTypeAptitude: new Map([
        [AptitudeTypeName.ENVOUTEMENT, -8],
        [AptitudeTypeName.EVOCATION, -4],
        [AptitudeTypeName.MALEFICE, -3],
        [AptitudeTypeName.NECROMANCIE, -1],
      ]),
    },
    {
      Nom: EffetName.DEBILITANT,
      Description: 'La cible perd sa reaction',
      IsCummulable: false,
      StabiliteParTypeAptitude: new Map([
        [AptitudeTypeName.ENVOUTEMENT, -2],
        [AptitudeTypeName.EVOCATION, -2],
        [AptitudeTypeName.MALEFICE, -2],
        [AptitudeTypeName.NECROMANCIE, -1],
      ]),
    },
    {
      Nom: EffetName.ENTRAVE,
      Description:
        'La cible perd sa capacité de déplacement au premier succès. Elle est neutralisée à partir de 2 succès. Elle est inconsciente à partir de 3 succès.',
      IsCummulable: false,
      StabiliteParTypeAptitude: new Map([
        [AptitudeTypeName.EVOCATION, -3],
        [AptitudeTypeName.MALEFICE, -2],
        [AptitudeTypeName.ENVOUTEMENT, -1],
        [AptitudeTypeName.NECROMANCIE, -1],
      ]),
    },
    {
      Nom: EffetName.FORCE,
      Description:
        'Inflige 1 blessure (cumulable) par succès net. Les cibles dont la Vigueur est inférieure au nombre de succès générés sont renversées.',
      IsCummulable: true,
      StabiliteParTypeAptitude: new Map([
        [AptitudeTypeName.EVOCATION, -3],
        [AptitudeTypeName.NECROMANCIE, -1],
      ]),
    },
    {
      Nom: EffetName.TELEPATHE,
      Description:
        'Permet de communiquer brièvement avec la cible par la pensée. Chaque succès permet soit de faire durer le lien quelques secondes de plus.',
      IsCummulable: false,
      StabiliteParTypeAptitude: new Map([
        [AptitudeTypeName.EVOCATION, -2],
        [AptitudeTypeName.BENEDICTION, -1],
        [AptitudeTypeName.MALEFICE, -1],
        [AptitudeTypeName.ENVOUTEMENT, -1],
      ]),
    },
    {
      Nom: EffetName.INFORTUNE,
      Description: 'La cible subit 1 menace (cumulable) sur son prochain test.',
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
        "La cible est soignée d'1 point de stress (cumulable) par succès net.",
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
        'La cible dépense immédiatement 1 point de résilience (cumulable) pour regagner ses PV. Chaque avantage soigne 1 point de stress.',
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
        "Inflige 1 blessure (cumulable) par succès net. Si l'effet est appliqué, le lanceur regagne 1 (cumulable) point de vitalité.",
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
        'La cible de gabarit 1 (cumulable) au maximum est en lévitation pendant un bref instant.',
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
        'Vous devez vous situer en dehors du champ de vision de la cible.',
      IsCummulable: false,
      StabiliteParTypeAptitude: new Map([
        [AptitudeTypeName.ENVOUTEMENT, 2],
        [AptitudeTypeName.EVOCATION, 1],
        [AptitudeTypeName.MALEFICE, 2],
      ]),
    },
    {
      Nom: ExtensionEffetName.CATALYSEUR,
      Description:
        'Vous devez tenir en main un objet qui vous aide à lancer le sort. Le gain en stabilité dépend de la qualité du catalyseur.',
      IsCummulable: false,
      StabiliteParTypeAptitude: new Map([
        [AptitudeTypeName.BENEDICTION, 1],
        [AptitudeTypeName.ENVOUTEMENT, 2],
        [AptitudeTypeName.EVOCATION, 1],
        [AptitudeTypeName.MALEFICE, 2],
        [AptitudeTypeName.NECROMANCIE, 2],
      ]),
    },
    {
      Nom: ExtensionEffetName.DIFFICILE,
      Description: 'Ajouter 1 dé de difficulté sur votre jet.',
      IsCummulable: true,
      StabiliteParTypeAptitude: new Map([
        [AptitudeTypeName.BENEDICTION, 1],
        [AptitudeTypeName.ENVOUTEMENT, 1],
        [AptitudeTypeName.EVOCATION, 1],
        [AptitudeTypeName.MALEFICE, 1],
        [AptitudeTypeName.NECROMANCIE, 1],
      ]),
    },
    {
      Nom: ExtensionEffetName.INCENTATION_RAPIDE,
      Description:
        "Augmentez 3 fois la difficulté de l'aptitude. L'aptitude peut être lancée pendant un déplacement.",
      IsCummulable: true,
      StabiliteParTypeAptitude: new Map([
        [AptitudeTypeName.BENEDICTION, 1],
        [AptitudeTypeName.ENVOUTEMENT, 1],
        [AptitudeTypeName.EVOCATION, 1],
        [AptitudeTypeName.MALEFICE, 1],
        [AptitudeTypeName.NECROMANCIE, 1],
      ]),
    },
    {
      Nom: ExtensionEffetName.ECHANGE_DE_REGARD,
      Description:
        "L'aptitude ne nécessite pas de mains libres pour réussir. Le lanceur doit pouvoir fixer sa cible dans les yeux.",
      IsCummulable: false,
      StabiliteParTypeAptitude: new Map([
        [AptitudeTypeName.BENEDICTION, 4],
        [AptitudeTypeName.ENVOUTEMENT, 2],
        [AptitudeTypeName.EVOCATION, 2],
        [AptitudeTypeName.MALEFICE, 2],
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
        [AptitudeTypeName.EVOCATION, 2],
        [AptitudeTypeName.MALEFICE, 2],
      ]),
    },
    {
      Nom: ExtensionEffetName.INGREDIENT,
      Description:
        "Vous devez consommer un objet possédant une signature énergétique. Cet objet est déterminé lors de la conception de l'aptitude. Le gain de stabilité dépend de la puissance de l'objet.",
      IsCummulable: true,
      StabiliteParTypeAptitude: new Map([
        [AptitudeTypeName.EVOCATION, 1],
        [AptitudeTypeName.BENEDICTION, 1],
      ]),
    },
    {
      Nom: ExtensionEffetName.CONTRE_COUP,
      Description:
        'Le lanceur subit 1 blessure pour chaque désavantage généré.',
      IsCummulable: true,
      StabiliteParTypeAptitude: new Map([
        [AptitudeTypeName.EVOCATION, 1],
        [AptitudeTypeName.BENEDICTION, 1],
        [AptitudeTypeName.MALEFICE, 1],
        [AptitudeTypeName.NECROMANCIE, 1],
        [AptitudeTypeName.ENVOUTEMENT, 2],
      ]),
    },
  ];

  private static AptitudeList: Array<Aptitude> = [
    {
      Nom: 'Eclat de feu',
      Description:
        "Vous formez une sphère d'énergie et la projetez dans la direction de la cible. À son contact, la cible est brûlée et subit des dommages.",
      Image: '',
      Type: this.findCapacityTypeByName(AptitudeTypeName.EVOCATION),
      Vecteur: this.findVecteurByName(VecteurName.PROJECTILE),
      Effets: new Map([[EffetName.CHALEUR, 1]]),
      ExtensionsEffet: new Map(),
    },
    {
      Nom: 'Touché guerisseur',
      Description:
        'Vous posez vos mains sur une cible consentante. La cible dépense immédiatement 1 point de résilience pour regagner ses PV perdus.',
      Image: '',
      Type: this.findCapacityTypeByName(AptitudeTypeName.BENEDICTION),
      Vecteur: this.findVecteurByName(VecteurName.CONTACT),
      Effets: new Map([[EffetName.SOIN, 1]]),
      ExtensionsEffet: new Map(),
    },
    {
      Nom: 'Nova mortelle',
      Description:
        "L'énergie résiduelle du cadavre visé s'échappe violemment et renverse les cibles à portée courte.",
      Image: '',
      Type: this.findCapacityTypeByName(AptitudeTypeName.NECROMANCIE),
      Vecteur: this.findVecteurByName(VecteurName.SOURCE_UNIQUEMENT),
      Effets: new Map([[EffetName.FORCE, 2]]),
      ExtensionsEffet: new Map([[ExtensionEffetName.ZONE, 1]]),
    },
    {
      Nom: 'Mantra: le Berserk',
      Description:
        "Vous devenez colérique et inconscient en situation de conflit. Avant de lancer un jet d'attaque, vous pouvez choisir de « sacrifier » vos dés de défense pour les additionner à vos dés sur votre jet d'attaques. Ses dés ne sont plus utilisables pour vous défendre jusqu'au prochain tour.",
      Image: '',
      Type: this.findCapacityTypeByName(AptitudeTypeName.MANTRA),
      Vecteur: this.findVecteurByName(VecteurName.SOURCE_UNIQUEMENT),
      Effets: new Map(),
      ExtensionsEffet: new Map(),
    },
    {
      Nom: "Mantra: l'échophagique",
      Description:
        "Vous êtes constamment affamé, et ne sembler être rassasié qu'après-avoir volé du fluide auprès d'une source extérieur. Vous vous comportez comme un drogué vis à vis de cette source d'énergie. Chaque jour passé sans consommer du fluide baisse votre santé max de 1 point. Lorsque vous récurez de l'énergie via le fluide, vous pouvez dépenser un point de résilience, ou dépenser 3 atouts pour regagner un point de résilience.",
      Image: '',
      Type: this.findCapacityTypeByName(AptitudeTypeName.MANTRA),
      Vecteur: this.findVecteurByName(VecteurName.SOURCE_UNIQUEMENT),
      Effets: new Map(),
      ExtensionsEffet: new Map(),
    },
    {
      Nom: 'Mantra: le distant',
      Description:
        "Vous n'aimez pas le contact avec les autres, et vous montrez très irascible quand vous estimez des personnes trop proches de vous. Vous avez 1 point de défense supplémentaire.",
      Image: '',
      Type: this.findCapacityTypeByName(AptitudeTypeName.MANTRA),
      Vecteur: this.findVecteurByName(VecteurName.SOURCE_UNIQUEMENT),
      Effets: new Map(),
      ExtensionsEffet: new Map(),
    },
    {
      Nom: 'Morsure de Namtar',
      Description:
        "Vous drainez l'énergie de la cible touchée pour vous soigner.",
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
    if (stability > 0) return 'Aucun';
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
      case AptitudeTypeName.MANTRA:
        return 'Aucun';
      case AptitudeTypeName.MANTRA:
        return 'Non caclulé';
    }
  }
}
