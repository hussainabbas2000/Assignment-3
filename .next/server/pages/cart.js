module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/cart.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/cart/CartItem.js":
/*!*************************************!*\
  !*** ./components/cart/CartItem.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CartItem; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Close */ "@material-ui/icons/Close");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_storefront_Row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-storefront/Row */ "react-storefront/Row");
/* harmony import */ var react_storefront_Row__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_storefront_Row__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_storefront_link_Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-storefront/link/Link */ "react-storefront/link/Link");
/* harmony import */ var react_storefront_link_Link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_storefront_link_Link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_storefront_QuantitySelector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-storefront/QuantitySelector */ "react-storefront/QuantitySelector");
/* harmony import */ var react_storefront_QuantitySelector__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_storefront_QuantitySelector__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_storefront_Box__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-storefront/Box */ "react-storefront/Box");
/* harmony import */ var react_storefront_Box__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_storefront_Box__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_storefront_Image__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-storefront/Image */ "react-storefront/Image");
/* harmony import */ var react_storefront_Image__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_storefront_Image__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_storefront_session_SessionContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-storefront/session/SessionContext */ "react-storefront/session/SessionContext");
/* harmony import */ var react_storefront_session_SessionContext__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_storefront_session_SessionContext__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _RemoveDialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./RemoveDialog */ "./components/cart/RemoveDialog.js");

var _jsxFileName = "C:\\Users\\Hussain\\Desktop\\f\\app\\components\\cart\\CartItem.js";














const styles = theme => ({
  root: {
    flex: 1,
    padding: theme.spacing(2, 5, 2, 2),
    marginBottom: theme.spacing(2),
    position: 'relative'
  },
  thumb: {
    marginRight: theme.spacing(2),
    width: 200,
    [theme.breakpoints.down('xs')]: {
      width: 100
    }
  },
  label: {
    marginRight: theme.spacing(0.6)
  },
  remove: {
    position: 'absolute',
    top: 0,
    right: 0
  }
});

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(styles);
function CartItem({
  product,
  updateQuantity,
  remove
}) {
  const {
    0: open,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    "data-testid": "cartItem",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: classes.root,
      elevation: 3,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_Box__WEBPACK_IMPORTED_MODULE_10__["Hbox"], {
        alignItems: "flex-start",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.thumb,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_Image__WEBPACK_IMPORTED_MODULE_11___default.a, {
            src: product.thumbnail.src,
            fill: true,
            aspectRatio: 1,
            quality: 50
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.info,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_link_Link__WEBPACK_IMPORTED_MODULE_8___default.a, {
            as: product.url,
            href: "/p/[productId]",
            prefetch: "visible",
            pageData: {
              product
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
                variant: "subtitle1",
                children: product.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
            className: classes.price,
            children: product.priceText
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, this), product.size && product.size.selected && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_Box__WEBPACK_IMPORTED_MODULE_10__["Hbox"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
              className: classes.label,
              children: "Size:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
              children: product.size.selected.text
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_Row__WEBPACK_IMPORTED_MODULE_7___default.a, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
              children: "Quantity:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_QuantitySelector__WEBPACK_IMPORTED_MODULE_9___default.a, {
              value: product.quantity,
              onChange: quantity => updateQuantity(product, quantity)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3___default.a, {
        className: classes.remove,
        onClick: () => setOpen(true),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_6___default.a, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RemoveDialog__WEBPACK_IMPORTED_MODULE_13__["default"], {
      open: open,
      setOpen: setOpen,
      name: product.name,
      action: () => remove(product)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/cart/RemoveDialog.js":
/*!*****************************************!*\
  !*** ./components/cart/RemoveDialog.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RemoveDialog; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Dialog */ "@material-ui/core/Dialog");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "@material-ui/core/DialogActions");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "@material-ui/core/DialogContent");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "@material-ui/core/DialogContentText");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "@material-ui/core/DialogTitle");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\Hussain\\Desktop\\f\\app\\components\\cart\\RemoveDialog.js";






function RemoveDialog({
  open,
  setOpen,
  name,
  action
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    "data-testid": "dialogue",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_2___default.a, {
      open: open,
      onClose: () => setOpen(false),
      maxWidth: "sm",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_6___default.a, {
        children: [" ", name]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_4___default.a, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_5___default.a, {
          children: "Are you sure that you want to remove selected item?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_3___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          "date-testid": "btn1",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
            onClick: action,
            children: "Remove Item"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
          onClick: () => setOpen(false),
          color: "primary",
          children: "Keep Item"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 11
  }, this);
}

/***/ }),

/***/ "./pages/cart.js":
/*!***********************!*\
  !*** ./pages/cart.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cart; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_storefront_Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-storefront/Row */ "react-storefront/Row");
/* harmony import */ var react_storefront_Row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_storefront_Row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_cart_CartItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/cart/CartItem */ "./components/cart/CartItem.js");
/* harmony import */ var react_storefront_props__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-storefront/props */ "react-storefront/props");
/* harmony import */ var react_storefront_props__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_storefront_props__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Hidden */ "@material-ui/core/Hidden");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_storefront_utils_format__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-storefront/utils/format */ "react-storefront/utils/format");
/* harmony import */ var react_storefront_utils_format__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_storefront_utils_format__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_storefront_Spacer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-storefront/Spacer */ "react-storefront/Spacer");
/* harmony import */ var react_storefront_Spacer__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_storefront_Spacer__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_storefront_link_Link__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-storefront/link/Link */ "react-storefront/link/Link");
/* harmony import */ var react_storefront_link_Link__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_storefront_link_Link__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_storefront_Box__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-storefront/Box */ "react-storefront/Box");
/* harmony import */ var react_storefront_Box__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_storefront_Box__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_storefront_session_SessionContext__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-storefront/session/SessionContext */ "react-storefront/session/SessionContext");
/* harmony import */ var react_storefront_session_SessionContext__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_storefront_session_SessionContext__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! lodash/get */ "lodash/get");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_18__);

