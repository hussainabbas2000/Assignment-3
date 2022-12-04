module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/session.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/toPropertyKey.js");
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"];
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj["default"] = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
module.exports = _interopRequireWildcard, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"];
function _regeneratorRuntime() {
  "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) {
              if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            }
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) {
      keys.push(key);
    }
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      }
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");
var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");
var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toPrimitive.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"];
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toPropertyKey.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/toPrimitive.js");
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js")();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./node_modules/react-storefront/mock-connector/account.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-storefront/mock-connector/account.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = account;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _fulfillAPIRequest = _interopRequireDefault(__webpack_require__(/*! ..//props/fulfillAPIRequest */ "./node_modules/react-storefront/props/fulfillAPIRequest.js"));

var _createAppData = _interopRequireDefault(__webpack_require__(/*! ./utils/createAppData */ "./node_modules/react-storefront/mock-connector/utils/createAppData.js"));

function account(_x, _x2) {
  return _account.apply(this, arguments);
}

function _account() {
  _account = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _fulfillAPIRequest["default"])(req, {
              appData: _createAppData["default"],
              pageData: function pageData() {
                return Promise.resolve({
                  title: 'My Account',
                  account: {},
                  breadcrumbs: [{
                    text: 'Home',
                    href: '/'
                  }]
                });
              }
            });

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _account.apply(this, arguments);
}
//# sourceMappingURL=account.js.map

/***/ }),

/***/ "./node_modules/react-storefront/mock-connector/addToCart.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-storefront/mock-connector/addToCart.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = addToCart;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _cartStore = __webpack_require__(/*! ./utils/cartStore */ "./node_modules/react-storefront/mock-connector/utils/cartStore.js");

function addToCart(_x, _x2, _x3) {
  return _addToCart.apply(this, arguments);
}

function _addToCart() {
  _addToCart = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref, req, res) {
    var color, size, product, quantity;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            color = _ref.color, size = _ref.size, product = _ref.product, quantity = _ref.quantity;
            return _context.abrupt("return", {
              cart: {
                items: (0, _cartStore.addItem)(product.id, quantity, req, res)
              }
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _addToCart.apply(this, arguments);
}
//# sourceMappingURL=addToCart.js.map

/***/ }),

/***/ "./node_modules/react-storefront/mock-connector/cart.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-storefront/mock-connector/cart.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = cart;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _fulfillAPIRequest = _interopRequireDefault(__webpack_require__(/*! ../props/fulfillAPIRequest */ "./node_modules/react-storefront/props/fulfillAPIRequest.js"));

var _createAppData = _interopRequireDefault(__webpack_require__(/*! ./utils/createAppData */ "./node_modules/react-storefront/mock-connector/utils/createAppData.js"));

var _cartStore = __webpack_require__(/*! ./utils/cartStore */ "./node_modules/react-storefront/mock-connector/utils/cartStore.js");

function cart(_x, _x2) {
  return _cart.apply(this, arguments);
}

function _cart() {
  _cart = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", (0, _fulfillAPIRequest["default"])(req, {
              appData: _createAppData["default"],
              pageData: function pageData() {
                return Promise.resolve({
                  title: 'My Cart',
                  breadcrumbs: [{
                    text: 'Home',
                    href: '/'
                  }],
                  cart: {
                    items: (0, _cartStore.getProducts)(req, res)
                  }
                });
              }
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _cart.apply(this, arguments);
}
//# sourceMappingURL=cart.js.map

/***/ }),

/***/ "./node_modules/react-storefront/mock-connector/home.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-storefront/mock-connector/home.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = home;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _fulfillAPIRequest = _interopRequireDefault(__webpack_require__(/*! ../props/fulfillAPIRequest */ "./node_modules/react-storefront/props/fulfillAPIRequest.js"));

var _createAppData = _interopRequireDefault(__webpack_require__(/*! ./utils/createAppData */ "./node_modules/react-storefront/mock-connector/utils/createAppData.js"));

function home(_x, _x2) {
  return _home.apply(this, arguments);
}

function _home() {
  _home = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _fulfillAPIRequest["default"])(req, {
              appData: _createAppData["default"],
              pageData: function pageData() {
                return Promise.resolve({
                  title: 'React Storefront',
                  slots: {
                    heading: 'Welcome to your new React Storefront app.',
                    description: "\n                <p>\n                Here you'll find mock home, category, subcategory, product, and cart pages that you can\n                use as a starting point to build your PWA.\n              </p>\n              <p>Happy coding!</p>\n            "
                  }
                });
              }
            });

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _home.apply(this, arguments);
}
//# sourceMappingURL=home.js.map

/***/ }),

/***/ "./node_modules/react-storefront/mock-connector/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-storefront/mock-connector/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "cart", {
  enumerable: true,
  get: function get() {
    return _cart["default"];
  }
});
Object.defineProperty(exports, "account", {
  enumerable: true,
  get: function get() {
    return _account["default"];
  }
});
Object.defineProperty(exports, "addToCart", {
  enumerable: true,
  get: function get() {
    return _addToCart["default"];
  }
});
Object.defineProperty(exports, "updateCartItem", {
  enumerable: true,
  get: function get() {
    return _updateCartItem["default"];
  }
});
Object.defineProperty(exports, "removeCartItem", {
  enumerable: true,
  get: function get() {
    return _removeCartItem["default"];
  }
});
Object.defineProperty(exports, "home", {
  enumerable: true,
  get: function get() {
    return _home["default"];
  }
});
Object.defineProperty(exports, "product", {
  enumerable: true,
  get: function get() {
    return _product["default"];
  }
});
Object.defineProperty(exports, "productMedia", {
  enumerable: true,
  get: function get() {
    return _productMedia["default"];
  }
});
Object.defineProperty(exports, "productSuggestions", {
  enumerable: true,
  get: function get() {
    return _productSuggestions["default"];
  }
});
Object.defineProperty(exports, "search", {
  enumerable: true,
  get: function get() {
    return _search["default"];
  }
});
Object.defineProperty(exports, "searchSuggestions", {
  enumerable: true,
  get: function get() {
    return _searchSuggestions["default"];
  }
});
Object.defineProperty(exports, "session", {
  enumerable: true,
  get: function get() {
    return _session["default"];
  }
});
Object.defineProperty(exports, "subcategory", {
  enumerable: true,
  get: function get() {
    return _subcategory["default"];
  }
});

var _cart = _interopRequireDefault(__webpack_require__(/*! ./cart.js */ "./node_modules/react-storefront/mock-connector/cart.js"));

var _account = _interopRequireDefault(__webpack_require__(/*! ./account.js */ "./node_modules/react-storefront/mock-connector/account.js"));

var _addToCart = _interopRequireDefault(__webpack_require__(/*! ./addToCart.js */ "./node_modules/react-storefront/mock-connector/addToCart.js"));

var _updateCartItem = _interopRequireDefault(__webpack_require__(/*! ./updateCartItem.js */ "./node_modules/react-storefront/mock-connector/updateCartItem.js"));

var _removeCartItem = _interopRequireDefault(__webpack_require__(/*! ./removeCartItem.js */ "./node_modules/react-storefront/mock-connector/removeCartItem.js"));

var _home = _interopRequireDefault(__webpack_require__(/*! ./home.js */ "./node_modules/react-storefront/mock-connector/home.js"));

var _product = _interopRequireDefault(__webpack_require__(/*! ./product.js */ "./node_modules/react-storefront/mock-connector/product.js"));

var _productMedia = _interopRequireDefault(__webpack_require__(/*! ./productMedia.js */ "./node_modules/react-storefront/mock-connector/productMedia.js"));

var _productSuggestions = _interopRequireDefault(__webpack_require__(/*! ./productSuggestions.js */ "./node_modules/react-storefront/mock-connector/productSuggestions.js"));

var _search = _interopRequireDefault(__webpack_require__(/*! ./search.js */ "./node_modules/react-storefront/mock-connector/search.js"));

var _searchSuggestions = _interopRequireDefault(__webpack_require__(/*! ./searchSuggestions.js */ "./node_modules/react-storefront/mock-connector/searchSuggestions.js"));

var _session = _interopRequireDefault(__webpack_require__(/*! ./session.js */ "./node_modules/react-storefront/mock-connector/session.js"));

var _subcategory = _interopRequireDefault(__webpack_require__(/*! ./subcategory.js */ "./node_modules/react-storefront/mock-connector/subcategory.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-storefront/mock-connector/product.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-storefront/mock-connector/product.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = product;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _fulfillAPIRequest = _interopRequireDefault(__webpack_require__(/*! ../props/fulfillAPIRequest */ "./node_modules/react-storefront/props/fulfillAPIRequest.js"));

var _createProduct = _interopRequireDefault(__webpack_require__(/*! ./utils/createProduct */ "./node_modules/react-storefront/mock-connector/utils/createProduct.js"));

var _createAppData = _interopRequireDefault(__webpack_require__(/*! ./utils/createAppData */ "./node_modules/react-storefront/mock-connector/utils/createAppData.js"));

var _getBase64ForImage = _interopRequireDefault(__webpack_require__(/*! react-storefront/utils/getBase64ForImage */ "react-storefront/utils/getBase64ForImage"));

function asciiSum() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return string.split('').reduce(function (s, e) {
    return s + e.charCodeAt();
  }, 0);
}

function product(_x, _x2, _x3) {
  return _product.apply(this, arguments);
}

function _product() {
  _product = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(params, req, res) {
    var id, color, size, result, data, mockPrice;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = params.id, color = params.color, size = params.size;
            _context.next = 3;
            return (0, _fulfillAPIRequest["default"])(req, {
              appData: _createAppData["default"],
              pageData: function pageData() {
                return getPageData(id);
              }
            });

          case 3:
            result = _context.sent;

            if (!(color || size)) {
              _context.next = 13;
              break;
            }

            _context.next = 7;
            return getPageData(id);

          case 7:
            data = _context.sent;
            data.carousel = {
              index: 0
            }; // A price for the fetched product variant would be included in
            // the response, but for demo purposes only, we are setting the
            // price based on the color name.

            mockPrice = (asciiSum(color) + asciiSum(size)) / 100;
            data.product.price = mockPrice;
            data.product.priceText = "$".concat(mockPrice.toFixed(2));
            return _context.abrupt("return", data);

          case 13:
            return _context.abrupt("return", result);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _product.apply(this, arguments);
}

function getPageData(_x4) {
  return _getPageData.apply(this, arguments);
}

function _getPageData() {
  _getPageData = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id) {
    var result, mainProductImage;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            result = {
              title: "Product ".concat(id),
              product: (0, _createProduct["default"])(id),
              breadcrumbs: [{
                text: "Home",
                href: '/'
              }, {
                text: "Subcategory ".concat(id),
                as: "/s/".concat(id),
                href: '/s/[subcategoryId]'
              }]
            };
            mainProductImage = result.product.media.full[0];
            _context2.next = 4;
            return (0, _getBase64ForImage["default"])(mainProductImage.src);

          case 4:
            mainProductImage.src = _context2.sent;
            return _context2.abrupt("return", result);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getPageData.apply(this, arguments);
}
//# sourceMappingURL=product.js.map

/***/ }),

/***/ "./node_modules/react-storefront/mock-connector/productMedia.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-storefront/mock-connector/productMedia.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = productMedia;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _createMedia = _interopRequireDefault(__webpack_require__(/*! ./utils/createMedia */ "./node_modules/react-storefront/mock-connector/utils/createMedia.js"));

function productMedia(_x, _x2, _x3) {
  return _productMedia.apply(this, arguments);
}

function _productMedia() {
  _productMedia = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref, req, res) {
    var id, color;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = _ref.id, color = _ref.color;
            return _context.abrupt("return", {
              media: (0, _createMedia["default"])(id, color)
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _productMedia.apply(this, arguments);
}
//# sourceMappingURL=productMedia.js.map

/***/ }),

/***/ "./node_modules/react-storefront/mock-connector/productSuggestions.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-storefront/mock-connector/productSuggestions.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = productSuggestions;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _createProduct = _interopRequireDefault(__webpack_require__(/*! ./utils/createProduct */ "./node_modules/react-storefront/mock-connector/utils/createProduct.js"));

/**
 * An example endpoint that returns mock product suggestions for a PDP.
 * @param {*} req
 * @param {*} res
 */
function productSuggestions(_x, _x2) {
  return _productSuggestions.apply(this, arguments);
}

function _productSuggestions() {
  _productSuggestions = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var products, i;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            products = [];

            for (i = 1; i <= 10; i++) {
              products.push((0, _createProduct["default"])(i));
            }

            return _context.abrupt("return", products);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _productSuggestions.apply(this, arguments);
}
//# sourceMappingURL=productSuggestions.js.map

/***/ }),

/***/ "./node_modules/react-storefront/mock-connector/removeCartItem.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-storefront/mock-connector/removeCartItem.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = removeCartItem;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _cartStore = __webpack_require__(/*! ./utils/cartStore */ "./node_modules/react-storefront/mock-connector/utils/cartStore.js");

function removeCartItem(_x, _x2, _x3) {
  return _removeCartItem.apply(this, arguments);
}

function _removeCartItem() {
  _removeCartItem = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(item, req, res) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", {
              cart: {
                items: (0, _cartStore.removeItem)(item.id, req, res)
              }
            });

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _removeCartItem.apply(this, arguments);
}
//# sourceMappingURL=removeCartItem.js.map

/***/ }),

/***/ "./node_modules/react-storefront/mock-connector/search.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-storefront/mock-connector/search.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _subcategory["default"];
  }
});

var _subcategory = _interopRequireDefault(__webpack_require__(/*! ./subcategory */ "./node_modules/react-storefront/mock-connector/subcategory.js"));
//# sourceMappingURL=search.js.map

/***/ }),

/***/ "./node_modules/react-storefront/mock-connector/searchSuggestions.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-storefront/mock-connector/searchSuggestions.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = searchSuggestions;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

/**
 * An example implementation of the API for the SearchPopup component using placeholder data.
 * @param {Object} params
 * @param {String} params.q The search text
 * @return {Object} An object whose shape matches AppModelBase
 */
function searchSuggestions(_x, _x2, _x3) {
  return _searchSuggestions.apply(this, arguments);
}

function _searchSuggestions() {
  _searchSuggestions = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(q, req, res) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", {
              text: q,
              groups: [{
                caption: 'Suggested Searches',
                ui: 'list',
                links: ["Small ".concat(q), "Large ".concat(q), "".concat(q, " with red stripes")].map(function (text) {
                  return {
                    text: text,
                    as: "/search?q=".concat(encodeURIComponent(text)),
                    href: '/search'
                  };
                })
              }, {
                caption: 'Suggested Categories',
                ui: 'list',
                links: [{
                  text: 'Category 1',
                  href: '/s/[subcategoryId]',
                  as: '/s/1'
                }, {
                  text: 'Category 2',
                  href: '/s/[subcategoryId]',
                  as: '/s/2'
                }, {
                  text: 'Category 3',
                  href: '/s/[subcategoryId]',
                  as: '/s/3'
                }]
              }, {
                caption: 'Suggested Products',
                ui: 'thumbnails',
                links: [{
                  text: 'Product 1',
                  href: '/p/[productId]',
                  as: '/p/1?s=1&c=1',
                  thumbnail: {
                    src: 'https://dummyimage.com/120x120',
                    alt: 'Product 1'
                  }
                }, {
                  text: 'Product 2',
                  href: '/p/[productId]',
                  as: '/p/2?s=1&c=1',
                  thumbnail: {
                    src: 'https://dummyimage.com/120x120',
                    alt: 'Product 1'
                  }
                }, {
                  text: 'Product 3',
                  href: '/p/[productId]',
                  as: '/p/3?s=1&c=1',
                  thumbnail: {
                    src: 'https://dummyimage.com/120x120',
                    alt: 'Product 1'
                  }
                }, {
                  text: 'Product 4',
                  href: '/p/[productId]',
                  as: '/p/3?s=1&c=1',
                  thumbnail: {
                    src: 'https://dummyimage.com/120x120',
                    alt: 'Product 1'
                  }
                }, {
                  text: 'Product 5',
                  href: '/p/[productId]',
                  as: '/p/5?s=1&c=1',
                  thumbnail: {
                    src: 'https://dummyimage.com/120x120',
                    alt: 'Product 1'
                  }
                }]
              }]
            });

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _searchSuggestions.apply(this, arguments);
}
//# sourceMappingURL=searchSuggestions.js.map

/***/ }),

/***/ "./node_modules/react-storefront/mock-connector/session.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-storefront/mock-connector/session.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = session;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _cartStore = __webpack_require__(/*! ./utils/cartStore */ "./node_modules/react-storefront/mock-connector/utils/cartStore.js");

function session(_x, _x2) {
  return _session.apply(this, arguments);
}

function _session() {
  _session = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", {
              name: 'Mark',
              email: 'mark@domain.com',
              cart: {
                items: (0, _cartStore.getProducts)(req, res)
              },
              currency: 'USD'
            });

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _session.apply(this, arguments);
}
//# sourceMappingURL=session.js.map

/***/ }),

/***/ "./node_modules/react-storefront/mock-connector/subcategory.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-storefront/mock-connector/subcategory.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = subcategory;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _createFacets = _interopRequireDefault(__webpack_require__(/*! ./utils/createFacets */ "./node_modules/react-storefront/mock-connector/utils/createFacets.js"));

var _createSortOptions = _interopRequireDefault(__webpack_require__(/*! ./utils/createSortOptions */ "./node_modules/react-storefront/mock-connector/utils/createSortOptions.js"));

var _createProduct = _interopRequireDefault(__webpack_require__(/*! ./utils/createProduct */ "./node_modules/react-storefront/mock-connector/utils/createProduct.js"));

