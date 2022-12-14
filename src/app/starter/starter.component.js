"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.StarterComponent = void 0;
var core_1 = require("@angular/core");
var StarterComponent = /** @class */ (function () {
    function StarterComponent() {
        this.centered = false;
        this.disabled = false;
        this.unbounded = false;
        this.radius = 0;
        this.color = "";
    }
    StarterComponent.prototype.ngOnInit = function () {
    };
    StarterComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-starter',
            templateUrl: './starter.component.html',
            styleUrls: ['./starter.component.css']
        })
    ], StarterComponent);
    return StarterComponent;
}());
exports.StarterComponent = StarterComponent;
