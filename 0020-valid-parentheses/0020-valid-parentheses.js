/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let ans = false;
    const stack = [];

    for (const str of s) {
        
        if (str === ')' && stack.at(-1) === '(') {
            stack.pop();
        } else if (str === ']' && stack.at(-1) === '[') {
            stack.pop();
        } else if (str === '}' && stack.at(-1) === '{') {
            stack.pop();
        } else {
            stack.push(str);
        }

        console.log(stack)
    }

    if (stack.length === 0) ans = true;

    return ans;
};