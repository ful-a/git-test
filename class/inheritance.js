class SetName {
  constructor (user) {
    this.firstName = user.firstName
    this.lastName = user.lastName
  }
  get makeFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

export default class Profile extends SetName {
  constructor (user, age, city) {
    super(user)
    this.age = age
    this.city = city
  }
}

Profile.prototype.info = function() {
  return `${this.city}在住の${this.age}才の方です`
}