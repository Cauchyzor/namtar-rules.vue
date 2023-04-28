<template>
  <q-page padding>
    <h3 class="text-center">Systeme de des</h3>
    <h4>Succes et Echecs</h4>
    <p>
      Les tests sont résolus en opposant les résultats d'un pool de dé
      "positifs" versus un pool de dé "négatifs".
    </p>
    <h4>Dé positif versus Dé négatif</h4>
    <p>Les pools sont constituées de d6</p>
    <p>Pour les dés positifs</p>
    <ul>
      <li>Le résultat 6, 5 ou 4 génère : 1 succès</li>
      <li>Le résultat 3 génère : 1 avantage</li>
      <li>Les autres résultats ne sont pas interprétés</li>
    </ul>
    <p>Pour les dés négatifs</p>
    <ul>
      <li>Le résultat 6, 5 ou 4 génère : 1 échec</li>
      <li>Le résultat 3 génère : 1 désavantage</li>
      <li>Les autres résultats ne sont pas interprétés</li>
    </ul>
    <p>Chaque échec annule un succès. Chaque désavantage annule un avantage.</p>
    <p>
      Le score final, qu&#39;on appelle résultat net, est déterminé par la somme
      des échecs avec les succès et les avantages avec les désavantages. Si le
      test génère au moins 1 succès, le test réussi, sinon il échoue.
    </p>
    <p>
      S'il reste des avantages ou des désavantage, ils peuvent déclencher
      respectivement des effets en faveur ou en défaveur du lanceur.
    </p>

    <p>
      Les avantages et désavantages sont partagés avec tout le groupe. Ce sont
      les joueurs qui décident de comment dépenser leurs avantages, et au MJ de
      déclencher leurs désavantages.
    </p>

    <h3 class="text-center">Test de competence</h3>
    <p>
      Pour chaque test de compétence, le MJ décide da difficulté de la tâche à
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
        <strong>Routinier - DD0 - 0 dés</strong> : Aucune difficulté. Si c'est
        raté, ce n'est vraiment, vraiment pas de chance...
      </li>
      <li>
        <strong>Facile - DD1 - 1 dés</strong> : Une personne sans vraiment de
        talents et mal équipé pourrait se planter plus de la moitié du temps.
      </li>
      <li>
        <strong>Normal - DD2 - 2 dés </strong> : Quelqu'un d'affûté pour le job,
        et avec un peu d'entraînement pourrai avoir quand même quelques
        difficultés.
      </li>
      <li>
        <strong>Complexe - DD3 - 3 dés</strong> : Quelqu'un de compétent ne
        voudra pas s'y risquer sans un bon matériel adéquat...
      </li>
      <li>
        <strong>Difficile - DD4 - 5 dés</strong> : Les meilleurs considèrent ça
        entre eux comme une "prise de risque."
      </li>
      <li>
        <strong>Très Difficile - DD5 - 8 dés</strong> : Il faut être un expert
        talentueux et bien équipe pour pouvoir dire "qu'on peut y arriver."
      </li>
      <li>
        <strong>Exceptionnel - DD6 - 13 dés</strong> : Il faut être un expert
        talentueux et bien équipe pour espérer peut-être réussir.
      </li>
      <li>
        Pour des niveaux de difficulté supérieure : le DD est égal au DD du
        niveau précédant additionné à celui du niveau avant le niveau précédant.
        (Exemple après le DD 13 : 13 + 8 = 21)
      </li>
    </ul>
    <p>
      Pour faire un test de compétence, préparez autant de d6 que la somme de la
      valeur de la caractéristique et celle de votre rang de maîtrise de la
      compétence. Interprétez alors le résultat.
    </p>
    <h3 class="text-center">Opposition</h3>
    <p>
      Les deux créatures qui s'opposent font un test de compétence correspondant
      à l'action qu'ils tentent de réaliser. Ils appliquent tous les bonus et
      malus appropriés, puis comparent leurs résultats entre eux. La créature
      qui a le plus d'avantage peut en tirer profit.
    </p>
    <p>
      Si les résultats des tests sont identiques, la situation n'évolue pas.
    </p>
    <h3 class="text-center">Tests de groupe</h3>
    <p>
      Pour faire un test de compétence de groupe, tous les membres du groupe
      concerné doivent faire un test de compétence. Pour savoir si le test est
      réussi, il faut compenser les échecs du groupe avec les succès du groupe,
      et considérer le score final.
    </p>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style></style>
