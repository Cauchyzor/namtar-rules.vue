import { AttributsName } from './Attribut';

export type Genotrait = {
  Nom: string;
  Description: string;
  AttributesModifiers: Map<AttributsName, number>;
};

export class GenotraitService {
  private static GenotraitsList: Array<Genotrait> = [
    {
      Nom: 'Ossature légère',
      Description:
        "La créature est constituée d'os ou d'un squelette dans un materiaux léger ou porreux. Son poids est grandement diminué, mais également sa résistance physique.",
      AttributesModifiers: new Map([[AttributsName.PV, -5]]),
    },
    {
      Nom: 'Ossature Lourde',
      Description:
        "Le squelette de la creature dans un materiaux plus dur, ou sa densitée osseuse est beaucoup plus grande que celle d'un humain. Son poids et sa résistance physique augmente.",
      AttributesModifiers: new Map([[AttributsName.PV, +5]]),
    },
    {
      Nom: 'Primitif',
      Description:
        'La creature se comporte comme une bête sauvage. Son inteligence est réduite a 0.',
      AttributesModifiers: new Map([]),
    },
    {
      Nom: 'Systeme Régénératif',
      Description:
        'La creature est capable de se soigner plus facilement. Sa résilience est augmentée',
      AttributesModifiers: new Map([[AttributsName.RESILIENCE, +1]]),
    },
    {
      Nom: 'Creature du fluide',
      Description:
        "La créature est née grace au fluide et possède un lien fort entre sa boilogie et le fluide. Elle n'a pas besoin de boire ou de manger, entre en états d'hibernation si elle est isolée du fluide. Son seuil de stress est augmenté. Chaque point de stress perdu en dessous de 0 inflige automatiquement 1 bléssure. Elle peut utiliser sa caractristique de Charisme au lieu de l'intelligence pour executer ses aptitudes",
      AttributesModifiers: new Map([[AttributsName.STRESS, +5]]),
    },
    {
      Nom: 'Entitée divisée',
      Description:
        "La creature est une extention d'une entitée plus grande. Si elle attaque une creature en même temps que d'autre membre de la même espèce, elle peut relancer un dé pour chaque entitées engagées dans le combat.",
      AttributesModifiers: new Map([]),
    },
    {
      Nom: 'Mecanique',
      Description:
        "La creature est un conception mecanique doué d'une certaine intelligence. Elle n'a pas besoin de boire et manger mais necessite quand même des 'états de veille' réguliés pour fonctionner au maximum de ses capacitées, ainsi qu'une source d'energie qui doit être rechargée.",
      AttributesModifiers: new Map([]),
    },
  ];
}
