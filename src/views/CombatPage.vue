<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>{{ $route.params.id }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ $route.params.id }}</ion-title>
        </ion-toolbar>
      </ion-header>
      <h1>Avant une situation de conflit</h1>
      <h2>Initiative</h2>
      <p>
        Le MJ classe les combattants par ordre d&#39;Initiative, en commençant
        par celui qui a eu le résultat le plus élevé à son jet et en terminant
        par celui dont le résultat était le moins élevé. C&#39;est dans cet
        ordre, appelé ordre d&#39;initiative, que les combattants agiront à
        chaque round. L&#39;ordre d&#39;initiative reste le même d&#39;un round
        à l&#39;autre.
      </p>
      <p>
        En cas d&#39;égalité, s&#39;il s&#39;agit de créatures contrôlées par le
        MJ, ce dernier choisit quelle créature agira avant l&#39;autre. Si
        l&#39;égalité concerne les héros, c&#39;est aux joueurs de décider quel
        personnage agira le premier. Si un monstre et le personnage d&#39;un
        joueur se trouvent à égalité, le MJ peut décider de l&#39;ordre. Le MJ
        peut aussi décider que les personnages et monstres à égalité résolvent
        la situation par un nouveau jet, auquel cas la créature qui a le
        résultat le plus haut agira avant l&#39;autre.
      </p>
      <h2>Surprise ? Test de vigilance</h2>
      <p>
        Si aucun des deux camps ne cherche à être discret, ils se remarquent
        automatiquement. Sinon, Le MJ détermine qui est susceptible d&#39;être
        pris par surprise avec un <em>test de vigilance</em>. Le MJ compare les
        résultats des tests d&#39;agilité (Discrétion) de toutes les créatures
        qui se cachent avec un test d&#39;intelligence (Survie) de toutes les
        créatures qui appartiennent à l&#39;autre camp. Tout personnage ou
        monstre qui ne remarque pas une menace est surpris au début de la
        rencontre.
      </p>
      <p>
        Si vous êtes surpris, vous ne pouvez pas bouger ou accomplir
        d&#39;action lors de votre premier tour de combat, et vous ne pouvez pas
        non plus réagir jusqu&#39;à la fin de ce tour. Il est possible qu&#39;un
        seul membre d&#39;un groupe soit surpris et pas les autres.
      </p>
      <h1>Emplacement</h1>
      <p>
        L&#39;emplacement d&#39;une créature correspond à la surface qu&#39;elle
        contrôle lors d&#39;un combat et non à la surface qu&#39;elle occupe
        réellement. Par exemple, une créature de taille moyenne classique ne
        fait pas 1,50 mètre de large, mais elle contrôle une surface de 1,50
        mètre de côté.
      </p>
      <p>
        L&#39;emplacement occupé par une créature donne aussi la taille de
        l&#39;espace qu&#39;il lui faut pour combattre efficacement. C&#39;est
        pour cette raison qu&#39;il y a une limite au nombre de créatures qui
        peuvent en encercler une autre en combat. En imaginant un combat entre
        des créatures de taille moyenne, huit créatures seulement peuvent tenir
        dans un rayon de 1,50 mètre autour d&#39;une autre.
      </p>
      <p>
        Les créatures plus grandes occupent un emplacement plus important. Et le
        nombre maximum d&#39;entre elles qui permet d&#39;encercler en même
        temps une créature est donc plus réduit. Par exemple, si des grandes
        créatures veulent encercler une créature de taille moyenne ou plus
        petite, le chiffre maximum est alors de cinq. En revanche, une créature
        gigantesque peut être encerclée par vingt créatures de taille moyenne.
      </p>
      <h2>Gabarit des créatures</h2>
      <p>
        Chaque créature occupe une surface plus ou moins importante en fonction
        de sa taille. Le tableau des catégories de tailles qui suit indique la
        taille de la surface occupée et contrôlée en combat par une créature
        d&#39;une taille donnée.
      </p>
      <table>
        <thead>
          <tr>
            <th>Gabarit</th>
            <th>Espace occupé</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0</td>
            <td>Carré de 0,75 mètre de côté</td>
          </tr>
          <tr>
            <td>1 (norme)</td>
            <td>Carré de 1,50 mètres de côté</td>
          </tr>
          <tr>
            <td>2-3</td>
            <td>Carré de 3 mètres de côté</td>
          </tr>
          <tr>
            <td>4-5</td>
            <td>Carré de 4,50 mètres de côté</td>
          </tr>
          <tr>
            <td>6 et plus</td>
            <td>Carré de 6 mètres de côté</td>
          </tr>
          <tr>
            <td>----</td>
            <td>----</td>
          </tr>
        </tbody>
      </table>
      <h1>Votre tour</h1>
      <p>Pendant votre créneau d&#39;initiative, vous avez 3 possibilités :</p>
      <ul>
        <li>
          Effectuer une <strong>action</strong> : comme réaliser une attaque,
          lancer une Évocation.
        </li>
        <li>
          Effectuer une <strong>manoeuvre</strong> : comme vous déplacer ou vous
          mettre à couvert.
        </li>
        <li>
          Effectuer des <strong>broutilles</strong> : comme crier des phrases
          brèves, sortir un objet de votre ceinture, lâcher l&#39;objet que vous
          tenez.
        </li>
      </ul>
      <p>
        Vous pouvez décider de ne pas vous déplacer, ne pas agir, ou même de ne
        rien faire pendant votre tour. Si vous ne savez pas quoi faire pendant
        votre tour, vous pouvez envisager de choisir d&#39;esquiver ou de se
        tenir prêt, décrites dans les sections ci-dessous.
      </p>
      <p>
        Vous pouvez decider d&#39;échanger une action contre une manoeuvre, mais
        vous ne pouvez jamais excéder 2 manoeuvre par tour.
      </p>
      <p>
        En dehors de votre créneau d&#39;initiative, vous pouvez effectuer une
        réaction.
      </p>
      <h2>Broutilles</h2>
      <p>
        Pendant votre tour, vous pouvez faire de nombreuses choses qui ne vous
        demandent pas de vous déplacer ni d&#39;utiliser une action. Vous pouvez
        a priori effectuer
        <strong
          >autant de broutille que vous le souhaitez si le temps le
          permet</strong
        >.
      </p>
      <ul>
        <li>
          <p>
            Vous pouvez communiquer : dans la mesure du possible, par
            <strong>phrases brèves ou par gestes</strong>.
          </p>
        </li>
        <li>
          <p>
            Vous pouvez aussi librement
            <strong>interagir avec un objet</strong> ou un élément de
            l&#39;environnement, soit pendant votre déplacement, soit pendant
            votre action : Par exemple, vous pouvez profiter de votre mouvement
            vers un ennemi pour ouvrir une porte. Ou alors, vous pouvez dégainer
            votre arme pendant la même action que vous utilisez pour attaquer.
          </p>
        </li>
      </ul>
      <p>
        Néanmoins, si vous voulez
        <strong
          >interagir avec un second objet, alors vous devez utiliser une
          action</strong
        >. Par exemple, si vous souhaitez vous déplacer, ouvrir la porte et
        dégainer votre épée, alors votre tour de jeu sera terminé.
      </p>
      <p>
        Pour utiliser certains objets spéciaux, vous devrez toujours utiliser
        une action, conformément à ce qui est indiqué dans la description de ces
        objets.
      </p>
      <h2>Réaction</h2>
      <p>
        Certaines capacités spéciales, sorts ou situations permettent à votre
        personnage d&#39;accomplir une action spéciale appelée une réaction. Une
        réaction est une
        <strong
          >réponse instantanée déclenchée par un stimulus qui peut se produire
          pendant votre tour ou celui de quelqu&#39;un d&#39;autre</strong
        >. Le type de réaction le plus courant est l&#39;<strong
          >attaque d&#39;opportunité</strong
        >.
      </p>
      <h3>Attaque d&#39;opportunité</h3>
      <p>
        Au cœur d&#39;un combat, chacun reste à l&#39;affût d&#39;une chance de
        frapper un ennemi qui baisse sa garde parce qu&#39;il est en train de
        fuir ou de passer devant soi. Une telle attaque est appelée une attaque
        d&#39;opportunité.
      </p>
      <p>
        Vous pouvez porter une attaque d&#39;opportunité quand une créature
        hostile qui se trouve dans votre champ de vision se déplace hors de
        portée de votre allonge. Pour porter cette attaque d&#39;opportunité,
        vous utilisez votre réaction pour porter une attaque de corps-à-corps à
        cette créature. L&#39;attaque intervient juste avant que celle-ci ne se
        mette hors de votre portée.
      </p>
      <p>
        Vous pouvez éviter de provoquer une attaque d&#39;opportunité en
        utilisant l&#39;action se désengager.
      </p>
      <h2>Mouvement</h2>
      <p>
        Lors de votre tour, vous pouvez vous déplacer d&#39;une distance
        inférieure ou égale à votre vitesse. Dans les limites de votre vitesse,
        vous pouvez parcourir la distance que vous souhaitez pendant votre tour
        en suivant les règles présentées ici.
      </p>
      <p>
        Dans le cadre de votre mouvement, vous pouvez sauter, escalader et
        nager. Ces différents modes de déplacement peuvent être combinés avec la
        marche ou constituer l&#39;ensemble de votre déplacement. Quelle que
        soit la manière dont vous vous déplacez, vous devez déduire de votre
        vitesse la distance utilisée par chacun de vos modes de déplacement
        jusqu&#39;à ce que vous ayez épuisé votre jauge de déplacement ou que
        vous ayez décidé de vous arrêter.
      </p>
      <h3>Fragmenter votre mouvement</h3>
      <p>
        Pendant votre tour, vous pouvez fragmenter votre déplacement et utiliser
        une partie de votre déplacement avant votre action et le reste après
        celle-ci. Par exemple, si votre vitesse est de 9 mètres, vous pouvez
        vous déplacer de 3 mètres, faire une action, puis parcourir les 6 mètres
        restant.
      </p>
      <h3>Terrain difficile</h3>
      <p>
        Chaque mètre parcouru sur un terrain difficile coûte un mètre de
        déplacement supplémentaire.
        <strong>Votre vitesse est ainsi divisée par deux</strong>. Si plusieurs
        obstacles qui justifieraient en eux-mêmes de considérer un terrain comme
        difficile se cumulent sur un seul terrain (un escalier raide ET encombré
        de gravats), le coût du déplacement reste le même et ne se cumule pas.
        Votre vitesse reste divisée par deux, et non par trois ou quatre...
      </p>
      <h3>Être à terre</h3>
      <p>
        Il n&#39;est pas rare que des combattants se trouvent au sol, allongés
        par terre, qu&#39;ils aient été renversés ou qu&#39;ils se soient
        eux-mêmes jetés au sol. Dans le cadre du jeu, on dit qu&#39;ils sont à
        terre, un état décrit plus loin.
      </p>
      <p>
        Vous pouvez vous jeter au sol sans avoir à utiliser de votre
        déplacement.
        <strong
          >Vous relever vous demande plus d&#39;efforts et vous coûte votre
          mouvement</strong
        >. Quand vous <strong>rampez</strong>, chaque mètre parcouru vous coûte
        2 mètres supplémentaires.
        <strong>Votre vitesse de déplacement est donc divisée par trois</strong
        >. De plus, si vous rampez sur 1 mètre en terrain difficile, cela vous
        coûte en réalité 4 mètres de déplacement, votre vitesse est donc divisée
        par 4.
      </p>
      <h3>Se déplacer au milieux d&#39;autres créatures</h3>
      <p>
        Vous pouvez traverser l&#39;emplacement d&#39;une créature qui ne vous
        est pas hostile. En revanche,
        <strong>vous ne pouvez traverser</strong> l&#39;emplacement occupé par
        une <strong>créature hostile</strong> que si celle-ci fait
        <strong>deux tailles de plus ou de moins que vous</strong>.
        N&#39;oubliez pas que l&#39;emplacement occupé par une autre créature
        est considéré comme un terrain difficile.
      </p>
      <p>
        Qu&#39;une créature soit amie ou ennemie, vous ne pouvez pas
        volontairement vous arrêter sur l&#39;emplacement qu&#39;elle occupe.
      </p>
      <p>
        Si vous vous mettez hors de portée de la capacité d&#39;allonge
        d&#39;une créature pendant votre déplacement, vous provoquez une attaque
        d&#39;opportunité, ainsi qu&#39;expliqué plus loin dans ce chapitre.
      </p>
      <h3>Déplacement en vol</h3>
      <p>
        Les créatures volantes bénéficient d&#39;une grande mobilité. En
        revanche, elles doivent également composer avec le risque de tomber. Si
        une créature <strong>volante est jetée à terre</strong>, voit sa vitesse
        réduite à 0 ou se retrouve d&#39;une manière ou d&#39;une autre dans
        l&#39;<strong>incapacité de bouger</strong>, elle chute, à moins
        d&#39;être en mesure de faire du vol stationnaire ou d&#39;être
        maintenue dans les airs par évocation.
      </p>
      <h2>Actions en combat</h2>
      <p>
        Quand vous accomplissez une action lors de votre tour, vous avez le
        choix entre les actions présentées ci-dessous, une capacité ou, enfin,
        une action que vous improvisez. De nombreux monstres possèdent des
        actions qui leurs sont propres et qui sont présentées dans leur profil
        statistiques.
      </p>
      <p>
        Quand vous décrivez une action qui n&#39;est pas présentée dans les
        règles, c&#39;est au MJ de décider si vous pouvez accomplir cette action
        et si vous devez faire un jet de dés spécifique pour déterminer votre
        succès ou votre échec.
      </p>
      <h3>Aider</h3>
      <p>
        Vous pouvez apporter votre aide à une autre créature pour réaliser une
        tâche. Quand vous choisissez l&#39;action aider, la créature que vous
        aidez
        <strong
          >obtient un avantage, et un avantage supplémentaire par rang de
          maîtrise</strong
        >
        sur le prochain test de compétence qu&#39;elle fait dans le but
        d&#39;accomplir la tâche pour laquelle vous coopérez, mais seulement si
        elle fait ce test avant le début de votre prochain tour.
      </p>
      <p>
        Vous pouvez aussi aider une créature amicale qui veut attaquer une autre
        créature qui se trouve dans un rayon de 1,50 mètre de vous. Vous faites
        une feinte, tentez de distraire la cible ou participez d&#39;une manière
        ou d&#39;une autre afin de rendre l&#39;attaque de votre allié plus
        efficace. Si votre allié attaque la cible avant le début de votre
        prochain tour, il obtient un avantage sur son premier jet d&#39;attaque.
      </p>
      <h3>Attaquer</h3>
      <p>
        Que vous portiez une attaque avec une arme de corps-à-corps, une arme à
        distance ou que vous fassiez un jet d&#39;attaque dans le cadre
        d&#39;une Évocation, cette attaque se décompose ainsi :
      </p>
      <ol>
        <li>
          <p>
            Choisir une cible. Choisissez une cible qui se trouve à distance
            d&#39;attaque : une créature, un objet ou un lieu.
          </p>
        </li>
        <li>
          <p>Déterminer le nombre de dés à lancer avec la caractéristique.</p>
        </li>
        <li>
          <p>
            Déterminer le nombre de dés à Améliorer en fonction du rang de
            maîtrise dans la compétence.
          </p>
        </li>
        <li>
          <p>
            Le MJ détermine si la cible est à l&#39;abri et si vous bénéficiez
            d&#39;avantages ou subissez des désavantages par rapport à elle.
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
      <h4>Jets d&#39;attaque</h4>
      <p>
        Quand vous faites une attaque, votre jet d&#39;attaque permet de
        déterminer si vous touchez votre cible ou non. Pour faire un jet
        d&#39;attaque, Faites un test de compétence avec la compétence adaptée à
        l&#39;arme que vous utiliser : Corps-à-corps pour une arme de mêlée,
        Distance - légère pour une arme à distance à une main, etc.
      </p>
      <ul>
        <li>
          Pour les attaques aux Corps-à-corps : Le DD est établi par la défense
          au corps à corps de la créature. Il faut surpasser cette valeur pour
          toucher la cible.
        </li>
        <li>
          Pour les attaques a distance : Le DD dépend de la défense à distance,
          de la distance et de l&#39;exposition de la cible. Chaque arme possède
          dans ces caractéristiques une portée efficace, et une portée limite.
        </li>
      </ul>
      <table>
        <thead>
          <tr>
            <th>Porté</th>
            <th>Modificateur</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>------</td>
            <td><strong>Arme à distance légère</strong></td>
            <td><strong>Arme à distance lourde</strong></td>
          </tr>
          <tr>
            <td>Engagé</td>
            <td>+DD1</td>
            <td>+DD3</td>
          </tr>
          <tr>
            <td>&lt; Porté efficace</td>
            <td>+DD1</td>
            <td>+DD1</td>
          </tr>
          <tr>
            <td>&lt; Porté limite</td>
            <td>+DD3</td>
            <td>+DD2</td>
          </tr>
          <tr>
            <td>&gt; Porté limite</td>
            <td>+DD5</td>
            <td>+DD3</td>
          </tr>
        </tbody>
      </table>
      <p>
        Si la cible est à couvert, le DD augmente en fonction de la couverture
        comme expliqué plus loin dans ce chapitre.
      </p>
      <p>
        Le DD final à surpasser est donc donné par : DD(Portée) + DD (Défense) +
        DD (Couverture)
      </p>
      <h4>Attaquants et cibles invisibles</h4>
      <p>
        Les combattants essaient souvent d&#39;échapper à la vigilance de leurs
        ennemis en se cachant, en lançant un sort d&#39;invisibilité ou en se
        fondant dans les ténèbres.
      </p>
      <p>
        Quand vous attaquez une cible que vous ne pouvez pas voir, vous
        augmentez de +3 le DD pour toucher. Cependant, vous pouvez toujours
        utiliser une action de mouvement pour effectuer un test de perception,
        afin d&#39;estimer la position de la cible par le bruit ou par le
        contact qu&#39;elle a avec les petits objets à proximité. Chaque paire
        de succès réduit de 1 le DD, jusqu&#39;à un maximum de -3DD.
      </p>
      <p>
        Quand une créature ne peut pas vous voir, vous bénéficiez d&#39;un
        avantage quand vous faites un jet d&#39;attaque la ciblant. Si vous
        étiez caché (qu&#39;elle ne vous voit pas et ne vous entend pas) et que
        vous attaquez, quel que soit le résultat de votre attaque, votre
        position est immédiatement révélée au moment de la résolution de
        l&#39;attaque.
      </p>
      <h4>Attaque au corps-à-corps</h4>
      <p>
        La majorité des créatures possède une allonge de 1,50 mètre. Elles
        peuvent donc porter une attaque de corps-à-corps contre les cibles qui
        se trouvent dans un rayon de 1,50 mètre autour d&#39;elles. Certaines
        créatures, de plus grand gabarit, peuvent aller au-delà.
      </p>
      <p>
        Quand vous êtes au corps-à-corps, vous pouvez aussi porter une attaque à
        mains nues au lieu d&#39;utiliser une arme : un coup-de-poing, de pied,
        de tête ou un coup similaire (aucune de ces parties du corps n&#39;étant
        considérée comme une arme).
      </p>
      <h3>Combat à deux armes</h3>
      <p>
        Quand vous choisissez l&#39;action attaquer et que vous utilisez pour
        attaquer une arme de corps-à-corps légère que vous tenez dans une main,
        vous pouvez dépenser des avantages pour infliger également des dégâts
        avec votre deuxième arme. Le nombre d&#39;avantages nécessaire dépend de
        l&#39;arme utilisée.
      </p>
      <h2>Opposition en combat</h2>
      <p>
        Au cours d&#39;une bataille, certaines de vos prouesses ne valent que si
        elles sont supérieures à celles de votre ennemi.
      </p>
      <h3>Empoignade</h3>
      <p>
        La cible de votre empoignade ne doit pas faire plus d&#39;une taille de
        plus que vous et doit se trouver à portée de votre allonge à mains nues.
        Vous devez avoir au moins une main de libre pour tenter d&#39;empoigner
        la cible. Pour cela, vous faites un test d&#39;empoignade à la place
        d&#39;un jet d&#39;attaque. Il s&#39;agit d&#39;un test de vigueur
        (Athlétisme) ou d&#39;agilité (Coordination) opposé à un test de vigueur
        (Athlétisme) ou de Agilité (Coordinations) de la cible (celle-ci choisit
        la caractéristique qu&#39;elle préfère utiliser). Si vous réussissez,
        votre cible se trouve soumise à l&#39;état empoigné. La description de
        cet état indique les conditions qui y mettent fin. En ce qui vous
        concerne, vous pouvez relâcher votre cible quand vous le voulez et
        gratuitement (aucune action requise).
      </p>
      <ul>
        <li>
          <p>
            <strong>Échapper à une empoignade</strong> : Une créature empoignée
            peut utiliser une action pour tenter de s&#39;échapper. Elle doit
            pour cela réussir un test de vigueur (Athlétisme) ou d&#39;Agilité
            (Coordinations) en opposition à un test de vigueur (Athlétisme) ou
            d&#39;agilité (Coordination) que vous faites. Le choix de la
            compétence à utiliser dépend de comment vous avez réaliser
            l&#39;empoignade.
          </p>
        </li>
        <li>
          <p>
            <strong>Déplacer une créature empoignée</strong> : Quand vous vous
            déplacez, vous pouvez traîner ou porter la créature que vous avez
            empoignée, mais votre vitesse est divisée par deux, sauf si la
            créature fait au moins deux tailles de moins que vous.
          </p>
        </li>
      </ul>
      <h3>Bousculer une créature</h3>
      <p>
        La cible ne doit pas faire plus d&#39;une taille de plus que vous et
        doit se trouver à porté de votre allonge. Au lieu de faire un jet
        d&#39;attaque, vous faites un test de vigueur (Athlétisme) opposé à un
        test de vigueur (Athlétisme) ou à un test ou d&#39;agilité
        (Coordinations) de la cible (celle-ci choisit la compétence qu&#39;elle
        préfère utiliser). Si vous remportez la confrontation, vous avez le
        choix entre
        <strong
          >faire tomber votre cible à terre ou la repousser d&#39;1,50 mètre
          loin de vous</strong
        >.
      </p>
      <h3>A couvert</h3>
      <p>
        Les murs, les arbres, les créatures, et d&#39;autres obstacles
        constituent pendant un combat autant d&#39;abris potentiels qui rendent
        une cible plus difficile à blesser. Une cible ne bénéficie d&#39;un abri
        que si une attaque ou un autre effet provient depuis l&#39;autre côté de
        ce qui sert d&#39;abri.
      </p>
      <p>
        <strong
          >En fonction de la qualité de l&#39;abri, le MJ peut décider
          d&#39;augmenter DD pour toucher</strong
        >. Par exemple, l&#39;abris d&#39;un bouclier de fortune donne +1DD au
        jet d&#39;attaque a distance qui vise le porteur.
      </p>
      <p>
        Une cible qui bénéficie d&#39;un abri total ne peut pas être ciblée
        directement par des attaques à distances ou des évocations. Cela dit,
        elle peut être affectée par certains sorts qui ont une zone d&#39;effet.
      </p>
      <h3>Se désengager</h3>
      <p>
        Si vous choisissez l&#39;action se désengager, vous pouvez vous déplacer
        sans risquer de créer des attaques d&#39;opportunités jusqu&#39;à la fin
        du tour.
      </p>
      <h3>Chercher</h3>
      <p>
        Quand vous choisissez l&#39;action chercher, toute votre attention est
        tournée vers l&#39;objet de votre recherche. En fonction de ce que vous
        cherchez, le MJ peut vous demander de faire un test d&#39;intelligence
        (Perception).
      </p>
      <h3>Esquiver</h3>
      <p>
        Quand vous choisissez l&#39;action esquiver, votre unique objectif est
        d&#39;éviter les attaques. Jusqu&#39;au début de votre tour suivant,
        vous
        <strong
          >augmentez de 1 votre défense au corps à corps et à distance</strong
        >. Vous perdez les bénéfices de cette action si vous êtes neutralisé ou
        si votre vitesse est réduite à 0.
      </p>
      <h3>Se tenir prêt</h3>
      <p>
        Il peut vous arriver de vouloir surprendre un ennemi ou attendre une
        configuration particulière avant d&#39;agir. Pour cela, vous devez
        choisir l&#39;action se tenir prêt pendant votre tour. Ainsi, vous
        décalez votre action
        <strong
          >jusqu&#39;à ce que l&#39;événement attendu survient. Sinon, vous
          jouez à la fin du tour de jeu</strong
        >.
      </p>
      <p>
        Vous pouvez également utiliser votre mouvement pendant votre créneau
        d&#39;initiative, et décider de Se tenir prêt pour uniquement retarder
        votre action.
      </p>
      <h3>Utiliser une capacité</h3>
      <p>
        Le descriptif de la capacité indique si son lancement nécessite
        d&#39;utiliser une action, une réaction, une broutille ou un mouvement,
        ou doit être préparé pendant plusieurs minutes ou heures. Tout est
        indiqué dans la description de la capacité.
      </p>
      <h3>Se cacher</h3>
      <p>
        Quand vous choisissez l&#39;action se cacher, vous devez faire un test
        d&#39;agilité (Discrétion) pour tenter de vous cacher en suivant les
        règles appropriées. Si vous réussissez, vous gagnez certains des
        bénéfices associés à cet état, tels qu&#39;ils sont décrits dans la
        section Attaquants et cibles invisibles.
      </p>
      <h1>Dégâts</h1>
      <p>
        Pour chaque arme, sort ou capacité offensive de monstre, les dégâts
        infligés sont décrits dans la rubrique correspondante. Les capacités
        spéciales et d&#39;autres facteurs peuvent infliger des dégâts bonus. Il
        est également possible qu&#39;un malus vous fasse infliger un nombre de
        dégâts égal à 0, mais vous ne pouvez jamais infliger de dégâts négatifs.
      </p>
      <p>
        Si une évocation ou un effet inflige des dégâts à plus d&#39;une
        créature au même moment, les dégâts sont lancés une seule fois pour
        toutes les créatures.
      </p>
      <h2>Assommer une créature</h2>
      <p>
        Parfois, un attaquant souhaite neutraliser un ennemi plutôt que le tuer.
        Quand il réussit à faire tomber cette créature à 0 point de vie suite à
        une attaque de corps-à-corps, il a la possibilité de l&#39;assommer.
        L&#39;attaquant peut faire ce choix avant d&#39;effectuer son jet
        d&#39;attaque. La créature est inconsciente et est considérée comme
        stabilisée.
      </p>
      <h1>Autre chose ?</h1>
      <p>
        La seule limite au jeu est votre imagination. Les précédentes actions
        résument les principales possibilités qui s&#39;offrent à votre héros
        lors d&#39;une scène de combat. Mais rien ne vous empêche de faire autre
        chose : tenter de faire rire votre adversaire, tenter de casser une
        fiole à sa ceinture, tout est possible. C&#39;est alors au MJ de
        déterminer les chances de réussite de votre action et de vous demander,
        s&#39;il le souhaite, un lancer de dés.
      </p>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";

export default {
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
  },
};
</script>

<style></style>
