import React from 'react'
import Head from 'next/head'

import { node, string } from 'prop-types'

const DefaultLayout = ({ children, title }) =>
  <div>
    <Head>
      <title>{ title ? `${title} - Phonic` : 'Phonic'}</title>
    </Head>
    <main>
      {children}
    </main>
  </div>

DefaultLayout.propTypes = {
  children: node,
  title: string
}

export default DefaultLayout
