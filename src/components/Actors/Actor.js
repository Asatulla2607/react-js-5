import axios from 'axios'
import React, { useEffect, useState } from 'react'
import APIKEY from '../ApiKey'
import Slider from "react-slick";

const Actor = ({id}) => {
    const [Actors,setActors] = useState([])
    const getActors = async () =>{
        const url = await axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${APIKEY}&language=en-US`)
        const {data} = await url
        setActors(data.cast)
    } 
    useEffect(()=>{
        getActors()
    },[])
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:6,
    slidesToScroll: 3
  };
    return (
        <div id='actor'>
            <div className='conteiner'>
                <Slider {...settings}>
                    {Actors.map((el)=> (
                        <div>
                        <img width={150}
                         src={`https://media.themoviedb.org/t/p/w276_and_h350_face/${el.profile_path}`} 
                         alt="img"
                         />
                         <h3>{el.name}</h3>
                         </div> 
                    ))}
                </Slider>
                    
            </div>
        </div>
  )
}

export default Actor;
