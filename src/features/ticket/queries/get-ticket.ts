import {prisma} from "@/lib/prisma";
import { cache } from "react";

// Note: This is a mock implementation. Replace it with actual data fetching logic as needed.
//import { initialTickets } from "@/data";
// import { Ticket } from "../types";

/*
export const getTicket = async (ticketId: string): Promise<Ticket | null> => {
    // Simulate a 2 second delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Simulate an error for testing purposes
    // throw new Error("Failed to fetch ticket");

    const maybeTicket = initialTickets.find((ticket) => ticket.id === ticketId);

    return new Promise((resolve) => {
        resolve(maybeTicket || null);
    });
};
*/

// Note: if the parameter is named id, then the where clause can be simplified to just { id }
// 2nd note: using findUniqueOrThrow to automatically throw an error if not found which displays the error.tsx component
// Adding cache to memoize the function results
export const getTicket = cache(async (ticketId: string) => {
    console.log("Fetching ticket with id:", ticketId);
    return await prisma.ticket.findUnique({
        where: {
            id: ticketId,
        },
    });
});
