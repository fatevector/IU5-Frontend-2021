/**
 * Напишите функцию isPalindrome(str),
 * входные данные - строкa
 * выходные данные - boolean - является ли переданная строка палиндромом
 * Примеры:
 * "мир" -> false
 * "тот" -> true
 */
function isPalindrome(str) {
    return str.split("").every((el,index)=>(el===str[str.length-index-1])?true:false);
    //return (str.split("").join()===str.split("").reverse().join())?true:false;
}

module.exports = isPalindrome;
