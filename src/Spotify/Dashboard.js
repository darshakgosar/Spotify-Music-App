import React from 'react';
import "../css/Dashboard.css";
import Sidebar from "./Sidebar";
import Body from "./SongsList";
import MusicPlayer from './MusicPlayer';


function Player({spotify}) {
    return (
        <div className='player'>
            <div className="player__body">
                <div className="col-2">
                    <Sidebar/>
                </div>
                <div className="col-4">
                    <Body spotify={spotify}/>
                </div>
                <div className="col-6">
                <MusicPlayer spotify={spotify}/>
                </div>
                {/* {sidebar} */}
                
                

            </div>            
            
        </div>
    );
}

export default Player;