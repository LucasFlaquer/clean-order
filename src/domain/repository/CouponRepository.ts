import { Coupon } from "../entity/Coupon";


export interface CouponRepository {
  getByCode(code:string): Coupon | undefined
}