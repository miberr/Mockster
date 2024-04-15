// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

const dotenv = require('dotenv');
dotenv.config();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mockster',
  tagline: 'Generate realistic mock data for your testing and development. Available as Microsoft Power Platform connector.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://mockster.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'miberr', // Usually your GitHub org/user name.
  projectName: 'Mockster', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    ["@microsoft/docusaurus-plugin-application-insights", {
        config: {
          connectionString: "InstrumentationKey=709e34cb-daad-4956-a23d-7e276fa0b4e3;IngestionEndpoint=https://westeurope-4.in.applicationinsights.azure.com/;LiveEndpoint=https://westeurope.livediagnostics.monitor.azure.com/",
        },
        enableClickAnalytics: true,
    }]
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
   
        },
        blog: {
          showReadingTime: true,
  
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Mockster',
        logo: {
          alt: 'Mockster Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/miberr/mockster',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting started',
                to: '/docs/getting-started',
              },
              {
                label: 'API Reference',
                to: '/docs/category/api',
              },
              {
                label: 'Privacy Policy',
                to: '/privacy-policy',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/miberr/Mockster',
              },
            ],
          },
        ],
        copyright: `Mockster is released under the MIT License. © ${new Date().getFullYear()} Mockster`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: process.env.ALGOLIA_APP_ID,
  
        // Public API key: it is safe to commit it
        apiKey: process.env.ALGOLIA_SEARCH_API_KEY,
  
        indexName: process.env.ALGOLIA_INDEX_NAME,
  
        // Optional: see doc section below
        contextualSearch: false,
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search'
      }
    }),
};

export default config;
