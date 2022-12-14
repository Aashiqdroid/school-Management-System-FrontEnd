"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.StarterModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var starter_component_1 = require("./starter.component");
var router_1 = require("@angular/router");
var core_2 = require("@angular/material/core");
var input_1 = require("@angular/material/input");
var checkbox_1 = require("@angular/material/checkbox");
var forms_1 = require("@angular/forms");
var toolbar_1 = require("@angular/material/toolbar");
var icon_1 = require("@angular/material/icon");
var button_1 = require("@angular/material/button");
var StarterModule = /** @class */ (function () {
    function StarterModule() {
    }
    StarterModule = __decorate([
        (0, core_1.NgModule)({
            declarations: [
                starter_component_1.StarterComponent
            ],
            imports: [
                common_1.CommonModule,
                router_1.RouterLinkWithHref,
                router_1.RouterModule,
                core_2.MatRippleModule,
                input_1.MatInputModule,
                checkbox_1.MatCheckboxModule,
                forms_1.FormsModule,
                toolbar_1.MatToolbarModule,
                icon_1.MatIconModule,
                button_1.MatButtonModule
            ], exports: []
        })
    ], StarterModule);
    return StarterModule;
}());
exports.StarterModule = StarterModule;
