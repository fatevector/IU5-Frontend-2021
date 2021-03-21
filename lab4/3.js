/**
 * Напишите функцию rle(str),
 * входные данные - строка
 * выходные данные - строка со свернутыми диапазонами
 * Примеры:
 * rle('AAAB') === 'A3B'
 * rle('BCCADDEEEBB') === 'BC2AD2E3B2'
 */

function rle(str) {
    let arr=[];
    let j=1;
    for (let i=0; i<str.length-1;){
        let count=1;
        for (j=i+1; j<str.length;j++){
            if (str[j]===str[i]){
            count++;
            i++;
            }
            else
            break;
        }
        arr.push(str[i]);
        if (count>1) arr.push(count);
        i++;
    }
    if (j<str.length) arr.push(str[str.length-1]);
    return arr.join("");
}

module.exports = rle;
