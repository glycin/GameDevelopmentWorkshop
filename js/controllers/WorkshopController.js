angular.module('GameDevWorkshop', ['ngMaterial']).controller('workshopController', function($scope) {
    
    $scope.header ="Game Development Workshop";
    $scope.chapters = ["Editor","Components","UI","Physics","Materials","Manipulating Objects","Script Coupling","Animations","Audio",
                      "Scene Management","Build Options","Lighting","Navigation","Scripting","Effects","Controls","Web Calls","Tips & Tricks"," Virtual Reality"];
});