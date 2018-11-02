import React, { Component, Fragment } from 'react'
import styled from "styled-components"
export default class DisplayPanel extends Component {

  state = {
    numberOfElements: 0,
    tacoComplete: false,
    savedTacos: []
  }

  
  componentWillReceiveProps(){
      this.setState({numberOfElements: this.state.numberOfElements + 1})
      console.log(this.state.numberOfElements)
  }

  saveTaco = () => {
    let tacoArray = this.state.savedTacos.concat(this.props.currentTaco);
    this.setState({savedTacos: tacoArray});
    console.log(this.state.savedTacos);
  }

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
            {this.state.numberOfElements == 5 ? (
              <SentenceWrapper>
                <p>
                  You created a monsterosity of a taco with a base layer of some succulent {this.props.currentTaco.baseLayer} on the bottom
                  and {this.props.currentTaco.condimentsAdded} to solidify that wonderful taste. You also mixed in some 
                  super tasty {this.props.currentTaco.mixinsAdded}. We cant forget the {this.props.currentTaco.seasoningsAdded} sprinkled on the top.
                  All of this is on a warm {this.props.currentTaco.shellsAdded}.
                </p>
                <CuteButton onClick={this.saveTaco}>Save your taco!</CuteButton>
              </SentenceWrapper>
            ):
            <h1>Keep building!</h1>
            }
          </div>
        ) :
          <h1>Choose your taco!</h1>
        }
        
      </Fragment>
    )
  }
}

const CuteButton = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: white;
  color: palevioletred;
  border: 2px solid white;
`

const SentenceWrapper = styled.div`
  background-color: LightSalmon;
  height: 60%;
  width: 100%;
  position: fixed;
  text-align: center;
`

