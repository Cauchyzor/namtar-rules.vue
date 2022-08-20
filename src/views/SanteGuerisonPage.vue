<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>{{ $route.params.id }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ $route.params.id }}</ion-title>
        </ion-toolbar>
      </ion-header>
      <NamTitle>Repos et guérison</NamTitle>
      <h2>Soins</h2>
      <p>
        La restitution des PV perdus n'est possible d'une seul manière :
        consommer des point de résiliance. La résiliance représente la capacitée
        du corps à combatre les infections et réparer les tissus. L'utilisation
        des point de résiliance ne peux que ce faire dans certaine situation :
      </p>
      <ul>
        <li>
          Le repos court (1h d'inactivitée) : le personnage peut consommer 1
          point de résiliance
        </li>
        <li>
          Le repos long (8h de sommeil dans un environnement sécurisé): le
          personnage peut consommer 2 point de résiliance et regagne
          l'équivalant de la moitié de ses point de résilience.
        </li>
        <li>Capacité : les effets sont décrits par la capacitée</li>
      </ul>
      <h2>Premiers soins</h2>
      <p>
        Après chaque rencontre ou situation de stress, si un personnage a subit
        des blesure, il peut faire l'objet d'une intervention pour les premiers
        soins. Cecis requiert un test de medecine (intelligence) à l'aide
        d'outils appropriés et d'une quizaine de minutes. La difficultée du test
        augmente en fonction du % de PV perdu : +1DD tout les 10%. Une
        intervention réussie permet aux personnages de gagner autant de PV que
        de reussite, et autant de point de stresse que d'avantage.
      </p>
      <p>
        Attention, chaque échecs infligent 1 point de dégat et chaque menace
        peut soit rallonger le temps de l'opperation, ou infliger 1 point de
        stress.
      </p>
      <h2>Tomber à 0 point de vie</h2>
      <h3>Perdre conscience</h3>
      <p>
        Si les dégâts que vous subissez vous font tomber à 0, vous êtes
        inconscient. Vous ne pouvez reprendre conscience que si vous regagnez
        des points de vie.
      </p>
      <h3>Sombrer vers la Mort</h3>
      <p>
        A chaque tours passé à 0 PV ou en dessous, si le personnage à subit une
        blessure létale (par défaut), il doit réaliser un jet de sauvegarde
        contre la mort : Valeur de resilience vs DD10. Il perd 1PV par échec ou
        gagne 1PV par réussite
      </p>
      <p>
        Si la cible perd autant de PV en dessous de 0 qu'elle a de PV maximum,
        elle meurt
      </p>
      <h3>Mort instantanée</h3>
      <p>
        Si les dégat subit par la cible font tomber à 0 point de vie et que le
        reliquat des dégâts infligés par l&#39;attaque est supérieur ou égal au
        maximum de points de vie de la cible: elle meurt sur le coup.
      </p>
      <h2>Stabiliser une créature</h2>
      <p>
        Le meilleur moyen de sauver une créature qui se trouve à 0 point de vie
        est de la soigner. S&#39;il n&#39;est pas possible de la soigner, elle
        peut être stabilisée afin de lui éviter de mourir des suites d&#39;un
        échec à son jet de sauvegarde contre la mort.
      </p>
      <p>
        Vous pouvez utiliser une action pour administrer les premiers soins à
        une créature inconsciente et tenter de la stabiliser, mais vous devez
        pour cela réussir un test d&#39;intelligence (Médecine) de DD égale au
        pourcentage de PV en dessous de 0.
      </p>
      <p>
        Une créature stabilisée n&#39;a pas besoin de faire de jet de sauvegarde
        contre la mort, même si elle est à 0 point de vie. Cependant, elle reste
        inconsciente. Si la créature subit de nouveaux dégâts, elle n&#39;est
        plus considérée comme stabilisée et doit recommencer à faire des jets de
        sauvegarde contre la mort. Si elle n&#39;est pas soignée, une créature
        stabilisée regagne 1 point de vie au bout de 1D6 heures.
      </p>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";

import NamTitle from "@/components/NamTitle.vue";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    NamTitle,
  },
});
</script>

<style></style>
