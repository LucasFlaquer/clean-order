export class Cpf {
  value: string
  FACTOR_DIGIT_1 = 10;
  FACTOR_DIGIT_2 = 11;
  MAX_DIGITS_1 = 9;
  MAX_DIGITS_2 = 10;

  constructor(value:string) {
    if(!this.validate(value)) throw new Error("Invalid Cpf")
    this.value = value
  }

  validate(str:string) {
    str=this.getOnlyNumbers(str)
    if (this.isLengthInvalid(str)) return false
    if (this.isAllEqual(str)) return false
    const digit1 =  this.calculateDigit(str, this.FACTOR_DIGIT_1, this.MAX_DIGITS_1)
    const digit2 = this.calculateDigit(str, this.FACTOR_DIGIT_2, this.MAX_DIGITS_2)
    let nDigVerific = str.substring(str.length-2, str.length);  
    const nDigResult = "" + digit1 + "" + digit2;  
    return nDigVerific == nDigResult;
  }
  isLengthInvalid(str:string) {
    return str.length !== 11
  }

  getOnlyNumbers(cpf: string) {
    return cpf.replace(/\D/g, "");
  }

  isAllEqual(cpf:string) {
    return cpf.split("").every(c => c === cpf[0])
  }
  toDigitArray(cpf:string) {
    return [...cpf.split("")].map(digit => parseInt(digit));
  }
  calculateDigit(cpf:string, factor:number, max:number) {
    let total = 0;
    for (const digit of this.toDigitArray(cpf).slice(0, max)) {
      total += digit * factor--;
    }
    return (total%11 < 2) ? 0 : (11 - total%11);
  }
}