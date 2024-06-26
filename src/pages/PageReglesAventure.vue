<template>
  <q-page padding>
    <h2 class="text-center">Aventure</h2>
    <h3>Écoulement du temps</h3>
    <p>
      Le MJ peut utiliser une échelle de temps différente en fonction des
      situations.
    </p>
    <p>
      Lorsque certaines phase implique des actions plus longues, comme
      l&#39;arrivée dans une ville et la recherche d&#39;un endroit ou échanger
      des objets, il est plus pertinent d&#39;écouler les tour a l&#39;échelle
      de l&#39;heure.
    </p>
    <p>
      Pour les longs voyages, il convient d&#39;utiliser une échelle en jours.
      L&#39;échelle de temps sera brusquement rétablie à l&#39;échelle de la
      minute si le groupe est attaqué ou fait face a un obstacle.
    </p>
    <p>
      <strong>Dans le cadre des combats</strong> et d&#39;autres situations de
      jeu où l&#39;action se déroule très vite et où chaque instant peut être
      crucial, le jeu utilise un système de rounds,
      <strong
        >le round étant une unité de temps qui dure environ 6 secondes</strong
      >.
    </p>
    <h3>Déplacement</h3>
    <p>
      Il est parfois vital de connaître exactement le temps nécessaire pour
      aller d&#39;un point à un autre, que ce soit en jours, en heures ou en
      minutes. La règle qui permet de déterminer ce temps de trajet dépend de
      deux facteurs : la vitesse et le rythme de déplacement des créatures, et
      le type terrain parcouru.
    </p>
    <h4>Vitesse</h4>
    <p>
      Chaque personnage ou monstre est caractérisé par une vitesse qui
      correspond à la
      <strong
        >distance que ce personnage ou monstre peut parcourir en 1 round</strong
      >. Ce nombre correspond à un mouvement rapide et volontaire au cœur
      d&#39;une situation dangereuse.
    </p>
    <p>
      Les règles suivantes permettent de déterminer la distance que peut
      parcourir un personnage ou un monstre en une minute, une heure ou une
      journée.
    </p>
    <h4>Rythme de déplacement</h4>
    <p>
      Un groupe de personnages a le choix entre plusieurs rythmes de déplacement
      quand il voyage : normal, rapide ou lent. Une marche rapide implique que
      les personnages sont moins attentifs à ce qui les entoure, tandis
      qu&#39;une marche lente leur permet de se déplacer plus furtivement et
      d&#39;étudier un endroit avec plus d&#39;attention. Les chiffres indiqués
      dans le tableau partent du principe que les personnages marchent
      <strong>8 heures par jour</strong>. Ils peuvent dépasser cette durée, mais
      risquent alors l&#39;épuisement.
    </p>
    <table>
      <thead>
        <tr>
          <th>Rythme</th>
          <th></th>
          <th></th>
          <th></th>
          <th>Effet</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>------</td>
          <td><strong>Minute</strong></td>
          <td><strong>Heure</strong></td>
          <td><strong>Jour</strong></td>
          <td>------</td>
        </tr>
        <tr>
          <td><strong>Rapide</strong></td>
          <td>120 mètres</td>
          <td>6 kilomètres</td>
          <td>45 kilomètres</td>
          <td>handicap sur les tests de vigilance</td>
        </tr>
        <tr>
          <td><strong>Normal</strong></td>
          <td>90 mètres</td>
          <td>4,5 kilomètres</td>
          <td>36 kilomètres</td>
          <td></td>
        </tr>
        <tr>
          <td><strong>Lent</strong></td>
          <td>60 mètres</td>
          <td>3 kilomètres</td>
          <td>27 kilomètres</td>
          <td>Possibilité d&#39;utiliser la Discrétion</td>
        </tr>
        <tr>
          <td>------</td>
          <td>----------</td>
          <td>---------</td>
          <td>--------</td>
          <td>------</td>
        </tr>
      </tbody>
    </table>
    <h4>Terrain difficile</h4>
    <p>
      La distance parcourue donnée dans le tableau des rythmes de déplacement a
      été calculée en partant du principe que les personnages se déplaçaient sur
      des terrains relativement normaux et plats : routes, plaines, couloirs de
      donjon dégagés. Mais les aventuriers se retrouvent souvent confrontés à
      des forêts denses, des marécages, des ruines encombrés de gravats, des
      montagnes escarpées et des plaines gelées. Ces terrains sont tous
      considérés comme difficiles.
    </p>
    <p>
      <strong
        >Sur un terrain difficile, vous vous déplacez à la moitié de votre
        vitesse</strong
      >
      (parcourir un mètre vous coûte deux mètres de vitesse), donc vous ne
      pouvez parcourir que la moitié de la distance normale en une minute, une
      heure ou un jour.
    </p>
    <h4>Types de mouvement spéciaux</h4>
    <p>
      Dans des souterrains où le danger rôde à chaque pas, en pleine montagne ou
      en territoire ennemi, la plupart du temps, les aventuriers ne se
      contentent pas de marcher tranquillement. Ils doivent escalader, ramper,
      nager ou sauter pour atteindre leur destination.
    </p>
    <h3>Escalader, nager et ramper</h3>
    <p>
      Quand vous escaladez ou que vous nagez, chaque mètre parcouru vous coûte 1
      mètre supplémentaire (et 2 mètres s&#39;il s&#39;agit d&#39;un terrain
      difficile). Le MJ peut choisir, quand vous tentez d&#39;escalader une
      surface verticale et glissante, ou qui ne présente que peu de prises, de
      vous faire faire un test d&#39;agilité (Athlétisme). De la même manière,
      si vous devez vous déplacer dans des eaux agitées, vous aurez peut-être à
      effectuer un test de vigueur (Athlétisme).
    </p>
    <h3>Sauter</h3>
    <p>
      Votre Vigueur détermine la longueur que vous pouvez parcourir en sautant.
    </p>
    <ul>
      <li>
        <strong><em>Saut en longueur</em></strong> : Quand vous faites un saut
        en longueur, à condition de prendre au moins 3 mètres d&#39;élan au sol
        immédiatement avant de sauter, vous parcourez en mettre votre valeur de
        Vigueur. Quand vous faites un saut en longueur sans élan, vous ne pouvez
        parcourir que la moitié de cette distance. Dans tous les cas, chaque
        mètre parcouru en saut réduit d&#39;autant votre déplacement.
      </li>
    </ul>
    <p>
      Quand vous vous trouvez sur un terrain difficile, vous devez réussir un
      test d&#39;agilité (Coordination) pour retomber sur vos pieds. Sinon, vous
      tombez à terre.
    </p>
    <ul>
      <li>
        <strong><em>Saut en hauteur</em></strong> : Quand vous faites un saut en
        hauteur, vous sautez dans les airs d&#39;un nombre de mètres égal à 1 +
        0,1 × votre Vigueur, à condition de prendre au moins 3 mètres d&#39;élan
        au sol immédiatement avant de sauter. Quand vous faites un saut en
        hauteur sans élan, vous ne pouvez sauter que la moitié de la hauteur
        avec élan. Dans tous les cas, chaque mètre parcouru en hauteur réduit
        d&#39;autant votre déplacement.
      </li>
    </ul>
    <h3>L&#39;environnement</h3>
    <p>
      Par définition, l&#39;aventure rime avec l&#39;exploration d&#39;endroits
      dangereux et mystérieux. Les règles présentées dans cette section traitent
      des principales manières dont les aventuriers interagissent avec leur
      environnement dans ce genre de situations très particulières.
    </p>
    <h4>Chute</h4>
    <p>
      Pour un aventurier, la chute constitue un des risques les plus courants.
      Suite à une chute, une créature subit
      <strong
        >1d6 dégâts contondants pour chaque tranche de 3 mètres de chute,
        jusqu&#39;à un maximum de 10d6</strong
      >. À moins qu&#39;elle n&#39;ait réussi à éviter de subir les dégâts
      occasionnés par la chute, la créature termine à terre.
    </p>
    <h4>Asphyxie</h4>
    <p>
      Une créature peut retenir sa respiration pendant un nombre de minutes égal
      à 1 + 1 minute supplémentaire par rang d&#39;athlétisme.
    </p>
    <p>
      Quand une créature n&#39;a plus d&#39;air ou qu&#39;elle est en train
      d&#39;étouffer, son nombre de point de vie est réduit à 0 et elle agonise.
      Elle ne peut pas regagner de point de vie ou être stabilisée tant
      qu&#39;elle ne peut pas respirer.
    </p>
    <h4>Vision et lumière</h4>
    <p>
      La présence ou l&#39;absence de lumière dans un environnement a été
      classée en <strong>trois catégories d&#39;illumination</strong> : la
      lumière vive, la lumière faible et les ténèbres.
    </p>
    <p>
      Avec une <strong>lumière vive</strong>, la plupart des créatures voient
      normalement. Même quand le temps est couvert, la lumière est considérée
      comme vive, tout comme à la lumière des torches, des feux ou d&#39;autres
      sources de lumières qui illuminent un périmètre donné.
    </p>
    <p>
      La <strong>lumière faible, appelée aussi pénombre</strong>, est une zone
      de visibilité réduite. Une zone éclairée par une lumière faible se trouve
      généralement entre une zone de lumière vive, comme une torche, et les
      ténèbres alentours. La lumière de l&#39;aube et du crépuscule est aussi
      considéré comme une lumière faible, de même que la lumière dégagée par une
      pleine lune particulièrement brillante. Les créatures subissent un dé
      d'handicap sur les tests liés à la vision.
    </p>
    <p>
      Les <strong>ténèbres sont une zone de visibilité nulle</strong>. Les
      personnages se retrouvent dans les ténèbres quand ils sont à
      l&#39;extérieur en pleine nuit (y compris la majorité des nuits éclairées
      par la lune), quand ils arpentent les confins d&#39;un souterrain ou
      d&#39;une salle sans source de lumière, ou encore quand ils se trouvent
      dans une zone de ténèbres magiques. Le champ de vision d&#39;un personnage
      est entièrement bloqué. On considère qu&#39;il est alors sous l&#39;effet
      de l&#39;état aveuglé quand il tente de voir quelque chose dans une telle
      zone.
    </p>
    <h4>Vision aveugle</h4>
    <p>
      Une créature dotée du trait vision aveugle est
      <strong
        >capable de percevoir son environnement dans un périmètre donné sans
        avoir besoin de faire appel à sa vision</strong
      >. Des créatures dépourvues d&#39;yeux comme les vases, des créatures
      dotées d&#39;écholocation ou de sens particulièrement aiguisés, comme les
      chauves-souris et les vrais dragons, possèdent cette capacité.
    </p>
    <h4>Eau et nourriture</h4>
    <p>
      Les personnages privés d&#39;eau ou de nourriture subissent les effets de
      l&#39;épuisement. Une créature ne peut sortir de l&#39;état
      d&#39;épuisement causé par le manque de nourriture ou d&#39;eau que si
      elle mange et boit en quantité suffisante.
    </p>
    <p>
      Un personnage a besoin de 1 ration de nourriture par jour. La ration
      comprend également le nécessaire en eau. Pour chaque journée passée sans
      manger ou boire à sa faim, le personnage subit dé de handicap. Il suffit
      de manger normalement un jour pour remettre le compteur de journées de
      jeûne à zéro. Si le personnage trouve de quoi grignoter ou boire un peu
      d&#39;eau malgré le manque, il ne sort pas de l&#39;état d&#39;épuisement,
      mais évite de cumuler des handicaps.
    </p>
    <h3>Entre les aventures</h3>
    <h4>Artisanat</h4>
    <p>TODO : Section en chantier.</p>
    <h4>Vendre son butin</h4>
    <ul>
      <li>
        <p>
          <strong>Armes, armures et autre équipement</strong> : En règle
          générale, les armes, armures et autres pièces d&#39;équipements qui ne
          sont pas endommagées se revendent à la moitié de leur prix dans un
          marché. Les armes et les armures utilisées par les monstres sont
          rarement en assez bon état pour être revendues.
        </p>
      </li>
      <li>
        <p>
          <strong>Gemmes, bijoux et œuvres d&#39;art, objets intact</strong> :
          Ces objets peuvent être vendus à leur valeur réelle sur le marché et
          il est possible de les échanger contre de l&#39;argent ou de les
          utiliser comme monnaie d&#39;échange dans le cadre d&#39;une
          transaction. S&#39;il s&#39;agit d&#39;un objet d&#39;une valeur
          exceptionnelle, le MJ peut vous demander de trouver un acheteur dans
          une grande ville ou au moins une communauté de taille importante.
        </p>
      </li>
      <li>
        <p>
          <strong>Troc</strong> : Dans les régions reculées, la base du commerce
          est souvent le troc. Tout comme les gemmes et les œuvres d&#39;art,
          les marchandises courantes (comme des lingots de fer, des sacs de sel,
          du bétail, etc.), conservent leur pleine valeur sur le marché et
          peuvent être utilisées comme monnaie d&#39;échange.
        </p>
      </li>
    </ul>
    <p>
      Les personnages peuvent prendre le temps de négocier avec les marchants
      pour en tirer un meilleur prix de vente. Cependant, le temps passé à
      négocier peut allonger très significativement le temps total passé à
      vendre les objets.
    </p>
    <h3>Moments de répit</h3>
    <h4>Récupérer</h4>
    <p>
      Un personnage peut mettre à profit une période de répit entre deux
      aventures pour se remettre d&#39;une blessure handicapante, d&#39;une
      maladie ou d&#39;un empoisonnement.
    </p>
    <p>
      Certaines blessures critiques se soignent avec le temps. D&#39;autre
      nécessitent l&#39;accompagnement d&#39;un médecin. Certaines, plus graves,
      vous demanderont des interventions lourdes et généralement payantes. Vous
      pouvez faire appel a des professionnel pour accélérer les soins, quelque
      soit le type de blessure.
    </p>
    <h4>Mener des recherches</h4>
    <p>
      Quand vous entamez vos recherches, le MJ détermine si vous pouvez trouver
      l&#39;information qui vous intéresse, combien de temps cela vous prendra
      et si vos recherches sont soumises à certaines conditions (comme trouver
      un individu, un livre ou un lieu spécifique). Le MJ peut aussi vous
      demander de faire un test de caractéristique ou un test plus spécifique,
      comme un test d&#39;intelligence (Investigation) pour trouver les indices
      qui mettent votre personnage sur la bonne voie, ou un test de charisme
      (Négociation) pour vous assurer l&#39;aide de quelqu&#39;un. Une fois que
      ces conditions ont été remplies, votre personnage déniche
      l&#39;information, si celle-ci est disponible.
    </p>
    <p>
      Pour chaque jour passé en recherches, vous devez dépenser 20p pour couvrir
      les dépenses de cette entreprise. Cette somme s&#39;ajoute au coût normal
      de votre train de vie.
    </p>
    <h4>Communication</h4>
    <h3>A l&#39;échelle galactique</h3>
    <p>
      Face aux proportions difficilement gigantesques que représente la galaxie
      en elle-même, communiquer d&#39;un bras à l&#39;autre représente un
      challenge technique rendu possible par les mêmes découvertes que celles
      qui on permit le voyage hyperspatial. Grâce à une grande antenne très
      sophistiquée, appelée &quot;<strong>beacom</strong>&quot; située loin des
      zones d&#39;activités dans un système solaire, et alimentée généralement
      par l&#39;<strong
        >énergie de l&#39;étoile à proximité, le système bénéficie de toutes les
        communications du grand réseau galactique</strong
      >.
    </p>
    <p>
      La couverture galactique est néanmoins très limitée. On parle généralement
      du monde civilisé quand on parle des secteurs qui ont bâti une beacom, et
      des contrés sauvage quand on parle des autres. La couverture galactique
      est extrêmement faible, et beaucoup de mondes n&#39;ont pas encore été
      découverts.
    </p>
    <p>
      Les communications qui viennent de l&#39;ensemble de la galaxie par le
      biais des beacoms tombent naturellement sous le contrôle de celui qui
      maîtrise la beacom. C&#39;est donc des
      <strong
        >infrastructures d&#39;une importance capitale pour les systèmes
        solaires qui en bénéficie</strong
      >, et souvent source de querelles intestines sur les systèmes les moins
      stables politiquement.
    </p>
    <h3>Dans un système stellaire</h3>
    <p>
      Il y a généralement sur chaque planète habitée et dite
      &quot;civilisés&quot;
      <strong
        >une grande infrastructure jumelée avec la beacom du système
        solaire</strong
      >. Tous les <strong>échanges extra-planétaire</strong> (donc également
      <strong>au sein d&#39;un même système</strong>) sont fait à partir de là.
    </p>
    <p>
      Pour ce qui est des <strong>communications intra-planétaire</strong>, cela
      peut grandement varier. Certains mondes ou la population est très
      concentrée, ou n&#39;est pas très mature sur les technologies de
      l&#39;information, on a tout simplement jugé qu&#39;il n&#39;était
      <strong>pas nécessaire d&#39;en bénéficier</strong>. Il n&#39;est pas rare
      que dans des planètes très peu habitées, on utilise encore des messagers.
      Dans les mondes les plus
      <strong>puissants et riches, il y a une bonne couverture réseau</strong>,
      et on peut communiquer assez facilement tant que l&#39;on possède un
      terminal approprié.
    </p>
  </q-page>
</template>

<script>
export default {};
</script>

<style></style>
