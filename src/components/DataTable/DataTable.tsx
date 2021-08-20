import { useState } from 'react';
import { DataGrid, GridColDef, GridRowModel, GridValueGetterParams } from '@material-ui/data-grid';
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
interface gridData{
    id?:string;
}

const columns: GridColDef[] = [
    {
        field: 'productId',
        hide: true
    },
    {
        field: 'productName',
        headerName: 'Name',
        width: 180
    },
    {
        field: 'seller',
        headerName: 'Seller',
        width: 180
    },
    {
        field: 'description',
        headerName: 'Description',
        width: 250
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
    let [gridData, setData] = useState<gridData>({id: '' })

    let handleOpen = () => {
        setOpen(true)
    }

    let handleClose = () => {
        setOpen(false)
        getData()
    }

    let deleteData = () => {
        server_calls.delete(gridData.id!)
        getData()
    };

    let handleCheckbox = (id:GridRowModel) => {
        if(id[0]===undefined){
            setData({id:''})
        }else{
            setData({id:id[0].toString()})
        }
    }

    return (
        <div style={{ height: 375, width: '90%', margin: 'auto', color: 'white'}}>
            <h1> Groceries in Inventory </h1>
            <DataGrid rows={groceryData} columns={columns} pageSize={5} style={{ backgroundColor: 'white' }} checkboxSelection onSelectionModelChange={handleCheckbox}/>
            {console.log(gridData)}
            <Button onClick={handleOpen} style={{backgroundColor:'blue', color:'white'}}>Update</Button>
            <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
                <DialogTitle>Update Item</DialogTitle>
                <DialogContent>
                    <GroceryForm id={gridData.id!}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color='primary'>Cancel</Button>
                    <Button onClick={handleClose} color='primary'>Done</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}