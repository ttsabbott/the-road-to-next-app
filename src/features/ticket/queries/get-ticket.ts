// Note: This is a mock implementation. Replace it with actual data fetching logic as needed.
import { initialTickets } from "@/data";
import { Ticket } from "../types";

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
