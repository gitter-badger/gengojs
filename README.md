Gengo.js  
========

[![Build Status](https://travis-ci.org/iwatakeshi/gengojs.svg?branch=master)](https://travis-ci.org/iwatakeshi/gengojs)  [![Dependency Status](https://david-dm.org/iwatakeshi/gengojs.png)](https://github.com/iwatakeshi/gengojs/blob/master/package.json) [![License Status](http://img.shields.io/npm/l/gengojs.svg)](https://github.com/iwatakeshi/gengojs/blob/master/LICENSE) [![Downloads](http://img.shields.io/npm/dm/gengojs.svg)]() [![Version](http://img.shields.io/npm/v/gengojs.svg)]()

[![NPM](https://nodei.co/npm/gengojs.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/gengojs/)



Visit [Gengojs.com](http://www.gengojs.com) for installation, configuration, and documentation.
Also, feel free to fork gengo and the site to add more languages and locale support!

To fork gengo visit http://www.github.com/iwatakeshi/gengojs

To fork the site visit http://www.github.com/iwatakeshi/gengojs-site

If you would like to see more examples other than the ones on gengojs.com then check out the tests there's 127+ possible ways to gengo!


###Coming soon
* Updated Japanese docs.

###Supported locales

The list is huge! See the [map file](https://github.com/iwatakeshi/gengojs/blob/master/maps/locales.js) for a list of locales.


###Supported file extensions:

* json

```json
{
  ...
}

```

* js (modulized json)

```js
module.exports = {
  //...
}

```

###Recent Changes
*For previous notes on changes, see CHANGELOG.md*

**0.3.40**

* Added travis ci, dependency badge, and travis badge and other badges.
* Fixed langs.js map file. Added tests for `language()`, `getLocale()`, `setLocale()`

**0.3.41**

* Added more custom markdown syntax such as superscript.
* Removed a few markdown syntaxes that may become a conflict with mustache syntax.
* Replaced comparison method in loader module. It should compare json objects. If the objects are different then update the cache.

**0.3.42**

* Apologies. Removed comparison method and replaced with underscore's after I realized underscore had their own.
* Also auto-cache* feature now works for both .json and .js files. Meaning you can update your dictionary live in production and development. Gengo updates the cache only if the files have been updated.

**0.3.43**

* Updated English docs for gengojs-site.
* Added keyword to package.json

**0.3.44**

* Improved config module for gengo
* Replaced underscore with lodash.
* Removed utils module and replaced with regex.js.
* Replaced sails app. I will add more templates later.

###Notes

* Cache - gengo does cache if and only if the loaded objects are the same. If a change occurs, it will update the cached object. Tested with .json files.

###Message from the author

I want to thank those who tried or are actually are using gengo. Gengo was a learning curve but I know that this is just the beginning. As mentioned before, gengo still has room for improvement. I think better can be done but it's completely impossible without any feeback or contribution. If you would like to contribute, give feedback, or want to know how gengo works the please feel free to give me a holler at [@iwatakeshi](https://twitter.com/iwatakeshi). Again thanks! - iwatakeshi


###Tests
```bash
#run all
npm test

#run functions
npm run functions

#run cookies
npm run cookies

#run json
npm run json

#run libs
npm run libs

#run routes
npm run routes

#run api
npm run api

```

###Basic locale creator
```bash
#run factory
npm run factory
```

##Acknowledgements
gengo was made possible by:

* [locale](https://github.com/jed/locale)
* [App Root Path](https://github.com/inxilpro/node-app-root-path)
* [Moment.js](https://github.com/moment/moment)
* [Numeral.js](https://github.com/adamwdraper/Numeral-js)
* [lodash.js](https://github.com/lodash/lodash)
* [sprintf.js](https://github.com/alexei/sprintf.js)
