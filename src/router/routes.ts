import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [
      {
        path: '/regles',
        children: [
          {
            path: '',
            redirect: '/regles/dice-system',
          },
          {
            name: 'DiceSystem',
            path: 'dice-system',
            component: () => import('src/pages/ReglesSystemePage.vue'),
          },
          {
            name: 'CombatSystem',
            path: 'combat',
            component: () => import('src/pages/ReglesCombatPage.vue'),
          },
          {
            name: 'SoinSystem',
            path: 'soin',
            component: () => import('src/pages/ReglesSoinsPage.vue'),
          },
          {
            name: 'Aventure',
            path: 'aventure',
            component: () => import('src/pages/ReglesAventurePage.vue'),
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
        name: 'Equipement',
        path: '/equipement',
        component: () => import('src/pages/EquipementPage.vue'),
        children: [
          {
            path: '',
            redirect: '/equipement/quotidien',
          },
          {
            name: 'Quotidien',
            path: 'quotidien',
            component: () =>
              import('src/pages/TabsEquipement/EquipementTab.vue'),
          },
          {
            name: 'Armes',
            path: 'armes',
            component: () => import('src/pages/TabsEquipement/ArmeTab.vue'),
          },
          {
            name: 'Armures',
            path: 'armures',
            component: () => import('src/pages/TabsEquipement/ArmureTab.vue'),
          },
        ],
      },
      {
        name: 'Vehicule',
        path: '/vehicule',
        component: () => import('src/pages/VehiculesPage.vue'),
      },
      {
        name: 'Aptitude Creation',
        path: '/aptitude',
        component: () => import('src/pages/AptitudeInfoPage.vue'),
      },
      {
        name: 'Aptitude Catalogue',
        path: '/catalog',
        component: () => import('src/pages/AptitudesCataloguePage.vue'),
      },
      {
        name: 'Ethnotrait',
        path: '/ethnotrait',
        component: () => import('src/pages/EthnotraitInfoPage.vue'),
      },
    ],
  },
];

export default routes;
