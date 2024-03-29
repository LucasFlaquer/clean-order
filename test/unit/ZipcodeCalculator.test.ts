import { ZipcodeCalculatorAPIMemory } from "../../src/infra/gateway/memory/ZipcodeCalculatorAPIMemory"


test("Should calculate distance between two zip_codes", () => {
  const zipcodeCalculator = new ZipcodeCalculatorAPIMemory()
  const distance = zipcodeCalculator.calculate("11.111-111", "99.999-999")
  expect(distance).toBe(1000)
})