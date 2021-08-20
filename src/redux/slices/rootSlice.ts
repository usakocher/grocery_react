import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        seller: "Adam's Farm",
        productName: "Carrots",
        description: "Organic Non-GMO Carrots",
        size: "1",
        price: 4.87,
        countryOrigin: "Murica",
        unit: "pound"
    }, reducers: {
        chooseSeller: (state, action) => { state.seller = action.payload},
        chooseProductName: (state, action) => { state.productName = action.payload},
        chooseDescription: (state, action) => { state.description = action.payload},
        chooseSize: (state, action) => { state.size = action.payload},
        chooseUnit: (state, action) => { state.unit = action.payload},
        choosePrice: (state, action) => { state.price = action.payload},
        chooseCountryOrigin: (state, action) => { state.countryOrigin = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseSeller, chooseProductName, chooseDescription, chooseSize, chooseUnit, choosePrice, chooseCountryOrigin } = rootSlice.actions;