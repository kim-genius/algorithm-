function solution(s) {
    let answer, max = Number.MIN_SAFE_INTEGER

    for (let x of s) {
        if (max < x.length) { max = x.length; answer = x }
    }

    return answer
}

const str = ['teacher', 'time', 'student', 'good']
console.log(solution(str));