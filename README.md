# Angular gulp starter
Simple dev/prod gulp build for Angular (2+) using systemjs, rollup, ngc (AOT), scss, and with dev/prod servers via express.

### Setup

    npm install gulp -g
    npm install

### Commands

##### Development buid
    
    gulp build-dev --color

Deveopment build includes compilation of SCSS and typescript, and bundling of rxjs to single file.

##### Production build

    gulp build-prod --color

Productin build includes compilation of SCSS, AOT compilation and tree-shaking with Rollup. All result files moved to `dist` dir. Production build output do not conflicts with development.

##### Start develoment server

    npm start

Server will be listening on [http://localhost:8181](http://localhost:8181).

##### Start production test server
    
    npm run start-prod

Server will be listening on [http://localhost:8181](http://localhost:8282), with gzip content compression enabled.

### Using Visual Studio

##### Setup

1. Setup [Visual Studio 2015](https://www.visualstudio.com/downloads/) (for example, Community Edition)
2. Setup [TypeScript for Visual Studio 2015](https://www.microsoft.com/ru-ru/download/confirmation.aspx?id=48593)
3. Setup [Web Compiler](https://marketplace.visualstudio.com/items?itemName=MadsKristensen.WebCompiler) extension for working with SCSS from IDE.
4. Run `gulp build-dev --color` from terminal, to make rxjs bundle. 

##### Working

TypeScript and SCSS set up to be compiled on file save. SystemJS loads every file separately, so you only need save your changes, and reload browser window with cache disabled (`Dev Tools -> Network -> Disable cache checkbox` in Chorme).

To force recompilation of all files make rebuild of the solution (Alt+B, Alt+R). To force recompilation of SCSS file, `right click -> Web Compiler -> Re-compile file`

### Installing dependencies

If library should be imported via `import` statement into typescript, then:

1. For development: make sure, that SystemJS will find this lib by `buid-tools/systemjs-config.json`. In some cases nothing needed, in some cases you should map library name to its path, as it made for @angular modules.
2. For production: make sure, that Rollup will find this lib by `build-tools/rollup-config.js`. In most cases, `rollup-plugin-node-resolve` plugin will make the work without any setup.

If library should not be imported, and its only needed to add it page, then:

1. For devleopment: add `<script>` tag into `index.html` in section `<!-- development -->`.
2. For production: add row to `build.prod.js` to function `commonBundle`; you can specify full path, or use `pathTools.resolvePackagePath` funciton to automaticly resolve library path.