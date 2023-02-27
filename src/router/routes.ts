import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [
      {
        path: '/regles',
        component: () => import('src/pages/ReglesCorePage.vue'),
        children: [
          {
            path: '',
            redirect: '/regles/dice-system',
          },
          {
            name: 'DiceSystem',
            path: 'dice-system',
            component: () =>
              import('src/pages/ReglesCoreTabs/DiceSystemTab.vue'),
          },
          {
            name: 'CombatSystem',
            path: 'combat',
            component: () => import('src/pages/ReglesCoreTabs/CombatTab.vue'),
          },
          {
            name: 'SoinSystem',
            path: 'soin',
            component: () => import('src/pages/ReglesCoreTabs/SoinsTab.vue'),
          },
        ],
      },
      {
        name: 'Personnage',
        path: '/pj',
        component: () => import('src/pages/PersonnagePage.vue'),
      },
      {
        name: 'Niveau',
        path: '/niveau',
        component: () => import('src/pages/NiveauPage.vue'),
      },
      {
        name: 'Aventure',
        path: '/aventure',
        component: () => import('src/pages/AventurePage.vue'),
      },
      {
        name: 'Equipement',
        path: '/equipement',
        component: () => import('src/pages/EquipementPage.vue'),
      },
      {
        name: 'Vehicule',
        path: '/vehicule',
        component: () => import('src/pages/VehiculesPage.vue'),
      },
      {
        name: 'Aptitude',
        path: '/aptitude',
        component: () => import('src/pages/AptitudeInfoPage.vue'),
      },
    ],
  },
];

export default routes;
