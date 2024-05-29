import { iProducts } from "./i-products"

export interface iDummyJson {
  products: iProducts[]
  total: number
  skip: number
  limit: number
}
