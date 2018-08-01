[![Build Status](https://travis-ci.org/archsaber/angular-flatpickr.svg?branch=master)](https://travis-ci.org/archsaber/angular-flatpickr)

# Angular-flatpickr

An angular directive to use [flatpickr](https://github.com/chmln/flatpickr).
Currently it has following capabilities
* setting init options using `fp-opts` attribute
* on setup callback using `fp-on-setup` attribute to get the created flatpickr object

## Example

* install it with `npm install -S angular-flatpickr`
* Or via bower `bower install --save angular-flatpickr`

* Add the `ng-flatpickr` module in your app as

```js
var module = angular.module('atApp.somemodule', [
    'angular-flatpickr' // <- important
]);
```

* inside your controller set your default options and the post setup callback

```js
$scope.dateOpts = {
    dateFormat: 'Y-m-d',
    defaultDate: '2016-03-01 03:30:00 -0300'
};

$scope.datePostSetup = function(fpItem) {
    console.log('flatpickr', fpItem);
}

```

In your view set the element as per your scope variables defined above
``` html
<div ng-repeat="date in dates">
<input ng-flatpickr fp-opts="dateOpts" fp-on-setup="datePostSetup(fpItem)" ng-model="date.selectedDateObj" data-enabletime="true">
</div>
```


Note: This directive doesn't watch over the `fp-opts` values. For doing any changes to the flatpickr element created, use object returned from the on-setup callback


## License

angular-flatpickr module is under MIT license see project root
