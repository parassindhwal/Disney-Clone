import React from 'react'
import styled from 'styled-components';

function Viewers() {
    return (
            <Container>
                <Wrap>
                    <img src="/images/viewers-disney.png" alt="viewers-disney" />
                    <video autoPlay={true} loop={true} playsInline={true} >
                        <source src="videos/1564674844-disney.mp4" type="video/mp4" />
                    </video>
                </Wrap>
                <Wrap>
                    <img src="/images/viewers-pixar.png" alt="viewers-pixar" />
                    <video autoPlay={true} loop={true} playsInline={true} >
                        <source src="videos/1564676714-pixar.mp4" type="video/mp4" />
                    </video>
                </Wrap>
                <Wrap>
                    <img src="/images/viewers-marvel.png" alt="viewers-marvel" />
                    <video autoPlay={true} loop={true} playsInline={true} >
                        <source src="videos/1564676115-marvel.mp4" type="video/mp4" />
                    </video>
                </Wrap>
                <Wrap>
                    <img src="/images/viewers-starwars.png" alt="viewers-starwars" />
                    <video autoPlay={true} loop={true} playsInline={true} >
                        <source src="videos/1608229455-star-wars.mp4" type="video/mp4" />
                    </video>
                </Wrap>
                <Wrap>
                    <img src="/images/viewers-national.png" alt="viewers-national" />
                    <video autoPlay={true} loop={true} playsInline={true} >
                        <source src="videos/1564676296-national-geographic.mp4" type="video/mp4" />
                    </video>
                </Wrap>
        </Container>
    )
}

export default Viewers;

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    grid-gap: 25px;
    margin-top: 30px;
    padding: 30px;


    @media (max-width: 768px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`;

const Wrap = styled.div`
    border-radius: 10px;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    overflow: hidden;
    position: relative;
    /* padding-top: 56.25%; */

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        inset: 0px;
        display: block;
        opacity: 1;
        position: absolute;
        transition: opacity 500ms ease-in-out 0s;
        z-index: 1;
        top: 0;
    }
    @media (hover: hover) {
        &:hover {
                transform: scale(1.05);
                border-color: rgba(249, 249, 249, 0.8);

        }
    }

    /* @media (pointer: coarse) {
        &:hover {
                border-color: rgba(249, 249, 249, 0.8);

        }
    }
     */

     video {
         width: 100%;
         height: 100%;
         object-fit: cover;
         top: 0;
         opacity: 0;
         z-index: 0;
     }

     &:hover video {
         opacity: 1;
     }
`;