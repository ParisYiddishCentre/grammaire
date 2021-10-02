/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/docusaurus.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Grammaire de la langue yiddish', // Title for your website.
  yiddishTitle: 'גראַמאַטיק פֿון דער ייִדישער שפּראַך',
  yiddishTagline: 'צונויפֿגעשטעלט דורך אַהרן וואַלדמאַן',
  tagline: 'par Aron Waldman',
  url: 'https://grammaire.yiddish.paris', // Your website URL
  baseUrl: '/', 
  projectName: 'grammaire-yiddish',
  organizationName: 'MCY',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'intro1', label: 'Grammaire'},
    {doc: 'apropos', label: 'À propos'}
    // {search: false}
    /* {blog: false, label: 'Blog'}, */
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/mcylogo.png',
  footerIcon: 'img/mcylogo.png',
  favicon: 'img/favicon.png',

  /* Colors for website */
  colors: {
    primaryColor: '#cc1f3d',
    secondaryColor: '#a51831',
  },

  /* Custom fonts for website */
  
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
    ]
  },
  

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Aron Waldman, Maison de la culture yiddish`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  stylesheets: [ 
  {
    href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,400i',
    type: 'text/css',
  },
  {
    href: 'https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700,700i',
    type: 'text/css',
  },
  {
    href: 'https://fonts.googleapis.com/earlyaccess/notosanshebrew.css',
    type: 'text/css',
  }
  ],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: '',
  twitterImage: '',

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',

  scrollToTop: true,
  scrollToTopOptions: {
    zIndex: 100,
  },

  docsSideNavCollapsible: true,

  //docsUrl: "",
};

module.exports = siteConfig;
