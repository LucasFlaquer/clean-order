import { Item } from "../../src/domain/entity/Item"
import { FreightCalculator } from "../../src/domain/service/FreightCalculator"

test("Should calculate freight of Guitar", ()=> {
  const item = new Item("1", "Guitarra", 1000, 100,50, 15, 3)
  const distance = 1000
  const price = FreightCalculator.calculate(distance, item)
  expect(price).toBe(30)
})


test("Should calculate freight of Amplificador", ()=> {
  const item = new Item("1", "Amplificador", 5000, 50,50,50, 22)
  const distance = 1000
  const price = FreightCalculator.calculate(distance, item)
  expect(price).toBe(220)
})

test("should cacuate freight of Cable", () => {
  const item = new Item("3", "Cabo", 30, 9,9,9, 0.1)
  const distance = 1000
  const price = FreightCalculator.calculate(distance, item)
  expect(price).toBe(10)
})