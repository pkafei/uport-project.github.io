<div align="center">
    <img src="static/logos/logo-1024.png" alt="Logo" width='100px' height='100px'/>
</div>

# Gatsby Docs Starter

#### This Project was forked from [Gatsby Advanced Starter](https://github.com/Vagr9K/gatsby-advanced-starter)

A starter skeleton with advanced features for [Gatsby](https://github.com/gatsbyjs/gatsby/).

Developed for creating Documentation or Tutorial websites.

### [Demo](https://gatsby-docs-starter.netlify.com/)

This template provides everything but the content. You could just write all your lessons in markdown files, configure a few lines of code, and have a completely built documentation website.

## Features

<div align="center">
    <img src="static/screen-shot-v0-1.png" alt="Logo" width='800px' />
</div>
<div align="center">
    <img src="static/screen-shot-v0-2.png" alt="Logo" width='800px' />
</div>

### New Features

* Basic UI
* Styled Components CSS w/ ThemeProvider for easy cross-site UI changes.
* Custom code-highlight theme
* React Icons
* Configured to auto generate documentation 'Table of Contents' - you just need to follow the file frontmatter conventions in the 'lessons' folder.
* You can also have blog posts.

### Updates

* December 23, 2017 - The 'Docs' page is now mobile responsive.

### These are the features from [Gatsby Advanced Starter](https://github.com/Vagr9K/gatsby-advanced-starter), which remain:
* Blazing fast loading times thanks to pre-rendered HTML and automatic chunk loading of JS files
* Separate components for everything
* High configurability:
  * User information
  * User social profiles
  * Copyright information
  * More!
* Author segment
  * Name
  * Location
  * Description
  * Links
  * Follow Me button
* Posts in Markdown
  * Code syntax highlighting
  * Embed YouTube videos
  * Embed Tweets
* Tags
  * Separate page for posts under each tag
* Categories
  * Separate page for posts under each category
* Disqus support
  * Notifications about new disqus comments
* Google Analytics support
* NPM scripts for GitHub Pages deployment
* Social features
  * Twitter tweet button
  * Facebook share/share count
  * Reddit share/share count
  * Google+ share button
  * LinkedIn share button
  * Telegram share button
* SEO
  * Sitemap generation
  * robots.txt
  * General description tags
  * Schema.org JSONLD (Google Rich Snippets)
  * OpenGraph Tags (Facebook/Google+/Pinterest)
  * Twitter Tags (Twitter Cards)
* RSS feeds
* Loading progress for slow networks
* Offline support
* Web App Manifest support
* Development tools
  * ESLint for linting
  * Prettier for code style
  * Remark-Lint for linting Markdown
  * write-good for linting English prose
  * gh-pages for deploying to GitHub pages
  * CodeClimate configuration file and badge

***

### Notes
 [Ruben Harutyunyan](https://github.com/Vagr9K) did most of the hard work with [Gatsby Advanced Starter](https://github.com/Vagr9K/gatsby-advanced-starter).
 The rest of the credit is due to [Gatsby](https://github.com/gatsbyjs/gatsby/).


<<<<<<< variant A
Templates and build tools to create our developer docs site. Our developer site can be found here [developer.uport.me](https://developer.uport.me). Much of the content of the site is written in Markdown and can be found in [this repo](https://github.com/uport-project/docs). Content related pull requests can be submitted there.

### Build Docs Site

Clone project, enter project and install modules:

```bash
git clone https://github.com/uport-project/docs-site.git
cd docs-site
npm install
```

Initialize and fetch all submodules. This [repo](https://github.com/uport-project/docs) with the content is included as a submodule and is necessary to build the site.

```bash
git submodule init
git submodule update
```

Now you can run build and deploy commands.

To build site and run local server to server it with live updates:
```bash
npm start
```

To just build the site, build is written to public folder.
```bash
npm run build
```

After the site is built, you can push it to S3 to deploy it. It uses [s3-deploy](https://github.com/import-io/s3-deploy). To push to our uPort site you will need the necessary AWS credentials and to configure them as described in s3-deploy. Once configured:

To deploy to developer.uport.space:
```bash
npm run deploy-test
```

To deploy to developer.uport.me:
```bash
npm run deploy-production
```

Releases to developer.uport.space will mirror the public folder on the developer branch, while releases to developer.uport.me will mirror the public folder on the master branch. So push changes to appropriate branches while deploying.


Structure and tooling based on [gulp-pug-sass-seed](https://github.com/azemoh/gulp-pug-sass-seed). Look there for more details on some of the tooling and dependencies.
>>>>>>> variant B
 WARNING: Make sure to edit `static/robots.txt` to include your domain for the sitemap!
======= end
