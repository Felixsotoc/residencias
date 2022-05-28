"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs-page_tabs-page_module_ts"],{

/***/ 7952:
/*!*********************************************!*\
  !*** ./src/app/pages/map/map-dark-style.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "darkStyle": () => (/* binding */ darkStyle)
/* harmony export */ });
const darkStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#263c3f"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6b9a76"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#38414e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#212a37"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9ca5b3"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#1f2835"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#f3d19c"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2f3948"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#515c6d"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  }
]

/***/ }),

/***/ 4333:
/*!******************************************************!*\
  !*** ./src/app/pages/about-popover/about-popover.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopoverPage": () => (/* binding */ PopoverPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 8099);



class PopoverPage {
    constructor(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
    }
    support() {
        // this.app.getRootNavs()[0].push('/support');
        this.popoverCtrl.dismiss();
    }
    close(url) {
        window.open(url, '_blank');
        this.popoverCtrl.dismiss();
    }
}
PopoverPage.ɵfac = function PopoverPage_Factory(t) { return new (t || PopoverPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.PopoverController)); };
PopoverPage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopoverPage, selectors: [["ng-component"]], decls: 16, vars: 0, consts: [["button", "", 3, "click"]], template: function PopoverPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-item", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoverPage_Template_ion_item_click_1_listener() { return ctx.close("https://ionicframework.com/getting-started"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Learn Ionic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-item", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoverPage_Template_ion_item_click_4_listener() { return ctx.close("https://ionicframework.com/docs/"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-item", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoverPage_Template_ion_item_click_7_listener() { return ctx.close("https://showcase.ionicframework.com"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Showcase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-item", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoverPage_Template_ion_item_click_10_listener() { return ctx.close("https://github.com/ionic-team/ionic"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "GitHub Repo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-item", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoverPage_Template_ion_item_click_13_listener() { return ctx.support(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonLabel], encapsulation: 2 });


/***/ }),

/***/ 2355:
/*!*****************************************************!*\
  !*** ./src/app/pages/about/about-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPageRoutingModule": () => (/* binding */ AboutPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about */ 5927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);




const routes = [
    {
        path: '',
        component: _about__WEBPACK_IMPORTED_MODULE_0__.AboutPage
    }
];
class AboutPageRoutingModule {
}
AboutPageRoutingModule.ɵfac = function AboutPageRoutingModule_Factory(t) { return new (t || AboutPageRoutingModule)(); };
AboutPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AboutPageRoutingModule });
AboutPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AboutPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 654:
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutModule": () => (/* binding */ AboutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about */ 5927);
/* harmony import */ var _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../about-popover/about-popover */ 4333);
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-routing.module */ 2355);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);







class AboutModule {
}
AboutModule.ɵfac = function AboutModule_Factory(t) { return new (t || AboutModule)(); };
AboutModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AboutModule, bootstrap: [_about__WEBPACK_IMPORTED_MODULE_0__.AboutPage] });
AboutModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _about_routing_module__WEBPACK_IMPORTED_MODULE_2__.AboutPageRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AboutModule, { declarations: [_about__WEBPACK_IMPORTED_MODULE_0__.AboutPage, _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_1__.PopoverPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
        _about_routing_module__WEBPACK_IMPORTED_MODULE_2__.AboutPageRoutingModule] }); })();


/***/ }),

/***/ 5927:
/*!**************************************!*\
  !*** ./src/app/pages/about/about.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPage": () => (/* binding */ AboutPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../about-popover/about-popover */ 4333);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);







function AboutPage_ng_template_40_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-datetime", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AboutPage_ng_template_40_Template_ion_datetime_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.conferenceDate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.conferenceDate);
} }
const _c0 = function () { return { "opacity": "1" }; };
class AboutPage {
    constructor(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
        this.location = 'madison';
        this.conferenceDate = '2047-05-17';
        this.selectOptions = {
            header: 'Select a Location'
        };
    }
    presentPopover(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const popover = yield this.popoverCtrl.create({
                component: _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_0__.PopoverPage,
                event
            });
            yield popover.present();
        });
    }
}
AboutPage.ɵfac = function AboutPage_Factory(t) { return new (t || AboutPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.PopoverController)); };
AboutPage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AboutPage, selectors: [["page-about"]], decls: 55, vars: 19, consts: [[1, "ion-no-border"], ["slot", "start"], ["slot", "end"], [3, "click"], ["slot", "icon-only", "ios", "ellipsis-horizontal", "md", "ellipsis-vertical"], [1, "about-header"], [1, "about-image", "madison", 3, "ngStyle"], [1, "about-image", "austin", 3, "ngStyle"], [1, "about-image", "chicago", 3, "ngStyle"], [1, "about-image", "seattle", 3, "ngStyle"], [1, "about-info"], [1, "ion-padding-top", "ion-padding-start"], [1, "ion-padding-start", "ion-padding-end"], ["lines", "none"], [3, "ngModel", "interfaceOptions", "ngModelChange"], ["value", "madison"], ["value", "austin"], ["value", "chicago"], ["value", "seattle"], ["button", "true", "id", "open-date-input"], ["id", "date-input-popover", "trigger", "open-date-input", "side", "top", "alignment", "end", 3, "showBackdrop"], [1, "ion-text-end"], ["max", "2056", "presentation", "date", 3, "ngModel", "ngModelChange"]], template: function AboutPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-menu-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-buttons", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AboutPage_Template_ion_button_click_6_listener($event) { return ctx.presentPopover($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "ion-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " ksdhjlkghsdlkajglkjsdgs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-list", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Ubicacion prac ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ion-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AboutPage_Template_ion_select_ngModelChange_24_listener($event) { return ctx.location = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-select-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Chihuahua, Mx");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ion-select-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Chihuahua, Mx");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ion-select-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Camargo, Mx");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ion-select-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "wena, Mx");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ion-item", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "ion-text", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](38, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "ion-popover", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, AboutPage_ng_template_40_Template, 1, 1, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Internet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "ion-list", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " Wifi network ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "ion-label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](49, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, " Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "ion-label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, " itchii ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx.location === "madison" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](15, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx.location === "austin" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](16, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx.location === "chicago" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](17, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx.location === "seattle" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](18, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.location)("interfaceOptions", ctx.selectOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](38, 9, ctx.conferenceDate, "mediumDate"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showBackdrop", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ica", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](49, 12, ctx.conferenceDate, "y"), " ");
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonIcon, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.SelectValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonPopover, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonDatetime], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe], styles: ["ion-toolbar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  --background: transparent;\n  --color: white;\n}\n\nion-toolbar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%], ion-toolbar[_ngcontent-%COMP%]   ion-back-button[_ngcontent-%COMP%], ion-toolbar[_ngcontent-%COMP%]   ion-menu-button[_ngcontent-%COMP%] {\n  --color: white;\n}\n\n.about-header[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 30%;\n}\n\n.about-header[_ngcontent-%COMP%]   .about-image[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  opacity: 0;\n  transition: opacity 500ms ease-in-out;\n}\n\n.about-header[_ngcontent-%COMP%]   .madison[_ngcontent-%COMP%] {\n  background-image: url(/assets/img/about/madison.jpg);\n}\n\n.about-header[_ngcontent-%COMP%]   .austin[_ngcontent-%COMP%] {\n  background-image: url(/assets/img/about/austin.jpg);\n}\n\n.about-header[_ngcontent-%COMP%]   .chicago[_ngcontent-%COMP%] {\n  background-image: url(/assets/img/about/chicago.jpg);\n}\n\n.about-header[_ngcontent-%COMP%]   .seattle[_ngcontent-%COMP%] {\n  background-image: url(/assets/img/about/seattle.jpg);\n}\n\n.about-info[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-top: -10px;\n  border-radius: 10px;\n  background: var(--ion-background-color, #fff);\n}\n\n.about-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n\n.about-info[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  padding-top: 0;\n}\n\n.about-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 130%;\n  color: var(--ion-color-dark);\n}\n\n.about-info[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-inline-end: 32px;\n}\n\n#date-input-popover[_ngcontent-%COMP%] {\n  --offset-y: -var(--ion-safe-area-bottom);\n  --max-width: 90%;\n  --width: 336px;\n}\n\n\n\n.ios[_ngcontent-%COMP%]   .about-info[_ngcontent-%COMP%] {\n  --ion-padding: 19px;\n}\n\n.ios[_ngcontent-%COMP%]   .about-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUVBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUVBLHlCQUFBO0VBQ0EsY0FBQTtBQURGOztBQUlBOzs7RUFHRSxjQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUVBLFdBQUE7RUFDQSxXQUFBO0FBRkY7O0FBS0E7RUFDRSxrQkFBQTtFQUVBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFFQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFFQSxVQUFBO0VBRUEscUNBQUE7QUFORjs7QUFTQTtFQUNFLG9EQUFBO0FBTkY7O0FBUUE7RUFDRSxtREFBQTtBQUxGOztBQU9BO0VBQ0Usb0RBQUE7QUFKRjs7QUFNQTtFQUNFLG9EQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2Q0FBQTtBQUhGOztBQU1BO0VBQ0UsYUFBQTtBQUhGOztBQU1BO0VBQ0UsY0FBQTtBQUhGOztBQU1BO0VBQ0UsaUJBQUE7RUFFQSw0QkFBQTtBQUpGOztBQU9BO0VBQ0UsdUJBQUE7QUFKRjs7QUFPQTtFQUNFLHdDQUFBO0VBRUEsZ0JBQUE7RUFDQSxjQUFBO0FBTEY7O0FBUUE7O0VBQUE7O0FBSUE7RUFDRSxtQkFBQTtBQU5GOztBQVNBO0VBQ0UsZ0JBQUE7QUFORiIsImZpbGUiOiJhYm91dC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcblxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbixcbmlvbi10b29sYmFyIGlvbi1iYWNrLWJ1dHRvbixcbmlvbi10b29sYmFyIGlvbi1tZW51LWJ1dHRvbiB7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG4uYWJvdXQtaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwJTtcbn1cblxuLmFib3V0LWhlYWRlciAuYWJvdXQtaW1hZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblxuICBvcGFjaXR5OiAwO1xuXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgNTAwbXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5hYm91dC1oZWFkZXIgLm1hZGlzb24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvYWJvdXQvbWFkaXNvbi5qcGcpO1xufVxuLmFib3V0LWhlYWRlciAuYXVzdGluIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2Fib3V0L2F1c3Rpbi5qcGcpO1xufVxuLmFib3V0LWhlYWRlciAuY2hpY2FnbyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZy9hYm91dC9jaGljYWdvLmpwZyk7XG59XG4uYWJvdXQtaGVhZGVyIC5zZWF0dGxlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2Fib3V0L3NlYXR0bGUuanBnKTtcbn1cblxuLmFib3V0LWluZm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZik7XG59XG5cbi5hYm91dC1pbmZvIGgzIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLmFib3V0LWluZm8gaW9uLWxpc3Qge1xuICBwYWRkaW5nLXRvcDogMDtcbn1cblxuLmFib3V0LWluZm8gcCB7XG4gIGxpbmUtaGVpZ2h0OiAxMzAlO1xuXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59XG5cbi5hYm91dC1pbmZvIGlvbi1pY29uIHtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDMycHg7XG59XG5cbiNkYXRlLWlucHV0LXBvcG92ZXIge1xuICAtLW9mZnNldC15OiAtdmFyKC0taW9uLXNhZmUtYXJlYS1ib3R0b20pO1xuXG4gIC0tbWF4LXdpZHRoOiA5MCU7XG4gIC0td2lkdGg6IDMzNnB4O1xufVxuXG4vKlxuICogaU9TIE9ubHlcbiAqL1xuXG4uaW9zIC5hYm91dC1pbmZvIHtcbiAgLS1pb24tcGFkZGluZzogMTlweDtcbn1cblxuLmlvcyAuYWJvdXQtaW5mbyBoMyB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4iXX0= */"] });


