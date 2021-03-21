import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'



let NavContainer = styled.nav`
width: 100%;
height: 7rem;
background-color: black;
color: white;
display:flex;
align-items:center;
justify-content: space-between;
`

let NavLogo = styled.div`
position: relative;
font-size: 3rem;
font-family: "Nasalization";
font-weight:800;
left: 5rem;
color: white;
text-decoration:none;


&:visited{
    text-decoration:none;
    color:white;
}

    @import url(//db.onlinewebfonts.com/c/f88cd11de6d9aa48ddc14cf6181b309c?family=Nasalization);
    @font-face {font-family: "Nasalization"; src: url("//db.onlinewebfonts.com/t/f88cd11de6d9aa48ddc14cf6181b309c.eot"); src: url("//db.onlinewebfonts.com/t/f88cd11de6d9aa48ddc14cf6181b309c.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/f88cd11de6d9aa48ddc14cf6181b309c.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/f88cd11de6d9aa48ddc14cf6181b309c.woff") format("woff"), url("//db.onlinewebfonts.com/t/f88cd11de6d9aa48ddc14cf6181b309c.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/f88cd11de6d9aa48ddc14cf6181b309c.svg#Nasalization") format("svg"); };
    
`

let ListContainer = styled.ul`
    display:flex;

`

let ListItem = styled.li`
    list-style: none;
    padding:1rem;
    color:white;
    font-family: "Nasalization";


        @import url(//db.onlinewebfonts.com/c/f88cd11de6d9aa48ddc14cf6181b309c?family=Nasalization);
    @font-face {font-family: "Nasalization"; src: url("//db.onlinewebfonts.com/t/f88cd11de6d9aa48ddc14cf6181b309c.eot"); src: url("//db.onlinewebfonts.com/t/f88cd11de6d9aa48ddc14cf6181b309c.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/f88cd11de6d9aa48ddc14cf6181b309c.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/f88cd11de6d9aa48ddc14cf6181b309c.woff") format("woff"), url("//db.onlinewebfonts.com/t/f88cd11de6d9aa48ddc14cf6181b309c.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/f88cd11de6d9aa48ddc14cf6181b309c.svg#Nasalization") format("svg"); };


    &:hover{
        opacity:.5;
    }
`

let StyledLink = styled(Link)`
    text-decoration:none;
`

const Nav = () => {
    return (
        <div>
            <NavContainer>

                <StyledLink to='/'>
                    <NavLogo>
                        NASA
                        </NavLogo>


                </StyledLink>


                <ListContainer>
                    <StyledLink to='/about'>
                        <ListItem>
                            About
                         </ListItem>
                    </StyledLink>

                    <StyledLink to='/gallery'>
                        <ListItem>
                            Gallery
                       </ListItem>

                    </StyledLink>


                </ListContainer>
            </NavContainer>

        </div>
    )
}

export default Nav
