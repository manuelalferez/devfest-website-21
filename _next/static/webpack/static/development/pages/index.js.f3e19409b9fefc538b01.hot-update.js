webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/MobileNav.js":
/*!*********************************!*\
  !*** ./components/MobileNav.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_onclickoutside__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-onclickoutside */ "./node_modules/react-onclickoutside/dist/react-onclickoutside.es.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./theme */ "./components/theme.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _elements_AnchorButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./elements/AnchorButton */ "./components/elements/AnchorButton.js");
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Navbar */ "./components/Navbar.js");







var _jsxFileName = "/Users/sia1/Projects/devfest-nola-2019/components/MobileNav.js";







var MobileNavLink = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].a.withConfig({
  displayName: "MobileNav__MobileNavLink",
  componentId: "sc-7sxiv9-0"
})(["border-top:1px solid ", ";color:", ";font-size:0.8em;font-weight:700;padding:1.5em 1.5em 1.5em 1em;text-decoration:none;&:hover{background-color:", ";color:", ";}&:last-of-type{border-bottom:1px solid ", ";}"], _theme__WEBPACK_IMPORTED_MODULE_10__["default"].colors.blueExtraLight, _theme__WEBPACK_IMPORTED_MODULE_10__["default"].colors.blue, _theme__WEBPACK_IMPORTED_MODULE_10__["default"].colors.blueExtraLight, _theme__WEBPACK_IMPORTED_MODULE_10__["default"].colors.blueLight, _theme__WEBPACK_IMPORTED_MODULE_10__["default"].colors.blueExtraLight);
var MenuLink = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "MobileNav__MenuLink",
  componentId: "sc-7sxiv9-1"
})(["color:", ";cursor:pointer;font-size:0.8em;font-weight:700;padding:1.5em 1.5em 1.5em 1em;text-decoration:none;text-transform:uppercase;&:hover{background-color:", ";color:", ";}"], _theme__WEBPACK_IMPORTED_MODULE_10__["default"].colors.blue, _theme__WEBPACK_IMPORTED_MODULE_10__["default"].colors.blueExtraLight, _theme__WEBPACK_IMPORTED_MODULE_10__["default"].colors.blueLight);
var NavMobileContainer = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "MobileNav__NavMobileContainer",
  componentId: "sc-7sxiv9-2"
})(["position:relative;@media (min-width:885px){display:none;}"]);
var MobileTopNav = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "MobileNav__MobileTopNav",
  componentId: "sc-7sxiv9-3"
})(["display:flex;justify-content:space-between;margin:0 auto;"]);
var MobileLinks = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "MobileNav__MobileLinks",
  componentId: "sc-7sxiv9-4"
})(["&.is-visible{display:flex;flex-direction:column;overflow:visible;transition:transform .2s ease-in-out .1s,opacity .2s ease-in-out .2s;}&.is-hidden{display:none;overflow:hidden;transform:translateY(-100%);opacity:0;transition:transform .2s ease-in-out .1s,opacity .2s ease-in-out .2s;}"]);

var MobileMenu =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MobileMenu, _Component);

  function MobileMenu() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MobileMenu);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MobileMenu).call(this));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "openMenu", function () {
      _this.setState({
        isOpen: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "closeMenu", function () {
      _this.setState({
        isOpen: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleClickOutside", function () {
      _this.closeMenu();
    });

    _this.state = {
      isOpen: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MobileMenu, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(NavMobileContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(MobileTopNav, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(MenuLink, {
        onClick: this.state.isOpen ? this.closeMenu : this.openMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "Menu"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_elements_AnchorButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
        style: {
          alignSelf: 'center',
          marginRight: '1em'
        },
        href: "https://ti.to/gdg-new-orleans/devfest-new-orleans-2019",
        small: "true",
        target: "_blank",
        rel: "noopener noreferrer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, "Register now")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(MobileLinks, {
        className: this.state.isOpen ? 'is-visible' : 'is-hidden',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        passHref: true,
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(MobileNavLink, {
        onClick: this.closeMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "Home")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        passHref: true,
        href: "/#speakers",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(MobileNavLink, {
        onClick: this.closeMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "Speakers")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        passHref: true,
        href: "/#schedule",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(MobileNavLink, {
        onClick: this.closeMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "Talks")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        passHref: true,
        href: "/#sponsors",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(MobileNavLink, {
        onClick: this.closeMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, "Sponsors")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        passHref: true,
        href: "/Location",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(MobileNavLink, {
        onClick: this.closeMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "Location")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        passHref: true,
        href: "/conduct",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(MobileNavLink, {
        onClick: this.closeMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "Code of Conduct"))));
    }
  }]);

  return MobileMenu;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_onclickoutside__WEBPACK_IMPORTED_MODULE_8__["default"])(MobileMenu));

/***/ })

})
//# sourceMappingURL=index.js.f3e19409b9fefc538b01.hot-update.js.map