import { UPDATE_SCORE } from '../actions/types'

const INITIAL_STATE = {
  score: 0
}

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case UPDATE_SCORE:
      return { ...state, score: state.score + payload }
    default: return state
  }
}
