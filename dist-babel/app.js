"use strict";

require("core-js/modules/es.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppLoader = void 0;

var _utils = require("./utils.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AppLoader =
/*#__PURE__*/
function () {
  function AppLoader() {
    _classCallCheck(this, AppLoader);

    this.loaded = false;
  }

  _createClass(AppLoader, [{
    key: "setLoaded",
    value: function setLoaded() {
      this.loaded = true;
    }
  }]);

  return AppLoader;
}(); // CommonJS
// var utils = require('./utils.js')
// console.log(utils.adder(1,2))
// console.log(utils)


exports.AppLoader = AppLoader;
console.log((0, _utils.adder)(1, 2));