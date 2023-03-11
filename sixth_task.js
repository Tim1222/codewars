function computerToPhone(numbers){
    let result = ''
    for (let i = 0; i < numbers.length; i++) {
        let e = numbers[i]
        if (e == 0) {
            result += e
        } else if ( e > 6) {
            result += e - 6
        } else if (e < 4) {
            result += +e + 6
        } else {
            result += e
        }
    }
    return result
}