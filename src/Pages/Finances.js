import React from 'react'
import '../App.css';
import Payments from './Finances/Payments';
import Billing from './Finances/Billing';


function Finances(props) {
    return (
        <>
            <div className='Right-Side border-bottom d-flex align-items-center border-bottom heading'>
                <h5 className='my-6 d-flex '>{props.name}</h5>
            </div>
            <div className='Card-Content'>
                <Payments name = 'Payments' />
                <Billing  name = 'Billing' />
            </div>
        </>
    )
}

export default Finances