var _colors = _interopRequireWildcard(__webpack_require__(/*! ./utils/colors */ "./node_modules/react-storefront/mock-connector/utils/colors.js"));

var _fulfillAPIRequest = _interopRequireDefault(__webpack_require__(/*! react-storefront/props/fulfillAPIRequest */ "react-storefront/props/fulfillAPIRequest"));

var _createAppData = _interopRequireDefault(__webpack_require__(/*! ./utils/createAppData */ "./node_modules/react-storefront/mock-connector/utils/createAppData.js"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function subcategory(_x, _x2, _x3) {
  return _subcategory.apply(this, arguments);
}

function _subcategory() {
  _subcategory = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(params, req, res) {
    var q, _params$slug, slug, _params$page, page, filters, sort, _params$more, more;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            q = params.q, _params$slug = params.slug, slug = _params$slug === void 0 ? '1' : _params$slug, _params$page = params.page, page = _params$page === void 0 ? 0 : _params$page, filters = params.filters, sort = params.sort, _params$more = params.more, more = _params$more === void 0 ? false : _params$more;

            if (filters) {
              filters = JSON.parse(filters);
            } else {
              filters = [];
            }

            _context.next = 4;
            return (0, _fulfillAPIRequest["default"])(req, {
              appData: _createAppData["default"],
              pageData: function pageData() {
                return Promise.resolve({
                  id: slug,
                  name: q != null ? "Results for \"".concat(q, "\"") : "Subcategory ".concat(slug),
                  title: q != null ? "Results for \"".concat(q, "\"") : "Subcategory ".concat(slug),
                  total: 100,
                  page: parseInt(page),
                  totalPages: 5,
                  filters: filters,
                  sort: sort,
                  sortOptions: (0, _createSortOptions["default"])(),
                  facets: (0, _createFacets["default"])(),
                  products: filterProducts(page, filters, more),
                  breadcrumbs: [{
                    text: "Home",
                    href: '/'
                  }]
                });
              }
            });

          case 4:
            return _context.abrupt("return", _context.sent);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _subcategory.apply(this, arguments);
}

function filterProducts(page, filters, more) {
  var products = [];
  var filteredColors = filters ? filters.filter(function (f) {
    return f.startsWith('color');
  }).map(function (f) {
    return f.replace(/^color:/, '');
  }) : [];
  var count = more ? 20 : 10;

  while (products.length < count) {
    if (filteredColors && filteredColors.length) {
      var _iterator = _createForOfIteratorHelper(filteredColors),
          _step;

      try {
        var _loop = function _loop() {
          var color = _step.value;
          var index = (0, _colors.indexForColor)(color);

          var colorGap = function colorGap(i) {
            return Math.floor(page * count / filteredColors.length) + i;
          };

          products.push.apply(products, (0, _toConsumableArray2["default"])(Array.from({
            length: count
          }, function (v, i) {
            return colorGap(i);
          }).map(function (i) {
            return (0, _createProduct["default"])('' + (i * Object.keys(_colors["default"]).length + index));
          })));
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } else {
      var id = page * 10 + products.length + 1;
      products.push((0, _createProduct["default"])(id + ''));
    }
  }

  return products.sort(function (a, b) {
    return a.id - b.id;
  }).slice(0, count);
}
//# sourceMappingURL=subcategory.js.map

/***/ }),

/***/ "./node_modules/react-storefront/mock-connector/updateCartItem.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-storefront/mock-connector/updateCartItem.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = updateCartItem;

var _cartStore = __webpack_require__(/*! ./utils/cartStore */ "./node_modules/react-storefront/mock-connector/utils/cartStore.js");

function updateCartItem(item, quantity, req, res) {
  return {
    cart: {
      items: (0, _cartStore.updateItem)(item.id, quantity, req, res)
    }
  };
}
//# sourceMappingURL=updateCartItem.js.map

/***/ }),

/***/ "./node_modules/react-storefront/mock-connector/utils/cartStore.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-storefront/mock-connector/utils/cartStore.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProducts = getProducts;
exports.updateItem = updateItem;
exports.removeItem = removeItem;
exports.addItem = addItem;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _createProduct = _interopRequireDefault(__webpack_require__(/*! ./createProduct */ "./node_modules/react-storefront/mock-connector/utils/createProduct.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var CART_COOKIE = 'rsf_mock_cart';
var initialStore = [{
  id: 1,
  quantity: 1
}, {
  id: 2,
  quantity: 1
}];

function getStore(req, res) {
  if (!req.cookies[CART_COOKIE]) {
    res.setHeader('Set-Cookie', "".concat(CART_COOKIE, "=").concat(JSON.stringify(initialStore), "; Path=/"));
  }

  var store = req.cookies[CART_COOKIE] || initialStore;

  try {
    return JSON.parse(store);
  } catch (err) {
    console.log('Failed parsing store from cookie', req.cookies[CART_COOKIE]);
    return [];
  }
}

function toProduct(_ref) {
  var id = _ref.id,
      quantity = _ref.quantity;
  return _objectSpread(_objectSpread({}, (0, _createProduct["default"])(id)), {}, {
    quantity: quantity
  });
}

function getProducts(req, res) {
  return getStore(req, res).map(toProduct);
}

function updateItem(id, quantity, req, res) {
  var newStore = (0, _toConsumableArray2["default"])(getStore(req, res));
  var item = newStore.find(function (e) {
    return e.id === id;
  });
  item.quantity = quantity;
  res.setHeader('Set-Cookie', "".concat(CART_COOKIE, "=").concat(JSON.stringify(newStore), "; Path=/"));
  return newStore.map(toProduct);
}

function removeItem(id, req, res) {
  var newStore = (0, _toConsumableArray2["default"])(getStore(req, res)).filter(function (e) {
    return e.id !== id;
  });
  res.setHeader('Set-Cookie', "".concat(CART_COOKIE, "=").concat(JSON.stringify(newStore), "; Path=/"));
  return newStore.map(toProduct);
}

function addItem(id, quantity, req, res) {
  var newStore = [{
    id: id,
    quantity: quantity
  }].concat((0, _toConsumableArray2["default"])(getStore(req, res)));
  res.setHeader('Set-Cookie', "".concat(CART_COOKIE, "=").concat(JSON.stringify(newStore), "; Path=/"));
  return newStore.map(toProduct);
}
//# sourceMappingURL=cartStore.js.map

/***/ }),

/***/ "./node_modules/react-storefront/mock-connector/utils/colors.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-storefront/mock-connector/utils/colors.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colorForId = colorForId;
exports.indexForColor = indexForColor;
exports["default"] = void 0;

var _colors = __webpack_require__(/*! @material-ui/core/colors */ "@material-ui/core/colors");

var color = function color(c) {
  return c.toString().replace(/\#/, '');
};

var colors = {
  red: {
    background: color(_colors.red[500]),
    foreground: 'ffffff'
  },
  green: {
    background: color(_colors.green[500]),
    foreground: 'ffffff'
  },
  blue: {
    background: color(_colors.blue[500]),
    foreground: 'ffffff'
  },
  grey: {
    background: color(_colors.grey[300]),
    foreground: color(_colors.grey[600])
  },
  teal: {
    background: color(_colors.teal[500]),
    foreground: 'ffffff'
  },
  orange: {
    background: color(_colors.orange[500]),
    foreground: 'ffffff'
  },
  purple: {
    background: color(_colors.purple[500]),
    foreground: 'ffffff'
  },
  black: {
    background: color(_colors.grey[800]),
    foreground: 'ffffff'
  }
};
var _default = colors;
exports["default"] = _default;

function colorForId(id) {
  var keys = Object.keys(colors);
  var index = id % keys.length;
  return keys[index];
}

function indexForColor(color) {
  return Object.keys(colors).indexOf(color);
}
//# sourceMappingURL=colors.js.map

/***/ }),

/***/ "./node_modules/react-storefront/mock-connector/utils/createAppData.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-storefront/mock-connector/utils/createAppData.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createAppData;

var _createMenu = _interopRequireDefault(__webpack_require__(/*! ./createMenu */ "./node_modules/react-storefront/mock-connector/utils/createMenu.js"));

var _createTabs = _interopRequireDefault(__webpack_require__(/*! ./createTabs */ "./node_modules/react-storefront/mock-connector/utils/createTabs.js"));

function createAppData() {
  return Promise.resolve({
    menu: (0, _createMenu["default"])(),
    tabs: (0, _createTabs["default"])()
  });
}
//# sourceMappingURL=createAppData.js.map

/***/ }),

/***/ "./node_modules/react-storefront/mock-connector/utils/createFacets.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-storefront/mock-connector/utils/createFacets.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createFacets;

var _colors = _interopRequireDefault(__webpack_require__(/*! ./colors */ "./node_modules/react-storefront/mock-connector/utils/colors.js"));

var _capitalize = _interopRequireDefault(__webpack_require__(/*! lodash/capitalize */ "lodash/capitalize"));

function createFacets() {
  return [{
    name: 'Color',
    ui: 'buttons',
    options: Object.keys(_colors["default"]).map(function (name) {
      return {
        name: (0, _capitalize["default"])(name),
        code: "color:".concat(name),
        image: {
          src: "https://dummyimage.com/48x48/".concat(_colors["default"][name].background, "?text=").concat(encodeURIComponent(' ')),
          alt: name
        }
      };
    })
  }, {
    name: 'Size',
    ui: 'buttons',
    options: [{
      name: 'SM',
      code: 'size:sm'
    }, {
      name: 'MD',
      code: 'size:md'
    }, {
      name: 'LG',
      code: 'size:lg'
    }, {
      name: 'XL',
      code: 'size:xl'
    }, {
      name: 'XXL',
      code: 'size:xxl'
    }]
  }, {
    name: 'Type',
    ui: 'checkboxes',
    options: [{
      name: 'New',
      code: 'type:new',
      matches: 100
    }, {
      name: 'Used',
      code: 'type:used',
      matches: 20
    }]
  }];
}
//# sourceMappingURL=createFacets.js.map

/***/ }),

/***/ "./node_modules/react-storefront/mock-connector/utils/createMedia.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-storefront/mock-connector/utils/createMedia.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createMedia;

var _colors = _interopRequireDefault(__webpack_require__(/*! ./colors */ "./node_modules/react-storefront/mock-connector/utils/colors.js"));

function createMedia(id, color) {
  return {
    full: [color].map(function (key, i) {
      return {
        src: "https://dummyimage.com/".concat(i === 2 ? 400 : 600, "x").concat(i === 1 ? 400 : 600, "/").concat(_colors["default"][key].background, "/").concat(_colors["default"][key].foreground, "?text=").concat(encodeURIComponent('Product ' + id)),
        alt: "Product ".concat(id),
        magnify: {
          height: i === 1 ? 800 : 1200,
          width: i === 2 ? 800 : 1200,
          src: "https://dummyimage.com/".concat(i === 2 ? 800 : 1200, "x").concat(i === 1 ? 800 : 1200, "/").concat(_colors["default"][key].background, "/").concat(_colors["default"][key].foreground, "?text=").concat(encodeURIComponent('Product ' + id))
        }
      };
    }),
    thumbnails: [color].map(function (key, i) {
      return {
        src: "https://dummyimage.com/".concat(i === 2 ? 300 : 400, "x").concat(i === 1 ? 300 : 400, "/").concat(_colors["default"][key].background, "?text=").concat(encodeURIComponent("Product ".concat(id))),
        alt: key
      };
    })
  };
}
//# sourceMappingURL=createMedia.js.map

/***/ }),

/***/ "./node_modules/react-storefront/mock-connector/utils/createMenu.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-storefront/mock-connector/utils/createMenu.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createMenu;

function createMenu() {
  var items = [];

  for (var i = 1; i <= 5; i++) {
    items.push(createCategoryItem(i));
  }

  return {
    items: items,
    header: 'header',
    footer: 'footer'
  };
}

function createCategoryItem(i) {
  var items = [];

  for (var j = 1; j <= 5; j++) {
    items.push(createSubcategoryItem(j));
  }

  return {
    text: "Category ".concat(i),
    items: items
  };
}

function createSubcategoryItem(i) {
  var items = [];

  for (var j = 1; j <= 5; j++) {
    items.push(createProductItem(j));
  }

  return {
    text: "Subcategory ".concat(i),
    href: "/s/[...categorySlug]",
    as: "/s/".concat(i),
    expanded: i === 1,
    items: items
  };
}

function createProductItem(i) {
  return {
    text: "Product ".concat(i),
    href: "/p/[productId]",
    as: "/p/".concat(i)
  };
}
//# sourceMappingURL=createMenu.js.map

/***/ }),

/***/ "./node_modules/react-storefront/mock-connector/utils/createProduct.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-storefront/mock-connector/utils/createProduct.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createProduct;

var _colors = _interopRequireWildcard(__webpack_require__(/*! ./colors */ "./node_modules/react-storefront/mock-connector/utils/colors.js"));

var _capitalize = _interopRequireDefault(__webpack_require__(/*! lodash/capitalize */ "lodash/capitalize"));

var _loremIpsum = __webpack_require__(/*! lorem-ipsum */ "lorem-ipsum");

function createProduct(id) {
  var numColors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
  var color = (0, _colors.colorForId)(id);
  var variants = [color, 'red', 'blue'];
  var price = id % 10 * 10 + 0.99;
  return {
    id: id,
    url: "/p/".concat(id),
    name: "Product ".concat(id),
    price: price,
    priceText: "$".concat(price),
    rating: (10 - id % 10) / 2.0,
    thumbnail: {
      src: "https://dummyimage.com/400x400/".concat(_colors["default"][color].background, "/").concat(_colors["default"][color].foreground, "?text=").concat(encodeURIComponent('Product ' + id)),
      alt: "Product ".concat(id)
    },
    media: {
      full: variants.map(function (key, i) {
        return {
          src: "https://dummyimage.com/".concat(i === 2 ? 400 : 600, "x").concat(i === 1 ? 400 : 600, "/").concat(_colors["default"][key].background, "/").concat(_colors["default"][key].foreground, "?text=").concat(encodeURIComponent('Product ' + id)),
          alt: "Product ".concat(id),
          magnify: {
            height: i === 1 ? 800 : 1200,
            width: i === 2 ? 800 : 1200,
            src: "https://dummyimage.com/".concat(i === 2 ? 800 : 1200, "x").concat(i === 1 ? 800 : 1200, "/").concat(_colors["default"][key].background, "/").concat(_colors["default"][key].foreground, "?text=").concat(encodeURIComponent('Product ' + id))
          }
        };
      }),
      thumbnails: variants.map(function (key, i) {
        return {
          src: "https://dummyimage.com/".concat(i === 2 ? 233 : 300, "x").concat(i === 1 ? 233 : 300, "/").concat(_colors["default"][key].background, "/").concat(_colors["default"][key].foreground, "?text=").concat(encodeURIComponent('Product ' + id)),
          alt: "Product ".concat(id)
        };
      })
    },
    sizes: [{
      id: 'sm',
      text: 'SM'
    }, {
      id: 'md',
      text: 'MD'
    }, {
      id: 'lg',
      text: 'LG'
    }, {
      id: 'xl',
      text: 'XL',
      disabled: true
    }, {
      id: 'xxl',
      text: 'XXL'
    }],
    description: (0, _loremIpsum.loremIpsum)({
      count: 10
    }),
    specs: (0, _loremIpsum.loremIpsum)({
      count: 10
    }),
    colors: Object.keys(_colors["default"]).slice(0, numColors).map(function (name, idx) {
      return {
        text: (0, _capitalize["default"])(name),
        id: name,
        disabled: idx === 2,
        image: {
          src: "https://dummyimage.com/48x48/".concat(_colors["default"][name].background, "?text=").concat(encodeURIComponent(' ')),
          alt: name
        },
        media: {
          full: [name, name, name].map(function (key, i) {
            return {
              src: "https://dummyimage.com/".concat(i === 2 ? 400 : 600, "x").concat(i === 1 ? 400 : 600, "/").concat(_colors["default"][key].background, "/").concat(_colors["default"][key].foreground, "?text=").concat(encodeURIComponent('Product ' + id)),
              alt: "Product ".concat(id),
              magnify: {
                height: i === 1 ? 800 : 1200,
                width: i === 2 ? 800 : 1200,
                src: "https://dummyimage.com/".concat(i === 2 ? 800 : 1200, "x").concat(i === 1 ? 800 : 1200, "/").concat(_colors["default"][key].background, "/").concat(_colors["default"][key].foreground, "?text=").concat(encodeURIComponent('Product ' + id))
              }
            };
          }),
          thumbnails: [name, name, name].map(function (key, i) {
            return {
              src: "https://dummyimage.com/".concat(i === 2 ? 300 : 400, "x").concat(i === 1 ? 300 : 400, "/").concat(_colors["default"][key].background, "/").concat(_colors["default"][key].foreground, "?text=").concat(encodeURIComponent("Product ".concat(id))),
              alt: key
            };
          }),
          thumbnail: [name].map(function (key) {
            return {
              src: "https://dummyimage.com/400x400/".concat(_colors["default"][key].background, "/").concat(_colors["default"][key].foreground, "?text=").concat(encodeURIComponent('Product ' + id)),
              alt: "Product ".concat(id)
            };
          })[0]
        }
      };
    })
  };
}
//# sourceMappingURL=createProduct.js.map

/***/ }),

/***/ "./node_modules/react-storefront/mock-connector/utils/createSortOptions.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/react-storefront/mock-connector/utils/createSortOptions.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createSortOptions;

function createSortOptions() {
  return [{
    name: 'Price - Lowest',
    code: 'price_asc'
  }, {
    name: 'Price - Highest',
    code: 'price_desc'
  }, {
    name: 'Most Popular',
    code: 'pop'
  }, {
    name: 'Highest Rated',
    code: 'rating'
  }];
}
//# sourceMappingURL=createSortOptions.js.map

