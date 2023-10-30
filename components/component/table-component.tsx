import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table";
import { Order } from "@/types/Orders";


enum OrderStatus {
  Ordered = 'text-blue-500',
  Cancelled = 'text-red-500',
  Shipping = 'text-green-500',   // You can use 'text-green-500' for "Shipping."
  Delivered = 'text-teal-500'    // Use 'text-teal-500' for "Delivered" with a different color.
}


interface TableComponentProps {
  Data: Order[];
}

export function TableComponent({ Data }: TableComponentProps) {
  return (
    <div className="w-full overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order Reference Number</TableHead>
            <TableHead>Product Name</TableHead>
            <TableHead>Purchased By</TableHead>
            <TableHead>Order Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Data.map((item) => {
            const getStatusClassName = (status: string) => {
              switch (status) {
                case "ordered":
                  return OrderStatus.Ordered;
                case "cancelled":
                  return OrderStatus.Cancelled;
                case "shipped":
                  return OrderStatus.Shipping;
                case "delivered":
                  return OrderStatus.Delivered;
                default:
                  return "text-black";
              }
            };

            const statusClassName = getStatusClassName(item.orderStatus);

            return (
              <TableRow key={item.orderNumber}>
                <TableCell>{item.orderNumber}</TableCell>
                <TableCell>{item.ProductName}</TableCell>
                <TableCell>{item.CustomerName}</TableCell>
                <TableCell className={statusClassName}>{item.orderStatus.charAt(0).toUpperCase() + item.orderStatus.slice(1)}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