/***/ }),

/***/ 2357:
/*!*************************************************!*\
  !*** ./src/app/pages/map/map-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapPageRoutingModule": () => (/* binding */ MapPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map */ 1421);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);




const routes = [
    {
        path: '',
        component: _map__WEBPACK_IMPORTED_MODULE_0__.MapPage
    }
];
class MapPageRoutingModule {
}
MapPageRoutingModule.ɵfac = function MapPageRoutingModule_Factory(t) { return new (t || MapPageRoutingModule)(); };
MapPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MapPageRoutingModule });
MapPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MapPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 1662:
/*!*****************************************!*\
  !*** ./src/app/pages/map/map.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapModule": () => (/* binding */ MapModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map */ 1421);
/* harmony import */ var _map_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map-routing.module */ 2357);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);





class MapModule {
}
MapModule.ɵfac = function MapModule_Factory(t) { return new (t || MapModule)(); };
MapModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MapModule });
MapModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _map_routing_module__WEBPACK_IMPORTED_MODULE_1__.MapPageRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MapModule, { declarations: [_map__WEBPACK_IMPORTED_MODULE_0__.MapPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
        _map_routing_module__WEBPACK_IMPORTED_MODULE_1__.MapPageRoutingModule] }); })();


/***/ }),

/***/ 1421:
/*!**********************************!*\
  !*** ./src/app/pages/map/map.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapPage": () => (/* binding */ MapPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _providers_conference_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../providers/conference-data */ 5591);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _map_dark_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map-dark-style */ 7952);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 8099);









const _c0 = ["mapCanvas"];
class MapPage {
    constructor(doc, confData, platform) {
        this.doc = doc;
        this.confData = confData;
        this.platform = platform;
    }
    ngAfterViewInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const appEl = this.doc.querySelector('ion-app');
            let isDark = false;
            let style = [];
            if (appEl.classList.contains('dark-theme')) {
                style = _map_dark_style__WEBPACK_IMPORTED_MODULE_1__.darkStyle;
            }
            const googleMaps = yield getGoogleMaps('YOUR_API_KEY_HERE');
            let map;
            this.confData.getMap().subscribe((mapData) => {
                const mapEle = this.mapElement.nativeElement;
                map = new googleMaps.Map(mapEle, {
                    center: mapData.find((d) => d.center),
                    zoom: 16,
                    styles: style
                });
                mapData.forEach((markerData) => {
                    const infoWindow = new googleMaps.InfoWindow({
                        content: `<h5>${markerData.name}</h5>`
                    });
                    const marker = new googleMaps.Marker({
                        position: markerData,
                        map,
                        title: markerData.name
                    });
                    marker.addListener('click', () => {
                        infoWindow.open(map, marker);
                    });
                });
                googleMaps.event.addListenerOnce(map, 'idle', () => {
                    mapEle.classList.add('show-map');
                });
            });
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.attributeName === 'class') {
                        const el = mutation.target;
                        isDark = el.classList.contains('dark-theme');
                        if (map && isDark) {
                            map.setOptions({ styles: _map_dark_style__WEBPACK_IMPORTED_MODULE_1__.darkStyle });
                        }
                        else if (map) {
                            map.setOptions({ styles: [] });
                        }
                    }
                });
            });
            observer.observe(appEl, {
                attributes: true
            });
        });
    }
}
MapPage.ɵfac = function MapPage_Factory(t) { return new (t || MapPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_providers_conference_data__WEBPACK_IMPORTED_MODULE_0__.ConferenceData), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform)); };
MapPage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MapPage, selectors: [["page-map"]], viewQuery: function MapPage_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.mapElement = _t.first);
    } }, decls: 9, vars: 0, consts: [["slot", "start"], [1, "map-canvas"], ["mapCanvas", ""]], template: function MapPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "ion-menu-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Map");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent], styles: [".map-canvas[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: transparent;\n  opacity: 0;\n  transition: opacity 150ms ease-in;\n}\n\n.show-map[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLDZCQUFBO0VBRUEsVUFBQTtFQUNBLGlDQUFBO0FBRkY7O0FBS0E7RUFDRSxVQUFBO0FBRkYiLCJmaWxlIjoibWFwLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwLWNhbnZhcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMTUwbXMgZWFzZS1pbjtcbn1cblxuLnNob3ctbWFwIHtcbiAgb3BhY2l0eTogMTtcbn1cbiJdfQ== */"] });
