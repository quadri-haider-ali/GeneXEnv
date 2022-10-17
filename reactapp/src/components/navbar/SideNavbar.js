import React from 'react';
import './SideNavbar.css';
import ListItem from './ListItem';

const SideNavbar = props => {
    const list_items=[
        {title:'Dashboard', class:'fas fa-home fa-lg'},
        {title:'General', class:'fas fa-cog fa-lg'},
    ];

    

    return (
        <div style={{flex:"1.15"}} className="w-75">
            <ul className="d-flex flex-column" style={{listStyleType:"none"}}>
                {list_items.map(item => <ListItem key={item.title} item={item} viewHandler={props.viewHandler}/>)}
            </ul>
        </div>
    )
}

export default SideNavbar
