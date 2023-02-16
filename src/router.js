var app = angular.module("my-app", ["ngRoute"]);
app.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix("");
  $routeProvider
    // .when(
    //   state("/home", {
    //     // templateUrl: "./pages/home.html",
    //     template: "<h1>Demo</h1>",
    //     // controller: StudentController,
    //   })
    // )
    .when("/home", {
      // templateUrl: "./pages/home.html",
      template: "<h1>Demo</h1>",
      // controller: StudentController,
    })
    .when("/gioi-thieu", {
      templateUrl: "./pages/gioi-thieu.html",
    })
    .when("/about/:name", {
      templateUrl: "./pages/product-create.html",
      // controller: StudentCreateController,
    })
    .otherwise({
      redirectTo: "/home",
    });
});
