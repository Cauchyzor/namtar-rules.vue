<template>
  <q-tab-panel name="DiceSystem">
    <NamTitle>Systeme de des</NamTitle>
    <h4>Succes et Echecs</h4>
    <p>
      Les Tests sont résolut en opposant les résultats d'une pool de dé
      "positive" versus une pool de dé "négative"
    </p>
    <h4>Dés positif versus Dés négatif</h4>
    <p>Les pool sont constitué de D6</p>
    <p>Pour les dés positifs</p>
    <ul>
      <li>le résultat 6, 5 ou 4 génère : 1 succès</li>
      <li>le résultat 3 génère : 1 avantage</li>
      <li>les autres résultats ne sont pas interprétés</li>
    </ul>
    <p>Pour les dés négatif</p>
    <ul>
      <li>le résultat 6, 5 ou 4 génère : 1 échec</li>
      <li>le résultat 3 génère : 1 désavantage</li>
      <li>les autres résultats ne sont pas interprétés</li>
    </ul>
    <p>Chaque échec annule un succès Chaque désavantage annule un avantage</p>
    <p>
      Le score final, qu&#39;on appelle résultat net, est déterminé par la somme
      des échecs avec les succès et les avantages avec les désavantage. Si le
      tests génère au moins 1 succès, le test réussi, sinon il échoue.
    </p>
    <p>
      Si il reste des avantages ou des désavantage, il peuvent déclancher
      respectivemet des effets en faveur ou en défaveur du lanceur
    </p>

    <p>
      <strong>Règle optionnelle</strong> : Les avantages et désavantage sont
      partagé avec tout le groupe. Ce sont les joueurs qui décident de comment
      dépenser leurs avantages, et au MJ de déclancher leurs désavantage.
    </p>

    <NamTitle>Test de competence</NamTitle>
    <p>
      Pour chaque test de compétence, le MJ decide da difficulté de la tâche à
      accomplir, qui est représentée par un
      <strong>degré de difficulté (DD)</strong>. Plus une tâche est difficile,
      plus son DD est élevé.
    </p>
    <h4>Degrés de difficulté (DD)</h4>
    <p>
      Allant de 0 a +l&#39;infini. Chaque cran est plus difficile a passé que le
      précédant.
    </p>
    <ul>
      <li>
        <strong>Routinier - 0 </strong> : Aucune difficultée. Si c&#39;est raté,
        c&#39;est vraiment, vraiment pas de chance..
      </li>
      <li>
        <strong>Facile - 1</strong> : Une personne sans vraiment de talent et
        mal équipé pourrait se planter plus de la moitiée du temps.
      </li>
      <li>
        <strong>Normal - 2 </strong> : Quelqu&#39;un d&#39;affuté pour le job,
        et avec un peu d&#39;entrainement pourrai avoir quand même quelques
        difficultées
      </li>
      <li>
        <strong>Complexe - 3</strong> : Quelqu&#39;un de compétent ne voudra pas
        s&#39;y risquer sans un bon materiel adequat..
      </li>
      <li>
        <strong>Difficile - 5</strong> : Les meilleurs considèrent ça entre eux
        comme une &quot;prise de risque&quot;
      </li>
      <li>
        <strong>Très Difficile - 8</strong> : Il faut être un expert talentueux
        et bien equipé pour pouvoir dire &quot;qu&#39;on peut y arriver&quot;
      </li>
      <li>
        <strong>Exceptionnel - 13</strong> : Il faut être un expert talentueux
        et bien equipé pour ésperer peut-être réussir
      </li>
      <li>
        Pour des niveaux de difficulté superieures : le DD est égal au DD du
        niveau précédant additionné à celui du niveau avant le niveau précédant
        (exemple après le DD 13 -> 13 + 8 = 21)
      </li>
    </ul>
    <p>
      Pour faire un test de compétence, préparez autant de d6 que la somme de la
      valeur de la caractéristique et celle de votre rang de maitrise de la
      competence. Interpretez alors le resultat.
    </p>
    <NamTitle>Opposition</NamTitle>
    <p>
      Les deux créatures qui s&#39;opposent font un test de compétence
      correspondant à l&#39;action qu&#39;ils tentent de réaliser. Ils
      appliquent tous les bonus et malus appropriés, puis comparent leurs
      résultats entre eux. La creature qui a le plus d'avantage peut en tirer
      profit
    </p>
    <p>
      Si les résultats des tests sont identiques, la situation n&#39;évolue pas
    </p>
    <NamTitle>Tests de groupe</NamTitle>
    <p>
      Pour faire un test de compétence de groupe, tous les membres du groupe
      concerné doivent faire un test de compétence. Pour savoir si le test est
      réussi, il faut compenser les échecs du groupe avec les succès du groupe,
      et considérer le score final
    </p>
  </q-tab-panel>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import NamTitle from 'src/components/NamTitle.vue';

export default defineComponent({
  components: {
    NamTitle,
  },
});
</script>

<style></style>
