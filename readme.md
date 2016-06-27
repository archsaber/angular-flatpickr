[![Build Status](https://travis-ci.org/archsaber/angular-flatpickr.svg?branch=master)](https://travis-ci.org/archsaber/angular-flatpickr)

# Angular-flatpickr

An angular directive to use [flatpickr](https://github.com/chmln/flatpickr).
Currently it has following capabilities
* setting init options using `fp-opts` attribute
* on setup callback using `fp-on-setup` attribute to get the created flatpickr object

## Example

* intsall it with `bower install --save angular-flatpickr`

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

In your view set the elemet as per your scope variables defined above
``` html
<input ng-flatpickr fp-opts="dateOpts" fp-on-setup="datePostSetup(fpItem)">
```


Note: This directive doesn't watch over the `fp-opts` values. For doing any changes to the flatpickr element created, use object returned from the on-setup callback


## License

angular-flatpickr module is under MIT license:

> Copyright (C) 2016 ArchSaber.
>
> Permission is hereby granted, free of charge, to any person
> obtaining a copy of this software and associated documentation files
> (the "Software"), to deal in the Software without restriction,
> including without limitation the rights to use, copy, modify, merge,
> publish, distribute, sublicense, and/or sell copies of the Software,
> and to permit persons to whom the Software is furnished to do so,
> subject to the following conditions:
>
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
> NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
> BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
> ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
> CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.
