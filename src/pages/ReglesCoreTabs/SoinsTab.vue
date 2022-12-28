<template>
  <q-tab-panel name="Soins">
    <NamTitle>Repos et guerison</NamTitle>
    <h5>Soins</h5>
    <p>
      La restitution des PV perdus n'est possible d'une seul manière : consommer
      des point de résiliance. La résiliance représente la capacité du corps à
      combatre les infections et réparer les tissus. L'utilisation des point de
      résiliance ne peux que ce faire dans certaine situation :
    </p>
    <ul>
      <li>
        Le repos court (1h d'inactivitée) : le personnage peut consommer 1 point
        de résiliance
      </li>
      <li>
        Le repos long (8h de sommeil dans un environnement sécurisé): le
        personnage peut consommer jusqu'à 2 points de résiliances et régénère la
        moitié de son maximum de points de résilience.
      </li>
      <li>
        Utiliser une aptitude : les effets sont décrits par la l'aptitude en
        question
      </li>
    </ul>
    <h5>Premiers soins</h5>
    <p>
      Après chaque rencontre ou situation de stress, si un personnage a subit
      des blesure, il peut faire l'objet d'une intervention pour les premiers
      soins. Cecis requiert un test de medecine (intelligence) ainsi que des
      outils appropriés et d'une quizaine de minutes. La difficultée du test
      augmente en fonction du % de PV perdu : +1DD tout les 20%. Une
      intervention réussie permet aux personnages de gagner autant de PV que de
      reussite, et autant de point de stress que d'avantage.
    </p>
    <p>
      Attention, chaque échecs infligent 1 point de dégat et chaque désavantage
      peut soit rallonger le temps de l'opperation, ou infliger 1 point de
      stress.
    </p>
    <h5>Tomber à 0 point de vie</h5>
    <h4>Perdre conscience</h4>
    <p>
      Si les dégâts que vous subissez vous font tomber à 0, vous êtes
      inconscient. Vous ne pouvez reprendre conscience que si vous regagnez des
      points de vie.
    </p>
    <h4>Sombrer vers la Mort</h4>
    <p>
      A chaque tours passé à 0 PV ou en dessous, si le personnage à subit une
      blessure létale (par défaut), il doit réaliser un jet de sauvegarde contre
      la mort : Valeur de resilience vs DD10. Il perd 1PV par échec ou gagne 1PV
      par réussite
    </p>
    <p>
      Si la cible perd autant de PV en dessous de 0 qu'elle a de PV maximum,
      elle meurt
    </p>
    <h4>Mort instantanée</h4>
    <p>
      Si les dégat subit par la cible font tomber à 0 point de vie et que le
      reliquat des dégâts infligés par l&#39;attaque est supérieur ou égal au
      maximum de points de vie de la cible: elle meurt sur le coup.
    </p>
    <h5>Stabiliser une créature</h5>
    <p>
      Le meilleur moyen de sauver une créature qui se trouve à 0 point de vie
      est de la soigner. S&#39;il n&#39;est pas possible de la soigner, elle
      peut être stabilisée afin de lui éviter de mourir des suites d&#39;un
      échec à son jet de sauvegarde contre la mort.
    </p>
    <p>
      Vous pouvez utiliser une action pour administrer les premiers soins à une
      créature inconsciente et tenter de la stabiliser, mais vous devez pour
      cela réussir un test d&#39;intelligence (Médecine) de DD égale au
      pourcentage de PV en dessous de 0.
    </p>
    <p>
      Une créature stabilisée n&#39;a pas besoin de faire de jet de sauvegarde
      contre la mort, même si elle est à 0 point de vie. Cependant, elle reste
      inconsciente. Si la créature subit de nouveaux dégâts, elle n&#39;est plus
      considérée comme stabilisée et doit recommencer à faire des jets de
      sauvegarde contre la mort. Si elle n&#39;est pas soignée, une créature
      stabilisée regagne 1 point de vie au bout de 1D6 heures.
    </p>
  </q-tab-panel>
</template>

<script lang="ts">
import NamTitle from 'src/components/NamTitle.vue';
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
  components: {
    NamTitle,
  },
});
</script>

<style></style>
