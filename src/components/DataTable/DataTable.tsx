import React from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid';


const columns: GridColDef[] = [
    {
        field: 'id',
        headerName: 'Prod ID',
        width: 130
    },
    {
        field: 'brand',
        headerName: 'Brand',
        width: 200
    },
    {
        field: 'size',
        headerName: 'Size',
        width: 130
    },
    {
        field: 'price',
        headerName: 'Price',
        width: 130
    },
    {
        field: 'description',
        headerName: 'Description',
        width: 400
    }
];

const rows = [
    { id: 1, brand: 'Kroger', size: 'half gallon', price: 1.89, description: 'Kroger 1/2 gallon skim milk'},
    { id: 2, brand: 'Vermont Creamery', size: '8 oz', price: 3.99, description: 'Vermont Creamery Cultered Butter'},
    { id: 3, brand: 'Smithfield', size: '1.5 lb', price: 10.99, description: 'Smithfield Hometown Original Stack Pack - 24 Oz'},
    { id: 4, brand: 'Snuggle', size: '96 Fl. Oz', price: 8.99, description: 'Snuggle Fabric Softener Blue Sparkle 120 Loads'},
    { id: 5, brand: 'Ragu', size: '23.9 oz', price: 2.99, description: 'RAGU Old World Style Pasta Sauce Flavored with Meat Jar'},
    { id: 6, brand: 'Post', size: '18 oz', price: 4.99, description: 'Honey Bunches of Oats Cereal Crunchy Honey Roasted'},
    { id: 7, brand: 'Bigelow', size: '0.90 oz', price: 3.00, description: 'Bigelow Tea Bags Green With Ginger Plus Probiotics 18 Count'},
    { id: 8, brand: "Bush's Best", size: '15 oz', price: 1.49, description: 'Bush’s Best Black Beans'},
    { id: 9, brand: 'Safeway', size: '1.5 qt', price: 3.00, description: 'Signature SELECT™ Ice Cream'},
    { id: 10, brand: 'Simply', size: '52 oz', price: 3.00, description: 'Simply Lemonade'},
];

export const DataTable= () => {
    return (
        <div style={{ height: 375, width: '65%', margin: 'auto'}}>
            <h1> Groceries in Inventory </h1>
            <DataGrid className='rdg-dark' rows={rows} columns={columns} pageSize={5} checkboxSelection/>
        </div>
    );
}