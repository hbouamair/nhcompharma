import React from "react";
import { render } from "react-dom";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "../components/Carousel/slider-animations.css";
import "../components/Carousel/stylecarousel.css";

const content = [
  {
    title: "Efficace contre le virus COVID-19 en 30 secondes",
    description:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
    button: "Read More",
    image: require('../assets/carou1.jpeg'),
    user: "Luan Gjokaj",
   
  },
  {
    title: " Efficace que l'eau et le savon",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
    button: "Discover",
    image: require('../assets/carou4.jpeg'),
    user: "Erich Behrens",
    
  },
  {
    title: "Convient à la peau et testé sous contrôle dermatologique",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
    button: "Buy now",
    image: require('../assets/carou3.jpeg'),
    user: "Bruno Vizovskyy",
    
  }
];

const Carousel = () => (
  <div className="caroudel-container">
    <Slider autoplay={3000} className="slider-wrapper">
      {content.map((item, index) => (
        <div
          key={index}
          className="slider-content"
          style={{ background: `url('${item.image}') no-repeat center center` }}
        >
          <div className="inner">
            <h1>{item.title}</h1>
            <p></p>
            <button className="button1">Commander</button>
          </div>
          
        </div>
      ))}
    </Slider>
    </div>

  
);

export default Carousel;
