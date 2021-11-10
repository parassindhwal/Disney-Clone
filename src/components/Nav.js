import React, {useState, useRef} from 'react';
import './Nav.css'; 
// import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
//import fontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTv, faLaughBeam, faGlobeAsia, faSearch, faLongArrowAltLeft, faTimes, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


import { searchMovies } from '../actions/searchAction';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

function Nav() {
    const [user] = useAuthState(auth);
    const dispatch = useDispatch();
    const [inputText, setInputText] = useState('');
    const [search, setSearch] = useState(false);
    const resetInput = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(searchMovies(inputText));
        history.push('/search')
        setInputText('');
        setSearch(false)
    }

    const history = useHistory();
    return (
        <div>
            {!search ? <nav className="navBar">
                <div className="navBar__left">
                    <div className="navBar__left__ham">
                        <FontAwesomeIcon className="ham" icon={faBars}/>
                        <ul className="navBar__left__ham__menu">
                            <li onClick={() => auth.signOut()}><FontAwesomeIcon icon={faSignOutAlt}/><span
                            >SignOut</span></li>
                            <li><FontAwesomeIcon icon={faTv}/><span> Channels</span></li>
                            <li><FontAwesomeIcon icon={faGlobeAsia}/><span> Languages</span></li>
                            <li><FontAwesomeIcon icon={faLaughBeam}/><span> Genres</span></li>
                        </ul>
                    </div>
                    <img onClick={() => history.push('/')} src="./images/logo.svg" alt="" />
                    
                    <ul className="navBar__left__list">
                        <li>TV</li>
                        <li>Movies</li>
                        <li>Sports</li>
                        <li>Disney+</li>
                    </ul>
                </div>
                <div className="navBar__right">
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="form__input">
                            <input ref={resetInput} onChange={(e) => setInputText(e.target.value)} type="text" value={inputText} placeholder="Search" />
                            <div className="form__input__icon"><FontAwesomeIcon onClick={() => {setSearch(!search)}} icon={faSearch}/></div>
                        </div>
                        <button className="form__btn" type="submit">submit</button>
                    </form>
                    {/* <FontAwesomeIcon icon={faGhost}/> */}
                </div>

            </nav>:<div className="searching">
            <nav className="mobile__nav">
                <form className="mobileForm" onSubmit={handleSubmit}>
                        <FontAwesomeIcon className="mobileForm__back" onClick={() => {setSearch(!search);setInputText('')}} icon={faLongArrowAltLeft}/>
                        <div className="mobileForm__input">
                            <input onChange={(e) => setInputText(e.target.value)} type="text" value={inputText} placeholder="Start Searching..." />
                        </div>
                        <button className="form__btn" type="submit">submit</button>
                    </form>
                    <div className="mobileForm__input__icon"><FontAwesomeIcon onClick={() => {setInputText('')}} icon={faTimes}/></div>
                </nav>
            </div>}
        </div>
    )
}

export default Nav;

// const Hamburger = styled(FontAwesomeIcon)`
//     cursor: pointer;
// `;