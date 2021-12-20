export default class TemplateString {
  constructor (name) {
    this.name = name
  }
  callHello () {
    return 'こんにちは' + this.name + 'さん\nよろしくお願いします'
  }
}