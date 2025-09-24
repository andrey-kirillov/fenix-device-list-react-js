import { DataGrid } from '@mui/x-data-grid';
import { Fragment } from 'react/jsx-runtime';

const rows = [
    { id: 1, name: 'Magner 150', serialNumber: 'abc234', soldDate: '2025-01-01', soldPrice: '1000', soldBy: 'John Doe' },
    { id: 2, name: 'Magner 165', serialNumber: 'def567', soldDate: '2025-02-01', soldPrice: '2000', soldBy: 'Jane Smith' },
    { id: 3, name: 'Magner 175', serialNumber: 'ghi890', soldDate: '2025-03-01', soldPrice: '3000', soldBy: 'Alice Johnson' },
];

const columns = [
    { field: 'id', headerName: '#', width: 100 },
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'serialNumber', headerName: 'Serial Number', flex: 1 },
    { field: 'soldDate', headerName: 'Sold Date', flex: 1 },
    { field: 'soldPrice', headerName: 'Sold Price', flex: 1 },
    { field: 'soldBy', headerName: 'Sold By', flex: 1 },
];

function SoldDeviceList() {
    return (
        <Fragment>
            <div style={{ textAlign: 'center', padding: '20px' }}>Test filter and sorting</div>
            <DataGrid rows={rows} columns={columns} />
        </Fragment>
    )
}

export default SoldDeviceList;