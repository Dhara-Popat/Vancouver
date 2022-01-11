import React from 'react'
import SelectData from './SelectData'
import { WorkersTable } from './WorkersTable'
import WORKERS_DATA from './WORKERS_DATA.json'

function WorkerData() {
    let count = WORKERS_DATA.length
    let data = WORKERS_DATA

    const countItemsTrue = (arr) => {
        let result = 0;
        for (let x = 0; arr.length >= x; x++) {
            if (arr[x] === true) {
                result++;
            }
            else if (arr[x] === null) {
                result = 0;
            }
        }
        return result;
    }


    //For verified Data
    const verifiedData = data.map((data) => data.Acount_type.toLocaleLowerCase() === "verified")
    let verifiedDataCount = countItemsTrue(verifiedData)
  

    function findVerifiedData(data, value) {
        return data.filter((value) => {
            return value.Acount_type.toLocaleLowerCase() === 'verified';
        });
    }

    let DataVerified = findVerifiedData(data, 'verified')

    //For unverified Data
    const unVerifiedData = data.map((data) => data.Acount_type.toLocaleLowerCase() === "unverified")
    let unVerifiedDataCount = countItemsTrue(unVerifiedData)

    function findUnverifiedData(data, value) {
        return data.filter((value) => {
            return value.Acount_type.toLocaleLowerCase() === 'unverified';
        });
    }

    let DataUnverified = findUnverifiedData(data, 'unverified')

    //For suspended Data
    const suspendedData = data.map((data) => data.Acount_type.toLocaleLowerCase() === "suspended")
    let suspendedDataCount = countItemsTrue(suspendedData)

    function findSuspendedData(data, value) {
        return data.filter((value) => {
            return value.Acount_type.toLocaleLowerCase() === "suspended";
        });
    }

    let DataSuspended = findSuspendedData(data, "suspended")

    //For Deactivated Data
    const deactivatedData = data.map((data) => data.Acount_type.toLocaleLowerCase() === "deactivated")
    let deactivatedDataCount = countItemsTrue(deactivatedData)

    function findDeactivatedData(data, value) {
        return data.filter((value) => {
            return value.Acount_type.toLocaleLowerCase() === "deactivated";
        });
    }

    let DataDeactivated = findDeactivatedData(data, "deactivated")

    return (
        <>
            <SelectData
                data = {data}
                count={count}
                verifiedDataCount={verifiedDataCount}
                unVerifiedDataCount={unVerifiedDataCount}
                suspendedDataCount={suspendedDataCount}
                deactivatedDataCount={deactivatedDataCount}
                DataVerified = {DataVerified}
                DataUnverified = {DataUnverified}
                DataSuspended = {DataSuspended}
                DataDeactivated= {DataDeactivated}
            />
            
        </>
    )
}

export default WorkerData
