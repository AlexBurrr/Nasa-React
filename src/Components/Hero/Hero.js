import React from 'react'
import styled from 'styled-components'
import HeroImg from '../../Images/Hero.jpg'





let HeroContainer = styled.div`
width: 100%;
height: 70rem;
`

let ImgContainer = styled.img`
height: 100%;
width: 100%;
`
let Headline = styled.h1`
position: absolute;
top:37%;
left:50%;
transform: translate(-50%, -50%);
color: #FFFFFF;
font-family: 'nasalization';
font-size: 4rem;
letter-spacing: .2rem;

`
let SubHeadline = styled.p`
    position: absolute;
    top:44%;
    left:50%;
    transform: translate(-50%, -50%);
    color: #FFFFFF;
    font-family: 'nasalization';
    font-size: 2rem;
    font-weight:100;
    opacity:.8;
    letter-spacing: .4rem;
    

`





const Hero = () => {
    return (
        <HeroContainer>
            <ImgContainer src={HeroImg} />
            <Headline>NASA Data Visulaization </Headline>
            <SubHeadline>Everything you need to feed your space obsession</SubHeadline>
        </HeroContainer>
    )
}

export default Hero
