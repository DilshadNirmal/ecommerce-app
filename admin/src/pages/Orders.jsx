import {useEffect, useState} from 'react'
import axios from 'axios'
import {backendUrl} from '../App'

const Orders = ({token}) => {
    const [orders, setOrders] = useState([])

    const fetchAllOrders = async () => {
        if (!token) {
            return null
        }

        try {
            const response = await axios.post(`${backendUrl}/api/order/list`, {}, {headers: {token}})
            if (response.data.success) {
                setOrders(response.data.orders);

            }
        } catch (error) {

        }
    }

    useEffect(() => {
fetchAllOrders()
    }, [token])

    return (
        <div>

        </div>
    )
}

export default Orders;
