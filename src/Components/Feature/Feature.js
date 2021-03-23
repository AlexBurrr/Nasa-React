import React from 'react'
import styled from 'styled-components';

const Feature = () => {

    let FeatureContainer = styled.div`
    width: 100%;
    height:80rem;
    background-color:#FFFFFF;;
`

    let Header = styled.span`
    position: relative;
    width:100%;
    font-size:4rem;
    left: 5rem;
    top: 3rem;
    
    `



    return (
        <div>
            <FeatureContainer>
                <Header>Featuring</Header>

            </FeatureContainer>
        </div>
    )
}

export default Feature
