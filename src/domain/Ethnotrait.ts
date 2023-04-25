export type Ethnotrait = {
  Nom: string;
  Description: string;
  Coherence: number;
};

export type Race = {
  Nom: string;
  Ethnotraits: Array<Ethnotrait>;
};

export class EthnotraitService {
  private static ETHNOTRAIT: Array<Ethnotrait> = [
    {
      Nom: 'Massif',
      Description:
        "Votre valeur de vigueur minimal est de 3. Vous avez 5 PV supplémentaire et beneficiez d'un atout sur vos empoignades et vos bousculade.",
      Coherence: 2,
    },
    {
      Nom: 'Maladroit',
      Description: 'Vous avez une menace sur tout vos test de coordination.',
      Coherence: -1,
    },
    {
      Nom: 'Simplet',
      Description:
        "Diminuez de 1 votre valeur d'intelligence. Possible uniquement si vous avez plus de 1 en intelligence.",
      Coherence: -2,
    },
    {
      Nom: 'Repoussant',
      Description:
        'Diminuez de 1 votre valeur de charisme. Possible uniquement si vous avez plus de 1 en charisme.',
      Coherence: -2,
    },
    {
      Nom: 'Producteur de biomatériaux',
      Description:
        "Vous pouvez générer à la demande un materiaux liquide organique au prix de vos PV (1l contre 20% de vos PV maximal). Les propriétées du materiaux peuvent être déterminée par d'autre ethnotraits",
      Coherence: 1,
    },
    {
      Nom: 'Inflammable',
      Description:
        'Votre sang et les biomateraux que vous produisez sont inflammable',
      Coherence: 1,
    },
    {
      Nom: 'Organes vocaux primitif',
      Description:
        'Il est difficile pour vous de produire des son necessaire aux language. Vous ne pouvez vous exprimer que dans votre langue naturelle ou subissez une menace sur tout vos test impliquant la parole.',
      Coherence: -1,
    },
  ];

  static getAllEthnotraits() {
    return this.ETHNOTRAIT;
  }
}
