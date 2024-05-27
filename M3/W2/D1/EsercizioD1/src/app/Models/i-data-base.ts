import {iPost} from "./i-post"

export interface iDataBase {
  posts: iPost[]
  total: number
  skip: number
  limit: number
}
