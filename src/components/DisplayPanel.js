import React, { Component, Fragment } from "react";
import styled from "styled-components";
import "../App.css"; 

export default class DisplayPanel extends Component {
  state = {
    numberOfElements: 0,
    tacoComplete: false,
    savedTacos: [],
    tacoName: "",
    showTacos: false
  };

  componentWillReceiveProps() {
    this.setState({ numberOfElements: this.state.numberOfElements + 1 });
    console.log(this.state.numberOfElements);
  }

  saveTaco = () => {
    let randomTacoNames = [
      "James",
      "John",
      "Robert",
      "Michael",
      "William",
      "David",
      "Richard",
      "Joseph",
      "Charles",
      "Matthew",
      "Anthony",
      "Betty",
      "Donald",
      "Dorothy",
      "Mark",
      "Sandra",
      "Paul",
      "Ashley",
      "Steven",
      "Kimberly",
      "Andrew",
      "Donna",
      "Kenneth"
    ];

    //Handles saving blank input box
    if (this.state.tacoName == "") {
      let randomName =
        randomTacoNames[Math.floor(Math.random() * randomTacoNames.length)];
      this.setState({ tacoName: randomName });
    } else {
      this.setState({ tacoName: this.state.tacoName });
    }

    let currentTaco = this.props.currentTaco;
    currentTaco.name = this.state.tacoName;
    let tacoArray = this.state.savedTacos.concat(currentTaco);
    this.setState({ savedTacos: tacoArray });
    console.log(this.state.savedTacos);
  };

  nameTheTaco = tacoName => {
    this.setState({ tacoName: tacoName.target.value });
    console.log(this.state);
  };

  clearTacos = () => {

  };

  deleteTaco = (tacoToDelte) =>{
    let savedTacos = this.state.savedTacos;

    let indexOfTaco = savedTacos.indexOf(tacoToDelte);
    savedTacos = savedTacos.splice(indexOfTaco, 1);
    this.setState({savedTacos});
  }

  showSaved = () => {
    this.setState({ showTacos: true });
  };

  render() {
    console.log(this.props.currentTaco + "From display panel");
    const {
      condimentsAdded,
      baseLayersAdded,
      seasoningsAdded,
      mixinsAdded,
      shellsAdded,
      tacoHasItems
    } = this.props.currentTaco;
    return (
      <Fragment>
        {tacoHasItems ? (
          <div>
            {condimentsAdded.length > 0 && (
              <p>
                <strong>Condiments: </strong>
                {condimentsAdded}
              </p>
            )}
            {baseLayersAdded.length > 0 && (
              <p>
                <strong>Base layers: </strong>
                {baseLayersAdded}
              </p>
            )}
            {seasoningsAdded.length > 0 && (
              <p>
                <strong>Seasonings: </strong>
                {seasoningsAdded}
              </p>
            )}
            {mixinsAdded.length > 0 && (
              <p>
                <strong>Mixins: </strong> {mixinsAdded}
              </p>
            )}
            {shellsAdded.length > 0 && (
              <p>
                <strong>Shells: </strong> {shellsAdded}
              </p>
            )}
            {this.state.numberOfElements == 5 ? (
              <SentenceWrapper>
                <p>
                  Lets Taco 'bout the Taco you built! You created a monsterosity
                  of a taco with a base layer of some succulent{" "}
                  {this.props.currentTaco.baseLayersAdded} on the bottom and{" "}
                  {this.props.currentTaco.condimentsAdded} to solidify that
                  wonderful taste. You also mixed in some super tasty{" "}
                  {this.props.currentTaco.mixinsAdded}. We cant forget the{" "}
                  {this.props.currentTaco.seasoningsAdded} sprinkled on the top.
                  All of this is on a warm {this.props.currentTaco.shellsAdded}.
                </p>
                <input
                  type="text"
                  placeholder="Name your beast!"
                  onChange={nameOfTaco => this.nameTheTaco(nameOfTaco)}
                />
                <CuteButton onClick={this.saveTaco}>Save your taco!</CuteButton>
                <CuteButton onClick={this.clearTacos}>Clear Taco!</CuteButton>
                {this.state.savedTacos.length > 0 ? (
                  <ViewSavedTacos onClick={this.showSaved}>
                    Show Saved
                  </ViewSavedTacos>
                ) : (
                  <p></p>
                )}
                {this.state.showTacos ? (
                  <TableBacker>
                    <table className="savedTacoTable">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Base Layers</th>
                          <th>Condiments</th>
                          <th>Mixins</th>
                          <th>Seasonings</th>
                          <th>Shells</th>
                          <th>Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.savedTacos.map(tacos => (
                          <tr>
                            <td>{tacos.name}</td>
                            <td>{tacos.baseLayersAdded[0]}</td>
                            <td>{tacos.condimentsAdded[0]}</td>
                            <td>{tacos.mixinsAdded[0]}</td>
                            <td>{tacos.seasoningsAdded[0]}</td>
                            <td>{tacos.shellsAdded[0]}</td>
                            <td><DeleteTaco onClick={() => this.deleteTaco(tacos)}>Delete</DeleteTaco></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </TableBacker>
                ) : (<p></p>
                )}
              </SentenceWrapper>
            ) : (
              <h1>Keep building!</h1>
            )}
          </div>
        ) : (
          <h1>Choose your taco!</h1>
        )}
      </Fragment>
    );
  }
}

const CuteButton = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: white;
  color: palevioletred;
  border: 2px solid white;
`;

const ViewSavedTacos = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  color: white;
  background: palevioletred;
  border: 2px solid palevioletred;
`;

const DeleteTaco = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: auto;
  color: white;
  background: red;
  border: 2px solid palevioletred;
`;

const SentenceWrapper = styled.div`
  background-color: LightSalmon;
  height: 60%;
  width: 100%;
  position: fixed;
  text-align: center;
`;


const TableBacker = styled.div`
  height: 20%;
  width: 90%;
  margin-left: auto;
  margin-left: auto;
  overflow-y: scroll;
`