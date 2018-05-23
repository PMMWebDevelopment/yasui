# Steps taken to build this project

## NB: Most changes to configuration files require a restart of the local server to take effect

* Upgraded Node.js to 10.1.0, npm to 6.0.0, create-react-app to 1.5.2, all globally.

* Ran create-react-app to create project folder and initial file structure, which installed React 16.3.2 plus relevant versions of react-dom and react-scripts.

* Several measures to adjust compatibility with VSCode - these steps are often necessary in React projects built in VSCode to prevent linting and other formatting errors arising from the use of JSX, otherwise the "mock" HTML inside the render functions will disintegrate on file save: -
        - Installed eslint 4.19.1 globally (after project-local installation failed to resolve all issues)
        - Installed eslint-plugin-react as a project dependency.
        - Created .eslint.json file from Command Palette in VSCode and added the following lines: -
            - a new element underneath the env element: -

                "plugins": ["react"]

            - and, to the rules element: -

                "no-extra-semi": "error",
                "react/jsx-uses-react": 1,
                "react/jsx-uses-vars": 1

        - Set the following as a workspace setting in VSCode (this automatically produces a .vscode folder inside the development project containing a settings.json file: -

            {
                "files.associations": {
                    "*.js": "javascriptreact"
                }
            }

        - Installed babel-eslint 7.2.3 and included it in the .eslintrc json file as a parser.

        - Workspace-disabled any standard JS linters in VSCode as these will otherwise also interfere with ESLint and wreck the mock-HTML in the render functions on file save.

* Installed ajv 6.5.0 as a precursor to using any Bootstrap-based styling packages.

* Ran npm run eject (NB: this is an irreversible step). The following edits were now required in the now-accessible webpack configuration files: -
        - Find the line "test: /\.css$/" in the module.exports object in both the webpack.config.dev.js and webpack.config.prod.js files in the config folder newly created by the ejection process. In both files, this line is an element in the object dealing with CSS processing and, somewhere underneath that line (although it is in different places and on different nesting levels of the CSS processing object in each file) is another element with the key "loader:" where the value is a require.resolve() method into which is passed the string "css-loader" as an argument. In the options element beneath that loader, the lines below need to be pasted. A reference to the line number at which to paste the code in this project is given but this may change when trying to reproduce the project at a later date owing to changes in webpack version etc: -

        modules: true,
        localIdentName: "[name]__[local]__[hash:base64:5]"

        (line 167 in webpack.config.dev.js and line 186 in webpack.config.prod.js)

* Cleared the default content out of the render function in App.js except for a single outer wrapping div, and cleared the styling out of App.css except for the .App class itself. The default content was created by the create-react-app CLI and includes a spinning React logo: the import reference to this also has to be removed from App.js, otherwise the development app will not compile on running npm start. The logo.svg file itself can also now be removed from the app's src folder and all future assets (i.e. images) will be stored in an src/assets folder.

* Installed react-router 4.2.0

* Installed Boostrap 4.1.1 and reactstrap 6.0.1 <https://reactstrap.github.io/> for styling.

* Installed firebase 4.12.1 (latest version has some issues with node versions over 10 as also reported on Github <https://github.com/grpc/grpc/issues/15286>)

<!-- * Refer here for setting up firebase authentication: <https://firebase.google.com/docs/auth/web/start?authuser=0> -->

* Installed jp-conjugation <https://github.com/Pomax/node-jp-conjugations> to power the VerbChart page.

* Installed axios 0.18.0 to handle data calls to backend and third-party API's.

* The application state is going to need some management. This will be needed in the following use cases: -
        - Where the user clicks from the Lessons landing page to one of the Lesson Sections: which Section?
        - Where the user clicks in one of the Lesson Sections on one of the Lesson buttons: which Lesson do we load?

* Installed redux 4.0.0 and react-redux 5.0.7 to manage application state. Redux-thunk 2.2.0 also installed to enable redux state management alongside lazy loading.

* Installed interweave 8.1.0 to safely parse HTML from backend.

* Installed lodash.shuffle 4.2.0 to shuffle arrays so that only a handful of the examples available for each lesson need be shown on any visit to the site. This will provide a better fit for the UI and also provide a bit of variety for repeat visitors.

* Installed babel-polyfill 6.26.0 and core-js 2.5.6 to circumvent problem of app not showing at all in MS Edge / IE11. Latter package required importing to index.js entry point file.

* Commented out Redux Dev Tools line from store/index.js file as it was causing an error to be thrown in IE11. (Not needed for production build anyway.)

<!-- * Installed react-auth-firebase 1.2.1 -->

## TO DO

* Add user authentication so that users can bookmark lesson pages and call them back up automatically on login

* Build verb cheatsheets

* Add list of external learning resources