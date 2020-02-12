/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
 function filter(string){
   string = string.split(' ').join().split(',')

   let filterArray = [];

   for (value of string){
     if (Number(value)) filterArray.push(+value);
   }

   return filterArray;
 }

 function getMinMax(str) {
   let numbers = filter(str);

   for (let i = 0; i < numbers.length-1; i++){
     for (let j = i + 1; j < numbers.length; j++){
       if (numbers[i] > numbers[j]){
         let temp = numbers[i];
         numbers[i] = numbers[j];
         numbers[j] = temp;
       }
     }
   }
   let result = { min: numbers[0], max: numbers[numbers.length-1]}
   return result;
 }
