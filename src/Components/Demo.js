import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import '../App.css';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as BsIcons from "react-icons/bs";


function Demo() {
    return (
        <>
            <li className='nav-item mt-2 link-hover p-2 '>
                <NavLink to='/vancouver' className="align-middle px-0 text-light text-decoration-none d-flex" activeClassName='active'>
                    <i className="text-light"><AiIcons.AiFillHome /></i>
                    <span className="ms-3 d-none d-sm-inline text-light">Home</span>
                </NavLink>
                <Link to='/vancouver/finances' className="align-middle px-0 text-light text-decoration-none d-flex">
                    <i className="text-light"><FaIcons.FaDollarSign/></i>
                    <span className="ms-3 d-none d-sm-inline text-light">Finances</span>
                </Link>
            </li>
        </>
    )
}

export default Demo
