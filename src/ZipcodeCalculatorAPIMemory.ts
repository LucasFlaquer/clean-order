import { ZipcodeCalculatorAPI } from "./ZipcodeCalculatorAPI";

export class  ZipcodeCalculatorAPIMemory implements ZipcodeCalculatorAPI {
  calculate(zipcodeA: string, zipcodeB: string): number {
      return 1000
  }
}