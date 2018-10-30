import React, {Component} from "react";
import styled from "styled-components"
import DisplayPanel from "./DisplayPanel"
import CondimentPickers from "./CondimentPickers"
class App extends Component{
    state = {
        layers: [],
        mixins: [],
        seasons: [],
        condiments: [],
        shells: []
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
    
         console.log(... res);
    }
    render() {
      return (
        <div>
            <DisplayPanel />
            <SelectionPanel>
                <CondimentPickers />
            </SelectionPanel>
        </div>
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


export default App;