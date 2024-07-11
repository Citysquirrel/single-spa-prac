(function (global) {
  System.config({
    paths: {
      "npm:": "node_modules/",
    },
    map: {
      app: "app", // your application's root folder
      "@angular/core": "npm:@angular/core/bundles/core.umd.js",
      "@angular/common": "npm:@angular/common/bundles/common.umd.js",
      "@angular/compiler": "npm:@angular/compiler/bundles/compiler.umd.js",
      "@angular/platform-browser":
        "npm:@angular/platform-browser/bundles/platform-browser.umd.js",
      "@angular/platform-browser-dynamic":
        "npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js",
      "@angular/forms": "npm:@angular/forms/bundles/forms.umd.js",
      "@angular/router": "npm:@angular/router/bundles/router.umd.js",
      rxjs: "npm:rxjs",
      "zone.js": "npm:zone.js", // 올바른 zone.js 경로 설정
    },
    packages: {
      app: {
        main: "./main.js",
        defaultExtension: "js",
      },
      rxjs: {
        defaultExtension: "js",
      },
      "zone.js": {
        main: "./dist/zone.js", // 올바른 zone.js 설정
        defaultExtension: "js",
      },
    },
  });
})(this);
