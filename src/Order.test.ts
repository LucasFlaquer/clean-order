import { Coupon } from "./Coupon"
import { Order } from "./Order"

test('Shoud not make an order without a valid cpf', () => {
  const cpf = '00000000000'
  expect(()=> new Order(cpf)).toThrow(new Error("Invalid Cpf"))
})

test('Shoud create an order with 3 itens', () => {
  const cpf = '428.313.458-98'
  const order = new Order(cpf)
  order.addItem('Guitarra', 1000, 2)
  order.addItem('Amplificador', 5000, 1)
  order.addItem('Cabo', 30, 3)
  const total = order.getTotal()
  expect(total).toBe(7090)
})

test("Shoud create an order with dicount coupon", () => {
  const cpf = '428.313.458-98'
  const order = new Order(cpf)
  order.addItem('Guitarra', 1000, 2)
  order.addItem('Amplificador', 5000, 1)
  order.addItem('Cabo', 30, 3)
  order.addCoupon(new Coupon("VALE20", 20))
  const total = order.getTotal()
  expect(total).toBe(5672)
})