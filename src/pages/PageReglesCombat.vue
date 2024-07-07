<template>
  <q-page padding>
    <!-- TODO : Préparer des règles sur le combats à deux armes-->
    <h2 class="text-center">Combats</h2>
    <h3>Déroulement d'un combat</h3>
    <p>
      Les tours de jeu représente des moments de quelques secondes pendant
      lesquelles chaque acteur de la rencontre essaye de tirer parti de la
      situation.
    </p>
    <h4>Surprise</h4>
    <p>
      Si aucun des deux camps ne cherche à être discret, ils se remarquent
      automatiquement. Sinon, test de discrétion de groupe des attaquants opposé
      test de vigilance de chaque membres de l'autre groupe. Les membres qui ne
      réussissent pas ce test sont surpris.
    </p>
    <p>
      Si un belligérant est surpris, il ne pouvez pas bouger ou accomplir
      d&#39;action lors du premier tour de combat, et il ne peut pas non plus
      réagir jusqu&#39;à la fin de ce tour.
    </p>

    <h4>Initiative</h4>
    <p>
      <strong>Jet d'initiative :</strong> Lancez autant de dés que votre valeur
      d'initiative. Le belligérant avec le plus de succès résoudra ses actions
      en premier dans la phase de résolution, puis le second avec le plus de
      succès... Etc. Si deux personnages ont le même nombre de succès, on
      compare alors leurs avantages net. S'il subsiste une égalité, c'est au
      joueur de commencer, et au PNJ de jouer en suite selon l'ordre convenu.
    </p>
    <p>
      Chaque personnages et créatures impliqués dans la rencontre ont tous par
      défaut <strong>une action</strong>, <strong>une manœuvre</strong> et
      <strong>une réaction</strong>.
    </p>

    <h4>Les déplacements</h4>
    <p>
      Chaque personnage qui décide d'effectuer un déplacement se déplace à sa
      vitesse au prix d'une action. Si un personnage choisi de se déplacer alors
      qu'il sort de la zone de contrôle d'un adversaire, il déclenche une
      attaque d'opportunité de la part de l'adversaire.
    </p>
    <h4>Résoudre les Attaques</h4>
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
          Lancez les dés et calculer le résultat net. Si il reste au moins un
          succès net, l'attaque est réussie. En fonction de l'aptitude ou de
          l'arme utilisée, certains effet supplémentaires peuvent survenir avec
          les avantages/échecs/désavantages/désastres net.
        </p>
      </li>
    </ol>
    <h4>Les réactions</h4>
    <p>
      Les réactions peuvent être déclenchées à tout moment par les belligérant
      <strong>entre leurs tour de jeu</strong>.La possibilité de jouer sa
      réaction est conservée jusqu'à ce qu'elle soit résolue, ou que le
      personnage effectue un nouveau tour de jeu
    </p>

    <h3 id="action">Actions et réactions</h3>
    <div class="row">
      <div class="col-md-6 col-sm-12 q-px-md">
        <div class="row q-my-md">
          <div class="col text-center">
            <q-icon name="circle" color="primary" size="xl"></q-icon>
            <q-icon name="circle" color="primary" size="xl"></q-icon>
            <q-icon name="circle" color="primary" size="xl"></q-icon>
          </div>
        </div>
        <div class="row">
          <p class="col text-justify">
            Pendant un combat ou une situation de stress, les personnages ont
            par défaut <strong>3 points d'action</strong>. Un point représente
            un laps de temps très court (environ 1 seconde) pendant lequel un
            personnage peut agir. Certaines de ses actions peuvent consommer un
            ou plusieurs points d'action en fonction de leur longueur ou de leur
            complexité. Il est possible d'effectuer plusieurs actions simples
            durant le même laps de temps (comme par exemple se déplacer et
            lâcher un objet en mains) sans que cela ne nécessite de dépenser
            plusieurs points d'action (à l’appréciation du MJ).
          </p>
        </div>
      </div>
      <div class="col-md-6 col-sm-12 q-px-md">
        <div class="row q-my-md">
          <q-icon name="square" color="primary" size="xl" class="col"></q-icon>
        </div>
        <div class="row">
          <p class="col text-justify">
            Les réactions sont les moments où un personnage agit en réponse à
            l'action d'un autre personnage. Les réactions d'un personnage ne
            sont par définition pas jouées pendant le tour de jeu de ce
            personnage. En fonction de l'action souhaitée, la réaction se résous
            juste avant le tour d'un autre personnage, ou immédiatement à la fin
            de celui-ci. Par défaut, un personnage est capable d'effectuer
            <strong>une reaction</strong> par tour.
          </p>
        </div>
      </div>
    </div>

    <div class="row q-my-xl">
      <q-list class="col-md-4 col-sm-12" padding bordered>
        <q-item>
          <q-item-section>
            <q-item-label header>Charger un adversaire</q-item-label>
            <q-item-label caption
              >Se déplacer et attaquer avec la force de la course. Un test
              d'athlétisme opposé a la cible est nécessaire pour rattraper une
              cible qui décide fuir au même tour</q-item-label
            >
          </q-item-section>
          <q-item-section side top>
            <div>
              <q-icon name="circle" size="xs"></q-icon>
              <q-icon name="circle" size="xs"></q-icon>
              <q-icon name="circle" size="xs"></q-icon>
            </div>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section>
            <q-item-label header>Bousculer / Empoigner </q-item-label>
            <q-item-label caption
              >Vous tentez d'entraver un adversaire, ou de le mettre à terre.
              Vous devez réussir un test en opposition avec votre adversaire. La
              compétence utilisée dépendra de la manière dont l'action est
              réalisée et comment l'adversaire réagit. Lors d'une tentative
              d'entrave, si vous obtenez plus de succès que le score de la
              cible, elle est immobilisée, sinon elle est
              entravée.</q-item-label
            >
          </q-item-section>
          <q-item-section side top>
            <q-item-label overline>
              <div>
                <q-icon name="circle" size="xs"></q-icon>
                <q-icon name="circle" size="xs"></q-icon>
                <q-icon name="circle" size="xs"></q-icon>
              </div>
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section>
            <q-item-label header>Se cacher</q-item-label>
            <q-item-label caption
              >Quand vous choisissez l&#39;action se cacher, vous devez faire un
              test d&#39;agilité (Discrétion) de DD égale à la sommes des scores
              de vigilance des adversaires à proximité.</q-item-label
            >
          </q-item-section>
          <q-item-section side top>
            <div>
              <q-icon name="circle" size="xs"></q-icon>
              <q-icon name="circle" size="xs"></q-icon>
              <q-icon name="circle" size="xs"></q-icon>
            </div>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section>
            <q-item-label header>Fouille approfondie</q-item-label>
            <q-item-label caption
              >Fouiller jusqu'à l'équivalent d'un déplacement ou dans son
              sac</q-item-label
            >
          </q-item-section>
          <q-item-section side top>
            <div>
              <q-icon name="circle" size="xs"></q-icon>
              <q-icon name="circle" size="xs"></q-icon>
              <q-icon name="circle" size="xs"></q-icon>
            </div>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section>
            <q-item-label header>Autre chose ?</q-item-label>
            <q-item-label caption
              >La seule limite au jeu est votre imagination. Les précédentes
              actions résument les principales possibilités qui s&#39;offrent à
              votre héros lors d&#39;une scène de combat. Mais rien ne vous
              empêche de faire autre chose : tenter de faire rire votre
              adversaire, tenter de casser une fiole à sa ceinture, tout est
              possible. C&#39;est alors au MJ de déterminer les chances de
              réussite de votre action et de vous demander, s&#39;il le
              souhaite, un lancer de dés.</q-item-label
            >
          </q-item-section>
          <q-item-section side top>
            <div>
              <q-icon name="circle" size="xs"></q-icon>
              <q-icon name="add" size="xs"></q-icon>
            </div>
          </q-item-section>
        </q-item>
      </q-list>
      <q-list class="col-md-4 col-sm-12" padding bordered>
        <q-item>
          <q-item-section>
            <q-item-label header>Attaquer</q-item-label>
            <q-item-label caption
              >Effectuer un jet d'attaque avec l'arme en main.</q-item-label
            >
          </q-item-section>
          <q-item-section side top>
            <div>
              <q-icon name="circle" size="xs"></q-icon>
              <q-icon name="circle" size="xs"></q-icon>
            </div>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section>
            <q-item-label header>Utiliser une aptitude</q-item-label>
            <q-item-label caption
              >Le descriptif de l'aptitude indique si son lancement nécessite
              d&#39;utiliser une action, ou doit être préparé pendant plusieurs
              minutes ou heures. Leurs effets sont indiqué dans la description
              de l'aptitude.</q-item-label
            >
          </q-item-section>
          <q-item-section side top>
            <div>
              <q-icon name="circle" size="xs"></q-icon>
              <q-icon name="circle" size="xs"></q-icon>
            </div>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section>
            <q-item-label header>Recharger un équipement</q-item-label>
            <q-item-label caption
              >Utiliser une cellule <strong>à portée de main</strong> pour
              recharger l'arme en main.</q-item-label
            >
          </q-item-section>
          <q-item-section side top>
            <div>
              <q-icon name="circle" size="xs"></q-icon>
              <q-icon name="circle" size="xs"></q-icon>
            </div>
          </q-item-section>
        </q-item>
        <q-item
          ><q-item-section>
            <q-item-label header
              >Utiliser un objet à porté de main</q-item-label
            >
            <q-item-label caption
              >Utiliser un consommable à usage rapide, actionner un serrure
              électronique...</q-item-label
            >
          </q-item-section>
          <q-item-section side top>
            <div>
              <q-icon name="circle" size="xs"></q-icon>
              <q-icon name="circle" size="xs"></q-icon>
            </div>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>
            <q-item-label header>Fouiller a son emplacement</q-item-label>
            <q-item-label caption
              >Jeter un coup d'œil rapide autour de vous, ou récupérer un objet
              dans une sacoche ou a la ceinture.</q-item-label
            >
          </q-item-section>
          <q-item-section side top>
            <div>
              <q-icon name="circle" size="xs"></q-icon>
              <q-icon name="circle" size="xs"></q-icon>
            </div> </q-item-section
        ></q-item>
        <q-item>
          <q-item-section>
            <q-item-label header>Stabiliser</q-item-label>
            <q-item-label caption
              >Donner les premiers soins à une créature à terre a
              portée</q-item-label
            >
          </q-item-section>
          <q-item-section side top>
            <div>
              <q-icon name="circle" size="xs"></q-icon>
              <q-icon name="circle" size="xs"></q-icon>
            </div>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section>
            <q-item-label header>Utiliser une compétence</q-item-label>
            <q-item-label caption
              >La plupart des actions qui requirent une concentration et un
              savoir faire prennent l'intégralité du tour pour être résolue,
              parfois plus, à la discrétion du MJ. Elles font également l'objet
              d'un test de compétence.</q-item-label
            >
          </q-item-section>
          <q-item-section side top>
            <div>
              <q-icon name="circle" size="xs"></q-icon>
              <q-icon name="circle" size="xs"></q-icon>
            </div>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section>
            <q-item-label header>Esquiver</q-item-label>
            <q-item-label caption
              >Quand vous choisissez l&#39;action esquiver, votre unique
              objectif est d&#39;éviter les attaques. Jusqu&#39;au début de
              votre tour suivant, vous
              <strong
                >augmentez de 1 votre score de {{ ATTRIBUTS.REFLEXES }}</strong
              >. Vous perdez les bénéfices de cette action si vous êtes
              immobilisé, empoigné, neutralisé ou inconscient.
            </q-item-label>
          </q-item-section>
          <q-item-section side top>
            <div>
              <q-icon name="circle" size="xs"></q-icon>
              <q-icon name="circle" size="xs"></q-icon>
            </div>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section>
            <q-item-label header>Se tenir prêt</q-item-label>
            <q-item-label caption
              >Vous n'effectuez pas d'action à votre tour de jeux. Vous
              bénéficiez d'une réaction supplémentaire. Elle s'estompe au début
              de votre prochain tour.
            </q-item-label>
          </q-item-section>
          <q-item-section side top>
            <div>
              <q-icon name="circle" size="xs"></q-icon>
              <q-icon name="circle" size="xs"></q-icon>
            </div>
          </q-item-section>
        </q-item>
      </q-list>

      <q-list class="col-md-4 col-sm-12" padding bordered>
        <q-item>
          <q-item-section>
            <q-item-label header> Se déplacer / Se relever</q-item-label>
            <q-item-label caption
              >Parcourir une distance égale a votre vitesse de mouvement. Se
              relever quand on a été mis terre</q-item-label
            >
          </q-item-section>
          <q-item-section side top>
            <q-icon name="circle" size="xs"></q-icon>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>
            <q-item-label header
              >Se mettre a couvert / Se mettre en joue</q-item-label
            >
            <q-item-label caption
              >Sortir de sa couverture pour permettre une attaque d'opportunité
              avec une arme a distance en mains, ou au contraire se mettre à
              couvert pour éviter de provoquer des attaques à distance. Cette
              manœuvre peut être effectuée a la fin d'un mouvement
            </q-item-label>
          </q-item-section>
          <q-item-section side top>
            <q-icon name="circle" size="xs"></q-icon>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>
            <q-item-label header>Se désengager</q-item-label>
            <q-item-label caption
              >Se déplacer de 1m sans provoquer d'attaques d'opportunités au
              corps à corps par les ennemis engagés avec vous.
            </q-item-label>
          </q-item-section>
          <q-item-section side top>
            <q-icon name="circle" size="xs"></q-icon>
          </q-item-section>
        </q-item>
        <q-separator margin padding inset></q-separator>
        <q-item>
          <q-item-section>
            <q-item-label header>Attaque d’opportunité: Frappe</q-item-label>
            <q-item-label caption
              >Attaquer un adversaire, engagé au corps à corps avec vous, qui
              tente de s'enfui sans ce désengager.</q-item-label
            >
          </q-item-section>
          <q-item-section side top>
            <q-icon name="square" size="xs"></q-icon>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>
            <q-item-label header>Attaque d’opportunité: Tir</q-item-label>
            <q-item-label caption
              >Attaquer un adversaire qui se déplace ou qui sort de sa
              couverture avec votre arme à distance alors que vous êtes en joue
              et à portée.</q-item-label
            >
          </q-item-section>
          <q-item-section side top>
            <q-icon name="square" size="xs"></q-icon>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>
            <q-item-label header>Changer d'action</q-item-label>
            <q-item-label caption
              >Dans les cas ou un belligérant effectue un mauvais jet
              d'initiative, il peut se retrouver dans une situation où il
              préfère s'interrompre : il n'effectue pas l'action qu'il avait
              planifié, et
              <strong
                >décide d'effectuer une autre action. Pour illustrer ce
                changement, il utilise sa réaction</strong
              ></q-item-label
            >
          </q-item-section>
          <q-item-section side top>
            <q-icon name="square" size="xs"></q-icon>
          </q-item-section>
        </q-item>
      </q-list>
    </div>

    <h3 id="jet">Les jets d'attaques</h3>

    <h4>Attaques au corps-à-corps</h4>
    <p>Dé positif : compétence + caractéristique</p>
    <p>Dé négatif : {{ ATTRIBUTS.REFLEXES }} + équipement</p>

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

    <h4>Attaques à distance</h4>

    <p>Dé positif : compétence + caractéristique</p>
    <p>Dé négatif : DD = 2 + couverture + équipement</p>
    <p>
      <strong>Couverture </strong> : En fonction de la qualité de l&#39;abri, le
      MJ peut décider d'ajouter entre 1 et 3 niveau au DD sur le jet d'attaque
      de l'assaillant, voir de rendre impossible toute attaque à distance si la
      couverture est totale et empêche au projectile d'atteindre sa cible.
    </p>
    <p>
      Les armes à distance ont dans leurs caractéristiques une valeur de portée
      efficace. Au delà de cette portée, doubler le DD. Une attaque sur une
      cible au delà de deux fois la portée efficace rate automatiquement.
    </p>

    <h4>Jet de sauvegarde</h4>
    <p>
      Lorsqu'il s'agit d’éviter un piège, un effets naturelle ou certaine
      aptitude, les personnages devront effectuer des jet de sauvegarde. Il
      s'agit généralement de lancer un pool de dé positif constitué d'autant de
      dés que la valeur de
      <strong>Vigueur, Agilité, Intelligence ou Charisme</strong> en fonction de
      la situation.
    </p>
    <h3 id="degat">Dégâts</h3>
    <p>
      Pour chaque arme ou capacité offensive, les dégâts infligés sont décrits
      dans la description de l'arme ou de l'aptitude.
    </p>
    <p>
      Si une arme ou une aptitude inflige des dégâts à plus d&#39;une créature
      au même moment, les dégâts sont lancés une seule fois pour toutes les
      créatures.
    </p>
    <h4>Assommer une créature</h4>
    <p>
      Parfois, un attaquant souhaite neutraliser un ennemi plutôt que le tuer.
      Quand il réussit à faire tomber cette créature à 0 point de vie suite à
      une attaque de corps-à-corps, il a la possibilité de l&#39;assommer.
      L&#39;attaquant doit faire ce choix avant d&#39;effectuer son jet
      d&#39;attaque. La créature est inconsciente et n'a pas besoin d'être
      stabilisée.
    </p>
    <h3 id="etat">Les états spéciaux</h3>

    <div class="row q-col-gutter-sm justify-center items-stretch">
      <q-item class="col-12 col-sm-4 col-md-3">
        <q-item-section>
          <q-item-label header>À terre</q-item-label>
          <q-item-label
            >La créature subit 2 dés de handicaps lors de ses attaques au corps
            à corps et ses jets de défense. La creature bénéficie en revanche
            d'un abris partiel contre les attaques à distance.
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-item class="col-12 col-sm-4 col-md-3">
        <q-item-section>
          <q-item-label header>Assourdi</q-item-label>
          <q-item-label
            >Une créature assourdie n&#39;entend plus rien et rate
            automatiquement tous les tests faisant intervenir des capacités
            auditives.
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-item class="col-12 col-sm-4 col-md-3">
        <q-item-section>
          <q-item-label header>Aveuglé</q-item-label>
          <q-item-label
            >Une créature aveuglée ne voit plus rien et rate automatiquement
            tout test qui requiert la vue. Elle subit 3 dés de handicap sur ses
            jet d'attaques et de défense.
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-item class="col-12 col-sm-4 col-md-3">
        <q-item-section>
          <q-item-label header>Entravée</q-item-label>
          <q-item-label
            >La vitesse de déplacement de la creature est réduite a 0. Elle
            subit 1 dé de handicap sur ses jets de défense.
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-item class="col-12 col-sm-4 col-md-3">
        <q-item-section>
          <q-item-label header>Étourdi</q-item-label>
          <q-item-label
            >Une creature étourdie ne peut plus utiliser de réaction.
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-item class="col-12 col-sm-4 col-md-3">
        <q-item-section>
          <q-item-label header>Empoigné</q-item-label>
          <q-item-label
            >Une créature empoignée est entravée, mais elle peut utiliser une
            action pour tenter de s&#39;échapper. Elle doit pour cela réussir un
            test de vigueur (Athlétisme) ou d&#39;Agilité (Coordinations) en
            opposition à un test de vigueur (Athlétisme) ou d&#39;agilité
            (Coordination) de celui qui l'empoigne. Le choix de la compétence à
            utiliser dépend de comment l'empoignade a été réalisée.
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-item class="col-12 col-sm-4 col-md-3">
        <q-item-section>
          <q-item-label header>Neutralisé</q-item-label>
          <q-item-label
            >Une créature neutralisée est incapable d&#39;effectuer d'action ou
            une réaction, et sa vitesse est réduite a 0. Sa valeur de réflexes
            est réduite à 0.
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-item class="col-12 col-sm-4 col-md-3">
        <q-item-section>
          <q-item-label header>Inconscient</q-item-label>
          <q-item-label
            >La creature perd connaissance. Elle est incapable d&#39;effectuer
            d'action ou une réaction, et sa vitesse est réduite a 0. Sa valeur
            de réflexes est réduite à 0.
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-item class="col-12 col-sm-4 col-md-3">
        <q-item-section>
          <q-item-label header>Terrorisé</q-item-label>
          <q-item-label
            >Une créature terrorisée subit un dé de handicap sur tout ses tests
            et jet d'attaques tant que la source de sa frayeur se trouve dans
            son champ de vision. La créature est incapable de se rapprocher de
            la source de sa frayeur de son plein gré.
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-item class="col-12 col-sm-4 col-md-3">
        <q-item-section>
          <q-item-label header>Surpris</q-item-label>
          <q-item-label
            >Une créature surprise ne peut entreprendre ni action ni réaction
          </q-item-label>
        </q-item-section>
      </q-item>
    </div>
  </q-page>
</template>

<script lang="ts">
import { AttributsName } from "src/model/Attribut";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      ATTRIBUTS: AttributsName,
    };
  },
});
</script>

<style></style>
