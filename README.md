# Ada's Backbone scaffold
This repository holds a couple of versions of Ada's scaffold for Backbone projects.

## Quick Start
### Development
In order to get started developing a Backbone application with this scaffold, run the following commands in the directory where the scaffold project files are located:

```bash
npm install
```
This command tells npm to install every dependency listed in the `package.json` file (more details below [in the FAQ](#scaffold-files-and-folders)). This is very similar to the `bundle install` command.

```bash
npm start
```
This command tells npm to run the `start` script that is configured in `package.json`. The scaffold's `package.json` configures the `start` script to run a local development webserver that uses webpack ([see below](#major-components)).

The result is very similar to running `rails server` in your Rails projects. However, one major difference is the output that you see in your terminal:

![webpack dashboard video](http://i.imgur.com/VSqzjKX.gif)

This screen is the view from [webpack dashboard](https://github.com/FormidableLabs/webpack-dashboard), which is a handy tool that lets us see what webpack is doing.

For our purposes we should only need to look at the "Log" portion of the screen, which is where we will see any JavaScript syntax errors that webpack catches. If you move your mouse cursor in that section of the screen and use the scroll wheel (or two finger up/down) you can scroll back through the log and see the full error details.

## FAQ
### What is the Backbone scaffold?
This scaffold provides a lean starting point for building front-end applications with the Backbone JavaScript library. Because Backbone is a library and not a full framework, it does not provide many of the useful tools for quickly starting development that frameworks such as Rails do provide. The choices about how to structure a project and fit various pieces together are all left to the developers, giving maximum flexibility to create a design that suits their needs.

For the purposes of introducing the Backbone library, and larger front-end web application development in general, Ada has decided to provide a "scaffold" which will get students up and running with Backbone much more quickly and provide a more consistent experience for both live coding examples and projects throughout the Backbone curriculum.

### Is this The Right Way to use Backbone?
Nope! One of the results that comes from Backbone being a library rather than a framework is that there is no one "right way" to use Backbone. In contrast to Rails, as developers we say that Backbone is "unopinionated" -- it gives users of the library a few critical pieces and then steps away to let us make our own choices about how to use them.

Outside of Ada it's very likely that Backbone is being used in different ways than we use it here, possibly in significantly different ways. This comes down primarily to the different needs and circumstances of those other projects as compared to ours (such as not being primarily for instruction). It also comes down to the different developers involved in the project and their opinions and history with Backbone.

Above all, remember that another project using Backbone in a different manner is not incorrect to do so. The best way to deal with encountering such a project would be to have empathy for its creators and to seek understanding of the reasons for the design decisions they made.

### What is a JavaScript module?
TODO

### What is in the scaffold?
This scaffold consists primarily of "infrastructure" code that defines a particular development and testing workflow using modern JavaScript practices. For earlier projects we provide a scaffold that includes empty class definitions for each class to be used in the project in order to minimize decision paralysis about project structure when Backbone is still very new.

The scaffold consists of a number of components that fit together in order to make developing with Backbone a faster, more directed experience. In this section we will briefly explain all of the files included in the scaffold (the version in the `scaffold/application` branch).

**NOTE**: Understanding all of these files is not necessary for using the scaffold! Ada is providing this information because we know that many of our students will be curious about everything contained in the scaffold. Our focus is on getting students to understand and be familiar with Backbone itself, if this information is getting in the way of that goal please ignore it!

#### Major Components

* [npm](https://www.npmjs.com/) - Package Manager
  
  npm is the equivalent, for Node.js, of Ruby's RubyGems and Bundler projects. Its job is to provide access to a registry of existing open-source software (known as packages) and allow a project to specify which packages it depends upon.

  npm can be used on the commandline to perform various tasks, including installing all dependencies, adding new dependencies, and running pre-defined script commands (ala Rake). See the Quick Start section for details on the most relevant commands to use.
* [Babel](https://babeljs.io/) - JavaScript compiler
  
  Babel's job is to take JavaScript code written in a [newer version of JavaScript](http://babeljs.io/docs/learn-es2015/) (known as ES6 or ES2015) and convert it to equivalent code in an older version of JavaScript (generally ES5) which has more universal support in web browsers.
  
  Until now our curriculum has focused on writing ES5 JavaScript, and we can continue to do so for almost all things. One place where we will be using ES6 syntax is for [JavaScript modules](#what-is-a-javascript-module).
* [webpack](https://webpack.github.io/) - Module bundler
  
  webpack is a tool for taking multiple JavaScript modules (which we will be creating using the ES6 syntax) and putting them together coherently into a single JavaScript file, because web browsers don't really understand the concept of JavaScript modules (yet). See [What is a JavaScript module?](#what-is-a-javascript-module) FAQ answer for details.
* [Jasmine](https://jasmine.github.io/) - Testing framework
  
  Jasmine is a testing framework that uses spec-style tests, with a strong influence from RSpec. When we get to the point of including tests for our Backbone projects, this is what we'll use. More guidance on how to write and run tests with Jasmine will be included in the curriculum when we introduce testing.
* [jQuery](https://jquery.com/) - DOM manipulation & AJAX library
  
  This is the same jQuery that Ada's curriculum has been using up until now. Backbone builds ontop of it rather than re-inventing it.
* [Underscore](http://underscorejs.org/) - Utility library
  
  Underscore is the kind of library that is almost unique to JavaScript. This is because it provides a wide variety of helpful functions that, in every other modern language, would be built-in. It was written by the creator of Backbone and is used heavily within the implementation of Backbone.
  
  For the Ada curriculum it will mostly be used for the `template()` function in our views (more details on this will be provided when we introduce Backbone views).
* [Backbone](http://backbonejs.org/) - MVC Library
  
  Backbone is the core library that we will be using when creating the projects in this section of the JavaScript curriculum. It allows for something akin to the MVC pattern from Rails by providing the pieces necessary to create such a design.

#### Scaffold Files And Folders
| Path/File | Purpose |
|:----------|:--------|
| `.babelrc` | This file configures the Babel compiler according to our needs. We use it to tell Babel to compile our code as though it were ES2015, and to look in the `src/` and `spec/` directories for module files when using `import`. |
| `.jshintrc` | This file configures the JSHint linter. A linter is a program that analyzes code and tells the programmer when their source code does not match particular style guidelines (such as improper indentation or missing semicolons). Our JSHint configuration tells JSHint to assume the code is ES6 (same as ES2015). Optional: To use JSHint in Atom install the `linter-jshint` package from within the Settings screen. |
| `build/` | This folder will hold all of the static content files including our HTML and CSS. |
| `build/index.html` | This is the actual HTML code for our Backbone project. It should only contain the "static" page elements (those that will not be duplicated, and will not be added/removed from the page), plus any Underscore templates that our views will use to render the "dynamic" page elements. It also includes a `<script>` tag to include the JavaScript file that webpack creates for us. |
| `node_modules/` | This folder holds all of the npm packages that have been downloaded with `npm install`. Generally the contents of this directory are not important to our curriculum. It should always be added to the `.gitignore` file. |
| `package.json` | This JSON file holds the project metadata for npm. It's like a very extended `Gemfile`, but it includes fields for specifying the project name, home page, copyright license and more. Those fields are included because this file will be used if we decide to make our project available as a package in the npm package registry. <br><br>The portions of this file that we will be most concerned with are the `dependencies`, `devDependencies`, and `scripts` sections. These specify what packages will be installed when `npm install` is run, and what commands will be run by the `npm start` and `npm test` commands. |
| `spec/` | This folder will hold all of the Jasmine test files that we will write (if tests are a requirement for the project). |
| `spec/support/jasmine.json` | This file configures Jasmine, akin to the `test/test_helper.rb` file in our Rails projects. |
| `src/` | This is where all of the project source code lives. |
| `src/app.js` | This is the "main entry point" for the project's javascript code. When webpack bundles all of our code up into a single JavaScript file, this is the code that runs when that file is included in an HTML file via `<script>` tags. |
| `webpack.config.js` | This JavaScript file configures webpack. There's a lot going on in here, feel free to ask Charles for explanation of any details. |

## Versions
| Branch name | Purpose |
|:------------|:--------|
| [`scaffold/bare`](https://github.com/AdaGold/backbone-baseline/tree/scaffold/bare) | Empty scaffold, with general project structure but no code. |
| [`scaffold/application`](https://github.com/AdaGold/backbone-baseline/tree/scaffold/application) | Empty application scaffold. This builds on the bare scaffold by adding an `Application` model class and an `ApplicationView` view class. |
| [`scaffold/rolodex`](https://github.com/AdaGold/backbone-baseline/tree/scaffold/rolodex) | Project scaffold for the Rolodex project. This builds on the Application scaffold by adding classes and static content (HTML and CSS) specific to the Rolodex project. |
