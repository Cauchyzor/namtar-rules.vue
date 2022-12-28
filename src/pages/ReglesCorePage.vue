<template>
  <q-page padding>
    <q-tabs>
      <q-route-tab tab="Dice" label="Système de dé"  to="dice-system" exact/>
      <q-route-tab tab="Soins" label="Soins et repos" to="soin" exact />
      <q-route-tab tab="Combat" label="Combat" to="combat" exact />
    </q-tabs>
    <router-view></router-view>
  </q-page>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ReglesCores',
});
</script>
<style scoped></style>
