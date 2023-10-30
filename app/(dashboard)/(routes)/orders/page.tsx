import { TableComponent } from '@/components/component/table-component';
import { db } from '@/lib/db';
import React from 'react';

const Orders = async () => {
    try {
        const orders = await db.order.findMany();

        const getCustomerName = async (ID: number) => {
            const customer = await db.customer.findUnique({
                where: {
                    id: ID
                }
            });
            return customer?.name || '';
        };

        const orderPromises = orders.map(async (order) => {
            const customerName = await getCustomerName(order.customerId);
            return {
                orderNumber: order.orderNumber,
                ProductName: order.ProductName || '', // Access the customer's name from the related Customer model
                CustomerName: customerName, // Access the customer's name from the related Customer model
                orderStatus: order.orderStatus,
                totalAmount: order.totalAmount
            };
        });

        const DataProviding = await Promise.all(orderPromises);

        return (
            <div>
                <TableComponent Data={DataProviding} />
            </div>
        );
    } catch (error) {
        console.error('Error fetching data from the database:', error);
        return (
            <div>
                {/* You can add an error message here */}
            </div>
        );
    }
};

export default Orders;
