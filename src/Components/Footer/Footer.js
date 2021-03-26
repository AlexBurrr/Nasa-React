import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
position: relative;
width: 100%;
height: 30rem;
background-color: black;
color: #FFFFFF;
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: 1fr;

`
const FooterRovers = styled.div`

`
const FooterItem = styled.div`
position: relative; 
top: 50%;
left: 50%; 
transform: translate(-50%, -50%);
text-align: center;
font-family: 'lato', sans-serif;
`
const Contact = styled.div`
font-family: inherit;
`

const Footer = () => {
    return (
        <div>
            <FooterContainer>
                <FooterRovers>
                    <FooterItem>Data fetched using NASA API</FooterItem>
                </FooterRovers>
                <FooterRovers>
                    <FooterItem><Contact>alexandroberumen@gmail.com</Contact></FooterItem>
                </FooterRovers>
                <FooterRovers>
                    <FooterItem>wed</FooterItem>
                </FooterRovers>
                <FooterRovers>
                    <FooterItem>wed</FooterItem>
                </FooterRovers>
            </FooterContainer>
        </div>
    )
}

export default Footer
