import { Order } from "./Order";
import { OrderRepository } from "./OrderRepository";

export class OrderRepositoryMemory implements OrderRepository {
  orders: Order[];
  constructor() {
    this.orders = []
  }
  save(order: Order): void {
    this.orders.push(order)
  }

}