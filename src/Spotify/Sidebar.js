import React from 'react';
import "../css/Sidebar.css";
import SidebarOption from './SidebarOption';
// import HomeIcon from '@mui/icons-material/Home';

function Sidebar(props) {
    return (
        <div className='sidebar'>
            <img className="sidebar__logo" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="logo"/> 
            <SidebarOption Icon="" title="For You"/>
            <SidebarOption Icon="" title="Top Tracks"/>
            <SidebarOption Icon="" title="Favourites"/>
            <SidebarOption Icon="" title="Recently Played"/>
            <img className="sidebar_avatar" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png" alt='avatar'/>   
        </div>
        
        

    );
}

export default Sidebar;