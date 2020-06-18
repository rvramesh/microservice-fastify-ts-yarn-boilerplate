# Microservice starter project using fastify, yarn, typescript

This is an easy boilerplate for building Node.js microservices with TypeScript. Put your typescript code inside `./src` folder and you are ready to go!

This uses [Yarn 2's Zero Installs](https://yarnpkg.com/features/zero-installs) to speed up application start

## Features

* VS Code debugger configs in .vscode folder
* tsconfig.json for [typescript compiler](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
* eslint rules extending eslint:recommended, @typescript-eslint/eslint-recommended,@typescript-eslint/recommended,prettier and prettier/recommended  [eslint](https://eslint.org/)
* uses [make-promises-safe](https://github.com/mcollina/make-promises-safe) - A node.js module to make the use of promises safe. 
* uses [husky](https://github.com/typicode/husky) pre-commit hooks to build before commit

## Getting Started

```
# Clone the repo
git clone https://github.com/rvramesh/microservice-fastify-ts-yarn-boilerplate.git {your_project_name}
cd {your_project_name}

# Remove reference to the original starter
rm -rf .git 

# Initialize Yarn 2. Install yarn globally if required by using npm install -g yarn
yarn set version berry

# Initialize package.json
yarn init

# Install development dependencies
yarn install

# Install Editor-SDK Integration of yarn2. The below exmaple uses vscode. 
# ref: https://next.yarnpkg.com/advanced/editor-sdks#vscode
yarn dlx @yarnpkg/pnpify --sdk vscode

# Open the project in vs code. If alreadt opened, close and reopen the project. 
# For safety reason VSCode requires you to explicitly activate the custom TS settings:
# Press ctrl+shift+p in a TypeScript file
# Choose "Select TypeScript Version"
# Pick "Use Workspace Version"

# start development server
yarn run dev
```

## Included yarn scripts

Run this commands from the project folder with `yarn run "script-name"`.
* `dev`: runs project in development mode
* `build`: builds all .ts files from `./src` folder to `./build`
* `prod`: runs project in production mode

## Debugging
> Warning: This starter uses new V8 [inspect protocol](https://nodejs.org/api/debugger.html) so you have to use at least Node.js 7.7.4 if you want to use the included debugger settings.

#### Steps:
* start dev server with `yarn run dev`
* now you have two ways:
  * use the provided debug URL in Chrome
  * use VS Code included (inside .vscode folder) `attach` config (best debugging experience)

