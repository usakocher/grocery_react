import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseSeller, chooseDescription, chooseSize, chooseUnit, choosePrice, chooseCountryOrigin } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { Button } from '@material-ui/core';

import { server_calls } from '../../api';

import { useGetData } from '../../custom-hooks';

interface GroceryFormProps {
    id?:string;
    data?:{}
}

interface GroceryState {
    seller: string;
    description: string;
    size: string;
    unit: string;
    price: number;
    countryOrigin: string;
}

export const GroceryForm = (props: GroceryFormProps) => {
    const dispatch = useDispatch();
    let { groceryData, getData } = useGetData();
    const store = useStore()
    const seller = useSelector<GroceryState>(state => state.seller)
    const description = useSelector<GroceryState>(state => state.description)
    const size = useSelector<GroceryState>(state => state.size)
    const unit = useSelector<GroceryState>(state => state.unit)
    const price = useSelector<GroceryState>(state => state.price)
    const countryOrigin = useSelector<GroceryState>(state => state.countryOrigin)
    const { register, handleSubmit } = useForm({ })

    const onSubmit = (data:any, event:any) => {
        console.log(props.id)

        if( props.id!){
            server_calls.update(props.id!, data)
            console.log(`Updated:${data} ${props.id}`)
            window.location.reload()
            event.target.reset();
        } else {
            dispatch(chooseSeller(data.seller))
            server_calls.create(store.getState())
            window.location.reload()
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="seller">Seller</label>
                    <Input {...register('seller')} name="seller" placeholder='Seller' />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <Input {...register('description')} name="description" placeholder="Description"/>
                </div>
                <div>
                    <label htmlFor="size">Size</label>
                    <Input {...register('size')} name="size" placeholder="Size"/>
                </div>
                <div>
                    <label htmlFor="unit">Unit</label>
                    <Input {...register('unit')} name="unit" placeholder="Unit"/>
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <Input {...register('price')} name="price" placeholder="Price"/>
                </div>
                <div>
                    <label htmlFor="countryOrigin">Country of Origin</label>
                    <Input {...register('countryOrigin')} name="countryOrigin" placeholder="Country of Origin"/>
                </div>
            </form>
        </div>
    )
}