let a = 8, b = 6;
(() => {
  "use strict";
  
  [a,b] = [b,a];
  
})();
console.log(a);
console.log(b);