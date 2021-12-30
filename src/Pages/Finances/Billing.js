import React from 'react'
import Data from '../billing.json'
import * as BiIcons from 'react-icons/bi';
import * as AiIcons from 'react-icons/ai';

function Billing(props) {

    // to assign array in billingInfo
    let billingInfo = Data
    const billingData = billingInfo.map((bill) => bill.billing)

    // total of array
    let Total = 0
    for (let i = 0; i < billingData.length; i++) {
        Total += billingData[i];
    }

    // Format thousand to K

    const numFormatter = (num) => {
        if (num > 999) {
            return (num / 1000).toFixed(0) + 'K';
        }
        else if (num <= 999) {
            return num;
        }
    }
    
    const TotalBilling = numFormatter(Total)

    const PercentangeChange = () => {
        let oldBill = Data[0].billing
        let newBill = Data[(Data.length - 1)].billing
        let increase = (newBill - oldBill)
        let value = (increase / oldBill) * 100
        return value.toFixed(1)
    }
    let result = PercentangeChange()

    return (
        <div className='Card-Container d-flex flex-column justify-content-between'>
            <div className='billing-container'>
                <h3 className='font-weight-bold'>{props.name}</h3>
                <span className='text-dark'>
                    <small className='invoices'>This week's invoices are ready!</small>
                </span>
            </div>
            <div className='text-center'>
                <small className='text-muted'>YTD Earnings</small>
                <div className='d-flex justify-content-center align-items-center'>
                    <strong className='font-weight-bold heading-font'>${TotalBilling}</strong>
                </div>
                <small className='percentage'>
                    <i className='fs-5'><BiIcons.BiUpArrowAlt /></i>
                    {result}
                    <AiIcons.AiOutlinePercentage />
                </small>
            </div>
            <div>
                <a href='#' className='text-decoration-none text-dark'>
                    <h6 className='fs-6 text-end'>View Billing<AiIcons.AiOutlineRight /></h6>
                </a>
            </div>
        </div>
    )
}

export default Billing




