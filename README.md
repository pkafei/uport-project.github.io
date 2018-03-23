uPort Documentation Generation
============

  This is our documentation site generator, built with [GatsbyJS](https://www.gatsbyjs.org) and a heavily modified fork of [gatsby-starter-docs](https://github.com/ericwindmill/gatsby-starter-docs).

## Configuration

  There are a few main points of configuration.

  1. Site `/data/SiteConfig.js`
  1. Styling `/src/layouts/theme.js`
  1. Content `/repos.json`
  1. GatsbyJS configuration `gatsby-config.js`

### Site configuration

The `SiteConfig.js` file contains properties that are used by the site generator at compile time.  It contains configuration options like setting a path-prefix, the site name, logo images, etc.

At a minimum the `siteUrl` and `pathPrefix` should be set.

Example SiteConfig and each properties explanation:

```js
module.exports = {
  siteTitle: "Simple and secure login for your Ethereum app",           // Site title.
  siteTitleAlt: "Uport ID makes blockchain easy on desktop and mobile", // Alternative site title for SEO.
  siteLogo: "/logos/uport-logo-purple@3x.png",                          // Logo used for SEO and manifest.
  siteUrl: "https://rekt.uport.space",                                  // Domain of your website without pathPrefix.
  pathPrefix: "/",                                                      // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Uport ID makes blockchain easy on desktop and mobile", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml",                                                  // Path to the RSS file.
  googleAnalyticsID: "UA-8xxxxx",                                       // GA tracking ID.
  userName: "uPort",                                                    // Username to display in the author segment.
  userTwitter: "uport_me",                                              // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Universe",                                             // User location to display in the author segment.
  userAvatar: "https://pbs.twimg.com/profile_images/932688008314109952/3_QkvZeQ_400x400.jpg", // User avatar to display in the author segment.
  userDescription: "Your ID.  For you.",                                // User description to display in the author segment.
  segmentProdKey: "",                                                   //Segment key for prod
  segmentDevKey: "",                                                    //Segment key for dev
  copyright: "Copyright © 2018",                                        // Copyright string for the footer of the website and RSS feed.
  themeColor: "#5c50ca",                                                // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0",                                           // Used for setting manifest background color.
};

```


### Styling configuration

The `theme.js` file contains a couple attributes that are used to toggle CSS properties.  For convenience the theme styles are included, but others can be added as needed.


```js
const theme = {
  // named colors:
  brand: '#5c50ca',
  accent: '#ADD2EB',
  accentDark: "#35495E",
  lightGrey: '#F6F6F6',
  darkGrey: '#91a2a3',
  ink: 'black',
  errorRed: '#FF6666',
  codeEditBlue: '#2973b7',
  codeEditGreen: '#42b983',
  themedWhite: '#f5f2f0',
  // content width:
  contentWidthLaptop: '850px',
  sitePadding: "25px",

}

export default theme;
```


**Note:** Code highlighting is done with PrismJS.  [Prism Themes](https://github.com/PrismJS/prism-themes) have been installed, and is utilized in `/src/layouts/index.jsx`


### Content configuration

Our content is stored in remote repositories which are configured in a file called `repos.json`.   In this file any repository that is configured will be cloned into the `/repos` folder.  For convenience this folder has been added to `.gitingore`.

Each repository listed can optionally pull from a specific branch.  Use this property to test out the documentation changes before they are  merged to develop/master.

Example repos.json:

```json
{
  "docs" : {
    "githubURL": "https://github.com/uport-project/docs.git",
    "branch": "move-docs-to-reference"
  },
  "specs" : {
    "githubURL": "https://github.com/uport-project/specs.git",
    "projectTitle": "uPort Specs",
    "branch": "update-specs-for-docs-site"
  }
}
```

### GatsbyJS Configuration

The `gatsby-config.js` file bootstraps all the plugins that are utilized by GatsbyJS to build the site.  Most of the options here are configured through `SiteConfig.js` and utilized within `gatsby-config.js`` at runtime.

## Development

There are a few tasks that are included to aide in the development of the site:

1. `npm run setup`
1. `npm run update:docs:local`
1. `npm run update:docs:remote`
1. `npm run dev`

#### `npm run setup`

Run this command if you need to reset your workspace or have just cloned the repository for the first time.

Running this command will do the following:

1. Installs custom plugins contained in the `/plugins` folder.
1. Cleans the `/repos` folder.
1. Fetches markdown from remotes configured in `repos.json`.
1. Cleans the `/public` folder.
1. Copies cloned content from `/repos` to `/content/public`

#### `npm run update:docs:local`

Periodically it will be necessary to apply updates to the documentation markdown contained within the `/repos` folder.  When a local development instance of the site is running, this changes can be applied by running this command to copy the files from `/repos` to `/content/public`.


#### `npm run update:docs:remote`

To pull in documentation updates from the remote repositories, run this command.  It does the following:

1. Fetches markdown from remotes configured in `repos.json`.
1. Copies cloned content from `/repos` to `/content/public`

#### `npm run dev`

Run this command to build and run a local instance of the developer docs at `http://localhost:8000`.  GraphQL queries can be inspected at `http://localhost:8000/___graphql`.  `npm run update:docs:local` and `update:docs:remote` can both be run while the site is running locally to apply apply updates from local or remote markdown sources.

### Developer notes

There are a few things to take note of, or would be good to know while working with this repository.

#### `gatsby-node.js`

This is the brain of the site. It contains two functions, `createPages` and `onCreateNode`.

The former uses the output of `onCreateNode` to physically create the pages.

The later is used to apply updates to the page frontmatter that are used by GraphQL queries to build the site.  In this instance it sets the **slug** for each page.  Slugs are eventually used to create the static content at the location that the slug specifies during `createPages`.

#### `gatsby-config.js`

This contains configuration for several plugins used by gatsby.  Without this configuration `gatsby-node.js` will be unable to find the files and operate on them.

#### Plugins

  There is a `/plugins` folder that contains custom code.  At this time the following custom plugins are:
  1. `gatsby-remark-copy-linked-files`
  1. `gatsby-remark-catch-relative-markdown-links`

##### `gatsby-remark-copy-linked-files`

This is a plugin provided by GatsbyJS.  It's purpose is to iterate over all markdown documents and copy any files/images that are linked to the `/public` folder.  It then re-writes the links within the markdown to point to the new file location. We have extended it to ignore relative links to markdown files otherwise the relative links would be broken.

It is configured within `gatsby-config.js` and now accepts a new option `ignoreRelativeMarkdownLinks`

```json
{
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              ignoreRelativeMarkdownLinks: true
            }
},
```

##### `gatsby-remark-catch-relative-markdown-links`

This is a custom plugin that is used to re-write the relative links to markdown documents.  It detects if a link is a relative link and is a markdown document then updates the link to point to the new location within the `/public` folder.

## Deployment

The current site is configured for Github Pages deployment.  Deploying the documentation site is easy with the provided task `npm run build:gh`.  This will read configuration details about path prefix, and site urls to statically compile links for production.

For our purposes it is also necessary to update the DNS name within the repositories settings after each publish to the `gh-pages` branch:  https://github.com/uport-project/docs-site/settings.

The deployment steps for uPort are:
1. `npm run build:gh`
1. Go to https://github.com/uport-project/docs-site/settings and update the custom domain to reflect our documentation home (developer.uport.me or .space).

Optionally, manual deployment can be done.  Simply build the site and copy the output to its destination.  To build the site execute  `npm run build`.  This command will build the site and copy files to the `/public` folder.  Depending on the deployment source (S3, Netflify), this command can be modified however it is trivial to copy to the contents of the public folder to it's destination.
