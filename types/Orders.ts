export type Order = {
    orderNumber: string,
    totalAmount: number,
    orderStatus: string,
    CustomerName: string,
    ProductName: string,
}
export type Account = {
    id: number;
    name: string;
    email: string;
    address: string | null;
    postcode: string | null;
    phoneNumber: string | null;
}
