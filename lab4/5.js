/**
 * Доп задание, делать не обязательно, но мы запомним тех кто не сделал ;D
 * Напишите функцию checkBrackets(str),
 * на вход подается строка состоящая из скобок разной вложенности, варианты скобок: []<>()
 * необходимо определеить, правильно ли они вложены
 * Примеры:
 * [[]]()<> --> true
 * ([)]()<> --> false
 * [(<>)] --> true
 */

function checkBrackets(str) {
    const left=["[","<","("];
    const right=["]",">",")"];
    let temp=str.split("");
    for (let i=1;i<temp.length;){
        if ((right.indexOf(temp[i])===left.indexOf(temp[i-1]))&&right.includes(temp[i])){
            temp.splice(i-1,2);
            i--;
        }
        else i++;
    }
    return (temp.length===0)?true:false;
}

module.exports = checkBrackets;
