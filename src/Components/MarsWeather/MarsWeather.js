import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'





let WeatherContainer = styled.div`
    width: 100%;
    height: 35rem;
    background-color: black;
    
`
let Header = styled.h1`
    position: relative;
    color: #FFFFFF;
    font-size: 3rem;
    top: 3rem;
    left: 5rem;
`
let WeatherDataContainer = styled.div`
position: relative;
top: 5rem;
width: 100%;
height: 25rem;
background-color: red;
`

let url = 'https://api.nasa.gov/insight_weather/?api_key=rpmjI7MRmhGa7jHTtj1zxa7B8oX5H2cyhgSmAGoK&feedtype=json&ver=1.0'




const MarsWeather = () => {

    const [weather, setWeather] = useState('')


    useEffect(() => {
        axios.get(url)
            .then(res => {
                setWeather(res.data)
            })
    }, [])



    console.log(weather);

    return (


        <WeatherContainer>
            <Header>Mars Weather</Header>
            <WeatherDataContainer>
                {weather.map((a, index) =>
                    (
                        <p key={index}>
                            {a}
                        </p>
                    )
                )}
            </WeatherDataContainer>


        </WeatherContainer>



    )
}

export default MarsWeather
