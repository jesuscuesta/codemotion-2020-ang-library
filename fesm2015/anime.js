import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

class AnimeService {
    constructor() { }
}
AnimeService.ɵprov = ɵɵdefineInjectable({ factory: function AnimeService_Factory() { return new AnimeService(); }, token: AnimeService, providedIn: "root" });
AnimeService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
AnimeService.ctorParameters = () => [];

class AnimeComponent {
    constructor() { }
    ngOnInit() {
    }
}
AnimeComponent.decorators = [
    { type: Component, args: [{
                selector: 'anime-anime',
                template: `
    <p>
      anime works!
    </p>
  `
            },] }
];
AnimeComponent.ctorParameters = () => [];

class AnimeModule {
}
AnimeModule.decorators = [
    { type: NgModule, args: [{
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

export { AnimeComponent, AnimeModule, AnimeService };
//# sourceMappingURL=anime.js.map
