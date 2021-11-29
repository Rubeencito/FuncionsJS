//EX5

function vocals (str) {
    const count = str.match(/[aeiou]/gi).length;
    return count;
}
var paraula = 'esternocleidomastoideo';
const result = vocals(paraula);
console.log(result);


