import React, { Component } from 'react'

export default class DisplayPanel extends Component {
  render() {
    console.log(this.props.condiments + "From display panel")
    return (
      <div>
        <p>{this.props.condiments}</p>
      </div>
    )
  }
}
