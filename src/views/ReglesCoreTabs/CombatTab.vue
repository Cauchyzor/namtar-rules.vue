<template>
  <ion-page>
    <ion-content  class="ion-padding">
      <NamTitle>Combats et conflits</NamTitle>
      <!-- TODO : Trouver le moyen de faire un stepper Circulaire -->
      <NamTitle>Avant une situation de conflit</NamTitle>
      <h2>Initiative</h2>
      <p>
        Si aucun des deux camps ne cherche à être discret, ils se remarquent
        automatiquement. Test d'initiative de tout les béligerant, puis
        classement par nombre de success, puis nombre d'avantage si égalité
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
      <h1>Emplacement</h1>
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
          <p>
            Déterminer les dés a lancer en fonction du jet d'attaque (distance
            ou contact ou autre).
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
        d&#39;agilité (Discrétion) pour tenter de vous cacher.
      </p>
      <h1>Dégâts</h1>
      <p>
        Pour chaque arme ou capacité offensive, les dégâts infligés sont décrits
        dans la description de l'arme ou la capacité.
      </p>
      <p>
        Si une arme ou une capaité inflige des dégâts à plus d&#39;une créature
        au même moment, les dégâts sont lancés une seule fois pour toutes les
        créatures.
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
      <NamTitle>Les états spéciaux</NamTitle>
      <h2>À terre / Renversée</h2>
      <p>
        Une créature à terre n&#39;a plus l&#39;option que de ramper pour se
        déplacer, à moins de se relever et de mettre ainsi un terme à son état.
        Elle peut également décider d&#39;epauler une arme a distance si
        celle-ci n&#39;est pas trop encombrante à manoeuvrer. La créature subit
        un désavantage lors de ses attaques au corps a corps. Si un assaillant
        est à 1,50 mètre ou moins de la créature, il bénéficie d&#39;un avantage
        lors de ses attaques contre la créature. Sinon, il subit un désavantage.
      </p>
      <h2>Assourdi</h2>
      <p>
        Une créature assourdie n&#39;entend plus rien et rate automatiquement
        tous les tests de caractéristique faisant intervenir des capacités
        auditives.
      </p>
      <h2>Aveuglé</h2>
      <p>
        Une créature aveuglée ne voit plus rien et rate automatiquement tout
        test de caractéristique qui requiert la vue. Sa défense est réduite de
        1.
      </p>
      <h2>Empoigné</h2>
      <p>
        La vitesse d&#39;une créature empoignée devient 0 et elle ne peut plus
        bénéficier de ses éventuels bonus de vitesse. Cet état se termine si
        l&#39;empoigneur est neutralisé (voir cet état). L&#39;état se termine
        également si un effet emporte la créature empoignée au-delà de
        l&#39;allonge de l&#39;empoigneur ou de l&#39;effet d&#39;empoignade.
      </p>
      <h2>Entravé</h2>
      <p>
        La vitesse de la créature entravée tombe à 0 et elle ne peut plus
        bénéficier de ses éventuels bonus de vitesse. Les attaques qui visent la
        créature bénéficient d&#39;un avantage, tandis que les attaques de la
        créature subissent un désavantage. La créature souffre d&#39;un
        désavantage lors de ses jets de sauvegarde.
      </p>
      <h2>Neutralisé</h2>
      <p>
        Une créature neutralisée est incapable d&#39;effectuer une action ou une
        réaction.
      </p>
      <h2>Neutralisé - Étourdi</h2>
      <p>
        Une créature étourdie est neutralisée, incapable de se déplacer et parle
        en balbutiant. La créature rate automatiquement tous ses jets de
        sauvegarde. Les jets d&#39;attaque qui visent la créature se font avec
        un avantage.
      </p>
      <h2>Neutralisé - Paralysé</h2>
      <p>
        Une créature paralysée est neutralisée et ne peut ni parler ni se
        déplacer. La créature rate automatiquement tous ses jets de sauvegarde.
        Les attaques visant la créature bénéficient d&#39;un avantage. Toute
        attaque qui touche la créature est obligatoirement un coup critique si
        l&#39;assaillant se trouve dans un rayon de 1,50 mètre autour
        d&#39;elle.
      </p>
      <h2>Neutralisé - Inconscient</h2>
      <p>
        Une créature inconsciente est neutralisée, incapable de se déplacer et
        de parler et n&#39;a pas conscience de ce qui l&#39;entoure. La créature
        lâche tout ce qu&#39;elle tenait et tombe au sol. Si la créature reprend
        conscience, elle est à terre. Seul la défense de l&#39;équipement est
        prise en compte sur le total de défense. Toute attaque qui touche la
        créature inflige le maximum de dégât si l&#39;attaquant est a 1,5m de la
        créature.
      </p>
      <h2>Terrorisé</h2>
      <p>
        Une créature terrorisée subit un désavantage lors de ses tests de
        caractéristique et de ses jets d&#39;attaque tant que la source de sa
        frayeur se trouve dans son champ de vision. La créature est incapable de
        se rapprocher de la source de sa frayeur de son plein gré.
      </p>
      <h2>Surpris</h2>
      <p>
        Une créature surprise est incapable de se déplacer. Une créature
        surprise ne peut entreprendre ni action ni réaction.
      </p>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { IonContent, IonPage } from "@ionic/vue";

import NamTitle from "@/components/NamTitle.vue";

export default defineComponent({
  components: {
    IonContent,
    IonPage,
    NamTitle,
  },
});
</script>

<style></style>
