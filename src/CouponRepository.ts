import { Coupon } from "./Coupon";

export interface CouponRepository {
  getByCode(code:string): Coupon | undefined
}