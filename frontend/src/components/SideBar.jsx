import { useState } from 'react';
export default function SideBar({handleClick}) {
    


    return (
        <aside className="side-bar">
            <h2>Menu</h2>
            <ul>
                <button className='sidebar-btn' onClick={() => handleClick('tasks')}>Manage Tasks</button>
                <button className='sidebar-btn'onClick={() => handleClick('status')}>Status</button>
                <button className='sidebar-btn'onClick={() => handleClick('priority')}>Priority</button>
            </ul>
        </aside>
    );
}