(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('anime', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.anime = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    var AnimeService = /** @class */ (function () {
        function AnimeService() {
        }
        return AnimeService;
    }());
    AnimeService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AnimeService_Factory() { return new AnimeService(); }, token: AnimeService, providedIn: "root" });
    AnimeService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    AnimeService.ctorParameters = function () { return []; };

    var AnimeComponent = /** @class */ (function () {
        function AnimeComponent() {
        }
        AnimeComponent.prototype.ngOnInit = function () {
        };
        return AnimeComponent;
    }());
    AnimeComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'anime-anime',
                    template: "\n    <p>\n      anime works!\n    </p>\n  "
                },] }
    ];
    AnimeComponent.ctorParameters = function () { return []; };

    var AnimeModule = /** @class */ (function () {
        function AnimeModule() {
        }
        return AnimeModule;
    }());
    AnimeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [AnimeComponent],
                    imports: [],
                    exports: [AnimeComponent]
                },] }
    ];

    /*
     * Public API Surface of anime
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AnimeComponent = AnimeComponent;
    exports.AnimeModule = AnimeModule;
    exports.AnimeService = AnimeService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=anime.umd.js.map
