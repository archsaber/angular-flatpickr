(function() {
	'use strict';

	var ngFlatpickr = {
		template: '<ng-transclude>' +
			'<input type="text" ng-if="!$ctrl.fpOpts.inline" ng-model="$ctrl.ngModel" placeholder="{{ $ctrl.fpOpts.placeholder }}"></input>' +
			'<div ng-if="$ctrl.fpOpts.inline"></div>' +
		'</ng-transclude>',
		controller: ngFlatpickrCtrl,
		transclude: true,
		bindings: {
			ngModel: '<',
			fpOpts: '<',
			fpOnSetup: '&'
		}
	};

	function ngFlatpickrCtrl($element, $timeout, $scope) {
		var ctrl = this;

		ctrl.$onInit = function() {
			ctrl.fpOpts.placeholder = ctrl.fpOpts.placeholder || 'Select Date..';

			grabElementAndRunFlatpickr();
		};

		ctrl.$onChanges = function() {
			grabElementAndRunFlatpickr();
		};

		function grabElementAndRunFlatpickr() {
			$timeout(function() {
				var transcludeEl = $element.find('ng-transclude')[0];
				var element = transcludeEl.children[0];

				setDatepicker(element);
			}, 0, true);
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

			// If has ngModel set the date
			if (ctrl.ngModel) {
				fpInstance.setDate(ctrl.ngModel);
			}

			// destroy the flatpickr instance when the dom element is removed
			angular.element(element).on('$destroy', function() {
				fpInstance.destroy();
			});

			// Refresh the scope
			$scope.$applyAsync();
		}
	}

	ngFlatpickrCtrl.$inject = ['$element', '$timeout', '$scope'];

	angular
		.module('angular-flatpickr', [])
		.component('ngFlatpickr', ngFlatpickr);
})();
