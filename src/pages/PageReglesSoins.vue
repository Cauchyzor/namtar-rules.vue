<template>
  <q-page padding>
    <h4 class="text-center">Repos et guérison</h4>
    <h4>Soins</h4>
    <h5>Résilience</h5>
    <p>
      La restitution des PV perdus n'est possible que d'une seule manière :
      consommer des points de résilience. La résilience représente la capacité
      du corps à combattre les infections et réparer les tissus.
    </p>
    <strong>Jet de résilience :</strong> consommer un point de résilience et
    lancez un nombre de dés égal a votre vigueur. Chaque succès vous soigne d'un
    point de vie, chaque avantages net vous soigne d'un point de stress.
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
    <h5>Médecine</h5>
    <p>
      Après chaque rencontre ou situation de stress, si un personnage a subi des
      blessures, il peut faire l'objet d'une intervention pour les premiers
      soins. Il faut alors effectuer test de médecine (intelligence), posséder
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
        Attention, chaque échecs inflige 1 blessure et chaque menace net peut
        soit rallonger le temps de l'opération, soit infliger 1 point de stress.
      </li>
    </ul>
    <h4>Tomber à 0 point de vie</h4>
    <h5>Perdre conscience</h5>
    <p>
      Si les dégâts que vous subissez vous font tomber à 0, vous êtes
      inconscient. Vous ne pouvez reprendre conscience que si vous regagnez des
      points de vie.
    </p>
    <h5>Sombrer vers la mort</h5>
    <p>
      À chaque tour passé à 0 PV ou en dessous, si le personnage a subit une
      létale (par défaut), il doit réaliser un jet de sauvegarde la mort : il
      lance un d6. Si le résultat est inférieur à 3, il sombre vers la mort.
      S'il cumule <strong>3 échecs</strong>, il décède. Si à l'inverse, il
      réussit avec un résultat supérieur à 3, il se stabilise peu à peu, et est
      complètement <strong>stabilisé à 3 réussites</strong>. Mais il n'est
      toujours pas conscient.
    </p>
    <p>
      Si la cible perd autant de PV en dessous de 0 qu'elle a de PV maximum,
      elle meurt
    </p>
    <h5>Mort instantanée</h5>
    <p>
      Si les blessures subit par la cible la font tomber à 0 point de vie et que
      le reliquat des dégâts infligés par l&#39;attaque est supérieur ou égal au
      maximum de points de vie de la cible: elle meurt sur le coup.
    </p>
    <h4>Stabiliser une créature</h4>
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
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({});
</script>

<style></style>
