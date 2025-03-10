export class Code {
  private type: string;
  private length: number;
  constructor(type: string, lengthCode: number) {
    this.type = type[0];
    this.length = lengthCode;
  }

  getID() {
    switch (this.type) {
      case 's':
        return this.genString();
        break;
      case 'n':
        return this.genNumber();
        break;
      default:
      case 'a':
        return this.genAll();
        break;
    }
  }
  genNumber() {
    let result: string = '';
    for (let i = 0; i < this.length; i++) {
      if (i % 4 == 0 && i != 0 && this.length - i > 5) {
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
      if (i % 4 == 0 && i != 0 && this.length - i > 5) {
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
  genAll() {
    let apb = 'abcdefghijklmnopqrstuvwxyz';
    let result: string = '';

    for (let i = 0; i < this.length; i++) {
      if (i % 4 == 0 && i != 0 && this.length - i > 5) {
        result += '-';
      }
      if (Math.random() < 0.5) {
        let char =
          Math.random() < 0.5
            ? apb[Math.floor(Math.random() * apb.length)].toUpperCase()
            : apb[Math.floor(Math.random() * apb.length)];
        result += char;
      } else {
        result += Math.floor(Math.random() * 10);
      }
    }
    return result;
  }
}