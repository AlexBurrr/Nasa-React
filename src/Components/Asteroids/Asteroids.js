import React, { useEffect, useState } from 'react'
import axios from 'axios'
import asteroid from '../../Images/Asteroid.jpg'
import styled from 'styled-components'
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear()
today = yyyy + '-' + mm + '-' + dd

const AstContainer = styled.div`
    background-color: black;
    width: 100%;
    height: 40rem;
    color: #FFFFFF;

    background: url(${asteroid})no-repeat center center fixed ;
background-repeat: no-repeat;
background-size: auto;
background-size: cover;
object-fit: cover;


`
const AstTitle = styled.span`
position: relative;
left:37%;
top:3rem;
transform: translate(-50%, -50%);
text-align:center;
font-size: 3.5rem;

`

const AstContWrapper = styled.div`
position: absolute;
left: 50%;
top: 212%;
transform: translate(-50%, -50%);
`

const AstContent = styled.div`
    position: relative;
    display: flex;
    top: -72rem;
    
    
`

const Card = styled.div`
font-family: 'lato', sans-serif;
display: grid;
opacity: .7;
grid-template-columns: 1fr;
grid-template-rows: repeat(4,1fr);
width: 20rem;
height: 20rem;
padding: 2rem;
background: black;
margin: 4rem;
line-height: 2rem;


`






const Tech = () => {

    const [asteroid, setAsteroid] = useState('');
    const [name, setName] = useState('')

    useEffect(() => {
        axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${today}&api_key=rpmjI7MRmhGa7jHTtj1zxa7B8oX5H2cyhgSmAGoK`)
            .then(res => {
                setAsteroid(res.data.near_earth_objects);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    let astName = []
    let date = []
    let speed = []
    let diameter = []
    console.log(asteroid);
    for (const item in asteroid) {
        let thing = (asteroid[item]).slice(0)
        thing.slice(0).map((item, index) => {
            if (item.is_potentially_hazardous_asteroid === true) {
                astName.push(`name: ${item.name}`)
                date.push(`approach date: ${item.close_approach_data[0].close_approach_date_full}`)
                speed.push(`speed: ${(Math.round(item.close_approach_data[0].relative_velocity.miles_per_hour).toFixed(2)).toLocaleString()} mph`)
                diameter.push(`diameter: ${(Math.max(item.estimated_diameter.miles.estimated_diameter_max).toFixed(2))} mi`)
            }

        }, [])
    }


    return (
        <AstContainer>
            <AstTitle>Asteroids Near Earth</AstTitle>
            <AstContWrapper>
                <AstContent>
                    {
                        astName.splice(3).map((name, index) => {
                            return (
                                <Card key={index}>
                                    <>
                                        {name}
                                    </>

                                    {date[index]}
                                    {diameter[index]}
                                    {speed[index]}

                                </Card>

                            )
                        })
                    }
                </AstContent>

            </AstContWrapper>







        </AstContainer>





    )
}

export default Tech
