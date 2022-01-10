import React from 'react'
import Data from './payment.json'
import * as AiIcons from 'react-icons/ai';

function Payments(props) {

    // let lastele = Data[(Data.length - 1)];
    let data = Data[(Data.length - 1)].date
    let date = new Date(data)
    let options = { year: 'numeric', month: 'short', day: 'numeric' }
    let timeOptions = { hour: '2-digit', minute: '2-digit' }
    let count = Data.length

    return (
        <div className='Card-container d-flex flex-column justify-content-between'>
            <div className='d-flex flex-column justify-content-start'>
                <h3 className='font-weight-bold'>{props.name}</h3>
                <small className='text-muted'>Last transfer sent {date.toLocaleDateString('en-US', options)} at {date.toLocaleTimeString('en-US', timeOptions)}</small>
            </div>
            <div className='text-center d-flex flex-column'>
                <small className='text-muted'>Queued Payments</small>
                <strong className='font-weight-bold heading-font'>{count}</strong>
            </div>
            <div>
                <a href='#' className='text-decoration-none text-dark'>
                    <h6 className='fs-6 text-end'>View payments<AiIcons.AiOutlineRight /></h6>
                </a>
            </div>
        </div>
    )
}

export default Payments


