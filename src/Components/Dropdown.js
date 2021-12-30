import React from 'react'
import * as AiIcons from 'react-icons/ai';

function Dropdown() {
    return (
        <>
            <div class="dropdown drop-down">
                <div class="btn btn-dark" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                   <i className='fs-6'><AiIcons.AiOutlineDown /></i>
                </div>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <li><button class="dropdown-item" type="button">Add</button></li>
                    <li><button class="dropdown-item" type="button">Add</button></li>
                </ul>
            </div>
        </>
    )
}

export default Dropdown
