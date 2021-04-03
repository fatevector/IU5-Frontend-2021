/**
 * Напишите функцию curry(f),
 * входные данные - функция
 * выходные данные - функция, или результат если количество аргументов достаточно
 * Примеры:
 * 
 * function add(a, b, c) {
 *  return a + b + c;
 * }
 *
 * console.log(curry(add)(1)(2)(3)); //6
 * console.log(curry(add)(1)(2, 3)); //6
 * console.log(curry(add)(1, 2, 3)); //6
 */
// function curry(func) {
//     //for (let arg in args) console.log(arg);//code here
//     // return function(...args){
//     //     func.
//     // }
//     return function(...args){
//         if (func.length<=args.length) return func(...args)
//         else return func.bind(null, ...args)
//     }
// }
function curry(func) {
    return (...args)=>{
        if (func.length<=args.length) return func(...args);
        else return curry(func.bind(null, ...args));
    }
}
module.exports = curry;