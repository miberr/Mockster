import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '674'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '233'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '190'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'e71'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'c52'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '5ab'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '0fe'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '2f9'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'b07'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '7d1'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '92c'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'cd3'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'e6a'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '61a'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'a0c'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '28a'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '85c'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '28b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '804'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '878'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'e46'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '817'),
            routes: [
              {
                path: '/docs/api/airlines',
                component: ComponentCreator('/docs/api/airlines', 'c8a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/api/animals',
                component: ComponentCreator('/docs/api/animals', 'fff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/api/colors',
                component: ComponentCreator('/docs/api/colors', '5be'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/api/companies',
                component: ComponentCreator('/docs/api/companies', 'abf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/api/databases',
                component: ComponentCreator('/docs/api/databases', '778'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/api/dates',
                component: ComponentCreator('/docs/api/dates', '612'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/api/finances',
                component: ComponentCreator('/docs/api/finances', '1c2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/api/gits',
                component: ComponentCreator('/docs/api/gits', '661'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/api/hackers',
                component: ComponentCreator('/docs/api/hackers', 'b05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/api/images',
                component: ComponentCreator('/docs/api/images', '4d7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/api/internet',
                component: ComponentCreator('/docs/api/internet', '817'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/api/locations',
                component: ComponentCreator('/docs/api/locations', '38b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/api/lorem',
                component: ComponentCreator('/docs/api/lorem', '7ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/api/musics',
                component: ComponentCreator('/docs/api/musics', '5f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/api/numbers',
                component: ComponentCreator('/docs/api/numbers', '6a2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/api/persons',
                component: ComponentCreator('/docs/api/persons', '8be'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/api/phones',
                component: ComponentCreator('/docs/api/phones', '9cf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/api/products',
                component: ComponentCreator('/docs/api/products', 'f94'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/api/sciences',
                component: ComponentCreator('/docs/api/sciences', '1e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/api/strings',
                component: ComponentCreator('/docs/api/strings', '9af'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/api/systems',
                component: ComponentCreator('/docs/api/systems', 'd43'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/api/vehicles',
                component: ComponentCreator('/docs/api/vehicles', '9e6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/api/words',
                component: ComponentCreator('/docs/api/words', 'd2c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/api',
                component: ComponentCreator('/docs/category/api', '664'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started',
                component: ComponentCreator('/docs/getting-started', 'a24'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/localization',
                component: ComponentCreator('/docs/localization', '501'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/whats-mockster',
                component: ComponentCreator('/docs/whats-mockster', 'e3e'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '7a5'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
