class User {
    constructor(_firstName, _lastName, _age, _location) {
      this.firstName = _firstName
      this.lastName = _lastName
      this.age = _age
      this.location = _location
    }

    ageCompare(user) {
       switch (this.age<user.age) {
        case this.age<user.age:
            return `${user.firstName} è più vecchio di ${this.firstName}.`            
            break;
        case this.age>user.age:
            return `${this.firstName} è più vecchio di ${user.firstName}.`            
            break;
        case this.age===user.age:
            return `${this.firstName} e ${user.firstName} hanno la stessa età.`
        }
        }
    }

let a = new User('Sylvester', 'Stallone', 77, 'New York')
let b = new User('Arnold', 'Schwarzenegger', 76, 'Thal')
let c = new User('Jackie', 'Chan', 70, 'Hong Kong')

console.log(a.ageCompare(b));
console.log(b.ageCompare(c));
console.log(a.ageCompare(c));