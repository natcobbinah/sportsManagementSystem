import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import { carouselData } from "../staticdata/staticdata";
import "./carousel.css";

function ImageSliders() {
  return (
    <Carousel>
      {carouselData.map((data, i) => (
        <Carousel.Item interval={5000}>
          <img className="imageItem w-100 p-10" src={data.p} alt={data.h} />
          <Carousel.Caption>
            <h3>{data.h}</h3>
            <p>{data.p}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ImageSliders;
