    let result = [0,1]

    for (let i = 2; i <= 33; i++){
        let a = result[i - 1]
        let b = result[i - 2]
        result.push(a + b)
        let check = a + b
        if ((a+b) % 2 == 0){
            console.log(check)
        }
    }