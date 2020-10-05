"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.YoutubeService = void 0;
var core_1 = require("@angular/core");
var env = require("../../");
var YoutubeService = /** @class */ (function () {
    function YoutubeService(http, router) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.callYoutubeEndpoint = function () {
            _this.http.get("https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=us&key=" + env.YOUTUBE_API_KEY, {
                headers: {
                    "Authorization": "Bearer " + sessionStorage.getItem["google-oauth2"],
                    "Accept": "application/json"
                }
            }).subscribe(function (res) { return console.log(res); });
        };
    }
    YoutubeService = __decorate([
        core_1.Injectable({ providedIn: 'root' })
    ], YoutubeService);
    return YoutubeService;
}());
exports.YoutubeService = YoutubeService;
