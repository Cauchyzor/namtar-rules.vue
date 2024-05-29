<template>
  <q-page padding>
    <h2 class="text-center">Équipement et Marché</h2>
    <!-- TODO Mettre les informations de lore dans des modales a la demandes -->
    <h3>Concepts</h3>
    <h4>Encombrement</h4>
    <p>
      Chaque objet transporté par les personnages représente une place dans son
      inventaire par le biais de l&#39;encombrement. Les petits objets ont une
      valeurs de 0 ( ce qui ne signifie pas pour autant que l&#39;ont peut en
      prendre autant que voulut, c&#39;est au MJ de doser ).
    </p>
    <h4>Rareté et prix de base</h4>
    <p>
      Chaque objet possède une valeur de rareté qui augmente avec la difficulté
      de trouver un tel objet pour un personnage. Lorsqu'un personnage souhaite
      obtenir un objet, il lance un test de négociation dont la difficulté
      dépend de la rareté. Si le test réussi, le nombre de succès peux suggérer
      une bonne affaire en réduisant par exemple le prix auquel l'objet est
      vendu par rapport au prix de base. Si le test génère des avantages net,
      cela peut signifier qu'un objet d'habitude en quantité très réduite sera
      trouvé en plusieurs exemplaires. Les désavantages net peuvent à l'inverse
      venir gonfler le prix de l'objet bar rapport au prix de base, ou indiquer
      que la recherche de l'objet prends plus de temps que prévu.
    </p>
    <h3>Armes</h3>
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
    <div class="row q-col-gutter-sm justify-center items-stretch">
      <div
        v-for="arme in ArmeItemsList"
        :key="arme.Nom"
        class="col-12 col-md-4 col-xl-3"
      >
        <ArmeCard style="height: 100%" :key="arme.Nom" :Arme="arme"></ArmeCard>
      </div>
    </div>
    <h3>Équipement quotidien</h3>
    <div class="row q-col-gutter-sm justify-center items-stretch">
      <div
        v-for="equipementItem in EquipementItemsList"
        :key="equipementItem.Nom"
        class="col-12 col-md-4 col-xl-3"
      >
        <EquipementCard
          style="height: 100%"
          :key="equipementItem.Nom"
          :EquipementItem="equipementItem"
        ></EquipementCard>
      </div>
    </div>
    <h3>Armures</h3>
    <div class="row q-col-gutter-sm justify-center items-stretch">
      <div
        v-for="armure in ArmureItemsList"
        :key="armure.Nom"
        class="col-12 col-md-4 col-xl-3"
      >
        <ArmureCard
          style="height: 100%"
          :key="armure.Nom"
          :Armure="armure"
        ></ArmureCard>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

import ArmeCard from "src/components/ArmeCard.vue";
import EquipementCard from "src/components/EquipementCard.vue";
import ArmureCard from "src/components/ArmureCard.vue";

import { ServiceArme } from "src/data/ServiceArme";
import { ServiceArmure } from "src/data/ServiceArmure";
import { ServiceEquipement } from "src/data/ServiceEquipement";

export default defineComponent({
  components: {
    ArmeCard,
    ArmureCard,
    EquipementCard,
  },
  data() {
    return {
      ArmeItemsList: ServiceArme.getAllArmesList(),
      ArmureItemsList: ServiceArmure.getAllArmureItems(),
      EquipementItemsList: ServiceEquipement.getAllEquipementItems(),
    };
  },
});
</script>

<style></style>
