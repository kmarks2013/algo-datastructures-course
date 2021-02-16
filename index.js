const addUpTo = (n) => {
// simplest solution a cumulator
    let total = 0
    for (let i = 0; i <= n; i++){
        total += i
    }
    return total
}

// addUpTo(3)

const addUpToTwo = (n) =>{
    return n * (n + 1)/2
}

let t1 = performance.now()
// addUpTo(1000000000)
addUpToTwo(1000000000)
let t2 = performance.now()
console.log(`Time Elapsed: ${(t2-t1) / 1000} seconds.`)