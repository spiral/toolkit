# Spiral Toolkit
AJAX and form serialization toolkit for Spiral Framework.

Repository consists of 2 main components: *Toolkit* and *Keeper*

Toolkit is set of modules implementing a simple front-end framework, capable of serializing forms, showing loaders and datagrids

Keeper is set of scripts that demonstrate typical toolkit usage with Spiral Frameworks, including default styles based on bootstrap 4.

## Prerequisites
* [node 11.15.0+](https://nodejs.org/en/download/) use recent LTS version
* [yarn 1.17.0+](https://yarnpkg.com/en/docs/install) use recent stable version

Project is based on Lerna.

## Starting Up
1. Execute `npx lerna bootstrap` to install dependencies and link packages
2. Build toolkit package and dependencies `yarn build`

## Additional development commands
When developing both in co-dependent packages use separate commands like so:
- `yarn build:core` to build core package. 
- `yarn build:form` to build form package. 
- `yarn build:lock` to build lock package. 
- `yarn build:toolkit` to build toolkit package. 
- `yarn build:datagrid` to build datagrid package. 
- `yarn build:keeper` to build keeper package. 

Alternatively execute `yarn build` from package folder.

## Additional commands
`npx lerna run lint` to lint every package. Note this command is expected to be successfully completed before pushing data to repository.

## Project structure
Project is a [mono-repository](https://github.com/lerna/lerna#getting-started) with following packages:
- `packages/core` - core of the toolkit
- `packages/form` - form module for the toolkit
- `packages/lock` - lock module for the toolkit
- `packages/core` - main toolkit package


## Making a release

- `lerna publish`

Windows
------

On windows execute `git config core.autocrlf false` to disable automatic line ending conversion.

--------
MIT License (MIT). Please see [`LICENSE`](./LICENSE) for more information. Maintained by [Spiral Scout](https://spiralscout.com).