/***/ }),

/***/ "./node_modules/react-storefront/mock-connector/utils/createTabs.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-storefront/mock-connector/utils/createTabs.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createTabs;

function createTabs() {
  var tabs = [];
  var subcategories = [];

  for (var i = 1; i <= 3; i++) {
    subcategories.push({
      as: "/s/".concat(i),
      href: '/s/[...categorySlug]',
      text: "Subcategory ".concat(i)
    });
  }

  for (var _i = 1; _i <= 10; _i++) {
    tabs.push({
      as: "/s/".concat(_i),
      href: '/s/[...categorySlug]',
      text: "Category ".concat(_i),
      items: subcategories
    });
  }

  return tabs;
}
//# sourceMappingURL=createTabs.js.map

/***/ }),

/***/ "./node_modules/react-storefront/props/fulfillAPIRequest.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-storefront/props/fulfillAPIRequest.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = fulfillAPIRequest;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * Creates an API response that contains app level data only when `?_includeAppData=1` is present in
 * the query string. Otherwise, the `appData` promise provided will not be resolved.
 *
 * @param {Request} req The request being served
 * @param {Object} options
 * @param {Function} options.appData An async function that returns a data for shared component in
 * the app such as menu, nav, and footer
 * @param {Function} options.pageData An async function that return data for the page component
 * @return {Object} the result of `appData` and `pageData` merged into a single object.
 */
function fulfillAPIRequest(_x, _x2) {
  return _fulfillAPIRequest.apply(this, arguments);
}

function _fulfillAPIRequest() {
  _fulfillAPIRequest = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, _ref) {
    var appData, pageData, promises, results, data, _iterator, _step, result;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            appData = _ref.appData, pageData = _ref.pageData;
            promises = [pageData(req).then(function (pageData) {
              return {
                pageData: pageData
              };
            })];

            if (req.query._includeAppData === '1') {
              promises.push(appData(req).then(function (appData) {
                return {
                  appData: appData
                };
              }));
            }

            _context.next = 5;
            return Promise.all(promises);

          case 5:
            results = _context.sent;
            data = {};
            _iterator = _createForOfIteratorHelper(results);

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                result = _step.value;
                Object.assign(data, result);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return _context.abrupt("return", data);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fulfillAPIRequest.apply(this, arguments);
}
//# sourceMappingURL=fulfillAPIRequest.js.map

/***/ }),

/***/ "./pages/api/session.js":
/*!******************************!*\
  !*** ./pages/api/session.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_storefront_connector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-storefront-connector */ "./node_modules/react-storefront/mock-connector/index.js");
/* harmony import */ var react_storefront_connector__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_storefront_connector__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (async function (req, res) {
  res.json(await Object(react_storefront_connector__WEBPACK_IMPORTED_MODULE_0__["session"])(req, res));
});

/***/ }),

/***/ "@material-ui/core/colors":
/*!*******************************************!*\
  !*** external "@material-ui/core/colors" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors");

/***/ }),

/***/ "lodash/capitalize":
/*!************************************!*\
  !*** external "lodash/capitalize" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/capitalize");

/***/ }),

/***/ "lorem-ipsum":
/*!******************************!*\
  !*** external "lorem-ipsum" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lorem-ipsum");

/***/ }),

/***/ "react-storefront/props/fulfillAPIRequest":
/*!***********************************************************!*\
  !*** external "react-storefront/props/fulfillAPIRequest" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront/props/fulfillAPIRequest");

/***/ }),

