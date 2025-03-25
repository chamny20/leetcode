/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let ans = false;
    if (s.length !== t.length) return false;
    s = s.split('').sort().join('');
    t = t.split('').sort().join('');
    
    if (s === t) ans = true;
    
    return ans;
};