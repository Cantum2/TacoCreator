import React, { Component, Fragment } from "react";
import styled from "styled-components";
import Picker from "./Picker";
export default class CondimentPickers extends Component {
  render() {
    console.log(this.props.tacoIngredients);
    const {
      baseLayers,
      condiments,
      mixins,
      seasonings,
      shells
    } = this.props.tacoIngredients;
    let ingredients = [baseLayers, condiments, mixins, seasonings, shells];
    console.log(ingredients);
    let keys = Object.keys(this.props.tacoIngredients);
    console.log(keys);
    for (let i in keys) {
      if (keys[i] == "loading") {
        keys.splice(i, 1);
      }
    }
    let iterationNumber = 0;
    console.log(keys);
    return (
      <Fragment>
        {ingredients.map((ingredientName, i) => (
          <Picker ingredient={ingredientName} nameOfSection={keys[i++]} />
        ))}
      </Fragment>
    );
  }
}
