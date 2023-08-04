/* eslint-disable @typescript-eslint/no-non-null-assertion */

import {
  AptitudeTypeName,
  EffetName,
  VecteurName,
  ExtensionEffetName,
} from "src/data/ServiceAptitude";

// TODO Faire le tire en cloche (vecteur?)

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

export type Vecteur = {
  Nom: VecteurName;
  Description: string;
  Difficulte: string;
  TypesCompatibilities: AptitudeTypeName[];
};

export type Effet = {
  Nom: EffetName;
  Description: string;
  IsCummulable: boolean;
  StabiliteParTypeAptitude: Map<AptitudeTypeName, number>;
};

export type ExtensionEffet = {
  Nom: ExtensionEffetName;
  Description: string;
  IsCummulable: boolean;
  StabiliteParTypeAptitude: Map<AptitudeTypeName, number>;
};
