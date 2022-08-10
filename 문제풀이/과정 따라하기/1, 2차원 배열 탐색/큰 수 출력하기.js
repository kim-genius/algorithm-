function solution(n) {
    let answer = []
    answer.push(n[0])

    for (let i = 1; i < n.length; i++) {
        if (n[i - 1] < n[i]) answer.push(n[i])
    }

    return answer
}

const arr = [7, 3, 9, 5, 6, 12]
console.log(solution(arr));