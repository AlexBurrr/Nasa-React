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

`

let ListContainer = styled.ul`
    display:flex;

`

let ListItem = styled.li`
    list-style: none;
    padding:1rem;

    &:hover{
        opacity:.5;
    }
`

const Nav = () => {
    return (
        <div>
            <NavContainer>
                <NavLogo>
                    <Link to='/'>
                        <ListItem>
                            NASA
                         </ListItem>
                    </Link>

                </NavLogo>
                <ListContainer>
                    <Link to='/about'>
                        <ListItem>
                            About
                         </ListItem>
                    </Link>

                    <Link to='/gallery'>
                        <ListItem>
                            Gallery
                       </ListItem>

                    </Link>


                </ListContainer>
            </NavContainer>

        </div>
    )
}

export default Nav
