import React, { Component } from 'react'
import withRedux from 'next-redux-wrapper'

import withMaterialRoot from '../lib/materialRoot'
import DefaultLayout from '../layouts/default'
import { initStore } from '../lib/initRedux'

import ExampleContainer from '../containers/ExampleContainer'

@withRedux(initStore)
@withMaterialRoot
class IndexPage extends Component {
  render = () =>
    <DefaultLayout title='Home'>
      <h1>Hello</h1>
      <ExampleContainer />
    </DefaultLayout>
}

export default IndexPage
