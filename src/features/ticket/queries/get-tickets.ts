import { initialTickets } from "@/data";
import { Ticket } from "../types";

export const getTickets = async (): Promise<Ticket[]> => {
    //return initialTickets;

    // Simulate a delay outside of the return data promise to make the logic more clear
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Show the environment variable is accessible here
    // console.log(process.env.DATABASE_URL);

    // Simulate an error for testing purposes
    // throw new Error("Failed to fetch tickets");

    // Simulate fetching tickets from an API or database
    return new Promise((resolve) => {
        // Remove the timeout to avoid needing to change this in the future
        // setTimeout(() => {
        resolve(initialTickets);
        // }, 1000); // Simulate network delay
    });
};
