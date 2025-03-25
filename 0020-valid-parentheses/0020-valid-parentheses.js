/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let ans = false;
    const stack = [];
    const pairs = {
        '(': ')',
        '{': '}',
        '[': ']',
    }

    if (s.length % 2 !== 0) return false;


    for (const str of s) {
        if (pairs.hasOwnProperty(str)) {
            stack.push(str);
            continue;
        }
        
        if (pairs[stack[stack.length-1]] === str) {
            stack.pop();
            continue;
        }
        return false;
        // if (str === ')' && stack.at(-1) === '(') {
        //     stack.pop();
        // } else if (str === ']' && stack.at(-1) === '[') {
        //     stack.pop();
        // } else if (str === '}' && stack.at(-1) === '{') {
        //     stack.pop();
        // } else {
        //     stack.push(str);
        // }

        console.log(stack)
    }

    if (stack.length === 0) ans = true;

    return ans;
};