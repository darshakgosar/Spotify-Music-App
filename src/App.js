//import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './css/App.css';
import Login from  './Login/Login';
import {getTokenFromUrl} from './Spotify/SpotifyConnection';
import spotifyWebApi from "spotify-web-api-js";
import Player from './Spotify/Dashboard';
import { useDataLayerValue } from './Data/DataLayer';


const spotify = new spotifyWebApi();

function App() {
  //const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;
    if(_token){
      spotify.setAccessToken(_token);
      dispatch({
        type:"SET_TOKEN",
        token: _token
      });

      spotify.getMe().then(user =>{

        dispatch({
          type: 'SET_USER',
          user: user
        });
      });

      spotify.getPlaylist('37i9dQZEVXbMDoHDwVN2tF').then((response) =>{
        dispatch({
          type:"SET_DISCOVER_WEEKLY",
          discover_weekly: response
        });
      });
    }
    
  },[]);
  console.log("User: ",user)
  console.log("Token: ",token)
  return (
    <div className="app">
      {
        token? (
          <Player spotify= {spotify}/>
        ):(
          <Login/>
        )
      }
     
    </div>
  );
}

export default App;
