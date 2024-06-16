import MainLayout from "src/layouts/MainLayout.vue";
import PageAptitudesDatabase from "src/pages/PageAptitudesDatabase.vue";
import PageEquipement from "src/pages/PageEquipement.vue";
import PageBuild from "src/pages/PageBuild.vue";
import PageEthnotraitDatabase from "src/pages/PageEthnotraitDatabase.vue";
import PageIndex from "src/pages/PageIndex.vue";
import PageLoreIntroduction from "src/pages/PageLoreIntroduction.vue";
import PageNiveau from "src/pages/PageNiveau.vue";
import PagePersonnage from "src/pages/PagePersonnage.vue";
import PageReglesAventure from "src/pages/PageReglesAventure.vue";
import PageReglesCombat from "src/pages/PageReglesCombat.vue";
import PageReglesSoins from "src/pages/PageReglesSoins.vue";
import PageReglesSysteme from "src/pages/PageReglesSysteme.vue";
import PageVehicules from "src/pages/PageVehicules.vue";

import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "",
    component: MainLayout,
    children: [
      {
        name: "Welcome",
        path: "",
        component: PageIndex,
      },
      {
        name: "Règles",
        path: "/regles",
        children: [
          {
            name: "default",
            path: "",
            redirect: "/regles/dice-system",
          },
          {
            name: "DiceSystem",
            path: "dice-system",
            component: PageReglesSysteme,
          },
          {
            name: "CombatSystem",
            path: "combat",
            component: PageReglesCombat,
          },
          {
            name: "SoinSystem",
            path: "soin",
            component: PageReglesSoins,
          },
          {
            name: "Aventure",
            path: "aventure",
            component: PageReglesAventure,
          },
        ],
      },
      {
        name: "Personnage",
        path: "/character",
        children: [
          {
            name: "fiche",
            path: "sheet",
            component: PagePersonnage,
          },
          {
            name: "Niveau",
            path: "niveau",
            component: PageNiveau,
          },
          {
            name: "Ethnotrait",
            path: "ethnotraits",
            component: PageEthnotraitDatabase,
          },
          {
            name: "Archetypes",
            path: "archetype",
            component: PageBuild,
          },
        ],
      },

      {
        name: "Equipement",
        path: "/equipement",
        component: PageEquipement,
      },
      {
        name: "Vehicule",
        path: "/vehicule",
        component: PageVehicules,
      },
      {
        name: "Aptitude Creation",
        path: "/apt",
        children: [
          {
            name: "default",
            path: "",
            redirect: "/apt/list",
          },
          {
            name: "Aptitude Catalogue",
            path: "list",
            component: PageAptitudesDatabase,
          },
        ],
      },
      {
        name: "Lore",
        path: "/lore",
        children: [
          {
            name: "default",
            path: "",
            component: PageLoreIntroduction,
          },
          {
            name: "Véhicules",
            path: "vehicule",
            component: PageVehicules,
          },
        ],
      },
    ],
  },
];

export default routes;
