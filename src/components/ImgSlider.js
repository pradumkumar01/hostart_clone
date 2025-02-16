import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import Slider from 'react-slick';




const ImgSlider = (props) => {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    return (
        <Carousel {...settings}>
            <Wrap>
                <a>
                    <img src="/images/slider-badging.jpg" alt=""/>
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src="/images/slider-badag.jpg" alt=""/>
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src="/images/slider-scale.jpg" alt=""/>
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src="/images/slider-scales.jpg" alt=""/>
                </a>
            </Wrap>
        </Carousel>
    );
}


const Carousel = styled(Slider)`
    margin-top: 20px;

    & > button {
        opacity: 0;
        height: 100%;
        width: 5vw;
        z-index: 1;

        &:hover {
            opacity: 1;
            transition: opacity 0.2s ease;
        }
    }

    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button:before {
        color: white;
    }

    .slick-list {
        overflow: initial;
    }

    .slick-prev {
        left: -75px;
    }

    .slick-next {
        right: -75px;
    }

    @media (max-width: 768px) {
        .slick-prev {
            left: -30px;
        }

        .slick-next {
            right: -30px;
        }
    }
`;


const Wrap = styled.div`
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    
    a {
        border-radius: 4px;
        box-shadow: rgba(0, 0, 0, 0.69) 0px 26px 30px -10px, rgba(0, 0, 0, 0.73) 0px 16px 10px -10px;
        display: block;
        position: relative;
        padding: 4px;
        overflow: hidden;
        
        img {
            width: 100%;
            height: 100%;
            object-fit: cover; 
            box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px, rgba(0 0 0 / 73%) 0px 16px 10px -10px;
        }

        &:hover {
            padding: 0;
            border: 4px solid rgba(249, 249, 249, 0.8);
            transition: border 300ms ease;
        }
    }

    @media (max-width: 768px) {
        a {
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
`;

export default ImgSlider;