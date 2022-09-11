export class Equipement {
  Nom: string;
  Encombrement: number;
  Rarete: number;
  Description: string;
  Prix: number;

  constructor({
    Nom = "Objet inconnu",
    Encombrement = 1,
    Rarete = 1,
    Description = "Aucune",
    Prix = 10,
  }) {
    this.Nom = Nom;
    this.Encombrement = Encombrement;
    this.Rarete = Rarete;
    this.Description = Description;
    this.Prix = Prix;
  }
}
