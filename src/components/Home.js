import React from 'react'
import Emoji from './render/Emoji'

export default class Home extends React.Component {
  render() {
    return <h1>Front-end for the REST API <Emoji symbol="🔌" label="Plug"/></h1>
  }
}