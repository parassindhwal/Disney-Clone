import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import './ImgSlider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function ImgSlider() {

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
            className={className}
            style={{ ...style, display: "block", zIndex: 5 }}
            onClick={onClick}
          />
        );
      }

      function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
            className={className}
            style={{ ...style, display: "block",}}
            onClick={onClick}
          />
        );
      }

    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow /> ,
    }
    return (
        <Carousel {...settings}>
            <Wrap>
                <img  src="/images/slider-badging.jpg" alt="slider-badging" />
            </Wrap>
            <Wrap>
                <img src="/images/slider-badag.jpg" alt="slider-badag" />
            </Wrap>
            <Wrap>
                <img src="/images/slider-scale.jpg" alt="slider-badag" />
            </Wrap>
            <Wrap>
                <img src="/images/slider-scales.jpg" alt="slider-badag" />
            </Wrap>
        </Carousel>
    )
}

export default ImgSlider;

const Carousel = styled(Slider)`
    /* min-height: 30vh; */
    margin-top: 11vh;
    padding: 0 calc(3.5vw + 5px); 
    /* width: 100%; */
    position: relative;

     .slick-list {
        overflow: visible;
    }

    @media (max-width: 450px) {
        /* height: 300px; */
    }

`;

const Wrap = styled.div`
    cursor: pointer;
    img {
        border: 4px solid transparent;
        height: 100%;
        width: 100%;
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px; 
        transition-duration: 300ms; 
        @media (hover: hover) {
            &:hover {
                border: 4px solid rgba(249, 249, 249, 0.8);
            } 
        }
        /* @media (hover: none) {
            border: 4px solid rgba(249, 249, 249, 0.8);
        } */
    }

`;
