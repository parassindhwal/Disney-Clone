import { instance, truncate } from '../util';
import React, {useEffect, useState, useRef} from 'react'
import './Row.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';


function Row({title, fetchURL}) {
    const [movies, setMovies] = useState();
    let scrl = useRef(null);
    const [scrollX, setScrollX] = useState(0);
    const [scrollEnd, setScrollEnd] = useState(false);

    const slide = (shift) => {
        scrl.current.scrollLeft += shift;
        setScrollX(scrollX + shift);

        if(Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <= scrl.current.offsetWidth) {
        setScrollEnd(true);
        } else {
        setScrollEnd(false);
        }
    }

    const scrollCheck  = () => {
        setScrollX(scrl.current.scrollLeft);
        if(Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <= scrl.current.offsetWidth) {
        setScrollEnd(true);
        } else {
        setScrollEnd(false);
        }
    }

    // useEffect(() => {
    //     if(scrl.current && scrl?.current?.scrollWidth === scrl?.current?.offsetWidth) {
    //     setScrollEnd(true);
    //     } else {
    //     setScrollEnd(false);
    //     }
    // }, [scrl?.current?.scrollWidth, scrl?.current?.offsetWidth])

    const base_url = "https://image.tmdb.org/t/p/original/";
    useEffect(() => {
        // dispatch(loadmovies(fetchURL))
        async function fetchData() {
            const request = await instance.get(fetchURL);
            setMovies(request.data.results);
        }

        fetchData();
    }, [fetchURL])
    return (
        <div className="row">
            <h2 className="row__title">{title}</h2>
            <div className="row__wrapper">
                {scrollX !== 0 && (<button className="prev" onClick={() => slide(-scrl.current.offsetWidth + 150)}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </button>)}
            <div className="row__posters" ref={scrl} onScroll={scrollCheck}>
                {movies?.map((movie) => (
                    <Link to={`/${title}/${movie.id}`} className="row__poster__wrapper">
                        <div className="wrapper-div">
                            <img 
                                key={movie.id}
                                className={`row__poster`} 
                                src={`${base_url}${movie.poster_path}`} 
                                alt={movie.name} />
                            <div       className="row__poster__overlay">
                                <h3>{movie.title}</h3>
                                <h5>{movie.vote_average}/10</h5>
                                <p>{truncate(movie.overview, 52)}</p>
                            </div>
                            <div className="fade"></div>

                        </div>
                    </Link>
                ))
                }
            </div>
                {!scrollEnd && (<button className="next" onClick={() => slide(+scrl.current.offsetWidth - 150)}>
                    <FontAwesomeIcon icon={faAngleRight} />
                </button>)}
            </div>
        </div>
    )
}

export default Row;
