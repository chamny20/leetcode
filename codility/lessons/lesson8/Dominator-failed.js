// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // returns index of any element
    // return -1 if not has a dominator

    // N개 = 최대 100,000개
    // each element => 2,147,483,647

    const limit = Math.floor(A.length / 2);
    const obj = {};

    A.forEach(num => {
        obj[num] = (obj[num] || 0) + 1;
    });

    let ans = 0;
    // console.log(obj)

    for (const key in obj) {
        const num = obj[key];

        if (num >= limit) {
            ans = A.indexOf(Number(key));
            break;
        }
    }
    return ans;
}


/*
Correctness 50%
Performance 100%
*/
