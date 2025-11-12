// "use client"; // In order to use event handlers like onClick, we need to mark this component as a client component

import clsx from 'clsx';
import Link from 'next/link';
import { ticketPath } from '@/paths';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { TICKETS_ICONS } from '@/features/ticket/constants';
import { LucideSquareArrowOutUpRight, LucideTrash } from 'lucide-react';
import { Button } from '@/components/ui/button';

// import type { Ticket } from '@/features/ticket/types';
import { Ticket } from '@prisma/client';
// import { use } from 'react';
// import { prisma } from '@/lib/prisma';
import { deleteTicket } from '../actions/delete-ticket';
// import { getTicket } from '../queries/get-ticket';

type TicketItemProps = {
    ticket: Ticket;
    isDetail?: boolean;
};

// Note: We really want to make this a server component, but because it has an onClick handler for deleting tickets,
// we have to make it a client component. One possible solution is to lift the delete logic up to a parent server component
// and pass down a deleteTicket function as a prop. Another option is to use a form with method="post" and handle the deletion
// in a server action. For simplicity, we'll keep it as a client component for now.
const TicketItem = async ({ ticket, isDetail }: TicketItemProps) => {

    // const ticketPerTicketItem = await getTicket(ticket.id); //params.ticketId);

    // This is a test to see where this component is being rendered, either console of browser or console of server
    // because this component is used in both a server component (page.tsx) and a client component (ticket-detail.tsx)
    // If you see this in the browser console, then it is being rendered on the client side
    // If you see this in the server console, then it is being rendered on the server side
    // You should see this only once in the server console when navigating to the tickets page
    // and once in the browser console when navigating to a ticket detail page
    // If you see it multiple times in either console, then there is likely an issue with your code causing multiple renders
    // You can remove this line after confirming where it is being rendered
    // console.log("Where am I displayed? (TicketItem)");

    const detailButton = (
        <Button variant="outline" size="icon" asChild>
            <Link prefetch href={ticketPath(ticket.id)}>
                <LucideSquareArrowOutUpRight className="h-4 w-4" />
            </Link>
        </Button>
    );

    // const handleDeleteTicket = async () => {
    //     await deleteTicket(ticket.id);
    //     /*
    //     "use server"; // This will conflict with the "use client" at the top, but is here to demonstrate the concept
    //     // Implement ticket deletion logic here
    //     // console.log(`Delete ticket with id: ${ticket.id}`);
    //     // console.log('Ticket deletion not yet implemented.');
    //     // TODO : Implement ticket deletion
    //     alert('Ticket deletion not yet implemented.');
    //     // However, using prisma here will cause an error because this is a client component
    //     //  "Error: PrismaClient is unable to be run in the browser."
    //     //  So this is just for demonstration purposes
    //     await prisma.ticket.delete({
    //         where: {
    //             id: ticket.id,
    //         },
    //     });
    //     */
    // };

    // const deleteButton = (
    //     <Button variant="outline" size="icon" onClick={handleDeleteTicket}>
    //         <LucideTrash className="h-4 w-4" />
    //     </Button>
    // );

    // Using a form to call a server action for deleting the ticket, thus making this component a server component!
    const deleteButton = (
        <form action={deleteTicket.bind(null, ticket.id)}>
            <Button variant="outline" size="icon">
                <LucideTrash className="h-4 w-4" />
            </Button>
        </form>
    );

    return (
        <div className={clsx("w-full flex gap-x-1", {
            "max-w-[580px]": isDetail,
            "max-w-[420px]": !isDetail,
        })}>
            <Card className="w-full">
                <CardHeader>
                    <CardTitle className='flex gap-x-2'>
                        <span>{TICKETS_ICONS[ticket.status]}</span>
                        <span className="truncate">{ticket.title}</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <span className={clsx("whitespace-break-spaces", {
                        "line-clamp-3": !isDetail,
                    })}>{ticket.content}</span>
                </CardContent>
            </Card>
            <div className='flex flex-col gap-y-1'>
                {isDetail ? deleteButton : detailButton}
            </div>
        </div>
    );
};

export { TicketItem };
