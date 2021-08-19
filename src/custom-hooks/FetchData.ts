import { useState, useEffect } from 'react';
import { server_calls } from '../api';

export const useGetData = () => {
    const [groceryData, setData] = useState<any>([]);

    async function handleDataFetch(){
        const result = await server_calls.get();
        setData(result)
    }

    useEffect( () => {
        handleDataFetch();
    }, [])

    return {groceryData, getData:handleDataFetch}
}