
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {APIKEY} from "../ApiKey/index";
import Actor from '../Actors/Actor.js'
import Video from '../Video/Video'


const DetailPage = () =>{
    const [detail,setDetail] = useState({});
    const {id} = useParams();
    const getDetailPage = async () =>{
        const url = await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&language=en-US`)
        const {data} = await url
        setDetail(data)
    } 
    useEffect(()=>{
        getDetailPage();
    },[])
    const {title, overview, poster_path, runtime} = detail;
    return(
        <>
        <div style={{
            background:`url('https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${detail.backdrop_path}')no-repeat center/cover`
        }} id="detail">
            <div className="container">
                    {
                        <div className="detail">
                            <img src={`https://media.themoviedb.org/t/p/w220_and_h330_bestv2/${poster_path}`}/>
                            <div className="detail-desc">
                                <h2>{title}</h2>
                                <p>{overview}</p>
                                <h2>
                                    {Math.floor(runtime / 2)} h {runtime % 60} m
                                </h2>
                                <div className="detail-vote">
                                    <h2>{Math.round(detail.vote_average * 10)}
                                         <sup>%</sup>
                                    </h2>
                                </div>
                                </div>
                        </div>
                    }
            </div>
        </div>  
        <Actor id={id}/>
        <Video id={id}/>
        </>
    ); 

};

export default DetailPage;

