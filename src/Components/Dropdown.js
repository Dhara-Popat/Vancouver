import React from 'react'
import * as AiIcons from 'react-icons/ai';

function Dropdown() {
    return (
        <>
            <div className="dropdown drop-down">
                <div className="btn btn-dark" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                   <i className='fs-6'><AiIcons.AiOutlineDown /></i>
                </div>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <li><button className="dropdown-item" type="button">Add</button></li>
                    <li><button className="dropdown-item" type="button">Add</button></li>
                </ul>
            </div>
        </>
    )
}

export default Dropdown
