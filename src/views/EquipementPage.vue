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

    <ion-content class="ion-padding">
      <NamTitle>Equipement et Marché</NamTitle>
      <!-- TODO Faire des onglets -->
      <!-- TODO Mettre les informations de lore dans des modales a la demandes -->
      <h1>Équipement</h1>
      <h2>Encombrement</h2>
      <p>
        Chaque objet transporté part les personnages représente une place dans
        son inventaire par le biais de l&#39;encombrement. Les petits objets ont
        une valeurs de 0 ( ce qui ne signifie pas pour autant que l&#39;ont peut
        en prendre autant que voulut, c&#39;est au MJ de doser ).
      </p>
      <h2>Quotidien</h2>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prix unitaire</th>
            <th>Encombrement</th>
            <th>Propriétés</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lampe torche solaire</td>
            <td>20 p</td>
            <td>1</td>
            <td>Permet d&#39;éclairer une large zone autour du porteur</td>
          </tr>
          <tr>
            <td>Menottes</td>
            <td>50p</td>
            <td>0</td>
            <td>
              La créature doit effectuer un test de vigueur (Athlétisme) de DD5
              ou d&#39;agilité (Coordination) de DD4 pour ne plus être entravé
            </td>
          </tr>
          <tr>
            <td>Medipack</td>
            <td>400 p</td>
            <td>3</td>
            <td>
              Ajoute automatiquement 2 succès aux tests de Médecine. Il faut
              quelques minutes pour le préparer à l&#39;utilisation
            </td>
          </tr>
          <tr>
            <td>Terminal</td>
            <td>500 p</td>
            <td>1</td>
            <td>
              Ordinateur de poche avec plusieurs connectiques pour se brancher
              et travailler sur des équipements informatiques
            </td>
          </tr>
          <tr>
            <td>Ration</td>
            <td>10 p</td>
            <td>1</td>
            <td>Suffit pour nourrir une personne pendant 1 jour</td>
          </tr>
          <tr>
            <td>Couverture et tente</td>
            <td>300 p</td>
            <td>3</td>
            <td>Permet de dormir correctement en pleine nature</td>
          </tr>
          <tr>
            <td>Materiel d&#39;escalade</td>
            <td>50 p</td>
            <td>4</td>
            <td>
              Ajoute automatiquement 1 succès aux tests d&#39;Athlétisme quand
              les situations ou son utilisation est justifié
            </td>
          </tr>
          <tr>
            <td>Sac à dos</td>
            <td>50 p</td>
            <td>2</td>
            <td>
              Permet de transporter des objets jusqu&#39;a 6 d&#39;encombrement
            </td>
          </tr>
          <tr>
            <td>Outils de mécano-electronicien</td>
            <td>300 p</td>
            <td>2</td>
            <td>
              Indispensable pour réparer des véhicules ou des infrastructures
            </td>
          </tr>
          <tr>
            <td>Outils de chimiste</td>
            <td>300 p</td>
            <td>2</td>
            <td>
              Indispensable pour étudier des materiaux ou préparer des
              consommables
            </td>
          </tr>
        </tbody>
      </table>
      <h2>Armes</h2>
      <p>
        La technologie n&#39;a souvent pas suivi une progression
        &quot;naturelle&quot;. C&#39;est dû au fait que de nombreuses
        civilisations avec une très forte avance technologique n&#39;hésitaient
        pas à explorer et à interférer avec les peuples indigènes. Par ce fait,
        de nombreuses civilisations ont par exemple découvert les armes à
        énergie avant d&#39;avoir fait leur révolution industrielle. En fonction
        des ressources naturelles à leurs dispositions, de leurs capacités en
        &quot;retro-engenering&quot; et des supports qu&#39;ils peuvent trouver
        envers les grandes nations,
        <strong
          >les civilisations peuvent avoir eu une production et des paradigmes
          de conception très différents</strong
        >.
      </p>
      <p>
        Quoiqu&#39;il en soit, toutes
        <strong
          >les armes de haute technologie sont difficiles d&#39;accès</strong
        >. Leurs conceptions est en général gardée secret, et les munitions sont
        rares et chers.
        <strong
          >Les armes les plus courantes sont de conceptions proches du
          médiévales qui exploitent les technologies et des sources
          d&#39;énergie faciles d&#39;accès.</strong
        >
      </p>
      <h3>A mains nues</h3>
      <p>
        Il est possible de se défendre en utilisant uniquement ses poings et ses
        pieds. Cette methode n&#39;inflige généralement que trés peu de dégâts,
        mais un pugiliste bien entrainé peut rapidement dominer son adversaire
        avec un déluge de coups.
      </p>
      <ul>
        <li>
          Vous pouvez porter une attaque de pugiat par action pour chaque rang
          de maitrise que vous avez en pugilat.
        </li>
        <li>Vous infligez 1 point de dommage tout les 2 succès</li>
      </ul>
      <h3>Munitions et projectiles</h3>
      <p>
        Toutes les munitions et celulles ont un Encombrement de 1 et
        s&#39;achettent à l&#39;unité.
      </p>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prix unitaire</th>
            <th>Dégâts</th>
            <th>Propriétés</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Munitions et celulles conventionnelles</strong></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Celulle énergetique universelle</td>
            <td>25 p</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Carreau</td>
            <td>15 p</td>
            <td>2 point de dégats par succès</td>
            <td></td>
          </tr>
          <tr>
            <td>Flèches</td>
            <td>10 p</td>
            <td>1 point de dégats par succès</td>
            <td></td>
          </tr>
          <tr>
            <td>Balle</td>
            <td>5 p</td>
            <td>1 point de dégats par succès</td>
            <td></td>
          </tr>
          <tr>
            <td>&quot;Gros sel&quot;</td>
            <td>10 p</td>
            <td>1 point de dégats par succès</td>
            <td>
              Porté courte au maximum; Frappe une cible adjacente supplémentaire
              tout les 2 avantages
            </td>
          </tr>
          <tr>
            <td><strong>Munitions et celulles limité</strong></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Celulles à haute densitée</td>
            <td>200 p</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Munition à fusion (6 charges)</td>
            <td>600 p</td>
            <td>4 dégats par succès</td>
            <td>
              L'arme qui tire cette munitions peut explosée si 3 désavantages
              sont générés sur un jet d'attaque
            </td>
          </tr>
        </tbody>
      </table>
      <h3>Armes conventionnelles</h3>
      <div>
        <div>
          <div>
            <div>
              <h4>Bâton de force</h4>
            </div>
            <ul>
              <li>Dégât: 1 point de dommage par succès</li>
              <li><strong>Prix de base: </strong>50 p</li>
              <li><strong>Encombrement: </strong>3</li>
              <li>
                <strong>Spécial: </strong>Vous pouvez decider d&#39;utiliser la
                celulle au prix d&#39;une broutille. La cellule se décharge sur
                2 désavantages
              </li>
            </ul>
            <p>
              De conçeption simple, et de materiaux divers dépendant de
              l&#39;origine de sa fabrication, le bâton de force et
              l&#39;instrument de base pour tout voyageur galactique qui
              souhaite parcourir de grandes distances et avoir de quoi éloigner
              les créatures sauvages. Une celulle énergetique remplacable permet
              de générer de puissantes décharges étourdissantes
            </p>
          </div>
        </div>

        <div class="card nam-card">
          <div class="card__content">
            <div class="card__header">
              <h4>Vibro-lame</h4>
            </div>
            <ul>
              <li><strong>Dégât: </strong>1d6</li>
              <li><strong>Prix de base: </strong>50p</li>
              <li><strong>Encombrement: </strong>1</li>
              <li>
                <strong>Spécial: </strong>
              </li>
            </ul>
            <p>
              Avec la technologie de la lame vibrante à haute fréquence, cet
              outil peut découper quasiement n&#39;importe quoi.
            </p>
          </div>
        </div>

        <p></p>
      </div>

      <div class="nam-cards-wrapper">
        <div class="card nam-card">
          <div class="card__content">
            <div class="card__header">
              <h4>Vibro-sabre</h4>
            </div>
            <ul>
              <li><strong>Dégât: </strong>1d8</li>
              <li><strong>Prix de base: </strong>150p</li>
              <li><strong>Encombrement: </strong>2</li>
              <li>
                <strong>Spécial: </strong>Vous avez 1 Avantage sur vos Jet de
                combats au Corps à Corps
              </li>
            </ul>
            <p>
              Précis et maniable, c'est l'arme de prédilection de la pluparts
              des bagarreurs qui veulent ce faire respecter
            </p>
          </div>
        </div>

        <div class="card nam-card">
          <div class="card__content">
            <div class="card__header">
              <h4>Marteau à impulsion</h4>
            </div>
            <ul>
              <li><strong>Dégât: </strong>1d10 + 1d6 (avec munitions)</li>
              <li><strong>Prix de base: </strong>350 p</li>
              <li><strong>Encombrement: </strong>4</li>
              <li>
                <strong>Spécial: </strong>Sur un résultat de 10,11 ou 12 la
                celulle d&#39;énergie est dépensée et la cible est repoussée
              </li>
            </ul>
            <p>
              Arme de corps à corps redoutable, comprenant dans un sa conçeption
              deux celulle énergetique remplaçable qui décharge de solide
              détonations à l'impact
            </p>
          </div>
        </div>

        <p></p>
      </div>

      <div class="nam-cards-wrapper">
        <div class="card nam-card">
          <div class="card__content">
            <div class="card__header">
              <h4>Vibro-hache</h4>
            </div>
            <ul>
              <li><strong>Dégât: </strong>1d12</li>
              <li><strong>Prix de base: </strong>200p</li>
              <li><strong>Encombrement: </strong>4</li>
            </ul>
            <p>
              Plus lourde qu'un sabre, la vibro-hache est aussi plus difficile à
              manier efficacement, mais peut infliger de terribles dégâts.
            </p>
          </div>
        </div>

        <div class="card nam-card">
          <div class="card__content">
            <div class="card__header">
              <h4>Gants renforcés</h4>
            </div>
            <ul>
              <li><strong>Dégât: </strong>Augmente 1 fois le dé de dégàt</li>
              <li><strong>Prix de base: </strong>50p</li>
              <li><strong>Encombrement: </strong>1</li>
              <li>
                <strong>Spécial: </strong>Vous avez 1 Avantage sur vos Jet de
                combats au Corps à Corps
              </li>
            </ul>
            <p>
              Paire de gants ajustables avec des renforts en fonte. Conçus pour
              casser des machoires en protégeant un maximum les articulations de
              l&#39;utilisateur.
            </p>
          </div>
        </div>

        <p></p>
      </div>

      <div class="nam-cards-wrapper">
        <div class="card nam-card">
          <div class="card__content">
            <div class="card__header">
              <h4>Carabine à projectile</h4>
            </div>
            <ul>
              <li><strong>Dégât: </strong>(dépends du projectile)</li>
              <li><strong>Porté: </strong>24m/96m</li>
              <li><strong>Prix de base: </strong>600 p</li>
              <li><strong>Encombrement: </strong>4 / 3 (démonté)</li>
              <li>
                <strong>Spécial: </strong>Il vous faut une manoeuvre pour
                recharger la cellule énergetique, et une manoeuvre pour insérer
                un projectile
              </li>
            </ul>
            <p>
              D&#39;allure un peu douteuse, ces carabines projettent tout et
              n&#39;importe quoi à des vitesses folles. Chaque charge necessite
              l&#39;utilisation d&#39;une cellule énergetique
            </p>
          </div>
        </div>

        <div class="card nam-card">
          <div class="card__content">
            <div class="card__header">
              <h4>Arbalette</h4>
            </div>
            <ul>
              <li><strong>Dégât: </strong>1d12</li>
              <li><strong>Porté: </strong>30m/120m</li>
              <li><strong>Prix de base: </strong>250p</li>
              <li><strong>Encombrement: </strong>4 / 3 (démonté)</li>
              <li>
                <strong>Spécial: </strong>Il faut une action pour recharger
                complêtement l&#39;arbalete
              </li>
            </ul>
            <p>
              Facile à fabriquer, l&#39;arbalette est une arme trés puissante,
              ce qui compense le temps de rechargement.
            </p>
          </div>
        </div>

        <p></p>
      </div>

      <div class="nam-cards-wrapper">
        <div class="card nam-card">
          <div class="card__content">
            <div class="card__header">
              <h4>Arc</h4>
            </div>
            <ul>
              <li><strong>Dégât: </strong>1d12</li>
              <li><strong>Porté: </strong>45m/180m</li>
              <li><strong>Prix de base: </strong>150p</li>
              <li><strong>Encombrement: </strong>2 / 1 (démonté)</li>
              <li><strong>Spécial: </strong>Arme silencieuse</li>
            </ul>
            <p>
              Arme rudimentaire, mais toujours efficace, l&#39;arc permet de
              tirer rapidement des projectiles, et tout ça discrètement
            </p>
          </div>
        </div>

        <p></p>
      </div>

      <h3>Armes à énergies</h3>
      <div class="nam-cards-wrapper">
        <div class="card nam-card">
          <div class="card__content">
            <div class="card__header">
              <h4>Pistolet à énergie</h4>
            </div>
            <ul>
              <li><strong>Dégât: </strong>2d12</li>
              <li><strong>Porté: </strong>180m</li>
              <li><strong>Prix de base: </strong>2500p</li>
              <li><strong>Encombrement: </strong>2</li>
              <li>
                <strong>Spécial: </strong>Ignore la défense que procure
                l&#39;armure des adversaires. Chargeur de 3 celulle à fusion
              </li>
            </ul>
            <p>
              Comme toutes les armes à énergie, le pistolet est capable de faire
              des trous n&#39;importe où.
            </p>
          </div>
        </div>

        <div class="card nam-card">
          <div class="card__content">
            <div class="card__header">
              <h4>Fusil d&#39;assaut à énergie</h4>
            </div>
            <ul>
              <li><strong>Dégât: </strong>3d10</li>
              <li><strong>Porté: </strong>300m</li>
              <li><strong>Prix de base: </strong>5000 p</li>
              <li><strong>Encombrement: </strong>4 / 3 (démonté)</li>
              <li>
                <strong>Spécial: </strong>Ignore la défense que procure
                l&#39;armure des adversaires. Chaque Avantage permet de toucher
                une cible supplémentaire qui n&#39;est pas totalement à couvert.
                Chargeur de 5 celulle à fusion
              </li>
            </ul>
            <p>
              Comme toutes les armes à énergie, le fusil d&#39;assaut est
              capable de faire des trous n&#39;importe où. Ses salves peuvent
              facilement toucher plusieurs cibles si elles ne sont pas à couvert
            </p>
          </div>
        </div>

        <p></p>
      </div>

      <h2>Armures</h2>
      <table>
        <thead>
          <tr>
            <th>Armure</th>
            <th>Prix unitaire</th>
            <th>Bonus</th>
            <th>Encombrement</th>
            <th>Effets supplémentaire</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Equipement</strong></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Ceinture multi-usage</td>
            <td>50p</td>
            <td></td>
            <td>1</td>
            <td>
              Accès rapides sur des objets jusqu&#39;a 2 d&#39;Encombrement
            </td>
          </tr>
          <tr>
            <td>Cartouchière</td>
            <td>50p</td>
            <td></td>
            <td>1</td>
            <td>
              Accès rapides sur des celulles ou munitions jusqu&#39;a 8
              d&#39;Encombrement
            </td>
          </tr>
          <tr>
            <td><strong>Armures legères</strong></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Combinaison spatiale</td>
            <td>450p</td>
            <td>+1 Encaissement</td>
            <td>3</td>
            <td>La combinaisons peut être scéllée pour resister au vide</td>
          </tr>
          <tr>
            <td>Vêtements banals</td>
            <td>100p</td>
            <td></td>
            <td>2</td>
            <td></td>
          </tr>
          <tr>
            <td>Protections improvisées</td>
            <td>200p</td>
            <td>+1 Encaissement</td>
            <td>3</td>
            <td></td>
          </tr>
          <tr>
            <td>Vêtements renforcés</td>
            <td>2000p</td>
            <td>+2 Encaissement</td>
            <td>3</td>
            <td></td>
          </tr>
          <tr>
            <td><strong>Armures intermediaires</strong></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Armure matelassé</td>
            <td>800p</td>
            <td>+2 Encaissement</td>
            <td>4</td>
            <td>désavantage en discrétion</td>
          </tr>
          <tr>
            <td><strong>Armures Lourdes</strong></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Cuirasse métalique</td>
            <td>4000p</td>
            <td>+1 défense (DaC et DaD)</td>
            <td>5</td>
            <td>désavantage en discrétion</td>
          </tr>
          <tr>
            <td>Armure de plates</td>
            <td>8000p</td>
            <td>+2 défense (DaC et DaD)</td>
            <td>6</td>
            <td>désavantage en discrétion</td>
          </tr>
          <tr>
            <td>Armure lourde scellée</td>
            <td>15000p</td>
            <td>+2 défense (DaC et DaD)</td>
            <td>10</td>
            <td>
              désavantage en discrétion, La défense est conservée face aux armes
              à énergie
            </td>
          </tr>
        </tbody>
      </table>
      <h1>Véhicules et montures</h1>
      <p>//TODO</p>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import NamTitle from "@/components/NamTitle.vue";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    NamTitle,
  },
});
</script>

<style></style>
