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
   * Niveau d'experience de la creature
   */
  NiveauEffectif: number;
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
  /**
   * Listes des valeurs pour toutes les compétences accessible par la créatures
   */
  Aptitudes: Set<string>;

  constructor() {
    this.Nom = "Creature inconnue";
    this.NiveauEffectif = 1;
    this.Caracteristiques = new Map([
      [CaracteritiqueName.VIGUEUR, 0],
      [CaracteritiqueName.AGILITE, 0],
      [CaracteritiqueName.ADRESSE, 0],
      [CaracteritiqueName.INTELLIGENCE, 0],
      [CaracteritiqueName.CHARISME, 0],
    ]);
    this.Competences = new Map([]);
    this.Genotraits = new Map([]);
    this.Aptitudes = new Set([]);
  }

  /**
   * Retourne le nombre de PV max de la creature
   *
   * @returns PVmax
   */
  computePoolPV(): string {
    return `${
      (this.Caracteristiques.get(CaracteritiqueName.VIGUEUR) || 0) +
      4 +
      Array.from(this.Genotraits.entries())
        .map(([g, rank]) => (g.Modificateurs.get(AttributsName.PV) || 0) * rank)
        .reduce((a, b) => a + b, 0) // accumulator
    } + ${this.NiveauEffectif}d4`;
  }
  /**
   * Retourne le nombre de point de résilience
   *
   * @returns point de Résilience max
   */
  computePoolRecuperation(): number {
    return (
      (this.Caracteristiques.get(CaracteritiqueName.VIGUEUR) || 0) +
      Array.from(this.Genotraits.entries())
        .map(
          ([g, rank]) =>
            (g.Modificateurs.get(AttributsName.RECUPERATION) || 0) * rank
        )
        .reduce((a, b) => a + b, 0) // accumulator
    );
  }
  /**
   * Retourne le score max de réflexes de la creature
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
        .reduce((a, b) => a + b, 0) // accumulator
    );
  }
  /**
   * Retourne le score max d'initiative de la creature
   *
   * @returns
   */
  computePoolInitiative(): number {
    return (
      (this.Caracteristiques.get(CaracteritiqueName.AGILITE) || 0) +
      Array.from(this.Genotraits.entries())
        .map(
          ([g, rank]) =>
            (g.Modificateurs.get(AttributsName.INITIATIVE) || 0) * rank
        )
        .reduce((a, b) => a + b, 0) // accumulator
    );
  }

  /**
   * Retourne le maximum du pool de stress de la creature
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
        .reduce((a, b) => a + b, 0) // accumulator
    );
  }
}