var _jsxFileName = "C:\\Users\\Hussain\\Desktop\\f\\app\\pages\\cart.js";



















const styles = theme => ({
  root: {
    paddingBottom: '64px'
  },
  checkoutPanel: {
    backgroundColor: theme.palette.grey['200'],
    borderRadius: theme.shape.borderRadius,
    padding: `${theme.spacing(2)}px`
  },
  total: {
    fontWeight: 'bold'
  },
  checkoutButton: {
    width: '100%'
  },
  docked: {
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.subtitle1.fontSize,
      padding: `${theme.spacing(2)}px`,
      position: 'fixed',
      left: 0,
      bottom: 0,
      width: '100%',
      zIndex: 10,
      borderRadius: '0',
      boxShadow: 'none'
    }
  }
});

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(styles);
function Cart(props) {
  const classes = useStyles();
  const {
    session,
    actions
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(react_storefront_session_SessionContext__WEBPACK_IMPORTED_MODULE_17___default.a);
  const items = lodash_get__WEBPACK_IMPORTED_MODULE_18___default()(session, 'cart.items');

  const handleUpdateQuantity = (product, quantity) => {
    actions.updateCart({
      item: product,
      quantity
    });
  };

  const handleRemove = product => {
    actions.removeCartItem({
      item: product
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_11___default.a, {
    className: classes.root,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_Row__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
        variant: "h6",
        children: ["My Cart (", items.length, " ", items.length === 1 ? 'item' : 'items', ")"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_Row__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
        container: true,
        spacing: 4,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
          item: true,
          xs: 12,
          sm: 8,
          children: items.length ? items.map((product, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_cart_CartItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
            updateQuantity: handleUpdateQuantity,
            remove: handleRemove,
            product: product
          }, product.id, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 17
          }, this)) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
            variant: "body1",
            children: "There are no items in your cart."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, this), items.length === 0 ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
          item: true,
          xs: 12,
          sm: 4,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: classes.checkoutPanel,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_Box__WEBPACK_IMPORTED_MODULE_16__["Hbox"], {
              alignItems: "flex-start",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
                  variant: "subtitle2",
                  className: classes.total,
                  children: "Estimated Total"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 94,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
                  variant: "caption",
                  children: "Tax calculated in checkout"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_Spacer__WEBPACK_IMPORTED_MODULE_14___default.a, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
                variant: "subtitle2",
                className: classes.total,
                children: Object(react_storefront_utils_format__WEBPACK_IMPORTED_MODULE_13__["price"])(items.reduce((a, b) => a + b.quantity * parseFloat(b.price), 0), {
                  currency: lodash_get__WEBPACK_IMPORTED_MODULE_18___default()(session, 'currency')
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9___default.a, {
              xsDown: true,
              implementation: "css",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_Row__WEBPACK_IMPORTED_MODULE_3___default.a, {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_10___default.a, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 109,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 17
            }, this), items.length === 0 ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_link_Link__WEBPACK_IMPORTED_MODULE_15___default.a, {
              href: "/checkout",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12___default.a, {
                color: "primary",
                variant: "contained",
                className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.checkoutButton, classes.docked),
                children: "Checkout"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 5
  }, this);
}
Cart.getInitialProps = Object(react_storefront_props__WEBPACK_IMPORTED_MODULE_6__["createLazyProps"])(react_storefront_props__WEBPACK_IMPORTED_MODULE_6__["fetchFromAPI"]);

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Container":
/*!**********************************************!*\
  !*** external "@material-ui/core/Container" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Container");

/***/ }),

/***/ "@material-ui/core/Dialog":
/*!*******************************************!*\
  !*** external "@material-ui/core/Dialog" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),

/***/ "@material-ui/core/DialogActions":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogActions" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogActions");

/***/ }),

