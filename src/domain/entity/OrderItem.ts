export class OrderItem {
  id:string
  price:number
  quantity: number
  
  constructor(id:string, price:number, quantity: number) {
    this.id = id
    this.price = price
    this.quantity = quantity
  }

  getTotal() {
    return this.quantity * this.price
  }
}