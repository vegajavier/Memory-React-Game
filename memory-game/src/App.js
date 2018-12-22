import React, { Component } from 'react';
import niners from "./49ers.json";
import NinersCard from "./components/NinersCard";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper"

class App extends Component {
  state = {
    niners,
    clickedGreat:[],
    score: 0,
    status: ""
  };

  shuffleNiner = id => {
    let clickedGreat = this.state.clickedGreat;

    if(clickedGreat.includes(id)){
      this.render.setState({clickedGreat:[],score:0, status: "Click to play"});
      return;
    }else{
      clickedGreat.push(id)

    if(clickedGreat.length ===13){
        this.setState({score:13, status: "Bang Bang Niner Gang You Win", clickedGreat:[]})
        return;
      }
      this.setState({ niners, clickedGreat, score: clickedGreat.length, status: " "});

      for (let i = niners.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [niners[i], niners[j]] = [niners[j], niners[i]];
      }
      }
    };

  removeNiner = id => {
    const niners = this.state.niners.filter(niners => niners.id!== id)
    this.setState({niners})
  };

  render() {
    return (
      <Wrapper>
        <Title>
        49er Greats Clicky Game
          <div total={this.state.score}
        status={this.state.status}
        ></div>
        </Title> 

        
        {this.state.niners.map(niners => (
          <NinersCard
          removeNiner={this.removeNiner}
          id={niners.id}
          key={niners.id}
          image={niners.image}
          name={niners.name}
          position={niners.position}
          number={niners.number}

          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
