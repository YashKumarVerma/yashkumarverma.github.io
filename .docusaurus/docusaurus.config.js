export default {
  "title": "Yash Kumar Verma",
  "tagline": "building backend at fampay, in love with FinTech",
  "url": "https://yashkumarverma.github.io",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "YashKumarVerma",
  "projectName": "yashkumarverma.github.io",
  "themeConfig": {
    "navbar": {
      "title": "Home",
      "logo": {
        "alt": "Projects by Yash Kumar Verma",
        "src": "img/logo.svg"
      },
      "items": [
        {
          "to": "about-me",
          "label": "About Me",
          "position": "left"
        },
        {
          "to": "docs/",
          "activeBasePath": "projects",
          "label": "Projects",
          "position": "left"
        },
        {
          "to": "blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "href": "https://bit.ly/yashkumarverma",
          "label": "Resume",
          "position": "right"
        },
        {
          "href": "https://github.com/yashkumarverma",
          "label": "github/YashKumarVerma",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Site",
          "items": [
            {
              "label": "Blog",
              "to": "blog"
            },
            {
              "label": "About Me",
              "to": "about-me/"
            },
            {
              "label": "Projects List",
              "to": "docs/"
            }
          ]
        },
        {
          "title": " ",
          "items": []
        },
        {
          "title": " ",
          "items": [
            {
              "label": "Twitter",
              "href": "https://twitter.com/yash_kr_verma"
            },
            {
              "label": "E-Mail",
              "href": "mailto:yk.verma2000@gmail.com"
            },
            {
              "label": "Github",
              "href": "https://github.com/yashkumarverma/"
            },
            {
              "label": "LinkedIn",
              "href": "https://www.linkedin.com/in/yash-kumar-verma/"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2022 YashKumarVerma. "
    },
    "themeConfig": {
      "announcementBar": {
        "id": "support_us",
        "content": "We are looking to revamp our docs, please fill <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"#\">this survey</a>",
        "backgroundColor": "#fafbfc",
        "textColor": "#091E42",
        "isCloseable": false
      }
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/home/yash/Desktop/works/yashkumarverma.github.io/sidebars.js",
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/blog/"
        },
        "theme": {
          "customCss": "/home/yash/Desktop/works/yashkumarverma.github.io/src/css/custom.css"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};