import React, {useEffect, useState} from 'react';
import './Banner.css';
import { useParams } from "react-router-dom";
import { fetchById, instance } from '../util';

const formatDuration = (time) => {
    const hour = Math.floor(time/60);
    const min = time%60;

    return `${hour} hr ${min} min`;
}

// const formatYear = (releaseDate) => {
//     releaseDate = releaseDate?.split('-');
//     return releaseDate[0];
// }
function Banner() {
    const { id } = useParams();
    const [movie, setmovie] = useState();

    useEffect(() => {
        async function fetchDetails () {
            const data = await instance.get(fetchById(id))
            console.log(data);
            setmovie(data.data);
        }

        fetchDetails()

    }, [id])

    return (
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
            backgroundPosition: "center center",
        }}>
            <div className="banner__contents">
                <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner__info">
                    <span className="meta__data ">{formatDuration(movie?.runtime)}</span>
                    <span className="meta__data year">{movie?.release_date.split('-')[0]}</span>
                    <div className="banner__genre">
                        {movie?.genres.map(genre => (<span>{genre.name}</span>))}
                    </div>
                </div>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">{movie?.overview}</h1>
            </div>
            <div className="banner--fadeBottom"></div>
        </header>
    )
}

export default Banner;

// {truncate(movie?.overview, 150)}