import React, { Component, Fragment } from "react";
import styled from "styled-components";
import DisplayPanel from "./DisplayPanel";
import CondimentPickers from "./CondimentPickers";
import { Provider } from "react-redux";
import store from "../Store.js";
import {connect} from "react-redux";
import { fetchBaseLayers } from "../actions/baselayerActions";

import "../App.css"; 

class App extends Component {
  state = {
    baseLayers: [],
    condiments: [],
    seasonings: [],
    mixins: [],
    shells: [],
    baseLayersAdded: [],
    condimentsAdded: [],
    mixinsAdded: [],
    seasoningsAdded: [],
    shellsAdded: [],
    currentTaco: [],
    tacoHasItems: false,
    hasBaseLayers: false,
    hasCondiments: false,
    hasSeasonings: false,
    hasShells: false,
    hasMixins: false,
    completeTaco: false,
    loading: true
  };

  itemAdded = (itemToTaco, group) => {
    let joined = [];
    this.setState({ tacoHasItems: true });

    switch (group) {
      case "Base Layers":
        joined = this.state.baseLayersAdded.concat(itemToTaco);
        this.setState({ baseLayersAdded: joined });
        this.setState({ hasBaseLayers: true });
        break;
      case "Condiments":
        joined = this.state.condimentsAdded.concat(itemToTaco);
        this.setState({ condimentsAdded: joined });
        this.setState({ hasCondiments: true });
        break;
      case "Mixins":
        joined = this.state.mixinsAdded.concat(itemToTaco);
        this.setState({ mixinsAdded: joined });
        this.setState({ hasMixins: true });
        break;
      case "Seasonings":
        joined = this.state.seasoningsAdded.concat(itemToTaco);
        this.setState({ hasSeasonings: true });
        this.setState({ seasoningsAdded: joined });
        break;
      case "Shells":
        joined = this.state.shellsAdded.concat(itemToTaco);
        this.setState({ shellsAdded: joined });
        this.setState({ hasShells: true });
        break;
      default:
        break;
    }
  };

  componentWillMount(){
    this.props.fetchBaseLayers();
  }

  async componentDidMount() {
    const urls = [
      // "https://tacos-ocecwkpxeq.now.sh/baseLayers/",
      "https://tacos-ocecwkpxeq.now.sh/mixins/",
      "https://tacos-ocecwkpxeq.now.sh/seasonings/",
      "https://tacos-ocecwkpxeq.now.sh/condiments/",
      "https://tacos-ocecwkpxeq.now.sh/shells/"
    ];

    const res = await Promise.all(urls.map(url => fetch(url))).then(responses =>
      Promise.all(responses.map(res => res.json()))
    );
    const [mixins, seasonings, condiments, shells] = res;
    this.setState({ mixins,  seasonings, condiments, shells});
    this.setState({ loading: false });
  }
  render() {
    return (
      <Provider store={store}>
        <Fragment >
          {this.state.loading ? (
            <div>
            <LoadingIcon>
              <h1>Heating the meat...</h1>
            </LoadingIcon>
          </div>
          ) : (
            <div>
              <DisplayWrapper>
                <DisplayPanel currentTaco={this.state} />
              </DisplayWrapper>
              <SelectionPanel>
                <CondimentPickers
                  tacoIngredients={this.props.baseLayers}
                  tacoIng={this.itemAdded}
                />
              </SelectionPanel>
            </div>
          )}
        </Fragment>
      </Provider>
    );
  }
}

const SelectionPanel = styled.div`
  background-color: #682860;
  height: 40%;
  width: 100%;
  position: fixed;
  bottom: 0;
`;

const DisplayWrapper = styled.div`
  background-color: LightSalmon;
  height: 60%;
  width: 100%;
  position: fixed;
  text-align: center;
`;

const LoadingIcon = styled.div`
  position: absolute;
  left: 45%;
  top: 35;
  width: 300px;
  height: 300px;
  background-image: url("../../Images/Tacos.gif");
  background-repeat: no-repeat;
`;

const mapStateToProps = state => ({
  baseLayers: state.baseLayers.items
})

export default connect(null, {fetchBaseLayers})(App);
