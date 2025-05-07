/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const obj = {};
    const mags = {};

    ransomNote.split('').forEach(st => {
        obj[st] = obj[st] || 0;
        obj[st]++;
    });
    magazine.split('').forEach(st => {
        mags[st] = mags[st] || 0;
        mags[st]++;
    });

    for (const key in obj) {
        if (!mags[key]) return false;
        if (mags[key] < obj[key]) return false;
    }

    return true;
};