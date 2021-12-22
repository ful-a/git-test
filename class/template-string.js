export default class TemplateString {
  constructor (name) {
    this.name = name
  }
  callHello () {
    // バッククオート@ + Shiftの方で囲う
    return `こんにちは${this.name}さん
    よろしくお願いします`
  }
}