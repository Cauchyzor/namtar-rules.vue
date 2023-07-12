<template>
  <q-page padding>
    <h4 class="text-center">Equipement et Marché</h4>
    <!-- TODO Ne pas reafficher la page avec le changement d'onglet -->
    <!-- TODO Mettre les informations de lore dans des modales a la demandes -->
    <h4>Concepts</h4>
    <h5>Encombrement</h5>
    <p>
      Chaque objet transporté par les personnages représente une place dans son
      inventaire par le biais de l&#39;encombrement. Les petits objets ont une
      valeurs de 0 ( ce qui ne signifie pas pour autant que l&#39;ont peut en
      prendre autant que voulut, c&#39;est au MJ de doser ).
    </p>
    <h5>Rareté et prix de base</h5>
    <p>
      Chaque objet possède une valeur de rareté qui augmente avec la difficulté
      de trouver un tel objet pour un personnage. Lorsqu'un personnage souhaite
      obtenir un objet, il lance un test de négociation dont la difficulté
      dépend de la rareté. Si le test réussi, le nombre de succès peux suggérer
      une bonne affaire en réduisant par exemple le prix auquel l'objet est
      vendu par rapport au prix de base. Si le test génère des atouts net, cela
      peut signifier qu'un objet d'habitude en quantité très réduite sera trouvé
      en plusieurs exemplaires. Les menaces net peuvent à l'inverse venir
      gonfler le prix de l'objet bar rapport au prix de base, ou indiquer que la
      recherche de l'objet prends plus de temps que prévu.
    </p>

    <q-tabs>
      <q-route-tab tab="quotidien" label="Objets" to="quotidien" exact />
      <q-route-tab tab="armes" label="Armes" to="armes" exact />
      <q-route-tab tab="armures" label="Armures" to="armures" exact />
    </q-tabs>

    <router-view></router-view>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({});
</script>

<style></style>
