/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/XOQamFCJPFg
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function OrderComponent() {
  return (
    <div className="p-6">
      <div className="flex gap-4">
        <div className="w-full max-w-md">
          <Label htmlFor="search">Search Customers</Label>
          <Input id="search" placeholder="Enter Customer Name..." type="search" />
        </div>
      </div>
      <div className="mt-6 space-y-6">
        <div className="flex items-center justify-between gap-4 p-4 bg-white shadow rounded-lg">
          <div className="flex items-center gap-4">
            <div className="text-4xl font-semibold text-gray-500 dark:text-gray-400">JP</div>
            <div className="grid gap-0.5 text-sm">
              <div className="font-semibold text-gray-500 dark:text-gray-400">Customer Name</div>
              <div className="text-zinc-500 dark:text-zinc-400">customer@example.com</div>
            </div>
          </div>
          <Button aria-haspopup="true" className="text-white bg-blue-500 hover:bg-blue-600">
            View Profile
          </Button>
        </div>
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
                <tr>
                  <td className="px-4 py-2">Example Product 1</td>
                  <td className="px-4 py-2">12345</td>
                  <td className="px-4 py-2">$20.00</td>
                  <td className="px-4 py-2">
                    <Button className="text-white bg-green-500 hover:bg-green-600">Delivered</Button>
                  </td>
                  <td className="px-4 py-2">John Doe</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Example Product 2</td>
                  <td className="px-4 py-2">67890</td>
                  <td className="px-4 py-2">$50.00</td>
                  <td className="px-4 py-2">
                    <Button className="text-white bg-yellow-500 hover:bg-yellow-600">In Transit</Button>
                  </td>
                  <td className="px-4 py-2">Jane Doe</td>
                </tr>
              </tbody>
            </table>
            <div className="mt-6 flex gap-4">
              <Button className="w-full text-white bg-blue-500 hover:bg-blue-600">Contact</Button>
              <Button className="w-full text-gray-800 border-gray-300 hover:bg-gray-100" variant="outline">
                Close
              </Button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 p-4 bg-white shadow rounded-lg">
          <div className="flex items-center gap-4">
            <div className="text-4xl font-semibold text-gray-500 dark:text-gray-400">JP</div>
            <div className="grid gap-0.5 text-sm">
              <div className="font-semibold text-gray-500 dark:text-gray-400">Customer Name</div>
              <div className="text-zinc-500 dark:text-zinc-400">customer@example.com</div>
            </div>
          </div>
          <Button aria-haspopup="true" className="text-white bg-blue-500 hover:bg-blue-600">
            View Profile
          </Button>
        </div>
      </div>
    </div>
  )
}
