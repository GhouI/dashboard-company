"use client"
const DashBoard = () => {
    const TotalCustomers = 1;
    const TotalOrders = 1;
    const TotalProfit = 1;
    return (
        <div>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-2xl font-extrabold">Hello, Welcome to the Dashboard. </h1>
                <p>Here you can see Different Analytics</p>
            </div>
            <div className="grid grid-cols-3 gap-4 p-4 border border-gray-300 rounded-lg shadow-lg w-1/2 h-32">
                <div className="col-span-1">
                    <h2>Customers</h2>
                    <p>{TotalCustomers}</p>
                </div>
                <div className="col-span-1">
                    <h2>Total Orders</h2>
                    <p>{TotalOrders}</p>
                </div>
                <div className="col-span-1">
                    <h2>Profit</h2>
                    <p>{TotalProfit}</p>
                </div>
            </div>
        </div>
    )
}
export default DashBoard