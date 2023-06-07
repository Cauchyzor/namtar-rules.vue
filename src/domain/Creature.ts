import { AttributsName } from './Attribut';
import { CaracteritiqueName } from './Caracteristique';
import { CompetenceName } from './Competence';
import { Genotrait } from './Genotrait';

export class CreatureService {
  /**
   * Nom de la creatire
   */
  Nom: string;
  /**
   * Liste de Caracteristiques avec leur valeurs
   */
  Caracteristiques: Map<CaracteritiqueName, number>;
  /**
   * Liste des attribut génétiques qui modifieront les attributs
   */
  Genotraits: Array<Genotrait>;
  /**
   * Listes des valeurs pour toutes les compétences accessible par la créatures
   */
  Competences: Map<CompetenceName, number>;

  constructor(
    nom: string,
    caracteristiques: Map<CaracteritiqueName, number>,
    Genotraits: Array<Genotrait>,
    competences: Map<CompetenceName, number>
  ) {
    (this.Nom = nom), (this.Caracteristiques = caracteristiques);
    this.Competences = competences;
    this.Genotraits = Genotraits || [];
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
      this.Genotraits.map(
        (g) => g.AttributesModifiers.get(AttributsName.PV) || 0
      ).reduce((a, b) => a + b) // accumulator
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
      this.Genotraits.map(
        (g) => g.AttributesModifiers.get(AttributsName.RESILIENCE) || 0
      ).reduce((a, b) => a + b) // accumulator
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
      this.Genotraits.map(
        (g) => g.AttributesModifiers.get(AttributsName.REFLEXES) || 0
      ).reduce((a, b) => a + b) // accumulator
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
      this.Genotraits.map(
        (g) => g.AttributesModifiers.get(AttributsName.STRESS) || 0
      ).reduce((a, b) => a + b) // accumulator
    );
  }
}
