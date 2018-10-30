import React, {Component, Fragment} from "react";
import styled from "styled-components"
import DisplayPanel from "./DisplayPanel"
import CondimentPickers from "./CondimentPickers"

class App extends Component{
    state = {
        mixins: [],
        condiments: [],
        loading: true
    }

    async componentDidMount() {
        const urls = [
          "https://tacos-ocecwkpxeq.now.sh/baseLayers/",
          "https://tacos-ocecwkpxeq.now.sh/mixins/",
          "https://tacos-ocecwkpxeq.now.sh/seasonings/",
          "https://tacos-ocecwkpxeq.now.sh/condiments/",
          "https://tacos-ocecwkpxeq.now.sh/shells/",
        ];
    
        const res = await Promise.all(urls.map(url => fetch(url))).then(responses =>
          Promise.all(responses.map(res => res.json()))
        );
         const [baseLayers, mixins, seasonings, condiments, shells] = res;
         this.setState({baseLayers});
         this.setState({mixins});
         this.setState({seasonings});
         this.setState({condiments});
         this.setState({shells});   
         this.setState({loading: false})
    }
    render() {
      return (
          <Fragment>
          {this.state.loading ? (
              <LoadingIcon />
          ):  <div>
          <DisplayPanel />
          <SelectionPanel>
              <CondimentPickers tacoIngredients={this.state} />
          </SelectionPanel>
         </div>}
       </Fragment>
      );
    }
}

const SelectionPanel = styled.div`
background-color: #682860;
height: 40%;
width:100%;
position: fixed; 
bottom:0;
`

const LoadingIcon = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  border: 12px solid whitesmoke;
  border-radius: 50%;
  border-top: 12px solid hsl(0, 61%, 50%);
  width: 100px;
  height: 100px;
  animation: spin 2s linear infinite;

@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`

export default App;