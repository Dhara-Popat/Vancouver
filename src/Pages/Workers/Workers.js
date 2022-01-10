import React, { useState } from 'react'
import { WaitList } from './WaitList'
import * as BsIcons from "react-icons/bs"
import * as BiIcons from "react-icons/bi"
import WORKERS_DATA from './WORKERS_DATA.json'
import WorkerData from './WorkerData'
// import { WorkersTable } from './WorkersTable'
// import SelectData from './SelectData'

function Workers(props) {

    let count = WORKERS_DATA.length

    const [activeTab, setActiveTab] = useState('tab1')

    const handleTab1 = () => {
        setActiveTab('tab1');
    }

    const handleTab2 = () => {
        setActiveTab('tab2');
    }

    return (
        <div className='height'>
            <div className='Right-Side d-flex flex-column justify-content-center heading'>
                <h5 className='my-6 d-flex'>{props.name}</h5>
            </div>
            <ul className='worker-tabs border-bottom Right-Side'>
                <li className={activeTab === 'tab1' ? 'active-tab' : ''}
                    onClick= {handleTab1}>
                        <i className='small-font'><b><BsIcons.BsPeople/></b></i>
                        <span className='small-font'><b>Workers</b></span>
                        <span className='small-font'>{count}</span>
                </li>
                <li className={activeTab === 'tab2' ? 'active-tab' : ''}
                    onClick= {handleTab2}>
                        <i className='small-font'><BiIcons.BiCalendarEvent /></i>
                        <span className='small-font'><b>Wait Lists</b></span>
                        <span className='small-font'>0</span>
                </li>
            </ul>
            <div className='worker-tab-container'>
                <div className='worker-tab-content'>
                    {activeTab === 'tab1' ? <WorkerData /> : <WaitList />}
                </div>
            </div>
        </div>
    )
}

export default Workers