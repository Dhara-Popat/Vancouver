import React from 'react'
import Menu from './Menu';
import Dropdown from './Dropdown';
import logo from '../logo.svg'

function Sidebar() {
    return (
        <>
            <div className="d-flex flex-column align-items-center align-items-sm-start pt-2 text-white min-vh-100 sidebar-padding">
                <div className='d-flex justify-content-between align-items-center sidebar-menu'>
                    <img src={logo} alt="hugenerd" class="rounded-circle logo" />
                    {/* <div className="d-flex align-items-center mb-md-0 me-md-auto text-white text-decoration-none heading">
                                        <span className="fs-6 d-none d-sm-inline heading-title">Vancouver</span>
                                    </div> */}
                    <Dropdown />
                </div>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start sidebar-menu" id="menu">
                    <Menu />
                </ul>
            </div>
        </>
    )
}

export default Sidebar
