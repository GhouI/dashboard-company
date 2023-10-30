"use client";
import React, { useEffect, useState } from 'react'; // Import useState
import { Account } from "@/types/Orders"
import { Label } from "@/components/ui/label"; // Import Label component
import { Input } from "@/components/ui/input"; // Import Input component
import SearchResult from "../_components/SearchResult";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import axios from "axios"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Button } from '@/components/ui/button';
const formSchema = z.object({
    input: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})


const CustomersPage = () => {
    const [customers, setCustomers] = useState<Account[]>([]); // Use state to manage the list of customers

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            input: "",
        },
    })
    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        try {
            const response = await axios.post("/api/search", values)
            console.log(response.data)
            if (response.data.length > 0) {
                setCustomers(response.data)
            }
        } catch {
            console.log("error")
        }
    }


    return (
        <div>
            <div className="p-6">
                <div className="flex">
                    <div className="w-full max-w-md">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                <FormField
                                    control={form.control}
                                    name="input"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Search for Customers</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Name, Address or Phone Number" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </form>
                        </Form>
                    </div>
                </div>
                <div className="mt-6 space-y-6">
                    {customers.length > 0 ? customers.map((customer) => (
                        <SearchResult key={customer.id} User={
                            {
                                id: customer.id,
                                name: customer.name,
                                email: customer.email,
                                address: customer.address,
                                postcode: customer.postcode,
                                phoneNumber: customer.phoneNumber
                            }
                        } />
                    )) : (
                        <div className="text-center">Search for a customers.</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CustomersPage;
