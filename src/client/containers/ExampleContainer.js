import React, { Component } from 'react'
import { connect } from 'react-redux'

import Example from '../components/Example'
import { updateScore } from '../actions/ExampleActions'

const mapStateToProps = state => ({
  score: state.example.score
})

const mapDispatchToProps = { updateScore }

@connect(mapStateToProps, mapDispatchToProps)
class ExampleContainer extends Component {
  render = () =>
    <div>
      <Example
        score={this.props.score}
        updateScore={this.props.updateScore}
      />
    </div>
}

export default ExampleContainer
