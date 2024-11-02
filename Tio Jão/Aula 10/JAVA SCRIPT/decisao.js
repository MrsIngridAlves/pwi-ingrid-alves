// const meuPrimeiroIf = (n) => {
//      if (n >= 5) {
//         return `${n} é maior que 5`
//      } else {
//         return `${n} é menor que 5`
//      }
//   }
// console.log(meuPrimeiroIf(8))
// console.log(meuPrimeiroIf(2))
// console.log(meuPrimeiroIf(5))

//   const meuPrimeiroIf = (n) => {
//     if (n > 5) {
//        return `${n} é maior que 5`
//     } else if (n == 5){
//        return `${n} igual 5`
//     } else {
//         return `${n} é menor que 5`
//     }
//  }


//maneira mais facil para nao usar else 
const meuPrimeiroIf = (n) => {
 if (n > 5) {
    return `${n} é maior que 5`
 }
 if (n == 5) {
    return `${n} é igual a 5`
 }
    return `${n} é menor que 5`
}

 console.log(meuPrimeiroIf(8))
 console.log(meuPrimeiroIf(2))
 console.log(meuPrimeiroIf(5))