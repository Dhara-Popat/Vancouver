import React from 'react'
import '../App.css';
import Payments from './Payments';
import Billing from './Billing';


function Finances(props) {
    return (
        <div className='height'>
            <div className='Right-Side border-bottom d-flex align-items-center border-bottom heading'>
                <h5 className='my-6 d-flex '>{props.name}</h5>
            </div>
            <div className='Card-Content'>
                <Payments name = 'Payments' />
                <Billing  name = 'Billing' />
            </div>
        </div>
    )
}

export default Finances