/***/ "@material-ui/core/DialogContent":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogContent" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

/***/ }),

/***/ "@material-ui/core/DialogContentText":
/*!******************************************************!*\
  !*** external "@material-ui/core/DialogContentText" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContentText");

/***/ }),

/***/ "@material-ui/core/DialogTitle":
/*!************************************************!*\
  !*** external "@material-ui/core/DialogTitle" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

/***/ }),

/***/ "@material-ui/core/Divider":
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/Hidden":
/*!*******************************************!*\
  !*** external "@material-ui/core/Hidden" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Hidden");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/Close":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Close" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),

/***/ "lodash/get":
/*!*****************************!*\
  !*** external "lodash/get" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/get");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-storefront/Box":
/*!***************************************!*\
  !*** external "react-storefront/Box" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront/Box");

/***/ }),

/***/ "react-storefront/Image":
/*!*****************************************!*\
  !*** external "react-storefront/Image" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront/Image");

/***/ }),

/***/ "react-storefront/QuantitySelector":
/*!****************************************************!*\
  !*** external "react-storefront/QuantitySelector" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront/QuantitySelector");

/***/ }),

/***/ "react-storefront/Row":
/*!***************************************!*\
  !*** external "react-storefront/Row" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront/Row");

/***/ }),

/***/ "react-storefront/Spacer":
/*!******************************************!*\
  !*** external "react-storefront/Spacer" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront/Spacer");

/***/ }),

/***/ "react-storefront/link/Link":
/*!*********************************************!*\
  !*** external "react-storefront/link/Link" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront/link/Link");

/***/ }),

/***/ "react-storefront/props":
/*!*****************************************!*\
  !*** external "react-storefront/props" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront/props");

/***/ }),

/***/ "react-storefront/session/SessionContext":
/*!**********************************************************!*\
  !*** external "react-storefront/session/SessionContext" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront/session/SessionContext");

/***/ }),

