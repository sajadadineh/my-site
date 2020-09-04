(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-command"] = factory(require("vue"));
	else
		root["vue-command"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "106f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4365":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "590b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueCommand_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("acc8");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueCommand_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueCommand_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueCommand_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "836c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Stdout_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b50a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Stdout_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Stdout_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Stdout_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "839b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Stdin_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("106f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Stdin_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Stdin_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Stdin_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "96cf":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "a34a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("96cf");

/***/ }),

/***/ "acc8":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b50a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ba6f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const EMPTYARR = []
const SHORTSPLIT = /$|[!-@[-`{-~][\s\S]*/g
const isArray = Array.isArray

const parseValue = function(any) {
  if (any === "") return ""
  if (any === "false") return false
  const maybe = Number(any)
  return maybe * 0 === 0 ? maybe : any
}

const parseAlias = function(aliases) {
  let out = {},
    key,
    alias,
    prev,
    len,
    any,
    i,
    k

  for (key in aliases) {
    any = aliases[key]
    alias = out[key] = isArray(any) ? any : [any]

    for (i = 0, len = alias.length; i < len; i++) {
      prev = out[alias[i]] = [key]

      for (k = 0; k < len; k++) {
        if (i !== k) prev.push(alias[k])
      }
    }
  }

  return out
}

const parseDefault = function(aliases, defaults) {
  let out = {},
    key,
    alias,
    value,
    len,
    i

  for (key in defaults) {
    value = defaults[key]
    alias = aliases[key]

    out[key] = value

    if (alias === undefined) {
      aliases[key] = EMPTYARR
    } else {
      for (i = 0, len = alias.length; i < len; i++) {
        out[alias[i]] = value
      }
    }
  }

  return out
}

const parseOptions = function(aliases, options, value) {
  let out = {},
    key,
    alias,
    len,
    end,
    i,
    k

  if (options !== undefined) {
    for (i = 0, len = options.length; i < len; i++) {
      key = options[i]
      alias = aliases[key]

      out[key] = value

      if (alias === undefined) {
        aliases[key] = EMPTYARR
      } else {
        for (k = 0, end = alias.length; k < end; k++) {
          out[alias[k]] = value
        }
      }
    }
  }

  return out
}

const write = function(out, key, value, aliases, unknown) {
  let i,
    prev,
    alias = aliases[key],
    len = alias === undefined ? -1 : alias.length

  if (len >= 0 || unknown === undefined || unknown(key)) {
    prev = out[key]

    if (prev === undefined) {
      out[key] = value
    } else {
      if (isArray(prev)) {
        prev.push(value)
      } else {
        out[key] = [prev, value]
      }
    }

    for (i = 0; i < len; i++) {
      out[alias[i]] = out[key]
    }
  }
}

const getopts = function(argv, opts) {
  let unknown = (opts = opts || {}).unknown,
    aliases = parseAlias(opts.alias),
    strings = parseOptions(aliases, opts.string, ""),
    values = parseDefault(aliases, opts.default),
    bools = parseOptions(aliases, opts.boolean, false),
    stopEarly = opts.stopEarly,
    _ = [],
    out = { _ },
    i = 0,
    k = 0,
    len = argv.length,
    key,
    arg,
    end,
    match,
    value

  for (; i < len; i++) {
    arg = argv[i]

    if (arg[0] !== "-" || arg === "-") {
      if (stopEarly) while (i < len) _.push(argv[i++])
      else _.push(arg)
    } else if (arg === "--") {
      while (++i < len) _.push(argv[i])
    } else if (arg[1] === "-") {
      end = arg.indexOf("=", 2)
      if (arg[2] === "n" && arg[3] === "o" && arg[4] === "-") {
        key = arg.slice(5, end >= 0 ? end : undefined)
        value = false
      } else if (end >= 0) {
        key = arg.slice(2, end)
        value =
          bools[key] !== undefined ||
          (strings[key] === undefined
            ? parseValue(arg.slice(end + 1))
            : arg.slice(end + 1))
      } else {
        key = arg.slice(2)
        value =
          bools[key] !== undefined ||
          (len === i + 1 || argv[i + 1][0] === "-"
            ? strings[key] === undefined
              ? true
              : ""
            : strings[key] === undefined
            ? parseValue(argv[++i])
            : argv[++i])
      }
      write(out, key, value, aliases, unknown)
    } else {
      SHORTSPLIT.lastIndex = 2
      match = SHORTSPLIT.exec(arg)
      end = match.index
      value = match[0]

      for (k = 1; k < end; k++) {
        write(
          out,
          (key = arg[k]),
          k + 1 < end
            ? strings[key] === undefined ||
                arg.substring(k + 1, (k = end)) + value
            : value === ""
            ? len === i + 1 || argv[i + 1][0] === "-"
              ? strings[key] === undefined || ""
              : bools[key] !== undefined ||
                (strings[key] === undefined ? parseValue(argv[++i]) : argv[++i])
            : bools[key] !== undefined ||
              (strings[key] === undefined ? parseValue(value) : value),
          aliases,
          unknown
        )
      }
    }
  }

  for (key in values) if (out[key] === undefined) out[key] = values[key]
  for (key in bools) if (out[key] === undefined) out[key] = false
  for (key in strings) if (out[key] === undefined) out[key] = ""

  return out
}

module.exports = getopts


/***/ }),

/***/ "e589":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4365");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "createStdout", function() { return /* reexport */ library_createStdout; });
__webpack_require__.d(__webpack_exports__, "createStderr", function() { return /* reexport */ library_createStderr; });
__webpack_require__.d(__webpack_exports__, "createDummyStdout", function() { return /* reexport */ library_createDummyStdout; });
__webpack_require__.d(__webpack_exports__, "EVENT_LISTENERS", function() { return /* reexport */ EVENT_LISTENERS; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("a34a");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4ba3932e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VueCommand.vue?vue&type=template&id=24381a6f&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"vue-command",staticClass:"vue-command"},[_vm._t("bar",[(!_vm.hideBar)?_c('div',{staticClass:"term-bar"},[(!_vm.hideTitle)?_c('span',{staticClass:"term-title"},[_vm._v(_vm._s(_vm.title))]):_vm._e()]):_vm._e()]),_c('div',{ref:"term-std",staticClass:"term-std"},[(_vm.isSearch)?_c('search',{ref:"search",attrs:{"executed":_vm.local.executed,"is-search":_vm.isSearch,"stdin":_vm.stdin},on:{"update:isSearch":function($event){_vm.isSearch=$event},"update:is-search":function($event){_vm.isSearch=$event},"click":_vm.focus,"handle":_vm.handle}}):_vm._e(),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isSearch),expression:"!isSearch"}],ref:"term-cont",staticClass:"term-cont",class:{ 'term-cont-fullscreen': _vm.local.isFullscreen },on:{"click":_vm.focus}},[(_vm.showIntro)?_c('div',[_vm._v(_vm._s(_vm.intro))]):_vm._e(),_vm._l((_vm.local.history),function(stdout,index){return _c('div',{key:index,staticClass:"term-hist",class:{
          'term-hist-fullscreen':
            _vm.local.isFullscreen && index === _vm.local.history.length - 1
        }},[_c('stdout',{directives:[{name:"show",rawName:"v-show",value:(!_vm.local.isFullscreen || index === _vm.local.history.length - 1),expression:"!local.isFullscreen || index === local.history.length - 1"}],staticClass:"term-stdout",attrs:{"component":stdout}}),_c('stdin',{directives:[{name:"show",rawName:"v-show",value:(
            (index === 0 && !_vm.local.isFullscreen) ||
              (!(index === _vm.local.history.length - 1 && _vm.local.isInProgress) &&
                !_vm.local.isFullscreen)
          ),expression:"\n            (index === 0 && !local.isFullscreen) ||\n              (!(index === local.history.length - 1 && local.isInProgress) &&\n                !local.isFullscreen)\n          "}],ref:"stdin",refInFor:true,attrs:{"bus":_vm.bus,"cursor":_vm.local.cursor,"hide-prompt":_vm.hidePrompt,"is-fullscreen":_vm.local.isFullscreen,"is-in-progress":_vm.local.isInProgress,"is-last":index === _vm.local.history.length - 1,"prompt":_vm.prompt,"help-text":_vm.helpText,"help-timeout":_vm.helpTimeout,"show-help":_vm.showHelp,"stdin":_vm.local.stdin,"uid":_vm._uid},on:{"update:stdin":function($event){return _vm.$set(_vm.local, "stdin", $event)},"handle":_vm.handle},scopedSlots:_vm._u([{key:"prompt",fn:function(){return [_vm._t("prompt")]},proxy:true}],null,true)})],1)})],2)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/VueCommand.vue?vue&type=template&id=24381a6f&

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4ba3932e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Search.vue?vue&type=template&id=4a0455c7&
var Searchvue_type_template_id_4a0455c7_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"term-cont",staticClass:"term-cont term-cont-fullscreen",on:{"keydown":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")){ return null; }if($event.ctrlKey||$event.shiftKey||$event.altKey||$event.metaKey){ return null; }$event.preventDefault();return _vm.setIsSearch(false)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }if($event.ctrlKey||$event.shiftKey||$event.altKey||$event.metaKey){ return null; }$event.preventDefault();return _vm.setIsSearch(false)},function($event){if(!$event.type.indexOf('key')&&$event.keyCode!==67){ return null; }if(!$event.ctrlKey){ return null; }if($event.shiftKey||$event.altKey||$event.metaKey){ return null; }$event.preventDefault();return _vm.sigint($event)}]}},[_c('div',{staticClass:"term-search-container"},[_c('span',{staticClass:"term-search"},[_vm._v(" (reverse-i-search)` "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.search),expression:"search"}],ref:"input",attrs:{"autofocus":"","type":"text","autocorrect":"off","autocapitalize":"none"},domProps:{"value":(_vm.search)},on:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }if($event.ctrlKey||$event.shiftKey||$event.altKey||$event.metaKey){ return null; }return _vm.handle($event)},"input":function($event){if($event.target.composing){ return; }_vm.search=$event.target.value}}}),_vm._v(" ': "+_vm._s(_vm.command)+" ")])])])}
var Searchvue_type_template_id_4a0455c7_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Search.vue?vue&type=template&id=4a0455c7&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Search.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Searchvue_type_script_lang_js_ = ({
  inject: ['setStdin'],
  props: {
    executed: {
      required: true,
      type: Set
    },
    // Indicates if search is visible
    isSearch: {
      required: true,
      type: Boolean
    },
    // Current Stdin
    stdin: {
      required: true,
      type: String
    }
  },
  data: function data() {
    return {
      // Suggested command
      command: '',
      // Users input
      search: ''
    };
  },
  watch: {
    search: function search() {
      var _this = this;

      // Search in executed commands
      this.executed.forEach(function (executed) {
        if (executed.startsWith(_this.search)) {
          _this.command = executed; // Set the new Stdin

          _this.setStdin(executed);
        }
      });
    }
  },
  created: function created() {
    this.command = this.stdin;
  },
  mounted: function mounted() {
    // Force autofocus
    this.focus(); // Resize input about characters

    function resize() {
      this.style.width = "".concat(this.value.length, "ch");
    }

    var input = this.$refs.input;
    input.addEventListener('input', resize);
    resize.call(input);
  },
  methods: {
    handle: function handle() {
      this.$emit('update:isSearch', false); // Request to handle the current search

      this.$emit('handle', this.command);
    },
    focus: function focus() {
      this.$refs.input.focus();
    },
    setIsSearch: function setIsSearch(isSearch) {
      this.$emit('update:isSearch', isSearch);
    },
    // Terminate search after cancellation
    sigint: function sigint() {
      this.setStdin('');
      this.$emit('update:isSearch', false);
    }
  }
});
// CONCATENATED MODULE: ./src/components/Search.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Searchvue_type_script_lang_js_ = (Searchvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Search.vue?vue&type=style&index=0&lang=scss&
var Searchvue_type_style_index_0_lang_scss_ = __webpack_require__("e589");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/Search.vue






/* normalize component */

var Search_component = normalizeComponent(
  components_Searchvue_type_script_lang_js_,
  Searchvue_type_template_id_4a0455c7_render,
  Searchvue_type_template_id_4a0455c7_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Search = (Search_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4ba3932e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Stdin.vue?vue&type=template&id=2e0709c2&
var Stdinvue_type_template_id_2e0709c2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"term-stdin-container"},[_vm._t("prompt",[(!_vm.hidePrompt)?_c('span',{staticClass:"term-ps"},[_vm._v(_vm._s(_vm.local.prompt))]):_vm._e()]),_c('span',{staticClass:"term-stdin"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.local.stdin),expression:"local.stdin"}],ref:"input",attrs:{"autofocus":_vm.isLast,"disabled":!_vm.isLast || _vm.isInProgress,"placeholder":_vm.placeholder,"type":"text","autocorrect":"off","autocapitalize":"none"},domProps:{"value":(_vm.local.stdin)},on:{"click":function($event){return _vm.setCursor(_vm.$refs.input.selectionStart)},"keyup":[function($event){return _vm.setCursor(_vm.$refs.input.selectionStart)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }if($event.ctrlKey||$event.shiftKey||$event.altKey||$event.metaKey){ return null; }return _vm.handle($event)}],"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.local, "stdin", $event.target.value)}}})])],2)}
var Stdinvue_type_template_id_2e0709c2_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Stdin.vue?vue&type=template&id=2e0709c2&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Stdin.vue?vue&type=script&lang=js&


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Stdinvue_type_script_lang_js_ = ({
  inject: ['setCursor', 'setStdin'],
  props: {
    bus: {
      required: true,
      type: Object
    },
    cursor: {
      "default": 0,
      required: true,
      type: Number
    },
    helpText: {
      "default": '',
      type: String
    },
    helpTimeout: {
      "default": 0,
      type: Number
    },
    hidePrompt: {
      "default": false,
      type: Boolean
    },
    isInProgress: {
      "default": false,
      required: true,
      type: Boolean
    },
    isLast: {
      "default": false,
      required: true,
      type: Boolean
    },
    isFullscreen: {
      "default": false,
      required: true,
      type: Boolean
    },
    prompt: {
      "default": '',
      type: String
    },
    showHelp: {
      "default": false,
      type: Boolean
    },
    stdin: {
      "default": '',
      required: true,
      type: String
    },
    uid: {
      required: true,
      type: Number
    }
  },
  data: function data() {
    return {
      placeholder: '',
      local: {
        // This makes it possible to change the prompt during runtime
        prompt: '',
        stdin: ''
      }
    };
  },
  watch: {
    cursor: function cursor() {
      if (this.isLast) {
        // Mirror the cursor position to the real cursor position
        this.$refs.input.setSelectionRange(this.cursor, this.cursor);
      }
    },
    isInProgress: function isInProgress() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(!_this.isInProgress && _this.isLast)) {
                  _context.next = 5;
                  break;
                }

                _context.next = 3;
                return _this.$nextTick();

              case 3:
                _this.scrollIntoView();

                _this.focus();

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    isLast: function isLast(_isLast, wasLast) {
      if (wasLast && !_isLast) {
        // Allow components to get into focus
        this.blur();
      }
    },
    stdin: function stdin() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // Only last Stdin is allowed to mutate
                if (_this2.isLast && !_this2.isInProgress) {
                  _this2.local.stdin = _this2.stdin;
                }

                _context2.next = 3;
                return _this2.$nextTick();

              case 3:
                // Set current cursor position
                _this2.setCursor(_this2.$refs.input.selectionStart);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    'local.stdin': function localStdin() {
      // Set current Stdin
      this.$emit('update:stdin', this.local.stdin); // Set current cursor position

      this.setCursor(this.$refs.input.selectionStart);
    }
  },
  created: function created() {
    this.local.prompt = this.prompt;
    this.local.stdin = this.stdin;
  },
  mounted: function mounted() {
    var _this3 = this;

    // Scroll to current input
    this.scrollIntoView(); // Focus new Stdin

    this.focus();
    setTimeout(function () {
      if (_this3.isLast && _this3.showHelp) {
        _this3.setPlaceholder(_this3.helpText);
      }
    }, this.helpTimeout);
  },
  methods: {
    // Handle current command
    handle: function handle() {
      // Persist the current prompt
      this.setPrompt(this.prompt); // Request to handle the current Stdin

      this.$emit('handle', this.local.stdin); // Hide the current placeholder

      this.setPlaceholder('');
    },
    setPlaceholder: function setPlaceholder(placeholder) {
      this.placeholder = placeholder;
    },
    setPrompt: function setPrompt(promt) {
      this.local.prompt = promt;
    },
    blur: function blur() {
      this.$refs.input.blur();
    },
    focus: function focus() {
      this.$refs.input.focus();
    },
    scrollIntoView: function scrollIntoView() {
      this.$refs.input.scrollIntoView();
    }
  }
});
// CONCATENATED MODULE: ./src/components/Stdin.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Stdinvue_type_script_lang_js_ = (Stdinvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Stdin.vue?vue&type=style&index=0&lang=scss&
var Stdinvue_type_style_index_0_lang_scss_ = __webpack_require__("839b");

// CONCATENATED MODULE: ./src/components/Stdin.vue






/* normalize component */

var Stdin_component = normalizeComponent(
  components_Stdinvue_type_script_lang_js_,
  Stdinvue_type_template_id_2e0709c2_render,
  Stdinvue_type_template_id_2e0709c2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Stdin = (Stdin_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4ba3932e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Stdout.vue?vue&type=template&id=7025453b&
var Stdoutvue_type_template_id_7025453b_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.component,{tag:"component"})}
var Stdoutvue_type_template_id_7025453b_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Stdout.vue?vue&type=template&id=7025453b&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Stdout.vue?vue&type=script&lang=js&
//
//
//
//
/* harmony default export */ var Stdoutvue_type_script_lang_js_ = ({
  props: {
    component: {
      required: true,
      type: Object
    }
  }
});
// CONCATENATED MODULE: ./src/components/Stdout.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Stdoutvue_type_script_lang_js_ = (Stdoutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Stdout.vue?vue&type=style&index=0&lang=scss&
var Stdoutvue_type_style_index_0_lang_scss_ = __webpack_require__("836c");

// CONCATENATED MODULE: ./src/components/Stdout.vue






/* normalize component */

var Stdout_component = normalizeComponent(
  components_Stdoutvue_type_script_lang_js_,
  Stdoutvue_type_template_id_7025453b_render,
  Stdoutvue_type_template_id_7025453b_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Stdout = (Stdout_component.exports);
// CONCATENATED MODULE: ./src/mixins/autocomplete.js
// @vue/component
/* harmony default export */ var mixins_autocomplete = ({
  provide: function provide() {
    return {
      setCursor: this.setCursor
    };
  },
  data: function data() {
    return {
      local: {
        // Current cursor position at Stdin
        cursor: 0
      }
    };
  },
  watch: {
    cursor: function cursor() {
      this.local.cursor = this.cursor;
    },
    'local.cursor': function localCursor() {
      this.$emit('update:cursor', this.local.cursor);
    }
  },
  methods: {
    // Calls the user given autocompletion resolver
    autocomplete: function autocomplete() {
      // Check if autocompletion resolver is given
      if (typeof this.autocompletionResolver === 'function') {
        // Call user autocompletion function
        this.autocompletionResolver();
      }
    },
    setCursor: function setCursor(cursor) {
      this.local.cursor = cursor;
    }
  }
});
// EXTERNAL MODULE: ./node_modules/getopts/index.js
var getopts = __webpack_require__("ba6f");
var getopts_default = /*#__PURE__*/__webpack_require__.n(getopts);

// CONCATENATED MODULE: ./src/mixins/handle.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function handle_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function handle_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { handle_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { handle_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


 // @vue/component

/* harmony default export */ var mixins_handle = ({
  provide: function provide() {
    return {
      terminate: this.terminate
    };
  },
  methods: {
    // Handles the command
    handle: function handle(stdin) {
      var _this = this;

      return handle_asyncToGenerator( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var program;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // First token is program
                program = stdin.trim().split(' ')[0]; // Check if command is regular command

                if (!(typeof _this.commands[program] === 'function')) {
                  _context.next = 5;
                  break;
                }

                _context.next = 4;
                return Promise.resolve(_this.execute(stdin));

              case 4:
                return _context.abrupt("return");

              case 5:
                if (!(typeof _this.builtIn === 'function')) {
                  _context.next = 9;
                  break;
                }

                _context.next = 8;
                return Promise.resolve(_this.builtIn(stdin, _this));

              case 8:
                return _context.abrupt("return");

              case 9:
                // Command must be empty or can't be found
                _this.commandNotFound(stdin);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    // Executes a regular command
    execute: function execute(stdin) {
      var _this2 = this;

      return handle_asyncToGenerator( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
        var program, component, tokens, tokenPairs, tokenPairsExpression, accommodatedTokens, isNextTokenOptionValue, parsed, executed, history;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // Remove leading and trailing whitespace
                stdin = stdin.trim();
                program = getopts_default()(stdin.split(' '), _this2.parserOptions)._[0]; // Create empty component in case no program has been found

                component = library_createDummyStdout(); // Split Stdin into chunks to parse it correctly.
                // See: https://stackoverflow.com/a/18647776 and see: https://github.com/ndabAP/vue-command/issues/176
                // Contains the tokens to merge option-value pairs

                tokens = []; // Contains the current token pair for each iteration

                tokenPairs = [];
                tokenPairsExpression = /[^\s"]+|"([^"]*)"/gi; // Iterate through all tokens

                do {
                  tokenPairs = tokenPairsExpression.exec(stdin);

                  if (tokenPairs != null) {
                    tokens.push(tokenPairs[1] ? tokenPairs[1] : tokenPairs[0]);
                  }
                } while (tokenPairs != null); // Contains accommodated tokens to parse


                accommodatedTokens = [];
                isNextTokenOptionValue = false;
                tokens.forEach(function (token, index) {
                  // Check if next token is option value
                  if (isNextTokenOptionValue) {
                    isNextTokenOptionValue = false;
                    return;
                  } // Check if option has value assigned


                  if (token.endsWith('=')) {
                    // Merge option with value
                    accommodatedTokens.push(token + tokens[index + 1]);
                    isNextTokenOptionValue = true;
                  } else {
                    // Token is not part of option-value pair
                    accommodatedTokens.push(token);
                  }
                });
                parsed = getopts_default()(accommodatedTokens, _this2.parserOptions);
                _context2.next = 13;
                return Promise.resolve(_this2.commands[program](parsed));

              case 13:
                component = _context2.sent;
                component = _this2.setupComponent(component, _this2.local.history.length, parsed); // Disallow empty Stdin in history

                if (stdin !== '') {
                  // Remove duplicate commands to push to latest entry
                  executed = new Set(_this2.local.executed);
                  executed["delete"](stdin);
                  executed.add(stdin); // Mutate property

                  _this2.$emit('update:executed', executed);

                  _this2.setExecuted(executed);
                } // Point history to new command


                _this2.setPointer(_this2.local.executed.size);

                history = _toConsumableArray(_this2.local.history);
                history.push(component); // Emit command executing started

                _this2.emitExecute(); // Tell terminal there is a command in progress


                _this2.setIsInProgress(true);

                _this2.setHistory(history); // Update the history property


                _this2.$emit('update:history', _toConsumableArray(history));

              case 23:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    // Command is empty or not found
    commandNotFound: function commandNotFound(stdin) {
      var component = library_createDummyStdout(); // Only non empty commands should be

      if (stdin !== '') {
        // No command found
        component = library_createStderr("".concat(stdin, ": ").concat(this.notFound), true);
        component = this.setupComponent(component, this.local.history.length); // Remove duplicate commands to push to latest entry

        var executed = new Set(this.local.executed);
        executed["delete"](stdin);
        executed.add(stdin); // Mutate property

        this.$emit('update:executed', executed);
        this.setExecuted(executed); // Point history to new command

        this.setPointer(this.local.executed.size);
      }

      var history = _toConsumableArray(this.local.history);

      history.push(component); // Emit command executing started

      this.emitExecute(); // Tell terminal there is a command in progress

      this.setIsInProgress(true);
      this.setHistory(history); // Update the history property

      this.$emit('update:history', _toConsumableArray(history));
    },
    // Add environment and context and instantly terminate
    setupComponent: function setupComponent(component) {
      var _this3 = this;

      var entries = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var parsed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      // Prevent to work with same reference
      component = _objectSpread({}, component);

      if (!hasOwnProperty.call(component, 'computed')) {
        component.computed = {};
      } // Create copies


      var cursor = this.local.cursor;
      var executed = new Set(this.local.executed);

      var history = _toConsumableArray(this.local.history);

      var pointer = this.local.pointer;
      var stdin = this.local.stdin;
      component.computed = _objectSpread({
        environment: function environment() {
          return {
            isExecuting: _this3.local.isInProgress && _this3.local.history.length - 1 === entries,
            isFullscreen: _this3.local.isFullscreen,
            isInProgress: _this3.local.isInProgress
          };
        },
        context: function context() {
          return {
            cursor: cursor,
            executed: executed,
            history: history,
            parsed: parsed,
            pointer: pointer,
            stdin: stdin
          };
        }
      }, component.computed);
      return component;
    },
    // Executes common final tasks after command has been finished
    terminate: function terminate() {
      // Set new Stdin to empty
      this.setStdin(''); // Exit fullscreen if necessary

      this.setIsFullscreen(false); // Indicate end of command

      this.$emit('executed'); // Allow new Stdin

      this.setIsInProgress(false);
    }
  }
});
// CONCATENATED MODULE: ./src/mixins/history.js
function history_toConsumableArray(arr) { return history_arrayWithoutHoles(arr) || history_iterableToArray(arr) || history_unsupportedIterableToArray(arr) || history_nonIterableSpread(); }

function history_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function history_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return history_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return history_arrayLikeToArray(o, minLen); }

function history_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function history_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return history_arrayLikeToArray(arr); }

function history_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// @vue/component
/* harmony default export */ var mixins_history = ({
  provide: function provide() {
    return {
      setPointer: this.setPointer
    };
  },
  data: function data() {
    return {
      local: {
        executed: new Set(),
        // All executed commands
        history: [],
        // History command pointer
        pointer: 0
      }
    };
  },
  watch: {
    history: function history() {
      // Creates a new copy to prevent mutation
      this.setHistory(history_toConsumableArray(this.history));
    },
    'local.pointer': function localPointer() {
      this.$emit('update:pointer', this.local.pointer);
    },
    pointer: function pointer() {
      this.setPointer(this.pointer);
    }
  },
  methods: {
    increaseHistory: function increaseHistory() {
      // Check if pointer is mutable
      if (this.local.pointer < this.local.executed.size - 1) {
        this.local.pointer++; // Set new pointed Stdin

        this.local.stdin = history_toConsumableArray(this.local.executed)[this.local.pointer];
      }
    },
    decreaseHistory: function decreaseHistory() {
      // Check if pointer is mutable
      if (this.local.pointer > 0) {
        this.local.pointer--; // Set new pointed Stdin

        this.local.stdin = history_toConsumableArray(this.local.executed)[this.local.pointer];
      }
    },
    setExecuted: function setExecuted(executed) {
      this.local.executed = executed;
    },
    setHistory: function setHistory(history) {
      this.local.history = history;
    },
    setPointer: function setPointer(pointer) {
      this.local.pointer = pointer;
    }
  }
});
// CONCATENATED MODULE: ./src/mixins/search.js


function search_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function search_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { search_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { search_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// @vue/component
/* harmony default export */ var mixins_search = ({
  data: function data() {
    return {
      isSearch: false
    };
  },
  watch: {
    isSearch: function isSearch() {
      var _this = this;

      return search_asyncToGenerator( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var stdins, stdin;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this.isSearch) {
                  _context.next = 6;
                  break;
                }

                _context.next = 3;
                return _this.$nextTick();

              case 3:
                stdins = _this.$refs.stdin; // Latest Stdin is latest history entry

                stdin = stdins[_this.local.history.length - 1]; // Call component method

                stdin.focus();

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  methods: {
    // Let the user search inside the "executed" "Set"
    setIsSearchHandler: function setIsSearchHandler() {
      if (!this.isInProgress) {
        this.setIsSearch(true);
      }
    },
    setIsSearch: function setIsSearch(isSearch) {
      this.isSearch = isSearch;
    }
  }
});
// CONCATENATED MODULE: ./src/mixins/ui.js
// @vue/component
/* harmony default export */ var ui = ({
  provide: function provide() {
    return {
      setIsFullscreen: this.setIsFullscreen,
      setIsInProgress: this.setIsInProgress
    };
  },
  data: function data() {
    return {
      local: {
        // Run command in fullscreen
        isFullscreen: false,
        // Indicates if a command is in progress
        isInProgress: false
      }
    };
  },
  watch: {
    isFullscreen: function isFullscreen() {
      this.setIsFullscreen(this.isFullscreen);
    },
    isInProgress: function isInProgress() {
      this.setIsInProgress(this.isInProgress);
    },
    'local.isFullscreen': function localIsFullscreen() {
      this.$emit('update:isFullscreen', this.local.isFullscreen);
    },
    'local.isInProgress': function localIsInProgress() {
      this.$emit('update:isInProgress', this.local.isInProgress);
    }
  },
  methods: {
    setIsFullscreen: function setIsFullscreen(isFullscreen) {
      this.local.isFullscreen = isFullscreen;
    },
    setIsInProgress: function setIsInProgress(isInProgress) {
      this.local.isInProgress = isInProgress;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VueCommand.vue?vue&type=script&lang=js&


function VueCommandvue_type_script_lang_js_toConsumableArray(arr) { return VueCommandvue_type_script_lang_js_arrayWithoutHoles(arr) || VueCommandvue_type_script_lang_js_iterableToArray(arr) || VueCommandvue_type_script_lang_js_unsupportedIterableToArray(arr) || VueCommandvue_type_script_lang_js_nonIterableSpread(); }

function VueCommandvue_type_script_lang_js_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function VueCommandvue_type_script_lang_js_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return VueCommandvue_type_script_lang_js_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return VueCommandvue_type_script_lang_js_arrayLikeToArray(o, minLen); }

function VueCommandvue_type_script_lang_js_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function VueCommandvue_type_script_lang_js_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return VueCommandvue_type_script_lang_js_arrayLikeToArray(arr); }

function VueCommandvue_type_script_lang_js_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function VueCommandvue_type_script_lang_js_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function VueCommandvue_type_script_lang_js_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { VueCommandvue_type_script_lang_js_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { VueCommandvue_type_script_lang_js_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









 // Event bus for communication

var EventBus = new external_commonjs_vue_commonjs2_vue_root_Vue_default.a();
/* harmony default export */ var VueCommandvue_type_script_lang_js_ = ({
  components: {
    Search: Search,
    Stdin: Stdin,
    Stdout: Stdout
  },
  mixins: [mixins_autocomplete, mixins_handle, mixins_history, mixins_search, ui],
  provide: function provide() {
    return {
      emitExecute: this.emitExecute,
      emitExecuted: this.emitExecuted,
      emitInput: this.emitInput,
      setStdin: this.setStdin
    };
  },
  props: {
    autocompletionResolver: {
      "default": undefined,
      type: Function
    },
    builtIn: {
      "default": undefined,
      type: Function
    },
    commands: {
      "default": function _default() {
        return {};
      },
      type: Object
    },
    cursor: {
      "default": 0,
      type: Number
    },
    // Default event listeners
    eventListeners: {
      "default": function _default() {
        return [EVENT_LISTENERS.autocomplete, EVENT_LISTENERS.history, EVENT_LISTENERS.search];
      },
      type: Array
    },
    // Non-empty executed commands
    executed: {
      "default": function _default() {
        return new Set();
      },
      type: Set
    },
    helpTimeout: {
      "default": 4000,
      type: Number
    },
    hideBar: {
      "default": false,
      type: Boolean
    },
    hidePrompt: {
      "default": false,
      type: Boolean
    },
    hideTitle: {
      "default": false,
      type: Boolean
    },
    helpText: {
      "default": 'Type help',
      type: String
    },
    // All executed commands
    history: {
      "default": function _default() {
        return [];
      },
      type: Array
    },
    intro: {
      "default": 'Fasten your seatbelts!',
      type: String
    },
    isFullscreen: {
      "default": false,
      type: Boolean
    },
    isInProgress: {
      "default": false,
      type: Boolean
    },
    notFound: {
      "default": 'command not found',
      type: String
    },
    // Options when parsing Stdin
    parserOptions: {
      "default": function _default() {
        return {};
      },
      type: Object
    },
    // History command pointer
    pointer: {
      "default": 0,
      type: Number
    },
    prompt: {
      "default": 'sjd@quantum:~',
      type: String
    },
    showHelp: {
      "default": false,
      type: Boolean
    },
    showIntro: {
      "default": false,
      type: Boolean
    },
    // Current Stdin
    stdin: {
      "default": '',
      type: String
    },
    title: {
      "default": 'sjd@quantum:~',
      type: String
    }
  },
  data: function data() {
    return {
      // Bus for communication
      bus: EventBus,
      // A local copy to allow the absence of properties
      local: {
        // Current Stdin
        stdin: ''
      },
      // Detect scroll and resize events
      scroll: {
        eventListener: undefined,
        // Determinates if scolled to bottom
        isBottom: true,
        resizeObserver: undefined
      }
    };
  },
  watch: {
    stdin: function stdin() {
      this.setStdin(this.stdin);
    },
    'local.stdin': function localStdin() {
      // Emit the current Stdin as an event
      this.$emit('input', this.local.stdin); // Update given property

      this.$emit('update:stdin', this.local.stdin); // Make searching history work again

      if (this.local.stdin === '') {
        this.setPointer(this.local.executed.size);
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    // Scroll to bottom if Stdout mutates terminal height
    this.scroll.resizeObserver = new ResizeObserver( /*#__PURE__*/function () {
      var _ref = VueCommandvue_type_script_lang_js_asyncToGenerator( /*#__PURE__*/regenerator_default.a.mark(function _callee(event) {
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$nextTick();

              case 2:
                // Only scroll to bottom if it was scrolled to bottom before
                if (_this.scroll.isBottom) {
                  _this.$refs['term-std'].scrollTop = _this.$refs['term-std'].scrollHeight;
                }

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    this.scroll.resizeObserver.observe(this.$refs['term-cont']); // Check if scrolled to bottom

    this.scroll.eventListener = function () {
      var terminal = _this.$refs['term-std'];
      _this.scroll.isBottom = terminal.scrollHeight - terminal.scrollTop - terminal.clientHeight === 0;
    };

    this.$refs['term-std'].addEventListener('scroll', this.scroll.eventListener); // Bind given event listeners

    this.eventListeners.forEach(function (eventListener) {
      return eventListener(_this);
    });
  },
  created: function created() {
    // Observe "executed" changes since Vue.js can't watch a "Set". See: https://github.com/ndabAP/vue-command/issues/151
    this.executed.add = function () {
      var _this$local$executed, _Object$getPrototypeO;

      for (var _len = arguments.length, x = new Array(_len), _key = 0; _key < _len; _key++) {
        x[_key] = arguments[_key];
      }

      (_this$local$executed = this.local.executed).add.apply(_this$local$executed, x);

      (_Object$getPrototypeO = Object.getPrototypeOf(this).add).call.apply(_Object$getPrototypeO, [this].concat(x));
    };

    this.executed.clear = function () {
      this.local.executed.clear();
      Object.getPrototypeOf(this).add.call(this);
    };

    this.executed["delete"] = function () {
      var _this$local$executed2, _Object$getPrototypeO2;

      for (var _len2 = arguments.length, x = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        x[_key2] = arguments[_key2];
      }

      (_this$local$executed2 = this.local.executed)["delete"].apply(_this$local$executed2, x);

      (_Object$getPrototypeO2 = Object.getPrototypeOf(this)["delete"]).call.apply(_Object$getPrototypeO2, [this].concat(x));
    }; // Apply user given properties


    this.setCursor(this.cursor);
    this.setPointer(this.pointer);
    this.setStdin(this.stdin);
    this.setIsInProgress(this.isInProgress);
    this.setIsFullscreen(this.isFullscreen);

    var history = VueCommandvue_type_script_lang_js_toConsumableArray(this.history); // If there is no entry push dummy Stdout to show Stdin


    if (history.length === 0) {
      // Push dummy Stdout without termination
      history.push({
        name: 'VueCommandDummyStdout',
        render: function render(createElement) {
          return createElement('span', {}, '');
        }
      }); // Update the history property

      this.$emit('update:history', VueCommandvue_type_script_lang_js_toConsumableArray(history));
    }

    this.setHistory(VueCommandvue_type_script_lang_js_toConsumableArray(history));
  },
  methods: {
    emitInput: function emitInput(input) {
      this.$emit('input', input);
    },
    emitExecute: function emitExecute() {
      this.$emit('execute');
    },
    emitExecuted: function emitExecuted() {
      this.$emit('executed');
    },
    // Focus on last Stdin or search
    focus: function focus() {
      // Check if search mode
      if (this.isSearch) {
        this.$refs.search.focus();
        return;
      } // Latest Stdin is latest history entry


      var stdin = this.$refs.stdin[this.local.history.length - 1]; // Call component method

      stdin.focus();
    },
    setStdin: function setStdin(stdin) {
      this.local.stdin = stdin;
    }
  }
});
// CONCATENATED MODULE: ./src/components/VueCommand.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VueCommandvue_type_script_lang_js_ = (VueCommandvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/VueCommand.vue?vue&type=style&index=0&lang=scss&
var VueCommandvue_type_style_index_0_lang_scss_ = __webpack_require__("590b");

// CONCATENATED MODULE: ./src/components/VueCommand.vue






/* normalize component */

var VueCommand_component = normalizeComponent(
  components_VueCommandvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var VueCommand = (VueCommand_component.exports);
// CONCATENATED MODULE: ./src/constants/keys.js
// Suffix "KEY" is added to avoid JavaScript collisions
var ARROW_UP_KEY = 38;
var ARROW_DOWN_KEY = 40;
var C_KEY = 67;
var R_KEY = 82;
var TAB_KEY = 9;
// CONCATENATED MODULE: ./src/library.js


function library_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function library_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { library_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { library_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


 // Returns a Stdout component containing a span element with given inner content

var library_createStdout = function createStdout(content) {
  var isInnerText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var isEscapeHtml = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var name = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'VueCommandStdout';

  for (var _len = arguments.length, mixins = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
    mixins[_key - 4] = arguments[_key];
  }

  return {
    name: name,
    mixins: mixins,
    inject: ['terminate'],
    mounted: function mounted() {
      var _this = this;

      return library_asyncToGenerator( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$nextTick();

              case 2:
                _this.terminate();

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    render: function render(createElement) {
      if (isEscapeHtml) {
        return createElement('span', {}, content);
      }

      if (isInnerText) {
        return createElement('span', {
          domProps: {
            innerText: content
          }
        });
      }

      return createElement('span', {
        domProps: {
          innerHTML: content
        }
      });
    }
  };
}; // Returns a Stderr component containing a span element with given inner content

var library_createStderr = function createStderr(content) {
  var isEscapeHtml = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'VueCommandStderr';

  for (var _len2 = arguments.length, mixins = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
    mixins[_key2 - 3] = arguments[_key2];
  }

  return {
    name: name,
    mixins: mixins,
    inject: ['terminate'],
    mounted: function mounted() {
      var _this2 = this;

      return library_asyncToGenerator( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.$nextTick();

              case 2:
                _this2.terminate();

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    render: function render(createElement) {
      if (isEscapeHtml) {
        return createElement('span', {}, content);
      }

      return createElement('span', {
        domProps: {
          innerHTML: content
        }
      });
    }
  };
}; // Returns a dummy Stdout component to not show a Stdin

var library_createDummyStdout = function createDummyStdout() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'VueCommandDummyStdout';

  for (var _len3 = arguments.length, mixins = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    mixins[_key3 - 1] = arguments[_key3];
  }

  return {
    name: name,
    mixins: mixins,
    inject: ['terminate'],
    mounted: function mounted() {
      var _this3 = this;

      return library_asyncToGenerator( /*#__PURE__*/regenerator_default.a.mark(function _callee3() {
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this3.$nextTick();

              case 2:
                _this3.terminate();

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    render: function render(createElement) {
      return createElement('span', {}, '');
    }
  };
}; // Default event listeners to opt-in

var EVENT_LISTENERS = {
  // Autocompletion when pressing "Tab" key
  autocomplete: function autocomplete(terminal) {
    terminal.$refs['term-cont'].addEventListener('keydown', function (event) {
      if (event.keyCode === TAB_KEY && !terminal.local.isInProgress) {
        event.preventDefault();
        terminal.autocomplete();
      }
    });
  },
  // Cycle through history with "Arrow up key" and "Arrow down key"
  history: function history(terminal) {
    terminal.$refs['term-cont'].addEventListener('keydown', function (event) {
      if (terminal.local.isInProgress) {
        return;
      }

      if (event.keyCode === ARROW_UP_KEY) {
        event.preventDefault();
        terminal.decreaseHistory();
      }

      if (event.keyCode === ARROW_DOWN_KEY) {
        event.preventDefault();
        terminal.increaseHistory();
      }
    });
  },
  // Search history with "Ctrl" and "r"
  search: function search(terminal) {
    terminal.$refs['term-cont'].addEventListener('keydown', function (event) {
      if (event.ctrlKey && event.keyCode === R_KEY && !terminal.local.isInProgress) {
        event.preventDefault();
        terminal.setIsSearchHandler();
      }
    });
  }
};
/* harmony default export */ var library = (VueCommand);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (library);



/***/ })

/******/ });
});
//# sourceMappingURL=vue-command.umd.js.map