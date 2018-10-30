import React, { Component, Fragment } from 'react'
import styled from "styled-components";
import Picker from "./Picker"
export default class CondimentPickers extends Component {
  render() {
      console.log(this.props.tacoIngredients)
      const {baseLayers, condiments, mixins, seasonings, shells} = this.props.tacoIngredients;
      let ingredients = [baseLayers, condiments, mixins, seasonings, shells];
    return (
        <Fragment>
            {ingredients.map(ingredient =>(
                
                <Picker ingredient={ingredient}></Picker>
            ))}
        </Fragment>       
    )
  }
}



