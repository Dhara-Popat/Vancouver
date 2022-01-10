import React from 'react'
import { NavLink } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import '../Pages/App.css';

function Navbar() {
    return (
        <>  
            {SidebarData.map((item, index) => {
                return (
                    <li key={index} className='nav-item mt-2 link-hover sidebar-menu'>
                        <NavLink to={item.path} 
                        className="align-middle p-1 text-light text-decoration-none d-flex" 
                        activeclassname='active'          
                        >
                            <i className="text-light">{item.icon}</i>
                            <span className="ms-3 d-none d-sm-inline text-light">{item.title}</span>
                        </NavLink>
                    </li>
                )
            }
            )}
        </>
    )
}

export default Navbar
