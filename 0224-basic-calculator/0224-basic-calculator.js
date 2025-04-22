/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    const arr = s.trim().split('').filter(s => s !== ' ');
    console.log(arr);

    let num = 0;
    let result = 0;
    const stack = [];
    let sign = 1;

    for (let i=0; i<arr.length; i++) {
        const st = arr[i];

        if (+st >= 0 && +st <= 9) {
            num =  num * 10 + (+st);
        } else if (st === '+') {
            result += sign * num;
            sign = 1;
            num = 0;
        } else if (st === '-') {
            result += sign * num;
            sign = -1;
            num = 0;
        } else if (st === '(') {
            stack.push(result);
            stack.push(sign);
            result = 0;
            sign = 1;
        } else if (st === ')') {
            result += sign * num; // 괄호 안 마지막 숫자
            const prevSign = stack.pop(); // 괄호 바로 앞 연산자
            const prevResult = stack.pop(); // 괄호 이전 결과값
            result = prevResult + prevSign * result;
            num = 0;
        }
        console.log('result', result)
        console.log('num', num)
    }
    return result + sign * num;
};