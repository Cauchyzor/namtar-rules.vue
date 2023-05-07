<template>
  <q-page padding class="row items-center justify-evenly">
    <div class="row q-col-gutter-sm justify-center items-stretch">
      <div class="col">
        <q-card flat class="q-py-xl bg-accent">
          <q-card-section vertical>
            <div class="text-h5 q-mt-sm q-mb-xs text-center">Règles</div>
            <div class="text-caption text-grey">
              L'ensemble des lois de cet univers qui permettent a vos
              aventuriers de vivre leur périgrinations.
            </div>
            <div class="q-mt-xl row justify-center items-stretch">
              <q-btn
                class="text-center"
                to="/regles/dice-system"
                label=""
                size="xl"
                outline
                rounded
                color="primary"
              >
                <q-icon name="school" color="primary" size="xl"></q-icon>
              </q-btn>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col">
        <q-card flat class="q-py-xl bg-accent">
          <q-card-section vertical>
            <div class="text-h5 q-mt-sm q-mb-xs text-center">Personnage</div>
            <div class="text-caption text-grey">
              Les concepts de creation d'un personnages au sein d'une aventure.
            </div>
            <div class="q-mt-xl row justify-center items-stretch">
              <q-btn
                class="text-center"
                to="/pj"
                label=""
                size="xl"
                outline
                rounded
                color="primary"
              >
                <q-icon name="settings" color="primary" size="xl"></q-icon>
              </q-btn>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col">
        <q-card flat class="q-py-xl bg-accent">
          <q-card-section vertical>
            <div class="text-h5 q-mt-sm q-mb-xs text-center">Lore</div>
            <div class="text-caption text-grey">
              Une introduction à l'histoire connue de l'univers, partagée par
              toutes les civilisations...
            </div>
            <div class="q-mt-xl row justify-center items-stretch">
              <q-btn
                class="text-center"
                to="/lore"
                label=""
                size="xl"
                outline
                rounded
                color="primary"
              >
                <q-icon name="explore" color="primary" size="xl"></q-icon>
              </q-btn>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
});
</script>
