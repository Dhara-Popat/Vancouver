import React from 'react'
import Navbar from './Navbar';
import Home from '../Pages/Home';
import Jobs from '../Pages/Jobs';
import Workers from '../Pages/Workers';
import Employers from '../Pages/Employers';
import Finances from '../Pages/Finances';
import Settings from '../Pages/Settings';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dropdown from './Dropdown';
import logo from '../logo.svg'

function Nav() {
    return (
        <>
            <Router>
                <div className="container-fluid">
                    <div className="row flex-nowrap">
                        <div className="col-auto col-md-3 col-xl-2 px-0 bg-dark">
                            <div className="d-flex flex-column align-items-center align-items-sm-start pt-2 text-white min-vh-100 sidebar-padding">
                                <div className='d-flex justify-content-between align-items-center sidebar-menu'>
                                    <img src={logo} alt="hugenerd" class="rounded-circle logo" />
                                    {/* <div className="d-flex align-items-center mb-md-0 me-md-auto text-white text-decoration-none heading">
                                        <span className="fs-6 d-none d-sm-inline heading-title">Vancouver</span>
                                    </div> */}
                                    <Dropdown />
                                </div>
                                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start sidebar-menu" id="menu">
                                    <Navbar />
                                </ul>
                            </div>
                        </div>
                        <div className="col px-0">
                            <div>
                                <Routes>
                                    <Route path='/vancouver' exact element={<Home />} />
                                    <Route path='/vancouver/jobs' element={<Jobs />} />
                                    <Route path='/vancouver/workers' element={<Workers />} />
                                    <Route path='/vancouver/employers' element={<Employers />} />
                                    <Route path='/vancouver/finances' element={<Finances name='Finances' />} />
                                    <Route path='/vancouver/settings' element={<Settings />} />
                                </Routes>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        </>
    )
}

export default Nav
