# Byer Company Next JS Starter Project

Built by [Byer Co Web Design](https://www.byer.co).

## Usage

### Setup

1. Make sure you have the latest/LTS version of [node](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/get-npm) installed as well as [nextjs](https://nextjs.org).
2. Clone this repository and run:

  ```bash
  npm install
  ```

### Development

While developing your website simply run:

```bash
npm run dev
```

Then visit http://localhost:3000/ *- or a new browser windows popped-up already -* to preview your new website. BrowserSync will automatically reload the CSS or refresh the whole page, when stylesheets or content changes.

### Static build

To build a static version of the website inside the `/out` folder, run:

```bash
npm run build
```

See [package.json](package.json#L7) for all tasks.

## Structure

```
|--.next            // Everything in here will be built with Next
|--components       // Shared Partials and Structure Docs
|  |--Footer.js     // Global footer partial imports Nav partial
|  |--Header.js     // Global header partial imports Nav partial
|  |--Nav.js        // Global navigation partial
|  |--Page.js       // Global page structure with universal META tags
|--pages            // YAML data files with any data for use in examples
|  |--_app.js       // Global application strcuture
|  |--_document.js  // Handles render props
|  |--index.html    // The index page
|  |--static        // Files in here ends up in the public folder
|--public           // Files that will pass through the asset pipeline
```

## Deploying to netlify

Push your clone to a new GitHub repo, then start a new netlify project, pick
your repository and configure it like this:

* **Build Command:** npm run build
* **Directory:** out

Now netlify will build and deploy your site whenever you push to git.

## Updating dependencies

1. Make sure you have `npm-check-updates` installed
2. Check for outdated packages by running `ncu -u`
3. Update the outdated files with `npm install --check-files`
4. Verify all your dependencies match the latest package versions with `ncu -u`
