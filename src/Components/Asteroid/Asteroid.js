import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import mars from '../../Images/mars.jpg'



let RoverContainer = styled.div`
position: relative;
width: 100%;
height: 80rem;
background: url(${mars})no-repeat center center fixed ;
background-repeat: no-repeat;
background-size: auto;
background-size: cover;
object-fit: cover;
color: #FFFFFF;
`

let Title = styled.span`
    position:absolute;
    font-size: 3.5rem;
    top: 3rem;
    left: 88.5rem;
`

let MarsRoverWidget = styled.span`
    position: relative;
    top: 10rem;
    left: 70rem;
    width: 100%;
`
let Details = styled.div`
position: relative;
top: -25rem;
left: 5rem;
width: 35%;
line-height: 2.3rem;
font-family: 'lato', sans-serif;
font-size: 1.5rem;
`


const Asteroid = () => {



    return (
        <div>
            <RoverContainer>
                <Title>
                    Perseverance Rover Location
                </Title>
                <MarsRoverWidget>
                    <iframe src='https://mars.nasa.gov/maps/location/?mission=M20' width='700' height='450' scrolling='no' frameborder='0' allowfullscreen></iframe>
                </MarsRoverWidget>
                <Details>
                    Scroll and pan around this map to see the latest location and traverse path for the Mars Perseverance rover at Jezero Crater. The goal of the mission is to seek signs of ancient life and collect samples of rock and regolith (broken rock and dust) for possible return to Earth. This map is composed of two layers: a grayscale Jezero Crater map, and a true-color base map. The greyscale base map was created with images from the HiRISE camera on NASA’s Mars Reconnaissance Orbiter, while the color base map is from the European Space Agency Mars Express High Resolution Stereo camera. Engineers created this experience with software used by the mission team who decide where Perseverance will explore, and how to get there. Each dot represents the end point of a drive and is labeled with the day, or sol, on Mars, that the rover stopped.
                </Details>

            </RoverContainer>


        </div>
    )
}

export default Asteroid
