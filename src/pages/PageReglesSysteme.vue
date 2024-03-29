<template>
  <q-page padding>
    <h4 class="text-center">Système de Dés</h4>
    <div class="text-justify">
      <h5>Dé positif versus Dé négatif</h5>
      <p>
        Les tests sont résolus en opposant les résultats d'un pool de dé
        "positifs" versus un pool de dé "négatifs". Les pools sont constituées
        de d6
      </p>
      <div class="row justify-around">
        <q-card flat class="col-md-6 col-sm-12 bg-accent q-my-lg">
          <q-card-section vertical>
            <p class="text-h6">Pour les dés positifs</p>
            <ul>
              <li class="text-overline">
                Le résultat 6 génère : 1 Triomphe et 1 succès
              </li>
              <li class="text-overline">
                Le résultat 5 ou 4 génère : 1 succès
              </li>
              <li class="text-overline">Le résultat 3 génère : 1 atout</li>
              <li class="text-overline">
                Les autres résultats ne sont pas interprétés
              </li>
            </ul>
          </q-card-section>
        </q-card>
        <!-- <q-separator vertical inset class="q-mx-lg"></q-separator> -->
        <q-card flat class="col-md-6 col-sm-12 bg-accent q-my-lg">
          <q-card-section vertical>
            <p class="text-h6">Pour les dés négatifs</p>
            <ul>
              <li class="text-overline">
                Le résultat 6 génère : 1 Désastre et 1 échec
              </li>
              <li class="text-overline">Le résultat 5 ou 4 génère : 1 échec</li>
              <li class="text-overline">Le résultat 3 génère : 1 menace</li>
              <li class="text-overline">
                Les autres résultats ne sont pas interprétés
              </li>
            </ul>
          </q-card-section>
        </q-card>
      </div>
      <p>
        <strong
          >Chaque échec annule un succès, un triomphe annule un désastre</strong
        >. Le score final, qu&#39;on appelle résultat net, est déterminé par la
        somme des échecs avec les succès. Les atouts et les menaces servent à
        alimenter les compétences, ou d'effectuer des relances de dés en faveur
        ou en défaveur des belligérants. Ce sont les joueurs qui décident de
        comment dépenser leurs atouts, et au MJ de déclencher leurs menaces.
      </p>
      <p>
        Les <strong>triomphes</strong> et les
        <strong>désastres</strong> caractérisent une action charnière et
        particulièrement épique. Le MJ choisi alors les effets narratifs qui
        détermineront l'issue de l'action pour le cas des désastres, ou des
        triomphe des PNJ. Les joueurs décident avec le MJ comment interpréter
        leurs triomphes. Notez qu'un test peut échouer avec des triomphes ou
        réussir avec désastres. Exemple de résolution : sur un triomphe au jet
        d'attaque raté, l'adversaire est aveuglé et tombe à terre. Un désastre
        sur un jet de défense réussi : un projectile est dévié, mais il est
        renvoyé sur un allié...
      </p>
    </div>
    <h5>Atout et Menaces</h5>
    <p>
      Ils sont générés lors d'un test ou d'un jet. Ils symbolisent des
      perturbations oniriques qui peuvent être exploitées pour effectuer des
      aptitudes. Si un personnage possède un ou plusieurs atouts avant
      d'effectuer un jet ou un test,
      <strong
        >il peut en dépenser autant qu'il le souhaite et relancer autant de dés
        parmi son pool de dé positif</strong
      >. Les <strong>menaces</strong> sont exploitées de la même manière par le
      MJ pour <strong>les dés négatif</strong>
      des joueurs.
    </p>
    <p>
      Si ils en font la demande, le MJ doit indiquer aux joueurs si ses
      créatures subissent des atouts ou des menaces.
    </p>
    <h5>Avantages et désavantages</h5>
    <p>
      Grâce à certaines aptitudes, ou sous les effets narratif d'un triomphe ou
      d'un désastre, les joueurs pourront
      <strong>ajouter à leur pool de dé positif 1 ou plusieurs d4</strong>. Ils
      représentent des avantages situationnels qui aident à la réussite de
      l'action. Le même mécanisme existe avec les désavantages, représenté par 1
      ou plusieurs d4 ajoutés au pool de dés négatifs.
    </p>
    <p>
      Si ils en font la demande, le MJ doit indiquer aux joueurs si ses
      créatures subissent des atouts ou des menaces.
    </p>

    <h4 class="text-center">Test de compétence</h4>
    <p>
      Pour chaque test de compétence, le MJ décide da difficulté de la tâche à
      accomplir, qui est représentée par un
      <strong>degré de difficulté (DD)</strong>. Plus une tâche est difficile,
      plus son DD est élevé.
    </p>

    <div class="row justify-around">
      <q-card flat class="col-md-6 col-sm-12 bg-accent q-my-lg">
        <q-card-section vertical class="text-center">
          <p>Un pool de d6 avec autant de dé que votre valeur de :</p>
          <p><strong>Caractéristique + Compétence</strong></p>
          <p>
            C'est au MJ de déterminer quel est la caractéristique et la
            compétence les plus appropriés pour le tests.
          </p>
        </q-card-section>
      </q-card>
      <!-- <q-separator vertical inset></q-separator> -->
      <q-card flat class="col-md-6 col-sm-12 bg-accent q-my-lg">
        <q-card-section vertical>
          <p>
            Le pool de d6 est constitué selon le
            <strong>Degrés de difficulté (DD)</strong>
          </p>
          <p>
            Allant de 0 a +l&#39;infini. Chaque cran est plus difficile a passé
            que le précédant.
          </p>
          <ul>
            <li class="text-overline">
              <strong>Routinier - DD0 - 0 dés</strong> : Aucune difficulté. Si
              c'est raté, ce n'est vraiment, vraiment pas de chance...
            </li>
            <li class="text-overline">
              <strong>Facile - DD1 - 1 dés</strong> : Une personne sans vraiment
              de talents et mal équipé pourrait se planter plus de la moitié du
              temps.
            </li>
            <li class="text-overline">
              <strong>Normal - DD2 - 2 dés </strong> : Quelqu'un d'affûté pour
              le job, et avec un peu d'entraînement pourrai avoir quand même
              quelques difficultés.
            </li>
            <li class="text-overline">
              <strong>Complexe - DD3 - 3 dés</strong> : Quelqu'un de compétent
              ne voudra pas s'y risquer sans un bon matériel adéquat...
            </li>
            <li class="text-overline">
              <strong>Difficile - DD4 - 5 dés</strong> : Les meilleurs
              considèrent ça entre eux comme une "prise de risque."
            </li>
            <li class="text-overline">
              <strong>Très Difficile - DD5 - 8 dés</strong> : Il faut être un
              expert talentueux et bien équipe pour pouvoir dire "qu'on peut y
              arriver."
            </li>
            <li class="text-overline">
              <strong>Exceptionnel - DD6 - 13 dés</strong> : Il faut être un
              expert talentueux et bien équipe pour espérer peut-être réussir.
            </li>
          </ul>
          <p class="text-overline">
            Pour des niveaux de difficulté supérieure : le DD est égal au DD du
            niveau précédant additionné à celui du niveau avant le niveau
            précédant. (Exemple après le DD 13 : 13 + 8 = 21)
          </p>
        </q-card-section>
      </q-card>
    </div>

    <p>
      Pour faire un test de compétence, préparez autant de d6 que la somme de la
      valeur de la caractéristique et celle de votre rang de maîtrise de la
      compétence. Interprétez alors le résultat.
    </p>
    <h4 class="text-center">Opposition</h4>
    <p>
      Les deux créatures qui s'opposent font un test de compétence correspondant
      à l'action qu'ils tentent de réaliser. Ils appliquent tous les bonus et
      malus appropriés, puis comparent leurs résultats entre eux.
    </p>
    <p>
      Si les résultats des tests sont identiques, la situation n'évolue pas.
    </p>
    <h4 class="text-center">Tests de groupe</h4>
    <p>
      Pour faire un test de compétence de groupe, tous les membres du groupe
      concerné doivent faire un test de compétence. Pour savoir si le test est
      réussi, il faut compenser les échecs du groupe avec les succès du groupe,
      et considérer le score final.
    </p>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style></style>
