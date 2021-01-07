(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/modules/auth/services/api/auth-api.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/auth/services/api/auth-api.service.ts ***!
  \***************************************************************/
/*! exports provided: AuthApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthApiService", function() { return AuthApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class AuthApiService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'http://mazenebada-001-site1.itempurl.com/api';
        this.prefix = 'Account';
    }
    login(requestBody) {
        return this.http.post(`${this.baseUrl}/${this.prefix}/authenticate`, requestBody, { observe: 'body' });
    }
    forgetPassword(requestBody) {
        return this.http.post(`${this.baseUrl}/${this.prefix}/forgot-password`, requestBody);
    }
    resetPassword(requestBody) {
        return this.http.post(`${this.baseUrl}/${this.prefix}/reset-password`, requestBody);
    }
    register(requestBody) {
        return this.http.post(`${this.baseUrl}/${this.prefix}/register`, requestBody);
    }
    registerBusiness(requestBody) {
        return this.http.post(`${this.baseUrl}/${this.prefix}/register-business`, requestBody);
    }
    confirmEmail(requestParams) {
        return this.http.get(`${this.baseUrl}/${this.prefix}/confirm-email?userId=${requestParams.userId}&code=${requestParams.code}`);
    }
}
AuthApiService.ɵfac = function AuthApiService_Factory(t) { return new (t || AuthApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AuthApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthApiService, factory: AuthApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/profile/services/profile.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/profile/services/profile.service.ts ***!
  \*************************************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class ProfileService {
    constructor(http) {
        this.http = http;
    }
    getUserData(userId) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrlWithoutVersion}Account/GetUserById?id=${userId}`);
    }
    updateBasicUser(userId, userData) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrlWithoutVersion}Account/updateBasic-${userId}`, userData);
    }
    updateBusinessUser(userId, userData) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrlWithoutVersion}Account/updateBusiness-${userId}`, userData);
    }
    getAllTrackOrder(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl}Order?FilterValue[userId]=${id}`);
    }
    getAllTrackOrderinfo(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl}OrderInfo?FilterValue[orderNumber]=${id}`);
    }
}
ProfileService.ɵfac = function ProfileService_Factory(t) { return new (t || ProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ProfileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProfileService, factory: ProfileService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map