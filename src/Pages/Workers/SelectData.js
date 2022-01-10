import React from 'react'
// import { WorkersTable } from './WorkersTable'


function SelectData(props) {

    return (
        <>
        <div className='d-flex'>
            <div className='d-flex flex-column active-content bg-transparent'>
                <span>Total</span>
                {props.count}
            </div>
            <div className='d-flex flex-column active-content'>
                <span>Verified</span>
                {props.verifiedDataCount}
            </div>
            <div className='d-flex flex-column active-content'>
                <span>unverified</span>
                {props.unVerifiedDataCount}
            </div>
            <div className='d-flex flex-column active-content'>
                <span>Suspended</span>
                {props.suspendedDataCount}
            </div>
            <div className='d-flex flex-column active-content'>
                <span>Deactivated</span>
                {props.deactivatedDataCount}
            </div>
        </div>
        </>
    )
}

export default SelectData
