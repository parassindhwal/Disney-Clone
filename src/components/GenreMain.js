import React from 'react';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './GenreMain.css';

function GenreMain() {
    const {searched} = useSelector((state) => state.searched);
    const base_url = "https://image.tmdb.org/t/p/original/";
    return (
        <Link className='genre' to="/search">
            <h3>Searched</h3>
            <div className='genre__posters__wrapper'>
                {searched?.map(movie =><>
                    {(movie.backdrop_path) && <Link className="genre__posters__wrapper__main" to={`/search/${movie.id}`}>
                        <img 
                        key={movie.id}
                        className='genreMain__poster' 
                        src={`${base_url}${movie.backdrop_path}`} 
                        alt={movie.name} />
                        {/* <div className="genreMain__desc">
                            <h3>{movie.title}</h3>
                            <h4>{movie.vote_average}</h4>
                        </div> */}
                    </Link>}
                
                </> 
                )}
            </div>
        </Link>
    )
}

export default GenreMain;
