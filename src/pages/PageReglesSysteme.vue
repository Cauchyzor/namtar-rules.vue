<template>
  <q-page padding>
    <h2 class="text-center">Système de Dés</h2>
    <div class="text-justify">
      <h4>
        Constituer des
        <label class="text-italic">pools</label>
        de dés
      </h4>
      <h5>Dé positif versus Dé négatif</h5>
      <p>
        Les tests sont résolus en opposant les résultats d'un pool de dé
        "positifs" versus un pool de dé "négatifs". Les pools sont constituées
        de d6
      </p>
      <div class="row justify-around q-gutter-md">
        <q-card flat class="col bg-accent q-my-lg">
          <q-card-section vertical>
            <p class="text-h6">Pour les dés positifs</p>
            <ul>
              <li class="text-overline">
                Le résultat 6 génère : 1 Triomphe et 1 succès
              </li>
              <li class="text-overline">
                Le résultat 5 ou 4 génère : 1 succès
              </li>
              <li class="text-overline">Le résultat 3 génère : 1 avantage</li>
              <li class="text-overline">
                Les autres résultats ne sont pas interprétés
              </li>
            </ul>
          </q-card-section>
        </q-card>
        <q-card flat class="col-md-6 col-sm-12 bg-accent q-my-lg">
          <q-card-section vertical>
            <p class="text-h6">Pour les dés négatifs</p>
            <ul>
              <li class="text-overline">
                Le résultat 6 génère : 1 Désastre et 1 échec
              </li>
              <li class="text-overline">Le résultat 5 ou 4 génère : 1 échec</li>
              <li class="text-overline">
                Le résultat 3 génère : 1 désavantages
              </li>
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
        somme des échecs avec les succès. Les avantages et les désavantages
        servent à alimenter les compétences, ou de qualifier les situations pour
        distribuer des dés de handicap ou de supériorité aux acteurs de la
        scène. Par exemple : Si une attaque réussie contre une créature, mais
        génère deux désavantages, le MJ peut décider que l'attaquant est
        déséquilibré par l'attaque, et qu'il subit donc deux dé de handicap sur
        son jet de défense, ou encore que ses prochains assaillants gagnent deux
        dés de supériorité tant qu'il ne c'est pas déplacé.
      </p>
      <p>
        Les <strong>avantages</strong> et les
        <strong>désavantages</strong> permettent de qualifier la réussite ou
        l’échec d'un jet ou d'un test. Ils permettent aux MJ et aux joueurs de
        créer des effets bénéfiques ou délétères par le biais de la narration.
        Par exemple, un jet d'attaque qui échoue mais génère deux avantages peut
        déstabiliser la cible et la faire trébucher. Plus il y a d'avantages ou
        de désavantages dégénéré, et plus les effets sont forts.
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
    <h6>Exemples</h6>
    <div class="row justify-left q-gutter-md">
      <q-item class="col">
        <q-item-section top>
          <q-item-label>1 avantage - Bonne entente</q-item-label>
          <q-item-label caption>
            Lors d'une négociation, vous pouvez recevoir un cadeau en plus de
            votre transaction.
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-item class="col-12 col-sm-4 col-md-3 col-xl-2">
        <q-item-section top>
          <q-item-label>1 avantage - déstabilisation</q-item-label>
          <q-item-label caption>
            L'adversaire subit 1 dé de handicap sur son prochain jet de défense
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-item class="col-12 col-sm-4 col-md-3 col-xl-2">
        <q-item-section top>
          <q-item-label>1 avantage - adrenaline</q-item-label>
          <q-item-label caption>
            Vous gagnez 1 dé de supériorité sur votre prochain test ou prochain
            jet d'attaque
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-item class="col-12 col-sm-4 col-md-3 col-xl-2">
        <q-item-section top>
          <q-item-label>2 avantage - moral</q-item-label>
          <q-item-label caption>
            Vous gagnez 1 dé de supériorité sur tout vos prochains jet pendant
            le tour.
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-item class="col-12 col-sm-4 col-md-3 col-xl-2">
        <q-item-section top>
          <q-item-label>2 avantage - bonne fortune</q-item-label>
          <q-item-label caption>
            Vous réussissez a récupérer un objet supplémentaire sur un larcin .
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-item class="col-12 col-sm-4 col-md-3 col-xl-2">
        <q-item-section top>
          <q-item-label>3 avantage - chance</q-item-label>
          <q-item-label caption>
            Vous provoquez un effet similaire a un triomphe ou un désastre sur
            votre adversaire.
          </q-item-label>
        </q-item-section>
      </q-item>
    </div>
    <div class="row justify-left q-gutter-md">
      <q-item class="col">
        <q-item-section top>
          <q-item-label>1 désavantage - gène</q-item-label>
          <q-item-label caption>
            Vous infligez un dé de handicap sur le jet de discrétion d'un
            coéquipier
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-item class="col-12 col-sm-4 col-md-3 col-xl-2">
        <q-item-section top>
          <q-item-label>1 désavantage - déstabilisation</q-item-label>
          <q-item-label caption>
            Vous subissez un dé de handicap sur votre prochain jet de défense
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-item class="col-12 col-sm-4 col-md-3 col-xl-2">
        <q-item-section top>
          <q-item-label>2 désavantage - épuisement</q-item-label>
          <q-item-label caption> Vous perdez 1 dé de Spirithium. </q-item-label>
        </q-item-section>
      </q-item>
      <q-item class="col-12 col-sm-4 col-md-3 col-xl-2">
        <q-item-section top>
          <q-item-label>3 désavantage - malchance</q-item-label>
          <q-item-label caption>
            Vous provoquez un effet similaire a un désastre ou un désastre pour
            votre adversaire.
          </q-item-label>
        </q-item-section>
      </q-item>
    </div>
    <div class="row justify-left q-gutter-md">
      <q-item class="col">
        <q-item-section top>
          <q-item-label>1 triomphe - gain de pouvoir</q-item-label>
          <q-item-label caption>
            Vous regagnez 1 dé de Spirithium
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-item class="col-12 col-sm-4 col-md-3 col-xl-2">
        <q-item-section top>
          <q-item-label>2 triomphe - adrenaline</q-item-label>
          <q-item-label caption>
            Vous gagnez immédiatement 1 point d'action
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-item class="col-12 col-sm-4 col-md-3 col-xl-2">
        <q-item-section top>
          <q-item-label>1 désastre - panique</q-item-label>
          <q-item-label caption> Vous perdez votre reaction. </q-item-label>
        </q-item-section>
      </q-item>
      <q-item class="col-12 col-sm-4 col-md-3 col-xl-2">
        <q-item-section top>
          <q-item-label>2 désavantage - maladresse</q-item-label>
          <q-item-label caption>
            Votre aptitude touche en partie un allié à proximité de la cible.
          </q-item-label>
        </q-item-section>
      </q-item>
    </div>

    <h5>Supériorité et Handicap</h5>
    <p>
      Grâce à certaines aptitudes, ou sous les effets narratif d'un triomphe ou
      d'un désastre, les joueurs pourront
      <strong>ajouter à leur pool de dé positif 1 ou plusieurs d4</strong>. Ils
      représentent une aide ou une contrainte extérieur à celui qui effectue
      l'action et qui peut influencer ses chances de réussir.
    </p>

    <h4>Test de compétence</h4>
    <p>
      Pour chaque test de compétence, le MJ décide da difficulté de la tâche à
      accomplir, qui est représentée par un
      <strong>degré de difficulté (DD)</strong>. Plus une tâche est difficile,
      plus son DD est élevé.
    </p>

    <div class="row justify-around q-gutter-md">
      <q-card flat class="col bg-accent q-my-lg">
        <q-card-section vertical>
          <p>Un pool de d6 avec autant de dé que votre valeur de :</p>
          <p><strong>Caractéristique + Compétence</strong></p>
          <p>
            C'est au MJ de déterminer quel est la caractéristique et la
            compétence les plus appropriés pour le tests.
          </p>
        </q-card-section>
      </q-card>
      <!-- <q-separator vertical inset></q-separator> -->
      <q-card flat class="col-md-8 col-sm-12 bg-accent q-my-lg">
        <q-card-section vertical>
          <p>
            Le pool de d6 est constitué selon le
            <strong>Degrés de difficulté (DD)</strong>
          </p>
          <p>
            Allant de 0 a +l&#39;infini. Chaque cran est plus difficile a passé
            que le précédant.
          </p>
          <div class="row q-gutter-sm">
            <div class="col bg-secondary q-pa-sm">
              <p class="text-uppercase text-grey">Facile</p>
              <p class="text-bold text-grey">DD1</p>
              <p class="text-bold">1 dés</p>
            </div>
            <div class="col bg-secondary q-pa-sm">
              <p class="text-uppercase text-grey">Normal</p>
              <p class="text-bold text-grey">DD2</p>
              <p class="text-bold">2 dés</p>
            </div>
            <div class="col bg-secondary q-pa-sm">
              <p class="text-uppercase text-grey">Complexe</p>
              <p class="text-bold text-grey">DD3</p>
              <p class="text-bold">3 dés</p>
            </div>
            <div class="col bg-secondary q-pa-sm">
              <p class="text-uppercase text-grey">Difficile</p>
              <p class="text-bold text-grey">DD4</p>
              <p class="text-bold">5 dés</p>
            </div>
            <div class="col bg-secondary q-pa-sm">
              <p class="text-uppercase text-grey">Très Difficile</p>
              <p class="text-bold text-grey">DD5</p>
              <p class="text-bold">8 dés</p>
            </div>
            <div class="col bg-secondary q-pa-sm">
              <p class="text-uppercase text-grey">Exceptionnel</p>
              <p class="text-bold text-grey">DD6</p>
              <p class="text-bold">13 dés</p>
            </div>
          </div>
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
    <h4>Opposition</h4>
    <p>
      Les deux créatures qui s'opposent font un test de compétence correspondant
      à l'action qu'ils tentent de réaliser. Ils appliquent tous les bonus et
      malus appropriés, puis comparent leurs résultats entre eux.
    </p>
    <p>
      Si les résultats des tests sont identiques, la situation n'évolue pas.
    </p>
    <h4>Tests de groupe</h4>
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
