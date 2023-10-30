import { useCallback, useEffect, useState } from "react";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Account, Order } from "@/types/Orders"
import { type } from "os";
interface OrdersProps {
    isOpen: boolean
    Disabled?: boolean; // Capitalize "Disabled" to match the variable name in the component
    onClose: () => void;
    Orders: Order[];
    User: Account;
}

export default function OrderModal({ isOpen, Disabled, onClose, Orders }: OrdersProps) {
    const [showModal, setShowModal] = useState(isOpen);

    useEffect(() => {
        setShowModal(isOpen);
    }, [isOpen]);

    const handleClose = useCallback(() => {
        if (Disabled) {
            return;
        }
        setShowModal(false);
        setTimeout(() => {
            onClose();
        }, 500);
    }, [Disabled, onClose]);

    if (!isOpen) {
        return null;
    }

    return (
        <div>
            {showModal ? (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="w-full p-6 m-4 bg-white rounded-lg shadow-md overflow-auto">
                        <h2 className="text-2xl font-semibold text-gray-500">Customer Name - Orders</h2>
                        <table className="w-full mt-4 text-gray-600">
                            <thead className="border-b-2 border-gray-300">
                                <tr>
                                    <th className="px-4 py-2">Product Name</th>
                                    <th className="px-4 py-2">Product Order Number</th>
                                    <th className="px-4 py-2">Total Amount</th>
                                    <th className="px-4 py-2">Order Status</th>
                                    <th className="px-4 py-2">Purchased by</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Orders.map((order, index) => (
                                    <tr key={index}>
                                        <td className="px-4 py-2">{order.ProductName}</td>
                                        <td className="px-4 py-2">{order.orderNumber}</td>
                                        <td className="px-4 py-2">${order.totalAmount}</td>
                                        <td className="px-4 py-2">
                                            <Button className="text-white bg-green-500 hover:bg-green-600">
                                                {order.orderStatus}
                                            </Button>
                                        </td>
                                        <td className="px-4 py-2">{order.CustomerName}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="mt-6 flex gap-4">
                            <Button className="w-full text-white bg-blue-500 hover:bg-blue-600">Contact</Button>
                            <Button className="w-full text-gray-800 border-gray-300 hover:bg-gray-100" variant="outline"
                            onClick={handleClose}>
                                Close
                            </Button>
                        </div>
                    </div>
                </div>
            ) : (
                <div></div>
            )}
        </div>
    );
}