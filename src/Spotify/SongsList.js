import React from 'react';
import "../css/SongsList.css";
import { useDataLayerValue } from '../Data/DataLayer';
import SongRow from './SongDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

library.add(faMagnifyingGlass)

function Body({spotify}) {
    const [{ discover_weekly }, dispatch] = useDataLayerValue(); 
    return (
        <div className='body'>
            <div className='body_header'>
                <h2>For You</h2>
                <div className=" body_search">
                    
                    {/* <input className= "_search" type='text' placeholder="Search Song, Artist"/> */}
                    <h4>Search Song, Artist</h4>
                    <FontAwesomeIcon className="search_icon" icon="fa-solid fa-magnifying-glass" />

                </div>
                

            </div>
            <div className="body__songs">
                
                {discover_weekly?.tracks.items.map((item) => (
                <SongRow track={item.track} />
                ))}
            </div>
        </div>
    );
}

export default Body;