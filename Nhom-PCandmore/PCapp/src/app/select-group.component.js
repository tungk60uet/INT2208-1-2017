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
var select_group_service_1 = require("./services/select-group.service");
var SelectGroupComponent = (function () {
    function SelectGroupComponent(selectGroupService) {
        this.selectGroupService = selectGroupService;
    }
    SelectGroupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectGroupService.GetList().subscribe(function (response) {
            _this.chudes = response;
        });
    };
    SelectGroupComponent.prototype.OnClick = function (value) {
        //    console.log(value);
    };
    return SelectGroupComponent;
}());
SelectGroupComponent = __decorate([
    core_1.Component({
        selector: 'select-group',
        templateUrl: 'app/select-group.component.html',
        providers: [select_group_service_1.SelectGroupService]
    }),
    __metadata("design:paramtypes", [select_group_service_1.SelectGroupService])
], SelectGroupComponent);
exports.SelectGroupComponent = SelectGroupComponent;
//# sourceMappingURL=select-group.component.js.map