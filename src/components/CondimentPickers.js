import React, { Component, Fragment } from "react";
import styled from "styled-components";
import Picker from "./Picker";
export default class CondimentPickers extends Component {
  render() {
    const {
      baseLayers,
      condiments,
      mixins,
      seasonings,
      shells
    } = this.props.tacoIngredients;
    let ingredients = [baseLayers, condiments, mixins, seasonings, shells];
    let keys = ["Base Layers","Condiments","Mixins", "Seasonings", "Shells"]
    return (
      <Wrapper>
          {ingredients.map((ingredientName, i) => (
            <Picker ingredient={ingredientName} nameOfSection={keys[i++]} />
          ))}
      </Wrapper>
    );
  }
}

let Wrapper = styled.div`
    margin-left: 8%;
    height: 100%;
    width: 100%;
`
