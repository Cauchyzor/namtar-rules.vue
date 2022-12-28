<template>
  <q-page padding>
    <NamTitle>Equipement et Marché</NamTitle>
    <!-- TODO Faire des onglets -->
    <!-- TODO Mettre les informations de lore dans des modales a la demandes -->
    <h4>Équipement</h4>
    <h5>Encombrement</h5>
    <p>
      Chaque objet transporté part les personnages représente une place dans son
      inventaire par le biais de l&#39;encombrement. Les petits objets ont une
      valeurs de 0 ( ce qui ne signifie pas pour autant que l&#39;ont peut en
      prendre autant que voulut, c&#39;est au MJ de doser ).
    </p>
    <h5>Quotidien</h5>

    <div class="row q-col-gutter-md">
      <EquipementCard
        v-for="equipementItem in EquipementItemsList"
        :key="equipementItem.Nom"
        :EquipementItem="equipementItem"
        class="col-12 col-md-4"
      ></EquipementCard>
    </div>

    <h5>Armes</h5>
    <p>
      La technologie n&#39;a souvent pas suivi une progression
      &quot;naturelle&quot;. C&#39;est dû au fait que de nombreuses
      civilisations avec une très forte avance technologique n&#39;hésitaient
      pas à explorer et à interférer avec les peuples indigènes. Par ce fait, de
      nombreuses civilisations ont par exemple découvert les armes à énergie
      avant d&#39;avoir fait leur révolution industrielle. En fonction des
      ressources naturelles à leurs dispositions, de leurs capacités en
      &quot;retro-engenering&quot; et des supports qu&#39;ils peuvent trouver
      envers les grandes nations,
      <strong
        >les civilisations peuvent avoir eu une production et des paradigmes de
        conception très différents</strong
      >.
    </p>
    <p>
      Quoiqu&#39;il en soit, toutes
      <strong>les armes de haute technologie sont difficiles d&#39;accès</strong
      >. Leurs conceptions est en général gardée secret, et les munitions sont
      rares et chers.
      <strong
        >Les armes les plus courantes sont de conceptions proches du médiévales
        qui exploitent les technologies et des sources d&#39;énergie faciles
        d&#39;accès.</strong
      >
    </p>
    <h4>A mains nues</h4>
    <p>
      Il est possible de se défendre en utilisant uniquement ses poings et ses
      pieds. Cette methode n&#39;inflige généralement que trés peu de dégâts,
      mais un pugiliste bien entrainé peut rapidement dominer son adversaire
      avec un déluge de coups.
    </p>
    <ul>
      <li>
        Vous pouvez porter une attaque de pugiat par action pour chaque rang de
        maitrise que vous avez en pugilat.
      </li>
      <li>Vous infligez 1 point de dommage tout les 2 succès</li>
    </ul>
    <h4>Munitions et projectiles</h4>
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
            L'arme qui tire cette munitions peut explosée si 3 désavantages sont
            générés sur un jet d'attaque
          </td>
        </tr>
      </tbody>
    </table>
    <h4>Armes conventionnelles</h4>
    <div class="row q-col-gutter-xs">
      <ArmeCard
        v-for="arme in ArmeItemsList"
        :key="arme.Nom"
        :Arme="arme"
        class="col-12 col-md-4"
      ></ArmeCard>
    </div>

    <h5>Armures</h5>
    <div class="row q-col-gutter-xs">
      <ArmureCard
        v-for="armure in ArmureItemsList"
        :key="armure.Nom"
        :Armure="armure"
        class="col-12 col-md-4"
      ></ArmureCard>
    </div>
    <h4>Véhicules et montures</h4>
    <p>//TODO</p>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';

import NamTitle from 'src/components/NamTitle.vue';
import EquipementCard from 'src/components/EquipementCard.vue';
import ArmeCard from 'src/components/ArmeCard.vue';
import ArmureCard from 'src/components/ArmureCard.vue';

import { EquipementService } from 'src/domain/Equipement';
import { ArmureService } from 'src/domain/Armures';
import { ArmesService } from 'src/domain/Armes';

export default defineComponent({
  components: {
    NamTitle,
    EquipementCard,
    ArmeCard,
    ArmureCard,
  },
  data() {
    return {
      EquipementItemsList: EquipementService.getAllEquipementItems(),
      ArmeItemsList: ArmesService.getAllArmesList(),
      ArmureItemsList: ArmureService.getAllArmureItems(),
    };
  },
});
</script>

<style></style>
