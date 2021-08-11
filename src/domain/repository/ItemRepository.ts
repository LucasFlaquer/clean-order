import { Item } from "../entity/Item";

export interface ItemRepository {
  getById(id:string): Item | undefined
}