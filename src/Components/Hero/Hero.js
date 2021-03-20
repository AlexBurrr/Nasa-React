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






const Hero = () => {
    return (
        <HeroContainer>
            <ImgContainer src={HeroImg} />
        </HeroContainer>
    )
}

export default Hero
