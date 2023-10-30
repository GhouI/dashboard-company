import { db } from "@/lib/db"
import { NextResponse } from "next/server"

export async function POST(
    req: Request
) {
    try {
        const { input } = await req.json()
        const HitFunction = await SearchFunction(input)
        console.log("[RESULTS]", HitFunction?.length)
        if(HitFunction?.length === 0) return new NextResponse("No Results", { status: 404 })
        return NextResponse.json(HitFunction)

    } catch (error) {
        console.log("[SEARCH ERROR ]", error)
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}

    const SearchFunction = async (query: string) => {
        try {
            const result = await db.customer.findMany({
                where: {
                    OR: [
                        {
                            name: {
                                contains: query
                            }
                        },
                        {
                            email: {
                                contains: query
                            }
                        },
                        {
                            phoneNumber: {
                                contains: query
                            }
                        }
                    ]
                }
            });
            return result;
        } catch (error) {
            console.error("Error searching for customers:", error);
        }
    };