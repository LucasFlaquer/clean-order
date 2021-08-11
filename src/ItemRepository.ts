import { Item } from "./Item";

export interface ItemRepository {
  getById(id:string): Item | undefined
}