export class Code {
  private type: string;
  private length: number;
  constructor() {
    this.type = 'a';
    this.length = 30;
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
      case 'UUID':
        return this.genUUID();
        break;
    }
  }
  genUUID() {
    let result: string = '';
    for (let i = 0; i < 34; i++) {
      //console.log('I:', i);
      switch (i) {
        case 8:
        case 13:
        case 18:
        case 23:
          console.log('Add "-"');
          result += '-';
          break;
        default:
          console.log;
          if (Math.random() < 0.5) {
            result += this.genString();
          } else {
            result += this.genNumber();
          }
          break;
      }
    }
    return result;
  }
  genNumber() {
    let result = Math.floor(Math.random() * 10);
    return result;
  }
  genString() {
    let apb = 'abcdefghijklmnopqrstuvwxyz';
    let char =
      Math.random() < 0.5
        ? apb[Math.floor(Math.random() * apb.length)].toUpperCase()
        : apb[Math.floor(Math.random() * apb.length)];
    return char;
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