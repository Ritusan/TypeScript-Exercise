class User {
  fullName: string
  firstName: string
  lastName: string

  constructor (firstName:string,lastName:string) {
    this.firstName = firstName
    this.lastName = lastName
    this.fullName = firstName + lastName
  }
}

interface Person {
  firstName: string,
  lastName: string
}

function greet(person:Person){
  return 'Hello, ' + person.firstName + ' '+ person.lastName
}
// let user = {
//   firstName: 'Biblee',
//   lastName: 'Lee'
// }
let user = new User('Biblee','Lee')
console.log(greet(user))