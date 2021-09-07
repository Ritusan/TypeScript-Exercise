var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + lastName;
    }
    return User;
}());
function greet(person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}
// let user = {
//   firstName: 'Biblee',
//   lastName: 'Lee'
// }
var user = new User('Biblee', 'Lee');
console.log(greet(user));
