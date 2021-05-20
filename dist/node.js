// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"Hm7i":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Api = void 0;

var _flow = _interopRequireDefault(require("lodash/fp/flow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable camelcase */
class Api {
  constructor(username, password, account_code) {
    this.defaultRequest = {
      url: 'https://api.ongage.net/api',
      method: 'GET',
      headers: {
        X_USERNAME: username,
        X_PASSWORD: password,
        X_ACCOUNT_CODE: account_code
      }
    };
  }

  compile(parts = []) {
    return (0, _flow.default)(parts)(this.defaultRequest);
  }

}

exports.Api = Api;
},{}],"FOZT":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.put = exports.post = exports.get = exports.list = void 0;

var _merge = _interopRequireDefault(require("lodash/merge"));

var _qs = _interopRequireDefault(require("qs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const list = listId => req => (0, _merge.default)({}, req, {
  url: `https://api.ongage.net/${encodeURIComponent(listId)}/api`
});

exports.list = list;

const get = (path, args) => req => (0, _merge.default)({}, req, {
  method: 'GET',
  url: (req.url || '') + path + (args ? `?${_qs.default.stringify(args)}` : '')
});

exports.get = get;

const post = (path, body) => req => (0, _merge.default)({}, req, {
  method: 'POST',
  url: (req.url || '') + path,
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(body)
});

exports.post = post;

const put = (path, body) => req => (0, _merge.default)({}, req, {
  method: 'PUT',
  url: (req.url || '') + path,
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(body)
});

exports.put = put;
},{}],"DA8m":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContactsApi = void 0;

var _Api = require("./Api");

var _utils = require("./utils");

class ContactsApi extends _Api.Api {
  getById(id, listId = null) {
    const parts = [];
    if (listId) parts.push((0, _utils.list)(listId));
    parts.push((0, _utils.get)('/contacts/by_id/' + encodeURIComponent(id)));
    return this.compile(parts);
  }

  getByEmail(email, listId = null) {
    const parts = [];
    if (listId) parts.push((0, _utils.list)(listId));
    parts.push((0, _utils.get)('/contacts/by_email/' + encodeURIComponent(email)));
    return this.compile(parts);
  }

  getListsByEmail(email) {
    const parts = [(0, _utils.get)('/contacts/cross_account', {
      email
    })];
    return this.compile(parts);
  }

  create(payload, listId) {
    const parts = [];
    if (listId) parts.push((0, _utils.list)(listId));
    parts.push((0, _utils.post)('/contacts', payload));
    return this.compile(parts);
  }

  update(payload, listId) {
    const parts = [];
    if (listId) parts.push((0, _utils.list)(listId));
    parts.push((0, _utils.put)('/contacts', payload));
    return this.compile(parts);
  }

  changeStatus(payload, listId) {
    const parts = [];
    if (listId) parts.push((0, _utils.list)(listId));
    parts.push((0, _utils.post)('/v2/contacts/change_status', payload));
    return this.compile(parts);
  }

  changeEmail(payload, listId) {
    const parts = [];
    if (listId) parts.push((0, _utils.list)(listId));
    parts.push((0, _utils.post)('/v2/contacts/change_email', payload));
    return this.compile(parts);
  }

  delete(payload, listId) {
    const parts = [];
    if (listId) parts.push((0, _utils.list)(listId));
    parts.push((0, _utils.post)('/v2/contacts/delete', payload));
    return this.compile(parts);
  }

}

exports.ContactsApi = ContactsApi;
},{"./Api":"Hm7i","./utils":"FOZT"}],"eOSc":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListsApi = void 0;

var _Api = require("./Api");

var _utils = require("./utils");

class ListsApi extends _Api.Api {
  get(id) {
    const parts = [(0, _utils.get)('/lists/' + encodeURIComponent(id))];
    return this.compile(parts);
  }

  getAll(config = {}) {
    const parts = [(0, _utils.get)('/lists', config)];
    return this.compile(parts);
  }

}

exports.ListsApi = ListsApi;
},{"./Api":"Hm7i","./utils":"FOZT"}],"Focm":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ContactsApi", {
  enumerable: true,
  get: function () {
    return _ContactsApi.ContactsApi;
  }
});
Object.defineProperty(exports, "ListsApi", {
  enumerable: true,
  get: function () {
    return _ListsApi.ListsApi;
  }
});

var _ContactsApi = require("./ContactsApi");

var _ListsApi = require("./ListsApi");
},{"./ContactsApi":"DA8m","./ListsApi":"eOSc"}]},{},["Focm"], null)