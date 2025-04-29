let Sum = 0
let Whole = 0

function difSq (limit){
    for (i = 1; i <= limit; i++){
        Sum += (i**2)
    }
    for (n = 1; n <= limit; n++){
        Whole += n
    }

    let result = Whole**2 - Sum
    return result
}

console.log(difSq(100))