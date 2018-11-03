import React, { Component } from "react";
import styled from "styled-components";
export default class Picker extends Component {
  state = {
    isDisabled: false,
    baseLayers: [],
    condiments: [],
    mixins: [],
    seasonings: [],
    shells: [],
    amountOfCondiments: 0,
    amountOfMixins: 0
  };

  itemChecked = (itemClicked, group) => {
    switch (group) {
      case "Base Layers":
        this.state.baseLayers.push(itemClicked);
        this.setState({ isDisabled: true });

        break;
      case "Condiments":
        this.state.condiments.push(itemClicked);
        this.setState({
          amountOfCondiments: this.state.amountOfCondiments + 1
        });
        if (this.state.amountOfCondiments == 2) {
          this.setState({ isDisabled: true });
        }

        break;
      case "Mixins":
        this.state.mixins.push(itemClicked);
        this.setState({ amountOfMixins: this.state.amountOfMixins + 1 });
        if (this.state.amountOfMixins == 1) {
          this.setState({ isDisabled: true });
        }
        break;
      case "Seasonings":
        this.state.seasonings.push(itemClicked);
        this.setState({ isDisabled: true });

        break;
      case "Shells":
        this.state.shells.push(itemClicked);
        this.setState({ isDisabled: true });

        break;
      default:
        break;
    }
    this.props.dataPass(itemClicked, group);
  };

  render() {
    let currentIngredient = this.props.ingredient;
    let nameOfIngredient = this.props.nameOfSection;
    return (
      <Wrapper>
        <h1>{nameOfIngredient}</h1>
        {currentIngredient.map(item => (
          <div>
            <label htmlFor={item.name}>{item.name}</label>
            <input
              type="checkbox"
              name={item.name + nameOfIngredient}
              disabled={this.state.isDisabled}
              onClick={() => this.itemChecked(item.name, nameOfIngredient)}
            />
          </div>
        ))}
      </Wrapper>
    );
  }
}

let Wrapper = styled.div`
  background-color: #69A583;
  width: 15%;
  margin: 10px;
  height: 95%;
  float: left;
  overflow-y: scroll;
  padding: 5px;
  border-radius: 5px;
`;
