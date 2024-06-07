import { x, } from './helper'

const y = (param: string) => {
  console.log(param)
  console.log(process.env.HELLO)
}

y(x)