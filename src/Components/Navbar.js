import React from 'react'
import { Link } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import '../App.css';

function Navbar() {
    return (
        <>  
            {Sidebar.map((item, index) => {
                return (
                    <li key={index} className='nav-item mt-2 link-hover p-2 '>
                        <Link to={item.path} className="align-middle px-0 text-light text-decoration-none d-flex">
                            <i className="text-light">{item.icon}</i>
                            <span className="ms-3 d-none d-sm-inline text-light">{item.title}</span>
                        </Link>
                    </li>
                )
            }
            )}
        </>
    )
}

export default Navbar
