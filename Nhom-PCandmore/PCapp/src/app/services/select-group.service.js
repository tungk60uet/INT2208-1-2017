"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var SelectGroupService = (function () {
    function SelectGroupService(_http) {
        this._http = _http;
        this.apiUrl = "http://58ec21b97c2be2120024f154.mockapi.io/api/chudes/";
    }
    SelectGroupService.prototype.GetList = function () {
        return this._http.get(this.apiUrl).map(function (r) { return r.json(); });
    };
    SelectGroupService.prototype.GetSingle = function (Id) {
        return this._http.get(this.apiUrl + Id).map(function (r) { return r.json(); });
    };
    SelectGroupService.prototype.SEARCHLIST = function (idParent) {
        return this._http.get(this.apiUrl + idParent + "/worddsr").map(function (r) { return r.json(); });
    };
    return SelectGroupService;
}());
SelectGroupService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], SelectGroupService);
exports.SelectGroupService = SelectGroupService;
//# sourceMappingURL=select-group.service.js.map