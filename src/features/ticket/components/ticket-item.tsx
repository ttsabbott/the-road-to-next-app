import clsx from 'clsx';
import Link from 'next/link';
import { ticketPath } from '@/paths';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { TICKETS_ICONS } from '@/features/ticket/constants';
import type { Ticket } from '@/features/ticket/types';
import { LucideSquareArrowOutUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

type TicketItemProps = {
    ticket: Ticket;
    isDetail?: boolean;
};

const TicketItem = ({ ticket, isDetail }: TicketItemProps) => {

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
            <Link href={ticketPath(ticket.id)}>
                <LucideSquareArrowOutUpRight className="h-4 w-4" />
            </Link>
        </Button>
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
            {isDetail ? null : (
                <div className='flex flex-col gap-y-1'>
                    {detailButton}
                </div>
            )}
        </div>
    );
};

export { TicketItem };