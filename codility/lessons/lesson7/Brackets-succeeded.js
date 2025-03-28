// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    const stack = [];

    for (let i=0; i<S.length; i++) {
        const str = S[i];
        let n = stack.length;

        // 닫힌 괄호가 들어왔을 때랑 아닐 때로 구분 -> 엣지 케이스 처리
        if (str === ')' || str === ']' || str === '}') {
            // stack이 비어있으면 안됨
            if (stack.length === 0) return 0;

            const last = stack.pop();

            if ((str === ')' && last !== '(') 
            || (str === ']' && last !== '[')
            || (str === '}' && last !== '{')) {
                return 0;
            } 
        } else {
            stack.push(str);
        }
    }

    return stack.length > 0 ? 0 : 1;
}


/*
✅ 한 번 문자열을 순회하면서 push와 pop을 수행하는 방식이므로, 최대 2N번의 연산이 일어남.
✅ 하지만 push된 요소는 결국 한 번씩 pop되므로, 각 문자는 최대 한 번만 스택에서 추가 및 제거됨.
✅ 결국 O(N) 에 수렴! 🚀
*/
