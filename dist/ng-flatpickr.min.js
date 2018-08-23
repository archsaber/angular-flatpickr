/** 
* @version 3.6.4
* @license MIT
*/
!function(n,t){"use strict";var r,p,e;n["angular-flatpickr"]=(r=n.angular,p=n.flatpickr,(e=r.module("angular-flatpickr",[])).directive("ngFlatpickr",[function(){return{require:"ngModel",restrict:"A",scope:{fpOpts:"&",fpOnSetup:"&"},link:function(n,t,r,e){var a=p||FlatpickrInstance;if(a){var i=new a(t[0],n.fpOpts());n.fpOnSetup&&n.fpOnSetup({fpItem:i}),t.on("$destroy",function(){i.destroy()})}else console.warn("Unable to find any flatpickr installation")}}}]),e)}(this);
//# sourceMappingURL=ng-flatpickr.min.js.map
