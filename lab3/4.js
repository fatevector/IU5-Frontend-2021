/**
 * Напишите функцию prettySum(arr),
 * на вход подается массив arr
 * необходимо вернуть сумму чисел, находящихся на четных индексах, умноженную на последний элемент
 * Примеры:
 * [3, 2, 6, 5, 4, 1, 2] ->  30 
 * как считать: (3 + 6 + 4 + 2) * 2
 */

function prettySum(arr) {
    let sum=0;
    arr.forEach((number, index)=>{if (index%2===0){sum+=number;}});
    return sum*arr[arr.length-1];
}

module.exports = prettySum;