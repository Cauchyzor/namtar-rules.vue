import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "",
    component: () => import("src/layouts/MainLayout.vue"),
    children: [
      {
        name: "Welcome",
        path: "",
        component: () => import("src/pages/PageIndex.vue"),
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
            component: () => import("src/pages/PageReglesSysteme.vue"),
          },
          {
            name: "CombatSystem",
            path: "combat",
            component: () => import("src/pages/PageReglesCombat.vue"),
          },
          {
            name: "SoinSystem",
            path: "soin",
            component: () => import("src/pages/PageReglesSoins.vue"),
          },
          {
            name: "Aventure",
            path: "aventure",
            component: () => import("src/pages/PageReglesAventure.vue"),
          },
        ],
      },
      {
        name: "Personnage",
        path: "/pj",
        component: () => import("src/pages/PagePersonnage.vue"),
      },
      {
        name: "Niveau",
        path: "/niveau",
        component: () => import("src/pages/PageNiveau.vue"),
      },
      {
        name: "Equipement",
        path: "/equipement",
        component: () => import("src/pages/PageEquipement.vue"),
        children: [
          {
            name: "default",
            path: "",
            redirect: "/equipement/quotidien",
          },
          {
            name: "Quotidien",
            path: "quotidien",
            component: () =>
              import("src/pages/TabsEquipement/TabEquipement.vue"),
          },
          {
            name: "Armes",
            path: "armes",
            component: () => import("src/pages/TabsEquipement/TabArme.vue"),
          },
          {
            name: "Armures",
            path: "armures",
            component: () => import("src/pages/TabsEquipement/TabArmure.vue"),
          },
        ],
      },
      {
        name: "Vehicule",
        path: "/vehicule",
        component: () => import("src/pages/PageVehicules.vue"),
      },
      {
        name: "Aptitude Creation",
        path: "/apt/create",
        component: () => import("src/pages/PageAptitudeCreation.vue"),
      },
      {
        name: "Aptitude Catalogue",
        path: "/apt/list",
        component: () => import("src/pages/PageAptitudesDatabase.vue"),
      },
      {
        name: "Ethnotrait",
        path: "/ethnotrait",
        component: () => import("src/pages/PageEthnotraitDatabase.vue"),
      },
      {
        name: "Lore",
        path: "/lore",
        component: () => import("src/pages/PageLoreIntroduction.vue"),
      },
      {
        name: "Creature",
        path: "/creature",
        children: [
          {
            name: "default",
            path: "",
            redirect: "/creature/create",
          },
          {
            name: "Creature Creation",
            path: "create",
            component: () => import("src/pages/PageCreatureCreation.vue"),
          },
          {
            name: "Génotraits",
            path: "genotrait",
            component: () => import("src/pages/PageGenotraitDatabase.vue"),
          },
        ],
      },
    ],
  },
];

export default routes;
