export default class getSetAndStatic{

  static staticValue = "staticはオブジェクト化しなくても呼び出せます"
  static staticMethod() {
    return this.staticValue
  }

  constructor(user) {
    this.firstName = user.firstName
    this.lastName = user.lastName
  }
  get fullName() {
    return this.firstName + ' ' + this.lastName
  }
  set fullName(user) {
    console.log(user.firstName + ' ' + user.lastName)
  }
  

}

