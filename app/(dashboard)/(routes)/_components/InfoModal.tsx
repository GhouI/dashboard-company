"use client";
import React, { useCallback, useEffect, useState } from 'react'; // Import React since you're using JSX
import { Button } from '@/components/ui/button'; // Assuming you have a Button component
import { Account } from "@/types/Orders"
interface FirstModalProps {
    isOpen: boolean
    Disabled?: boolean; // Capitalize "Disabled" to match the variable name in the component
    onClose: () => void;
    User: Account;
    onOpenViewOrders: () => void;
}

export default function FirstModal({ Disabled, onClose, isOpen, User, onOpenViewOrders }: FirstModalProps) {
    const [showModal, setShowModal] = useState(isOpen)
    useEffect(() => {
        setShowModal(isOpen)
    }, [isOpen])

    const handleClose = useCallback(() => {
        if (Disabled) {
            return;
        }
        setShowModal(false)
        setTimeout(() => {
            onClose();
        }, 500);

    }, [Disabled, onClose])
    const handleViewOrders = useCallback(() => {
        if (Disabled) {
            return;
        }
        setShowModal(false)
        setTimeout(() => {
            onClose();
        }, 500);
    }, [Disabled, onClose])
    if (!isOpen) {
        return null;
    }
    return (
        <div>
            {showModal ? ( // Use triple equal (===) for strict equality comparison
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="w-full max-w-md p-6 m-4 bg-white rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold text-gray-800">{User.name}</h2>
                        <p className="mt-4 text-gray-600">{User.email}</p>
                        <p className="mt-4 text-gray-600">{User.address}</p>
                        {User.phoneNumber ? (<p className="mt-4 text-gray-600">{User.phoneNumber}</p>) : (<p className="mt-4 text-red-500">No Phone Number Found</p>)}
                        <div className="mt-6 flex gap-4">
                            <Button className="w-full text-white bg-blue-500 hover:bg-blue-600">
                                Contact
                            </Button>
                            <Button className="w-full text-white bg-green-500 hover:bg-green-600"
                                onClick={onOpenViewOrders}
                            >
                                View Orders
                            </Button>
                            <Button className="w-full text-gray-800 border-gray-300 hover:bg-gray-100" variant="outline"
                                onClick={handleClose}
                            >
                                Close
                            </Button>
                        </div>
                    </div>
                </div>
            ) : (
                // If Disabled is true, render an empty div or any other content you want
                <div></div>
            )}
        </div>
    );
}
