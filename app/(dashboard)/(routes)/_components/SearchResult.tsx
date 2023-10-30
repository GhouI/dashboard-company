import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import InfoModal from "./InfoModal"
import OrderModal from "./OrderModal";
import axios from "axios";
import { Account, Order } from "@/types/Orders"
//make a type for the result of the account. 
//make a box for it.


interface SearchResultProps {
    User: Account
}

export default function SearchResult({ User }: SearchResultProps) {
    const [ShowFirstModal, setShowFirstModal] = useState(false)
    const [ShowSecondModal, setShowSecondModal] = useState(false)
    const [orders, setOrders] = useState([]); // State to store the fetched orders

    const handleOnSubmit = () => {
        setShowFirstModal(true)
    }
    const handleOnClose = () => {
        setShowFirstModal(false)
    }
    const handleOrderModal = () => {
        setShowFirstModal(false)
        setShowSecondModal(true)
    }
    const getOrdersFromAPI = async () => {
        try {
            const response = await axios.post('/api/orders', { customerId: User.id });
            console.log(response.data);
            return response.data;
        } catch (error) {
            // Handle any errors that may occur during the API call
            console.error('Error fetching orders:', error);
            return [];
        }
    }

    // Fetch the orders when the component loads
    useEffect(() => {
        getOrdersFromAPI().then(ordersData => setOrders(ordersData));
    }, []); // Empty dependency array ensures this effect runs only once
    return (
        <div className="flex items-center justify-between gap-4 p-4 bg-white shadow rounded-lg">
            <div className="flex items-center gap-4">
                <div className="text-4xl font-semibold text-gray-500 dark:text-gray-400">{User.name[0].toUpperCase() + User.name[User.name.length - 1].toUpperCase()}</div>
                <div className="grid gap-0.5 text-sm">
                    <div className="font-semibold">{User.name}</div>
                    <div className="text-zinc-500 dark:text-zinc-400">{User.email}</div>
                </div>
            </div>
            <Button className="text-white bg-blue-500 hover:bg-blue-600" onClick={handleOnSubmit}>View Profile</Button>
            <InfoModal isOpen={ShowFirstModal} onClose={handleOnClose} User={User} onOpenViewOrders={handleOrderModal} />
            <OrderModal isOpen={ShowSecondModal} onClose={() => setShowSecondModal(false)} Orders={orders} User={User} />
        </div>
    )
}
