import { Genotrait } from "./Genotrait";

export interface Ethnotrait extends Genotrait {
  CoherenceGénétiques: number;
}

export type Race = {
  Nom: string;
  Ethnotraits: Array<Ethnotrait>;
};

export class EthnotraitService {
  private static ETHNOTRAIT: Array<Ethnotrait> = [
    {
      Nom: "Massif",
      Description:
        "Votre valeur de vigueur minimal est de 3. Vous avez 5 PV supplémentaire et beneficiez d'un avantage sur vos empoignades et vos bousculade.",
      CoherenceGénétiques: 2,
      Modificateurs: new Map([]),
    },
    {
      Nom: "Maladroit",
      Description: "Vous avez une menace sur tout vos test de coordination.",
      CoherenceGénétiques: -1,
      Modificateurs: new Map([]),
    },
    {
      Nom: "Simplet",
      Description:
        "Diminuez de 1 votre valeur d'intelligence. Possible uniquement si vous avez plus de 1 en intelligence.",
      CoherenceGénétiques: -2,
      Modificateurs: new Map([]),
    },
    {
      Nom: "Repoussant",
      Description:
        "Diminuez de 1 votre valeur de charisme. Possible uniquement si vous avez plus de 1 en charisme.",
      CoherenceGénétiques: -2,
      Modificateurs: new Map([]),
    },
    {
      Nom: "Producteur de biomatériaux",
      Description:
        "Vous pouvez générer à la demande un materiaux liquide organique au prix de vos PV (1l contre 20% de vos PV maximal). Les propriétées du materiaux peuvent être déterminée par d'autre ethnotraits",
      CoherenceGénétiques: 1,
      Modificateurs: new Map([]),
    },
    {
      Nom: "Inflammable",
      Description:
        "Votre sang et les biomateraux que vous produisez sont inflammable",
      CoherenceGénétiques: 1,
      Modificateurs: new Map([]),
    },
    {
      Nom: "Organes vocaux primitif",
      Description:
        "Il est difficile pour vous de produire des son necessairFe aux language. Vous ne pouvez vous exprimer que dans votre langue naturelle ou augmenter de 2 le DD des tests qui impliquent la parole comme composante principale pour sa réussite.",
      CoherenceGénétiques: -1,
      Modificateurs: new Map([]),
    },
  ];

  static getAllEthnotraits() {
    return this.ETHNOTRAIT;
  }
}
