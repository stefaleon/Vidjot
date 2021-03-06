## Vidjot
### A project from [Node.js, Express & MongoDB Dev to Deployment](https://www.udemy.com/nodejs-express-mongodb-dev-to-deployment/) by [Brad Traversy](https://www.traversymedia.com)


### Dependencies
* Express
* express-handlebars
* mongoose
* method-override
* express-session
* connect-flash
* bcryptjs
* Passport
* passport-local


&nbsp;
### 01 Create the Node application

* Create *package.json* using `$ npm init`.
* Install express (`$ npm i -s express`).
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


&nbsp;
### 16 Add the users routes

* In the *routes* folder create *users.js*.
* Add the preliminary *login* and *register* user routes.
* Require and use the *users* routes in *app.js*.


&nbsp;
### 17 Setup for use of static files

* Add the *public* folder.
* Inside *public* create the *css* folder and add *style.css*, and the *img* folder and add a logo file.
* Require *path*.
* Use the *express.static* middleware and use *path.join* to pass the path to the *public* folder.


&nbsp;
### 18 Add the user login and register views

* Create the *views/users* folder and add the *login.handlebars* and *register.handlebars* views.
* Add forms with the appropriate inputs and buttons.
* Add the logo image on top. Add a link to the *style.css* in *main.handlebars* and style the logo class.
* Edit the user routes in order to render the views.
* Add links to the views in the navbar.


&nbsp;
### 19 Add the User model

* In the models folder add *User.js*. Define the user model in it.
* Install *bcryptjs* (`$ npm i -s bcryptjs` || `$ yarn add bcryptjs`) in order to be able to encrypt the password property.


&nbsp;
### 20 Validate the register user POST route

* In *routes/users.js* add the register POST route.
* Add password validation logic.
* Create the *_errors.handlebars* partial and move the error displaying code from *views/ideas/add.handlebars* to it. Then use it in the main layout (*views/layouts/main.handlebars*) so that it is available in all views.
* Remove the error displaying code snippet from *views/ideas/edit.handlebars* as well, and add client side validation by making the inputs `required`.



&nbsp;
### 21 Register users

* In *routes/users.js*, require *bcryptjs*.

* Also require the *User* model and load it to the *User* variable.

* Edit the register POST route in order to add the user to the database when the form is submitted without errors.

  * First check in the database if the email has already been registered.
  * Use the *bcryptjs* *genSalt* and *hash* methods in order to encrypt the password field.
  * Finally use the *mongoose* *save* method and register the user.
  * Display appropriate messages per case.



&nbsp;
### 22 Authentication with Passport Local

* Install *Passport* and *passport-local* (`$ npm i -s passport passport-local` || `$ yarn add passport passport-local`).
* In the users routes file (*routes/users.js*), require *passport*.
* Add the login POST route. Call *passport.authenticate* with the *local* strategy. On success redirect to the *ideas* route, while on failure back to the *login* route.
* Create a *config* folder and add the *passport.js* file wherein the strategy for *Passport* will be defined.
* Require the *Strategy* module from *passport-local*, *bcryptjs* and *mongoose* and bring in the *User* model.
* Define the local strategy in the export of the module with a *passport.use* call. Change the defaults by use of the *usernameField* option.
* In *app.js* require *passport* and pass it as a parameter to the configuration that we require as well.


&nbsp;
### 23 Login

* Edit the *_errors.handlebars* partial in order to cover the single error case.
* Search for the email in the database. If not found return *done* with relative message.
* If the email matches one in the database, compare the password.

*In a typical web application, the credentials used to authenticate a user will only be transmitted during the login request. If authentication succeeds, a session will be established and maintained via a cookie set in the user's browser. Each subsequent request will not contain credentials, but rather the unique cookie that identifies the session. In order to support login sessions, Passport will serialize and deserialize user instances to and from the session.*
* Add the *serialize - deserialize* code for the user in the export of the *passport config* module.

* In *app.js*, add the *Passport* related middleware (*passport.initialize* and *passport.session*). Make sure it is put after the *express-session* middleware statement.
