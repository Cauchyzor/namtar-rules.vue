export type Equipement = {
  Nom: string;
  Encombrement: number;
  Rarete: number;
  Description: string;
  Prix: number;
};

export class EquipementService {
  private static EquipementItems: Array<Equipement> = [
    {
      Nom: "Lampe torche solaire",
      Encombrement: 1,
      Rarete: 1,
      Description: "Permet d'éclairer une large zone autour du porteur",
      Prix: 20,
    },
    {
      Nom: "Menottes",
      Encombrement: 0,
      Rarete: 1,
      Description:
        "La créature doit effectuer un test de vigueur (Athlétisme) de DD5 ou d'agilité (Coordination) de DD4 pour ne plus être entravé",
      Prix: 50,
    },
    {
      Nom: "Medipack",
      Encombrement: 3,
      Rarete: 2,
      Description:
        "Ajoute automatiquement 2 succès aux tests de Médecine. Il faut quelques minutes pour le déployer",
      Prix: 400,
    },
    {
      Nom: "Terminal",
      Encombrement: 1,
      Rarete: 1,
      Description:
        "Ordinateur de poche avec plusieurs connectiques pour se brancher et travailler sur des équipements electroniques et informatiques",
      Prix: 500,
    },
    {
      Nom: "Ration",
      Encombrement: 1,
      Rarete: 1,
      Description: "Suffit pour nourrir une personne pendant 1 jour",
      Prix: 10,
    },
    {
      Nom: "Couverture et tente",
      Encombrement: 3,
      Rarete: 2,
      Description: "Permet de dormir correctement en pleine nature",
      Prix: 300,
    },
    {
      Nom: "Materiel d'escalade",
      Encombrement: 4,
      Rarete: 2,
      Description:
        "Ajoute automatiquement 1 succès aux tests d'Athlétisme quand les situations ou son utilisation est justifié",
      Prix: 50,
    },
    {
      Nom: "Sac à dos",
      Encombrement: 2,
      Rarete: 1,
      Description:
        "Permet de transporter des objets jusqu'a 6 d'encombrement. Si il est équipé, son encombrement est réduit à 0.",
      Prix: 50,
    },
    {
      Nom: "Outils de mécano-electronicien",
      Encombrement: 2,
      Rarete: 3,
      Description:
        "Indispensable pour réparer des véhicules ou des infrastructures",
      Prix: 300,
    },
    {
      Nom: "Outils de chimiste",
      Encombrement: 2,
      Rarete: 3,
      Description:
        "Indispensable pour étudier des materiaux ou préparer des consommables",
      Prix: 300,
    },
  ];

  static getAllEquipementItems() {
    return this.EquipementItems;
  }
}
