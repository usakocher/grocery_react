import { useState } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';
import { server_calls } from '../../api';
import { useGetData } from '../../custom-hooks';
import { 
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle} from '@material-ui/core';
import { GroceryForm } from '../GroceryForm';
import { string } from 'yargs';

interface gridData{
    data:{
        id?:string;
    }
}

// const seller = useSelector<GroceryState>(state => state.seller)
// const description = useSelector<GroceryState>(state => state.description)
// const size = useSelector<GroceryState>(state => state.size)
// const unit = useSelector<GroceryState>(state => state.unit)
// const price = useSelector<GroceryState>(state => state.price)
// const countryOrigin = useSelector<GroceryState>(state => state.countryOrigin)
// const { register, handleSubmit } = useForm({ })

const columns: GridColDef[] = [
    {
        field: 'id',
        headerName: 'Prod ID',
        width: 130
    },
    {
        field: 'seller',
        headerName: 'Seller',
        width: 180
    },
    {
        field: 'description',
        headerName: 'Description',
        width: 280
    },
    {
        field: 'size',
        headerName: 'Size',
        width: 120
    },
    {
        field: 'unit',
        headerName: 'Unit',
        width: 120
    },
    {
        field: 'price',
        headerName: 'Price',
        width: 120
    },
    {
        field: 'countryOrigin',
        headerName: 'Country of Origin',
        width: 200
    }
];

export const DataTable= () => {
    let { groceryData, getData } = useGetData();
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState({ })

    let handleOpen = () => {
        setOpen(true)
    }

    let handleClose = () => {
        setOpen(false)
    }

    const rows = [
        { id: 1, seller: "Adam's Farm", description: 'Organic Non-Gmo Carrots', size: '1', unit: 'pound', price: 4.87, countryOrigin: 'Murica' }
    ];

    return (
        <div style={{ height: 375, width: '65%', margin: 'auto', color: 'white'}}>
            <h1> Groceries in Inventory </h1>
            <DataGrid rows={rows} columns={columns} pageSize={5} style={{ backgroundColor: 'white' }} checkboxSelection/>
            {console.log(gridData)}
        </div>
    );
}