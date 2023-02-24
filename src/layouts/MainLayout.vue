<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> <NamTitle>Namtar rules</NamTitle> </q-item-label>

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

        <q-item clickable to="/aptitude" exact>
          <q-item-section avatar>
            <q-icon name="graphic_eq" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Aptitude</q-item-label>
          </q-item-section>
        </q-item>

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

import NamTitle from 'src/components/NamTitle.vue';

export default defineComponent({
  name: 'MainLayout',
  components: {
    NamTitle,
  },
  data() {
    return {
      leftDrawerOpen: false,
    };
  },

  methods: {
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },
  },
});
</script>
