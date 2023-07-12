<template>
  <q-tab-panel name="armes">
    <h4>Armes</h4>
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
  </q-tab-panel>
</template>
<script>
import { defineComponent } from "@vue/runtime-core";

import ArmeCard from "src/components/ArmeCard.vue";

import { ArmesService } from "src/domain/Armes";

export default defineComponent({
  components: {
    ArmeCard,
  },
  data() {
    return {
      ArmeItemsList: ArmesService.getAllArmesList(),
    };
  },
});
</script>
