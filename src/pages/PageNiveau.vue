<template>
  <q-page padding>
    <!-- TODO : Migrer vers un système de point d'action (+ 1 point au niveau 5)-->
    <h2 class="text-center">Gain de niveau</h2>

    <h3>Progression par milestone</h3>
    <p>
      Après avoir accomplit un acte important dans son intégralité et que les
      personnages ont la possibilité de prendre du repos, ils gagnent tous un
      niveau.
    </p>

    <h3>Ajouter 1 niveau à son personnage</h3>
    <p>Pour chaque niveau gagné :</p>
    <ul>
      <li>Choisir une nouvelle aptitude parmi celles disponibles</li>
      <li>Mettre à jour votre nombre de point de vie</li>
      <li>Mettre à jour votre nombre de dé d'ésotérisme</li>
    </ul>
    <p>
      Pour chaque palier de 2 niveau a partir du niveau 1 (niveaux 3, 5, 7, et
      9)
    </p>
    <li>
      Vous augmentez d'un niveau votre rang de maîtrise dans une compétence.
    </li>
    <p>
      Le niveau 9 est le niveau maximum que peuvent atteindre les aventuriers.
      Certaines créatures ou adversaires peuvent aller au delà de cette limite.
    </p>
  </q-page>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PersonnagePage",
});
</script>
<style scoped></style>
