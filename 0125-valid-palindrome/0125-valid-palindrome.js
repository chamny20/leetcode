/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replaceAll(' ', '').toLowerCase().split('').filter(st => (st.charCodeAt() >=97 && st.charCodeAt() <= 122) || (st.charCodeAt() >=48 && st.charCodeAt() <= 57)).join("");
    // console.log(s)

    const rev = s.split('').reverse().join('');

    return rev === s;
};