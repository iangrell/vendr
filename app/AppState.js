import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"
import { snack } from "./Models/SnackModel.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])

  snacks = [
    new snack({name: 'Chips', price: 1, imgUrl: 'https://images.unsplash.com/photo-1613919113640-25732ec5e61f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'}),
    new snack({name: 'Cookies', price: 2, imgUrl: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29va2llc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'}),
    new snack({name: 'Beef Jerky', price: 3, imgUrl: 'https://images.unsplash.com/photo-1652209695374-7a91c243f12f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8amVya3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'}),

  ]

  money = 0

}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
