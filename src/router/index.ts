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
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