/***/ "react-storefront/utils/format":
/*!************************************************!*\
  !*** external "react-storefront/utils/format" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront/utils/format");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jYXJ0L0NhcnRJdGVtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY2FydC9SZW1vdmVEaWFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FydC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRUZXh0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0hpZGRlblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbHN4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoL2dldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc3RvcmVmcm9udC9Cb3hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zdG9yZWZyb250L0ltYWdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc3RvcmVmcm9udC9RdWFudGl0eVNlbGVjdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc3RvcmVmcm9udC9Sb3dcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zdG9yZWZyb250L1NwYWNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXN0b3JlZnJvbnQvbGluay9MaW5rXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc3RvcmVmcm9udC9wcm9wc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXN0b3JlZnJvbnQvc2Vzc2lvbi9TZXNzaW9uQ29udGV4dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXN0b3JlZnJvbnQvdXRpbHMvZm9ybWF0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsic3R5bGVzIiwidGhlbWUiLCJyb290IiwiZmxleCIsInBhZGRpbmciLCJzcGFjaW5nIiwibWFyZ2luQm90dG9tIiwicG9zaXRpb24iLCJ0aHVtYiIsIm1hcmdpblJpZ2h0Iiwid2lkdGgiLCJicmVha3BvaW50cyIsImRvd24iLCJsYWJlbCIsInJlbW92ZSIsInRvcCIsInJpZ2h0IiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsIkNhcnRJdGVtIiwicHJvZHVjdCIsInVwZGF0ZVF1YW50aXR5Iiwib3BlbiIsInNldE9wZW4iLCJ1c2VTdGF0ZSIsImNsYXNzZXMiLCJ0aHVtYm5haWwiLCJzcmMiLCJpbmZvIiwidXJsIiwibmFtZSIsInByaWNlIiwicHJpY2VUZXh0Iiwic2l6ZSIsInNlbGVjdGVkIiwidGV4dCIsInF1YW50aXR5IiwiUmVtb3ZlRGlhbG9nIiwiYWN0aW9uIiwicGFkZGluZ0JvdHRvbSIsImNoZWNrb3V0UGFuZWwiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwiZ3JleSIsImJvcmRlclJhZGl1cyIsInNoYXBlIiwidG90YWwiLCJmb250V2VpZ2h0IiwiY2hlY2tvdXRCdXR0b24iLCJkb2NrZWQiLCJmb250U2l6ZSIsInR5cG9ncmFwaHkiLCJzdWJ0aXRsZTEiLCJsZWZ0IiwiYm90dG9tIiwiekluZGV4IiwiYm94U2hhZG93IiwiQ2FydCIsInByb3BzIiwic2Vzc2lvbiIsImFjdGlvbnMiLCJ1c2VDb250ZXh0IiwiU2Vzc2lvbkNvbnRleHQiLCJpdGVtcyIsImdldCIsImhhbmRsZVVwZGF0ZVF1YW50aXR5IiwidXBkYXRlQ2FydCIsIml0ZW0iLCJoYW5kbGVSZW1vdmUiLCJyZW1vdmVDYXJ0SXRlbSIsImxlbmd0aCIsIm1hcCIsImkiLCJpZCIsInJlZHVjZSIsImEiLCJiIiwicGFyc2VGbG9hdCIsImN1cnJlbmN5IiwiY2xzeCIsImdldEluaXRpYWxQcm9wcyIsImNyZWF0ZUxhenlQcm9wcyIsImZldGNoRnJvbUFQSSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMx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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQXRCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnRUQ7QUFFRFEsSUFBSSxDQUFDdUIsZUFBTCxHQUF1QkMsOEVBQWUsQ0FBQ0MsbUVBQUQsQ0FBdEMsQzs7Ozs7Ozs7Ozs7QUNuSUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsb0U7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvY2FydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvY2FydC5qc1wiKTtcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFBhcGVyLCBJY29uQnV0dG9uLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xuaW1wb3J0IHsgQ2xvc2UgYXMgQ2xvc2VJY29uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJ1xuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1zdG9yZWZyb250L1JvdydcbmltcG9ydCBMaW5rIGZyb20gJ3JlYWN0LXN0b3JlZnJvbnQvbGluay9MaW5rJ1xuaW1wb3J0IFF1YW50aXR5U2VsZWN0b3IgZnJvbSAncmVhY3Qtc3RvcmVmcm9udC9RdWFudGl0eVNlbGVjdG9yJ1xuaW1wb3J0IHsgSGJveCB9IGZyb20gJ3JlYWN0LXN0b3JlZnJvbnQvQm94J1xuaW1wb3J0IEltYWdlIGZyb20gJ3JlYWN0LXN0b3JlZnJvbnQvSW1hZ2UnXG5pbXBvcnQgU2Vzc2lvbkNvbnRleHQgZnJvbSAncmVhY3Qtc3RvcmVmcm9udC9zZXNzaW9uL1Nlc3Npb25Db250ZXh0J1xuaW1wb3J0IFJlbW92ZURpYWxvZyBmcm9tICcuL1JlbW92ZURpYWxvZydcblxuY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4gKHtcbiAgcm9vdDoge1xuICAgIGZsZXg6IDEsXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyLCA1LCAyLCAyKSxcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gIH0sXG4gIHRodW1iOiB7XG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgd2lkdGg6IDIwMCxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcbiAgICAgIHdpZHRoOiAxMDAsXG4gICAgfSxcbiAgfSxcbiAgbGFiZWw6IHtcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygwLjYpLFxuICB9LFxuICByZW1vdmU6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgcmlnaHQ6IDAsXG4gIH0sXG59KVxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhzdHlsZXMpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcnRJdGVtKHsgcHJvZHVjdCwgdXBkYXRlUXVhbnRpdHksIHJlbW92ZSB9KSB7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcblxuICByZXR1cm4gKFxuICAgIDxkaXYgZGF0YS10ZXN0aWQ9XCJjYXJ0SXRlbVwiPlxuICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBlbGV2YXRpb249ezN9PlxuICAgICAgICA8SGJveCBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRodW1ifT5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e3Byb2R1Y3QudGh1bWJuYWlsLnNyY30gZmlsbCBhc3BlY3RSYXRpbz17MX0gcXVhbGl0eT17NTB9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW5mb30+XG4gICAgICAgICAgICA8TGluayBhcz17cHJvZHVjdC51cmx9IGhyZWY9XCIvcC9bcHJvZHVjdElkXVwiIHByZWZldGNoPVwidmlzaWJsZVwiIHBhZ2VEYXRhPXt7IHByb2R1Y3QgfX0+XG4gICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIj57cHJvZHVjdC5uYW1lfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnByaWNlfT57cHJvZHVjdC5wcmljZVRleHR9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAge3Byb2R1Y3Quc2l6ZSAmJiBwcm9kdWN0LnNpemUuc2VsZWN0ZWQgJiYgKFxuICAgICAgICAgICAgICA8SGJveD5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMubGFiZWx9PlNpemU6PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5Pntwcm9kdWN0LnNpemUuc2VsZWN0ZWQudGV4dH08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDwvSGJveD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5RdWFudGl0eTo8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxRdWFudGl0eVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Byb2R1Y3QucXVhbnRpdHl9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3F1YW50aXR5ID0+IHVwZGF0ZVF1YW50aXR5KHByb2R1Y3QsIHF1YW50aXR5KX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0hib3g+XG4gICAgICAgIDxJY29uQnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5yZW1vdmV9IG9uQ2xpY2s9eygpID0+IHNldE9wZW4odHJ1ZSl9PlxuICAgICAgICAgIDxDbG9zZUljb24gLz5cbiAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgPC9QYXBlcj5cbiAgICAgIDxSZW1vdmVEaWFsb2dcbiAgICAgICAgb3Blbj17b3Blbn1cbiAgICAgICAgc2V0T3Blbj17c2V0T3Blbn1cbiAgICAgICAgbmFtZT17cHJvZHVjdC5uYW1lfVxuICAgICAgICBhY3Rpb249eygpID0+IHJlbW92ZShwcm9kdWN0KX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsImltcG9ydCB7XG4gIEJ1dHRvbixcbiAgRGlhbG9nLFxuICBEaWFsb2dBY3Rpb25zLFxuICBEaWFsb2dDb250ZW50LFxuICBEaWFsb2dDb250ZW50VGV4dCxcbiAgRGlhbG9nVGl0bGUsXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZW1vdmVEaWFsb2coeyBvcGVuLCBzZXRPcGVuLCBuYW1lLCBhY3Rpb24gfSkge1xuICByZXR1cm4gKDxkaXYgZGF0YS10ZXN0aWQ9J2RpYWxvZ3VlJz5cbiAgICA8RGlhbG9nIG9wZW49e29wZW59IG9uQ2xvc2U9eygpID0+IHNldE9wZW4oZmFsc2UpfSBtYXhXaWR0aD1cInNtXCI+XG4gICAgICA8RGlhbG9nVGl0bGU+IHtuYW1lfTwvRGlhbG9nVGl0bGU+XG4gICAgICA8RGlhbG9nQ29udGVudD5cbiAgICAgICAgPERpYWxvZ0NvbnRlbnRUZXh0PkFyZSB5b3Ugc3VyZSB0aGF0IHlvdSB3YW50IHRvIHJlbW92ZSBzZWxlY3RlZCBpdGVtPzwvRGlhbG9nQ29udGVudFRleHQ+XG4gICAgICA8L0RpYWxvZ0NvbnRlbnQ+XG4gICAgICA8RGlhbG9nQWN0aW9ucz5cbiAgICAgICAgPGRpdiBkYXRlLXRlc3RpZCA9IFwiYnRuMVwiPlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2FjdGlvbn0+UmVtb3ZlIEl0ZW08L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKGZhbHNlKX0gY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgS2VlcCBJdGVtXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9EaWFsb2dBY3Rpb25zPlxuICAgIDwvRGlhbG9nPlxuICAgIDwvZGl2PlxuICApXG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSdcbmltcG9ydCBSb3cgZnJvbSAncmVhY3Qtc3RvcmVmcm9udC9Sb3cnXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xuaW1wb3J0IENhcnRJdGVtIGZyb20gJy4uL2NvbXBvbmVudHMvY2FydC9DYXJ0SXRlbSdcbmltcG9ydCB7IGNyZWF0ZUxhenlQcm9wcywgZmV0Y2hGcm9tQVBJIH0gZnJvbSAncmVhY3Qtc3RvcmVmcm9udC9wcm9wcydcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXG5pbXBvcnQgeyBHcmlkLCBIaWRkZW4sIERpdmlkZXIsIENvbnRhaW5lciwgQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5pbXBvcnQgeyBwcmljZSB9IGZyb20gJ3JlYWN0LXN0b3JlZnJvbnQvdXRpbHMvZm9ybWF0J1xuaW1wb3J0IFNwYWNlciBmcm9tICdyZWFjdC1zdG9yZWZyb250L1NwYWNlcidcbmltcG9ydCBMaW5rIGZyb20gJ3JlYWN0LXN0b3JlZnJvbnQvbGluay9MaW5rJ1xuaW1wb3J0IHsgSGJveCB9IGZyb20gJ3JlYWN0LXN0b3JlZnJvbnQvQm94J1xuaW1wb3J0IFNlc3Npb25Db250ZXh0IGZyb20gJ3JlYWN0LXN0b3JlZnJvbnQvc2Vzc2lvbi9TZXNzaW9uQ29udGV4dCdcbmltcG9ydCBnZXQgZnJvbSAnbG9kYXNoL2dldCdcblxuY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4gKHtcbiAgcm9vdDoge1xuICAgIHBhZGRpbmdCb3R0b206ICc2NHB4JyxcbiAgfSxcbiAgY2hlY2tvdXRQYW5lbDoge1xuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5ncmV5WycyMDAnXSxcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnNoYXBlLmJvcmRlclJhZGl1cyxcbiAgICBwYWRkaW5nOiBgJHt0aGVtZS5zcGFjaW5nKDIpfXB4YCxcbiAgfSxcbiAgdG90YWw6IHtcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gIH0sXG4gIGNoZWNrb3V0QnV0dG9uOiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgfSxcbiAgZG9ja2VkOiB7XG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XG4gICAgICBmb250U2l6ZTogdGhlbWUudHlwb2dyYXBoeS5zdWJ0aXRsZTEuZm9udFNpemUsXG4gICAgICBwYWRkaW5nOiBgJHt0aGVtZS5zcGFjaW5nKDIpfXB4YCxcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgbGVmdDogMCxcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICB6SW5kZXg6IDEwLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMCcsXG4gICAgICBib3hTaGFkb3c6ICdub25lJyxcbiAgICB9LFxuICB9LFxufSlcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhzdHlsZXMpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcnQocHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXG4gIGNvbnN0IHsgc2Vzc2lvbiwgYWN0aW9ucyB9ID0gdXNlQ29udGV4dChTZXNzaW9uQ29udGV4dClcbiAgY29uc3QgaXRlbXMgPSBnZXQoc2Vzc2lvbiwgJ2NhcnQuaXRlbXMnKVxuXG4gIGNvbnN0IGhhbmRsZVVwZGF0ZVF1YW50aXR5ID0gKHByb2R1Y3QsIHF1YW50aXR5KSA9PiB7XG4gICAgYWN0aW9ucy51cGRhdGVDYXJ0KHtcbiAgICAgIGl0ZW06IHByb2R1Y3QsXG4gICAgICBxdWFudGl0eSxcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgaGFuZGxlUmVtb3ZlID0gcHJvZHVjdCA9PiB7XG4gICAgYWN0aW9ucy5yZW1vdmVDYXJ0SXRlbSh7XG4gICAgICBpdGVtOiBwcm9kdWN0LFxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPFJvdz5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+XG4gICAgICAgICAgTXkgQ2FydCAoe2l0ZW1zLmxlbmd0aH0ge2l0ZW1zLmxlbmd0aCA9PT0gMSA/ICdpdGVtJyA6ICdpdGVtcyd9KVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L1Jvdz5cbiAgICAgIDxSb3c+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs0fT5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezh9PlxuICAgICAgICAgICAge2l0ZW1zLmxlbmd0aCA/IChcbiAgICAgICAgICAgICAgaXRlbXMubWFwKChwcm9kdWN0LCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPENhcnRJdGVtXG4gICAgICAgICAgICAgICAgICBrZXk9e3Byb2R1Y3QuaWR9XG4gICAgICAgICAgICAgICAgICB1cGRhdGVRdWFudGl0eT17aGFuZGxlVXBkYXRlUXVhbnRpdHl9XG4gICAgICAgICAgICAgICAgICByZW1vdmU9e2hhbmRsZVJlbW92ZX1cbiAgICAgICAgICAgICAgICAgIHByb2R1Y3Q9e3Byb2R1Y3R9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiPlRoZXJlIGFyZSBubyBpdGVtcyBpbiB5b3VyIGNhcnQuPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAge2l0ZW1zLmxlbmd0aCA9PT0gMCA/IG51bGwgOiAoXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jaGVja291dFBhbmVsfT5cbiAgICAgICAgICAgICAgICA8SGJveCBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50b3RhbH0+XG4gICAgICAgICAgICAgICAgICAgICAgRXN0aW1hdGVkIFRvdGFsXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIj5UYXggY2FsY3VsYXRlZCBpbiBjaGVja291dDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPFNwYWNlciAvPlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50b3RhbH0+XG4gICAgICAgICAgICAgICAgICAgIHtwcmljZShcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtcy5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLnF1YW50aXR5ICogcGFyc2VGbG9hdChiLnByaWNlKSwgMCksXG4gICAgICAgICAgICAgICAgICAgICAgeyBjdXJyZW5jeTogZ2V0KHNlc3Npb24sICdjdXJyZW5jeScpIH1cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8L0hib3g+XG4gICAgICAgICAgICAgICAgPEhpZGRlbiB4c0Rvd24gaW1wbGVtZW50YXRpb249XCJjc3NcIj5cbiAgICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICA8L0hpZGRlbj5cbiAgICAgICAgICAgICAgICB7aXRlbXMubGVuZ3RoID09PSAwID8gbnVsbCA6IChcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2hlY2tvdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMuY2hlY2tvdXRCdXR0b24sIGNsYXNzZXMuZG9ja2VkKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIENoZWNrb3V0XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvUm93PlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cbkNhcnQuZ2V0SW5pdGlhbFByb3BzID0gY3JlYXRlTGF6eVByb3BzKGZldGNoRnJvbUFQSSlcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50VGV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsc3hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoL2dldFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zdG9yZWZyb250L0JveFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zdG9yZWZyb250L0ltYWdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXN0b3JlZnJvbnQvUXVhbnRpdHlTZWxlY3RvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zdG9yZWZyb250L1Jvd1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zdG9yZWZyb250L1NwYWNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zdG9yZWZyb250L2xpbmsvTGlua1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zdG9yZWZyb250L3Byb3BzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXN0b3JlZnJvbnQvc2Vzc2lvbi9TZXNzaW9uQ29udGV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zdG9yZWZyb250L3V0aWxzL2Zvcm1hdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==