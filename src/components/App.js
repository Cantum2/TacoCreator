import React, {Component} from "react";

class App extends Component{

    componentDidMount(){
        fetch('https://tacos-ocecwkpxeq.now.sh/baseLayers/')
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
    }

    render() {
      return (
          <div>
              <p>Helllo</p>
          </div>
      );
    }
}

export default App;