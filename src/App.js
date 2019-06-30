import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import ImagesCard from "./components/ImagesCard";
import images from "./images.json";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images,
      score: 0,
      bestScore: 0,

  };
  this.imageClick = this.imageClick.bind(this);
};

// Function for random card shuffle/sort order
smashShuffle = array => {
  let imagesIndex = array.length,
  temporaryImage,
  randoImage;

  while (imagesIndex !== 0) {
    randoImage = Math.floor(Math.random() * imagesIndex);
    imagesIndex -= 1;
    temporaryImage = array[imagesIndex];
    array[imagesIndex] = array[randoImage];
    array[randoImage] = temporaryImage;
  }

  return array;

};

// Click Event
imageClick = id => {
  let clickedSmashCharacter = this.state.images.filter(image => image.id === id)[0];
  console.log(clickedSmashCharacter);

  let checkClick = this.state.images.filter(image => image.clicked === true);
  console.log(checkClick);

  if (!clickedSmashCharacter.clicked) {
    // this.clickedSmashCharacter.clicked === true;
    this.smashShuffle(images);
    this.setState({ score: this.state.score + 1});
  }
};

// Function to alter state of "score" 
// handleScoreCount = () => {
//   this.setState({ count: this.state.score + 1});
// }; 

// Render images
render() {
  return (
    <div className="container">
      <Header  score={this.state.score} />
      <Wrapper>
        {this.state.images.map(image => (
        <ImagesCard
          id={image.id}
          key={image.id}
          image={image.image}
          name={image.name}
          imageClick={this.imageClick}
        />
        ))}
      </Wrapper>
    </div>
  )
};


};

export default App;
