(function(root, factory) {
    'use strict';
    root['angular-flatpickr'] = factory(root.angular, root.flatpickr);
}(this, function(angular, flatpickr) {

    'use strict';
    var ngFlatpickr = angular.module('angular-flatpickr', []);
    ngFlatpickr.directive('ngFlatpickr', [

        function()
        {
            return {
                restrict: 'A',
                scope: {
                    fpOpts: '&',
                    fpOnSetup: '&'
                },
                link: function(scope, element, iAttrs) {
                    var vp;
                    if (scope.fpOpts()) {
                        vp = flatpickr(element[0], scope.fpOpts());
                    } else {
                        vp = flatpickr(element[0]);
                    }

                    if (scope.fpOnSetup) {
                        scope.fpOnSetup({
                            fpItem: vp
                        });
                    }
                }
            };
        },
    ]);

    return ngFlatpickr;

}));
