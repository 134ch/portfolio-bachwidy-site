import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkGithubAdmonitionsToDirectives from 'remark-github-admonitions-to-directives';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Bach Widy Portfolio',
  tagline: 'Documentation, case studies and the build log behind them.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Prepares the site for Docusaurus v4 (3.10 is the last v3 release)
  },

  url: 'https://portfolio.bachwidy.site',
  baseUrl: '/',

  organizationName: '134ch',
  projectName: 'portfolio-bachwidy-site',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/134ch/portfolio-bachwidy-site/tree/main/',
          // Lets pages use GitHub-style alerts (> [!NOTE]) so the same
          // Markdown also works on GitHub and in a Confluence sync.
          beforeDefaultRemarkPlugins: [remarkGithubAdmonitionsToDirectives],
        },
        // The blog starts in Phase 2 (content MVP).
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Bach Widy Portfolio',
      logo: {
        alt: 'Bach Widy Portfolio logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/134ch/portfolio-bachwidy-site',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'This site',
          items: [
            {label: 'Start here', to: '/docs/intro'},
            {label: 'Documentation plan', to: '/docs/about-this-build/docs-plan'},
            {label: 'Style guide', to: '/docs/about-this-build/style-guide'},
          ],
        },
        {
          title: 'Process',
          items: [
            {label: 'Build log', to: '/docs/build-log'},
            {label: 'Decision records', to: '/docs/adr'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Bachtiar Widyantoro. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
