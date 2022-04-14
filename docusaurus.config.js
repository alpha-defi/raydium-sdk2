// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const path = require('path');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Raydium SDK',
  tagline: 'Welcome to the Raydium SDK',
  url: 'https://sdk.alphadefi.info',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'raydium-sdk', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo. 
          editUrl: 'https://github.com/alpha-defi/raydium-sdk2/blob/main/',
        },
        blog: false, // Blog is disabled for SDK
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],

  plugins: [
    'docusaurus-plugin-sass',
    path.resolve(__dirname, './plugins/plugin-image-zoom-custom'),
  ],

  themes: [
    // Use self hosted typesense until Algoria approves raydium SDK
    'docusaurus-theme-search-typesense'
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Raydium SDK',
        logo: {
          alt: 'Raydium SDK Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'overview',
            position: 'left',
            label: 'Overview',
          },
          {
            type: 'doc',
            docId: 'tutorial',
            position: 'left',
            label: 'Tutorial',
          },
          {
            type: 'doc',
            docId: 'showcase',
            position: 'left',
            label: 'Showcase',
          },
          {
            href: 'https://github.com/alpha-defi/raydium-sdk2',
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
                label: 'Overview',
                to: '/docs/overview',
              },
              {
                label: 'Tutorial',
                to: '/docs/tutorial',
              },
              {
                label: 'Showcase',
                to: '/docs/showcase',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/search?q=raydium',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/channels/813741812598439958/813750197423308820',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/RaydiumProtocol',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/alpha-defi/raydium-sdk2',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      // Default to dark theme despite user preference 
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },

      // Use self hosted typesense until Algoria approves raydium SDK
      typesense: {
        typesenseCollectionName: 'raydium-sdk', // Replace with your own doc site's name. Should match the collection name in the scraper settings.
        
        typesenseServerConfig: {
          nodes: [
            {
              host: 'search.alphadefi.info',
              port: 443,
              protocol: 'https',
            },
          ],
          apiKey: '3BldYLqcSaDGvj1',
        },
  
        // Optional: Typesense search parameters: https://typesense.org/docs/0.21.0/api/documents.md#search-parameters
        typesenseSearchParameters: {},
  
        // Optional
        contextualSearch: true,
      },
      // Medium-zoom plugin when clicking on images
      zoom: {
        selector: '.markdown :not(em) > img',
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
          background: {
            dark: 'rgb(0, 0, 0)',
            light: 'rgb(0, 0, 0)'
          }
        }
      },
    }),
};

module.exports = config;
