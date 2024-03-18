/* eslint-disable @typescript-eslint/no-non-null-assertion */

import {
  ServiceAptitude,
  AptitudeTypeName,
  EffetName,
  VecteurName,
  ExtensionEffetName,
  Multiplicateur,
  Cible,
} from "src/data/ServiceAptitude";
import { CompetenceName } from "./Competence";

/**
 * Un aptitude est un don, passif, technique, sort, etc.. qu'un personnage peut acquerir.
 * La classe abstraite permet de reegrouper les aptitudes définit par le MJ et celle part les
 * joueurs suivant le systeme de creation d'aptitude.
 */
export abstract class Aptitude {
  Nom: string;
  Description: string;
  Type: AptitudeType;

  constructor(nom: string, description: string, typeName: AptitudeTypeName) {
    this.Nom = nom;
    this.Description = description;
    this.Type = ServiceAptitude.findAptTypeByName(typeName);
  }
}
/**
 * Aptitude disponible avec le niveau de maitrise d'un personnage.
 */
export class AptitudeFixed extends Aptitude {
  MaitrisesRequise: Map<CompetenceName, number>;

  constructor(
    nom: string,
    description: string,
    typeName: AptitudeTypeName,
    maitrise: Map<CompetenceName, number>
  ) {
    super(nom, description, typeName);
    this.MaitrisesRequise = maitrise;
  }
}

/**
 * Aptitude suivant le systeme de creation.
 */
export class AptitudeCreated extends Aptitude {
  Vecteur: Vecteur;
  Effets: Map<EffetName, number>;
  Extensions: Map<ExtensionEffetName, number>;

  constructor(
    nom: string,
    description: string,
    typeName: AptitudeTypeName,
    vecteurName: VecteurName,
    effets: Map<EffetName, number>,
    extentions: Map<ExtensionEffetName, number>
  ) {
    super(nom, description, typeName);
    this.Vecteur = ServiceAptitude.findAptVecteurByName(vecteurName);
    this.Effets = effets;
    this.Extensions = extentions;
  }

  computeStabilityScore() {
    if (this.Type.Nom === AptitudeTypeName.MANTRA) {
      return 0;
    }
    let totalCost = 0;
    this.Effets.forEach((rank, effectName) => {
      totalCost +=
        rank *
        (ServiceAptitude.findEffetByName(
          effectName
        )?.StabiliteParTypeAptitude.get(this.Type.Nom) || 999);
    });
    this.Extensions.forEach((rank, extension) => {
      totalCost +=
        rank *
        (ServiceAptitude.findExtensionByName(
          extension
        )?.StabiliteParTypeAptitude.get(this.Type.Nom) || 999);
    });
    return totalCost;
  }

  //TODO : Revoir le model pour que le coût vienne du type d'aptitude
  printAptitudeCost() {
    const stability = this.computeStabilityScore();
    if (stability > 0) return "Aucun";
    switch (this.Type.Nom) {
      case AptitudeTypeName.EVOCATION:
        return `${Math.abs(stability)} point de stress`;
      case AptitudeTypeName.BENEDICTION:
        return `${Math.trunc(Math.abs(stability) / 2)} avantages`;
      case AptitudeTypeName.MALEFICE:
        return `${Math.trunc(Math.abs(stability) / 2)} menaces`;
      case AptitudeTypeName.NECROMANCIE:
        return `${Math.trunc(Math.abs(stability) / 2)} niveaux de puissance`;
      case AptitudeTypeName.ENVOUTEMENT:
        return `${Math.abs(stability)} avantages`;
      case AptitudeTypeName.CYTOMANCIE:
        return `${Math.trunc(Math.abs(stability))} PV sacrifié`;
      case AptitudeTypeName.TECHNIQUE:
        return stability === 0 ? "stable" : "Inutilisable";
      case AptitudeTypeName.MANTRA:
        return "Aucun";
      case AptitudeTypeName.POSTURE:
        return "Aucun";
      default:
        return "non définit";
    }
  }
}

export type AptitudeType = {
  Nom: AptitudeTypeName;
  Description: string;
  DescriptionDetails: string;
};

abstract class ConstituantAptitude {
  /**
   * Regles concises servant de base pour generer les description. La chaine doit contenir %M% pour inserer un multiplicateur si besoin.
   */
  Regle: string;
  Multiplicateur: Multiplicateur;

  constructor(regle: string, multiplicateur: Multiplicateur) {
    this.Regle = regle;
    this.Multiplicateur = multiplicateur;
  }

  get Description() {
    if (this.Multiplicateur == Multiplicateur.NON_CUMMULABLE) {
      return `${this.Regle}`;
    }
    return `${this.Regle.replace("%M%", this.Multiplicateur.toString())}`;
  }

  get IsCummulable() {
    return this.Multiplicateur !== Multiplicateur.NON_CUMMULABLE;
  }
}

//TODO : Passer sur une classe pour generer la description niveau vecteur. Difficultée adaptable
export class Vecteur extends ConstituantAptitude {
  Nom: VecteurName;
  TypesCompatibilities: AptitudeTypeName[];
  Cible: Cible;

  constructor(
    nom: VecteurName,
    regle: string,
    cible: Cible,
    multiplicateur: Multiplicateur,
    typesCompatibilities: AptitudeTypeName[]
  ) {
    super(regle, multiplicateur);
    this.Nom = nom;
    this.Cible = cible;
    this.TypesCompatibilities = typesCompatibilities;
  }
}

//TODO : Passer sur une classe et ajouter les getter : printEffectsWithRank
//TODO : Passer sur une classe et creer la classe/type difficultée : printEffectsWithRank
export class Effet extends ConstituantAptitude {
  Nom: EffetName;
  StabiliteParTypeAptitude: Map<AptitudeTypeName, number>;
  constructor(
    nom: EffetName,
    regle: string,
    multiplicateur: Multiplicateur,
    stabiliteParTypeAptitude: Map<AptitudeTypeName, number>
  ) {
    super(regle, multiplicateur);
    this.Nom = nom;
    this.StabiliteParTypeAptitude = stabiliteParTypeAptitude;
  }
}

export class ExtensionEffet extends ConstituantAptitude {
  Nom: ExtensionEffetName;
  StabiliteParTypeAptitude: Map<AptitudeTypeName, number>;
  constructor(
    nom: ExtensionEffetName,
    regle: string,
    multiplicateur: Multiplicateur,
    stabiliteParTypeAptitude: Map<AptitudeTypeName, number>
  ) {
    super(regle, multiplicateur);
    this.Nom = nom;
    this.StabiliteParTypeAptitude = stabiliteParTypeAptitude;
  }
}
