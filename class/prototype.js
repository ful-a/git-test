export default class prototypeClass{
  constructor(num) {
    // this.value = ""
    this.num = num
  }
}

// prototypeClassの値として利用できる、上書きはできない
prototypeClass.prototype.value = "value"

// classを呼び出さなくてもメソッドを実行できる、処理が軽くなる
prototypeClass.prototype.method = function() {
  this.num += 3
  return this.num
}
