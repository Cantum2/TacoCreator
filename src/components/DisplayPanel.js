import React, { Component, Fragment } from 'react'
import styled from "styled-components"

export default class DisplayPanel extends Component {
  render() {
    console.log(this.props.currentTaco + "From display panel")
    return (
      <Fragment>
        {this.props.currentTaco.tacoHasItems ? (
          <div>
            <p>Condiments: {this.props.currentTaco.condimentsAdded}</p>
            <p>Base layers: {this.props.currentTaco.baseLayersAdded}</p>
            <p>Seasonings: {this.props.currentTaco.seasoningsAdded}</p>
            <p>Mixins: {this.props.currentTaco.mixinsAdded}</p>
            <p>Shells: {this.props.currentTaco.shellsAdded}</p>
            {this.props.currentTaco.completeTaco ? (
              <p>Taco Complete</p>
            ): 
            <p>Not Complete</p>
            }
          </div>
        ) :
          <h1>Choose your taco!</h1>
        }
      </Fragment>
    )
  }
}

