import React from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './components/Nav';
import Banner from './components/Banner';
import GenreMain from './components/GenreMain';
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from './firebase';
import Spinner  from 'react-spinkit';
import styled from 'styled-components';
import Login from './components/screens/Login';

function App() {
  const [user, loading] = useAuthState(auth); 

  if(loading) {
    return (
      <Apploading>
        <ApploadingContent>
          <img src="/images/cta-logo-one.svg" alt="" />

          <Spinner 
            name="ball-scale-ripple-multiple"
            color="#0063E5"
            fadeIn="none"
          />
        </ApploadingContent>
      </Apploading>
    )
  }
  return (
    <div className="app">
      <Router>
        {!user ? (<Login />):

        (<>
          <Nav />
          <Switch>
            <Route path="/:genre/:id">
              <Banner />
            </Route>
            <Route path="/search">
              <GenreMain />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </>)
        }

      </Router>
    </div>
  );
}

export default App;

const Apploading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

const ApploadingContent = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }
`;