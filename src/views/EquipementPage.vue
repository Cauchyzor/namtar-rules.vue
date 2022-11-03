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

    <ion-content class="ion-padding">
      <NamTitle>Equipement et Marché</NamTitle>
      <!-- TODO Faire des onglets -->
      <!-- TODO Mettre les informations de lore dans des modales a la demandes -->
      <h1>Équipement</h1>
      <h2>Encombrement</h2>
      <p>
        Chaque objet transporté part les personnages représente une place dans
        son inventaire par le biais de l&#39;encombrement. Les petits objets ont
        une valeurs de 0 ( ce qui ne signifie pas pour autant que l&#39;ont peut
        en prendre autant que voulut, c&#39;est au MJ de doser ).
      </p>
      <h2>Quotidien</h2>

      <EquipementCard
        v-for="equipementItem in EquipementItemsList"
        :key="equipementItem.Nom"
        :EquipementItem="equipementItem"
      ></EquipementCard>
      <h2>Armes</h2>
      <p>
        La technologie n&#39;a souvent pas suivi une progression
        &quot;naturelle&quot;. C&#39;est dû au fait que de nombreuses
        civilisations avec une très forte avance technologique n&#39;hésitaient
        pas à explorer et à interférer avec les peuples indigènes. Par ce fait,
        de nombreuses civilisations ont par exemple découvert les armes à
        énergie avant d&#39;avoir fait leur révolution industrielle. En fonction
        des ressources naturelles à leurs dispositions, de leurs capacités en
        &quot;retro-engenering&quot; et des supports qu&#39;ils peuvent trouver
        envers les grandes nations,
        <strong
          >les civilisations peuvent avoir eu une production et des paradigmes
          de conception très différents</strong
        >.
      </p>
      <p>
        Quoiqu&#39;il en soit, toutes
        <strong
          >les armes de haute technologie sont difficiles d&#39;accès</strong
        >. Leurs conceptions est en général gardée secret, et les munitions sont
        rares et chers.
        <strong
          >Les armes les plus courantes sont de conceptions proches du
          médiévales qui exploitent les technologies et des sources
          d&#39;énergie faciles d&#39;accès.</strong
        >
      </p>
      <h3>A mains nues</h3>
      <p>
        Il est possible de se défendre en utilisant uniquement ses poings et ses
        pieds. Cette methode n&#39;inflige généralement que trés peu de dégâts,
        mais un pugiliste bien entrainé peut rapidement dominer son adversaire
        avec un déluge de coups.
      </p>
      <ul>
        <li>
          Vous pouvez porter une attaque de pugiat par action pour chaque rang
          de maitrise que vous avez en pugilat.
        </li>
        <li>Vous infligez 1 point de dommage tout les 2 succès</li>
      </ul>
      <h3>Munitions et projectiles</h3>
      <p>
        Toutes les munitions et celulles ont un Encombrement de 1 et
        s&#39;achettent à l&#39;unité.
      </p>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prix unitaire</th>
            <th>Dégâts</th>
            <th>Propriétés</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Munitions et celulles conventionnelles</strong></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Celulle énergetique universelle</td>
            <td>25 p</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Carreau</td>
            <td>15 p</td>
            <td>2 point de dégats par succès</td>
            <td></td>
          </tr>
          <tr>
            <td>Flèches</td>
            <td>10 p</td>
            <td>1 point de dégats par succès</td>
            <td></td>
          </tr>
          <tr>
            <td>Balle</td>
            <td>5 p</td>
            <td>1 point de dégats par succès</td>
            <td></td>
          </tr>
          <tr>
            <td>&quot;Gros sel&quot;</td>
            <td>10 p</td>
            <td>1 point de dégats par succès</td>
            <td>
              Porté courte au maximum; Frappe une cible adjacente supplémentaire
              tout les 2 avantages
            </td>
          </tr>
          <tr>
            <td><strong>Munitions et celulles limité</strong></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Celulles à haute densitée</td>
            <td>200 p</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Munition à fusion (6 charges)</td>
            <td>600 p</td>
            <td>4 dégats par succès</td>
            <td>
              L'arme qui tire cette munitions peut explosée si 3 désavantages
              sont générés sur un jet d'attaque
            </td>
          </tr>
        </tbody>
      </table>
      <h3>Armes conventionnelles</h3>
      <ArmeCard
        v-for="arme in ArmeItemsList"
        :key="arme.Nom"
        :Arme="arme"
      ></ArmeCard>

      <h2>Armures</h2>
      <table>
        <thead>
          <tr>
            <th>Armure</th>
            <th>Prix unitaire</th>
            <th>Bonus</th>
            <th>Encombrement</th>
            <th>Effets supplémentaire</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Equipement</strong></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Ceinture multi-usage</td>
            <td>50p</td>
            <td></td>
            <td>1</td>
            <td>
              Accès rapides sur des objets jusqu&#39;a 2 d&#39;Encombrement
            </td>
          </tr>
          <tr>
            <td>Cartouchière</td>
            <td>50p</td>
            <td></td>
            <td>1</td>
            <td>
              Accès rapides sur des celulles ou munitions jusqu&#39;a 8
              d&#39;Encombrement
            </td>
          </tr>
          <tr>
            <td><strong>Armures legères</strong></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Combinaison spatiale</td>
            <td>450p</td>
            <td>+1 Encaissement</td>
            <td>3</td>
            <td>La combinaisons peut être scéllée pour resister au vide</td>
          </tr>
          <tr>
            <td>Vêtements banals</td>
            <td>100p</td>
            <td></td>
            <td>2</td>
            <td></td>
          </tr>
          <tr>
            <td>Protections improvisées</td>
            <td>200p</td>
            <td>+1 Encaissement</td>
            <td>3</td>
            <td></td>
          </tr>
          <tr>
            <td>Vêtements renforcés</td>
            <td>2000p</td>
            <td>+2 Encaissement</td>
            <td>3</td>
            <td></td>
          </tr>
          <tr>
            <td><strong>Armures intermediaires</strong></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Armure matelassé</td>
            <td>800p</td>
            <td>+2 Encaissement</td>
            <td>4</td>
            <td>désavantage en discrétion</td>
          </tr>
          <tr>
            <td><strong>Armures Lourdes</strong></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Cuirasse métalique</td>
            <td>4000p</td>
            <td>+1 défense (DaC et DaD)</td>
            <td>5</td>
            <td>désavantage en discrétion</td>
          </tr>
          <tr>
            <td>Armure de plates</td>
            <td>8000p</td>
            <td>+2 défense (DaC et DaD)</td>
            <td>6</td>
            <td>désavantage en discrétion</td>
          </tr>
          <tr>
            <td>Armure lourde scellée</td>
            <td>15000p</td>
            <td>+2 défense (DaC et DaD)</td>
            <td>10</td>
            <td>
              désavantage en discrétion, La défense est conservée face aux armes
              à énergie
            </td>
          </tr>
        </tbody>
      </table>
      <h1>Véhicules et montures</h1>
      <p>//TODO</p>
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
import { defineComponent } from "@vue/runtime-core";

import NamTitle from "@/components/NamTitle.vue";
import EquipementCard from "@/components/EquipementCard.vue";
import ArmeCard from "@/components/ArmeCard.vue";

import { EquipementService } from "@/domain/Equipement";
import { ArmesService } from "@/domain/Armes";

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
    EquipementCard,
    ArmeCard,
  },
  data() {
    return {
      EquipementItemsList: EquipementService.getAllEquipementItems(),
      ArmeItemsList: ArmesService.getAllArmesList(),
    };
  },
});
</script>

<style></style>
