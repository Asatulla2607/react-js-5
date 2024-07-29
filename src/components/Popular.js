import axios from "axios";
import React, { useEffect, useState } from "react";
import APIKEY from './ApiKey/index.js'
import MoviesCard from '../components/kinoPage/MoviesCard.js'

const Popular = () => {
    const [popular, setpopular] = useState([])
    const getPopular = async () => {
        const res = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=1`)
        const { data } = await res
        setpopular(data.results)
    }
    useEffect(() => {
        getPopular()
    }, [])
    return (
        <div id="movies">
            <div className="container">
                <div className="movies">
                    {
                        popular.map(el => <MoviesCard el={el}/>)
                    }
                </div>
            </div>
        </div>
    )
}
export default Popular