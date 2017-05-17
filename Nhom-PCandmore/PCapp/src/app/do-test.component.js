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
var router_1 = require("@angular/router");
var select_group_service_1 = require("./services/select-group.service");
//import { SelectGroupService } from './services/select-group.service'
var TestComponent = (function () {
    function TestComponent(router, activatedRoute, selectGroupService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.selectGroupService = selectGroupService;
        this.trueAudio = new Audio("https://www.soundjay.com/mechanical/camera-shutter-click-01.mp3");
        this.falseAudio = new Audio("https://www.soundjay.com/misc/fail-trumpet-01.mp3");
        this.tile = "0%";
        this.currentQuestion = 0;
        this.idQuestion = 1;
        this.socau = 0;
    }
    TestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.activatedRoute.params.subscribe(function (params) {
            _this.chudeId = params['Id'];
        });
        this.selectGroupService.GetSingle(this.chudeId).subscribe(function (p) {
            _this.Chude = p.Name;
            // console.log(this.Chude);
        });
        this.selectGroupService.SEARCHLIST(this.chudeId).subscribe(function (response) {
            _this.worddsrList = response;
            _this.socau = _this.worddsrList.length;
            _this.currentQuestion = _this.worddsrList[0];
        });
    };
    TestComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    TestComponent.prototype.cancelClick = function () {
        if (this.idQuestion <= this.worddsrList.length) {
            this.falseAudio.play();
            this.next();
        }
    };
    TestComponent.prototype.checkClick = function () {
        if (this.idQuestion <= this.worddsrList.length) {
            if (this.str == this.currentQuestion.vi && this.str != '') {
                this.trueAudio.play();
            }
            else {
                this.falseAudio.play();
            }
            this.next();
        }
    };
    TestComponent.prototype.next = function () {
        this.str = "";
        this.tile = (this.idQuestion * 100 / this.worddsrList.length).toString() + "%";
        if (this.idQuestion < this.worddsrList.length) {
            this.idQuestion++;
            this.currentQuestion = this.worddsrList[this.idQuestion - 1];
        }
        else {
            this.router.navigate(["ketqua"]);
        }
    };
    return TestComponent;
}());
TestComponent = __decorate([
    core_1.Component({
        selector: 'do-test',
        templateUrl: 'app/do-test.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, select_group_service_1.SelectGroupService])
], TestComponent);
exports.TestComponent = TestComponent;
//# sourceMappingURL=do-test.component.js.map