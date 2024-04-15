<template>
  <q-page padding>
    <h4 class="text-center">Gain de niveau</h4>

    <p>Pour chaque niveau gagné :</p>
    <ul>
      <li>Choisir une nouvelle aptitude parmi celle disponible</li>
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

    <h5>Progressions Classique</h5>
    <p>
      Après avoir accomplit un acte important dans son intégralité et que les
      personnages ont la possibilité de prendre du repos, ils gagnent tous un
      niveau.
    </p>
    <h5>Progression Narrative</h5>

    <p>
      Les niveaux sont gagnés après suffisent de tests sur les compétences des
      PJ. Les choix dans l'apprentissage des compétences est, par conséquent,
      choisi par les joueurs de manière indirecte.
    </p>
    <p>
      Par exemple, si Obi-wan fait un test de Charisme (Charme) face à un
      adversaire, il incrémente un compteur qui au bout d'un nombre déterminé,
      incrémente le rang dans la compétence. C'est au MJ de déterminer à
      l'avance si la progression sera rapide (1 ou 2 tests pour les compétences
      les plus rarement utilisées, 5 pour les compétences de combat) ou plus
      lente.
    </p>
    <p>
      Le passage au rang de maîtrise d'une compétence augmente le niveau du
      personnage de 1
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
