let token = '3d79f571136f24f3fe25e4ea8aecc3ed5ed8295b9824961d'
let base_url = 'https://grocery-app-ak.herokuapp.com/api/items'

export const server_calls = {
    get: async () => {
        const response = await fetch(`${base_url}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }
        let data = await response.json();
        let id = data[0].productId;
        data[0].id = id;
        return data
    },
    create: async (data:{}) => {
        const response = await fetch(`${base_url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer: ${token}`
            },
            body: JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error('Failed to create Item in the Database!')
            }
    
        return await response.json()
    },
    update: async (productId:string, data:any = {}) => {
        const response = await fetch(`${base_url}/${productId}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to update new data on server')
        }

        return await response.json()
    },
    delete: async(productId:string) => {
        const response = await fetch(`${base_url}/${productId}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })

        if(!response.ok){
            throw new Error('Failed to delete item on server')
        }

        return await response.json()
    }
}