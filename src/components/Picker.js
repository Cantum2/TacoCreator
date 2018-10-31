import React, { Component } from "react";
import styled from "styled-components";
export default class Picker extends Component {
  state = {
    isDisabled: false,
    baseLayers: [],
    condiments: [],
    mixins: [],
    seasonings: [],
    shells: []
  }

  itemChecked = (itemClicked, group) => {
    switch (group) {
      case "Base Layers":
        this.state.baseLayers.push(itemClicked);
        this.setState({isDisabled: true})
        break;
      case "Condiments":
        this.state.condiments.push(itemClicked);
        this.setState({isDisabled: true})
        break;
      case "Mixins":
        this.state.mixins.push(itemClicked);
        this.setState({isDisabled: true})
        break;
      case "Seasonings":
        this.state.seasonings.push(itemClicked);
        this.setState({isDisabled: true})
        break;
      case "Shells":
        this.state.shells.push(itemClicked);
        this.setState({isDisabled: true})
        break;
      default:
        break;
    }
    console.log(this.state)
    console.log(itemClicked, group);
  this.props.dataPass(itemClicked, group)
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
            <input type="checkbox" name={item.name + nameOfIngredient} disabled={this.state.isDisabled} onClick={() => this.itemChecked(item.name, nameOfIngredient)} />
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
  margin-bottom: 10px;
  height: 95%;
  float: left;
  overflow-y: scroll;
  padding: 5px;
  border-radius: 5px;
`;
