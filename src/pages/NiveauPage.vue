<template>
  <q-page padding>
    <NamTitle>Gain de niveau</NamTitle>

    <h3>Progressions Classique</h3>
    <p>Lors de vos gains de niveaux, vous avec deux possibilitée :</p>
    <ul>
      <li>
        Augmenter le rang de maitrise d'une compétence. L'expertise est
        débloquée à partir du niveau 5
      </li>
      <li>Ajouter un emplacement de capacité</li>
    </ul>
    <p>
      Le niveau 9 est le niveau maximum que peuvent atteindre les aventuriers.
      Certaines créatures ou adversaires peuvent aller au delà de cette limite.
    </p>

    <h3>Progression Narative</h3>

    <p>
      Les niveaux sont gagnés après suffisement de tests sur les compétences des
      PJ. Les choix dans l'apprentissage des compétences est, par conséquent,
      choisi par les joueurs de manière indirecte.
    </p>
    <p>
      Les points d'experiences ne sont gagnés que lorsque les joueurs font des
      tests de compétences et des jets d'attaques. Par exemple, si Obi-wan fait
      un test de Charisme (Charme) face à un adversaire, il incrémente un
      compteur qui au bout d'un nombre déterminé, incrémente le rang dans la
      compétence. C'est au MJ de déterminer à l'avance si la progression sera
      rapide (1 ou 2 tests pour les compétences les plus rarement utilisées, 5
      pour les compétences de combat) ou plus lente.
    </p>
    <p>
      Les capacités sont gagnées à chaque fois qu'une créature puissante est
      mise à terre, ou lors d'événements particuliers. Par exemple, les
      aventuriers trouvent une source de pouvoir au fond d'un ancien temple
      abandonné, et décident de l'étudier. Si leurs tests réussissent, ils
      gagnent tous une capacité parmi un choix réduit ayant un rapport avec la
      situation et l'histoire.
    </p>
    <p>Dans les deux cas:</p>
    <ul>
      <li>
        le passage au rang de maitrise d'une compétence augmente le niveau du
        personnage de 1
      </li>
      <li>
        le gain d'un nouvel emplacement de capacité augmente le niveau du
        personnage de 1
      </li>
    </ul>
  </q-page>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import NamTitle from 'src/components/NamTitle.vue';
export default defineComponent({
  name: 'PersonnagePage',
  components: {
    NamTitle,
  },
});
</script>
<style scoped></style>
