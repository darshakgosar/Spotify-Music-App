import React from 'react';
import '../css/Login.css';
import {loginUrl} from '../Spotify/SpotifyConnection';

function Login(){
    return(
    <div className= 'login'>
        
        <img src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' alt= ''/>
        <a href={loginUrl}>Login With Spotify</a>
    </div>
        )
}

export default Login
