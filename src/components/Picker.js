import React, { Component } from "react";
import styled from "styled-components";
export default class Picker extends Component {
  state ={
    isDisabled: false
  }
  render() {
    let currentIngredient = this.props.ingredient;
    let nameOfIngredient = this.props.nameOfSection;
    console.log(currentIngredient);
    return (
      <Wrapper>
        <h1>{nameOfIngredient}</h1>
        {currentIngredient.map(item => (
          <div>
            <label htmlFor={item.name}>{item.name}</label>
            <input type="checkbox" name={item.name} disabled={this.state.isDisabled} />
          </div>
        ))}
      </Wrapper>
    );
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
`;
