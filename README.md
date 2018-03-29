## Vidjot
### A project from [Node.js, Express & MongoDB Dev to Deployment](https://www.udemy.com/nodejs-express-mongodb-dev-to-deployment/) by [Brad Traversy](https://www.traversymedia.com)


### Dependencies
* Express
* express-handlebars
* mongoose
* method-override
* express-session
* connect-flash



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
* In *app.js*, add the GET route for */ideas/add* which will be rendering the *ideas/add* view.


&nbsp;
### 08 Server-side form validation

* Require and use the body-parser middleware.
* In *app.js*, add the */ideas* POST route.
* Add server-side validation for setting both form fields to required, by use of conditionals and an array arbitrarily named *errors*.
* Use a handlebars loop to display the server-side error messages in the form.
* Client-side validation may also be added by using the *required* keyword in the inputs.


&nbsp;
### 09 Save an Idea to MongoDB

* On successful form submission, save the data to a new instance of the used data model (Idea).
* Then display the returned object from the promise (temporarily, will eventually redirect to the */ideas* route).


&nbsp;
### 10 Fetch Ideas from MongoDB

* Create the */ideas* GET route. Call *find()* on the Idea model, sort the result by date in descending order and render the result to the *ideas/index* view.
* In the *views/ideas* folder add the *index.handlebars* view. Display all the ideas with a handlebars loop.
* Edit the form POST route in order to eventually redirect to the */ideas* GET route on successful submission.


&nbsp;
### 11 Edit Ideas form and GET route

* Add the */ideas/edit/:id* GET route to the *Edit Idea* form which will be rendering the edit form. Find the one idea with the id specified in the request parameters.
* In the *views/ideas* folder add the *edit.handlebars* view.
* Add an edit button in the *index.handlebars* view.
* Make the edit form as an adjusted copy of the add form.  

&nbsp;
### 12 Update Ideas

* Create the */ideas/:id* PUT route. Find the one idea with the id specified in the request parameters. Set the new values, save the idea and redirect to the */ideas* route.
* The form cannot by default send a PUT request (form method can only be set to "post"), so we will install and use the *method-override* package (`$ npm i -s method-override`).
* Configure properly the form action in the *edit.handlebars* view, defining the route to a specific id and using the query that sets the method to PUT. Include the hidden input for the `_method`.



&nbsp;
### 13 Delete Ideas

* In the *index.handlebars* view, add a form which contains a hidden input for the `_method` and a button. The form action defines the route to a specific id using the query that sets the method to DELETE.
* Create the */ideas/:id* DELETE route. Remove the idea with the id specified in the request parameters and redirect to the */ideas* route.


&nbsp;
### 14 Flash messages

* Install and use express-session (`npm i -s express-session`).
* Install and use connect-flash (`npm i -s connect-flash`).
* In another *use* statement, set the messaging local variables for various messages.
* Create the partial view *views/partials/_msg.handlebars*. The messages are conditionally displayed.
* Inject the messages' partial view in the main layout.
* Call *flash* in the app routes and set the appropriate message per case.



&nbsp;
## Authentication with Passport

&nbsp;
### 15 Use Express router to tidy up the routes

* Add the *routes* folder and create *ideas.js*.
* Move the *Ideas* routes from *app.js* to *ideas.js*. Edit the routes by replacing *app* with *router* and removing the */ideas* prefixes from the urls.
* Require the *ideas* routes in *app.js*. Use them by linking back the */ideas* prefix to the *ideas* routes file.
* Also move the *Idea* mongoose model definition from *app.js* to *ideas.js*.
