let age1 = +prompt('Yoshingizni kiriting')

if (age1 <= 18 ){
    console.log('Siz oqishingiz kerak')
}  else if ( age1 >= 18 && age1 <= 60 ) {
    console.log('Siz ishlashingzi kerak')
} else {
    console.log('Siz pensiya yoshidasiz pensiya olib nevaralaringizga ham berib turing')
}


const math1 = Math.round(Math.random(23) * 10); 
console.log(math1)