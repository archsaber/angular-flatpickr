/** 
* @version 3.6.1
* @license MIT
*/
(function() {
	'use strict';

	var testPickr = {
		template: '<ng-transclude></ng-transclude>',
		controller: ngFlatpickrCtrl,
		transclude: true,
		bindings: {
			fpOpts: '<',
			fpOnSetup: '&'
		}
	};

	function ngFlatpickrCtrl($element, $timeout) {
		var ctrl = this;

		ctrl.$onInit = function() {
			grabElementAndRunFlatpickr();
		};

		ctrl.$onChanges = function() {
			grabElementAndRunFlatpickr();
		};

		function grabElementAndRunFlatpickr() {
			$timeout(function() {
				var element = $element.find('ng-transclude')[0].children[0];

				setDatepicker(element);
			});
		}

		function setDatepicker(element) {
			var fpLib = flatpickr ? flatpickr : FlatpickrInstance;

			if (!fpLib) {
				return console.warn('Unable to find any flatpickr installation');
			}

			var fpInstance = new fpLib(element, ctrl.fpOpts);

			if (ctrl.fpOnSetup) {
				ctrl.fpOnSetup({
					fpItem: fpInstance
				});
			}

			// destroy the flatpickr instance when the dom element is removed
			angular.element(element).on('$destroy', function() {
				fpInstance.destroy();
			});
		}
	}

	angular
		.module('angular-flatpickr', [])
		.component('ngFlatpickr', ngFlatpickr);
})();
