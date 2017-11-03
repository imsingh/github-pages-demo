webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"navbar navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"#\">Demo</a>\n</header>\n<main>\n  <div class=\"container\">\n    <p>\n      Demo showcase of typeahead component\n    </p>\n    <form [formGroup]=\"myForm\">\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <h6>Single, custom</h6>\n          <type-ahead formControlName=\"hobbySingleCustom\" [suggestions]=\"hobbies\"\n                     class=\"form-control\" [custom]=\"true\"></type-ahead>\n          <type-ahead formControlName=\"hobbySingleCustomSet\" [suggestions]=\"hobbies\"\n                     class=\"form-control\" [custom]=\"true\"></type-ahead>\n\n          <h6>Single, fixed</h6>\n          <type-ahead formControlName=\"hobbySingleFixed\" [suggestions]=\"hobbies\"\n                     class=\"form-control\" [custom]=\"false\"></type-ahead>\n          <type-ahead formControlName=\"hobbySingleFixedSet\" [suggestions]=\"hobbies\"\n                     class=\"form-control\" [custom]=\"false\"></type-ahead>\n\n          <h6>Multi, custom</h6>\n          <type-ahead formControlName=\"hobbyMultiCustom\" [suggestions]=\"hobbies\"\n                     class=\"form-control\" [custom]=\"true\" [multi]=\"true\"></type-ahead>\n          <type-ahead formControlName=\"hobbyMultiCustomSet\" [suggestions]=\"hobbies\"\n                     class=\"form-control\" [custom]=\"true\" [multi]=\"true\"></type-ahead>\n\n          <h6>Multi, fixed</h6>\n          <type-ahead formControlName=\"hobbyMultiFixed\" [suggestions]=\"hobbies\"\n                     class=\"form-control\" [custom]=\"false\" [multi]=\"true\"></type-ahead>\n          <type-ahead formControlName=\"hobbyMultiFixedSet\" [suggestions]=\"hobbies\"\n                     class=\"form-control\" [custom]=\"false\" [multi]=\"true\"></type-ahead>\n\n          <h6>Single, template (fixed)</h6>\n          <type-ahead formControlName=\"countrySingle\" [suggestions]=\"countries\"\n                     class=\"form-control\" idField=\"code\" [complex]=\"true\"></type-ahead>\n          <type-ahead formControlName=\"countrySingleSet\" [suggestions]=\"countries\"\n                     class=\"form-control\" idField=\"code\" [complex]=\"true\"></type-ahead>\n\n          <h6>Multi, template (fixed)</h6>\n          <type-ahead formControlName=\"countryMulti\" [suggestions]=\"countries\"\n                      class=\"form-control\" idField=\"code\" [multi]=\"true\" [complex]=\"true\"></type-ahead>\n          <type-ahead formControlName=\"countryMultiSet\" [suggestions]=\"countries\"\n                      class=\"form-control\" idField=\"code\" [multi]=\"true\" [complex]=\"true\"></type-ahead>\n        </div>\n        <div class=\"col-6\">\n          <fieldset>\n            <legend>Value:</legend>\n            <pre>{{ myForm.value | json:2 }}</pre>\n          </fieldset>\n          <fieldset>\n            <legend>Errors:</legend>\n            {{ myForm.errors | json }}\n          </fieldset>\n        </div>\n      </div>\n    </form>\n  </div>\n</main>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(formBuilder, dataService) {
        this.formBuilder = formBuilder;
        this.dataService = dataService;
        // ...
    }
    AppComponent.prototype.ngOnInit = function () {
        this.fetchData();
        this.initializeForm();
    };
    AppComponent.prototype.fetchData = function () {
        var _this = this;
        this.dataService.getHobbies().subscribe(function (hobbies) {
            _this.hobbies = hobbies;
        });
        this.dataService.getCountries().subscribe(function (countries) {
            _this.countries = countries;
        });
    };
    AppComponent.prototype.initializeForm = function () {
        this.myForm = this.formBuilder.group({
            hobbySingleCustom: '',
            hobbySingleFixed: '',
            hobbyMultiCustom: '',
            hobbyMultiFixed: '',
            countrySingle: '',
            countryMulti: '',
            hobbySingleCustomSet: { value: 'Abcd', disabled: true },
            hobbySingleFixedSet: { value: this.hobbies[0], disabled: true },
            hobbyMultiCustomSet: { value: ['Abcd'], disabled: true },
            hobbyMultiFixedSet: { value: [this.hobbies[0]], disabled: true },
            countrySingleSet: { value: this.countries[0].code, disabled: true },
            countryMultiSet: { value: [this.countries[0].code], disabled: true }
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__typeahead_typeahead_component__ = __webpack_require__("../../../../../src/app/typeahead/typeahead.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__typeahead_typeahead_component__["a" /* TypeaheadComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* ReactiveFormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/countries.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ICountry */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Countries; });
var ICountry = (function () {
    function ICountry() {
    }
    return ICountry;
}());

var Countries = [
    { name: 'Afghanistan', code: 'AF' },
    { name: 'Åland Islands', code: 'AX' },
    { name: 'Albania', code: 'AL' },
    { name: 'Algeria', code: 'DZ' },
    { name: 'American Samoa', code: 'AS' },
    { name: 'AndorrA', code: 'AD' },
    { name: 'Angola', code: 'AO' },
    { name: 'Anguilla', code: 'AI' },
    { name: 'Antarctica', code: 'AQ' },
    { name: 'Antigua and Barbuda', code: 'AG' },
    { name: 'Argentina', code: 'AR' },
    { name: 'Armenia', code: 'AM' },
    { name: 'Aruba', code: 'AW' },
    { name: 'Australia', code: 'AU' },
    { name: 'Austria', code: 'AT' },
    { name: 'Azerbaijan', code: 'AZ' },
    { name: 'Bahamas', code: 'BS' },
    { name: 'Bahrain', code: 'BH' },
    { name: 'Bangladesh', code: 'BD' },
    { name: 'Barbados', code: 'BB' },
    { name: 'Belarus', code: 'BY' },
    { name: 'Belgium', code: 'BE' },
    { name: 'Belize', code: 'BZ' },
    { name: 'Benin', code: 'BJ' },
    { name: 'Bermuda', code: 'BM' },
    { name: 'Bhutan', code: 'BT' },
    { name: 'Bolivia', code: 'BO' },
    { name: 'Bosnia and Herzegovina', code: 'BA' },
    { name: 'Botswana', code: 'BW' },
    { name: 'Bouvet Island', code: 'BV' },
    { name: 'Brazil', code: 'BR' },
    { name: 'British Indian Ocean Territory', code: 'IO' },
    { name: 'Brunei Darussalam', code: 'BN' },
    { name: 'Bulgaria', code: 'BG' },
    { name: 'Burkina Faso', code: 'BF' },
    { name: 'Burundi', code: 'BI' },
    { name: 'Cambodia', code: 'KH' },
    { name: 'Cameroon', code: 'CM' },
    { name: 'Canada', code: 'CA' },
    { name: 'Cape Verde', code: 'CV' },
    { name: 'Cayman Islands', code: 'KY' },
    { name: 'Central African Republic', code: 'CF' },
    { name: 'Chad', code: 'TD' },
    { name: 'Chile', code: 'CL' },
    { name: 'China', code: 'CN' },
    { name: 'Christmas Island', code: 'CX' },
    { name: 'Cocos (Keeling) Islands', code: 'CC' },
    { name: 'Colombia', code: 'CO' },
    { name: 'Comoros', code: 'KM' },
    { name: 'Congo', code: 'CG' },
    { name: 'Congo, The Democratic Republic of the', code: 'CD' },
    { name: 'Cook Islands', code: 'CK' },
    { name: 'Costa Rica', code: 'CR' },
    { name: 'Cote D\'Ivoire', code: 'CI' },
    { name: 'Croatia', code: 'HR' },
    { name: 'Cuba', code: 'CU' },
    { name: 'Cyprus', code: 'CY' },
    { name: 'Czech Republic', code: 'CZ' },
    { name: 'Denmark', code: 'DK' },
    { name: 'Djibouti', code: 'DJ' },
    { name: 'Dominica', code: 'DM' },
    { name: 'Dominican Republic', code: 'DO' },
    { name: 'Ecuador', code: 'EC' },
    { name: 'Egypt', code: 'EG' },
    { name: 'El Salvador', code: 'SV' },
    { name: 'Equatorial Guinea', code: 'GQ' },
    { name: 'Eritrea', code: 'ER' },
    { name: 'Estonia', code: 'EE' },
    { name: 'Ethiopia', code: 'ET' },
    { name: 'Falkland Islands (Malvinas)', code: 'FK' },
    { name: 'Faroe Islands', code: 'FO' },
    { name: 'Fiji', code: 'FJ' },
    { name: 'Finland', code: 'FI' },
    { name: 'France', code: 'FR' },
    { name: 'French Guiana', code: 'GF' },
    { name: 'French Polynesia', code: 'PF' },
    { name: 'French Southern Territories', code: 'TF' },
    { name: 'Gabon', code: 'GA' },
    { name: 'Gambia', code: 'GM' },
    { name: 'Georgia', code: 'GE' },
    { name: 'Germany', code: 'DE' },
    { name: 'Ghana', code: 'GH' },
    { name: 'Gibraltar', code: 'GI' },
    { name: 'Greece', code: 'GR' },
    { name: 'Greenland', code: 'GL' },
    { name: 'Grenada', code: 'GD' },
    { name: 'Guadeloupe', code: 'GP' },
    { name: 'Guam', code: 'GU' },
    { name: 'Guatemala', code: 'GT' },
    { name: 'Guernsey', code: 'GG' },
    { name: 'Guinea', code: 'GN' },
    { name: 'Guinea-Bissau', code: 'GW' },
    { name: 'Guyana', code: 'GY' },
    { name: 'Haiti', code: 'HT' },
    { name: 'Heard Island and Mcdonald Islands', code: 'HM' },
    { name: 'Holy See (Vatican City State)', code: 'VA' },
    { name: 'Honduras', code: 'HN' },
    { name: 'Hong Kong', code: 'HK' },
    { name: 'Hungary', code: 'HU' },
    { name: 'Iceland', code: 'IS' },
    { name: 'India', code: 'IN' },
    { name: 'Indonesia', code: 'ID' },
    { name: 'Iran, Islamic Republic Of', code: 'IR' },
    { name: 'Iraq', code: 'IQ' },
    { name: 'Ireland', code: 'IE' },
    { name: 'Isle of Man', code: 'IM' },
    { name: 'Israel', code: 'IL' },
    { name: 'Italy', code: 'IT' },
    { name: 'Jamaica', code: 'JM' },
    { name: 'Japan', code: 'JP' },
    { name: 'Jersey', code: 'JE' },
    { name: 'Jordan', code: 'JO' },
    { name: 'Kazakhstan', code: 'KZ' },
    { name: 'Kenya', code: 'KE' },
    { name: 'Kiribati', code: 'KI' },
    { name: 'Korea, Democratic People\'S Republic of', code: 'KP' },
    { name: 'Korea, Republic of', code: 'KR' },
    { name: 'Kuwait', code: 'KW' },
    { name: 'Kyrgyzstan', code: 'KG' },
    { name: 'Lao People\'S Democratic Republic', code: 'LA' },
    { name: 'Latvia', code: 'LV' },
    { name: 'Lebanon', code: 'LB' },
    { name: 'Lesotho', code: 'LS' },
    { name: 'Liberia', code: 'LR' },
    { name: 'Libyan Arab Jamahiriya', code: 'LY' },
    { name: 'Liechtenstein', code: 'LI' },
    { name: 'Lithuania', code: 'LT' },
    { name: 'Luxembourg', code: 'LU' },
    { name: 'Macao', code: 'MO' },
    { name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK' },
    { name: 'Madagascar', code: 'MG' },
    { name: 'Malawi', code: 'MW' },
    { name: 'Malaysia', code: 'MY' },
    { name: 'Maldives', code: 'MV' },
    { name: 'Mali', code: 'ML' },
    { name: 'Malta', code: 'MT' },
    { name: 'Marshall Islands', code: 'MH' },
    { name: 'Martinique', code: 'MQ' },
    { name: 'Mauritania', code: 'MR' },
    { name: 'Mauritius', code: 'MU' },
    { name: 'Mayotte', code: 'YT' },
    { name: 'Mexico', code: 'MX' },
    { name: 'Micronesia, Federated States of', code: 'FM' },
    { name: 'Moldova, Republic of', code: 'MD' },
    { name: 'Monaco', code: 'MC' },
    { name: 'Mongolia', code: 'MN' },
    { name: 'Montserrat', code: 'MS' },
    { name: 'Morocco', code: 'MA' },
    { name: 'Mozambique', code: 'MZ' },
    { name: 'Myanmar', code: 'MM' },
    { name: 'Namibia', code: 'NA' },
    { name: 'Nauru', code: 'NR' },
    { name: 'Nepal', code: 'NP' },
    { name: 'Netherlands', code: 'NL' },
    { name: 'Netherlands Antilles', code: 'AN' },
    { name: 'New Caledonia', code: 'NC' },
    { name: 'New Zealand', code: 'NZ' },
    { name: 'Nicaragua', code: 'NI' },
    { name: 'Niger', code: 'NE' },
    { name: 'Nigeria', code: 'NG' },
    { name: 'Niue', code: 'NU' },
    { name: 'Norfolk Island', code: 'NF' },
    { name: 'Northern Mariana Islands', code: 'MP' },
    { name: 'Norway', code: 'NO' },
    { name: 'Oman', code: 'OM' },
    { name: 'Pakistan', code: 'PK' },
    { name: 'Palau', code: 'PW' },
    { name: 'Palestinian Territory, Occupied', code: 'PS' },
    { name: 'Panama', code: 'PA' },
    { name: 'Papua New Guinea', code: 'PG' },
    { name: 'Paraguay', code: 'PY' },
    { name: 'Peru', code: 'PE' },
    { name: 'Philippines', code: 'PH' },
    { name: 'Pitcairn', code: 'PN' },
    { name: 'Poland', code: 'PL' },
    { name: 'Portugal', code: 'PT' },
    { name: 'Puerto Rico', code: 'PR' },
    { name: 'Qatar', code: 'QA' },
    { name: 'Reunion', code: 'RE' },
    { name: 'Romania', code: 'RO' },
    { name: 'Russian Federation', code: 'RU' },
    { name: 'RWANDA', code: 'RW' },
    { name: 'Saint Helena', code: 'SH' },
    { name: 'Saint Kitts and Nevis', code: 'KN' },
    { name: 'Saint Lucia', code: 'LC' },
    { name: 'Saint Pierre and Miquelon', code: 'PM' },
    { name: 'Saint Vincent and the Grenadines', code: 'VC' },
    { name: 'Samoa', code: 'WS' },
    { name: 'San Marino', code: 'SM' },
    { name: 'Sao Tome and Principe', code: 'ST' },
    { name: 'Saudi Arabia', code: 'SA' },
    { name: 'Senegal', code: 'SN' },
    { name: 'Serbia and Montenegro', code: 'CS' },
    { name: 'Seychelles', code: 'SC' },
    { name: 'Sierra Leone', code: 'SL' },
    { name: 'Singapore', code: 'SG' },
    { name: 'Slovakia', code: 'SK' },
    { name: 'Slovenia', code: 'SI' },
    { name: 'Solomon Islands', code: 'SB' },
    { name: 'Somalia', code: 'SO' },
    { name: 'South Africa', code: 'ZA' },
    { name: 'South Georgia and the South Sandwich Islands', code: 'GS' },
    { name: 'Spain', code: 'ES' },
    { name: 'Sri Lanka', code: 'LK' },
    { name: 'Sudan', code: 'SD' },
    { name: 'Suriname', code: 'SR' },
    { name: 'Svalbard and Jan Mayen', code: 'SJ' },
    { name: 'Swaziland', code: 'SZ' },
    { name: 'Sweden', code: 'SE' },
    { name: 'Switzerland', code: 'CH' },
    { name: 'Syrian Arab Republic', code: 'SY' },
    { name: 'Taiwan, Province of China', code: 'TW' },
    { name: 'Tajikistan', code: 'TJ' },
    { name: 'Tanzania, United Republic of', code: 'TZ' },
    { name: 'Thailand', code: 'TH' },
    { name: 'Timor-Leste', code: 'TL' },
    { name: 'Togo', code: 'TG' },
    { name: 'Tokelau', code: 'TK' },
    { name: 'Tonga', code: 'TO' },
    { name: 'Trinidad and Tobago', code: 'TT' },
    { name: 'Tunisia', code: 'TN' },
    { name: 'Turkey', code: 'TR' },
    { name: 'Turkmenistan', code: 'TM' },
    { name: 'Turks and Caicos Islands', code: 'TC' },
    { name: 'Tuvalu', code: 'TV' },
    { name: 'Uganda', code: 'UG' },
    { name: 'Ukraine', code: 'UA' },
    { name: 'United Arab Emirates', code: 'AE' },
    { name: 'United Kingdom', code: 'GB' },
    { name: 'United States', code: 'US' },
    { name: 'United States Minor Outlying Islands', code: 'UM' },
    { name: 'Uruguay', code: 'UY' },
    { name: 'Uzbekistan', code: 'UZ' },
    { name: 'Vanuatu', code: 'VU' },
    { name: 'Venezuela', code: 'VE' },
    { name: 'Viet Nam', code: 'VN' },
    { name: 'Virgin Islands, British', code: 'VG' },
    { name: 'Virgin Islands, U.S.', code: 'VI' },
    { name: 'Wallis and Futuna', code: 'WF' },
    { name: 'Western Sahara', code: 'EH' },
    { name: 'Yemen', code: 'YE' },
    { name: 'Zambia', code: 'ZM' },
    { name: 'Zimbabwe', code: 'ZW' }
];
//# sourceMappingURL=countries.js.map

/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__countries__ = __webpack_require__("../../../../../src/app/countries.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });



var DataService = (function () {
    function DataService() {
    }
    /**
     * Filter hobbies
     * @param {string} filter
     * @returns {Observable<string[]>}
     */
    DataService.prototype.getHobbies = function (filter) {
        if (filter === void 0) { filter = ''; }
        var hobbies = [
            'Skiing',
            'Snowboarding',
            'Reading',
            'Coding',
            'Hiking',
            'Movies',
            'Photography'
        ];
        var sanitizedFilter = sanitizeString(filter);
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].of(hobbies.filter(function (hobby) { return sanitizeString(hobby).indexOf(sanitizedFilter) !== -1; }));
    };
    /**
     * Filter countries
     * @param {string} filter
     * @returns {Observable<ICountry[]>}
     */
    DataService.prototype.getCountries = function (filter) {
        if (filter === void 0) { filter = ''; }
        var sanitizedFilter = sanitizeString(filter);
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].of(__WEBPACK_IMPORTED_MODULE_2__countries__["a" /* Countries */].filter(function (country) { return sanitizeString(country.name).indexOf(sanitizedFilter) !== -1; }));
    };
    return DataService;
}());

function sanitizeString(text) {
    return text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/app/typeahead/typeahead.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_from__ = __webpack_require__("../../../../rxjs/add/observable/from.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toArray__ = __webpack_require__("../../../../rxjs/add/operator/toArray.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__typeahead_interface__ = __webpack_require__("../../../../../src/app/typeahead/typeahead.interface.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__typeahead_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__typeahead_interface__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypeaheadComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};










var KEY_UP = 'keyup';
var KEY_DOWN = 'keydown';
var ARROW_DOWN = 'ArrowDown';
var ARROW_UP = 'ArrowUp';
var ESCAPE = 'Escape';
var ENTER = 'Enter';
var BACKSPACE = 'Backspace';
/**
 * Sanitize string for string comparison
 * @param {string} text
 */
var sanitizeString = function (text) {
    return text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};
/***
 * Usage:
 *
 * <typeahead formControlName="myControlName" [suggestions]="['abc', 'def',...]"></typeahead>
 * <typeahead formControlName="myControlName" [suggestions]="Observable.of(['abc', 'def',...])"></typeahead>
 */
var TypeaheadComponent = TypeaheadComponent_1 = (function () {
    /**
     * CTOR
     * @param elementRef
     * @param renderer
     */
    function TypeaheadComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        /** suggestions list - array of strings, objects or Observable */
        this.suggestions = [];
        /** template for items in drop down */
        // @Input() public suggestionTemplate: TemplateRef<any>;
        /** field to use from objects as name */
        this.nameField = 'name';
        /** field to use from objects as id */
        this.idField = 'id';
        /** allow custom values */
        this.custom = true;
        /** allow multiple values */
        this.multi = false;
        /** use complex suggestions and results */
        this.complex = false;
        /** Output value change */
        this.valueChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
        // ui state
        this.isDisabled = false;
        this.isExpanded = false;
        this.dropDownClass = '';
        this.matches = [];
        this.allMatches = [];
        // values
        this.values = [];
        this._settings = {
            suggestionsLimit: 10,
            typeDelay: 50,
            noMatchesText: 'No matches found',
            tagClass: 'btn badge badge-primary',
            tagRemoveIconClass: 'close',
            dropdownMenuClass: 'dropdown-menu',
            dropdownMenuExpandedClass: 'dropdown-menu show',
            dropdownMenuItemClass: 'dropdown-item',
            dropdownToggleClass: 'dropdown-toggle'
        };
        this._inputChangeEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
        this._removeInProgress = false;
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    Object.defineProperty(TypeaheadComponent.prototype, "settings", {
        get: function () {
            return this._settings;
        },
        /** Value of form control */
        set: function (value) {
            Object.assign(this._settings, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadComponent.prototype, "multiBinding", {
        /** UI Bindings */
        get: function () { return this.multi; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadComponent.prototype, "disabledBinding", {
        get: function () { return this.isDisabled || null; },
        enumerable: true,
        configurable: true
    });
    TypeaheadComponent.prototype.focusOutHandler = function (event) {
        if (event.relatedTarget) {
            // related target is typeahead, input or one of the buttons
            if (event.relatedTarget === this.elementRef.nativeElement ||
                event.relatedTarget.parentElement === this.elementRef.nativeElement ||
                event.relatedTarget.parentElement.parentElement === this.elementRef.nativeElement) {
                // grab back input focus after button click since `focus out` cancelled it
                if (event.target === this._input && event.relatedTarget === this.elementRef.nativeElement) {
                    this._input.focus();
                }
                return;
            }
        }
        // close dropdown
        this.toggleDropdown(false);
        // if not match then cleanup the values
        if (!this.custom && !this.hasMatch(this._input.value)) {
            this._input.value = this.value = null; // TODO don't cleanup multiple
            this._inputChangeEvent.emit('');
            return;
        }
        // keep just approved tags
        if (this.multi) {
            this._input.value = null;
            this._inputChangeEvent.emit('');
        }
    };
    /**
     * On component initialization
     */
    TypeaheadComponent.prototype.ngOnInit = function () {
        this.suggestionsInit(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].from(this.suggestions));
        this.toggleDropdown(false);
        this._inputChangeEvent.emit('');
    };
    TypeaheadComponent.prototype.suggestionsInit = function (suggestion$) {
        var _this = this;
        this._inputChangeEvent
            .debounceTime(this.settings.typeDelay)
            .mergeMap(function (value) {
            var normalizedValue = sanitizeString(value);
            return suggestion$
                .filter(_this.filterSuggestion(normalizedValue))
                .take(_this.settings.suggestionsLimit)
                .toArray();
        }).subscribe(function (matches) {
            _this.matches = matches;
        });
        suggestion$.toArray().subscribe(function (suggestions) {
            _this.allMatches = suggestions;
        });
    };
    /**
     * Init method
     */
    TypeaheadComponent.prototype.ngAfterViewInit = function () {
        // set value to input
        this._input = this.elementRef.nativeElement.querySelector('input');
        if (!this.multi && this._value) {
            this._input.value = this.complex ?
                this.extractNameFromMatches(this._value) :
                this._value;
        }
    };
    /**
     * Cleanup timeout
     */
    TypeaheadComponent.prototype.ngOnDestroy = function () {
        // TODO: cleanup subscriptions
    };
    Object.defineProperty(TypeaheadComponent.prototype, "value", {
        /**
         * Value getter
         * @returns {string|string[]}
         */
        get: function () {
            return this._value;
        },
        /**
         * Value setter
         * @param value
         */
        set: function (value) {
            if (value === this._value) {
                return;
            }
            this.writeValue(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Update value on input change
     * @param event
     */
    TypeaheadComponent.prototype.handleInput = function (event) {
        var target = event.target;
        // if esc key, close dropdown
        if ([KEY_DOWN, KEY_UP].includes(event.type) && event.key === ESCAPE) {
            this.toggleDropdown(false);
            return;
        }
        // if arrow down, select first item in the menu
        if (event.type === KEY_DOWN && event.key === ARROW_DOWN && this.matches.length > 0) {
            var button = this.elementRef.nativeElement.querySelector('button[role="menuitem"]:first-child');
            button.focus();
            return;
        }
        this.toggleDropdown(true);
        if (this.multi) {
            if (event.type === KEY_UP && event.key === ENTER && target.value !== '') {
                this.setValue(target.value);
                this.toggleDropdown(false);
            }
            if ([KEY_DOWN, KEY_UP].includes(event.type) && event.key === BACKSPACE && target.value === '') {
                if (event.type === KEY_DOWN) {
                    this._removeInProgress = true;
                }
                else if (this._removeInProgress && this.values.length) {
                    this._removeInProgress = false;
                    this.removeValue(this.values[this.values.length - 1]);
                }
            }
        }
        else if (event.type === KEY_UP) {
            this.setValue(target.value);
        }
        this._inputChangeEvent.emit(target.value);
    };
    /**
     * Move through collection on dropdown
     * @param event
     * @param value
     */
    TypeaheadComponent.prototype.handleButton = function (event, value) {
        var target = event.target;
        if (event.type === KEY_UP) {
            if (event.key === ENTER) {
                this.setValue(value);
                this._inputChangeEvent.emit(this._input.value);
                this.toggleDropdown(false);
            }
            if (event.key === ESCAPE) {
                this._input.focus();
                this.toggleDropdown(false);
            }
        }
        else {
            if (event.key === ARROW_DOWN && target.nextElementSibling) {
                target.nextElementSibling.focus();
            }
            if (event.key === ARROW_UP && target.previousElementSibling) {
                target.previousElementSibling.focus();
            }
            target.parentNode.scrollTop = target.offsetTop;
        }
    };
    TypeaheadComponent.prototype.setValue = function (value, collapseMenu) {
        if (!this.custom && !this.hasMatch(value)) {
            return;
        }
        if (this.multi) {
            if (!this.values.includes(value)) {
                this.value = this.values.concat(value).map(this.extractIdentifier.bind(this));
                this._input.value = '';
            }
        }
        else {
            this.value = value;
            this._input.value = value;
        }
        if (collapseMenu) {
            this.toggleDropdown(false);
        }
        // refocus the input
        this._input.focus();
    };
    TypeaheadComponent.prototype.removeValue = function (value) {
        var index = this.values.indexOf(value);
        if (index !== -1) {
            if (index === this.values.length - 1) {
                this.value = this.values.slice(0, -1).map(this.extractIdentifier.bind(this));
            }
            else {
                this.value = this.values.slice(0, index).concat(this.values.slice(index + 1)).map(this.extractIdentifier.bind(this));
            }
            this._input.focus();
        }
    };
    TypeaheadComponent.prototype.toggleDropdown = function (value) {
        this.isExpanded = (value !== undefined) ? value : !this.isExpanded;
        this.dropDownClass = this.isExpanded ? this.settings.dropdownMenuExpandedClass : this.settings.dropdownMenuClass;
    };
    /**
     * Write new value
     * @param value
     */
    TypeaheadComponent.prototype.writeValue = function (value) {
        // set value
        this._value = value;
        this.elementRef.nativeElement.value = value;
        // modify values list
        if (this.multi) {
            if (this.complex) {
                this.values = value ? value.map(this.extractObjectFromId.bind(this)) : [];
            }
            else {
                this.values = value || [];
            }
        }
        // trigger change
        if ('createEvent' in document) {
            var event = document.createEvent('HTMLEvents');
            event.initEvent('change', false, true);
            this.elementRef.nativeElement.dispatchEvent(event);
        }
        else {
            // we need to cast since fireEvent is not standard functionality and works only in IE
            this.elementRef.nativeElement.fireEvent('onchange');
        }
        this.onChange(value);
    };
    TypeaheadComponent.prototype.setDisabledState = function (value) {
        this.isDisabled = value;
        this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', value);
    };
    TypeaheadComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    TypeaheadComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    TypeaheadComponent.prototype.filterSuggestion = function (filter) {
        var _this = this;
        return function (value) {
            if (_this.values.includes(value)) {
                return false;
            }
            if (typeof value === 'string') {
                return sanitizeString(value).includes(filter);
            }
            else {
                return sanitizeString(value[_this.nameField]).includes(filter) && !_this.values.includes(value);
            }
        };
    };
    TypeaheadComponent.prototype.hasMatch = function (value) {
        for (var key in this.matches) {
            if (typeof this.matches[key] === 'string' && this.matches[key] === value) {
                return true;
            }
            else if (this.matches[key][this.nameField] === value) {
                return true;
            }
        }
        return false;
    };
    TypeaheadComponent.prototype.extractNameFromMatches = function (id) {
        var match = this.extractObjectFromId(id);
        if (match) {
            return match[this.nameField];
        }
        else {
            return '';
        }
    };
    TypeaheadComponent.prototype.extractObjectFromId = function (id) {
        for (var key in this.allMatches) {
            if (this.allMatches[key][this.idField] === id) {
                return this.allMatches[key];
            }
        }
        return null;
    };
    TypeaheadComponent.prototype.extractIdentifier = function (value) {
        return this.complex ? value[this.idField] : value;
    };
    return TypeaheadComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_9__typeahead_interface__["TypeaheadSuggestions"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__typeahead_interface__["TypeaheadSuggestions"]) === "function" && _a || Object)
], TypeaheadComponent.prototype, "suggestions", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], TypeaheadComponent.prototype, "nameField", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], TypeaheadComponent.prototype, "idField", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], TypeaheadComponent.prototype, "custom", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], TypeaheadComponent.prototype, "multi", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], TypeaheadComponent.prototype, "complex", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_9__typeahead_interface__["TypeaheadSettings"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__typeahead_interface__["TypeaheadSettings"]) === "function" && _b || Object),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_9__typeahead_interface__["TypeaheadSettings"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__typeahead_interface__["TypeaheadSettings"]) === "function" && _c || Object])
], TypeaheadComponent.prototype, "settings", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* HostBinding */])('class.multi'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], TypeaheadComponent.prototype, "multiBinding", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* HostBinding */])('attr.disabled'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], TypeaheadComponent.prototype, "disabledBinding", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Output */])(),
    __metadata("design:type", Object)
], TypeaheadComponent.prototype, "valueChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* HostListener */])('focusout', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TypeaheadComponent.prototype, "focusOutHandler", null);
TypeaheadComponent = TypeaheadComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* Component */])({
        selector: 'type-ahead',
        styles: ["\n    :host {\n        height: auto;\n        min-height: 1em;\n        position: relative;\n        display: inline-flex;\n        flex-wrap: wrap;\n        border-width: thin;\n        border-style: inset;\n        border-color: initial;\n        -webkit-appearance: textfield;\n        -webkit-rtl-ordering: logical;\n        user-select: text;\n        cursor: auto;\n    }\n    :host[disabled] {\n        cursor: not-allowed;\n    }\n    :host[disabled] input {\n        background-color: inherit;\n    }\n    :host .typeahead-badge {\n        white-space: nowrap;\n    }\n    :host input {\n        border: none;\n        outline: 0;\n        line-height: 1;\n        flex: 1;\n    }\n  "],
        template: "\n    <span [ngClass]=\"settings.tagClass\" class=\"typeahead-badge\" *ngFor=\"let value of values\">\n      {{ complex ? value[nameField] : value }}\n      <span *ngIf=\"!isDisabled\" aria-hidden=\"true\" (click)=\"removeValue(value)\"\n            [ngClass]=\"settings.tagRemoveIconClass\">\u00D7</span>\n    </span>\n    <input *ngIf=\"!isDisabled || !multi || !values.length\" [disabled]=\"isDisabled || null\"\n           type=\"text\" autocomplete=\"off\"\n           (keyup)=\"handleInput($event)\"\n           (keydown)=\"handleInput($event)\"\n           (paste)=\"handleInput($event)\"\n           (click)=\"toggleDropdown(true)\"/>\n    <i *ngIf=\"!isDisabled\" (click)=\"toggleDropdown()\"\n       [ngClass]=\"settings.dropdownToggleClass\"></i>\n    <div role=\"menu\" [attr.class]=\"dropDownClass\">\n      <button *ngFor=\"let match of matches\" type=\"button\" role=\"menuitem\"\n              [ngClass]=\"settings.dropdownMenuItemClass\"\n              (mouseup)=\"setValue(match, true)\"\n              (keydown)=\"handleButton($event, match)\"\n              (keyup)=\"handleButton($event, match)\">\n        {{ complex ? match[nameField] : match }}\n      </button>\n      <div role=\"menuitem\" *ngIf=\"!matches.length && !custom\"\n           [ngClass]=\"settings.dropdownMenuItemClass\">\n        {{ settings.noMatchesText }}\n      </div>\n    </div>\n  ",
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* NG_VALUE_ACCESSOR */], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* forwardRef */])(function () { return TypeaheadComponent_1; }), multi: true }]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ElementRef */])), __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Renderer2 */])),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ElementRef */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Renderer2 */]) === "function" && _e || Object])
], TypeaheadComponent);

var TypeaheadComponent_1, _a, _b, _c, _d, _e;
//# sourceMappingURL=typeahead.component.js.map

/***/ }),

/***/ "../../../../../src/app/typeahead/typeahead.interface.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=typeahead.interface.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map