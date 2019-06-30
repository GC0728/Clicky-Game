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
  let checkClicked = this.state.images.filter(image => image.clicked === true);
  console.log(checkClicked);

  if (!clickedSmashCharacter.clicked) {
    clickedSmashCharacter.clicked = true;
    this.smashShuffle(images);
    this.setState({ 
      score: this.state.score + 1,
      bestScore: 
      this.state.score > this.state.bestScore
      ? this.state.score
      : this.state.bestScore
    });
  }

  if (this.state.score === 11) {
    this.setState({
      score: 0,
      bestScore: 0
    })

    checkClicked.forEach(image => {
      image.clicked = false;
    })
  }


};

// Render images
render() {
  return (
    <div className="container">
      <Header  score={this.state.score}  bestScore={this.state.bestScore}/>
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
