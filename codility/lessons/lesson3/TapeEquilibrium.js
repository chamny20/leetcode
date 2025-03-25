function solution(A) {
    const total = A.reduce((sum, num) => sum += num);
    const left = [];
    const right = [];

    let sum = 0;
    A.forEach((num, idx) => {
        if (idx === A.length - 1) return;
        sum += num;
        left.push(sum);
        right.push(total - sum);
    })
    
    let ans = Infinity;
    for (let i=0; i<left.length; i++) {
        let diff = Math.abs(left[i] - right[i]);
        ans = Math.min(ans, diff);
    }
    return ans;
}
