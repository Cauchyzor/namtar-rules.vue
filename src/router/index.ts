import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    redirect: "/Personnage",
  },
  {
    path: "/Personnage",
    component: () => import("../views/PersonnagePage.vue"),
    children: [
      {
        path: '',
        redirect: '/Personnage/Caracteristiques',
      },
      {
        path: 'Caracteristiques',
        component: () => import('@/views/PersonnageTabs/CaracteristiquesTab.vue'),
      },
      {
        path: 'Competences',
        component: () => import('@/views/PersonnageTabs/CompetencesTab.vue'),
      },
      {
        path: 'Capacites',
        component: () => import('@/views/PersonnageTabs/CapacitesTab.vue'),
      },
    ],
  },
  {
    path: "/Test",
    component: () => import("../views/TestCompetencePage.vue"),
  },
  {
    path: "/Combat",
    component: () => import("../views/CombatPage.vue"),
  },
  {
    path: "/Sante",
    component: () => import("../views/SanteGuerisonPage.vue"),
  },
  {
    path: "/Aventure",
    component: () => import("../views/AventurePage.vue"),
  },
  {
    path: "/Equipement",
    component: () => import("../views/EquipementPage.vue"),
  },
  {
    path: "/Vehicule",
    component: () => import("../views/VehiculesPage.vue"),
  },
  {
    path: "/Capacite",
    component: () => import("../views/CapaciteInfoPage.vue"),
    children: [
      {
        path: '',
        redirect: '/Capacite/TypeTab',
      },
      {
        path: 'TypeTab',
        component: () => import('@/views/CapaciteInfoTabs/TypeTab.vue'),
      },
      {
        path: 'EffetTab',
        component: () => import('@/views/CapaciteInfoTabs/EffetTab.vue'),
      },
      {
        path: 'AmeliorationTab',
        component: () => import('@/views/CapaciteInfoTabs/AmeliorationTab.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
