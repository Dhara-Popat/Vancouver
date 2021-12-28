import React from 'react'
import '../App.css';
import Payments from './Finances/Payments';
import Billing from './Finances/Billing';

function Finances(props) {
    return (
        <>
            <div className='Right-Side border-bottom d-flex align-items-center border-bottom' style={{ height: '80px' }}>
                <h5 className='my-6'>{props.name}</h5>
            </div>
            <div className='Box-Color'>
                <Payments />
                <Billing />
            </div>
        </>
    )
}

export default Finances
