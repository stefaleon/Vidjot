## Vidjot
### A project from [Node.js, Express & MongoDB Dev to Deployment](https://www.udemy.com/nodejs-express-mongodb-dev-to-deployment/) by [Brad Traversy](https://www.traversymedia.com)


### Dependencies
* Express
* express-handlebars



&nbsp;
### 01 Create the Node application

* Create *package.json* using `$ npm init`.
* Install express (`npm i -s express`).
* Configure *app.js*.
* Started the app (`$ node app`).



&nbsp;
### 02 Add the server-side rendering engine

* Install express-handlebars (`$ npm i -s express-handlebars`).
* Add the engine to the app.
* Create the *views* folder and add *index.handlebars*. Also add the *views/layouts* folder and the *main.handlebars* layout.

&nbsp;
--- *The basic html boilerplate code can be added by making use of the Emmet package in Atom, entering* `! + tab` ---
&nbsp;
* Add the `{{{body}}}` code snippet inside the body tag in *main.handlebars* so that the loaded views will be able to be outputted from the main.
* Add the *views/about.handlebars* view.
* Now the views can be rendered and data can be passed to them from the route definitions in *app.js*. 