/***/ "react-storefront/utils/getBase64ForImage":
/*!***********************************************************!*\
  !*** external "react-storefront/utils/getBase64ForImage" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront/utils/getBase64ForImage");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9yZWdlbmVyYXRvclJ1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9QcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Qcm9wZXJ0eUtleS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zdG9yZWZyb250L21vY2stY29ubmVjdG9yL2FjY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN0b3JlZnJvbnQvbW9jay1jb25uZWN0b3IvYWRkVG9DYXJ0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zdG9yZWZyb250L21vY2stY29ubmVjdG9yL2NhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN0b3JlZnJvbnQvbW9jay1jb25uZWN0b3IvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3RvcmVmcm9udC9tb2NrLWNvbm5lY3Rvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3RvcmVmcm9udC9tb2NrLWNvbm5lY3Rvci9wcm9kdWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zdG9yZWZyb250L21vY2stY29ubmVjdG9yL3Byb2R1Y3RNZWRpYS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3RvcmVmcm9udC9tb2NrLWNvbm5lY3Rvci9wcm9kdWN0U3VnZ2VzdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN0b3JlZnJvbnQvbW9jay1jb25uZWN0b3IvcmVtb3ZlQ2FydEl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN0b3JlZnJvbnQvbW9jay1jb25uZWN0b3Ivc2VhcmNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zdG9yZWZyb250L21vY2stY29ubmVjdG9yL3NlYXJjaFN1Z2dlc3Rpb25zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zdG9yZWZyb250L21vY2stY29ubmVjdG9yL3Nlc3Npb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN0b3JlZnJvbnQvbW9jay1jb25uZWN0b3Ivc3ViY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN0b3JlZnJvbnQvbW9jay1jb25uZWN0b3IvdXBkYXRlQ2FydEl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN0b3JlZnJvbnQvbW9jay1jb25uZWN0b3IvdXRpbHMvY2FydFN0b3JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zdG9yZWZyb250L21vY2stY29ubmVjdG9yL3V0aWxzL2NvbG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3RvcmVmcm9udC9tb2NrLWNvbm5lY3Rvci91dGlscy9jcmVhdGVBcHBEYXRhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zdG9yZWZyb250L21vY2stY29ubmVjdG9yL3V0aWxzL2NyZWF0ZUZhY2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3RvcmVmcm9udC9tb2NrLWNvbm5lY3Rvci91dGlscy9jcmVhdGVNZWRpYS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3RvcmVmcm9udC9tb2NrLWNvbm5lY3Rvci91dGlscy9jcmVhdGVNZW51LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zdG9yZWZyb250L21vY2stY29ubmVjdG9yL3V0aWxzL2NyZWF0ZVByb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN0b3JlZnJvbnQvbW9jay1jb25uZWN0b3IvdXRpbHMvY3JlYXRlU29ydE9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN0b3JlZnJvbnQvbW9jay1jb25uZWN0b3IvdXRpbHMvY3JlYXRlVGFicy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3RvcmVmcm9udC9wcm9wcy9mdWxmaWxsQVBJUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvc2Vzc2lvbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2gvY2FwaXRhbGl6ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvcmVtLWlwc3VtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc3RvcmVmcm9udC9wcm9wcy9mdWxmaWxsQVBJUmVxdWVzdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXN0b3JlZnJvbnQvdXRpbHMvZ2V0QmFzZTY0Rm9ySW1hZ2VcIiJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJqc29uIiwic2Vzc2lvbiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FB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VDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix1QkFBdUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGFBQWE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxL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QUVuK0IsaURBQWlELGdCQUFnQixnRUFBZ0Usd0RBQXdELDZEQUE2RCxzREFBc0Qsa0hBQWtIOztBQUU5WixzQ0FBc0MsdURBQXVELHVDQUF1QyxTQUFTLE9BQU8sa0JBQWtCLEVBQUUsYUFBYTs7QUFFckw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsU0FBUztBQUNwQjtBQUNBLFdBQVcsU0FBUztBQUNwQixZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDLCtCQUErQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0EsNkM7Ozs7Ozs7Ozs7OztBQ3ZGQTtBQUFBO0FBQUE7QUFBQTtBQUVlLCtFQUFlQSxHQUFmLEVBQW9CQyxHQUFwQixFQUF5QjtBQUN0Q0EsS0FBRyxDQUFDQyxJQUFKLENBQVMsTUFBTUMsMEVBQU8sQ0FBQ0gsR0FBRCxFQUFNQyxHQUFOLENBQXRCO0FBQ0QsQzs7Ozs7Ozs7Ozs7QUNKRCxxRDs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7Ozs7QUNBQSxxRSIsImZpbGUiOiJwYWdlcy9hcGkvc2Vzc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL3Nlc3Npb24uanNcIik7XG4iLCJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuICByZXR1cm4gYXJyMjtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlcywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBfYXN5bmNUb0dlbmVyYXRvciwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZShcIi4vdG9Qcm9wZXJ0eUtleS5qc1wiKTtcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAga2V5ID0gdG9Qcm9wZXJ0eUtleShrZXkpO1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gb2JqO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZUJhYmVsSW50ZXJvcCA9IG5ldyBXZWFrTWFwKCk7XG4gIHZhciBjYWNoZU5vZGVJbnRlcm9wID0gbmV3IFdlYWtNYXAoKTtcbiAgcmV0dXJuIChfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApIHtcbiAgICByZXR1cm4gbm9kZUludGVyb3AgPyBjYWNoZU5vZGVJbnRlcm9wIDogY2FjaGVCYWJlbEludGVyb3A7XG4gIH0pKG5vZGVJbnRlcm9wKTtcbn1cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaiwgbm9kZUludGVyb3ApIHtcbiAgaWYgKCFub2RlSW50ZXJvcCAmJiBvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApO1xuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoa2V5ICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cbiAgcmV0dXJuIG5ld09iajtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG5mdW5jdGlvbiBfcmVnZW5lcmF0b3JSdW50aW1lKCkge1xuICBcInVzZSBzdHJpY3RcIjsgLyohIHJlZ2VuZXJhdG9yLXJ1bnRpbWUgLS0gQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuIC0tIGxpY2Vuc2UgKE1JVCk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9ibG9iL21haW4vTElDRU5TRSAqL1xuICBtb2R1bGUuZXhwb3J0cyA9IF9yZWdlbmVyYXRvclJ1bnRpbWUgPSBmdW5jdGlvbiBfcmVnZW5lcmF0b3JSdW50aW1lKCkge1xuICAgIHJldHVybiBleHBvcnRzO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIHZhciBleHBvcnRzID0ge30sXG4gICAgT3AgPSBPYmplY3QucHJvdG90eXBlLFxuICAgIGhhc093biA9IE9wLmhhc093blByb3BlcnR5LFxuICAgIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5IHx8IGZ1bmN0aW9uIChvYmosIGtleSwgZGVzYykge1xuICAgICAgb2JqW2tleV0gPSBkZXNjLnZhbHVlO1xuICAgIH0sXG4gICAgJFN5bWJvbCA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sID8gU3ltYm9sIDoge30sXG4gICAgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiLFxuICAgIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIixcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG4gIGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHtcbiAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgIGNvbmZpZ3VyYWJsZTogITAsXG4gICAgICB3cml0YWJsZTogITBcbiAgICB9KSwgb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcixcbiAgICAgIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKSxcbiAgICAgIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG4gICAgcmV0dXJuIGRlZmluZVByb3BlcnR5KGdlbmVyYXRvciwgXCJfaW52b2tlXCIsIHtcbiAgICAgIHZhbHVlOiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpXG4gICAgfSksIGdlbmVyYXRvcjtcbiAgfVxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogXCJub3JtYWxcIixcbiAgICAgICAgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKVxuICAgICAgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFwidGhyb3dcIixcbiAgICAgICAgYXJnOiBlcnJcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgZGVmaW5lKEl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mLFxuICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJiBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiYgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSAmJiAoSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSk7XG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9IEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24gKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChcInRocm93XCIgIT09IHJlY29yZC50eXBlKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnLFxuICAgICAgICAgIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICByZXR1cm4gdmFsdWUgJiYgXCJvYmplY3RcIiA9PSBfdHlwZW9mKHZhbHVlKSAmJiBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpID8gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pIDogUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbiAodW53cmFwcGVkKSB7XG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkLCByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgfVxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG4gICAgZGVmaW5lUHJvcGVydHkodGhpcywgXCJfaW52b2tlXCIsIHtcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShtZXRob2QsIGFyZykge1xuICAgICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID0gcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICAgIHJldHVybiBmdW5jdGlvbiAobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChcImV4ZWN1dGluZ1wiID09PSBzdGF0ZSkgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIGlmIChcImNvbXBsZXRlZFwiID09PSBzdGF0ZSkge1xuICAgICAgICBpZiAoXCJ0aHJvd1wiID09PSBtZXRob2QpIHRocm93IGFyZztcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cbiAgICAgIGZvciAoY29udGV4dC5tZXRob2QgPSBtZXRob2QsIGNvbnRleHQuYXJnID0gYXJnOzspIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoXCJuZXh0XCIgPT09IGNvbnRleHQubWV0aG9kKSBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7ZWxzZSBpZiAoXCJ0aHJvd1wiID09PSBjb250ZXh0Lm1ldGhvZCkge1xuICAgICAgICAgIGlmIChcInN1c3BlbmRlZFN0YXJ0XCIgPT09IHN0YXRlKSB0aHJvdyBzdGF0ZSA9IFwiY29tcGxldGVkXCIsIGNvbnRleHQuYXJnO1xuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuICAgICAgICB9IGVsc2UgXCJyZXR1cm5cIiA9PT0gY29udGV4dC5tZXRob2QgJiYgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICBzdGF0ZSA9IFwiZXhlY3V0aW5nXCI7XG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKFwibm9ybWFsXCIgPT09IHJlY29yZC50eXBlKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID0gY29udGV4dC5kb25lID8gXCJjb21wbGV0ZWRcIiA6IFwic3VzcGVuZGVkWWllbGRcIiwgcmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBcInRocm93XCIgPT09IHJlY29yZC50eXBlICYmIChzdGF0ZSA9IFwiY29tcGxldGVkXCIsIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiLCBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmcpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2ROYW1lID0gY29udGV4dC5tZXRob2QsXG4gICAgICBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvclttZXRob2ROYW1lXTtcbiAgICBpZiAodW5kZWZpbmVkID09PSBtZXRob2QpIHJldHVybiBjb250ZXh0LmRlbGVnYXRlID0gbnVsbCwgXCJ0aHJvd1wiID09PSBtZXRob2ROYW1lICYmIGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdICYmIChjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCIsIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkLCBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSwgXCJ0aHJvd1wiID09PSBjb250ZXh0Lm1ldGhvZCkgfHwgXCJyZXR1cm5cIiAhPT0gbWV0aG9kTmFtZSAmJiAoY29udGV4dC5tZXRob2QgPSBcInRocm93XCIsIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ1wiICsgbWV0aG9kTmFtZSArIFwiJyBtZXRob2RcIikpLCBDb250aW51ZVNlbnRpbmVsO1xuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG4gICAgaWYgKFwidGhyb3dcIiA9PT0gcmVjb3JkLnR5cGUpIHJldHVybiBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIiwgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnLCBjb250ZXh0LmRlbGVnYXRlID0gbnVsbCwgQ29udGludWVTZW50aW5lbDtcbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG4gICAgcmV0dXJuIGluZm8gPyBpbmZvLmRvbmUgPyAoY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWUsIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2MsIFwicmV0dXJuXCIgIT09IGNvbnRleHQubWV0aG9kICYmIChjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiLCBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZCksIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsLCBDb250aW51ZVNlbnRpbmVsKSA6IGluZm8gOiAoY29udGV4dC5tZXRob2QgPSBcInRocm93XCIsIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpLCBjb250ZXh0LmRlbGVnYXRlID0gbnVsbCwgQ29udGludWVTZW50aW5lbCk7XG4gIH1cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7XG4gICAgICB0cnlMb2M6IGxvY3NbMF1cbiAgICB9O1xuICAgIDEgaW4gbG9jcyAmJiAoZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdKSwgMiBpbiBsb2NzICYmIChlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXSwgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdKSwgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCIsIGRlbGV0ZSByZWNvcmQuYXJnLCBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbe1xuICAgICAgdHJ5TG9jOiBcInJvb3RcIlxuICAgIH1dLCB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyksIHRoaXMucmVzZXQoITApO1xuICB9XG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICBpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiBpdGVyYWJsZS5uZXh0KSByZXR1cm4gaXRlcmFibGU7XG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSxcbiAgICAgICAgICBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICAgIGZvciAoOyArK2kgPCBpdGVyYWJsZS5sZW5ndGg7KSB7XG4gICAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHJldHVybiBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV0sIG5leHQuZG9uZSA9ICExLCBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5leHQudmFsdWUgPSB1bmRlZmluZWQsIG5leHQuZG9uZSA9ICEwLCBuZXh0O1xuICAgICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgbmV4dDogZG9uZVJlc3VsdFxuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHVuZGVmaW5lZCxcbiAgICAgIGRvbmU6ICEwXG4gICAgfTtcbiAgfVxuICByZXR1cm4gR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIGRlZmluZVByb3BlcnR5KEdwLCBcImNvbnN0cnVjdG9yXCIsIHtcbiAgICB2YWx1ZTogR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgY29uZmlndXJhYmxlOiAhMFxuICB9KSwgZGVmaW5lUHJvcGVydHkoR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIFwiY29uc3RydWN0b3JcIiwge1xuICAgIHZhbHVlOiBHZW5lcmF0b3JGdW5jdGlvbixcbiAgICBjb25maWd1cmFibGU6ICEwXG4gIH0pLCBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIiksIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uIChnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZ2VuRnVuICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gISFjdG9yICYmIChjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIgPT09IChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkpO1xuICB9LCBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbiAoZ2VuRnVuKSB7XG4gICAgcmV0dXJuIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKSA6IChnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpKSwgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApLCBnZW5GdW47XG4gIH0sIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbiAoYXJnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIF9fYXdhaXQ6IGFyZ1xuICAgIH07XG4gIH0sIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSksIGRlZmluZShBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSwgYXN5bmNJdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KSwgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvciwgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uIChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICB2b2lkIDAgPT09IFByb21pc2VJbXBsICYmIChQcm9taXNlSW1wbCA9IFByb21pc2UpO1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3Iod3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksIFByb21pc2VJbXBsKTtcbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pID8gaXRlciA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgfSk7XG4gIH0sIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCksIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpLCBkZWZpbmUoR3AsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pLCBkZWZpbmUoR3AsIFwidG9TdHJpbmdcIiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9KSwgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24gKHZhbCkge1xuICAgIHZhciBvYmplY3QgPSBPYmplY3QodmFsKSxcbiAgICAgIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAgcmV0dXJuIGtleXMucmV2ZXJzZSgpLCBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgZm9yICg7IGtleXMubGVuZ3RoOykge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHJldHVybiBuZXh0LnZhbHVlID0ga2V5LCBuZXh0LmRvbmUgPSAhMSwgbmV4dDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXh0LmRvbmUgPSAhMCwgbmV4dDtcbiAgICB9O1xuICB9LCBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcywgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG4gICAgcmVzZXQ6IGZ1bmN0aW9uIHJlc2V0KHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIGlmICh0aGlzLnByZXYgPSAwLCB0aGlzLm5leHQgPSAwLCB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkLCB0aGlzLmRvbmUgPSAhMSwgdGhpcy5kZWxlZ2F0ZSA9IG51bGwsIHRoaXMubWV0aG9kID0gXCJuZXh0XCIsIHRoaXMuYXJnID0gdW5kZWZpbmVkLCB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KSwgIXNraXBUZW1wUmVzZXQpIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICBcInRcIiA9PT0gbmFtZS5jaGFyQXQoMCkgJiYgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiYgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSAmJiAodGhpc1tuYW1lXSA9IHVuZGVmaW5lZCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBzdG9wOiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgdGhpcy5kb25lID0gITA7XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHRoaXMudHJ5RW50cmllc1swXS5jb21wbGV0aW9uO1xuICAgICAgaWYgKFwidGhyb3dcIiA9PT0gcm9vdFJlY29yZC50eXBlKSB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24gZGlzcGF0Y2hFeGNlcHRpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB0aHJvdyBleGNlcHRpb247XG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmV0dXJuIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiLCByZWNvcmQuYXJnID0gZXhjZXB0aW9uLCBjb250ZXh0Lm5leHQgPSBsb2MsIGNhdWdodCAmJiAoY29udGV4dC5tZXRob2QgPSBcIm5leHRcIiwgY29udGV4dC5hcmcgPSB1bmRlZmluZWQpLCAhIWNhdWdodDtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldLFxuICAgICAgICAgIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgIGlmIChcInJvb3RcIiA9PT0gZW50cnkudHJ5TG9jKSByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpLFxuICAgICAgICAgICAgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgITApO1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCAhMCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghaGFzRmluYWxseSkgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGFicnVwdDogZnVuY3Rpb24gYWJydXB0KHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiYgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZmluYWxseUVudHJ5ICYmIChcImJyZWFrXCIgPT09IHR5cGUgfHwgXCJjb250aW51ZVwiID09PSB0eXBlKSAmJiBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJiBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MgJiYgKGZpbmFsbHlFbnRyeSA9IG51bGwpO1xuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZXR1cm4gcmVjb3JkLnR5cGUgPSB0eXBlLCByZWNvcmQuYXJnID0gYXJnLCBmaW5hbGx5RW50cnkgPyAodGhpcy5tZXRob2QgPSBcIm5leHRcIiwgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MsIENvbnRpbnVlU2VudGluZWwpIDogdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChcInRocm93XCIgPT09IHJlY29yZC50eXBlKSB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgcmV0dXJuIFwiYnJlYWtcIiA9PT0gcmVjb3JkLnR5cGUgfHwgXCJjb250aW51ZVwiID09PSByZWNvcmQudHlwZSA/IHRoaXMubmV4dCA9IHJlY29yZC5hcmcgOiBcInJldHVyblwiID09PSByZWNvcmQudHlwZSA/ICh0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmcsIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIiwgdGhpcy5uZXh0ID0gXCJlbmRcIikgOiBcIm5vcm1hbFwiID09PSByZWNvcmQudHlwZSAmJiBhZnRlckxvYyAmJiAodGhpcy5uZXh0ID0gYWZ0ZXJMb2MpLCBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG4gICAgZmluaXNoOiBmdW5jdGlvbiBmaW5pc2goZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSByZXR1cm4gdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyksIHJlc2V0VHJ5RW50cnkoZW50cnkpLCBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuICAgIH0sXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbiBfY2F0Y2godHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKFwidGhyb3dcIiA9PT0gcmVjb3JkLnR5cGUpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uIGRlbGVnYXRlWWllbGQoaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfSwgXCJuZXh0XCIgPT09IHRoaXMubWV0aG9kICYmICh0aGlzLmFyZyA9IHVuZGVmaW5lZCksIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9LCBleHBvcnRzO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfcmVnZW5lcmF0b3JSdW50aW1lLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIik7XG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5LmpzXCIpO1xudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIik7XG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiKTtcbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHtcbiAgaWYgKF90eXBlb2YoaW5wdXQpICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7XG4gIHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTtcbiAgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpO1xuICAgIGlmIChfdHlwZW9mKHJlcykgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpO1xuICB9XG4gIHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdG9QcmltaXRpdmUsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKFwiLi90b1ByaW1pdGl2ZS5qc1wiKTtcbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykge1xuICB2YXIga2V5ID0gdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTtcbiAgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdG9Qcm9wZXJ0eUtleSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gKG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMpLCBfdHlwZW9mKG9iaik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCIvLyBUT0RPKEJhYmVsIDgpOiBSZW1vdmUgdGhpcyBmaWxlLlxuXG52YXIgcnVudGltZSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3JlZ2VuZXJhdG9yUnVudGltZVwiKSgpO1xubW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuXG4vLyBDb3BpZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvYmxvYi9tYWluL3BhY2thZ2VzL3J1bnRpbWUvcnVudGltZS5qcyNMNzM2PVxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gXCJvYmplY3RcIikge1xuICAgIGdsb2JhbFRoaXMucmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbiAgfSBlbHNlIHtcbiAgICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xuICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGFjY291bnQ7XG5cbnZhciBfcmVnZW5lcmF0b3IgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvclwiKSk7XG5cbnZhciBfYXN5bmNUb0dlbmVyYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIikpO1xuXG52YXIgX2Z1bGZpbGxBUElSZXF1ZXN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vL3Byb3BzL2Z1bGZpbGxBUElSZXF1ZXN0XCIpKTtcblxudmFyIF9jcmVhdGVBcHBEYXRhID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9jcmVhdGVBcHBEYXRhXCIpKTtcblxuZnVuY3Rpb24gYWNjb3VudChfeCwgX3gyKSB7XG4gIHJldHVybiBfYWNjb3VudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfYWNjb3VudCgpIHtcbiAgX2FjY291bnQgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZShyZXEsIHJlcykge1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMjtcbiAgICAgICAgICAgIHJldHVybiAoMCwgX2Z1bGZpbGxBUElSZXF1ZXN0W1wiZGVmYXVsdFwiXSkocmVxLCB7XG4gICAgICAgICAgICAgIGFwcERhdGE6IF9jcmVhdGVBcHBEYXRhW1wiZGVmYXVsdFwiXSxcbiAgICAgICAgICAgICAgcGFnZURhdGE6IGZ1bmN0aW9uIHBhZ2VEYXRhKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgdGl0bGU6ICdNeSBBY2NvdW50JyxcbiAgICAgICAgICAgICAgICAgIGFjY291bnQ6IHt9LFxuICAgICAgICAgICAgICAgICAgYnJlYWRjcnVtYnM6IFt7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdIb21lJyxcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogJy8nXG4gICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWUpO1xuICB9KSk7XG4gIHJldHVybiBfYWNjb3VudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWNjb3VudC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGFkZFRvQ2FydDtcblxudmFyIF9yZWdlbmVyYXRvciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yXCIpKTtcblxudmFyIF9hc3luY1RvR2VuZXJhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiKSk7XG5cbnZhciBfY2FydFN0b3JlID0gcmVxdWlyZShcIi4vdXRpbHMvY2FydFN0b3JlXCIpO1xuXG5mdW5jdGlvbiBhZGRUb0NhcnQoX3gsIF94MiwgX3gzKSB7XG4gIHJldHVybiBfYWRkVG9DYXJ0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIF9hZGRUb0NhcnQoKSB7XG4gIF9hZGRUb0NhcnQgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZShfcmVmLCByZXEsIHJlcykge1xuICAgIHZhciBjb2xvciwgc2l6ZSwgcHJvZHVjdCwgcXVhbnRpdHk7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGNvbG9yID0gX3JlZi5jb2xvciwgc2l6ZSA9IF9yZWYuc2l6ZSwgcHJvZHVjdCA9IF9yZWYucHJvZHVjdCwgcXVhbnRpdHkgPSBfcmVmLnF1YW50aXR5O1xuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmFicnVwdChcInJldHVyblwiLCB7XG4gICAgICAgICAgICAgIGNhcnQ6IHtcbiAgICAgICAgICAgICAgICBpdGVtczogKDAsIF9jYXJ0U3RvcmUuYWRkSXRlbSkocHJvZHVjdC5pZCwgcXVhbnRpdHksIHJlcSwgcmVzKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZSk7XG4gIH0pKTtcbiAgcmV0dXJuIF9hZGRUb0NhcnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFkZFRvQ2FydC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGNhcnQ7XG5cbnZhciBfcmVnZW5lcmF0b3IgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvclwiKSk7XG5cbnZhciBfYXN5bmNUb0dlbmVyYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIikpO1xuXG52YXIgX2Z1bGZpbGxBUElSZXF1ZXN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vcHJvcHMvZnVsZmlsbEFQSVJlcXVlc3RcIikpO1xuXG52YXIgX2NyZWF0ZUFwcERhdGEgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL2NyZWF0ZUFwcERhdGFcIikpO1xuXG52YXIgX2NhcnRTdG9yZSA9IHJlcXVpcmUoXCIuL3V0aWxzL2NhcnRTdG9yZVwiKTtcblxuZnVuY3Rpb24gY2FydChfeCwgX3gyKSB7XG4gIHJldHVybiBfY2FydC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfY2FydCgpIHtcbiAgX2NhcnQgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZShyZXEsIHJlcykge1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsICgwLCBfZnVsZmlsbEFQSVJlcXVlc3RbXCJkZWZhdWx0XCJdKShyZXEsIHtcbiAgICAgICAgICAgICAgYXBwRGF0YTogX2NyZWF0ZUFwcERhdGFbXCJkZWZhdWx0XCJdLFxuICAgICAgICAgICAgICBwYWdlRGF0YTogZnVuY3Rpb24gcGFnZURhdGEoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogJ015IENhcnQnLFxuICAgICAgICAgICAgICAgICAgYnJlYWRjcnVtYnM6IFt7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdIb21lJyxcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogJy8nXG4gICAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICAgIGNhcnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6ICgwLCBfY2FydFN0b3JlLmdldFByb2R1Y3RzKShyZXEsIHJlcylcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlKTtcbiAgfSkpO1xuICByZXR1cm4gX2NhcnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNhcnQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBob21lO1xuXG52YXIgX3JlZ2VuZXJhdG9yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3JcIikpO1xuXG52YXIgX2FzeW5jVG9HZW5lcmF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCIpKTtcblxudmFyIF9mdWxmaWxsQVBJUmVxdWVzdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3Byb3BzL2Z1bGZpbGxBUElSZXF1ZXN0XCIpKTtcblxudmFyIF9jcmVhdGVBcHBEYXRhID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9jcmVhdGVBcHBEYXRhXCIpKTtcblxuZnVuY3Rpb24gaG9tZShfeCwgX3gyKSB7XG4gIHJldHVybiBfaG9tZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfaG9tZSgpIHtcbiAgX2hvbWUgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZShyZXEsIHJlcykge1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMjtcbiAgICAgICAgICAgIHJldHVybiAoMCwgX2Z1bGZpbGxBUElSZXF1ZXN0W1wiZGVmYXVsdFwiXSkocmVxLCB7XG4gICAgICAgICAgICAgIGFwcERhdGE6IF9jcmVhdGVBcHBEYXRhW1wiZGVmYXVsdFwiXSxcbiAgICAgICAgICAgICAgcGFnZURhdGE6IGZ1bmN0aW9uIHBhZ2VEYXRhKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgdGl0bGU6ICdSZWFjdCBTdG9yZWZyb250JyxcbiAgICAgICAgICAgICAgICAgIHNsb3RzOiB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRpbmc6ICdXZWxjb21lIHRvIHlvdXIgbmV3IFJlYWN0IFN0b3JlZnJvbnQgYXBwLicsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlxcbiAgICAgICAgICAgICAgICA8cD5cXG4gICAgICAgICAgICAgICAgSGVyZSB5b3UnbGwgZmluZCBtb2NrIGhvbWUsIGNhdGVnb3J5LCBzdWJjYXRlZ29yeSwgcHJvZHVjdCwgYW5kIGNhcnQgcGFnZXMgdGhhdCB5b3UgY2FuXFxuICAgICAgICAgICAgICAgIHVzZSBhcyBhIHN0YXJ0aW5nIHBvaW50IHRvIGJ1aWxkIHlvdXIgUFdBLlxcbiAgICAgICAgICAgICAgPC9wPlxcbiAgICAgICAgICAgICAgPHA+SGFwcHkgY29kaW5nITwvcD5cXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWUpO1xuICB9KSk7XG4gIHJldHVybiBfaG9tZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aG9tZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJjYXJ0XCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9jYXJ0W1wiZGVmYXVsdFwiXTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJhY2NvdW50XCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9hY2NvdW50W1wiZGVmYXVsdFwiXTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJhZGRUb0NhcnRcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2FkZFRvQ2FydFtcImRlZmF1bHRcIl07XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidXBkYXRlQ2FydEl0ZW1cIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3VwZGF0ZUNhcnRJdGVtW1wiZGVmYXVsdFwiXTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJyZW1vdmVDYXJ0SXRlbVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfcmVtb3ZlQ2FydEl0ZW1bXCJkZWZhdWx0XCJdO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImhvbWVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2hvbWVbXCJkZWZhdWx0XCJdO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInByb2R1Y3RcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3Byb2R1Y3RbXCJkZWZhdWx0XCJdO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInByb2R1Y3RNZWRpYVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfcHJvZHVjdE1lZGlhW1wiZGVmYXVsdFwiXTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJwcm9kdWN0U3VnZ2VzdGlvbnNcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3Byb2R1Y3RTdWdnZXN0aW9uc1tcImRlZmF1bHRcIl07XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwic2VhcmNoXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9zZWFyY2hbXCJkZWZhdWx0XCJdO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInNlYXJjaFN1Z2dlc3Rpb25zXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9zZWFyY2hTdWdnZXN0aW9uc1tcImRlZmF1bHRcIl07XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwic2Vzc2lvblwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfc2Vzc2lvbltcImRlZmF1bHRcIl07XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwic3ViY2F0ZWdvcnlcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3N1YmNhdGVnb3J5W1wiZGVmYXVsdFwiXTtcbiAgfVxufSk7XG5cbnZhciBfY2FydCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vY2FydC5qc1wiKSk7XG5cbnZhciBfYWNjb3VudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vYWNjb3VudC5qc1wiKSk7XG5cbnZhciBfYWRkVG9DYXJ0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9hZGRUb0NhcnQuanNcIikpO1xuXG52YXIgX3VwZGF0ZUNhcnRJdGVtID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91cGRhdGVDYXJ0SXRlbS5qc1wiKSk7XG5cbnZhciBfcmVtb3ZlQ2FydEl0ZW0gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JlbW92ZUNhcnRJdGVtLmpzXCIpKTtcblxudmFyIF9ob21lID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9ob21lLmpzXCIpKTtcblxudmFyIF9wcm9kdWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9wcm9kdWN0LmpzXCIpKTtcblxudmFyIF9wcm9kdWN0TWVkaWEgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3Byb2R1Y3RNZWRpYS5qc1wiKSk7XG5cbnZhciBfcHJvZHVjdFN1Z2dlc3Rpb25zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9wcm9kdWN0U3VnZ2VzdGlvbnMuanNcIikpO1xuXG52YXIgX3NlYXJjaCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc2VhcmNoLmpzXCIpKTtcblxudmFyIF9zZWFyY2hTdWdnZXN0aW9ucyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc2VhcmNoU3VnZ2VzdGlvbnMuanNcIikpO1xuXG52YXIgX3Nlc3Npb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3Nlc3Npb24uanNcIikpO1xuXG52YXIgX3N1YmNhdGVnb3J5ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zdWJjYXRlZ29yeS5qc1wiKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHByb2R1Y3Q7XG5cbnZhciBfcmVnZW5lcmF0b3IgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvclwiKSk7XG5cbnZhciBfYXN5bmNUb0dlbmVyYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIikpO1xuXG52YXIgX2Z1bGZpbGxBUElSZXF1ZXN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vcHJvcHMvZnVsZmlsbEFQSVJlcXVlc3RcIikpO1xuXG52YXIgX2NyZWF0ZVByb2R1Y3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL2NyZWF0ZVByb2R1Y3RcIikpO1xuXG52YXIgX2NyZWF0ZUFwcERhdGEgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL2NyZWF0ZUFwcERhdGFcIikpO1xuXG52YXIgX2dldEJhc2U2NEZvckltYWdlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3Qtc3RvcmVmcm9udC91dGlscy9nZXRCYXNlNjRGb3JJbWFnZVwiKSk7XG5cbmZ1bmN0aW9uIGFzY2lpU3VtKCkge1xuICB2YXIgc3RyaW5nID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAnJztcbiAgcmV0dXJuIHN0cmluZy5zcGxpdCgnJykucmVkdWNlKGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgcmV0dXJuIHMgKyBlLmNoYXJDb2RlQXQoKTtcbiAgfSwgMCk7XG59XG5cbmZ1bmN0aW9uIHByb2R1Y3QoX3gsIF94MiwgX3gzKSB7XG4gIHJldHVybiBfcHJvZHVjdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfcHJvZHVjdCgpIHtcbiAgX3Byb2R1Y3QgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZShwYXJhbXMsIHJlcSwgcmVzKSB7XG4gICAgdmFyIGlkLCBjb2xvciwgc2l6ZSwgcmVzdWx0LCBkYXRhLCBtb2NrUHJpY2U7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGlkID0gcGFyYW1zLmlkLCBjb2xvciA9IHBhcmFtcy5jb2xvciwgc2l6ZSA9IHBhcmFtcy5zaXplO1xuICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDM7XG4gICAgICAgICAgICByZXR1cm4gKDAsIF9mdWxmaWxsQVBJUmVxdWVzdFtcImRlZmF1bHRcIl0pKHJlcSwge1xuICAgICAgICAgICAgICBhcHBEYXRhOiBfY3JlYXRlQXBwRGF0YVtcImRlZmF1bHRcIl0sXG4gICAgICAgICAgICAgIHBhZ2VEYXRhOiBmdW5jdGlvbiBwYWdlRGF0YSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0UGFnZURhdGEoaWQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHJlc3VsdCA9IF9jb250ZXh0LnNlbnQ7XG5cbiAgICAgICAgICAgIGlmICghKGNvbG9yIHx8IHNpemUpKSB7XG4gICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxMztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA3O1xuICAgICAgICAgICAgcmV0dXJuIGdldFBhZ2VEYXRhKGlkKTtcblxuICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgIGRhdGEgPSBfY29udGV4dC5zZW50O1xuICAgICAgICAgICAgZGF0YS5jYXJvdXNlbCA9IHtcbiAgICAgICAgICAgICAgaW5kZXg6IDBcbiAgICAgICAgICAgIH07IC8vIEEgcHJpY2UgZm9yIHRoZSBmZXRjaGVkIHByb2R1Y3QgdmFyaWFudCB3b3VsZCBiZSBpbmNsdWRlZCBpblxuICAgICAgICAgICAgLy8gdGhlIHJlc3BvbnNlLCBidXQgZm9yIGRlbW8gcHVycG9zZXMgb25seSwgd2UgYXJlIHNldHRpbmcgdGhlXG4gICAgICAgICAgICAvLyBwcmljZSBiYXNlZCBvbiB0aGUgY29sb3IgbmFtZS5cblxuICAgICAgICAgICAgbW9ja1ByaWNlID0gKGFzY2lpU3VtKGNvbG9yKSArIGFzY2lpU3VtKHNpemUpKSAvIDEwMDtcbiAgICAgICAgICAgIGRhdGEucHJvZHVjdC5wcmljZSA9IG1vY2tQcmljZTtcbiAgICAgICAgICAgIGRhdGEucHJvZHVjdC5wcmljZVRleHQgPSBcIiRcIi5jb25jYXQobW9ja1ByaWNlLnRvRml4ZWQoMikpO1xuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmFicnVwdChcInJldHVyblwiLCBkYXRhKTtcblxuICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIHJlc3VsdCk7XG5cbiAgICAgICAgICBjYXNlIDE0OlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlKTtcbiAgfSkpO1xuICByZXR1cm4gX3Byb2R1Y3QuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gZ2V0UGFnZURhdGEoX3g0KSB7XG4gIHJldHVybiBfZ2V0UGFnZURhdGEuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gX2dldFBhZ2VEYXRhKCkge1xuICBfZ2V0UGFnZURhdGEgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTIoaWQpIHtcbiAgICB2YXIgcmVzdWx0LCBtYWluUHJvZHVjdEltYWdlO1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZTIkKF9jb250ZXh0Mikge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDIucHJldiA9IF9jb250ZXh0Mi5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgcmVzdWx0ID0ge1xuICAgICAgICAgICAgICB0aXRsZTogXCJQcm9kdWN0IFwiLmNvbmNhdChpZCksXG4gICAgICAgICAgICAgIHByb2R1Y3Q6ICgwLCBfY3JlYXRlUHJvZHVjdFtcImRlZmF1bHRcIl0pKGlkKSxcbiAgICAgICAgICAgICAgYnJlYWRjcnVtYnM6IFt7XG4gICAgICAgICAgICAgICAgdGV4dDogXCJIb21lXCIsXG4gICAgICAgICAgICAgICAgaHJlZjogJy8nXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlN1YmNhdGVnb3J5IFwiLmNvbmNhdChpZCksXG4gICAgICAgICAgICAgICAgYXM6IFwiL3MvXCIuY29uY2F0KGlkKSxcbiAgICAgICAgICAgICAgICBocmVmOiAnL3MvW3N1YmNhdGVnb3J5SWRdJ1xuICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG1haW5Qcm9kdWN0SW1hZ2UgPSByZXN1bHQucHJvZHVjdC5tZWRpYS5mdWxsWzBdO1xuICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSA0O1xuICAgICAgICAgICAgcmV0dXJuICgwLCBfZ2V0QmFzZTY0Rm9ySW1hZ2VbXCJkZWZhdWx0XCJdKShtYWluUHJvZHVjdEltYWdlLnNyYyk7XG5cbiAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICBtYWluUHJvZHVjdEltYWdlLnNyYyA9IF9jb250ZXh0Mi5zZW50O1xuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mi5hYnJ1cHQoXCJyZXR1cm5cIiwgcmVzdWx0KTtcblxuICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyLnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWUyKTtcbiAgfSkpO1xuICByZXR1cm4gX2dldFBhZ2VEYXRhLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcm9kdWN0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gcHJvZHVjdE1lZGlhO1xuXG52YXIgX3JlZ2VuZXJhdG9yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3JcIikpO1xuXG52YXIgX2FzeW5jVG9HZW5lcmF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCIpKTtcblxudmFyIF9jcmVhdGVNZWRpYSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvY3JlYXRlTWVkaWFcIikpO1xuXG5mdW5jdGlvbiBwcm9kdWN0TWVkaWEoX3gsIF94MiwgX3gzKSB7XG4gIHJldHVybiBfcHJvZHVjdE1lZGlhLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIF9wcm9kdWN0TWVkaWEoKSB7XG4gIF9wcm9kdWN0TWVkaWEgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZShfcmVmLCByZXEsIHJlcykge1xuICAgIHZhciBpZCwgY29sb3I7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGlkID0gX3JlZi5pZCwgY29sb3IgPSBfcmVmLmNvbG9yO1xuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmFicnVwdChcInJldHVyblwiLCB7XG4gICAgICAgICAgICAgIG1lZGlhOiAoMCwgX2NyZWF0ZU1lZGlhW1wiZGVmYXVsdFwiXSkoaWQsIGNvbG9yKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWUpO1xuICB9KSk7XG4gIHJldHVybiBfcHJvZHVjdE1lZGlhLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcm9kdWN0TWVkaWEuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBwcm9kdWN0U3VnZ2VzdGlvbnM7XG5cbnZhciBfcmVnZW5lcmF0b3IgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvclwiKSk7XG5cbnZhciBfYXN5bmNUb0dlbmVyYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIikpO1xuXG52YXIgX2NyZWF0ZVByb2R1Y3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL2NyZWF0ZVByb2R1Y3RcIikpO1xuXG4vKipcbiAqIEFuIGV4YW1wbGUgZW5kcG9pbnQgdGhhdCByZXR1cm5zIG1vY2sgcHJvZHVjdCBzdWdnZXN0aW9ucyBmb3IgYSBQRFAuXG4gKiBAcGFyYW0geyp9IHJlcVxuICogQHBhcmFtIHsqfSByZXNcbiAqL1xuZnVuY3Rpb24gcHJvZHVjdFN1Z2dlc3Rpb25zKF94LCBfeDIpIHtcbiAgcmV0dXJuIF9wcm9kdWN0U3VnZ2VzdGlvbnMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gX3Byb2R1Y3RTdWdnZXN0aW9ucygpIHtcbiAgX3Byb2R1Y3RTdWdnZXN0aW9ucyA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKSggLyojX19QVVJFX18qL19yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlKHJlcSwgcmVzKSB7XG4gICAgdmFyIHByb2R1Y3RzLCBpO1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBwcm9kdWN0cyA9IFtdO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAxOyBpIDw9IDEwOyBpKyspIHtcbiAgICAgICAgICAgICAgcHJvZHVjdHMucHVzaCgoMCwgX2NyZWF0ZVByb2R1Y3RbXCJkZWZhdWx0XCJdKShpKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgcHJvZHVjdHMpO1xuXG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlKTtcbiAgfSkpO1xuICByZXR1cm4gX3Byb2R1Y3RTdWdnZXN0aW9ucy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJvZHVjdFN1Z2dlc3Rpb25zLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gcmVtb3ZlQ2FydEl0ZW07XG5cbnZhciBfcmVnZW5lcmF0b3IgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvclwiKSk7XG5cbnZhciBfYXN5bmNUb0dlbmVyYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIikpO1xuXG52YXIgX2NhcnRTdG9yZSA9IHJlcXVpcmUoXCIuL3V0aWxzL2NhcnRTdG9yZVwiKTtcblxuZnVuY3Rpb24gcmVtb3ZlQ2FydEl0ZW0oX3gsIF94MiwgX3gzKSB7XG4gIHJldHVybiBfcmVtb3ZlQ2FydEl0ZW0uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gX3JlbW92ZUNhcnRJdGVtKCkge1xuICBfcmVtb3ZlQ2FydEl0ZW0gPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZShpdGVtLCByZXEsIHJlcykge1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIHtcbiAgICAgICAgICAgICAgY2FydDoge1xuICAgICAgICAgICAgICAgIGl0ZW1zOiAoMCwgX2NhcnRTdG9yZS5yZW1vdmVJdGVtKShpdGVtLmlkLCByZXEsIHJlcylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWUpO1xuICB9KSk7XG4gIHJldHVybiBfcmVtb3ZlQ2FydEl0ZW0uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlbW92ZUNhcnRJdGVtLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImRlZmF1bHRcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3N1YmNhdGVnb3J5W1wiZGVmYXVsdFwiXTtcbiAgfVxufSk7XG5cbnZhciBfc3ViY2F0ZWdvcnkgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3N1YmNhdGVnb3J5XCIpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNlYXJjaC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHNlYXJjaFN1Z2dlc3Rpb25zO1xuXG52YXIgX3JlZ2VuZXJhdG9yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3JcIikpO1xuXG52YXIgX2FzeW5jVG9HZW5lcmF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCIpKTtcblxuLyoqXG4gKiBBbiBleGFtcGxlIGltcGxlbWVudGF0aW9uIG9mIHRoZSBBUEkgZm9yIHRoZSBTZWFyY2hQb3B1cCBjb21wb25lbnQgdXNpbmcgcGxhY2Vob2xkZXIgZGF0YS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXJhbXMucSBUaGUgc2VhcmNoIHRleHRcbiAqIEByZXR1cm4ge09iamVjdH0gQW4gb2JqZWN0IHdob3NlIHNoYXBlIG1hdGNoZXMgQXBwTW9kZWxCYXNlXG4gKi9cbmZ1bmN0aW9uIHNlYXJjaFN1Z2dlc3Rpb25zKF94LCBfeDIsIF94Mykge1xuICByZXR1cm4gX3NlYXJjaFN1Z2dlc3Rpb25zLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIF9zZWFyY2hTdWdnZXN0aW9ucygpIHtcbiAgX3NlYXJjaFN1Z2dlc3Rpb25zID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUocSwgcmVxLCByZXMpIHtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUkKF9jb250ZXh0KSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmFicnVwdChcInJldHVyblwiLCB7XG4gICAgICAgICAgICAgIHRleHQ6IHEsXG4gICAgICAgICAgICAgIGdyb3VwczogW3tcbiAgICAgICAgICAgICAgICBjYXB0aW9uOiAnU3VnZ2VzdGVkIFNlYXJjaGVzJyxcbiAgICAgICAgICAgICAgICB1aTogJ2xpc3QnLFxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXCJTbWFsbCBcIi5jb25jYXQocSksIFwiTGFyZ2UgXCIuY29uY2F0KHEpLCBcIlwiLmNvbmNhdChxLCBcIiB3aXRoIHJlZCBzdHJpcGVzXCIpXS5tYXAoZnVuY3Rpb24gKHRleHQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHRleHQsXG4gICAgICAgICAgICAgICAgICAgIGFzOiBcIi9zZWFyY2g/cT1cIi5jb25jYXQoZW5jb2RlVVJJQ29tcG9uZW50KHRleHQpKSxcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogJy9zZWFyY2gnXG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBjYXB0aW9uOiAnU3VnZ2VzdGVkIENhdGVnb3JpZXMnLFxuICAgICAgICAgICAgICAgIHVpOiAnbGlzdCcsXG4gICAgICAgICAgICAgICAgbGlua3M6IFt7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnQ2F0ZWdvcnkgMScsXG4gICAgICAgICAgICAgICAgICBocmVmOiAnL3MvW3N1YmNhdGVnb3J5SWRdJyxcbiAgICAgICAgICAgICAgICAgIGFzOiAnL3MvMSdcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnQ2F0ZWdvcnkgMicsXG4gICAgICAgICAgICAgICAgICBocmVmOiAnL3MvW3N1YmNhdGVnb3J5SWRdJyxcbiAgICAgICAgICAgICAgICAgIGFzOiAnL3MvMidcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnQ2F0ZWdvcnkgMycsXG4gICAgICAgICAgICAgICAgICBocmVmOiAnL3MvW3N1YmNhdGVnb3J5SWRdJyxcbiAgICAgICAgICAgICAgICAgIGFzOiAnL3MvMydcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgY2FwdGlvbjogJ1N1Z2dlc3RlZCBQcm9kdWN0cycsXG4gICAgICAgICAgICAgICAgdWk6ICd0aHVtYm5haWxzJyxcbiAgICAgICAgICAgICAgICBsaW5rczogW3tcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdQcm9kdWN0IDEnLFxuICAgICAgICAgICAgICAgICAgaHJlZjogJy9wL1twcm9kdWN0SWRdJyxcbiAgICAgICAgICAgICAgICAgIGFzOiAnL3AvMT9zPTEmYz0xJyxcbiAgICAgICAgICAgICAgICAgIHRodW1ibmFpbDoge1xuICAgICAgICAgICAgICAgICAgICBzcmM6ICdodHRwczovL2R1bW15aW1hZ2UuY29tLzEyMHgxMjAnLFxuICAgICAgICAgICAgICAgICAgICBhbHQ6ICdQcm9kdWN0IDEnXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ1Byb2R1Y3QgMicsXG4gICAgICAgICAgICAgICAgICBocmVmOiAnL3AvW3Byb2R1Y3RJZF0nLFxuICAgICAgICAgICAgICAgICAgYXM6ICcvcC8yP3M9MSZjPTEnLFxuICAgICAgICAgICAgICAgICAgdGh1bWJuYWlsOiB7XG4gICAgICAgICAgICAgICAgICAgIHNyYzogJ2h0dHBzOi8vZHVtbXlpbWFnZS5jb20vMTIweDEyMCcsXG4gICAgICAgICAgICAgICAgICAgIGFsdDogJ1Byb2R1Y3QgMSdcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnUHJvZHVjdCAzJyxcbiAgICAgICAgICAgICAgICAgIGhyZWY6ICcvcC9bcHJvZHVjdElkXScsXG4gICAgICAgICAgICAgICAgICBhczogJy9wLzM/cz0xJmM9MScsXG4gICAgICAgICAgICAgICAgICB0aHVtYm5haWw6IHtcbiAgICAgICAgICAgICAgICAgICAgc3JjOiAnaHR0cHM6Ly9kdW1teWltYWdlLmNvbS8xMjB4MTIwJyxcbiAgICAgICAgICAgICAgICAgICAgYWx0OiAnUHJvZHVjdCAxJ1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdQcm9kdWN0IDQnLFxuICAgICAgICAgICAgICAgICAgaHJlZjogJy9wL1twcm9kdWN0SWRdJyxcbiAgICAgICAgICAgICAgICAgIGFzOiAnL3AvMz9zPTEmYz0xJyxcbiAgICAgICAgICAgICAgICAgIHRodW1ibmFpbDoge1xuICAgICAgICAgICAgICAgICAgICBzcmM6ICdodHRwczovL2R1bW15aW1hZ2UuY29tLzEyMHgxMjAnLFxuICAgICAgICAgICAgICAgICAgICBhbHQ6ICdQcm9kdWN0IDEnXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ1Byb2R1Y3QgNScsXG4gICAgICAgICAgICAgICAgICBocmVmOiAnL3AvW3Byb2R1Y3RJZF0nLFxuICAgICAgICAgICAgICAgICAgYXM6ICcvcC81P3M9MSZjPTEnLFxuICAgICAgICAgICAgICAgICAgdGh1bWJuYWlsOiB7XG4gICAgICAgICAgICAgICAgICAgIHNyYzogJ2h0dHBzOi8vZHVtbXlpbWFnZS5jb20vMTIweDEyMCcsXG4gICAgICAgICAgICAgICAgICAgIGFsdDogJ1Byb2R1Y3QgMSdcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWUpO1xuICB9KSk7XG4gIHJldHVybiBfc2VhcmNoU3VnZ2VzdGlvbnMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNlYXJjaFN1Z2dlc3Rpb25zLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gc2Vzc2lvbjtcblxudmFyIF9yZWdlbmVyYXRvciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yXCIpKTtcblxudmFyIF9hc3luY1RvR2VuZXJhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiKSk7XG5cbnZhciBfY2FydFN0b3JlID0gcmVxdWlyZShcIi4vdXRpbHMvY2FydFN0b3JlXCIpO1xuXG5mdW5jdGlvbiBzZXNzaW9uKF94LCBfeDIpIHtcbiAgcmV0dXJuIF9zZXNzaW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIF9zZXNzaW9uKCkge1xuICBfc2Vzc2lvbiA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKSggLyojX19QVVJFX18qL19yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlKHJlcSwgcmVzKSB7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwge1xuICAgICAgICAgICAgICBuYW1lOiAnTWFyaycsXG4gICAgICAgICAgICAgIGVtYWlsOiAnbWFya0Bkb21haW4uY29tJyxcbiAgICAgICAgICAgICAgY2FydDoge1xuICAgICAgICAgICAgICAgIGl0ZW1zOiAoMCwgX2NhcnRTdG9yZS5nZXRQcm9kdWN0cykocmVxLCByZXMpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGN1cnJlbmN5OiAnVVNEJ1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWUpO1xuICB9KSk7XG4gIHJldHVybiBfc2Vzc2lvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2Vzc2lvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHN1YmNhdGVnb3J5O1xuXG52YXIgX3JlZ2VuZXJhdG9yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3JcIikpO1xuXG52YXIgX3RvQ29uc3VtYWJsZUFycmF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXlcIikpO1xuXG52YXIgX2FzeW5jVG9HZW5lcmF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCIpKTtcblxudmFyIF9jcmVhdGVGYWNldHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL2NyZWF0ZUZhY2V0c1wiKSk7XG5cbnZhciBfY3JlYXRlU29ydE9wdGlvbnMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL2NyZWF0ZVNvcnRPcHRpb25zXCIpKTtcblxudmFyIF9jcmVhdGVQcm9kdWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9jcmVhdGVQcm9kdWN0XCIpKTtcblxudmFyIF9jb2xvcnMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi91dGlscy9jb2xvcnNcIikpO1xuXG52YXIgX2Z1bGZpbGxBUElSZXF1ZXN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3Qtc3RvcmVmcm9udC9wcm9wcy9mdWxmaWxsQVBJUmVxdWVzdFwiKSk7XG5cbnZhciBfY3JlYXRlQXBwRGF0YSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvY3JlYXRlQXBwRGF0YVwiKSk7XG5cbmZ1bmN0aW9uIF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKG8sIGFsbG93QXJyYXlMaWtlKSB7IHZhciBpdDsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgb1tTeW1ib2wuaXRlcmF0b3JdID09IG51bGwpIHsgaWYgKEFycmF5LmlzQXJyYXkobykgfHwgKGl0ID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8pKSB8fCBhbGxvd0FycmF5TGlrZSAmJiBvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgeyBpZiAoaXQpIG8gPSBpdDsgdmFyIGkgPSAwOyB2YXIgRiA9IGZ1bmN0aW9uIEYoKSB7fTsgcmV0dXJuIHsgczogRiwgbjogZnVuY3Rpb24gbigpIHsgaWYgKGkgPj0gby5sZW5ndGgpIHJldHVybiB7IGRvbmU6IHRydWUgfTsgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiBvW2krK10gfTsgfSwgZTogZnVuY3Rpb24gZShfZSkgeyB0aHJvdyBfZTsgfSwgZjogRiB9OyB9IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfSB2YXIgbm9ybWFsQ29tcGxldGlvbiA9IHRydWUsIGRpZEVyciA9IGZhbHNlLCBlcnI7IHJldHVybiB7IHM6IGZ1bmN0aW9uIHMoKSB7IGl0ID0gb1tTeW1ib2wuaXRlcmF0b3JdKCk7IH0sIG46IGZ1bmN0aW9uIG4oKSB7IHZhciBzdGVwID0gaXQubmV4dCgpOyBub3JtYWxDb21wbGV0aW9uID0gc3RlcC5kb25lOyByZXR1cm4gc3RlcDsgfSwgZTogZnVuY3Rpb24gZShfZTIpIHsgZGlkRXJyID0gdHJ1ZTsgZXJyID0gX2UyOyB9LCBmOiBmdW5jdGlvbiBmKCkgeyB0cnkgeyBpZiAoIW5vcm1hbENvbXBsZXRpb24gJiYgaXRbXCJyZXR1cm5cIl0gIT0gbnVsbCkgaXRbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKGRpZEVycikgdGhyb3cgZXJyOyB9IH0gfTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIHN1YmNhdGVnb3J5KF94LCBfeDIsIF94Mykge1xuICByZXR1cm4gX3N1YmNhdGVnb3J5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIF9zdWJjYXRlZ29yeSgpIHtcbiAgX3N1YmNhdGVnb3J5ID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUocGFyYW1zLCByZXEsIHJlcykge1xuICAgIHZhciBxLCBfcGFyYW1zJHNsdWcsIHNsdWcsIF9wYXJhbXMkcGFnZSwgcGFnZSwgZmlsdGVycywgc29ydCwgX3BhcmFtcyRtb3JlLCBtb3JlO1xuXG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHEgPSBwYXJhbXMucSwgX3BhcmFtcyRzbHVnID0gcGFyYW1zLnNsdWcsIHNsdWcgPSBfcGFyYW1zJHNsdWcgPT09IHZvaWQgMCA/ICcxJyA6IF9wYXJhbXMkc2x1ZywgX3BhcmFtcyRwYWdlID0gcGFyYW1zLnBhZ2UsIHBhZ2UgPSBfcGFyYW1zJHBhZ2UgPT09IHZvaWQgMCA/IDAgOiBfcGFyYW1zJHBhZ2UsIGZpbHRlcnMgPSBwYXJhbXMuZmlsdGVycywgc29ydCA9IHBhcmFtcy5zb3J0LCBfcGFyYW1zJG1vcmUgPSBwYXJhbXMubW9yZSwgbW9yZSA9IF9wYXJhbXMkbW9yZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcGFyYW1zJG1vcmU7XG5cbiAgICAgICAgICAgIGlmIChmaWx0ZXJzKSB7XG4gICAgICAgICAgICAgIGZpbHRlcnMgPSBKU09OLnBhcnNlKGZpbHRlcnMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZmlsdGVycyA9IFtdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gNDtcbiAgICAgICAgICAgIHJldHVybiAoMCwgX2Z1bGZpbGxBUElSZXF1ZXN0W1wiZGVmYXVsdFwiXSkocmVxLCB7XG4gICAgICAgICAgICAgIGFwcERhdGE6IF9jcmVhdGVBcHBEYXRhW1wiZGVmYXVsdFwiXSxcbiAgICAgICAgICAgICAgcGFnZURhdGE6IGZ1bmN0aW9uIHBhZ2VEYXRhKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgaWQ6IHNsdWcsXG4gICAgICAgICAgICAgICAgICBuYW1lOiBxICE9IG51bGwgPyBcIlJlc3VsdHMgZm9yIFxcXCJcIi5jb25jYXQocSwgXCJcXFwiXCIpIDogXCJTdWJjYXRlZ29yeSBcIi5jb25jYXQoc2x1ZyksXG4gICAgICAgICAgICAgICAgICB0aXRsZTogcSAhPSBudWxsID8gXCJSZXN1bHRzIGZvciBcXFwiXCIuY29uY2F0KHEsIFwiXFxcIlwiKSA6IFwiU3ViY2F0ZWdvcnkgXCIuY29uY2F0KHNsdWcpLFxuICAgICAgICAgICAgICAgICAgdG90YWw6IDEwMCxcbiAgICAgICAgICAgICAgICAgIHBhZ2U6IHBhcnNlSW50KHBhZ2UpLFxuICAgICAgICAgICAgICAgICAgdG90YWxQYWdlczogNSxcbiAgICAgICAgICAgICAgICAgIGZpbHRlcnM6IGZpbHRlcnMsXG4gICAgICAgICAgICAgICAgICBzb3J0OiBzb3J0LFxuICAgICAgICAgICAgICAgICAgc29ydE9wdGlvbnM6ICgwLCBfY3JlYXRlU29ydE9wdGlvbnNbXCJkZWZhdWx0XCJdKSgpLFxuICAgICAgICAgICAgICAgICAgZmFjZXRzOiAoMCwgX2NyZWF0ZUZhY2V0c1tcImRlZmF1bHRcIl0pKCksXG4gICAgICAgICAgICAgICAgICBwcm9kdWN0czogZmlsdGVyUHJvZHVjdHMocGFnZSwgZmlsdGVycywgbW9yZSksXG4gICAgICAgICAgICAgICAgICBicmVhZGNydW1iczogW3tcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJIb21lXCIsXG4gICAgICAgICAgICAgICAgICAgIGhyZWY6ICcvJ1xuICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0LnNlbnQpO1xuXG4gICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlKTtcbiAgfSkpO1xuICByZXR1cm4gX3N1YmNhdGVnb3J5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIGZpbHRlclByb2R1Y3RzKHBhZ2UsIGZpbHRlcnMsIG1vcmUpIHtcbiAgdmFyIHByb2R1Y3RzID0gW107XG4gIHZhciBmaWx0ZXJlZENvbG9ycyA9IGZpbHRlcnMgPyBmaWx0ZXJzLmZpbHRlcihmdW5jdGlvbiAoZikge1xuICAgIHJldHVybiBmLnN0YXJ0c1dpdGgoJ2NvbG9yJyk7XG4gIH0pLm1hcChmdW5jdGlvbiAoZikge1xuICAgIHJldHVybiBmLnJlcGxhY2UoL15jb2xvcjovLCAnJyk7XG4gIH0pIDogW107XG4gIHZhciBjb3VudCA9IG1vcmUgPyAyMCA6IDEwO1xuXG4gIHdoaWxlIChwcm9kdWN0cy5sZW5ndGggPCBjb3VudCkge1xuICAgIGlmIChmaWx0ZXJlZENvbG9ycyAmJiBmaWx0ZXJlZENvbG9ycy5sZW5ndGgpIHtcbiAgICAgIHZhciBfaXRlcmF0b3IgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihmaWx0ZXJlZENvbG9ycyksXG4gICAgICAgICAgX3N0ZXA7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKCkge1xuICAgICAgICAgIHZhciBjb2xvciA9IF9zdGVwLnZhbHVlO1xuICAgICAgICAgIHZhciBpbmRleCA9ICgwLCBfY29sb3JzLmluZGV4Rm9yQ29sb3IpKGNvbG9yKTtcblxuICAgICAgICAgIHZhciBjb2xvckdhcCA9IGZ1bmN0aW9uIGNvbG9yR2FwKGkpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKHBhZ2UgKiBjb3VudCAvIGZpbHRlcmVkQ29sb3JzLmxlbmd0aCkgKyBpO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICBwcm9kdWN0cy5wdXNoLmFwcGx5KHByb2R1Y3RzLCAoMCwgX3RvQ29uc3VtYWJsZUFycmF5MltcImRlZmF1bHRcIl0pKEFycmF5LmZyb20oe1xuICAgICAgICAgICAgbGVuZ3RoOiBjb3VudFxuICAgICAgICAgIH0sIGZ1bmN0aW9uICh2LCBpKSB7XG4gICAgICAgICAgICByZXR1cm4gY29sb3JHYXAoaSk7XG4gICAgICAgICAgfSkubWFwKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICByZXR1cm4gKDAsIF9jcmVhdGVQcm9kdWN0W1wiZGVmYXVsdFwiXSkoJycgKyAoaSAqIE9iamVjdC5rZXlzKF9jb2xvcnNbXCJkZWZhdWx0XCJdKS5sZW5ndGggKyBpbmRleCkpO1xuICAgICAgICAgIH0pKSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yIChfaXRlcmF0b3IucygpOyAhKF9zdGVwID0gX2l0ZXJhdG9yLm4oKSkuZG9uZTspIHtcbiAgICAgICAgICBfbG9vcCgpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgX2l0ZXJhdG9yLmUoZXJyKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIF9pdGVyYXRvci5mKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBpZCA9IHBhZ2UgKiAxMCArIHByb2R1Y3RzLmxlbmd0aCArIDE7XG4gICAgICBwcm9kdWN0cy5wdXNoKCgwLCBfY3JlYXRlUHJvZHVjdFtcImRlZmF1bHRcIl0pKGlkICsgJycpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvZHVjdHMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBhLmlkIC0gYi5pZDtcbiAgfSkuc2xpY2UoMCwgY291bnQpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3ViY2F0ZWdvcnkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHVwZGF0ZUNhcnRJdGVtO1xuXG52YXIgX2NhcnRTdG9yZSA9IHJlcXVpcmUoXCIuL3V0aWxzL2NhcnRTdG9yZVwiKTtcblxuZnVuY3Rpb24gdXBkYXRlQ2FydEl0ZW0oaXRlbSwgcXVhbnRpdHksIHJlcSwgcmVzKSB7XG4gIHJldHVybiB7XG4gICAgY2FydDoge1xuICAgICAgaXRlbXM6ICgwLCBfY2FydFN0b3JlLnVwZGF0ZUl0ZW0pKGl0ZW0uaWQsIHF1YW50aXR5LCByZXEsIHJlcylcbiAgICB9XG4gIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11cGRhdGVDYXJ0SXRlbS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldFByb2R1Y3RzID0gZ2V0UHJvZHVjdHM7XG5leHBvcnRzLnVwZGF0ZUl0ZW0gPSB1cGRhdGVJdGVtO1xuZXhwb3J0cy5yZW1vdmVJdGVtID0gcmVtb3ZlSXRlbTtcbmV4cG9ydHMuYWRkSXRlbSA9IGFkZEl0ZW07XG5cbnZhciBfdG9Db25zdW1hYmxlQXJyYXkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheVwiKSk7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKSk7XG5cbnZhciBfY3JlYXRlUHJvZHVjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vY3JlYXRlUHJvZHVjdFwiKSk7XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7ICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxudmFyIENBUlRfQ09PS0lFID0gJ3JzZl9tb2NrX2NhcnQnO1xudmFyIGluaXRpYWxTdG9yZSA9IFt7XG4gIGlkOiAxLFxuICBxdWFudGl0eTogMVxufSwge1xuICBpZDogMixcbiAgcXVhbnRpdHk6IDFcbn1dO1xuXG5mdW5jdGlvbiBnZXRTdG9yZShyZXEsIHJlcykge1xuICBpZiAoIXJlcS5jb29raWVzW0NBUlRfQ09PS0lFXSkge1xuICAgIHJlcy5zZXRIZWFkZXIoJ1NldC1Db29raWUnLCBcIlwiLmNvbmNhdChDQVJUX0NPT0tJRSwgXCI9XCIpLmNvbmNhdChKU09OLnN0cmluZ2lmeShpbml0aWFsU3RvcmUpLCBcIjsgUGF0aD0vXCIpKTtcbiAgfVxuXG4gIHZhciBzdG9yZSA9IHJlcS5jb29raWVzW0NBUlRfQ09PS0lFXSB8fCBpbml0aWFsU3RvcmU7XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShzdG9yZSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKCdGYWlsZWQgcGFyc2luZyBzdG9yZSBmcm9tIGNvb2tpZScsIHJlcS5jb29raWVzW0NBUlRfQ09PS0lFXSk7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRvUHJvZHVjdChfcmVmKSB7XG4gIHZhciBpZCA9IF9yZWYuaWQsXG4gICAgICBxdWFudGl0eSA9IF9yZWYucXVhbnRpdHk7XG4gIHJldHVybiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sICgwLCBfY3JlYXRlUHJvZHVjdFtcImRlZmF1bHRcIl0pKGlkKSksIHt9LCB7XG4gICAgcXVhbnRpdHk6IHF1YW50aXR5XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRQcm9kdWN0cyhyZXEsIHJlcykge1xuICByZXR1cm4gZ2V0U3RvcmUocmVxLCByZXMpLm1hcCh0b1Byb2R1Y3QpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVJdGVtKGlkLCBxdWFudGl0eSwgcmVxLCByZXMpIHtcbiAgdmFyIG5ld1N0b3JlID0gKDAsIF90b0NvbnN1bWFibGVBcnJheTJbXCJkZWZhdWx0XCJdKShnZXRTdG9yZShyZXEsIHJlcykpO1xuICB2YXIgaXRlbSA9IG5ld1N0b3JlLmZpbmQoZnVuY3Rpb24gKGUpIHtcbiAgICByZXR1cm4gZS5pZCA9PT0gaWQ7XG4gIH0pO1xuICBpdGVtLnF1YW50aXR5ID0gcXVhbnRpdHk7XG4gIHJlcy5zZXRIZWFkZXIoJ1NldC1Db29raWUnLCBcIlwiLmNvbmNhdChDQVJUX0NPT0tJRSwgXCI9XCIpLmNvbmNhdChKU09OLnN0cmluZ2lmeShuZXdTdG9yZSksIFwiOyBQYXRoPS9cIikpO1xuICByZXR1cm4gbmV3U3RvcmUubWFwKHRvUHJvZHVjdCk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUl0ZW0oaWQsIHJlcSwgcmVzKSB7XG4gIHZhciBuZXdTdG9yZSA9ICgwLCBfdG9Db25zdW1hYmxlQXJyYXkyW1wiZGVmYXVsdFwiXSkoZ2V0U3RvcmUocmVxLCByZXMpKS5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICByZXR1cm4gZS5pZCAhPT0gaWQ7XG4gIH0pO1xuICByZXMuc2V0SGVhZGVyKCdTZXQtQ29va2llJywgXCJcIi5jb25jYXQoQ0FSVF9DT09LSUUsIFwiPVwiKS5jb25jYXQoSlNPTi5zdHJpbmdpZnkobmV3U3RvcmUpLCBcIjsgUGF0aD0vXCIpKTtcbiAgcmV0dXJuIG5ld1N0b3JlLm1hcCh0b1Byb2R1Y3QpO1xufVxuXG5mdW5jdGlvbiBhZGRJdGVtKGlkLCBxdWFudGl0eSwgcmVxLCByZXMpIHtcbiAgdmFyIG5ld1N0b3JlID0gW3tcbiAgICBpZDogaWQsXG4gICAgcXVhbnRpdHk6IHF1YW50aXR5XG4gIH1dLmNvbmNhdCgoMCwgX3RvQ29uc3VtYWJsZUFycmF5MltcImRlZmF1bHRcIl0pKGdldFN0b3JlKHJlcSwgcmVzKSkpO1xuICByZXMuc2V0SGVhZGVyKCdTZXQtQ29va2llJywgXCJcIi5jb25jYXQoQ0FSVF9DT09LSUUsIFwiPVwiKS5jb25jYXQoSlNPTi5zdHJpbmdpZnkobmV3U3RvcmUpLCBcIjsgUGF0aD0vXCIpKTtcbiAgcmV0dXJuIG5ld1N0b3JlLm1hcCh0b1Byb2R1Y3QpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2FydFN0b3JlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jb2xvckZvcklkID0gY29sb3JGb3JJZDtcbmV4cG9ydHMuaW5kZXhGb3JDb2xvciA9IGluZGV4Rm9yQ29sb3I7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9jb2xvcnMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzXCIpO1xuXG52YXIgY29sb3IgPSBmdW5jdGlvbiBjb2xvcihjKSB7XG4gIHJldHVybiBjLnRvU3RyaW5nKCkucmVwbGFjZSgvXFwjLywgJycpO1xufTtcblxudmFyIGNvbG9ycyA9IHtcbiAgcmVkOiB7XG4gICAgYmFja2dyb3VuZDogY29sb3IoX2NvbG9ycy5yZWRbNTAwXSksXG4gICAgZm9yZWdyb3VuZDogJ2ZmZmZmZidcbiAgfSxcbiAgZ3JlZW46IHtcbiAgICBiYWNrZ3JvdW5kOiBjb2xvcihfY29sb3JzLmdyZWVuWzUwMF0pLFxuICAgIGZvcmVncm91bmQ6ICdmZmZmZmYnXG4gIH0sXG4gIGJsdWU6IHtcbiAgICBiYWNrZ3JvdW5kOiBjb2xvcihfY29sb3JzLmJsdWVbNTAwXSksXG4gICAgZm9yZWdyb3VuZDogJ2ZmZmZmZidcbiAgfSxcbiAgZ3JleToge1xuICAgIGJhY2tncm91bmQ6IGNvbG9yKF9jb2xvcnMuZ3JleVszMDBdKSxcbiAgICBmb3JlZ3JvdW5kOiBjb2xvcihfY29sb3JzLmdyZXlbNjAwXSlcbiAgfSxcbiAgdGVhbDoge1xuICAgIGJhY2tncm91bmQ6IGNvbG9yKF9jb2xvcnMudGVhbFs1MDBdKSxcbiAgICBmb3JlZ3JvdW5kOiAnZmZmZmZmJ1xuICB9LFxuICBvcmFuZ2U6IHtcbiAgICBiYWNrZ3JvdW5kOiBjb2xvcihfY29sb3JzLm9yYW5nZVs1MDBdKSxcbiAgICBmb3JlZ3JvdW5kOiAnZmZmZmZmJ1xuICB9LFxuICBwdXJwbGU6IHtcbiAgICBiYWNrZ3JvdW5kOiBjb2xvcihfY29sb3JzLnB1cnBsZVs1MDBdKSxcbiAgICBmb3JlZ3JvdW5kOiAnZmZmZmZmJ1xuICB9LFxuICBibGFjazoge1xuICAgIGJhY2tncm91bmQ6IGNvbG9yKF9jb2xvcnMuZ3JleVs4MDBdKSxcbiAgICBmb3JlZ3JvdW5kOiAnZmZmZmZmJ1xuICB9XG59O1xudmFyIF9kZWZhdWx0ID0gY29sb3JzO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcblxuZnVuY3Rpb24gY29sb3JGb3JJZChpZCkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGNvbG9ycyk7XG4gIHZhciBpbmRleCA9IGlkICUga2V5cy5sZW5ndGg7XG4gIHJldHVybiBrZXlzW2luZGV4XTtcbn1cblxuZnVuY3Rpb24gaW5kZXhGb3JDb2xvcihjb2xvcikge1xuICByZXR1cm4gT2JqZWN0LmtleXMoY29sb3JzKS5pbmRleE9mKGNvbG9yKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbG9ycy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGNyZWF0ZUFwcERhdGE7XG5cbnZhciBfY3JlYXRlTWVudSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vY3JlYXRlTWVudVwiKSk7XG5cbnZhciBfY3JlYXRlVGFicyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vY3JlYXRlVGFic1wiKSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUFwcERhdGEoKSB7XG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgIG1lbnU6ICgwLCBfY3JlYXRlTWVudVtcImRlZmF1bHRcIl0pKCksXG4gICAgdGFiczogKDAsIF9jcmVhdGVUYWJzW1wiZGVmYXVsdFwiXSkoKVxuICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNyZWF0ZUFwcERhdGEuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBjcmVhdGVGYWNldHM7XG5cbnZhciBfY29sb3JzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9jb2xvcnNcIikpO1xuXG52YXIgX2NhcGl0YWxpemUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJsb2Rhc2gvY2FwaXRhbGl6ZVwiKSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUZhY2V0cygpIHtcbiAgcmV0dXJuIFt7XG4gICAgbmFtZTogJ0NvbG9yJyxcbiAgICB1aTogJ2J1dHRvbnMnLFxuICAgIG9wdGlvbnM6IE9iamVjdC5rZXlzKF9jb2xvcnNbXCJkZWZhdWx0XCJdKS5tYXAoZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6ICgwLCBfY2FwaXRhbGl6ZVtcImRlZmF1bHRcIl0pKG5hbWUpLFxuICAgICAgICBjb2RlOiBcImNvbG9yOlwiLmNvbmNhdChuYW1lKSxcbiAgICAgICAgaW1hZ2U6IHtcbiAgICAgICAgICBzcmM6IFwiaHR0cHM6Ly9kdW1teWltYWdlLmNvbS80OHg0OC9cIi5jb25jYXQoX2NvbG9yc1tcImRlZmF1bHRcIl1bbmFtZV0uYmFja2dyb3VuZCwgXCI/dGV4dD1cIikuY29uY2F0KGVuY29kZVVSSUNvbXBvbmVudCgnICcpKSxcbiAgICAgICAgICBhbHQ6IG5hbWVcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KVxuICB9LCB7XG4gICAgbmFtZTogJ1NpemUnLFxuICAgIHVpOiAnYnV0dG9ucycsXG4gICAgb3B0aW9uczogW3tcbiAgICAgIG5hbWU6ICdTTScsXG4gICAgICBjb2RlOiAnc2l6ZTpzbSdcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnTUQnLFxuICAgICAgY29kZTogJ3NpemU6bWQnXG4gICAgfSwge1xuICAgICAgbmFtZTogJ0xHJyxcbiAgICAgIGNvZGU6ICdzaXplOmxnJ1xuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdYTCcsXG4gICAgICBjb2RlOiAnc2l6ZTp4bCdcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnWFhMJyxcbiAgICAgIGNvZGU6ICdzaXplOnh4bCdcbiAgICB9XVxuICB9LCB7XG4gICAgbmFtZTogJ1R5cGUnLFxuICAgIHVpOiAnY2hlY2tib3hlcycsXG4gICAgb3B0aW9uczogW3tcbiAgICAgIG5hbWU6ICdOZXcnLFxuICAgICAgY29kZTogJ3R5cGU6bmV3JyxcbiAgICAgIG1hdGNoZXM6IDEwMFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdVc2VkJyxcbiAgICAgIGNvZGU6ICd0eXBlOnVzZWQnLFxuICAgICAgbWF0Y2hlczogMjBcbiAgICB9XVxuICB9XTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNyZWF0ZUZhY2V0cy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGNyZWF0ZU1lZGlhO1xuXG52YXIgX2NvbG9ycyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vY29sb3JzXCIpKTtcblxuZnVuY3Rpb24gY3JlYXRlTWVkaWEoaWQsIGNvbG9yKSB7XG4gIHJldHVybiB7XG4gICAgZnVsbDogW2NvbG9yXS5tYXAoZnVuY3Rpb24gKGtleSwgaSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3JjOiBcImh0dHBzOi8vZHVtbXlpbWFnZS5jb20vXCIuY29uY2F0KGkgPT09IDIgPyA0MDAgOiA2MDAsIFwieFwiKS5jb25jYXQoaSA9PT0gMSA/IDQwMCA6IDYwMCwgXCIvXCIpLmNvbmNhdChfY29sb3JzW1wiZGVmYXVsdFwiXVtrZXldLmJhY2tncm91bmQsIFwiL1wiKS5jb25jYXQoX2NvbG9yc1tcImRlZmF1bHRcIl1ba2V5XS5mb3JlZ3JvdW5kLCBcIj90ZXh0PVwiKS5jb25jYXQoZW5jb2RlVVJJQ29tcG9uZW50KCdQcm9kdWN0ICcgKyBpZCkpLFxuICAgICAgICBhbHQ6IFwiUHJvZHVjdCBcIi5jb25jYXQoaWQpLFxuICAgICAgICBtYWduaWZ5OiB7XG4gICAgICAgICAgaGVpZ2h0OiBpID09PSAxID8gODAwIDogMTIwMCxcbiAgICAgICAgICB3aWR0aDogaSA9PT0gMiA/IDgwMCA6IDEyMDAsXG4gICAgICAgICAgc3JjOiBcImh0dHBzOi8vZHVtbXlpbWFnZS5jb20vXCIuY29uY2F0KGkgPT09IDIgPyA4MDAgOiAxMjAwLCBcInhcIikuY29uY2F0KGkgPT09IDEgPyA4MDAgOiAxMjAwLCBcIi9cIikuY29uY2F0KF9jb2xvcnNbXCJkZWZhdWx0XCJdW2tleV0uYmFja2dyb3VuZCwgXCIvXCIpLmNvbmNhdChfY29sb3JzW1wiZGVmYXVsdFwiXVtrZXldLmZvcmVncm91bmQsIFwiP3RleHQ9XCIpLmNvbmNhdChlbmNvZGVVUklDb21wb25lbnQoJ1Byb2R1Y3QgJyArIGlkKSlcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KSxcbiAgICB0aHVtYm5haWxzOiBbY29sb3JdLm1hcChmdW5jdGlvbiAoa2V5LCBpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzcmM6IFwiaHR0cHM6Ly9kdW1teWltYWdlLmNvbS9cIi5jb25jYXQoaSA9PT0gMiA/IDMwMCA6IDQwMCwgXCJ4XCIpLmNvbmNhdChpID09PSAxID8gMzAwIDogNDAwLCBcIi9cIikuY29uY2F0KF9jb2xvcnNbXCJkZWZhdWx0XCJdW2tleV0uYmFja2dyb3VuZCwgXCI/dGV4dD1cIikuY29uY2F0KGVuY29kZVVSSUNvbXBvbmVudChcIlByb2R1Y3QgXCIuY29uY2F0KGlkKSkpLFxuICAgICAgICBhbHQ6IGtleVxuICAgICAgfTtcbiAgICB9KVxuICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3JlYXRlTWVkaWEuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGNyZWF0ZU1lbnU7XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XG4gIHZhciBpdGVtcyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAxOyBpIDw9IDU7IGkrKykge1xuICAgIGl0ZW1zLnB1c2goY3JlYXRlQ2F0ZWdvcnlJdGVtKGkpKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaXRlbXM6IGl0ZW1zLFxuICAgIGhlYWRlcjogJ2hlYWRlcicsXG4gICAgZm9vdGVyOiAnZm9vdGVyJ1xuICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDYXRlZ29yeUl0ZW0oaSkge1xuICB2YXIgaXRlbXMgPSBbXTtcblxuICBmb3IgKHZhciBqID0gMTsgaiA8PSA1OyBqKyspIHtcbiAgICBpdGVtcy5wdXNoKGNyZWF0ZVN1YmNhdGVnb3J5SXRlbShqKSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHRleHQ6IFwiQ2F0ZWdvcnkgXCIuY29uY2F0KGkpLFxuICAgIGl0ZW1zOiBpdGVtc1xuICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTdWJjYXRlZ29yeUl0ZW0oaSkge1xuICB2YXIgaXRlbXMgPSBbXTtcblxuICBmb3IgKHZhciBqID0gMTsgaiA8PSA1OyBqKyspIHtcbiAgICBpdGVtcy5wdXNoKGNyZWF0ZVByb2R1Y3RJdGVtKGopKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdGV4dDogXCJTdWJjYXRlZ29yeSBcIi5jb25jYXQoaSksXG4gICAgaHJlZjogXCIvcy9bLi4uY2F0ZWdvcnlTbHVnXVwiLFxuICAgIGFzOiBcIi9zL1wiLmNvbmNhdChpKSxcbiAgICBleHBhbmRlZDogaSA9PT0gMSxcbiAgICBpdGVtczogaXRlbXNcbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvZHVjdEl0ZW0oaSkge1xuICByZXR1cm4ge1xuICAgIHRleHQ6IFwiUHJvZHVjdCBcIi5jb25jYXQoaSksXG4gICAgaHJlZjogXCIvcC9bcHJvZHVjdElkXVwiLFxuICAgIGFzOiBcIi9wL1wiLmNvbmNhdChpKVxuICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3JlYXRlTWVudS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGNyZWF0ZVByb2R1Y3Q7XG5cbnZhciBfY29sb3JzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vY29sb3JzXCIpKTtcblxudmFyIF9jYXBpdGFsaXplID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwibG9kYXNoL2NhcGl0YWxpemVcIikpO1xuXG52YXIgX2xvcmVtSXBzdW0gPSByZXF1aXJlKFwibG9yZW0taXBzdW1cIik7XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2R1Y3QoaWQpIHtcbiAgdmFyIG51bUNvbG9ycyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogNDtcbiAgdmFyIGNvbG9yID0gKDAsIF9jb2xvcnMuY29sb3JGb3JJZCkoaWQpO1xuICB2YXIgdmFyaWFudHMgPSBbY29sb3IsICdyZWQnLCAnYmx1ZSddO1xuICB2YXIgcHJpY2UgPSBpZCAlIDEwICogMTAgKyAwLjk5O1xuICByZXR1cm4ge1xuICAgIGlkOiBpZCxcbiAgICB1cmw6IFwiL3AvXCIuY29uY2F0KGlkKSxcbiAgICBuYW1lOiBcIlByb2R1Y3QgXCIuY29uY2F0KGlkKSxcbiAgICBwcmljZTogcHJpY2UsXG4gICAgcHJpY2VUZXh0OiBcIiRcIi5jb25jYXQocHJpY2UpLFxuICAgIHJhdGluZzogKDEwIC0gaWQgJSAxMCkgLyAyLjAsXG4gICAgdGh1bWJuYWlsOiB7XG4gICAgICBzcmM6IFwiaHR0cHM6Ly9kdW1teWltYWdlLmNvbS80MDB4NDAwL1wiLmNvbmNhdChfY29sb3JzW1wiZGVmYXVsdFwiXVtjb2xvcl0uYmFja2dyb3VuZCwgXCIvXCIpLmNvbmNhdChfY29sb3JzW1wiZGVmYXVsdFwiXVtjb2xvcl0uZm9yZWdyb3VuZCwgXCI/dGV4dD1cIikuY29uY2F0KGVuY29kZVVSSUNvbXBvbmVudCgnUHJvZHVjdCAnICsgaWQpKSxcbiAgICAgIGFsdDogXCJQcm9kdWN0IFwiLmNvbmNhdChpZClcbiAgICB9LFxuICAgIG1lZGlhOiB7XG4gICAgICBmdWxsOiB2YXJpYW50cy5tYXAoZnVuY3Rpb24gKGtleSwgaSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHNyYzogXCJodHRwczovL2R1bW15aW1hZ2UuY29tL1wiLmNvbmNhdChpID09PSAyID8gNDAwIDogNjAwLCBcInhcIikuY29uY2F0KGkgPT09IDEgPyA0MDAgOiA2MDAsIFwiL1wiKS5jb25jYXQoX2NvbG9yc1tcImRlZmF1bHRcIl1ba2V5XS5iYWNrZ3JvdW5kLCBcIi9cIikuY29uY2F0KF9jb2xvcnNbXCJkZWZhdWx0XCJdW2tleV0uZm9yZWdyb3VuZCwgXCI/dGV4dD1cIikuY29uY2F0KGVuY29kZVVSSUNvbXBvbmVudCgnUHJvZHVjdCAnICsgaWQpKSxcbiAgICAgICAgICBhbHQ6IFwiUHJvZHVjdCBcIi5jb25jYXQoaWQpLFxuICAgICAgICAgIG1hZ25pZnk6IHtcbiAgICAgICAgICAgIGhlaWdodDogaSA9PT0gMSA/IDgwMCA6IDEyMDAsXG4gICAgICAgICAgICB3aWR0aDogaSA9PT0gMiA/IDgwMCA6IDEyMDAsXG4gICAgICAgICAgICBzcmM6IFwiaHR0cHM6Ly9kdW1teWltYWdlLmNvbS9cIi5jb25jYXQoaSA9PT0gMiA/IDgwMCA6IDEyMDAsIFwieFwiKS5jb25jYXQoaSA9PT0gMSA/IDgwMCA6IDEyMDAsIFwiL1wiKS5jb25jYXQoX2NvbG9yc1tcImRlZmF1bHRcIl1ba2V5XS5iYWNrZ3JvdW5kLCBcIi9cIikuY29uY2F0KF9jb2xvcnNbXCJkZWZhdWx0XCJdW2tleV0uZm9yZWdyb3VuZCwgXCI/dGV4dD1cIikuY29uY2F0KGVuY29kZVVSSUNvbXBvbmVudCgnUHJvZHVjdCAnICsgaWQpKVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH0pLFxuICAgICAgdGh1bWJuYWlsczogdmFyaWFudHMubWFwKGZ1bmN0aW9uIChrZXksIGkpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzcmM6IFwiaHR0cHM6Ly9kdW1teWltYWdlLmNvbS9cIi5jb25jYXQoaSA9PT0gMiA/IDIzMyA6IDMwMCwgXCJ4XCIpLmNvbmNhdChpID09PSAxID8gMjMzIDogMzAwLCBcIi9cIikuY29uY2F0KF9jb2xvcnNbXCJkZWZhdWx0XCJdW2tleV0uYmFja2dyb3VuZCwgXCIvXCIpLmNvbmNhdChfY29sb3JzW1wiZGVmYXVsdFwiXVtrZXldLmZvcmVncm91bmQsIFwiP3RleHQ9XCIpLmNvbmNhdChlbmNvZGVVUklDb21wb25lbnQoJ1Byb2R1Y3QgJyArIGlkKSksXG4gICAgICAgICAgYWx0OiBcIlByb2R1Y3QgXCIuY29uY2F0KGlkKVxuICAgICAgICB9O1xuICAgICAgfSlcbiAgICB9LFxuICAgIHNpemVzOiBbe1xuICAgICAgaWQ6ICdzbScsXG4gICAgICB0ZXh0OiAnU00nXG4gICAgfSwge1xuICAgICAgaWQ6ICdtZCcsXG4gICAgICB0ZXh0OiAnTUQnXG4gICAgfSwge1xuICAgICAgaWQ6ICdsZycsXG4gICAgICB0ZXh0OiAnTEcnXG4gICAgfSwge1xuICAgICAgaWQ6ICd4bCcsXG4gICAgICB0ZXh0OiAnWEwnLFxuICAgICAgZGlzYWJsZWQ6IHRydWVcbiAgICB9LCB7XG4gICAgICBpZDogJ3h4bCcsXG4gICAgICB0ZXh0OiAnWFhMJ1xuICAgIH1dLFxuICAgIGRlc2NyaXB0aW9uOiAoMCwgX2xvcmVtSXBzdW0ubG9yZW1JcHN1bSkoe1xuICAgICAgY291bnQ6IDEwXG4gICAgfSksXG4gICAgc3BlY3M6ICgwLCBfbG9yZW1JcHN1bS5sb3JlbUlwc3VtKSh7XG4gICAgICBjb3VudDogMTBcbiAgICB9KSxcbiAgICBjb2xvcnM6IE9iamVjdC5rZXlzKF9jb2xvcnNbXCJkZWZhdWx0XCJdKS5zbGljZSgwLCBudW1Db2xvcnMpLm1hcChmdW5jdGlvbiAobmFtZSwgaWR4KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0ZXh0OiAoMCwgX2NhcGl0YWxpemVbXCJkZWZhdWx0XCJdKShuYW1lKSxcbiAgICAgICAgaWQ6IG5hbWUsXG4gICAgICAgIGRpc2FibGVkOiBpZHggPT09IDIsXG4gICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgc3JjOiBcImh0dHBzOi8vZHVtbXlpbWFnZS5jb20vNDh4NDgvXCIuY29uY2F0KF9jb2xvcnNbXCJkZWZhdWx0XCJdW25hbWVdLmJhY2tncm91bmQsIFwiP3RleHQ9XCIpLmNvbmNhdChlbmNvZGVVUklDb21wb25lbnQoJyAnKSksXG4gICAgICAgICAgYWx0OiBuYW1lXG4gICAgICAgIH0sXG4gICAgICAgIG1lZGlhOiB7XG4gICAgICAgICAgZnVsbDogW25hbWUsIG5hbWUsIG5hbWVdLm1hcChmdW5jdGlvbiAoa2V5LCBpKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBzcmM6IFwiaHR0cHM6Ly9kdW1teWltYWdlLmNvbS9cIi5jb25jYXQoaSA9PT0gMiA/IDQwMCA6IDYwMCwgXCJ4XCIpLmNvbmNhdChpID09PSAxID8gNDAwIDogNjAwLCBcIi9cIikuY29uY2F0KF9jb2xvcnNbXCJkZWZhdWx0XCJdW2tleV0uYmFja2dyb3VuZCwgXCIvXCIpLmNvbmNhdChfY29sb3JzW1wiZGVmYXVsdFwiXVtrZXldLmZvcmVncm91bmQsIFwiP3RleHQ9XCIpLmNvbmNhdChlbmNvZGVVUklDb21wb25lbnQoJ1Byb2R1Y3QgJyArIGlkKSksXG4gICAgICAgICAgICAgIGFsdDogXCJQcm9kdWN0IFwiLmNvbmNhdChpZCksXG4gICAgICAgICAgICAgIG1hZ25pZnk6IHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGkgPT09IDEgPyA4MDAgOiAxMjAwLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBpID09PSAyID8gODAwIDogMTIwMCxcbiAgICAgICAgICAgICAgICBzcmM6IFwiaHR0cHM6Ly9kdW1teWltYWdlLmNvbS9cIi5jb25jYXQoaSA9PT0gMiA/IDgwMCA6IDEyMDAsIFwieFwiKS5jb25jYXQoaSA9PT0gMSA/IDgwMCA6IDEyMDAsIFwiL1wiKS5jb25jYXQoX2NvbG9yc1tcImRlZmF1bHRcIl1ba2V5XS5iYWNrZ3JvdW5kLCBcIi9cIikuY29uY2F0KF9jb2xvcnNbXCJkZWZhdWx0XCJdW2tleV0uZm9yZWdyb3VuZCwgXCI/dGV4dD1cIikuY29uY2F0KGVuY29kZVVSSUNvbXBvbmVudCgnUHJvZHVjdCAnICsgaWQpKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHRodW1ibmFpbHM6IFtuYW1lLCBuYW1lLCBuYW1lXS5tYXAoZnVuY3Rpb24gKGtleSwgaSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgc3JjOiBcImh0dHBzOi8vZHVtbXlpbWFnZS5jb20vXCIuY29uY2F0KGkgPT09IDIgPyAzMDAgOiA0MDAsIFwieFwiKS5jb25jYXQoaSA9PT0gMSA/IDMwMCA6IDQwMCwgXCIvXCIpLmNvbmNhdChfY29sb3JzW1wiZGVmYXVsdFwiXVtrZXldLmJhY2tncm91bmQsIFwiL1wiKS5jb25jYXQoX2NvbG9yc1tcImRlZmF1bHRcIl1ba2V5XS5mb3JlZ3JvdW5kLCBcIj90ZXh0PVwiKS5jb25jYXQoZW5jb2RlVVJJQ29tcG9uZW50KFwiUHJvZHVjdCBcIi5jb25jYXQoaWQpKSksXG4gICAgICAgICAgICAgIGFsdDoga2V5XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHRodW1ibmFpbDogW25hbWVdLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBzcmM6IFwiaHR0cHM6Ly9kdW1teWltYWdlLmNvbS80MDB4NDAwL1wiLmNvbmNhdChfY29sb3JzW1wiZGVmYXVsdFwiXVtrZXldLmJhY2tncm91bmQsIFwiL1wiKS5jb25jYXQoX2NvbG9yc1tcImRlZmF1bHRcIl1ba2V5XS5mb3JlZ3JvdW5kLCBcIj90ZXh0PVwiKS5jb25jYXQoZW5jb2RlVVJJQ29tcG9uZW50KCdQcm9kdWN0ICcgKyBpZCkpLFxuICAgICAgICAgICAgICBhbHQ6IFwiUHJvZHVjdCBcIi5jb25jYXQoaWQpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pWzBdXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSlcbiAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNyZWF0ZVByb2R1Y3QuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGNyZWF0ZVNvcnRPcHRpb25zO1xuXG5mdW5jdGlvbiBjcmVhdGVTb3J0T3B0aW9ucygpIHtcbiAgcmV0dXJuIFt7XG4gICAgbmFtZTogJ1ByaWNlIC0gTG93ZXN0JyxcbiAgICBjb2RlOiAncHJpY2VfYXNjJ1xuICB9LCB7XG4gICAgbmFtZTogJ1ByaWNlIC0gSGlnaGVzdCcsXG4gICAgY29kZTogJ3ByaWNlX2Rlc2MnXG4gIH0sIHtcbiAgICBuYW1lOiAnTW9zdCBQb3B1bGFyJyxcbiAgICBjb2RlOiAncG9wJ1xuICB9LCB7XG4gICAgbmFtZTogJ0hpZ2hlc3QgUmF0ZWQnLFxuICAgIGNvZGU6ICdyYXRpbmcnXG4gIH1dO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3JlYXRlU29ydE9wdGlvbnMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGNyZWF0ZVRhYnM7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhYnMoKSB7XG4gIHZhciB0YWJzID0gW107XG4gIHZhciBzdWJjYXRlZ29yaWVzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDE7IGkgPD0gMzsgaSsrKSB7XG4gICAgc3ViY2F0ZWdvcmllcy5wdXNoKHtcbiAgICAgIGFzOiBcIi9zL1wiLmNvbmNhdChpKSxcbiAgICAgIGhyZWY6ICcvcy9bLi4uY2F0ZWdvcnlTbHVnXScsXG4gICAgICB0ZXh0OiBcIlN1YmNhdGVnb3J5IFwiLmNvbmNhdChpKVxuICAgIH0pO1xuICB9XG5cbiAgZm9yICh2YXIgX2kgPSAxOyBfaSA8PSAxMDsgX2krKykge1xuICAgIHRhYnMucHVzaCh7XG4gICAgICBhczogXCIvcy9cIi5jb25jYXQoX2kpLFxuICAgICAgaHJlZjogJy9zL1suLi5jYXRlZ29yeVNsdWddJyxcbiAgICAgIHRleHQ6IFwiQ2F0ZWdvcnkgXCIuY29uY2F0KF9pKSxcbiAgICAgIGl0ZW1zOiBzdWJjYXRlZ29yaWVzXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdGFicztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNyZWF0ZVRhYnMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdWxmaWxsQVBJUmVxdWVzdDtcblxudmFyIF9yZWdlbmVyYXRvciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yXCIpKTtcblxudmFyIF9hc3luY1RvR2VuZXJhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiKSk7XG5cbmZ1bmN0aW9uIF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKG8sIGFsbG93QXJyYXlMaWtlKSB7IHZhciBpdDsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgb1tTeW1ib2wuaXRlcmF0b3JdID09IG51bGwpIHsgaWYgKEFycmF5LmlzQXJyYXkobykgfHwgKGl0ID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8pKSB8fCBhbGxvd0FycmF5TGlrZSAmJiBvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgeyBpZiAoaXQpIG8gPSBpdDsgdmFyIGkgPSAwOyB2YXIgRiA9IGZ1bmN0aW9uIEYoKSB7fTsgcmV0dXJuIHsgczogRiwgbjogZnVuY3Rpb24gbigpIHsgaWYgKGkgPj0gby5sZW5ndGgpIHJldHVybiB7IGRvbmU6IHRydWUgfTsgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiBvW2krK10gfTsgfSwgZTogZnVuY3Rpb24gZShfZSkgeyB0aHJvdyBfZTsgfSwgZjogRiB9OyB9IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfSB2YXIgbm9ybWFsQ29tcGxldGlvbiA9IHRydWUsIGRpZEVyciA9IGZhbHNlLCBlcnI7IHJldHVybiB7IHM6IGZ1bmN0aW9uIHMoKSB7IGl0ID0gb1tTeW1ib2wuaXRlcmF0b3JdKCk7IH0sIG46IGZ1bmN0aW9uIG4oKSB7IHZhciBzdGVwID0gaXQubmV4dCgpOyBub3JtYWxDb21wbGV0aW9uID0gc3RlcC5kb25lOyByZXR1cm4gc3RlcDsgfSwgZTogZnVuY3Rpb24gZShfZTIpIHsgZGlkRXJyID0gdHJ1ZTsgZXJyID0gX2UyOyB9LCBmOiBmdW5jdGlvbiBmKCkgeyB0cnkgeyBpZiAoIW5vcm1hbENvbXBsZXRpb24gJiYgaXRbXCJyZXR1cm5cIl0gIT0gbnVsbCkgaXRbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKGRpZEVycikgdGhyb3cgZXJyOyB9IH0gfTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBBUEkgcmVzcG9uc2UgdGhhdCBjb250YWlucyBhcHAgbGV2ZWwgZGF0YSBvbmx5IHdoZW4gYD9faW5jbHVkZUFwcERhdGE9MWAgaXMgcHJlc2VudCBpblxuICogdGhlIHF1ZXJ5IHN0cmluZy4gT3RoZXJ3aXNlLCB0aGUgYGFwcERhdGFgIHByb21pc2UgcHJvdmlkZWQgd2lsbCBub3QgYmUgcmVzb2x2ZWQuXG4gKlxuICogQHBhcmFtIHtSZXF1ZXN0fSByZXEgVGhlIHJlcXVlc3QgYmVpbmcgc2VydmVkXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gb3B0aW9ucy5hcHBEYXRhIEFuIGFzeW5jIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIGRhdGEgZm9yIHNoYXJlZCBjb21wb25lbnQgaW5cbiAqIHRoZSBhcHAgc3VjaCBhcyBtZW51LCBuYXYsIGFuZCBmb290ZXJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IG9wdGlvbnMucGFnZURhdGEgQW4gYXN5bmMgZnVuY3Rpb24gdGhhdCByZXR1cm4gZGF0YSBmb3IgdGhlIHBhZ2UgY29tcG9uZW50XG4gKiBAcmV0dXJuIHtPYmplY3R9IHRoZSByZXN1bHQgb2YgYGFwcERhdGFgIGFuZCBgcGFnZURhdGFgIG1lcmdlZCBpbnRvIGEgc2luZ2xlIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gZnVsZmlsbEFQSVJlcXVlc3QoX3gsIF94Mikge1xuICByZXR1cm4gX2Z1bGZpbGxBUElSZXF1ZXN0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIF9mdWxmaWxsQVBJUmVxdWVzdCgpIHtcbiAgX2Z1bGZpbGxBUElSZXF1ZXN0ID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUocmVxLCBfcmVmKSB7XG4gICAgdmFyIGFwcERhdGEsIHBhZ2VEYXRhLCBwcm9taXNlcywgcmVzdWx0cywgZGF0YSwgX2l0ZXJhdG9yLCBfc3RlcCwgcmVzdWx0O1xuXG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGFwcERhdGEgPSBfcmVmLmFwcERhdGEsIHBhZ2VEYXRhID0gX3JlZi5wYWdlRGF0YTtcbiAgICAgICAgICAgIHByb21pc2VzID0gW3BhZ2VEYXRhKHJlcSkudGhlbihmdW5jdGlvbiAocGFnZURhdGEpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwYWdlRGF0YTogcGFnZURhdGFcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pXTtcblxuICAgICAgICAgICAgaWYgKHJlcS5xdWVyeS5faW5jbHVkZUFwcERhdGEgPT09ICcxJykge1xuICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKGFwcERhdGEocmVxKS50aGVuKGZ1bmN0aW9uIChhcHBEYXRhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgIGFwcERhdGE6IGFwcERhdGFcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA1O1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcblxuICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgIHJlc3VsdHMgPSBfY29udGV4dC5zZW50O1xuICAgICAgICAgICAgZGF0YSA9IHt9O1xuICAgICAgICAgICAgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIocmVzdWx0cyk7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGZvciAoX2l0ZXJhdG9yLnMoKTsgIShfc3RlcCA9IF9pdGVyYXRvci5uKCkpLmRvbmU7KSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gX3N0ZXAudmFsdWU7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihkYXRhLCByZXN1bHQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgX2l0ZXJhdG9yLmUoZXJyKTtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgIF9pdGVyYXRvci5mKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgZGF0YSk7XG5cbiAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlKTtcbiAgfSkpO1xuICByZXR1cm4gX2Z1bGZpbGxBUElSZXF1ZXN0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mdWxmaWxsQVBJUmVxdWVzdC5qcy5tYXAiLCJpbXBvcnQgeyBzZXNzaW9uIH0gZnJvbSAncmVhY3Qtc3RvcmVmcm9udC1jb25uZWN0b3InXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uKHJlcSwgcmVzKSB7XG4gIHJlcy5qc29uKGF3YWl0IHNlc3Npb24ocmVxLCByZXMpKVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaC9jYXBpdGFsaXplXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvcmVtLWlwc3VtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXN0b3JlZnJvbnQvcHJvcHMvZnVsZmlsbEFQSVJlcXVlc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3RvcmVmcm9udC91dGlscy9nZXRCYXNlNjRGb3JJbWFnZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9