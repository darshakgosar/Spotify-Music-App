import React from 'react';
import "../css/SidebarOption.css";
function SidebarOption({title,Icon}) {
    return (
        <div className="sidebarOption">
        {/* {Icon && <Icon className="sidebarOption__icon" />} */}
           {Icon? <h4>{title}</h4> : <h3>{title}</h3>} 
            
        </div>
    );
}

export default SidebarOption;