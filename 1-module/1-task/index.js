/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
 function factorial(n) {
   if ( n === 0){
     return n = 1;
   }
   for ( let minus = n - 1; minus > 0; minus-- ){
     n *= minus;
   }
   return n;
 }
