import React, { useState } from 'react'
// import { WorkersTable } from './WorkersTable'


function SelectData(props) {

    const [activeTab, setActiveTab] = useState('data1')

    return (
        <>
            <div className='d-flex'>
                <div className='d-flex active-content bg-transparent active-data'>
                    <div className='d-flex flex-column' onClick= {handleData1}>
                        <span className='small-font'><b>Total</b></span>
                        <span><b>{props.count}</b></span>
                    </div>
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
