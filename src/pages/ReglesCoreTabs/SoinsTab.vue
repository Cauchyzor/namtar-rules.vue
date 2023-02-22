<template>
  <q-tab-panel name="Soins">
    <NamTitle>Repos et guerison</NamTitle>
    <h3>Soins</h3>
    <h4>Résilience</h4>
    <p>
      La restitution des PV perdus n'est possible que d'une seule manière :
      consommer des points de résilience. La résilience représente la capacité
      du corps à combattre les infections et réparer les tissus.
    </p>
    <strong>Jet de résilience :</strong> consommer un point de résilience et
    lancez un nombre de dés égal a votre vigueur. Chaque succès vous soigne d'un
    point de vie, chaque avantage vous soigne d'un point de stress.
    <p>
      L'utilisation de point de résilience ne peut se faire que dans certaines
      situations :
    </p>
    <ul>
      <li>
        Le repos court (1h d'inactivité) : le personnage peut effectuer un jet
        de résilience.
      </li>
      <li>
        Le repos long (8h de sommeil dans un environnement sécurisé): le
        personnage peut effectuer jusqu'à deux jets de résilience, et regagne la
        moitié de son total de points de résilience.
      </li>
      <li>
        Utiliser une aptitude : les effets sont décrits par l'aptitude en
        question.
      </li>
    </ul>
    <h4>Médecine</h4>
    <p>
      Après chaque rencontre ou situation de stress, si un personnage a subi des
      blessures, il peut faire l'objet d'une intervention pour les premiers
      soins. Il faut alors effectuer test de medecine (intelligence), posséder
      les outils appropriés, et opérer une quinzaine de minutes.
    </p>
    <p>
      La difficulté du test augmente en fonction du % de PV perdu : +1DD tous
      les 20%.
    </p>
    <ul>
      <li>
        Une intervention réussie permet au personnage d'effectuer deux jets de
        résilience et de garder le meilleur des deux résultats. Un seul point de
        résilience est consommé dans le processus.
      </li>
      <li>
        Attention, chaque échecs inflige 1 blessure et chaque désavantage peut
        soit rallonger le temps de l'opération, soit infliger 1 point de stress.
      </li>
    </ul>
    <h3>Tomber à 0 point de vie</h3>
    <h4>Perdre conscience</h4>
    <p>
      Si les dégâts que vous subissez vous font tomber à 0, vous êtes
      inconscient. Vous ne pouvez reprendre conscience que si vous regagnez des
      points de vie.
    </p>
    <h4>Sombrer vers la mort</h4>
    <p>
      À chaque tours passé à 0 PV ou en dessous, si le personnage à subit une
      blessure létale (par défaut), il doit réaliser un jet de sauvegarde contre
      la mort : test de vigueur de DD6. Il subit 1 blessure par échec ou est
      soigné d'une blessure par réussite.
    </p>
    <p>
      Si la cible perd autant de PV en dessous de 0 qu'elle a de PV maximum,
      elle meurt
    </p>
    <h4>Mort instantanée</h4>
    <p>
      Si les blessures subit par la cible la font tomber à 0 point de vie et que
      le reliquat des dégâts infligés par l&#39;attaque est supérieur ou égal au
      maximum de points de vie de la cible: elle meurt sur le coup.
    </p>
    <h3>Stabiliser une créature</h3>
    <p>
      Le meilleur moyen de sauver une créature qui se trouve à 0 point de vie
      est de la soigner. S&#39;il n&#39;est pas possible de la soigner, elle
      peut être stabilisée afin de lui éviter de mourir des suites d&#39;un
      échec à son jet de sauvegarde contre la mort.
    </p>
    <p>
      Vous pouvez utiliser une action pour tenter de stabiliser la cible, mais
      vous devez pour cela réussir un test d&#39;intelligence (médecine) de DD3.
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
