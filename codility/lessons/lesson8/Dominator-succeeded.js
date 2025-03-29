// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // returns index of any element
    // return -1 if not has a dominator
    if (A.length === 0) return -1;

    // N개 = 최대 100,000개
    // each element => 2,147,483,647

    const limit = Math.floor(A.length / 2) + 1;
    const obj = {};

    A.forEach(num => {
        obj[num] = (obj[num] || 0) + 1;
    });

    let ans = -1;
    // value 많은 것부터 정렬해야 함
    let order = Object.keys(obj).sort((a, b) => obj[b] - obj[a]);

    for (const key of order) {
        const num = obj[key];

        if (num >= limit) {
            ans = A.indexOf(Number(key));
            break;
        }
    }
    return ans;
}
