import { PlaceOrder } from "../../src/application/PlaceOrder"
import { PlaceOrderInput } from "../../src/application/PlaceOrderInput"
import { CouponRepositoryMemory } from "../../src/infra/repository/memory/CouponRepositoryMemory"
import { ItemRepositoryMemory } from "../../src/infra/repository/memory/ItemRepositoryMemory"
import { OrderRepositoryMemory } from "../../src/infra/repository/memory/OrderRepositoryMemory"



test("Should make an order", ()=> {
  const input = new PlaceOrderInput({
    cpf: '428.313.458-98',
    zipcode: '18.016620',
    items: [
      { id: "1", quantity: 2 },
      { id: "2", quantity: 1 },
      { id: "3", quantity: 3 }
    ],
    coupon: "VALE20"
  })
  const itemRepository = new ItemRepositoryMemory()
  const couponRepository = new CouponRepositoryMemory()
  const orderRepository = new OrderRepositoryMemory()
  const placeOrder = new PlaceOrder(itemRepository, couponRepository, orderRepository);
  const output = placeOrder.execute(input)
  expect(output.total).toBe(5982)
})

test("Should make an order with dicount coupon expired", ()=> {
  const input = new PlaceOrderInput({
    cpf: '428.313.458-98',
    zipcode: '18016620',
    items: [
      { id: "1", quantity: 2 },
      { id: "2", quantity: 1 },
      { id: "3", quantity: 3 }
    ],
    coupon: "VALE20_EXPIRED"
  })
  const itemRepository = new ItemRepositoryMemory()
  const couponRepository = new CouponRepositoryMemory()
  const orderRepository = new OrderRepositoryMemory()
  const placeOrder = new PlaceOrder(itemRepository, couponRepository, orderRepository);
  const output = placeOrder.execute(input)
  expect(output.total).toBe(7400)
})

test("Should make an order with freight calc", ()=> {
  const input = new PlaceOrderInput({
    cpf: '428.313.458-98',
    zipcode: '18016620',
    items: [
      { id: "1", quantity: 2 },
      { id: "2", quantity: 1 },
      { id: "3", quantity: 3 }
    ],
    coupon: "VALE20_EXPIRED"
  })
  const itemRepository = new ItemRepositoryMemory()
  const couponRepository = new CouponRepositoryMemory()
  const orderRepository = new OrderRepositoryMemory()
  const placeOrder = new PlaceOrder(itemRepository, couponRepository, orderRepository);
  const output = placeOrder.execute(input)
  expect(output.freight).toBe(310)
})
