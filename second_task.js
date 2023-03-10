function computerToPhone(numbers){
    //
    const k = ['0','7','8','9','4','5','6','1','2','3']
    const p = ['0','1','2','3','4','5','6','7','8','9']
    return numbers.split('').map(d=> p[k.indexOf(d)] ).join('')

}