(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/app"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PagesTable.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/PagesTable.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'PagesTable',
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['pages']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/DashboardPage.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/DashboardPage.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_PagesTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/PagesTable */ "./resources/js/components/PagesTable.vue");
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DashboardPage',
  components: {
    PagesTable: _components_PagesTable__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PagesTable.vue?vue&type=template&id=50ecfe15&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/PagesTable.vue?vue&type=template&id=50ecfe15& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "table-responsive w-full mb-4" }, [
      _c("table", { staticClass: "border-collapse table-auto w-full" }, [
        _c("thead", [
          _c("tr", [
            _c("th", { staticClass: "px-4 py-2 font-medium border" }, [
              _vm._v("Id")
            ]),
            _vm._v(" "),
            _c("th", { staticClass: "px-4 py-2 font-medium border" }, [
              _vm._v("Título")
            ]),
            _vm._v(" "),
            _c("th", { staticClass: "px-4 py-2 font-medium border" }, [
              _vm._v("Slug")
            ]),
            _vm._v(" "),
            _c("th", { staticClass: "px-4 py-2 font-medium border" }, [
              _vm._v("Categoría")
            ]),
            _vm._v(" "),
            _c("th", { staticClass: "px-4 py-2 font-medium border" }, [
              _vm._v("Fecha creación")
            ]),
            _vm._v(" "),
            _c("th", { staticClass: "px-4 py-2 font-medium border" }, [
              _vm._v("Fecha actualización")
            ]),
            _vm._v(" "),
            _c("th", { staticClass: "px-4 py-2 font-medium border" }, [
              _vm._v("Fecha publicación")
            ]),
            _vm._v(" "),
            _c("th", { staticClass: "px-4 py-2 font-medium border" }, [
              _vm._v("Acciones")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("tbody", [
          _c("tr", { staticClass: "bg-gray-100" }, [
            _c("td", { staticClass: "border px-4 py-2" }, [
              _vm._v("\n        4543\n      ")
            ]),
            _vm._v(" "),
            _c("td", { staticClass: "border px-4 py-2" }, [
              _c(
                "a",
                {
                  staticClass: "text-blue-500 block mt-1",
                  attrs: {
                    href:
                      "http://portal.localhost:8020/micrositio-covid-19/boletin-estadistico-sobre-exceso-de-mortalidad-por-todas-las-causas-durante-la-emergencia-por-covid-19",
                    target: "_blank"
                  }
                },
                [
                  _vm._v(
                    "Boletín estadístico sobre exceso de mortalidad por todas las\n                                                         causas durante la emergencia por COVID-19\n      "
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("td", { staticClass: "border px-4 py-2" }, [
              _vm._v(
                "\n        boletin-estadistico-sobre-exceso-de-mortalidad-por-todas-las-causas-durante-la-emergencia-por-covid-19\n      "
              )
            ]),
            _vm._v(" "),
            _c("td", { staticClass: "border px-4 py-2" }, [
              _vm._v("\n        Micrositio COVID-19\n      ")
            ]),
            _vm._v(" "),
            _c("td", { staticClass: "border px-4 py-2" }, [
              _vm._v("\n        2020-09-15 08:24:22\n      ")
            ]),
            _vm._v(" "),
            _c("td", { staticClass: "border px-4 py-2" }, [
              _vm._v("\n        2020-09-15 08:24:22\n      ")
            ]),
            _vm._v(" "),
            _c("td", { staticClass: "border px-4 py-2" }, [
              _vm._v("\n        2020-09-15 08:24:22\n      ")
            ]),
            _vm._v(" "),
            _c("td", { staticClass: "border px-4 py-2 text-center" }, [
              _c("div", { staticClass: "inline-flex" }, [
                _c(
                  "a",
                  {
                    staticClass:
                      "border border-r-0 hover:text-blue-500 text-gray-600 font-normal py-2 px-4 rounded-l rounded-l",
                    attrs: {
                      target: "_blank",
                      href:
                        "http://portal.localhost:8020/micrositio-covid-19/boletin-estadistico-sobre-exceso-de-mortalidad-por-todas-las-causas-durante-la-emergencia-por-covid-19"
                    }
                  },
                  [
                    _c("i", {
                      staticClass: "far fa-eye",
                      attrs: { "aria-hidden": "true" }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass:
                      "border hover:bg-green-500 hover:text-white text-gray-700 font-normal py-2 px-4 rounded-r transition-colors duration-100",
                    attrs: {
                      href:
                        "http://portal.localhost:8020/admin/articles/4543/edit"
                    }
                  },
                  [
                    _c("i", {
                      staticClass: "fas fa-edit",
                      attrs: { "aria-hidden": "true" }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass:
                      "border hover:bg-red-500 hover:text-white text-gray-700 font-normal py-2 px-4 rounded-r transition-colors duration-100",
                    attrs: {
                      "data-toggle": "modal",
                      "data-target": "#confirmation-modal",
                      "data-url":
                        "http://portal.localhost:8020/api/v1/articles/4543"
                    }
                  },
                  [
                    _c("i", {
                      staticClass: "far fa-trash-alt",
                      attrs: { "aria-hidden": "true" }
                    })
                  ]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", { staticClass: "border px-4 py-2" }, [
              _vm._v("\n        4542\n      ")
            ]),
            _vm._v(" "),
            _c("td", { staticClass: "border px-4 py-2" }, [
              _c(
                "a",
                {
                  staticClass: "text-blue-500 block mt-1",
                  attrs: {
                    href:
                      "http://portal.localhost:8020/avisos/unete-a-la-transmision",
                    target: "_blank"
                  }
                },
                [_vm._v("¡Únete a la transmisión!\n      ")]
              )
            ]),
            _vm._v(" "),
            _c("td", { staticClass: "border px-4 py-2" }, [
              _vm._v("\n        unete-a-la-transmision\n      ")
            ]),
            _vm._v(" "),
            _c("td", { staticClass: "border px-4 py-2" }, [
              _vm._v("\n        Avisos\n      ")
            ]),
            _vm._v(" "),
            _c("td", { staticClass: "border px-4 py-2" }, [
              _vm._v("\n        2020-09-14 18:16:39\n      ")
            ]),
            _vm._v(" "),
            _c("td", { staticClass: "border px-4 py-2" }, [
              _vm._v("\n        2020-09-14 19:38:11\n      ")
            ]),
            _vm._v(" "),
            _c("td", { staticClass: "border px-4 py-2" }, [
              _vm._v("\n        2020-09-14 19:38:11\n      ")
            ]),
            _vm._v(" "),
            _c("td", { staticClass: "border px-4 py-2 text-center" }, [
              _c("div", { staticClass: "inline-flex" }, [
                _c(
                  "a",
                  {
                    staticClass:
                      "border border-r-0 hover:text-blue-500 text-gray-600 font-normal py-2 px-4 rounded-l rounded-l",
                    attrs: {
                      target: "_blank",
                      href:
                        "http://portal.localhost:8020/avisos/unete-a-la-transmision"
                    }
                  },
                  [
                    _c("i", {
                      staticClass: "far fa-eye",
                      attrs: { "aria-hidden": "true" }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass:
                      "border hover:bg-green-500 hover:text-white text-gray-700 font-normal py-2 px-4 rounded-r transition-colors duration-100",
                    attrs: {
                      href:
                        "http://portal.localhost:8020/admin/articles/4542/edit"
                    }
                  },
                  [
                    _c("i", {
                      staticClass: "fas fa-edit",
                      attrs: { "aria-hidden": "true" }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass:
                      "border hover:bg-red-500 hover:text-white text-gray-700 font-normal py-2 px-4 rounded-r transition-colors duration-100",
                    attrs: {
                      "data-toggle": "modal",
                      "data-target": "#confirmation-modal",
                      "data-url":
                        "http://portal.localhost:8020/api/v1/articles/4542"
                    }
                  },
                  [
                    _c("i", {
                      staticClass: "far fa-trash-alt",
                      attrs: { "aria-hidden": "true" }
                    })
                  ]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("tr", { staticClass: "bg-gray-100" }, [
            _c("td", { staticClass: "border px-4 py-2" }, [
              _vm._v("\n        4541\n      ")
            ]),
            _vm._v(" "),
            _c("td", { staticClass: "border px-4 py-2" }, [
              _c(
                "a",
                {
                  staticClass: "text-blue-500 block mt-1",
                  attrs: {
                    href:
                      "http://portal.localhost:8020/avisos/un-millon-de-gracias",
                    target: "_blank"
                  }
                },
                [_vm._v("¡Un millón de gracias!\n      ")]
              )
            ]),
            _vm._v(" "),
            _c("td", { staticClass: "border px-4 py-2" }, [
              _vm._v("\n        un-millon-de-gracias\n      ")
            ]),
            _vm._v(" "),
            _c("td", { staticClass: "border px-4 py-2" }, [
              _vm._v("\n        Avisos\n      ")
            ]),
            _vm._v(" "),
            _c("td", { staticClass: "border px-4 py-2" }, [
              _vm._v("\n        2020-09-11 17:28:41\n      ")
            ]),
            _vm._v(" "),
            _c("td", { staticClass: "border px-4 py-2" }, [
              _vm._v("\n        2020-09-11 17:31:57\n      ")
            ]),
            _vm._v(" "),
            _c("td", { staticClass: "border px-4 py-2" }, [
              _vm._v("\n        2020-09-11 17:31:57\n      ")
            ]),
            _vm._v(" "),
            _c("td", { staticClass: "border px-4 py-2 text-center" }, [
              _c("div", { staticClass: "inline-flex" }, [
                _c(
                  "a",
                  {
                    staticClass:
                      "border border-r-0 hover:text-blue-500 text-gray-600 font-normal py-2 px-4 rounded-l rounded-l",
                    attrs: {
                      target: "_blank",
                      href:
                        "http://portal.localhost:8020/avisos/un-millon-de-gracias"
                    }
                  },
                  [
                    _c("i", {
                      staticClass: "far fa-eye",
                      attrs: { "aria-hidden": "true" }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass:
                      "border hover:bg-green-500 hover:text-white text-gray-700 font-normal py-2 px-4 rounded-r transition-colors duration-100",
                    attrs: {
                      href:
                        "http://portal.localhost:8020/admin/articles/4541/edit"
                    }
                  },
                  [
                    _c("i", {
                      staticClass: "fas fa-edit",
                      attrs: { "aria-hidden": "true" }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass:
                      "border hover:bg-red-500 hover:text-white text-gray-700 font-normal py-2 px-4 rounded-r transition-colors duration-100",
                    attrs: {
                      "data-toggle": "modal",
                      "data-target": "#confirmation-modal",
                      "data-url":
                        "http://portal.localhost:8020/api/v1/articles/4541"
                    }
                  },
                  [
                    _c("i", {
                      staticClass: "far fa-trash-alt",
                      attrs: { "aria-hidden": "true" }
                    })
                  ]
                )
              ])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/DashboardPage.vue?vue&type=template&id=576da70a&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/DashboardPage.vue?vue&type=template&id=576da70a& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "dashboard-container w-full" },
    [_c("pages-table")],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/actions.js":
/*!*********************************!*\
  !*** ./resources/js/actions.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ "./resources/js/store/index.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router */ "./resources/js/router/index.js");




vue__WEBPACK_IMPORTED_MODULE_1___default.a.config.productionTip = false;
new vue__WEBPACK_IMPORTED_MODULE_1___default.a({
  store: _store__WEBPACK_IMPORTED_MODULE_2__["default"],
  router: _router__WEBPACK_IMPORTED_MODULE_3__["default"],
  mounted: function mounted() {
    console.log('Vue mounted');
  }
}).$mount('.app');

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

window.axios = axios__WEBPACK_IMPORTED_MODULE_0___default.a;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/***/ }),

/***/ "./resources/js/components/PagesTable.vue":
/*!************************************************!*\
  !*** ./resources/js/components/PagesTable.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PagesTable_vue_vue_type_template_id_50ecfe15___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PagesTable.vue?vue&type=template&id=50ecfe15& */ "./resources/js/components/PagesTable.vue?vue&type=template&id=50ecfe15&");
/* harmony import */ var _PagesTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PagesTable.vue?vue&type=script&lang=js& */ "./resources/js/components/PagesTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PagesTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PagesTable_vue_vue_type_template_id_50ecfe15___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PagesTable_vue_vue_type_template_id_50ecfe15___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/PagesTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/PagesTable.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/PagesTable.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PagesTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./PagesTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PagesTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PagesTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/PagesTable.vue?vue&type=template&id=50ecfe15&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/PagesTable.vue?vue&type=template&id=50ecfe15& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PagesTable_vue_vue_type_template_id_50ecfe15___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./PagesTable.vue?vue&type=template&id=50ecfe15& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PagesTable.vue?vue&type=template&id=50ecfe15&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PagesTable_vue_vue_type_template_id_50ecfe15___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PagesTable_vue_vue_type_template_id_50ecfe15___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/getters.js":
/*!*********************************!*\
  !*** ./resources/js/getters.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var pages = function pages(state) {
  return state.pages;
};

/* harmony default export */ __webpack_exports__["default"] = ({
  pages: pages
});

/***/ }),

/***/ "./resources/js/mutations.js":
/*!***********************************!*\
  !*** ./resources/js/mutations.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./resources/js/pages/DashboardPage.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/DashboardPage.vue ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DashboardPage_vue_vue_type_template_id_576da70a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardPage.vue?vue&type=template&id=576da70a& */ "./resources/js/pages/DashboardPage.vue?vue&type=template&id=576da70a&");
/* harmony import */ var _DashboardPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardPage.vue?vue&type=script&lang=js& */ "./resources/js/pages/DashboardPage.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _DashboardPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _DashboardPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DashboardPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DashboardPage_vue_vue_type_template_id_576da70a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DashboardPage_vue_vue_type_template_id_576da70a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/DashboardPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/DashboardPage.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/DashboardPage.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/DashboardPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/DashboardPage.vue?vue&type=template&id=576da70a&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/DashboardPage.vue?vue&type=template&id=576da70a& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardPage_vue_vue_type_template_id_576da70a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardPage.vue?vue&type=template&id=576da70a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/DashboardPage.vue?vue&type=template&id=576da70a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardPage_vue_vue_type_template_id_576da70a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardPage_vue_vue_type_template_id_576da70a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/router/index.js":
/*!**************************************!*\
  !*** ./resources/js/router/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_DashboardPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/DashboardPage */ "./resources/js/pages/DashboardPage.vue");



vue__WEBPACK_IMPORTED_MODULE_1___default.a.use(vue_router__WEBPACK_IMPORTED_MODULE_0__["default"]);
var router = new vue_router__WEBPACK_IMPORTED_MODULE_0__["default"]({
  mode: 'history',
  routes: [{
    path: '/dashboard',
    name: 'dashboard',
    component: _pages_DashboardPage__WEBPACK_IMPORTED_MODULE_2__["default"]
  }]
});
router.beforeEach(function (to, from, next) {
  console.log(from, to);
  next();
});
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./resources/js/store/index.js":
/*!*************************************!*\
  !*** ./resources/js/store/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _getters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../getters */ "./resources/js/getters.js");
/* harmony import */ var _mutations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mutations */ "./resources/js/mutations.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions */ "./resources/js/actions.js");





vue__WEBPACK_IMPORTED_MODULE_1___default.a.use(vuex__WEBPACK_IMPORTED_MODULE_0__["default"]);
var state = {
  pages: []
};
/* harmony default export */ __webpack_exports__["default"] = (new vuex__WEBPACK_IMPORTED_MODULE_0__["default"].Store({
  state: state,
  getters: _getters__WEBPACK_IMPORTED_MODULE_2__["default"],
  mutations: _mutations__WEBPACK_IMPORTED_MODULE_3__["default"],
  actions: _actions__WEBPACK_IMPORTED_MODULE_4__["default"]
}));

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /var/www/html/resources/js/app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! /var/www/html/resources/sass/app.scss */"./resources/sass/app.scss");


/***/ })

},[[0,"/js/manifest","/js/vendor"]]]);