angular.module('GameDevWorkshop', ['ngMaterial','hljs']).controller('workshopController', function ($scope, $templateCache) {
    
    $scope.header ="Game Development Workshop";
    $scope.chapters = [
        { name: 'Editor', id: '0' },
        { name: 'Components', id: '1' },
        { name: 'Scripting', id: '2' },
        { name: 'Script Coupling', id: '3' },
        { name: 'Manipulating Objects', id: '4' },
        { name: 'Materials', id: '5' },
        { name: 'Physics', id: '6' },
        { name: 'UI', id: '7' },
        { name: 'Animations', id: '8' },
        { name: 'Audio', id: '9' },
        { name: 'Lighting', id: '10' },
        { name: 'Navigation', id: '11' },
        { name: 'Controls', id: '12' },
        { name: 'Effects', id: '13' },
        { name: 'Virtual Reality', id: '14' },
        { name: 'Scene Management', id: '15' },
        { name: 'Build Options', id: '16' }
    ];

    $scope.loadPage = function (page) {
        $scope.template = $scope.templates[page];
    }

    $scope.templates = [
        { name: 'editor', url: 'html/editor.html' },
        { name: 'components', url: 'html/components.html' },
        { name: 'scripts', url: 'html/scripts.html' },
        { name: 'coupling', url : 'html/coupling.html'},
        { name: 'objects', url : 'html/objects.html'},
        { name: 'materials', url : 'html/materials.html'},
        { name: 'physics', url : 'html/physics.html'},
        { name: 'ui', url : 'html/ui.html'},
        { name: 'animations', url : 'html/animations.html'},
        { name: 'sounds', url : 'html/sounds.html'},
        { name: 'lights', url : 'html/lights.html'},
        { name: 'navigations', url : 'html/navigation.html'},
        { name: 'controls', url : 'html/controls.html'},
        { name: 'effects', url : 'html/effects.html'},
        { name: 'vr', url : 'html/vr.html'},
        { name: 'scenes', url : 'html/scenes.html'},
        { name: 'building', url : 'html/building.html'}
    ];
    $scope.template = $scope.templates[0];
    
});