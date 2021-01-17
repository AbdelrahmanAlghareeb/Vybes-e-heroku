function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/modules/profile/services/profile.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/modules/profile/services/profile.service.ts ***!
    \*************************************************************/

  /*! exports provided: ProfileService */

  /***/
  function srcAppModulesProfileServicesProfileServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileService", function () {
      return ProfileService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ProfileService = /*#__PURE__*/function () {
      function ProfileService(http) {
        _classCallCheck(this, ProfileService);

        this.http = http;
      }

      _createClass(ProfileService, [{
        key: "getUserData",
        value: function getUserData(userId) {
          return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrlWithoutVersion, "Account/GetUserById?id=").concat(userId));
        }
      }, {
        key: "updateBasicUser",
        value: function updateBasicUser(userId, userData) {
          return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrlWithoutVersion, "Account/updateBasic-").concat(userId), userData);
        }
      }, {
        key: "updateBusinessUser",
        value: function updateBusinessUser(userId, userData) {
          return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrlWithoutVersion, "Account/updateBusiness-").concat(userId), userData);
        }
      }, {
        key: "getAllTrackOrder",
        value: function getAllTrackOrder(id) {
          return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl, "Order?FilterValue[userId]=").concat(id));
        }
      }, {
        key: "getAllTrackOrderinfo",
        value: function getAllTrackOrderinfo(id) {
          return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl, "OrderInfo?FilterValue[orderNumber]=").concat(id));
        }
      }, {
        key: "getOrderByOrderNumber",
        value: function getOrderByOrderNumber(orderNumber) {
          return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl, "Order/byOrderNumber-").concat(orderNumber));
        }
      }, {
        key: "resetPassword",
        value: function resetPassword(data) {
          return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrlWithoutVersion, "Account/reset-password"), data);
        }
      }, {
        key: "addAddress",
        value: function addAddress(data) {
          return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl, "Address"), data);
        }
      }, {
        key: "updateAddress",
        value: function updateAddress(addressId, data) {
          return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl, "Address/").concat(addressId), data);
        }
      }]);

      return ProfileService;
    }();

    ProfileService.ɵfac = function ProfileService_Factory(t) {
      return new (t || ProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    ProfileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProfileService,
      factory: ProfileService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/validations/custom-validation.ts":
  /*!*********************************************************!*\
    !*** ./src/app/shared/validations/custom-validation.ts ***!
    \*********************************************************/

  /*! exports provided: MustMatch */

  /***/
  function srcAppSharedValidationsCustomValidationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MustMatch", function () {
      return MustMatch;
    }); // custom validator to check that two fields match


    function MustMatch(controlName, matchingControlName) {
      return function (formGroup) {
        var control = formGroup.controls[controlName];
        var matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          // return if another validator has already found an error on the matchingControl
          return;
        } // set error on matchingControl if validation fails


        if (control.value !== matchingControl.value) {
          matchingControl.setErrors({
            mustMatch: true
          });
        } else {
          matchingControl.setErrors(null);
        }
      };
    }
    /***/

  }
}]);
//# sourceMappingURL=common-es5.js.map