function getGoogleMaps(apiKey) {
    const win = window;
    const googleModule = win.google;
    if (googleModule && googleModule.maps) {
        return Promise.resolve(googleModule.maps);
    }
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.31`;
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        script.onload = () => {
            const googleModule2 = win.google;
            if (googleModule2 && googleModule2.maps) {
                resolve(googleModule2.maps);
            }
            else {
                reject('google maps not available');
            }
        };
    });
}


/***/ }),

/***/ 5917:
/*!*********************************************************!*\
  !*** ./src/app/pages/polizas/polizas-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PolizaPageRoutingModule": () => (/* binding */ PolizaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _polizas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polizas */ 7783);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);




const routes = [
    {
        path: '',
        component: _polizas__WEBPACK_IMPORTED_MODULE_0__.PolizaPage
    }
];
class PolizaPageRoutingModule {
}
PolizaPageRoutingModule.ɵfac = function PolizaPageRoutingModule_Factory(t) { return new (t || PolizaPageRoutingModule)(); };
PolizaPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PolizaPageRoutingModule });
PolizaPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PolizaPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 4972:
/*!*************************************************!*\
  !*** ./src/app/pages/polizas/polizas.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PolizaModule": () => (/* binding */ PolizaModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _polizas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polizas */ 7783);
/* harmony import */ var _polizas_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./polizas-routing.module */ 5917);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);






class PolizaModule {
}
PolizaModule.ɵfac = function PolizaModule_Factory(t) { return new (t || PolizaModule)(); };
PolizaModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: PolizaModule });
PolizaModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _polizas_routing_module__WEBPACK_IMPORTED_MODULE_1__.PolizaPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PolizaModule, { declarations: [_polizas__WEBPACK_IMPORTED_MODULE_0__.PolizaPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _polizas_routing_module__WEBPACK_IMPORTED_MODULE_1__.PolizaPageRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule] }); })();


/***/ }),

/***/ 9195:
/*!**********************************************************!*\
  !*** ./src/app/pages/schedule-filter/schedule-filter.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScheduleFilterPage": () => (/* binding */ ScheduleFilterPage)
/* harmony export */ });
/* harmony import */ var _providers_conference_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../providers/conference-data */ 5591);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8346);







function ScheduleFilterPage_ion_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScheduleFilterPage_ion_button_3_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.dismiss(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ScheduleFilterPage_ion_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScheduleFilterPage_ion_button_4_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.selectAll(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ScheduleFilterPage_ion_item_14_ion_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-icon", 11);
} if (rf & 2) {
    const track_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", track_r8.icon);
} }
function ScheduleFilterPage_ion_item_14_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ScheduleFilterPage_ion_item_14_ion_icon_2_Template, 1, 1, "ion-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-checkbox", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ScheduleFilterPage_ion_item_14_Template_ion_checkbox_ngModelChange_5_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const track_r8 = restoredCtx.$implicit; return track_r8.isChecked = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const track_r8 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("track", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 4, track_r8.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.ios);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](track_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", track_r8.isChecked);
} }
function ScheduleFilterPage_ion_footer_15_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-footer", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScheduleFilterPage_ion_footer_15_Template_ion_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.selectAll(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Deselect All");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-buttons", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScheduleFilterPage_ion_footer_15_Template_ion_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.selectAll(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Select All");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class ScheduleFilterPage {
    constructor(confData, config, modalCtrl, navParams) {
        this.confData = confData;
        this.config = config;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.tracks = [];
    }
    ionViewWillEnter() {
        this.ios = this.config.get('mode') === `ios`;
        // passed in array of track names that should be excluded (unchecked)
        const excludedTrackNames = this.navParams.get('excludedTracks');
        this.confData.getTracks().subscribe((tracks) => {
            tracks.forEach(track => {
                this.tracks.push({
                    name: track.name,
                    icon: track.icon,
                    isChecked: (excludedTrackNames.indexOf(track.name) === -1)
                });
            });
        });
    }
    selectAll(check) {
        // set all to checked or unchecked
        this.tracks.forEach(track => {
            track.isChecked = check;
        });
    }
    applyFilters() {
        // Pass back a new array of track names to exclude
        const excludedTrackNames = this.tracks.filter(c => !c.isChecked).map(c => c.name);
        this.dismiss(excludedTrackNames);
    }
    dismiss(data) {
        // using the injected ModalController this page
        // can "dismiss" itself and pass back data
        this.modalCtrl.dismiss(data);
    }
}
ScheduleFilterPage.ɵfac = function ScheduleFilterPage_Factory(t) { return new (t || ScheduleFilterPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_conference_data__WEBPACK_IMPORTED_MODULE_0__.ConferenceData), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.Config), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavParams)); };
ScheduleFilterPage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ScheduleFilterPage, selectors: [["page-schedule-filter"]], decls: 16, vars: 5, consts: [["translucent", "true"], ["slot", "start"], [3, "click", 4, "ngIf"], ["slot", "end"], ["strong", "", 3, "click"], [3, "lines"], [4, "ngFor", "ngForOf"], ["translucent", "true", 4, "ngIf"], [3, "click"], ["slot", "start", "color", "medium", 3, "name", 4, "ngIf"], [3, "ngModel", "ngModelChange"], ["slot", "start", "color", "medium", 3, "name"]], template: function ScheduleFilterPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ScheduleFilterPage_ion_button_3_Template, 2, 0, "ion-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ScheduleFilterPage_ion_button_4_Template, 2, 0, "ion-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Filter Sessions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-buttons", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScheduleFilterPage_Template_ion_button_click_8_listener() { return ctx.applyFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Done");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-list-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Tracks");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ScheduleFilterPage_ion_item_14_Template, 6, 6, "ion-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ScheduleFilterPage_ion_footer_15_Template, 8, 0, "ion-footer", 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ios);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.ios);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("lines", ctx.ios ? "inset" : "full");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tracks);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ios);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonButtons, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonListHeader, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonCheckbox, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.BooleanValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonFooter], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.LowerCasePipe], styles: [".md[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  letter-spacing: 0;\n}\n.md[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%] {\n  --background-checked: transparent;\n  --border-color: transparent;\n  --border-color-checked: transparent;\n  --checkmark-color: var(--ion-color-primary);\n}\n.md[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  background: inherit;\n}\n\n.ios[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.ios[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaGVkdWxlLWZpbHRlci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUFBO0FBSUE7RUFDRSwwQkFBQTtFQUNBLGlCQUFBO0FBQUY7QUFHQTtFQUNFLGlDQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLDJDQUFBO0FBQUY7QUFHQTtFQUNFLG1CQUFBO0FBQUY7QUFJQTs7RUFBQTtBQUlBO0VBQ0UsZ0JBQUE7QUFGRjtBQUtBO0VBQ0UsK0JBQUE7QUFGRiIsImZpbGUiOiJzY2hlZHVsZS1maWx0ZXIuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBNYXRlcmlhbCBEZXNpZ25cbiAqL1xuXG4ubWQgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbiB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cblxuLm1kIGlvbi1jaGVja2JveCB7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcbiAgLS1jaGVja21hcmstY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLm1kIGlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuXG4vKlxuICogaU9TXG4gKi9cblxuLmlvcyBpb24tbGlzdC1oZWFkZXIge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uaW9zIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4iXX0= */"] });


/***/ }),

/***/ 3070:
/*!***********************************************************!*\
  !*** ./src/app/pages/schedule/schedule-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchedulePageRoutingModule": () => (/* binding */ SchedulePageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule */ 7346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);




const routes = [
    {
        path: '',
        component: _schedule__WEBPACK_IMPORTED_MODULE_0__.SchedulePage
    }
];
class SchedulePageRoutingModule {
}
SchedulePageRoutingModule.ɵfac = function SchedulePageRoutingModule_Factory(t) { return new (t || SchedulePageRoutingModule)(); };
SchedulePageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SchedulePageRoutingModule });
SchedulePageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SchedulePageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5805:
/*!***************************************************!*\
  !*** ./src/app/pages/schedule/schedule.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScheduleModule": () => (/* binding */ ScheduleModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule */ 7346);
/* harmony import */ var _schedule_filter_schedule_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../schedule-filter/schedule-filter */ 9195);
/* harmony import */ var _schedule_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schedule-routing.module */ 3070);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);







class ScheduleModule {
}
ScheduleModule.ɵfac = function ScheduleModule_Factory(t) { return new (t || ScheduleModule)(); };
ScheduleModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ScheduleModule });
ScheduleModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _schedule_routing_module__WEBPACK_IMPORTED_MODULE_2__.SchedulePageRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ScheduleModule, { declarations: [_schedule__WEBPACK_IMPORTED_MODULE_0__.SchedulePage,
        _schedule_filter_schedule_filter__WEBPACK_IMPORTED_MODULE_1__.ScheduleFilterPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
        _schedule_routing_module__WEBPACK_IMPORTED_MODULE_2__.SchedulePageRoutingModule] }); })();


/***/ }),

/***/ 7346:
/*!********************************************!*\
  !*** ./src/app/pages/schedule/schedule.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchedulePage": () => (/* binding */ SchedulePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _schedule_filter_schedule_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../schedule-filter/schedule-filter */ 9195);
/* harmony import */ var _providers_conference_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/conference-data */ 5591);
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/user-data */ 3942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 8346);













const _c0 = ["scheduleList"];
function SchedulePage_ion_buttons_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-buttons", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ion-menu-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SchedulePage_ion_segment_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-segment", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SchedulePage_ion_segment_3_Template_ion_segment_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r10.segment = $event; })("ionChange", function SchedulePage_ion_segment_3_Template_ion_segment_ionChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r12.updateSchedule(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-segment-button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ion-segment-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Favorites ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r1.segment);
} }
function SchedulePage_ion_title_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Agenda");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SchedulePage_ion_searchbar_5_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-searchbar", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SchedulePage_ion_searchbar_5_Template_ion_searchbar_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r13.queryText = $event; })("ionChange", function SchedulePage_ion_searchbar_5_Template_ion_searchbar_ionChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r15.updateSchedule(); })("ionCancel", function SchedulePage_ion_searchbar_5_Template_ion_searchbar_ionCancel_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r16.showSearchbar = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r3.queryText);
} }
function SchedulePage_ion_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SchedulePage_ion_button_7_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r17.showSearchbar = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ion-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SchedulePage_ion_button_8_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SchedulePage_ion_button_8_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ion-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SchedulePage_ion_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SchedulePage_ion_button_8_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r21.presentFilter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SchedulePage_ion_button_8_span_1_Template, 2, 0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SchedulePage_ion_button_8_span_2_Template, 2, 0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.ios);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r5.ios);
} }
function SchedulePage_ion_toolbar_9_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-toolbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-segment", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SchedulePage_ion_toolbar_9_Template_ion_segment_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r23.segment = $event; })("ionChange", function SchedulePage_ion_toolbar_9_Template_ion_segment_ionChange_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r25.updateSchedule(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-segment-button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-segment-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Favorites ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r6.segment);
} }
function SchedulePage_ion_item_group_19_ion_item_sliding_4_ion_item_option_10_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-item-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SchedulePage_ion_item_group_19_ion_item_sliding_4_ion_item_option_10_Template_ion_item_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r33); const session_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r32.addFavorite(_r29, session_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Favorite ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SchedulePage_ion_item_group_19_ion_item_sliding_4_ion_item_option_11_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-item-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SchedulePage_ion_item_group_19_ion_item_sliding_4_ion_item_option_11_Template_ion_item_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r36); const session_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r35.removeFavorite(_r29, session_r28, "Remove Favorite"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Remove ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SchedulePage_ion_item_group_19_ion_item_sliding_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-item-sliding", 11, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ion-item", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "ion-item-options");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, SchedulePage_ion_item_group_19_ion_item_sliding_4_ion_item_option_10_Template, 2, 0, "ion-item-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, SchedulePage_ion_item_group_19_ion_item_sliding_4_ion_item_option_11_Template, 2, 0, "ion-item-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const session_r28 = ctx.$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", session_r28.hide);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("track", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 9, session_r28.tracks[0]));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("routerLink", "/app/tabs/schedule/session/", session_r28.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](session_r28.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"](" ", session_r28.timeStart, " \u2014 ", session_r28.timeEnd, ": ", session_r28.location, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r27.segment === "all");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r27.segment === "favorites");
} }
function SchedulePage_ion_item_group_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-item-group", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-item-divider", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, SchedulePage_ion_item_group_19_ion_item_sliding_4_Template, 12, 11, "ion-item-sliding", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", group_r26.hide);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", group_r26.time, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", group_r26.sessions);
} }
class SchedulePage {
    constructor(alertCtrl, confData, loadingCtrl, modalCtrl, router, routerOutlet, toastCtrl, user, config) {
        this.alertCtrl = alertCtrl;
        this.confData = confData;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.routerOutlet = routerOutlet;
        this.toastCtrl = toastCtrl;
        this.user = user;
        this.config = config;
        this.dayIndex = 0;
        this.queryText = '';
        this.segment = 'all';
        this.excludeTracks = [];
        this.shownSessions = [];
        this.groups = [];
    }
    ngOnInit() {
        this.updateSchedule();
        this.ios = this.config.get('mode') === 'ios';
    }
    updateSchedule() {
        // Close any open sliding items when the schedule updates
        if (this.scheduleList) {
            this.scheduleList.closeSlidingItems();
        }
        this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe((data) => {
            this.shownSessions = data.shownSessions;
            this.groups = data.groups;
        });
    }
    presentFilter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _schedule_filter_schedule_filter__WEBPACK_IMPORTED_MODULE_0__.ScheduleFilterPage,
                swipeToClose: true,
                presentingElement: this.routerOutlet.nativeEl,
                componentProps: { excludedTracks: this.excludeTracks }
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            if (data) {
                this.excludeTracks = data;
                this.updateSchedule();
            }
        });
    }
    addFavorite(slidingItem, sessionData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (this.user.hasFavorite(sessionData.name)) {
                // Prompt to remove favorite
                this.removeFavorite(slidingItem, sessionData, 'Favorite already added');
            }
            else {
                // Add as a favorite
                this.user.addFavorite(sessionData.name);
                // Close the open item
                slidingItem.close();
                // Create a toast
                const toast = yield this.toastCtrl.create({
                    header: `${sessionData.name} was successfully added as a favorite.`,
                    duration: 3000,
                    buttons: [{
                            text: 'Close',
                            role: 'cancel'
                        }]
                });
                // Present the toast at the bottom of the page
                yield toast.present();
            }
        });
    }
    removeFavorite(slidingItem, sessionData, title) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: title,
                message: 'Would you like to remove this session from your favorites?',
                buttons: [
                    {
                        text: 'Cancel',
                        handler: () => {
                            // they clicked the cancel button, do not remove the session
                            // close the sliding item and hide the option buttons
                            slidingItem.close();
                        }
                    },
                    {
                        text: 'Remove',
                        handler: () => {
                            // they want to remove this session from their favorites
                            this.user.removeFavorite(sessionData.name);
                            this.updateSchedule();
                            // close the sliding item and hide the option buttons
                            slidingItem.close();
                        }
                    }
                ]
            });
            // now present the alert on top of all other content
            yield alert.present();
        });
    }
    openSocial(network, fab) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: `Posting to ${network}`,
                duration: (Math.random() * 1000) + 500
            });
            yield loading.present();
            yield loading.onWillDismiss();
            fab.close();
        });
    }
}
SchedulePage.ɵfac = function SchedulePage_Factory(t) { return new (t || SchedulePage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_providers_conference_data__WEBPACK_IMPORTED_MODULE_1__.ConferenceData), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRouterOutlet), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_providers_user_data__WEBPACK_IMPORTED_MODULE_2__.UserData), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Config)); };
SchedulePage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SchedulePage, selectors: [["page-schedule"]], viewQuery: function SchedulePage_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.scheduleList = _t.first);
    } }, decls: 35, vars: 11, consts: [["translucent", "true"], ["slot", "start", 4, "ngIf"], [3, "ngModel", "ngModelChange", "ionChange", 4, "ngIf"], [4, "ngIf"], ["showCancelButton", "always", "placeholder", "Search", 3, "ngModel", "ngModelChange", "ionChange", "ionCancel", 4, "ngIf"], ["slot", "end"], [3, "click", 4, "ngIf"], ["fullscreen", "true"], ["collapse", "condense"], ["size", "large"], ["placeholder", "Search", 3, "ngModel", "ngModelChange", "ionChange"], [3, "hidden"], ["scheduleList", ""], [3, "hidden", 4, "ngFor", "ngForOf"], ["slot", "fixed", "vertical", "bottom", "horizontal", "end"], ["fab", ""], ["name", "share-social"], ["side", "top"], ["color", "vimeo", 3, "click"], ["name", "logo-vimeo"], ["color", "instagram", 3, "click"], ["name", "logo-instagram"], ["color", "twitter", 3, "click"], ["name", "logo-twitter"], ["color", "facebook", 3, "click"], ["name", "logo-facebook"], ["slot", "start"], [3, "ngModel", "ngModelChange", "ionChange"], ["value", "all"], ["value", "favorites"], ["showCancelButton", "always", "placeholder", "Search", 3, "ngModel", "ngModelChange", "ionChange", "ionCancel"], [3, "click"], ["slot", "icon-only", "name", "search"], ["slot", "icon-only", "name", "options"], ["sticky", ""], ["slidingItem", ""], [3, "routerLink"], ["color", "favorite", 3, "click", 4, "ngIf"], ["color", "danger", 3, "click", 4, "ngIf"], ["color", "favorite", 3, "click"], ["color", "danger", 3, "click"]], template: function SchedulePage_Template(rf, ctx) { if (rf & 1) {
        const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SchedulePage_ion_buttons_2_Template, 2, 0, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SchedulePage_ion_segment_3_Template, 5, 1, "ion-segment", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, SchedulePage_ion_title_4_Template, 2, 0, "ion-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, SchedulePage_ion_searchbar_5_Template, 1, 1, "ion-searchbar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-buttons", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, SchedulePage_ion_button_7_Template, 2, 0, "ion-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, SchedulePage_ion_button_8_Template, 3, 2, "ion-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, SchedulePage_ion_toolbar_9_Template, 6, 1, "ion-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ion-content", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "ion-header", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "ion-title", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "ion-searchbar", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SchedulePage_Template_ion_searchbar_ngModelChange_16_listener($event) { return ctx.queryText = $event; })("ionChange", function SchedulePage_Template_ion_searchbar_ionChange_16_listener() { return ctx.updateSchedule(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "ion-list", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, SchedulePage_ion_item_group_19_Template, 5, 3, "ion-item-group", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "ion-list-header", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " No Sessions Found ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "ion-fab", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "ion-fab-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "ion-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "ion-fab-list", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "ion-fab-button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SchedulePage_Template_ion_fab_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](23); return ctx.openSocial("Vimeo", _r9); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "ion-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "ion-fab-button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SchedulePage_Template_ion_fab_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](23); return ctx.openSocial("Instagram", _r9); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "ion-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "ion-fab-button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SchedulePage_Template_ion_fab_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](23); return ctx.openSocial("Twitter", _r9); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "ion-icon", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "ion-fab-button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SchedulePage_Template_ion_fab_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](23); return ctx.openSocial("Facebook", _r9); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "ion-icon", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.showSearchbar);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.ios);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.ios && !ctx.showSearchbar);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showSearchbar);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.ios && !ctx.showSearchbar);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.showSearchbar);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.ios);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.queryText);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx.shownSessions === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.groups);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx.shownSessions > 0);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToolbar, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonList, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonListHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonFab, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonFabList, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonSegment, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonSegmentButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItemGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItemDivider, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItemSliding, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.RouterLinkDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItemOptions, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItemOption], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.LowerCasePipe], styles: ["ion-fab-button[_ngcontent-%COMP%] {\n  --background: var(--ion-color-step-150, #fff);\n  --background-hover: var(--ion-color-step-200, #f2f2f2);\n  --background-focused: var(--ion-color-step-250, #d9d9d9);\n  --color: var(--ion-color-primary, #3880ff);\n}\n\n\n\n.ios[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%] {\n  --background-activated: var(--ion-color-step-250, #d9d9d9);\n}\n\nion-item-sliding[track=ionic][_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  border-left: 2px solid var(--ion-color-primary);\n  padding-left: 10px;\n}\n\nion-item-sliding[track=angular][_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  border-left: 2px solid #ac282b;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=communication][_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  border-left: 2px solid #8e8d93;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=tooling][_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  border-left: 2px solid #fe4c52;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=services][_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  border-left: 2px solid #fd8b2d;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=design][_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  border-left: 2px solid #fed035;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=workshop][_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  border-left: 2px solid #69bb7b;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=food][_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  border-left: 2px solid #3bc7c4;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=documentation][_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  border-left: 2px solid #b16be3;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=navigation][_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  border-left: 2px solid #6600cc;\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaGVkdWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2Q0FBQTtFQUNBLHNEQUFBO0VBQ0Esd0RBQUE7RUFFQSwwQ0FBQTtBQUFGOztBQUdBOzs7RUFBQTs7QUFJQTtFQUNFLDBEQUFBO0FBQUY7O0FBaUJFO0VBQ0UsK0NBQUE7RUFDQSxrQkFBQTtBQWRKOztBQVlFO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtBQVRKOztBQU9FO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtBQUpKOztBQUVFO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUhFO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtBQU1KOztBQVJFO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtBQVdKOztBQWJFO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtBQWdCSjs7QUFsQkU7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0FBcUJKOztBQXZCRTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7QUEwQko7O0FBNUJFO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtBQStCSiIsImZpbGUiOiJzY2hlZHVsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWZhYi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2ZmZik7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMjAwLCAjZjJmMmYyKTtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTI1MCwgI2Q5ZDlkOSk7XG5cbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMzODgwZmYpO1xufVxuXG4vKlxuICogTWF0ZXJpYWwgRGVzaWduIHVzZXMgdGhlIHJpcHBsZSBmb3IgYWN0aXZhdGVkXG4gKiBzbyBvbmx5IHN0eWxlIHRoZSBpT1MgYWN0aXZhdGVkIGJhY2tncm91bmRcbiAqL1xuLmlvcyBpb24tZmFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTI1MCwgI2Q5ZDlkOSk7XG59XG5cbiRjYXRlZ29yaWVzOiAoXG4gIGlvbmljOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSksXG4gIGFuZ3VsYXI6ICNhYzI4MmIsXG4gIGNvbW11bmljYXRpb246ICM4ZThkOTMsXG4gIHRvb2xpbmc6ICNmZTRjNTIsXG4gIHNlcnZpY2VzOiAjZmQ4YjJkLFxuICBkZXNpZ246ICNmZWQwMzUsXG4gIHdvcmtzaG9wOiAjNjliYjdiLFxuICBmb29kOiAjM2JjN2M0LFxuICBkb2N1bWVudGF0aW9uOiAjYjE2YmUzLFxuICBuYXZpZ2F0aW9uOiAjNjYwMGNjXG4pO1xuXG5AZWFjaCAkdHJhY2ssICR2YWx1ZSBpbiBtYXAtcmVtb3ZlKCRjYXRlZ29yaWVzKSB7XG4gIGlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9JyN7JHRyYWNrfSddIGlvbi1sYWJlbCB7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAkdmFsdWU7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 5145:
/*!***********************************************************************!*\
  !*** ./src/app/pages/session-detail/session-detail-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionDetailPageRoutingModule": () => (/* binding */ SessionDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _session_detail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./session-detail */ 3945);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);




const routes = [
    {
        path: '',
        component: _session_detail__WEBPACK_IMPORTED_MODULE_0__.SessionDetailPage
    }
];
class SessionDetailPageRoutingModule {
}
SessionDetailPageRoutingModule.ɵfac = function SessionDetailPageRoutingModule_Factory(t) { return new (t || SessionDetailPageRoutingModule)(); };
SessionDetailPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SessionDetailPageRoutingModule });
SessionDetailPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SessionDetailPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 8467:
/*!***************************************************************!*\
  !*** ./src/app/pages/session-detail/session-detail.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionDetailModule": () => (/* binding */ SessionDetailModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _session_detail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./session-detail */ 3945);
/* harmony import */ var _session_detail_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./session-detail-routing.module */ 5145);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);





class SessionDetailModule {
}
SessionDetailModule.ɵfac = function SessionDetailModule_Factory(t) { return new (t || SessionDetailModule)(); };
SessionDetailModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SessionDetailModule });
SessionDetailModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _session_detail_routing_module__WEBPACK_IMPORTED_MODULE_1__.SessionDetailPageRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SessionDetailModule, { declarations: [_session_detail__WEBPACK_IMPORTED_MODULE_0__.SessionDetailPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
        _session_detail_routing_module__WEBPACK_IMPORTED_MODULE_1__.SessionDetailPageRoutingModule] }); })();


/***/ }),

/***/ 3945:
/*!********************************************************!*\
  !*** ./src/app/pages/session-detail/session-detail.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionDetailPage": () => (/* binding */ SessionDetailPage)
/* harmony export */ });
/* harmony import */ var _providers_conference_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../providers/conference-data */ 5591);
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/user-data */ 3942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);









function SessionDetailPage_ion_icon_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ion-icon", 11);
} }
function SessionDetailPage_ion_icon_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ion-icon", 12);
} }
function SessionDetailPage_div_11_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const track_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("session-track-" + track_r4.toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](track_r4);
} }
function SessionDetailPage_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, SessionDetailPage_div_11_span_3_Template, 2, 3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-text", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.session.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.session == null ? null : ctx_r2.session.tracks);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.session.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r2.session.timeStart, " \u2013 ", ctx_r2.session.timeEnd, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.session.location, " ");
} }
class SessionDetailPage {
    constructor(dataProvider, userProvider, route) {
        this.dataProvider = dataProvider;
        this.userProvider = userProvider;
        this.route = route;
        this.isFavorite = false;
        this.defaultHref = '';
    }
    ionViewWillEnter() {
        this.dataProvider.load().subscribe((data) => {
            if (data && data.schedule && data.schedule[0] && data.schedule[0].groups) {
                const sessionId = this.route.snapshot.paramMap.get('sessionId');
                for (const group of data.schedule[0].groups) {
                    if (group && group.sessions) {
                        for (const session of group.sessions) {
                            if (session && session.id === sessionId) {
                                this.session = session;
                                this.isFavorite = this.userProvider.hasFavorite(this.session.name);
                                break;
                            }
                        }
                    }
                }
            }
        });
    }
    ionViewDidEnter() {
        this.defaultHref = `/app/tabs/schedule`;
    }
    sessionClick(item) {
        console.log('Clicked', item);
    }
    toggleFavorite() {
        if (this.userProvider.hasFavorite(this.session.name)) {
            this.userProvider.removeFavorite(this.session.name);
            this.isFavorite = false;
        }
        else {
            this.userProvider.addFavorite(this.session.name);
            this.isFavorite = true;
        }
    }
    shareSession() {
        console.log('Clicked share session');
    }
}
SessionDetailPage.ɵfac = function SessionDetailPage_Factory(t) { return new (t || SessionDetailPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_providers_conference_data__WEBPACK_IMPORTED_MODULE_0__.ConferenceData), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_providers_user_data__WEBPACK_IMPORTED_MODULE_1__.UserData), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute)); };
SessionDetailPage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SessionDetailPage, selectors: [["page-session-detail"]], decls: 29, vars: 4, consts: [["slot", "start"], [3, "defaultHref"], ["slot", "end"], [3, "click"], ["slot", "icon-only", "name", "star-outline", 4, "ngIf"], ["slot", "icon-only", "name", "star", 4, "ngIf"], ["slot", "icon-only", "name", "share"], ["class", "ion-padding", 4, "ngIf"], ["button", "", 3, "click"], ["color", "primary"], ["slot", "end", "color", "primary", "size", "small", "name", "cloud-download"], ["slot", "icon-only", "name", "star-outline"], ["slot", "icon-only", "name", "star"], [1, "ion-padding"], [3, "class", 4, "ngFor", "ngForOf"], ["color", "medium"]], template: function SessionDetailPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-back-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-buttons", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SessionDetailPage_Template_ion_button_click_5_listener() { return ctx.toggleFavorite(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, SessionDetailPage_ion_icon_6_Template, 1, 0, "ion-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, SessionDetailPage_ion_icon_7_Template, 1, 0, "ion-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SessionDetailPage_Template_ion_button_click_8_listener() { return ctx.shareSession(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "ion-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, SessionDetailPage_div_11_Template, 10, 6, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ion-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ion-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SessionDetailPage_Template_ion_item_click_13_listener() { return ctx.sessionClick("watch"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Watch");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "ion-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SessionDetailPage_Template_ion_item_click_16_listener() { return ctx.sessionClick("add to calendar"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "ion-label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Add to Calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "ion-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SessionDetailPage_Template_ion_item_click_19_listener() { return ctx.sessionClick("mark as unwatched"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "ion-label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Mark as Unwatched");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "ion-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SessionDetailPage_Template_ion_item_click_22_listener() { return ctx.sessionClick("download video"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "ion-label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Download Video");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "ion-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "ion-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SessionDetailPage_Template_ion_item_click_26_listener() { return ctx.sessionClick("leave feedback"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "ion-label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Leave Feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("defaultHref", ctx.defaultHref);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isFavorite);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isFavorite);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.session);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonBackButtonDelegate, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButton, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonLabel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonText], styles: [".session-track-ionic[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n\n.session-track-angular[_ngcontent-%COMP%] {\n  color: var(--ion-color-angular);\n}\n\n.session-track-communication[_ngcontent-%COMP%] {\n  color: var(--ion-color-communication);\n}\n\n.session-track-tooling[_ngcontent-%COMP%] {\n  color: var(--ion-color-tooling);\n}\n\n.session-track-services[_ngcontent-%COMP%] {\n  color: var(--ion-color-services);\n}\n\n.session-track-design[_ngcontent-%COMP%] {\n  color: var(--ion-color-design);\n}\n\n.session-track-workshop[_ngcontent-%COMP%] {\n  color: var(--ion-color-workshop);\n}\n\n.session-track-food[_ngcontent-%COMP%] {\n  color: var(--ion-color-food);\n}\n\n.session-track-documentation[_ngcontent-%COMP%] {\n  color: var(--ion-color-documentation);\n}\n\n.session-track-navigation[_ngcontent-%COMP%] {\n  color: var(--ion-color-navigation);\n}\n\n\n\n.show-favorite[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.icon-heart-empty[_ngcontent-%COMP%], .icon-heart[_ngcontent-%COMP%] {\n  --border-radius: 50%;\n  --padding-start: 0;\n  --padding-end: 0;\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  width: 48px;\n  height: 48px;\n  font-size: 16px;\n  transition: transform 300ms ease;\n}\n\n.icon-heart-empty[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n\n.icon-heart[_ngcontent-%COMP%] {\n  transform: scale(0);\n}\n\n.show-favorite[_ngcontent-%COMP%]   .icon-heart[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n\n.show-favorite[_ngcontent-%COMP%]   .icon-heart-empty[_ngcontent-%COMP%] {\n  transform: scale(0);\n}\n\nh1[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlc3Npb24tZGV0YWlsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBQTtBQUNGOztBQUVBO0VBQ0UsK0JBQUE7QUFDRjs7QUFFQTtFQUNFLHFDQUFBO0FBQ0Y7O0FBRUE7RUFDRSwrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0NBQUE7QUFDRjs7QUFFQTtFQUNFLDhCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQ0FBQTtBQUNGOztBQUVBO0VBQ0UsNEJBQUE7QUFDRjs7QUFFQTtFQUNFLHFDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQ0FBQTtBQUNGOztBQUVBOztFQUFBOztBQUlBO0VBQ0Usa0JBQUE7QUFBRjs7QUFHQTs7RUFFRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxrQkFBQTtFQUVBLFFBQUE7RUFDQSxVQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFFQSxlQUFBO0VBRUEsZ0NBQUE7QUFMRjs7QUFRQTtFQUNFLG1CQUFBO0FBTEY7O0FBUUE7RUFDRSxtQkFBQTtBQUxGOztBQVFBO0VBQ0UsbUJBQUE7QUFMRjs7QUFRQTtFQUNFLG1CQUFBO0FBTEY7O0FBUUE7RUFDRSxTQUFBO0FBTEYiLCJmaWxlIjoic2Vzc2lvbi1kZXRhaWwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZXNzaW9uLXRyYWNrLWlvbmljIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLnNlc3Npb24tdHJhY2stYW5ndWxhciB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItYW5ndWxhcik7XG59XG5cbi5zZXNzaW9uLXRyYWNrLWNvbW11bmljYXRpb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWNvbW11bmljYXRpb24pO1xufVxuXG4uc2Vzc2lvbi10cmFjay10b29saW5nIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10b29saW5nKTtcbn1cblxuLnNlc3Npb24tdHJhY2stc2VydmljZXMge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlcnZpY2VzKTtcbn1cblxuLnNlc3Npb24tdHJhY2stZGVzaWduIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kZXNpZ24pO1xufVxuXG4uc2Vzc2lvbi10cmFjay13b3Jrc2hvcCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd29ya3Nob3ApO1xufVxuXG4uc2Vzc2lvbi10cmFjay1mb29kIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1mb29kKTtcbn1cblxuLnNlc3Npb24tdHJhY2stZG9jdW1lbnRhdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZG9jdW1lbnRhdGlvbik7XG59XG5cbi5zZXNzaW9uLXRyYWNrLW5hdmlnYXRpb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW5hdmlnYXRpb24pO1xufVxuXG4vKiBGYXZvcml0ZSBJY29uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbi5zaG93LWZhdm9yaXRlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaWNvbi1oZWFydC1lbXB0eSxcbi5pY29uLWhlYXJ0IHtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgdG9wOiA1cHg7XG4gIHJpZ2h0OiA1cHg7XG5cbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcblxuICBmb250LXNpemU6IDE2cHg7XG5cbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2U7XG59XG5cbi5pY29uLWhlYXJ0LWVtcHR5IHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLmljb24taGVhcnQge1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xufVxuXG4uc2hvdy1mYXZvcml0ZSAuaWNvbi1oZWFydCB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5zaG93LWZhdm9yaXRlIC5pY29uLWhlYXJ0LWVtcHR5IHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbn1cblxuaDEge1xuICBtYXJnaW46IDA7XG59Il19 */"] });


/***/ }),

/***/ 6842:
/*!***********************************************************************!*\
  !*** ./src/app/pages/speaker-detail/speaker-detail-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpeakerDetailPageRoutingModule": () => (/* binding */ SpeakerDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _speaker_detail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./speaker-detail */ 3727);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);




const routes = [
    {
        path: '',
        component: _speaker_detail__WEBPACK_IMPORTED_MODULE_0__.SpeakerDetailPage
    }
];
class SpeakerDetailPageRoutingModule {
}
SpeakerDetailPageRoutingModule.ɵfac = function SpeakerDetailPageRoutingModule_Factory(t) { return new (t || SpeakerDetailPageRoutingModule)(); };
SpeakerDetailPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SpeakerDetailPageRoutingModule });
SpeakerDetailPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SpeakerDetailPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 6423:
/*!***************************************************************!*\
  !*** ./src/app/pages/speaker-detail/speaker-detail.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpeakerDetailModule": () => (/* binding */ SpeakerDetailModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _speaker_detail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./speaker-detail */ 3727);
/* harmony import */ var _speaker_detail_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./speaker-detail-routing.module */ 6842);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);





class SpeakerDetailModule {
}
SpeakerDetailModule.ɵfac = function SpeakerDetailModule_Factory(t) { return new (t || SpeakerDetailModule)(); };
SpeakerDetailModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SpeakerDetailModule });
SpeakerDetailModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _speaker_detail_routing_module__WEBPACK_IMPORTED_MODULE_1__.SpeakerDetailPageRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SpeakerDetailModule, { declarations: [_speaker_detail__WEBPACK_IMPORTED_MODULE_0__.SpeakerDetailPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
        _speaker_detail_routing_module__WEBPACK_IMPORTED_MODULE_1__.SpeakerDetailPageRoutingModule] }); })();


/***/ }),

/***/ 3727:
/*!********************************************************!*\
  !*** ./src/app/pages/speaker-detail/speaker-detail.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpeakerDetailPage": () => (/* binding */ SpeakerDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _providers_conference_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../providers/conference-data */ 5591);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 71);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8267);











function SpeakerDetailPage_ion_buttons_5_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-buttons", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SpeakerDetailPage_ion_buttons_5_Template_ion_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.openContact(ctx_r1.speaker); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "ion-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SpeakerDetailPage_ion_buttons_5_Template_ion_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.openSpeakerShare(ctx_r3.speaker); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "ion-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class SpeakerDetailPage {
    constructor(dataProvider, route, actionSheetCtrl, confData, inAppBrowser) {
        this.dataProvider = dataProvider;
        this.route = route;
        this.actionSheetCtrl = actionSheetCtrl;
        this.confData = confData;
        this.inAppBrowser = inAppBrowser;
    }
    ionViewWillEnter() {
        this.dataProvider.load().subscribe((data) => {
            const speakerId = this.route.snapshot.paramMap.get('speakerId');
            if (data && data.speakers) {
                for (const speaker of data.speakers) {
                    if (speaker && speaker.id === speakerId) {
                        this.speaker = speaker;
                        break;
                    }
                }
            }
        });
    }
    openExternalUrl(url) {
        this.inAppBrowser.create(url, '_blank');
    }
    openSpeakerShare(speaker) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetCtrl.create({
                header: 'Share ' + speaker.name,
                buttons: [
                    {
                        text: 'Copy Link',
                        handler: () => {
                            console.log('Copy link clicked on https://twitter.com/' + speaker.twitter);
                            if (window.cordova &&
                                window.cordova.plugins.clipboard) {
                                window.cordova.plugins.clipboard.copy('https://twitter.com/' + speaker.twitter);
                            }
                        }
                    },
                    {
                        text: 'Share via ...'
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    openContact(speaker) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const mode = 'ios'; // this.config.get('mode');
            const actionSheet = yield this.actionSheetCtrl.create({
                header: 'Contact ' + speaker.name,
                buttons: [
                    {
                        text: `Email ( ${speaker.email} )`,
                        icon: mode !== 'ios' ? 'mail' : null,
                        handler: () => {
                            window.open('mailto:' + speaker.email);
                        }
                    },
                    {
                        text: `Call ( ${speaker.phone} )`,
                        icon: mode !== 'ios' ? 'call' : null,
                        handler: () => {
                            window.open('tel:' + speaker.phone);
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
}
SpeakerDetailPage.ɵfac = function SpeakerDetailPage_Factory(t) { return new (t || SpeakerDetailPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_providers_conference_data__WEBPACK_IMPORTED_MODULE_0__.ConferenceData), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ActionSheetController), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_providers_conference_data__WEBPACK_IMPORTED_MODULE_0__.ConferenceData), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_1__.InAppBrowser)); };
SpeakerDetailPage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SpeakerDetailPage, selectors: [["page-speaker-detail"]], decls: 26, vars: 5, consts: [[1, "speaker-detail"], [1, "ion-no-border"], ["slot", "start"], ["defaultHref", "/app/tabs/speakers"], ["slot", "end", 4, "ngIf"], [1, "speaker-background"], [3, "src", "alt"], [1, "ion-padding", "speaker-detail"], ["color", "twitter", "button", "", 3, "click"], ["name", "logo-twitter"], ["color", "dark", "button", "", 3, "click"], ["name", "logo-github"], ["color", "instagram", "button", "", 3, "click"], ["name", "logo-instagram"], ["slot", "end"], [3, "click"], ["slot", "icon-only", "ios", "call-outline", "md", "call-sharp"], ["slot", "icon-only", "ios", "share-outline", "md", "share-sharp"]], template: function SpeakerDetailPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-buttons", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "ion-back-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, SpeakerDetailPage_ion_buttons_5_Template, 5, 0, "ion-buttons", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-chip", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SpeakerDetailPage_Template_ion_chip_click_14_listener() { return ctx.openExternalUrl("https://twitter.com/" + ctx.speaker.twitter); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "ion-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "ion-chip", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SpeakerDetailPage_Template_ion_chip_click_18_listener() { return ctx.openExternalUrl("https://github.com/ionic-team/ionic"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "ion-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "ion-chip", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SpeakerDetailPage_Template_ion_chip_click_22_listener() { return ctx.openExternalUrl("https://instagram.com/ionicframework"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "ion-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Instagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.speaker);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.speaker == null ? null : ctx.speaker.profilePic, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", ctx.speaker == null ? null : ctx.speaker.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.speaker == null ? null : ctx.speaker.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.speaker == null ? null : ctx.speaker.about, " Say hello on social media!");
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonBackButtonDelegate, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonChip, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton], styles: ["ion-toolbar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  --background: transparent;\n  --color: white;\n}\nion-toolbar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%], ion-toolbar[_ngcontent-%COMP%]   ion-back-button[_ngcontent-%COMP%], ion-toolbar[_ngcontent-%COMP%]   ion-menu-button[_ngcontent-%COMP%] {\n  --color: white;\n}\n.speaker-background[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  padding-top: var(--ion-safe-area-top);\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  height: calc(250px + var(--ion-safe-area-top));\n  background: center/cover url(/assets/img/speaker-background.png) no-repeat;\n}\n.speaker-background[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 70px;\n  border-radius: 50%;\n  margin-top: calc(-1 * var(--ion-safe-area-top));\n}\n.speaker-background[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 10px;\n  color: white;\n}\n.md[_ngcontent-%COMP%]   .speaker-background[_ngcontent-%COMP%] {\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;\n}\n.ios[_ngcontent-%COMP%]   .speaker-background[_ngcontent-%COMP%] {\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 16px;\n}\n\n.speaker-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-left: 6px;\n  margin-right: 6px;\n}\n.speaker-detail[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  background: var(--ion-color-step-150, #d7d8da);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwZWFrZXItZGV0YWlsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBQUE7QUFJQTtFQUNFLGtCQUFBO0VBRUEsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBRUEseUJBQUE7RUFDQSxjQUFBO0FBRkY7QUFLQTs7O0VBR0UsY0FBQTtBQUZGO0FBS0E7RUFDRSxrQkFBQTtFQUVBLGFBQUE7RUFFQSxxQ0FBQTtFQUVBLG1CQUFBO0VBQ0EsdUJBQUE7RUFFQSxzQkFBQTtFQUVBLDhDQUFBO0VBRUEsMEVBQUE7QUFSRjtBQVdBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsK0NBQUE7QUFSRjtBQVdBO0VBQ0Usa0JBQUE7RUFFQSxZQUFBO0VBRUEsWUFBQTtBQVZGO0FBYUE7RUFDRSx5SEFBQTtBQVZGO0FBYUE7RUFDRSw0Q0FBQTtBQVZGO0FBYUE7O0VBQUE7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFYRjtBQWNBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUVBLDhDQUFBO0FBWkYiLCJmaWxlIjoic3BlYWtlci1kZXRhaWwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTcGVha2VyIEJhY2tncm91bmRcbiAqL1xuXG5pb24tdG9vbGJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG5pb24tdG9vbGJhciBpb24tYnV0dG9uLFxuaW9uLXRvb2xiYXIgaW9uLWJhY2stYnV0dG9uLFxuaW9uLXRvb2xiYXIgaW9uLW1lbnUtYnV0dG9uIHtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbi5zcGVha2VyLWJhY2tncm91bmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgZGlzcGxheTogZmxleDtcblxuICBwYWRkaW5nLXRvcDogdmFyKC0taW9uLXNhZmUtYXJlYS10b3ApO1xuXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgaGVpZ2h0OiBjYWxjKDI1MHB4ICsgdmFyKC0taW9uLXNhZmUtYXJlYS10b3ApKTtcblxuICBiYWNrZ3JvdW5kOiBjZW50ZXIgLyBjb3ZlciB1cmwoL2Fzc2V0cy9pbWcvc3BlYWtlci1iYWNrZ3JvdW5kLnBuZykgbm8tcmVwZWF0O1xufVxuXG4uc3BlYWtlci1iYWNrZ3JvdW5kIGltZyB7XG4gIHdpZHRoOiA3MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi10b3A6IGNhbGMoLTEgKiB2YXIoLS1pb24tc2FmZS1hcmVhLXRvcCkpO1xufVxuXG4uc3BlYWtlci1iYWNrZ3JvdW5kIGgyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIGJvdHRvbTogMTBweDtcblxuICBjb2xvcjogd2hpdGU7XG59XG5cbi5tZCAuc3BlYWtlci1iYWNrZ3JvdW5kIHtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAzcHggMXB4IC0ycHgsIHJnYmEoMCwgMCwgMCwgMC4xNCkgMHB4IDJweCAycHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCAxcHggNXB4IDBweDtcbn1cblxuLmlvcyAuc3BlYWtlci1iYWNrZ3JvdW5kIHtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggNHB4IDE2cHg7XG59XG5cbi8qXG4gKiBTcGVha2VyIERldGFpbHNcbiAqL1xuXG4uc3BlYWtlci1kZXRhaWwgcCB7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xufVxuXG4uc3BlYWtlci1kZXRhaWwgaHIge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2Q3ZDhkYSk7XG59XG4iXX0= */"] });


/***/ }),

/***/ 6364:
/*!*******************************************************************!*\
  !*** ./src/app/pages/speaker-list/speaker-list-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpeakerListPageRoutingModule": () => (/* binding */ SpeakerListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _speaker_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./speaker-list */ 3956);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);




const routes = [
    {
        path: '',
        component: _speaker_list__WEBPACK_IMPORTED_MODULE_0__.SpeakerListPage
    }
];
class SpeakerListPageRoutingModule {
}
SpeakerListPageRoutingModule.ɵfac = function SpeakerListPageRoutingModule_Factory(t) { return new (t || SpeakerListPageRoutingModule)(); };
SpeakerListPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SpeakerListPageRoutingModule });
SpeakerListPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SpeakerListPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 1749:
/*!***********************************************************!*\
  !*** ./src/app/pages/speaker-list/speaker-list.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpeakerListModule": () => (/* binding */ SpeakerListModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _speaker_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./speaker-list */ 3956);
/* harmony import */ var _speaker_list_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./speaker-list-routing.module */ 6364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);





class SpeakerListModule {
}
SpeakerListModule.ɵfac = function SpeakerListModule_Factory(t) { return new (t || SpeakerListModule)(); };
SpeakerListModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SpeakerListModule });
SpeakerListModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _speaker_list_routing_module__WEBPACK_IMPORTED_MODULE_1__.SpeakerListPageRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SpeakerListModule, { declarations: [_speaker_list__WEBPACK_IMPORTED_MODULE_0__.SpeakerListPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
        _speaker_list_routing_module__WEBPACK_IMPORTED_MODULE_1__.SpeakerListPageRoutingModule] }); })();


/***/ }),

/***/ 3956:
/*!****************************************************!*\
  !*** ./src/app/pages/speaker-list/speaker-list.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpeakerListPage": () => (/* binding */ SpeakerListPage)
/* harmony export */ });
/* harmony import */ var _providers_conference_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../providers/conference-data */ 5591);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);






function SpeakerListPage_ion_col_13_ion_item_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const session_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/app/tabs/speakers/session/", session_r3.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](session_r3.name);
} }
function SpeakerListPage_ion_col_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-avatar", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-list", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, SpeakerListPage_ion_col_13_ion_item_13_Template, 4, 2, "ion-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-item", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const speaker_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/app/tabs/speakers/speaker-details/", speaker_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", speaker_r1.profilePic, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", speaker_r1.name + " profile picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](speaker_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](speaker_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", speaker_r1.sessions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/app/tabs/speakers/speaker-details/", speaker_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("About ", speaker_r1.name, "");
} }
class SpeakerListPage {
    constructor(confData) {
        this.confData = confData;
        this.speakers = [];
    }
    ionViewDidEnter() {
        this.confData.getSpeakers().subscribe((speakers) => {
            this.speakers = speakers;
        });
    }
}
SpeakerListPage.ɵfac = function SpeakerListPage_Factory(t) { return new (t || SpeakerListPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_conference_data__WEBPACK_IMPORTED_MODULE_0__.ConferenceData)); };
SpeakerListPage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SpeakerListPage, selectors: [["page-speaker-list"]], decls: 14, vars: 1, consts: [["slot", "start"], ["fullscreen", "true"], ["collapse", "condense"], ["size", "large"], ["fixed", ""], ["size", "12", "size-md", "6", 4, "ngFor", "ngForOf"], ["size", "12", "size-md", "6"], [1, "speaker-card"], ["detail", "false", "lines", "none", 1, "speaker-item", 3, "routerLink"], [3, "src", "alt"], ["lines", "none"], ["detail", "false", 3, "routerLink", 4, "ngFor", "ngForOf"], ["detail", "false", 3, "routerLink"]], template: function SpeakerListPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-menu-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Speakers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Speakers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-grid", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, SpeakerListPage_ion_col_13_Template, 18, 8, "ion-col", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.speakers);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonRow, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.RouterLinkDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonList], styles: [".speaker-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n\n\nion-col[_ngcontent-%COMP%]:not(:last-of-type)   .speaker-card[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.speaker-card[_ngcontent-%COMP%]   .speaker-item[_ngcontent-%COMP%] {\n  --min-height: 85px;\n}\n\n.speaker-card[_ngcontent-%COMP%]   .speaker-item[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n  letter-spacing: 0.02em;\n}\n\n.speaker-card[_ngcontent-%COMP%]   .speaker-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  letter-spacing: 0.02em;\n}\n\n.speaker-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.speaker-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  padding: 0;\n}\n\n.ios[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.md[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--ion-color-step-150, #d7d8da);\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwZWFrZXItbGlzdC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7O0VBQUE7O0FBR0E7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFFQSxVQUFBO0FBQUY7O0FBR0E7RUFDRSxtQkFBQTtBQUFGOztBQUdBO0VBQ0Usd0RBQUE7RUFFQSxVQUFBO0FBREYiLCJmaWxlIjoic3BlYWtlci1saXN0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3BlYWtlci1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLyogRHVlIHRvIHRoZSBmYWN0IHRoZSBjYXJkcyBhcmUgaW5zaWRlIG9mIGNvbHVtbnMgdGhlIG1hcmdpbnMgZG9uJ3Qgb3ZlcmxhcFxuICogcHJvcGVybHkgc28gd2Ugd2FudCB0byByZW1vdmUgdGhlIGV4dHJhIG1hcmdpbiBiZXR3ZWVuIGNhcmRzXG4gKi9cbmlvbi1jb2w6bm90KDpsYXN0LW9mLXR5cGUpIC5zcGVha2VyLWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uc3BlYWtlci1jYXJkIC5zcGVha2VyLWl0ZW0ge1xuICAtLW1pbi1oZWlnaHQ6IDg1cHg7XG59XG5cbi5zcGVha2VyLWNhcmQgLnNwZWFrZXItaXRlbSBoMiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbn1cblxuLnNwZWFrZXItY2FyZCAuc3BlYWtlci1pdGVtIHAge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XG59XG5cbi5zcGVha2VyLWNhcmQgaW9uLWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLnNwZWFrZXItY2FyZCBpb24tY2FyZC1jb250ZW50IHtcbiAgZmxleDogMSAxIGF1dG87XG5cbiAgcGFkZGluZzogMDtcbn1cblxuLmlvcyBpb24tbGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5tZCBpb24tbGlzdCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xuXG4gIHBhZGRpbmc6IDA7XG59Il19 */"] });


/***/ }),

/***/ 8210:
/*!*************************************************************!*\
  !*** ./src/app/pages/tabs-page/tabs-page-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-page */ 8826);
/* harmony import */ var _schedule_schedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../schedule/schedule */ 7346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);





const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [
            {
                path: 'schedule',
                children: [
                    {
                        path: '',
                        component: _schedule_schedule__WEBPACK_IMPORTED_MODULE_1__.SchedulePage,
                    },
                    {
                        path: 'session/:sessionId',
                        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../session-detail/session-detail.module */ 8467)).then(m => m.SessionDetailModule)
                    }
                ]
            },
            {
                path: 'speakers',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../speaker-list/speaker-list.module */ 1749)).then(m => m.SpeakerListModule)
                    },
                    {
                        path: 'session/:sessionId',
                        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../session-detail/session-detail.module */ 8467)).then(m => m.SessionDetailModule)
                    },
                    {
                        path: 'speaker-details/:speakerId',
                        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../speaker-detail/speaker-detail.module */ 6423)).then(m => m.SpeakerDetailModule)
                    }
                ]
            },
            {
                path: 'polizas',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../polizas/polizas.module */ 4972)).then(m => m.PolizaModule)
                    }
                ]
            },
            {
                path: 'about',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../about/about.module */ 654)).then(m => m.AboutModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/app/tabs/schedule',
                pathMatch: 'full'
            }
        ]
    }
];
class TabsPageRoutingModule {
}
TabsPageRoutingModule.ɵfac = function TabsPageRoutingModule_Factory(t) { return new (t || TabsPageRoutingModule)(); };
TabsPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TabsPageRoutingModule });
TabsPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TabsPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 8935:
/*!*****************************************************!*\
  !*** ./src/app/pages/tabs-page/tabs-page.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsModule": () => (/* binding */ TabsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-page */ 8826);
/* harmony import */ var _tabs_page_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs-page-routing.module */ 8210);
/* harmony import */ var _about_about_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../about/about.module */ 654);
/* harmony import */ var _map_map_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../map/map.module */ 1662);
/* harmony import */ var _schedule_schedule_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../schedule/schedule.module */ 5805);
/* harmony import */ var _session_detail_session_detail_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../session-detail/session-detail.module */ 8467);
/* harmony import */ var _speaker_detail_speaker_detail_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../speaker-detail/speaker-detail.module */ 6423);
/* harmony import */ var _speaker_list_speaker_list_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../speaker-list/speaker-list.module */ 1749);
/* harmony import */ var _polizas_polizas_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../polizas/polizas.module */ 4972);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 4001);












class TabsModule {
}
TabsModule.ɵfac = function TabsModule_Factory(t) { return new (t || TabsModule)(); };
TabsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: TabsModule });
TabsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _about_about_module__WEBPACK_IMPORTED_MODULE_2__.AboutModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule,
            _map_map_module__WEBPACK_IMPORTED_MODULE_3__.MapModule,
            _schedule_schedule_module__WEBPACK_IMPORTED_MODULE_4__.ScheduleModule,
            _session_detail_session_detail_module__WEBPACK_IMPORTED_MODULE_5__.SessionDetailModule,
            _speaker_detail_speaker_detail_module__WEBPACK_IMPORTED_MODULE_6__.SpeakerDetailModule,
            _speaker_list_speaker_list_module__WEBPACK_IMPORTED_MODULE_7__.SpeakerListModule,
            _tabs_page_routing_module__WEBPACK_IMPORTED_MODULE_1__.TabsPageRoutingModule,
            _polizas_polizas_module__WEBPACK_IMPORTED_MODULE_8__.PolizaModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](TabsModule, { declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage], imports: [_about_about_module__WEBPACK_IMPORTED_MODULE_2__.AboutModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule,
        _map_map_module__WEBPACK_IMPORTED_MODULE_3__.MapModule,
        _schedule_schedule_module__WEBPACK_IMPORTED_MODULE_4__.ScheduleModule,
        _session_detail_session_detail_module__WEBPACK_IMPORTED_MODULE_5__.SessionDetailModule,
        _speaker_detail_speaker_detail_module__WEBPACK_IMPORTED_MODULE_6__.SpeakerDetailModule,
        _speaker_list_speaker_list_module__WEBPACK_IMPORTED_MODULE_7__.SpeakerListModule,
        _tabs_page_routing_module__WEBPACK_IMPORTED_MODULE_1__.TabsPageRoutingModule,
        _polizas_polizas_module__WEBPACK_IMPORTED_MODULE_8__.PolizaModule] }); })();


/***/ }),

/***/ 8826:
/*!**********************************************!*\
  !*** ./src/app/pages/tabs-page/tabs-page.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 8099);


class TabsPage {
}
TabsPage.ɵfac = function TabsPage_Factory(t) { return new (t || TabsPage)(); };
TabsPage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabsPage, selectors: [["ng-component"]], decls: 18, vars: 0, consts: [["slot", "bottom"], ["tab", "schedule"], ["name", "calendar"], ["tab", "speakers"], ["name", "clipboard"], ["tab", "polizas"], ["name", "document-text-outline"], ["tab", "about"], ["name", "information-circle"]], template: function TabsPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-tab-bar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-tab-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Agenda/Pendientes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-tab-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ion-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Notas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-tab-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "ion-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Tesoreria");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-tab-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "ion-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Perfil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonTabs, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonTabBar, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonTabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonLabel], encapsulation: 2 });


/***/ }),

/***/ 5591:
/*!**********************************************!*\
  !*** ./src/app/providers/conference-data.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConferenceData": () => (/* binding */ ConferenceData)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 8252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8377);
/* harmony import */ var _user_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-data */ 3942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 3981);







class ConferenceData {
    constructor(http, user) {
        this.http = http;
        this.user = user;
    }
    load() {
        if (this.data) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.data);
        }
        else {
            return this.http
                .get('assets/data/data.json')
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(this.processData, this));
        }
    }
    processData(data) {
        // just some good 'ol JS fun with objects and arrays
        // build up the data by linking speakers to sessions
        this.data = data;
        // loop through each day in the schedule
        this.data.schedule.forEach((day) => {
            // loop through each timeline group in the day
            day.groups.forEach((group) => {
                // loop through each session in the timeline group
                group.sessions.forEach((session) => {
                    session.speakers = [];
                    if (session.speakerNames) {
                        session.speakerNames.forEach((speakerName) => {
                            const speaker = this.data.speakers.find((s) => s.name === speakerName);
                            if (speaker) {
                                session.speakers.push(speaker);
                                speaker.sessions = speaker.sessions || [];
                                speaker.sessions.push(session);
                            }
                        });
                    }
                });
            });
        });
        return this.data;
    }
    getTimeline(dayIndex, queryText = '', excludeTracks = [], segment = 'all') {
        return this.load().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((data) => {
            const day = data.schedule[dayIndex];
            day.shownSessions = 0;
            queryText = queryText.toLowerCase().replace(/,|\.|-/g, ' ');
            const queryWords = queryText.split(' ').filter(w => !!w.trim().length);
            day.groups.forEach((group) => {
                group.hide = true;
                group.sessions.forEach((session) => {
                    // check if this session should show or not
                    this.filterSession(session, queryWords, excludeTracks, segment);
                    if (!session.hide) {
                        // if this session is not hidden then this group should show
                        group.hide = false;
                        day.shownSessions++;
                    }
                });
            });
            return day;
        }));
    }
    filterSession(session, queryWords, excludeTracks, segment) {
        let matchesQueryText = false;
        if (queryWords.length) {
            // of any query word is in the session name than it passes the query test
            queryWords.forEach((queryWord) => {
                if (session.name.toLowerCase().indexOf(queryWord) > -1) {
                    matchesQueryText = true;
                }
            });
        }
        else {
            // if there are no query words then this session passes the query test
            matchesQueryText = true;
        }
        // if any of the sessions tracks are not in the
        // exclude tracks then this session passes the track test
        let matchesTracks = false;
        session.tracks.forEach((trackName) => {
            if (excludeTracks.indexOf(trackName) === -1) {
                matchesTracks = true;
            }
        });
        // if the segment is 'favorites', but session is not a user favorite
        // then this session does not pass the segment test
        let matchesSegment = false;
        if (segment === 'favorites') {
            if (this.user.hasFavorite(session.name)) {
                matchesSegment = true;
            }
        }
        else {
            matchesSegment = true;
        }
        // all tests must be true if it should not be hidden
        session.hide = !(matchesQueryText && matchesTracks && matchesSegment);
    }
    getSpeakers() {
        return this.load().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((data) => {
            return data.speakers.sort((a, b) => {
                const aName = a.name.split(' ').pop();
                const bName = b.name.split(' ').pop();
                return aName.localeCompare(bName);
            });
        }));
    }
    getTracks() {
        return this.load().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((data) => {
            return data.tracks.sort();
        }));
    }
    getMap() {
        return this.load().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((data) => {
            return data.map;
        }));
    }
}
ConferenceData.ɵfac = function ConferenceData_Factory(t) { return new (t || ConferenceData)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_user_data__WEBPACK_IMPORTED_MODULE_0__.UserData)); };
ConferenceData.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ConferenceData, factory: ConferenceData.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs-page_tabs-page_module_ts.js.map