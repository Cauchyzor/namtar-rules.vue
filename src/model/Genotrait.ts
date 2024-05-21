import { AttributsName } from "./Attribut";

export type Genotrait = {
  Nom: string;
  Description: string;
  Modificateurs: Map<AttributsName, number>;
};

export class GenotraitService {
  private static GenotraitsList: Array<Genotrait> = [
    {
      Nom: "Ossature légère",
      Description:
        "La créature est constituée d'os ou d'un squelette dans un materiaux léger ou porreux. Son poids est grandement diminué, mais également sa résistance physique.",
      Modificateurs: new Map([[AttributsName.PV, -5]]),
    },
    {
      Nom: "Ossature Lourde",
      Description:
        "Le squelette de la creature dans un materiaux plus dur, ou sa densitée osseuse est beaucoup plus grande que celle d'un humain. Son poids et sa résistance physique augmente.",
      Modificateurs: new Map([[AttributsName.PV, +5]]),
    },
    {
      Nom: "Primitif",
      Description:
        "La creature se comporte comme une bête sauvage. Son inteligence est réduite a 0.",
      Modificateurs: new Map([]),
    },
    {
      Nom: "Systeme Régénératif",
      Description:
        "La creature est capable de se soigner plus facilement. Sa résilience est augmentée",
      Modificateurs: new Map([[AttributsName.DV, +1]]),
    },
    {
      Nom: "Entitée Onirique",
      Description:
        "La créature est née grace au fluide et possède un lien fort entre sa biologie et le fluide. Elle n'a pas besoin de boire ou de manger, entre en états d'hibernation si elle est isolée du fluide. Son seuil de stress est augmenté. Chaque point de stress perdu en dessous de 0 inflige automatiquement 1 blessure. Elle peut utiliser sa caractéristique de Charisme au lieu de l'intelligence pour executer ses aptitudes",
      Modificateurs: new Map([[AttributsName.ÉSOTÉRISME, +5]]),
    },
    {
      Nom: "Entitée divisée",
      Description:
        "La creature est une extention d'une entitée plus grande. Si elle attaque une creature en même temps que d'autre membre de la même espèce, elle peut relancer un dé pour chaque entitées engagées dans le combat.",
      Modificateurs: new Map([]),
    },
    {
      Nom: "Être Mecanique",
      Description:
        "La creature est un conception mecanique doué d'une certaine intelligence. Elle n'a pas besoin de boire et manger mais necessite des 'états de veille' réguliés pour fonctionner au maximum de ses capacitées, ainsi qu'une source d'energie qui doit être rechargée.",
      Modificateurs: new Map([]),
    },
    {
      Nom: "Être bio-mécanique",
      Description:
        "La creature est un hybride qui possède au moins un organe vital mécanique et un organe vital organique. Il est soumis au même contraites que les êtres organique et les êtres mécanique. Il peut bénéficier des génotraits exclusif aux êtres mécaniques et organique.",
      Modificateurs: new Map([]),
    },
    {
      Nom: "Paire de membre supplémentaire",
      Description: "La creature possède une paire de bras supplémentaire.",
      Modificateurs: new Map([]),
    },
    {
      Nom: "Machine primitive",
      Description:
        "La machine n'est pas capables d'utiliser d'aptitude qui necessite le fluide.",
      Modificateurs: new Map([]),
    },
    {
      Nom: "Volant",
      Description:
        "La creature ou la machine est capable de voler pendant de longues durées.",
      Modificateurs: new Map([]),
    },
  ];

  static findAllGenotraits() {
    return GenotraitService.GenotraitsList;
  }
}
