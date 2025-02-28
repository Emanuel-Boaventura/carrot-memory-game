const hat = require('@/assets/images/hat.png')
const chair = require('@/assets/images/chair.png')
const products = require('@/assets/images/products.png')
const sun = require('@/assets/images/sun.png')
const sunscreen = require('@/assets/images/sunscreen.png')
const sunshade = require('@/assets/images/sunshade.png')
export interface Card {
  id: number
  type: string
  image: any
  isFlipped: boolean
  matched: boolean
}

export const TIME_LIMIT = 40 // seconds
export const BLOCK_MOVE_TIME = 1000 * 0.5 // seconds
export const INITIAL_SHOW_CARDS_TIME = 1000 * 2 // seconds
export const MIN_CARDS = 4 // minimum number of cards

export const GAME_CARDS: Card[] = [
  { id: 1, type: 'sun', image: sun, isFlipped: false, matched: false },
  { id: 2, type: 'sun', image: sun, isFlipped: false, matched: false },
  { id: 3, type: 'hat', image: hat, isFlipped: false, matched: false },
  { id: 4, type: 'hat', image: hat, isFlipped: false, matched: false },
  { id: 5, type: 'chair', image: chair, isFlipped: false, matched: false },
  { id: 6, type: 'chair', image: chair, isFlipped: false, matched: false },
  { id: 7, type: 'products', image: products, isFlipped: false, matched: false },
  { id: 8, type: 'products', image: products, isFlipped: false, matched: false },
  { id: 9, type: 'sunscreen', image: sunscreen, isFlipped: false, matched: false },
  { id: 10, type: 'sunscreen', image: sunscreen, isFlipped: false, matched: false },
  { id: 11, type: 'logo-carrot', image: sunshade, isFlipped: false, matched: false },
  { id: 12, type: 'logo-carrot', image: sunshade, isFlipped: false, matched: false },
]
