export class PlaceOrderInput {
  cpf: string
  items: any
  coupon: string
  zipcode: string

  constructor({cpf, items, coupon, zipcode}: {cpf: string, items: any, coupon:string, zipcode: string}) {
    this.cpf = cpf
    this.zipcode = zipcode
    this.items = items
    this.coupon = coupon
  }
}