## Vidjot
### A project from [Node.js, Express & MongoDB Dev to Deployment](https://www.udemy.com/nodejs-express-mongodb-dev-to-deployment/) by [Brad Traversy](https://www.traversymedia.com)


### Dependencies
* Express
* express-handlebars
* mongoose



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


&nbsp;
### 03 Add a Bootstrap navbar

* Add the CDN content for Bootstrap CSS and JS in the main layout.
* Copy the collapsible navbar code from Bootstrap docs to the main layout body, above the views content.
* Add a *container* div and apply some styling changes to the navbar.
* Keep the required list items and edit the links in order to point to the app routes.


&nbsp;
### 04 Use partials

* Add the *views/partials* folder and the <i>`_navbar.handlebars`</i> file.
* Clean up the main view by moving the navbar code to the partial view.
* Edit and style the index view.


&nbsp;
### 05 Add mongoose

* Install mongoose (`npm i -s mongoose`).
* Use it in *app.js* in order to create a connection to a local database.


&nbsp;
### 06 Create a model

* Add the *models* folder and the *Idea.js* model.
* Load the model in *app.js*.


&nbsp;
### 07 Add a form

* Add the *Video-Ideas* dropdown in the nav partial.
* Add the *views/ideas* folder and the *add.handlebars* view which contains a form for adding ideas.
* In *app.js*, add the GET route for */ideas/add'* which will be rendering the *ideas/add* view.
