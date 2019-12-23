
------------------------------------------------------- EURO RAIL---------------------------------------------------------------

***-------- Steps to Setup the application for development--------------***

1) Checkout master
2) Run : - npm install
3) Run : - npm run dev   * This will start the webpack dev server. 
*Run on browser http://localhost:8080/

* --- Build for production ---- *
1) Run : - npm run build * This will build the package for deployment on server *Modify mode to production.
2) Express is already installed as a part of dev dependencies and server is also configured to server the dist folder.
3) Run : - npm run start to start the server  *Run on browser http://localhost:4200/


***---------Test---------***
1) Run : - npm run test * Jest is configured for testing .
Coverage will be stored in src/coverage folder


**----------------------Application Description------------------------------**

*Euro Rail application has two view 
1) Landing view with image of "EURO RAIL"
2) Contact List  View with the tab like structure to display the contactList 

Contact List : -
	1) It consist of Tab View with alphabet as a single tab 
	2) User can view the names according the first Character of the name 
	3) Search input is provided to search on the "First Name" and the "Last Name"
	4) Every Row can be click and complete details of the user can be retrieved 
	5) An extra tab is present to display the name of the user who firstName is not in English or special character is involved.
	
	
**-------------------------------Browser Support --------------------------------**

It is supported by the latest browser like (IE11, Firefox, Chrome)
It is Responsive and can be used in mobile browser.
Lazy loading is used to demonstrate loading of the file when it is required to reduce the loading time.

**-----------------------------------Build Process -------------------------------**

Webpack is used to build the application, load the modules and provide the dev server
All the webpack configuration is present in webpack.config.js  page in the config folder

**-----------------------------------Frame Work and Library's used---------------------------------**

* It is build using React library (react , react-dom, react-router-dom, react-router, axios, react-test-renderer)
* Css module option is used for the styling of the application view


**--------------------------------Folder structure ------------------------------------------------**
Config : - It contains all the config files (Webpack, Jest, postcss)
Server : - Server contains file (server.js and express.js) it can be used to serve the dist using staticMiddleware
src : - It consist of the application related folders  (image,react and index.html, main.js main.css)
							image : - It consist of the images,
							index.html : -It is index page that is loaded with main.js to start react app
							main.js : - This files is served as the entry point to load all the other files in the webpack
							main.css: - This is the css file for index.html.
							react : - This folder consist of our react application folder and files
react: - It consist of following folder (Components, Container, DataAccess)

	Components: - consist for mostly the functional, components such as (Header, Footer, Welcomepage)
	Cotainer : -It consists of Class components and its refered functional Components
	DataAccess: - It consists of Axios instance file.
	
**----------------------------Production Package -----------------------------------------------------**

* Production package is crated and stored in dist folder it can be deployed to serve inorder to run the application.
	
						
							
**Next Steps :-** 

*We can add other Views as well to add new functionalists  						

1) Added user to contact list .
2) Delete user from the contact list .
3) Add Spinner to indication the service call in progress.
4) Customize the input Fields and Button to use custom React  components.









