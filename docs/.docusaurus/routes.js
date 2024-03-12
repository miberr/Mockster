import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '677'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5e1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'f79'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '9c8'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '919'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '335'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '564'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '254'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '57d'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'e6b'),
    exact: true
  },
  {
    path: '/blog/tags/mockster',
    component: ComponentCreator('/blog/tags/mockster', '319'),
    exact: true
  },
  {
    path: '/blog/tags/v-1',
    component: ComponentCreator('/blog/tags/v-1', '2d4'),
    exact: true
  },
  {
    path: '/blog/v1-released',
    component: ComponentCreator('/blog/v1-released', '785'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '05b'),
    exact: true
  },
  {
    path: '/privacy-policy',
    component: ComponentCreator('/privacy-policy', 'e59'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '9e9'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'b1b'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'a76'),
            routes: [
              {
                path: '/docs/api/airlines',
                component: ComponentCreator('/docs/api/airlines', 'af2'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/api/animals',
                component: ComponentCreator('/docs/api/animals', '4d8'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/api/colors',
                component: ComponentCreator('/docs/api/colors', '021'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/api/companies',
                component: ComponentCreator('/docs/api/companies', 'e8b'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/api/databases',
                component: ComponentCreator('/docs/api/databases', '2fb'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/api/dates',
                component: ComponentCreator('/docs/api/dates', '46f'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/api/finances',
                component: ComponentCreator('/docs/api/finances', 'f1b'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/api/gits',
                component: ComponentCreator('/docs/api/gits', '2de'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/api/hackers',
                component: ComponentCreator('/docs/api/hackers', '6f2'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/api/images',
                component: ComponentCreator('/docs/api/images', 'a59'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/api/internet',
                component: ComponentCreator('/docs/api/internet', '0a0'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/api/locations',
                component: ComponentCreator('/docs/api/locations', '40a'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/api/lorem',
                component: ComponentCreator('/docs/api/lorem', '8bc'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/api/musics',
                component: ComponentCreator('/docs/api/musics', 'ca4'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/api/numbers',
                component: ComponentCreator('/docs/api/numbers', '107'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/api/persons',
                component: ComponentCreator('/docs/api/persons', '563'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/api/phones',
                component: ComponentCreator('/docs/api/phones', '103'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/api/products',
                component: ComponentCreator('/docs/api/products', '7c0'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/api/sciences',
                component: ComponentCreator('/docs/api/sciences', '4cc'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/api/strings',
                component: ComponentCreator('/docs/api/strings', '3e6'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/api/systems',
                component: ComponentCreator('/docs/api/systems', '705'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/api/vehicles',
                component: ComponentCreator('/docs/api/vehicles', '991'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/api/words',
                component: ComponentCreator('/docs/api/words', 'b0d'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/category/api',
                component: ComponentCreator('/docs/category/api', '470'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/getting-started',
                component: ComponentCreator('/docs/getting-started', '575'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/localization',
                component: ComponentCreator('/docs/localization', 'ffb'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/whats-mockster',
                component: ComponentCreator('/docs/whats-mockster', 'e65'),
                exact: true,
                sidebar: "docsSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'bd3'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
