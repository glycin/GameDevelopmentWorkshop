angular.module('GameDevWorkshop', ['ngMaterial']).controller('workshopController', function ($scope, $templateCache) {
    
    $scope.header ="Game Development Workshop";
    $scope.chapters = [
        { name: 'Editor', id: '0' },
        { name: 'Components', id: '1' },
        { name: 'UI', id: '2' },
        { name: 'Physics', id: '3' },
        { name: 'Materials', id: '4' },
        { name: 'Manipulating Objects', id: '5' },
        { name: 'Script Coupling', id: '6' },
        { name: 'Animations', id: '7' },
        { name: 'Audio', id: '8' },
        { name: 'Scene Management', id: '9' },
        { name: 'Build Options', id: '10' },
        { name: 'Lighting', id: '11' },
        { name: 'Navigation', id: '12' },
        { name: 'Scripting', id: '13' },
        { name: 'Effects', id: '14' },
        { name: 'Controls', id: '15' },
        { name: 'Virtual Reality', id: '16' }
    ];

    $scope.loadPage = function (page) {
        console.log(page);
        $scope.template = $scope.templates[page];
    }

    $scope.templates = [
        { name: 'editor', url: 'html/editor.html' },
        { name: 'components', url: 'html/components.html' },
        { name: 'ui', url: 'html/ui.html' },
        { name: 'physics', url : 'html/physics.html'},
        { name: 'materials', url : 'html/materials.html'},
        { name: 'objects', url : 'html/objects.html'},
        { name: 'coupling', url : 'html/coupling.html'},
        { name: 'animations', url : 'html/animations.html'},
        { name: 'sounds', url : 'html/sounds.html'},
        { name: 'scenes', url : 'html/scenes.html'},
        { name: 'building', url : 'html/building.html'},
        { name: 'lighting', url : 'html/lights.html'},
        { name: 'navigation', url : 'html/navigation.html'},
        { name: 'scripts', url : 'html/scripting.html'},
        { name: 'effects', url : 'html/effects.html'},
        { name: 'controls', url : 'html/controls.html'},
        { name: 'vr', url : 'html/vr.html'}
    ];
    $scope.template = $scope.templates[0];
    
});