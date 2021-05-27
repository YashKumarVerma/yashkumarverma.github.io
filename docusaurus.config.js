/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Yash Kumar Verma',
  tagline: 'Hey There !',
  url: 'https://yashkumarverma.github.io/projects',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Yash', // Usually your GitHub org/user name.
  projectName: 'projects', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Home',
      logo: {
        alt: 'Projects by Yash Kumar Verma',
        src: 'img/logo.svg',
      },
      items: [
        {to: 'about-me', label: 'About Me', position: 'left'},
        {
          to: 'docs/',
          activeBasePath: 'projects',
          label: 'Projects',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        // Please keep GitHub link to the right for consistency.
        {
          href: 'https://github.com/yashkumarverma',
          label: 'github/YashKumarVerma',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Site',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'About Me',
              to: 'about-me/',
            },
            {
              label: 'Projects List',
              to: 'docs/',
            },
          ],
        },
        {
          title: ' ',
          items: [],
        },
        {
          title: ' ',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/yash_kr_verma',
            },
            {
              label: 'E-Mail',
              href: 'mailto:yk.verma2000@gmail.com',
            },
            {
              label: 'Github',
              href: 'https://github.com/yashkumarverma/',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/yash-kumar-verma/',
            },
          ],
        },
      ],
      //   logo: {
      //     alt: 'Facebook Open Source Logo',
      //     src: 'img/oss_logo.png',
      //     href: 'https://opensource.facebook.com',
      //   },
      // Please do not remove the credits, help to publicize Docusaurus :)
      copyright: `Copyright © ${new Date().getFullYear()} YashKumarVerma. `,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
