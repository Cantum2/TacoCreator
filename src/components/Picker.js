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
              <div>
                <label for={item.name}>{item.name}</label>
               <input type="checkbox" name={item.name}/>
               </div>
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
    height: 95%;
    float: left;
    overflow-y: scroll;
    padding: 5px;
    border-radius: 5px;
`