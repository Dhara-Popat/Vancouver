import React from 'react'
import { Link } from 'react-router-dom'
import { Sidebar } from './Sidebar'

function Navbar() {
    return (
        <>
            <a href="/vancouver" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span className="fs-6 d-none d-sm-inline">Vancouver</span>
            </a>
            {Sidebar.map((item, index) => {
                return (
                    <li key={index} className='nav-item mt-2'>
                        <Link to={item.path} className="align-middle px-0 text-light text-decoration-none">
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
