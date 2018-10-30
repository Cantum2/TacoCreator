import React, { Component } from 'react'
import styled from "styled-components"
export default class Picker extends Component {
  render() {
      console.log(this.props.ingredient + "from picker")
      let currentIngredient = this.props.ingredient;
      console.log(currentIngredient)
    return (
      <Wrapper>
            {currentIngredient.map(item => (
               {item}
            ))}
      </Wrapper>
    )
  }
}

let Wrapper = styled.div`
    background-color: gray;
    width: 15%;
    margin-right: 10px;
    margin-left: 10px;
    margin-top: 10px;
    height: 20%;
    float: left;
    overflow-y: 10px;
`