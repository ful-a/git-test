//クラスの定義
export default class Triangle{

  //コンストラクター
  constructor (bottom, height) {
    this.bottom = bottom;
    this.height = height;
  }

  //メソッドの定義
  getArea(){
    return this.bottom*this.height/2;
  }
}
