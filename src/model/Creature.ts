import { Aptitude } from "./Aptitude";
import { Arme } from "./Armes";
import { ArmureItem } from "./Armures";
import { AttributsName } from "./Attribut";
import { CaracteritiqueName } from "./Caracteristique";
import { CompetenceName } from "./Competence";

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
   * Liste de Caractéristiques avec leur valeurs
   */
  Caracteristiques: Map<CaracteritiqueName, number>;
  /**
   * Listes des valeurs pour toutes les compétences accessible par la créatures
   */
  Competences: Map<CompetenceName, number>;
  /**
   * Listes des valeurs pour toutes les compétences accessible par la créatures
   */
  Attributs: Map<AttributsName, string>;
  /**
   * Listes des valeurs pour toutes les compétences accessible par la créatures
   */
  Aptitudes: Array<Aptitude>;
  /**
   * Armes en mains lors de la rencontre
   */
  Armes: Array<Arme>;
  Armures: Array<ArmureItem>;

  constructor(
    nom = "Creature inconnue",
    niveau = 1,
    caracteristique = new Map([
      [CaracteritiqueName.VIGUEUR, 0],
      [CaracteritiqueName.AGILITE, 0],
      [CaracteritiqueName.ADRESSE, 0],
      [CaracteritiqueName.INTELLIGENCE, 0],
      [CaracteritiqueName.CHARISME, 0],
    ]),
    attributs = new Map([
      [AttributsName.INITIATIVE, "0"],
      [AttributsName.PV, "1+1d4"],
      [AttributsName.RECUPERATION, "0"],
      [AttributsName.REFLEXES, "0"],
      [AttributsName.STRESS, "0"],
    ]),
    competences: Map<CompetenceName, number> = new Map([]),
    aptitudes: Array<Aptitude> = [],
    armes: Array<Arme> = [],
    armures: Array<ArmureItem> = []
  ) {
    this.Nom = nom;
    this.NiveauEffectif = niveau;
    this.Caracteristiques = caracteristique;
    this.Competences = competences;
    this.Attributs = attributs;
    this.Aptitudes = aptitudes;
    this.Armes = armes;
    this.Armures = armures;
  }
}
