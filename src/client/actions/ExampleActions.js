import { UPDATE_SCORE } from './types'

export const updateScore = i => ({
  type: UPDATE_SCORE,
  payload: i
})
