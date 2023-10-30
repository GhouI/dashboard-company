import { db } from "@/lib/db"
import { NextResponse } from "next/server"

export async function POST(
    req: Request
) {
    try {
        const { customerId } = await req.json()
        const Orders = await db.order.findMany({
            where: {
                customerId: customerId
            },
        })
        console.log("[RESULTS ORDERS]", Orders?.length)
        if(Orders?.length === 0) return new NextResponse("No Results", { status: 404 })
        return NextResponse.json(Orders)

    } catch (error) {
        console.log("[ORDERS ERROR]", error)
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}
