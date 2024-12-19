import React from "react";
import Card from "../../css/Detail.module.css";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../images/main1.png";
import img2 from "../../images/main2.png";
import img from "../../images/main.png";

function CardSlider() {
  return (
    <div className={Card.carousel}>
      <Carousel
        interval={3000}
        indicators={false} // Hide the indicators
        controls={true} // Show navigation arrows
        fade={true}
      >
        <Carousel.Item>
          <img className={Card.carouselImage} src={img2} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className={Card.carouselImage} src={img} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className={Card.carouselImage} src={img1} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CardSlider;
