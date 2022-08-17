import React from 'react';
import "../css/MusicPlayer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCirclePlay, faEllipsis, faVolumeHigh, faForward, faBackward } from '@fortawesome/free-solid-svg-icons';
import ProgressBar from 'react-bootstrap/ProgressBar';
// import { Button } from 'react-bootstrap';

library.add(faCirclePlay, faEllipsis, faVolumeHigh, faForward, faBackward)

// 2:45
function MusicPlayer({ spotify }) {

    return (
        <div className='musicplayer'>
            <div className='mp_songname'>
                <h2>As It Was</h2>
                <p>Harry Styles - Harry's House</p>


            </div>
            <div className=''>
                <img className="mp__image" src="https://i.scdn.co/image/ab67616d0000b273b46f74097655d7f353caab14" alt='img' />

            </div>
            <div className="mp_progressbar">
                <ProgressBar className="_progress " now={60} style={{height:'5px', background:'#261F14'}}/>
            </div>
            

            <div className='mp_buttons'>
                {/* <FontAwesomeIcon className="" icon="fa-solid fa-magnifying-glass" /> */}
                <FontAwesomeIcon icon="fa-solid fa-ellipsis" size="3x" style={{marginTop: '10px'}}/>
                <FontAwesomeIcon icon="fa-solid fa-backward" size="2x" style={{marginTop: '14px'}}/>
                <FontAwesomeIcon icon="fa-solid fa-circle-play" size="5x"/>
                <FontAwesomeIcon icon="fa-solid fa-forward" size="2x" style={{marginTop: '14px'}}/>
                <FontAwesomeIcon icon="fa-solid fa-volume-high" size="3x" style={{marginTop: '10px'}}/>

            </div>

        </div>
    );
}

export default MusicPlayer;