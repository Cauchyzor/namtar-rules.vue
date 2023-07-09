<template>
  <q-page padding>
    <h3 class="text-center">Combats et conflits</h3>
    <p>Les combats ce déroulent selon la boucle suivante :</p>

    <q-stepper v-model="step" header-nav animated class="bg-secondary" flat>
      <q-step :name="1" prefix="1" title="Decrire le tour de jeu">
        <p>
          Les tours de jeu représente des moments de quelques secondes pendant
          lesquelles chaque acteur de la rencontre essaye de tirer parti de la
          situation.
        </p>
        <p>
          Chaque personnages et créatures impliqués dans la rencontre ont tous
          par défaut <strong>une action</strong> et
          <strong>une réaction</strong>, ou une seule
          <strong>action complexe</strong>.
        </p>

        <q-list class="q-my-xl bg-accent" bordered padding>
          <q-item>
            <q-item-section>
              <q-item-label header>Charger un adversaire</q-item-label>
              <q-item-label caption class="text-grey"
                >Se déplacer et attaquer avec la force de la course. Un test
                d'athletisme opposé a la cible est necessaire pour rattraper une
                cible qui décide fuir au même tour</q-item-label
              >
            </q-item-section>
            <q-item-section side top>
              <q-item-label overline>Action complexe</q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section>
              <q-item-label header>Bousculer / Empoigner </q-item-label>
              <q-item-label caption class="text-grey"
                >Vous tentez d'entraver un adversaire, ou de le mettre à terre.
                Vous devez réussir un test en opposition avec votre adversaire.
                La compétence utilisée dépendra de la manière dont l'action est
                réalisée et comment l'adversaire réagit. Lors d'une tentative
                d'entrave, si vous obtenez plus de succès que le score de la
                cible, elle est immobilisée, sinon elle est
                entravée.</q-item-label
              >
            </q-item-section>
            <q-item-section side top>
              <q-item-label overline>Action complexe</q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section>
              <q-item-label header>Se précipiter</q-item-label>
              <q-item-label caption class="text-grey"
                >Effectuer un déplacement jusqu'a deux niveau de porté en ligne
                droite</q-item-label
              >
            </q-item-section>
            <q-item-section side top>
              <q-item-label overline>Action complexe</q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label header>Se cacher</q-item-label>
              <q-item-label caption class="text-grey"
                >Quand vous choisissez l&#39;action se cacher, vous devez faire
                un test d&#39;agilité (Discrétion) de DD égale à la sommes des
                scores de vigilance des adversaires à proximité.</q-item-label
              >
            </q-item-section>
            <q-item-section side top>
              <q-item-label overline>Action complexe</q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section>
              <q-item-label header>Fouille approfondie</q-item-label>
              <q-item-label caption class="text-grey"
                >Fouiller jusqu'a un niveau de porté ou dans son
                sac</q-item-label
              >
            </q-item-section>
            <q-item-section side top>
              <q-item-label overline>Action complexe</q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section>
              <q-item-label header>Stabiliser</q-item-label>
              <q-item-label caption class="text-grey"
                >Effectuer les premiers soins a une creature à
                terre</q-item-label
              >
            </q-item-section>
            <q-item-section side top>
              <q-item-label overline>Action complexe</q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section>
              <q-item-label header>Utiliser une compétence</q-item-label>
              <q-item-label caption class="text-grey"
                >La plupart des actions qui requirent une concentration et un
                savoir faire prennent l'intégralité du tour pour être résolue,
                parfois plus, a la discretion du MJ. Elle font également l'objet
                d'un test de compétence.</q-item-label
              >
            </q-item-section>
            <q-item-section side top>
              <q-item-label overline>Action complexe</q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section>
              <q-item-label header>Autre chose ?</q-item-label>
              <q-item-label caption class="text-grey"
                >La seule limite au jeu est votre imagination. Les précédentes
                actions résument les principales possibilités qui s&#39;offrent
                à votre héros lors d&#39;une scène de combat. Mais rien ne vous
                empêche de faire autre chose : tenter de faire rire votre
                adversaire, tenter de casser une fiole à sa ceinture, tout est
                possible. C&#39;est alors au MJ de déterminer les chances de
                réussite de votre action et de vous demander, s&#39;il le
                souhaite, un lancer de dés.</q-item-label
              >
            </q-item-section>
            <q-item-section side top>
              <q-item-label overline>Action complexe</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
        <q-separator padding inset></q-separator>
        <div class="row q-my-xl">
          <q-list class="col bg-accent" bordered padding>
            <q-item>
              <q-item-section>
                <q-item-label header>
                  Se déplacer d'un niveau de porter/ Se relever</q-item-label
                >
                <q-item-label caption class="text-grey"
                  >Parcourir l'équivalent d'un niveau de porté en ligne droite.
                  Se relever quand on a été mis terre</q-item-label
                >
              </q-item-section>
              <q-item-section side top>
                <q-item-label overline>Action</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label header>Attaquer</q-item-label>
                <q-item-label caption class="text-grey"
                  >Effectuer un jet d'attaque avec l'arme en main.</q-item-label
                >
              </q-item-section>
              <q-item-section side top>
                <q-item-label overline>Action</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label header>Recharger un equipement</q-item-label>
                <q-item-label caption class="text-grey"
                  >Utiliser une cellule <strong>à portée de main</strong> pour
                  recharger l'arme en main.</q-item-label
                >
              </q-item-section>
              <q-item-section side top>
                <q-item-label overline>Action</q-item-label>
              </q-item-section>
            </q-item>
            <q-item
              ><q-item-section>
                <q-item-label header
                  >Utiliser un objet à porté de main</q-item-label
                >
                <q-item-label caption class="text-grey"
                  >Utiliser un consomable à usage rapide, actionner un serrure
                  électronique...</q-item-label
                >
              </q-item-section>
              <q-item-section side top>
                <q-item-label overline>Action</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label header>Fouiller a son emplacement</q-item-label>
                <q-item-label caption class="text-grey"
                  >Jeter un coup d'oeil rapide autour de vous, ou récuérer un
                  objet dans une saccoche ou a la ceinture.</q-item-label
                >
              </q-item-section>
              <q-item-section side top>
                <q-item-label overline>Action</q-item-label>
              </q-item-section></q-item
            >
            <q-item>
              <q-item-section>
                <q-item-label header>Utiliser une aptitude</q-item-label>
                <q-item-label caption class="text-grey"
                  >Le descriptif de l'aptitude indique si son lancement
                  nécessite d&#39;utiliser une action, ou doit être préparé
                  pendant plusieurs minutes ou heures. Leurs effets sont indiqué
                  dans la description de l'aptitude.</q-item-label
                >
              </q-item-section>
              <q-item-section side top>
                <q-item-label overline>Action</q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section>
                <q-item-label header
                  >Se mettre a couvert / Se mettre en joue</q-item-label
                >
                <q-item-label caption class="text-grey"
                  >Sortir de sa couverture pour permettre une attaque
                  d'opportunité, ou au contraire se mettre à couvert pour eviter
                  de provoquer des attaques à distance. La qualitée de la
                  couverture
                </q-item-label>
              </q-item-section>
              <q-item-section side top>
                <q-item-label overline>Action</q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section>
                <q-item-label header>Se désengager</q-item-label>
                <q-item-label caption class="text-grey"
                  >Se déplacer sans provoquer d'attaques d'opportunités par les
                  ennemis engagés avec vous.
                </q-item-label>
              </q-item-section>
              <q-item-section side top>
                <q-item-label overline>Action</q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section>
                <q-item-label header>Esquiver</q-item-label>
                <q-item-label caption class="text-grey"
                  >Quand vous choisissez l&#39;action esquiver, votre unique
                  objectif est d&#39;éviter les attaques. Jusqu&#39;au début de
                  votre tour suivant, vous
                  <strong>augmentez de 1 votre score de réflexes</strong>. Vous
                  perdez les bénéfices de cette action si vous êtes immobilisé,
                  empoigné, neutralisé ou inconscient.
                </q-item-label>
              </q-item-section>
              <q-item-section side top>
                <q-item-label overline>Action</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
          <q-list class="col bg-accent" bordered padding>
            <q-item>
              <q-item-section>
                <q-item-label header>Attaque d'opportunité</q-item-label>
                <q-item-label caption class="text-grey"
                  >Attaquer un adversaire qui sort d'une couverture, se déplace,
                  ou est à découvert dans le cas d'une attaque a
                  distance.</q-item-label
                >
              </q-item-section>
              <q-item-section side top>
                <q-item-label overline>Réaction</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label header>Changer d'action</q-item-label>
                <q-item-label caption class="text-grey"
                  >Dans les cas ou un béligerant effectue un mauvais jet
                  d'initiative, il peut se retrouver dans une situation où il
                  prefère s'interomptre : il n'effectue pas l'action qu'il avait
                  planifié, et
                  <strong>décide d'effectuer une autre action</strong>. Pour
                  illustrer ce changement,
                  <strong>il perd alors sa réaction</strong></q-item-label
                >
              </q-item-section>
              <q-item-section side top>
                <q-item-label overline>Réaction</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </q-step>

      <q-step :name="2" prefix="2" title="Lancer l'initiative">
        <p>
          Si aucun des deux camps ne cherche à être discret, ils se remarquent
          automatiquement. Test d'initiative sans difficulté de tout les
          béligerant, puis classement par nombre de success, puis nombre
          d'avantage si égalité
        </p>
        <p>
          Sinon, test de discretion de groupe des attaquants opposé test de
          vigilance de chaque mêmbre de l'autre groupe. Les membres qui ne
          reussisent pas ce test sont surpris
        </p>
        <p>
          Si un béligérent est surpris, il ne pouvez pas bouger ou accomplir
          d&#39;action lors du premier tour de combat, et il ne peut pas non
          plus réagir jusqu&#39;à la fin de ce tour.
        </p>
      </q-step>

      <q-step :name="3" prefix="3" title="Résoudre">
        <h5>Les niveaux de porté</h5>
        <p>
          Pour facilité la lecture d'une scène de combat, les distances
          relatives entre les personnages sont décrite avec des niveau de
          portée. Ils sont necessaire pour calculer la difficulter d'un jet
          d'attaque a distance (voir plus loin)
        </p>
        <ul>
          <li>Engagé - de 0 à 1m environ</li>
          <li>Courte - de 1m à 9m</li>
          <li>Moyenne - de 10 à 20m</li>
          <li>Longue - de 20 à 50m</li>
          <li>Extreme - de 50 à 100m</li>
        </ul>
        <p>
          Les niveaux de porté au dela de 100m peuvent encore être fragmenter
          selon la volonté du MJ
        </p>
        <h5>Resoudre les déplacements</h5>
        Chaque personnage qui decide d'effectuer un déplacement ce déplace d'un
        niveau de porté, soit l'equivalent d'une dizaine de mètres. Si un
        personnage choisi de se déplacer alors qu'il est engagé avec un
        adversaire, ou qu'il passe a un niveau de porté engagé avec un
        adversaire sur son chemin, il rique une attaque d'opportunité.
        <h5>Resoudre les Attaques</h5>
        <p>
          Que vous portiez une attaque avec une arme de corps-à-corps, une arme
          à distance ou que vous fassiez un jet d&#39;attaque dans le cadre
          d&#39;une aptitude, cette attaque se décompose ainsi :
        </p>
        <ol>
          <li>
            <p>
              Choisir une cible. Choisissez une cible qui se trouve à distance
              d&#39;attaque : une créature, un objet ou un lieu.
            </p>
          </li>
          <li>
            <p>
              Déterminer les dés a lancer en fonction du jet d'attaque (distance
              ou contact ou autre).
            </p>
          </li>
          <li>
            <p>
              Résoudre l&#39;attaque. Lancez les dés. Si vous touchez votre
              cible, vous lancez les dés de dégâts, sauf si les règles de votre
              attaque précisent autre chose. Certaines attaques ont en effet des
              effets spécifiques qui viennent s&#39;ajouter aux dégâts ou les
              remplacer.
            </p>
          </li>
        </ol>
        <h5>Les réactions</h5>
        <p>
          Les réactions peuvent être déclanchées à tout momment par les
          béligérant <strong>après avoir effectué leurs actions</strong>.La
          possibilité de jouer sa réaction est conservée jusqu'à ce qu'elle soit
          résolue, ou que le personnage effectue un nouveau tour de jeu
        </p>
      </q-step>
    </q-stepper>

    <h4>Les jets d'attaques</h4>

    <h5>Attaques au corps-à-corps</h5>
    <p>Dé positif : compétence + caractéristique</p>
    <p>Dé négatif : réflexes + équipement</p>

    <p>
      La majorité des créatures possède une allonge de 1,50 mètre. Elles peuvent
      donc porter une attaque de corps-à-corps contre les cibles qui se trouvent
      dans un rayon de 1,50 mètre autour d&#39;elles. Certaines créatures, de
      plus grand gabarit, peuvent aller au-delà.
    </p>
    <p>
      Quand vous êtes au corps-à-corps, vous pouvez aussi porter une attaque à
      mains nues au lieu d&#39;utiliser une arme : un coup-de-poing, de pied, de
      tête ou un coup similaire (aucune de ces parties du corps n&#39;étant
      considérée comme une arme).
    </p>

    <h5>Attaques à distance</h5>

    <p>Dé positif : compétence + caractéristique</p>
    <p>
      Dé négatif : distance (+1DD par niveau de porté) + equipement + couverture
    </p>
    <p>
      <strong>Couverture </strong> : En fonction de la qualité de l&#39;abri, le
      MJ peut décider d'ajouter entre 1 et 3 dés négatifs sur le jet d'attaque
      de l'assaillant, voir de rendre impossible toute attaque à distance si la
      couverture est totale et empèche au projectile d'atteindre sa cible.
    </p>

    <h4>Dégâts</h4>
    <p>
      Pour chaque arme ou capacité offensive, les dégâts infligés sont décrits
      dans la description de l'arme ou de l'aptitude.
    </p>
    <p>
      Si une arme ou une aptitude inflige des dégâts à plus d&#39;une créature
      au même moment, les dégâts sont lancés une seule fois pour toutes les
      créatures.
    </p>
    <h5>Assommer une créature</h5>
    <p>
      Parfois, un attaquant souhaite neutraliser un ennemi plutôt que le tuer.
      Quand il réussit à faire tomber cette créature à 0 point de vie suite à
      une attaque de corps-à-corps, il a la possibilité de l&#39;assommer.
      L&#39;attaquant peut faire ce choix avant d&#39;effectuer son jet
      d&#39;attaque. La créature est inconsciente et est considérée comme
      stabilisée.
    </p>
    <h3 class="text-center">Les états speciaux</h3>
    <h5>À terre / Renversée</h5>
    <p>
      La créature subit une menace lors de ses attaques au corps à corps. Les
      assaillant engagés bénéficient d'un atout sur tout leurs jets pour toucher
      contre elle. La créature peut éventuellement trouver une couverture contre
      les attaques à distances.
    </p>
    <h5>Assourdi</h5>
    <p>
      Une créature assourdie n&#39;entend plus rien et rate automatiquement tous
      les tests faisant intervenir des capacités auditives.
    </p>
    <h5>Aveuglé</h5>
    <p>
      Une créature aveuglée ne voit plus rien et rate automatiquement tout test
      qui requiert la vue. Son score de reflexe est divisé par deux.
    </p>
    <h5>Immobilisé</h5>
    <p>
      La vitesse d&#39;une créature immobilisée devient 0. La défense réduite à
      1.
    </p>
    <h5>Entravé</h5>
    <p>
      La vitesse de la créature entravée tombe à 0. Sa défense est réduite de 1
      point.
    </p>
    <h5>Empoigné</h5>
    <p>
      Une créature empoignée est immobilisée, mais elle peut utiliser une action
      pour tenter de s&#39;échapper. Elle doit pour cela réussir un test de
      vigueur (Athlétisme) ou d&#39;Agilité (Coordinations) en opposition à un
      test de vigueur (Athlétisme) ou d&#39;agilité (Coordination) de celui qui
      l'empoigne. Le choix de la compétence à utiliser dépend de comment
      l'empoignade a été réalisée.
    </p>
    <h5>Neutralisé</h5>
    <p>
      Une créature neutralisée est incapable d&#39;effectuer une action ou une
      réaction, et sa vitesse est réduite a 0. Sa défense est réduite à 1.
    </p>
    <h5>Inconscient</h5>
    <p>
      Une créature inconsciente est neutralisée, lâche tout ce qu&#39;elle
      tenait et tombe au sol. Sa défense est réduite a 0.
    </p>
    <h5>Terrorisé</h5>
    <p>
      Une créature terrorisée subit une menace chaque tours tant que la source
      de sa frayeur se trouve dans son champ de vision. La créature est
      incapable de se rapprocher de la source de sa frayeur de son plein gré.
    </p>
    <h5>Surpris</h5>
    <p>Une créature surprise ne peut entreprendre ni action ni reaction.</p>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  data() {
    return {
      step: ref(1),
    };
  },
});
</script>

<style></style>
