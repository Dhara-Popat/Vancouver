import React from 'react'

export const ColumnFilter = ({ column }) => {
    
    const { filterValue, setFilter } = column
    return (
        <span>
            <input 
            type='text'
            value={filterValue || ''} 
            onChange={(e) => setFilter(e.target.value)}
            style = {{width: ''}}
            />
        </span>
    )
}
