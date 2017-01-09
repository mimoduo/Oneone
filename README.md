# Oneone

> A boilerplate for javascript plugin development

## What is Oneone?

Oneone was initially created to recreate an environment like codepen within github. A little bit of dev time later and it turned into a quick boilerplate for javascript plugin development.

## Highlights

* Gulp starter kit
* Pug and SASS compilation
* Pre-constructed Pug template
* Javascript module pattern with Babel
* Complete asset watch with live reloading

## Installation

Oneone uses _node package manager_ in order to download all of the necessary build dependencies. If you haven't downloaded node before, head over to [node.js](https://nodejs.org/en/) to download the latest version of node. Once you've installed node and have downloaded Oneone, let's `cd` into the project directory and then download our dependencies using a terminal:

```sh
cd <folder-of-Oneone>
npm install gulp-cli -g
npm install
```

## Quickstart Guide

After installing the necessary dev dependencies, edit your package.json file in the root of the Oneone directory. The very least you'll need to change is the `name` field to your unique plugin name. This tells the gulpfile what data to pass to your template and what to rename the distributed files.

```json
{
	"name": "your-plugin-name",
	"description": "Your plugin description"
}
```

Next, check out src/script.js and edit the name there as well:

```js
var YourPluginName = (function() {

})();
```

And lastly, edit the name found in src/init.js:

```js
YourPluginName.init();
```

### Running Gulp

At this point you have installed all the necessary dependences and changed any names to make the plugin your own. Run the `gulp` command to get started with development:

```sh
gulp
```

**Gulp will start compiling all of your code, begin watching your files, and open up a new browser window for your plugin.**

## Created With Oneone

* [Quizquiz](https://github.com/mimoduo/Quizquiz)
* [keeper](https://github.com/mimoduo/keeper)

## Thank You, Everyone!

Hopefully you enjoy getting your plugin up and running with Oneone. If you liked how simple Oneone is I bet you'd like my other project, [Mimogear](https://github.com/mimoduo/Mimogear) - _a simple static site generator_.
