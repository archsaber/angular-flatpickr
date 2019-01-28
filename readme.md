[![Build Status](https://travis-ci.org/archsaber/angular-flatpickr.svg?branch=master)](https://travis-ci.org/archsaber/angular-flatpickr)

# Angular-flatpickr

An angular directive to use [flatpickr](https://github.com/chmln/flatpickr).
Currently it has following capabilities
* setting init options using `fp-opts` attribute
* on setup callback using `fp-on-setup` attribute to get the created flatpickr object

**There are now support for a directive based approach and a component based**

## Install

* install it with `npm install -S angular-flatpickr`
* Add the dependency
  * **Component based angular 1.5+** - `node_modules/angular-flatpickr/dist/ng-flatpickr-comp.js`
  * **Directive based angular older** - `node_modules/angular-flatpickr/dist/ng-flatpickr.js`
* Add the `angular-flatpickr` module in your app as shown

```js
var module = angular.module('atApp.somemodule', [
  'angular-flatpickr' // <- important
]);
```

## Example as Component

* inside your parent controller or component set your default options and the post setup callback
```js
ctrl.dateOpts = {
  dateFormat: 'Y-m-d',
  placeholder: 'Change date..', // Default: 'Select Date..'
  defaultDate: '2016-03-01 03:30:00 -0300',
  onChange: function(selectedDates, dateStr, instance) {
    // Do stuff on change
  }
};

ctrl.datePostSetup = function(fpItem) {
  console.log('flatpickr', fpItem);
}
```

##### 2 ways to use the component, first is just stating the ng-flatpickr
``` html
<ng-flatpickr
  fp-opts="$ctrl.dateOpts"
  fp-on-setup="$ctrl.datePostSetup({
    fpItem: fpItem
  })">
</ng-flatpickr>
```

##### The other way is if you want to set a placeholder or do something in the inside element you can use it like this
``` html
<ng-flatpickr
  fp-opts="$ctrl.dateOpts"
  fp-on-setup="$ctrl.datePostSetup({
    fpItem: fpItem
  })">
</ng-flatpickr>
```

##### If ng-model is stated it will set the initial date to match it
``` html
<ng-flatpickr
  ng-model="'28-10-2018'"
  fp-opts="$ctrl.dateOpts"
  fp-on-setup="$ctrl.datePostSetup({
    fpItem: fpItem
  })">
</ng-flatpickr>
```


## Example as Directive

* inside your controller set your default options and the post setup callback
```js
$scope.dateOpts = {
  dateFormat: 'Y-m-d',
  placeholder: 'Change date..', // Default: 'Select Date..'
  defaultDate: '2016-03-01 03:30:00 -0300',
  onChange: function(selectedDates, dateStr, instance){
    // Do stuff on change
  }
};

$scope.datePostSetup = function(fpItem) {
  console.log('flatpickr', fpItem);
}
```

``` html
<div ng-repeat="date in dates">
  <input
    ng-flatpickr
    fp-opts="dateOpts"
    fp-on-setup="datePostSetup(fpItem)"
    ng-model="date.selectedDateObj"
    data-enabletime="true">
</div>
```


Note: This directive doesn't watch over the `fp-opts` values. For doing any changes to the flatpickr element created, use object returned from the on-setup callback


## License

angular-flatpickr module is under MIT license see project root
