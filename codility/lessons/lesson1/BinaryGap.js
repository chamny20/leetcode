function solution(N) {
    // Implement your solution here
    // 2의 거듭제곱일 때 return 0
    let str = N.toString(2);
    let firstIdx1 = str.indexOf('1');
    let lastIdx1 = str.lastIndexOf('1');

    str = str.slice(firstIdx1, lastIdx1);
    const arr = str.split('1');
    // console.log(arr);

    return Math.max(...arr.map(st => st.length));
}
