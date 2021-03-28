/**
 * Напишите функцию getAnagramms(arr),
 * входные данные - массив строк
 * выходные данные - массив элементов, где каждый элемент является массивом анаграмм (строки)
 * Примеры:
 * ['мир', 'Рим', 'сирота', 'Ариост', 'мри', 'пва', 'лор', 'авп']; -> [["мир", "Рим", "мри"], ["сирота", "Ариост"], ["пва", "авп"]]
 */
function getAnagramms(arr) {
    let temparr=new Array(arr.length);
    let res=new Array();
    for (let index=0; index<arr.length; index++){
        temparr[index]=[index, arr[index].toLowerCase().split("").sort().join("")];
    }
    let temp;
    while (temparr.length!=0){
        temp=temparr[0][1];
        let subres=new Array();
        for (let i=0; i<temparr.length;){
            if (temparr[i][1]===temp){
                subres.push(arr[temparr[i][0]]);
                temparr.splice(i,1);
            }
            else i++;
        }
        res.push(subres);
    }
    return res;
}

module.exports = getAnagramms;
