const addUpTo = (n) => {
// simplest solution a cumulator
    let total = 0
    for (let i = 0; i <= n; i++){
        total += i
    }
    console.log(total)
}

addUpTo(3)