import React from 'react'
import Link from 'react-router-dom'

function Side() {
    return (
        <>
            <div className="container-fluid">
                <div className="row flex-nowrap">
                    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                            <Link To="/" className="d-flex align-items-center mb-md-0 me-md-auto text-white text-decoration-none">
                                <div className="dropdown pb-4">
                                    <Link To="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle" />
                                        <span className="d-none d-sm-inline mx-1">Vancouver</span>
                                    </Link>
                                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                                        <li><Link className="dropdown-item" To="#">New project...</Link></li>
                                        <li><Link className="dropdown-item" To="#">Settings</Link></li>
                                        <li><Link className="dropdown-item" To="#">Profile</Link></li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li><Link className="dropdown-item" To="#">Sign out</Link></li>
                                    </ul>
                                </div>
                            </Link>
                            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                                <li className="nav-item">
                                    <Link To="/" className="align-middle px-0">
                                        <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Home</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link To="/jobs" className="align-middle px-0">
                                        <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Jobs</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Side

