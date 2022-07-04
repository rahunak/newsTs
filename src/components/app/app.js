"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = __importDefault(require("../controller/controller"));
const appView_1 = require("../view/appView");
class App {
    constructor() {
        this.controller = new controller_1.default();
        this.view = new appView_1.AppView();
    }
    start() {
        var _a;
        (_a = document
            .querySelector('.sources')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', (e) => this.controller.getNews(e, (data) => this.view.drawNews(data)));
        this.controller.getSources((data) => this.view.drawSources(data));
    }
}
exports.default = App;
