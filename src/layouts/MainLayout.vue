<template>
  <q-layout view="hHh Lpr lFf">
    <q-header class="bg-secondary">
      <div class="row">
        <q-toolbar class="col-6">
          <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="toggleLeftDrawer"
          />

          <q-toolbar-title class="text-uppercase">Namtar rules</q-toolbar-title>
        </q-toolbar>
        <q-toolbar class="col-6">
          <q-input
            bg-color="accent"
            color="white"
            standout
            v-model="text"
            label="Not imlemented yet"
            dense
          >
            <template v-slot:append>
              <q-icon name="search"></q-icon>
            </template>
          </q-input>
        </q-toolbar>
      </div>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above class="bg-secondary">
      <q-list>
        <q-expansion-item icon="school" label="Règles" :content-inset-level="1">
          <q-item clickable to="/regles" exact>
            <q-item-section avatar>
              <q-icon name="school" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Règles : Essentiel</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable to="/aventure" exact>
            <q-item-section avatar>
              <q-icon name="school" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Règles : Aventure</q-item-label>
            </q-item-section>
          </q-item>
        </q-expansion-item>

        <q-item clickable to="/equipement" exact>
          <q-item-section avatar>
            <q-icon name="backpack" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Equipement</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable to="/vehicule" exact>
          <q-item-section avatar>
            <q-icon name="rocket_launch" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Véhicules</q-item-label>
          </q-item-section>
        </q-item>

        <q-expansion-item
          icon="graphic_eq"
          label="Aptitudes"
          :content-inset-level="1"
        >
          <q-item clickable to="/aptitude" exact>
            <q-item-section avatar>
              <q-icon name="graphic_eq" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Création d'aptitude</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable to="/catalog" exact>
            <q-item-section avatar>
              <q-icon name="graphic_eq" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Catalogue</q-item-label>
            </q-item-section>
          </q-item>
        </q-expansion-item>

        <q-expansion-item
          icon="settings"
          label="Personnage"
          :content-inset-level="1"
        >
          <q-item clickable to="/pj" exact>
            <q-item-section avatar>
              <q-icon name="settings" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Fiche personnage</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable to="/niveau" exact>
            <q-item-section avatar>
              <q-icon name="settings" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Gain de niveau</q-item-label>
            </q-item-section>
          </q-item>
        </q-expansion-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainLayout',
  data() {
    return {
      leftDrawerOpen: false,
      text: '',
    };
  },

  methods: {
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },
  },
});
</script>
<style scoped>
.q-toolbar__title {
  font-family: 'Anurati';
}
</style>
