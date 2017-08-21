import React from 'react'
import Button from 'material-ui/Button'
import { number, func } from 'prop-types'

const Example = ({score, updateScore}) =>
  <div>
    <span>{score}</span>
    <Button onClick={() => updateScore(1)}>Add</Button>
    <Button onClick={() => updateScore(-1)}>Substract</Button>
  </div>

Example.propTypes = {
  score: number,
  updateScore: func
}

export default Example
