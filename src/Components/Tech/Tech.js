import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear()
today = yyyy + '-' + mm + '-' + dd



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
    console.log(asteroid);
    for (const item in asteroid) {
        let thing = (asteroid[item]).slice(0)
        thing.slice(0).map((item, index) => {
            if (item.is_potentially_hazardous_asteroid === true) {
                astName.push(item.name)
            }

        }, [])
    }

    console.log(astName);

    return (
        <div>
            {
                astName.map((name, index) => {
                    return (
                        <p key={index}>
                            {name}
                        </p>
                    )
                })
            }


        </div>
    )
}

export default Tech
