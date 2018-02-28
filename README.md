## uPort Docs Site Generator

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
