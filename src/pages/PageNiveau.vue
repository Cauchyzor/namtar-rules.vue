<template>
  <q-page padding>
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
      <li>Choisissez une nouvelle aptitude parmi celles disponibles</li>
      <li>Mettez à jour votre nombre de point de vie</li>
    </ul>
    <p>
      Pour chaque palier de 2 niveau a partir du niveau 1 (niveaux 3, 5 ...)
    </p>
    <ul>
      <li>Augmentez d'un niveau votre rang de maîtrise dans une compétence.</li>
    </ul>
    <p>Au niveau 5 :</p>
    <ul>
      <li>Augmentez de 1 le nombre de point d'action par tour</li>
    </ul>
    <p>
      Actuellement, le niveau 5 est le niveau maximum que peuvent atteindre les
      aventuriers. Certaines créatures ou adversaires peuvent aller au delà de
      cette limite.
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
