import React from 'react'
import SelectData from './SelectData'
import { WorkersTable } from './WorkersTable'
import WORKERS_DATA from './WORKERS_DATA.json'
// import { Data } from './Data'

function WorkerData() {
    let count = WORKERS_DATA.length
    let data = WORKERS_DATA

    const countItemsTrue = (arr) => {
        let result = 0;
        for(let x=0; arr.length >= x; x++){
            if(arr[x] === true){
                result++;
            }
            else if(arr[x] === null){
                result = 0;
            }
        }
        return result;
    }

    //For verified Data
    const verifiedData = data.map((data) =>  data.Acount_type.toLocaleLowerCase() === "verified")
    let verifiedDataCount =  countItemsTrue(verifiedData)

    // const verifiedData1 = data.map((data) =>  data)
    // console.log(verifiedData1)

    //For unverified Data
    const unVerifiedData = data.map((data) =>  data.Acount_type.toLocaleLowerCase() === "unverified")
    let unVerifiedDataCount =  countItemsTrue(unVerifiedData)

    //For suspended Data
    const suspendedData = data.map((data) =>  data.Acount_type.toLocaleLowerCase() === "suspended")
    let suspendedDataCount =  countItemsTrue(suspendedData)

    //For Deactivated Data
    const deactivatedData = data.map((data) =>  data.Acount_type.toLocaleLowerCase() === "deactivated")
    let deactivatedDataCount =  countItemsTrue(deactivatedData)

    return (
        <>
         <SelectData 
         count={count} 
         verifiedDataCount= {verifiedDataCount} 
         unVerifiedDataCount= {unVerifiedDataCount}
         suspendedDataCount = {suspendedDataCount}
         deactivatedDataCount = {deactivatedDataCount}
         />
         <WorkersTable data = {data} verifiedDataCount= {verifiedDataCount} />
        </>
    )
}

export default WorkerData


