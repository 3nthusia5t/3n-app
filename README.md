# 3n-app

3n-app is frontend of my personal website powered by Svelte. The frontend is fetching data from 3n-server dynamically using protobuffers. Most of the content such as cursors, images, graphs are created by me from scratch and are licensed under [CC BY-NC-ND 4.0 Deed](https://creativecommons.org/licenses/by-nc-nd/4.0/)

## Local preview

The local preview only shows the website template, it is not able to display articles nor content of articles.

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

You can preview the production build with `npm run preview`.

## Other components

The website consist of three components: 3n-articles, 3n-server and 3n-app. Each component is in separate repository. 

Quick description of components
- 3n-articles - The content of articles written in markdown. Contains also metadata like tags and title.
- 3n-server - Backend of 3n-app. Responsible for transcompilation markdown to html and dynamically serving content through protobuffers.
- 3n-app - Frontend.

Website deployment is automated with Docker. 

## Licensing

All media and images designed by me are licensed under [CC BY-NC-ND 4.0 Deed](https://creativecommons.org/licenses/by-nc-nd/4.0/).
The code is licensed under GNU GENERAL PUBLIC LICENSE Version 3 available to read in LICENSE file in root directory of this repository.

