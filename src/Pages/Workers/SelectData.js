import { Tab } from 'bootstrap'
import React, { useState } from 'react'
import { Tabs } from 'react-bootstrap'
import { WorkersTable } from './WorkersTable'


function SelectData(props) {
    const [key, setKey] = useState('total');

    let data = props.data

    let total =
        <div className='d-flex active-content bg-transparent active-data'>
            <div className='d-flex flex-column'>
                <span className='small-font text-left'><b>Total</b></span>
                <span className='fs-1'><b>{props.count}</b></span>
            </div>
        </div>

    let DataVerified = props.DataVerified

    let VerifiedTab =
        <div className='d-flex flex-column active-content'>
            <div className='d-flex flex-column'>
                <span><b>Verified</b></span>
                <span className='fs-1'><b>{props.verifiedDataCount}</b></span>
            </div>
        </div>

    let DataUnverified = props.DataUnverified

    let UnverifiedTab =
        <div className='d-flex flex-column active-content'>
            <div className='d-flex flex-column'>
                <span><b>unverified</b></span>
                <span className='fs-1'><b>{props.unVerifiedDataCount}</b></span>
            </div>
        </div>

    let DataSuspended = props.DataSuspended
    let suspendedDataCount = props.suspendedDataCount

    let SuspenedTab =
        <div className='d-flex flex-column active-content'>
            <div className='d-flex flex-column'>
                <span><b>Suspended</b></span>
                <span className='fs-1'><b>{suspendedDataCount}</b></span>
            </div>
        </div>

    let DataDeactivated = props.DataDeactivated

    let DeactivatedTab =
        <div className='d-flex flex-column active-content'>
            <div className='d-flex flex-column'>
                <span><b>Deactivated</b></span>
                <span className='fs-1'><b>{props.deactivatedDataCount}</b></span>
            </div>
        </div>

    return (
        <>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
            >
                <Tab eventKey="total" title={total}>
                    <WorkersTable
                        data={data}
                    />
                </Tab>
                <Tab eventKey="verified" title={VerifiedTab}>
                    <WorkersTable
                        data={DataVerified}
                    />
                </Tab>
                <Tab eventKey="unverified" title={UnverifiedTab}>
                    <WorkersTable
                        data={DataUnverified}
                    />
                </Tab>
                <Tab eventKey="suspened" title={SuspenedTab}>
                    {suspendedDataCount === 0 ?
                        `No any suspended account` :
                        <WorkersTable
                            data={DataSuspended}
                        />}
                </Tab>
                <Tab eventKey="deactivated" title={DeactivatedTab}>
                    <WorkersTable
                        data={DataDeactivated}
                    />
                </Tab>
            </Tabs>
        </>
    )
}

export default SelectData
