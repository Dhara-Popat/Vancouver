import { ColumnFilter } from "./ColumnFilter";

export const COLUMNS = [
    // {
    //     accessor: 'avatar',
    //     Filter: ColumnFilter,
    //     disableFilters: true,
    //     disableSortBy: true
    // },
    {
        Header: 'First Name',
        accessor: 'first_name',
        Filter: ColumnFilter,
    },
    {
        Header: 'Last Name',
        accessor: 'last_name',
        Filter: ColumnFilter,
        disableSortBy: true
    },
    {
        Header: 'Email',
        accessor: 'email',
        Filter: ColumnFilter,
        disableSortBy: true
    },
    {
        Header: 'Phone',
        accessor: 'phone',
        Filter: ColumnFilter,
        disableSortBy: true
    },
    {
        Header: 'Rating',
        accessor: 'rating',
        Filter: ColumnFilter,
        disableSortBy: true
    },
    {
        Header: 'Sin',
        accessor: 'sin',
        Filter: ColumnFilter,
        disableSortBy: true
    },
    {
        Header: 'Location',
        accessor: 'location',
        Filter: ColumnFilter,
        disableSortBy: true
    },
    {
        Header: 'Jobs Worked',
        accessor: 'jobs_worked',
        Filter: ColumnFilter,
        disableFilters: true,
        disableSortBy: true
    },
    {
        Header: 'Created',
        accessor: 'created',
        Filter: ColumnFilter,
        disableFilters: true,
        disableSortBy: true
    }
    // {
    //     Header: 'Account Type',
    //     accessor: 'Account_type'
    // }
]