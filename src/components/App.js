import React, { Component, Fragment } from "react";
import styled from "styled-components";
import DisplayPanel from "./DisplayPanel";
import CondimentPickers from "./CondimentPickers";

class App extends Component {
  state = {
    baseLayers: [],
    condiments: [],
    seasonings: [],
    mixins:[],
    shells:[],
    baseLayersAdded: [],
    condimentsAdded: [],
    mixinsAdded: [],
    seasoningsAdded: [],
    shellsAdded: [],
    tacoHasItems: false,
    loading: true
  };

  itemAdded = (itemToTaco, group) => {
    let joined = [];
    this.setState({tacoHasItems: true});  
    switch (group) {
      case "Base Layers":
        joined = this.state.baseLayersAdded.concat(itemToTaco);
        this.setState({ baseLayersAdded: joined })
        break;
      case "Condiments":
        joined = this.state.condimentsAdded.concat(itemToTaco);
        this.setState({ condimentsAdded: joined })      
        break;
      case "Mixins":
        joined = this.state.mixinsAdded.concat(itemToTaco);
        this.setState({ mixinsAdded: joined })       
         break;
      case "Seasonings":
        joined = this.state.seasoningsAdded.concat(itemToTaco);
        this.setState({ seasoningsAdded: joined })
        break;
      case "Shells":
        joined = this.state.shellsAdded.concat(itemToTaco);
        this.setState({ shellsAdded: joined })     
         break;
      default:
        break;
    }
  }

  async componentDidMount() {
    const urls = [
      "https://tacos-ocecwkpxeq.now.sh/baseLayers/",
      "https://tacos-ocecwkpxeq.now.sh/mixins/",
      "https://tacos-ocecwkpxeq.now.sh/seasonings/",
      "https://tacos-ocecwkpxeq.now.sh/condiments/",
      "https://tacos-ocecwkpxeq.now.sh/shells/"
    ];

    const res = await Promise.all(urls.map(url => fetch(url))).then(responses =>
      Promise.all(responses.map(res => res.json()))
    );
    const [baseLayers, mixins, seasonings, condiments, shells] = res;
    this.setState({ baseLayers });
    this.setState({ mixins });
    this.setState({ seasonings });
    this.setState({ condiments });
    this.setState({ shells });
    this.setState({ loading: false });
  }
  render() {
    return (
      <Fragment>
        {this.state.loading ? (
          <LoadingIcon />
        ) : (
            <div>
              <DisplayWrapper>
                <DisplayPanel currentTaco={this.state} />
              </DisplayWrapper>
              <SelectionPanel>
                <CondimentPickers tacoIngredients={this.state} tacoIng={this.itemAdded} />
              </SelectionPanel>
            </div>
          )}
      </Fragment>
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
  left: 50%;
  top: 50%;
  width: 300px;
  height: 300px;
  background-image: url("../../Images/Tacos.gif");
  background-repeat: no-repeat;
`;

export default App;
