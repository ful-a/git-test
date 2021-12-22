export default class prototypeClass{
  constructor(num) {
    this.value = ""
    this.num = num
  }
}

// prototypeClassの値として利用できる、上書きはできない
prototypeClass.prototype.value = "value"


prototypeClass.prototype.method = function() {
  this.num += 3
  return this.num
}
