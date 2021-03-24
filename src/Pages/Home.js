import React from 'react'
import Hero from '../Components/Hero/Hero'
import Feature from '../Components/Feature/Feature';
import POD from '../Components/POD/POD';
import Rover from '../Components/Asteroid/Rover'
import Tech from '../Components/Tech/Tech'

const Home = () => {
    return (
        <div>
            <Hero />
            <POD />
            <Rover />
            <Tech />


            <Feature />

        </div>
    )
}

export default Home
