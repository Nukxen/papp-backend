export class Code {
  private type;
  private length;
  constructor(type: string, lengthCode: number) {
    this.type = type[0];
    this.length = lengthCode;
  }

  getID() {
    switch (this.type) {
      case 's':
        return this.genString();
      case 'n':
        return this.genNumber();
      default:
        throw 'Erro';
    }
  }

  genNumber() {
    let result: string = '';
    for (let i = 0; i < this.length; i++) {
      if (i % 4 == 0 && i != 0) {
        result += '-';
      }
      result += Math.floor(Math.random() * 10);
    }
    return result;
  }

  genString() {
    let apb = 'abcdefghijklmnopqrstuvwxyz';
    let result: string = '';
    for (let i = 0; i < this.length; i++) {
      if (i % 4 == 0 && i != 0) {
        result += '-';
      }
      let char =
        Math.random() < 0.5
          ? apb[Math.floor(Math.random() * apb.length)].toUpperCase()
          : apb[Math.floor(Math.random() * apb.length)];
      result += char;
    }
    return result;
  }
}

const a = new Code('n', 16);
console.log(a.getID());
