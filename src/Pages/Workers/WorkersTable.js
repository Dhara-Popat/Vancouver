import React, { useMemo } from 'react'
import { useTable, useSortBy, useFilters } from 'react-table'
import { COLUMNS } from './columns'
import * as AiIcons from 'react-icons/ai';
// import SelectData from './SelectData'

export const WorkersTable = (props) => {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => props.data, [])

    const tableInstance = useTable({
        columns,
        data,
    }, useFilters, useSortBy)

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance

    return (
        <>
            <div className='Worker-container table-responsive'>
                <table {...getTableProps()} className='table-hover workers-table'>
                    <thead className='thead-light table-heading'>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {/* <th {...column.getHeaderProps(column)}> */}
                                        {column.render('Header')}
                                        <span>
                                            {column.isSorted ? (column.isSortedDesc ? <AiIcons.AiFillCaretUp /> : <AiIcons.AiFillCaretDown/> ) : '' }
                                        </span>
                                        {/* {column.isSorted ?
                                        <div className='d-flex flex-column'>
                                            <AiIcons.AiFillCaretUp />
                                            <AiIcons.AiFillCaretDown />
                                        </div> 
                                        : '' } */}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <thead className='thead-light'>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps(column)}>
                                        <div>
                                            {column.canFilter ? column.render('Filter') : null}
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map((row) => {
                            { prepareRow(row) }
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map((cell) => {
                                        return (
                                            <td {...cell.getCellProps()}>
                                                {cell.render('Cell')}
                                            </td>
                                        )
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

