import { AttributsName } from "./Attribut";
import { CaracteritiqueName } from "./Caracteristique";
import { CompetenceName } from "./Competence";
import { Genotrait } from "./Genotrait";

export class Creature {
  /**
   * Nom de la creature
   */
  Nom: string;
  /**
   * Liste de Caracteristiques avec leur valeurs
   */
  Caracteristiques: Map<CaracteritiqueName, number>;
  /**
   * Liste des attribut génétiques qui modifieront les attributs
   */
  Genotraits: Map<Genotrait, number>;
  /**
   * Listes des valeurs pour toutes les compétences accessible par la créatures
   */
  Competences: Map<CompetenceName, number>;

  constructor() {
    this.Nom = "Creature inconnue";
    this.Caracteristiques = new Map([
      [CaracteritiqueName.VIGUEUR, 0],
      [CaracteritiqueName.AGILITE, 0],
      [CaracteritiqueName.ADRESSE, 0],
      [CaracteritiqueName.INTELLIGENCE, 0],
      [CaracteritiqueName.CHARISME, 0],
    ]);
    this.Competences = new Map([]);
    this.Genotraits = new Map([]);
  }

  /**
   * Retourne le nombre de PV max de la creature en fonction de sa vigueur et des modificateurs eventuels
   *
   * @returns PVmax
   */
  computePoolPV(): number {
    return (
      (this.Caracteristiques.get(CaracteritiqueName.VIGUEUR) || 0) +
      5 +
      Array.from(this.Genotraits.entries())
        .map(([g, rank]) => (g.Modificateurs.get(AttributsName.PV) || 0) * rank)
        .reduce((a, b) => a + b) // accumulator
    );
  }
  /**
   * Retourne le nombre de point de résilience de la creature en fonction de sa vigueur et des modificateurs eventuels
   *
   * @returns point de Résilience max
   */
  computePoolResilience(): number {
    return (
      (this.Caracteristiques.get(CaracteritiqueName.VIGUEUR) || 0) +
      Array.from(this.Genotraits.entries())
        .map(
          ([g, rank]) =>
            (g.Modificateurs.get(AttributsName.RESILIENCE) || 0) * rank
        )
        .reduce((a, b) => a + b) // accumulator
    );
  }
  /**
   * Retourne le score max de réflexes de la creature en fonction de son agilité et des modificateurs eventuels
   *
   * @returns
   */
  computePoolReflexes(): number {
    return (
      (this.Caracteristiques.get(CaracteritiqueName.AGILITE) || 0) +
      Array.from(this.Genotraits.entries())
        .map(
          ([g, rank]) =>
            (g.Modificateurs.get(AttributsName.REFLEXES) || 0) * rank
        )
        .reduce((a, b) => a + b) // accumulator
    );
  }
  /**
   * Retourne le score max de réflexes de la creature en fonction de son agilité et des modificateurs eventuels
   *
   * @returns
   */
  computePoolStress(): number {
    return (
      (this.Caracteristiques.get(CaracteritiqueName.INTELLIGENCE) || 0) +
      (this.Caracteristiques.get(CaracteritiqueName.CHARISME) || 0) +
      Array.from(this.Genotraits.entries())
        .map(
          ([g, rank]) => (g.Modificateurs.get(AttributsName.STRESS) || 0) * rank
        )
        .reduce((a, b) => a + b) // accumulator
    );
  }
}
