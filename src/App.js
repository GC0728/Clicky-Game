import React, { Component } from 'react';
import './App.css';
import Wrapper from "./components/Wrapper";
import ImagesCard from "./components/ImagesCard";
import images from "./images.json";

class App extends Component {
  state = {
    images
  };

// Function to toggle images state changes

// Render images
render() {
  return (
    <Wrapper>
      <h1>Testing</h1>
      {this.state.images.map(image => (
        <ImagesCard
          id={image.id}
          key={image.id}
          name={image.name}
          image={image.image}
        />
        ))}
    </Wrapper>
  )
};


};

export default App;
