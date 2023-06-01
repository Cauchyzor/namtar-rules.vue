<template>
  <q-page padding>
    <h3 class="text-center">Combats et conflits</h3>
    <!-- TODO : Trouver le moyen de faire un stepper Circulaire -->
    <p>Les combats ce déroulent selon la boucle suivante :</p>
    <ul>
      <li>Etape 1 : Les béligérants determinent (secrêtement) leurs actions</li>
      <li>Etape 2 : Les béligérants effectuent leurs jet d'initiative</li>
      <li>
        Etape 3 : Résolutions des actions dans l'ordre déterminé par
        l'initiative
      </li>
    </ul>

    <h4>Etape 1 : Les béligérants determinent (secrêtement) leurs actions</h4>
    <p>
      Les tours de jeu représente des moments de quelques secondes pendant
      lesquelles chaque acteur de la rencontre essaye de tirer parti de la
      situation, ou tout simplement de survire. Pendant ce laps de temps, on
      suppose que chaque personne effectue une action.
    </p>
    <p>
      Chaque personnages et créatures impliqués dans la rencontre ont tous par
      défaut <strong>une action</strong> mais également
      <strong>une réaction</strong>.
    </p>
    <p>Action possible :</p>
    <ul>
      <li>Action : Se déplacer/Se désengager/Se mettre a couvert</li>
      <li>Action : Se jeter à terre/Se relever</li>
      <li>Action : Attaquer</li>
      <li>Action : Recharger un equipement</li>
      <li>Action : Utiliser un objet à porté de main</li>
      <li>Action : Fouiller a son emplacement</li>
      <li>Action : Utiliser une aptitude</li>
      <li>Action : Autre (description libre)</li>
    </ul>

    <p>
      Les réactions n'apparaissent que dans certaine situation ou avec certaine
      aptitude. Le plus communement, une réaction est dépensée quand :
    </p>
    <ul>
      <li>Un béligérant réalise une attaque d'opportunitée.</li>
      <li>
        Un béligérant décide de ne pas effectuer l'action qu'il a déterminée à
        l'étape 1.
      </li>
    </ul>

    <h4>Etape 2 : Les béligérants effectuent leurs jet d'initiative</h4>
    <p>
      Si aucun des deux camps ne cherche à être discret, ils se remarquent
      automatiquement. Test d'initiative sans difficulté de tout les béligerant,
      puis classement par nombre de success, puis nombre d'avantage si égalité
    </p>
    <p>
      Sinon, test de discretion de groupe des attaquants opposé test de
      vigilance de chaque mêmbre de l'autre groupe. Les membres qui ne
      reussisent pas ce test sont surpris
    </p>
    <p>
      Si un béligérent est surpris, il ne pouvez pas bouger ou accomplir
      d&#39;action lors du premier tour de combat, et il ne peut pas non plus
      réagir jusqu&#39;à la fin de ce tour.
    </p>
    <h4>
      Etape 3 : Résolutions des actions dans l'ordre déterminé par l'initiative
    </h4>
    <h5>Les niveaux de porté</h5>
    <p>
      Pour facilité la lecture d'une scène de combat, les distances relatives
      entre les personnages sont décrite avec des niveau de portée. Ils sont
      necessaire pour calculer la difficulter d'un jet d'attaque a distance
      (voir plus loin)
    </p>
    <ul>
      <li>Engagé - de 0 à 1m environ</li>
      <li>Courte - de 1m à 9m</li>
      <li>Moyenne - de 10 à 20m</li>
      <li>Longue - de 20 à 50m</li>
      <li>Extreme - de 50 à 100m</li>
    </ul>
    <p>
      Les niveaux de porté au dela de 100m peuvent encore être fragmenter selon
      la volonté du MJ
    </p>
    <h5>Resoudre les déplacements</h5>
    Chaque personnage qui decide d'effectuer un déplacement ce déplace d'un
    niveau de porté, soit l'equivalent d'une dizaine de mètres. Si un personnage
    choisi de se déplacer alors qu'il est engagé avec un adversaire, ou qu'il
    passe a un niveau de porté engagé avec un adversaire sur son chemin, il
    rique une attaque d'opportunité.
    <h5>Resoudre les Attaques</h5>
    <p>
      Que vous portiez une attaque avec une arme de corps-à-corps, une arme à
      distance ou que vous fassiez un jet d&#39;attaque dans le cadre d&#39;une
      aptitude, cette attaque se décompose ainsi :
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
          Déterminer les dés a lancer en fonction du jet d'attaque (distance ou
          contact ou autre).
        </p>
      </li>
      <li>
        <p>
          Résoudre l&#39;attaque. Lancez les dés. Si vous touchez votre cible,
          vous lancez les dés de dégâts, sauf si les règles de votre attaque
          précisent autre chose. Certaines attaques ont en effet des effets
          spécifiques qui viennent s&#39;ajouter aux dégâts ou les remplacer.
        </p>
      </li>
    </ol>
    <h5>Réagir plutot qu'agir</h5>
    <p>
      Dans les cas ou un béligerant effectue un mauvais jet d'initiative, il
      peut se retrouver dans une situation où il prefère s'interomptre : il
      n'effectue pas l'action qu'il avait planifié, et
      <strong>décide d'effectuer une autre action</strong> en réponse à un
      évenements qui s'est déroulé pendant le tour. Pour illustrer ce
      changement, <strong>il perd alors sa réaction</strong>.
    </p>

    <h4>Les Actions en détail</h4>
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
      La cible doit être en parti découverte. Si elle a attaquée a son dernier
      tour, elle est considérée comme en parti découverte
    </p>
    <h5>Attaques d'opportunité</h5>
    <p>
      Au cœur d&#39;un combat, chacun reste à l&#39;affût d&#39;une chance de
      frapper un ennemi qui baisse sa garde parce qu&#39;il est en train de fuir
      ou de passer devant soi. Une telle attaque est appelée une attaque
      d&#39;opportunité.
    </p>
    <p>
      Si vous êtes au corps à corps: vous pouvez porter une attaque
      d'opportunité au corps a corps jusque avant de sortir de votre portée.
    </p>
    <p>
      Si vous êtes equipé d'une arme à distance ou que vous pouvez utiliser une
      aptitude à distance qui cible l'adversaire : vous pouvez porter une
      attaque d'opportunitée et que l'adversaire qui ce dépace est à porté.
    </p>

    <h5>Empoignade</h5>
    <p>
      La cible de votre empoignade doit être engagée avec vous. Vous devez avoir
      au moins une main de libre pour tenter d&#39;empoigner la cible. Pour
      cela, vous faites un test d&#39;empoignade à la place d&#39;un jet
      d&#39;attaque. Il s&#39;agit d&#39;un test de vigueur (Athlétisme) ou
      d&#39;agilité (Coordination) opposé à un test de vigueur (Athlétisme) ou
      de Agilité (Coordinations) de la cible (celle-ci choisit la
      caractéristique qu&#39;elle préfère utiliser). Si vous réussissez, votre
      cible se trouve soumise à l&#39;état empoignée. Vous pouvez relâcher votre
      cible quand vous le voulez et gratuitement (aucune action requise). Quand
      vous vous déplacez, vous pouvez traîner ou porter la créature que vous
      avez empoignée, mais votre vitesse est divisée par deux.
    </p>
    <h5>Bousculer une créature</h5>
    <p>
      La cible doit être engagée avec vous ou se trouver sur la trajectoire de
      votre mouvement. Au lieu de faire un jet d&#39;attaque, vous faites un
      test de vigueur (Athlétisme) opposé à un test de vigueur (Athlétisme) ou à
      un test ou d&#39;agilité (Coordinations) de la cible (celle-ci choisit la
      compétence qu&#39;elle préfère utiliser). Si vous remportez la
      confrontation, vous avez le choix entre
      <strong
        >faire tomber votre cible à terre ou la repousser d&#39;1,50 mètre loin
        de vous</strong
      >.
    </p>
    <h5>Se mettre a couvert</h5>
    <p>
      Vous profitez d'un abris adjacent à vous. Les murs, les arbres, les
      créatures, et d&#39;autres obstacles constituent pendant un combat autant
      d&#39;abris potentiels qui rendent une cible plus difficile à blesser.
    </p>
    <p>
      <strong
        >En fonction de la qualité de l&#39;abri, le MJ peut décider d'ajouter
        entre 1 et 3 dés négatifs sur le jet d'attaque de l'assaillant.</strong
      >. Par exemple, l&#39;abris d&#39;un bouclier de fortune ajoute 1 dé au
      jet d&#39;attaque à distance qui vise le porteur.
    </p>
    <p>
      <strong
        >Une cible qui bénéficie d&#39;un abri total ne peut pas être ciblée
        directement par des attaques à distances ou des évocations</strong
      >. Cela dit, elle peut être affectée par certains sorts qui ont une zone
      d&#39;effet.
    </p>
    <h5>Se désengager</h5>
    <p>
      Si vous choisissez l&#39;action se désengager, vous pouvez vous déplacer
      sans risquer de créer des attaques d&#39;opportunités jusqu&#39;à la fin
      du tour.
    </p>
    <h5>Fouiller sur son emplacement</h5>
    <p>
      Quand vous choisissez l&#39;action chercher, toute votre attention est
      tournée vers l&#39;objet de votre recherche. En fonction de ce que vous
      cherchez, le MJ peut vous demander de faire un test d&#39;intelligence
      (Perception).
    </p>
    <p>
      Fouiller son sac permet de récuperer un objet à l'interieur et de
      l'utiliser au prochain tour.
    </p>
    <h5>Esquiver</h5>
    <p>
      Quand vous choisissez l&#39;action esquiver, votre unique objectif est
      d&#39;éviter les attaques. Jusqu&#39;au début de votre tour suivant, vous
      <strong>augmentez de 1 votre score de réflexes</strong>. Vous perdez les
      bénéfices de cette action si vous êtes immobilisé, empoigné, neutralisé ou
      inconscient.
    </p>
    <h5>Se tenir prêt</h5>
    <p>
      Il peut vous arriver de vouloir surprendre un ennemi ou attendre une
      configuration particulière avant d&#39;agir. Pour cela, vous devez choisir
      l&#39;action se tenir prêt pendant votre tour. Ainsi, vous décalez votre
      action
      <strong
        >jusqu&#39;à ce que l&#39;événement attendu survient. Sinon, vous jouez
        à la fin du tour de jeu</strong
      >.
    </p>
    <p>
      Vous pouvez également utiliser votre mouvement pendant votre créneau
      d&#39;initiative, et décider de Se tenir prêt pour uniquement retarder
      votre action.
    </p>
    <h5>Utiliser une aptitude</h5>
    <p>
      Le descriptif de l'aptitude indique si son lancement nécessite
      d&#39;utiliser une action, ou doit être préparé pendant plusieurs minutes
      ou heures. Leurs effets sont indiqué dans la description de l'aptitude.
    </p>
    <h5>Se cacher</h5>
    <p>
      Quand vous choisissez l&#39;action se cacher, vous devez faire un test
      d&#39;agilité (Discrétion) de DD égale à la sommes des scores de vigilance
      des adversaires à proximité.
    </p>
    <h4>Dégâts</h4>
    <p>
      Pour chaque arme ou capacité offensive, les dégâts infligés sont décrits
      dans la description de l'arme ou l'aptitude.
    </p>
    <p>
      Si une arme ou une capaité inflige des dégâts à plus d&#39;une créature au
      même moment, les dégâts sont lancés une seule fois pour toutes les
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
    <h4>Autre chose ?</h4>
    <p>
      La seule limite au jeu est votre imagination. Les précédentes actions
      résument les principales possibilités qui s&#39;offrent à votre héros lors
      d&#39;une scène de combat. Mais rien ne vous empêche de faire autre chose
      : tenter de faire rire votre adversaire, tenter de casser une fiole à sa
      ceinture, tout est possible. C&#39;est alors au MJ de déterminer les
      chances de réussite de votre action et de vous demander, s&#39;il le
      souhaite, un lancer de dés.
    </p>
    <h3 class="text-center">Les etats speciaux</h3>
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
      qui requiert la vue. Sa défense est réduite de 1.
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
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style></style>
