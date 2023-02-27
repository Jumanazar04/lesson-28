const johnWeight = +prompt('Johnning vazni')
const johnHeight = +prompt('Johnning boyi')
const bobWeight = +prompt('Bobning vazni')
const bobHeight = +prompt('Bobning boyi')

const johnBMI = Math.round(johnWeight / johnHeight ** 2)
const bobBMI = Math.round(bobWeight / bobHeight ** 2)

if  (johnBMI > bobBMI) {
    console.log('Johnning BMI katta')
}else if (johnBMI === bobBMI) {
    console.log('Ikkalasining BMI teng')
}else  {
    console.log('Bobning BMI katta')
}

console.log(johnBMI)
console.log(bobBMI)




