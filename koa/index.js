(function() {
  'use strict';
  var
    version = require('../package').version,
    core = require('gengojs-core'),
    pack = require('gengojs-default-pack');

  /**
   * Global scope
   * @private
   */
  var global;
  /**
   * @method gengo
   * @description Main function for Gengo.
   * @param  {Object} options The configuration options.
   * @return {Function}   The middleware for express.
   * @public
   */
  var gengo = function gengo(options, plugins) {
    global = core(options, plugins || pack());
    return function*(next) {
      global.ship.bind(global)(this);
      yield next;
    };
  };
  /**
   * @method clone
   * @description Returns the API.
   * @return {Function} The API.
   * @public
   */
  gengo.clone = function() {
    return global.assign.apply(global, arguments);
  };

  /**
   * version
   * @type {String}
   * @public
   */
  gengo.version = version;

  // CommonJS module is defined
  module.exports = gengo;


  /*global ender:false */
  if (typeof ender === 'undefined') {
    /**
     * @type {Gengo}
     * @private
     */
    this.gengo = gengo;
  }

  /*global define:false */
  if (typeof define === 'function' && define.amd) {
    define([], function() {
      return gengo;
    });
  }
}).call(this);
