<template>
  <q-page padding>
    <q-tabs>
      <q-route-tab tab="Type" label="Types" to="type" exact/>
      <q-route-tab tab="Vecteur" label="Vecteur" to="vecteur" exact/>
      <q-route-tab tab="Effet" label="Effets" to="effet" exact/>
      <q-route-tab tab="Amelioration" label="Amelioration d'effet" to="amelioration" exact/>
    </q-tabs>
    <router-view></router-view>
  </q-page>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AptitudeInfoPage',
});
</script>
