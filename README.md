# Modern Frontend Demo
A static NextJS website written in React for testing interactivity, Tailwind for styling, and Relix for theming.

# Features of the app
Should be aesthetically pleasing and take advantage of built in components provided by Relix and Tailwind.

Should have a dark mode slider at the top to switch between a light mode theme and dark mode theme.

# Pages
Use this as a guide of both the pages you are building out and how to build/test.

## Index
Introduces this project, stating that the purpose of the project is to provide a concise demo

Links back to the code in the john-ipromote/modern-frontend-demo GitHub repository.

## Libraries Page
Lists every major library used in a intuitive and aesthetically pleasing list. Each is described in a collapsed mode in a single sentence. Upon mouseover, each list item expands to three times normal size and has a more complete ~3 sentence description.

e.g. NextJS
- list item description:
NextJS is a production-ready React framework that handles server-side rendering and routing out of the box. 
- On hover, the following is added to provide detail:
It eliminates configuration overhead by providing opinionated defaults for bundling, code splitting, and deployment while maintaining flexibility for customization. The framework supports hybrid rendering approaches, allowing pages to be generated statically at build time or dynamically on the server based on your application's needs.

## Build/Test Page
Use the above libraries and frameworks and use Bun to build/compile the site. Use Github Actions, ideally officially sanctioned one, to build, run unit tests, and deploy to Github pages. After deploy, have the integration test run. 

Use the most popular testing framework for typescript Unit tests. Only add where it makes esne.

Use Playwritght for integration tests. The first integration test should open the index page, browse to the Libraries page, mouseover the NextJS item and then check for the text in the hover.

The page itself should discuss have a similar table and discurss Github Actions, Github Pages, Bun and any other TS build tools, the TS testing framework, and Playwright.