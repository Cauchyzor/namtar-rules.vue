/* eslint-disable @typescript-eslint/no-non-null-assertion */

import {
  ServiceAptitude,
  AptitudeTypeName,
  EffetName,
  VecteurName,
  ExtensionEffetName,
} from "src/data/ServiceAptitude";

export class Aptitude {
  Nom: string;
  Type: AptitudeType;
  Vecteur: Vecteur;
  Effets: Map<EffetName, number>;
  Extensions: Map<ExtensionEffetName, number>;

  constructor(
    nom: string,
    typeName: AptitudeTypeName,
    vecteurName: VecteurName,
    effets: Map<EffetName, number>,
    extentions: Map<ExtensionEffetName, number>
  ) {
    this.Nom = nom;
    this.Type = ServiceAptitude.findAptTypeByName(typeName);
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

  printAptitudeCost() {
    const stability = this.computeStabilityScore();
    if (stability > 0) return "Aucun";
    switch (this.Type.Nom) {
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

  /**
   * Retourne une description complete de l'aptitude a partir du vecteurs des extension et des effets, ainsi que leurs rangs.
   *
   */
  get UsageDescription() {
    const numericRegex = new RegExp("%(\\d)x%");
    const effectsDesc: string[] = [];
    const extensionsDesc: string[] = [];
    this.Effets.forEach((_, effet) => {
      let computedDescription =
        ServiceAptitude.findEffetByName(effet)?.ComputedDesc || "";
      const numericValue = computedDescription.match(numericRegex);
      if (numericValue != null) {
        computedDescription = computedDescription.replace(
          numericRegex,
          numericValue[1]
        );
      }
      effectsDesc.push(computedDescription);
    });
    this.Extensions.forEach((_, extention) => {
      let computedDescription =
        ServiceAptitude.findExtensionByName(extention)?.Description || "";
      const numericValue = computedDescription.match(numericRegex);
      if (numericValue != null) {
        computedDescription = computedDescription.replace(
          numericRegex,
          numericValue[1]
        );
      }
      extensionsDesc.push(computedDescription);
    });
    return `${this.Vecteur.ComputedDesc} ${effectsDesc.join(
      "La cible "
    )} ${extensionsDesc.join(" ")}`;
  }
}

export type AptitudeType = {
  Nom: AptitudeTypeName;
  Description: string;
  DescriptionDetails: string;
};

export type Vecteur = {
  Nom: VecteurName;
  Description: string;
  Difficulte: string;
  ComputedDesc: string;
  TypesCompatibilities: AptitudeTypeName[];
};

export type Effet = {
  Nom: EffetName;
  Description: string;
  ComputedDesc: string;
  IsCummulable: boolean;
  StabiliteParTypeAptitude: Map<AptitudeTypeName, number>;
};

export type ExtensionEffet = {
  Nom: ExtensionEffetName;
  Description: string;
  IsCummulable: boolean;
  StabiliteParTypeAptitude: Map<AptitudeTypeName, number>;
};
