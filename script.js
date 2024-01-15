var app = angular.module('Myapp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when("/home", {
      templateUrl: 'home.html'
    })
    .when('/about', {
      templateUrl: 'about.html'
    })
    .when('/contact', {
      templateUrl: 'contact.html'
    })
    .otherwise({
      redirectTo: '/home'
    });
});


app.controller('routes', function($scope, $location) {
    $scope.isDarkTheme = false;

    $scope.isActive = function(viewLocation) {
        return viewLocation === $location.path() || viewLocation === ''; // Handle root path
    };

    $scope.toggleTheme = function() {
        $scope.isDarkTheme = !$scope.isDarkTheme;
        document.body.classList.toggle('dark-theme', $scope.isDarkTheme);
    };
});

app.controller('about-controller', function($scope) {
  $scope.educations = [
    {
      qualification: "MBA Tech Computer Engineering",
      institute: "MPSTME, NMIMS, Mumbai ",
      boardUniversity: "NMIMS",
      percentage: "3.91/4",
      year: 2026
    },
    {
      qualification: "XII Science",
      institute: "A B Higher Secondary School,Navsari, Gujarat",
      boardUniversity: "GSEB",
      percentage: "92.76/100",
      year: 2021
    },
    {
      qualification: "X",
      institute: "Sett Rustomjee Jamsetjee Jeejeebhoy High School (English Medium), Valsad, Gujarat",
      boardUniversity: "GSEB",
      percentage: "91.16/100 ",
      year: 2019
    }
  ];

  $scope.skills = [
    "Python, Java, C++, R",
    "HTML, CSS, JavaScript, AngularJS, NodeJS",
    "Mobile Application Development",
    "Object Oriented Programming",
    "SQL, SAS",
    "Unity"
  ];
});
