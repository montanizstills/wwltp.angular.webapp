"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MainpageComponent = void 0;
var core_1 = require("@angular/core");
var MainpageComponent = /** @class */ (function () {
    function MainpageComponent(mainpageService, twitchService, domSanitizer, http, facebookService, news) {
        this.mainpageService = mainpageService;
        this.twitchService = twitchService;
        this.domSanitizer = domSanitizer;
        this.http = http;
        this.facebookService = facebookService;
        this.news = news;
        this.videos = [];
        this.EsportsOneFeed = this.facebookService.getPageFeed("EsportsOne");
        this.News = this.news.getNewsFromServer("https://www.reddit.com/r/esports/.rss");
    }
    MainpageComponent.prototype.ngOnInit = function () {
        //for videoID in catagories: <iframe/> embedded videos
        this.videos.push(this.domSanitizer.bypassSecurityTrustResourceUrl(this.twitchService.getLiveVideoURL("4d1eaa36-f750-4862-b7e9-d0a13970d535")));
    };
    MainpageComponent = __decorate([
        core_1.Component({
            selector: 'mainpage',
            templateUrl: './mainpage.component.html',
            styleUrls: ['./mainpage.component.scss']
        })
    ], MainpageComponent);
    return MainpageComponent;
}());
exports.MainpageComponent = MainpageComponent;
