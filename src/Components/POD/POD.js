import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';


let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear()
today = yyyy + '-' + mm + '-' + dd


let PodContainer = styled.div`
    position: relative;
    height: 75rem;
    width: 100%;
    background: black;
    color: white;
`;

let Title = styled.span`
position: relative;
top: 3rem;
left: 5rem;
font-size: 3.5rem;
width: 100%;
padding-right: 0;

`

let PicContent = styled.div`
display: flex;
position: relative;
width: 100%;
left: 0rem;
`

let PodImg = styled.img`
position: relative;
height: 60rem;
width:55%;
top:5rem;
left: 5rem;
`
let PicTitle = styled.h2`
position: relative;
width: 30%;
left: 12rem;
top: 5rem;
font-size: 2rem;
`
let PicDate = styled.h2`
position: relative;
left: -9rem;
top: 8rem;
width: 20rem;
`
let PicDesc = styled.p`
position: relative;
left: -18.5rem;
top: 11rem;
width: 50%;
line-height: 150%;
font-family: 'Lato', sans-serif;
font-weight: 400;
font-size: 1.5rem;
`

const POD = () => {

    const [picture, setPicture] = useState('')


    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=rpmjI7MRmhGa7jHTtj1zxa7B8oX5H2cyhgSmAGoK&date=${today}`)
            .then(res => {
                setPicture(res.data)
            })
    }, [])

    let picImg = picture.hdurl;
    let picTitle = picture.title;
    let picDate = picture.date;
    let picDesc = picture.explanation


    return (
        <div>
            <PodContainer>
                <Title> Astronomy Picture of the Day</Title>
                <PicContent>
                    <PodImg src={picImg} />
                    <PicTitle>{picTitle}</PicTitle>
                    <PicDate>{picDate}</PicDate>
                    <PicDesc>{picDesc}</PicDesc>



                </PicContent>



            </PodContainer>


        </div>
    )
}

export default POD
