import { PlaceOrder } from "./PlaceOrder";
import { PlaceOrderInput } from "./PlaceOrderInput";

test("Should make an order", ()=> {
  const input = new PlaceOrderInput({
    cpf: '428.313.458-98',
    items: [
      { description: 'Guitarra', price:1000, quantity: 2 },
      { description: 'Amplificador', price:5000, quantity: 1 },
      { description: 'Cabo', price:30, quantity: 3 }
    ],
    coupon: "VALE20"
  })
  const placeOrder = new PlaceOrder();
  const output = placeOrder.execute(input)
  expect(output.total).toBe(5672)
})