# rbxts-multiplace-setup-flamework
Just an example of a working multi place project using Roblox-TS and Flamework

## Why?
Because it's a pain to understand and setup a functioning multi-place project, I've made a default project with everything setup, ready to be used by anybody.

## How to use
1. Simply clone the project
`git clone https://github.com/imkalrbx/rbxts-multiplace-setup-flamework.git`
2. Run `npm install` to install all the dependencies.
3. Do your stuff.

You can compile your place using
- `npm run build:game` To build
- `npm run watch:game` To start watch mode
- `npm run serve:game` To run a rojo server

(PS: use the VSCode "Task Runner" extension 😗)

## Adding a new place
Simply duplicate the `game` folder and do your stuff.

Don't forget to add three (or two) new scripts in your package.json to make your life easier.

## Things you might want to do/change
- **Have a common /include folder**: Just move the places/game/include folder to the root of the project;
add `-i /include` to both the build and watch scripts in `package.json`; update the relevant entries in .gitignore
- **Update flamework**: see this page https://fireboltofdeath.dev/docs/flamework/installation#updating-flamework
- **Add the additional modules**: again, see this page https://fireboltofdeath.dev/docs/flamework/installation#packages

## Trivia
- The 'place' with shared code is named `common`, because it's a bit awkward to import from `shared/shared`.
- **Q: Why Flamework?** A: It's the framework I'm using right now, and to be honest I couldn't be bothered to make a separate Flamework-less version.
Just do the opposite of the steps you can find there https://fireboltofdeath.dev/docs/flamework/installation#updating-flamework to get rid of it.
