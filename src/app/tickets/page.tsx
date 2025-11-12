// "use client";

// import clsx from 'clsx';
// import Link from 'next/link';
// import { initialTickets } from '@/data';
// import { ticketPath, homePath } from '@/paths';
// import {
//     Card,
//     CardHeader,
//     CardFooter,
//     CardTitle,
//     CardAction,
//     CardDescription,
//     CardContent,
// } from '@/components/ui/card';
// import { Separator } from '@/components/ui/separator';
// import { CircleCheck, FileText, Pencil } from 'lucide-react';
// import { LucideCircleCheck, LucideFileText, LucidePencil } from 'lucide-react';
import { Heading } from '@/components/heading';
import { Placeholder } from '@/components/placeholder';
import { Spinner } from '@/components/ui/spinner';
// import { TicketItem } from '@/features/ticket/components/ticket-item';
import { TicketList } from '@/features/ticket/components/ticket-list';
// import { Ticket } from '@/features/ticket/types';
// import { getTickets } from '@/features/ticket/queries/get-tickets';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
// import { useEffect, useState } from 'react';
// import { Spinner } from '@/components/ui/spinner';

// const CheckIcon = () => (
//     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
//         <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
//     </svg>
// );

// const PencilIcon = () => (
//     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
//         <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
//     </svg>
// );

// const DocumentIcon = () => (
//     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
//     </svg>
// );

// const TICKETS_ICONS = {
//     OPEN: <DocumentIcon />,
//     DONE: <CheckIcon />,
//     IN_PROGRESS: <PencilIcon />,
// };

// const TICKETS_ICONS = {
//     OPEN: <FileText />,
//     DONE: <CircleCheck />,
//     IN_PROGRESS: <Pencil />,
// };

// const TICKETS_ICONS = {
//     OPEN: <LucideFileText />,
//     DONE: <LucideCircleCheck />,
//     IN_PROGRESS: <LucidePencil />,
// };

// export const dynamic = 'force-dynamic';
// export const revalidate = 0; <-- this makes it a dynamic page, > 0 makes it static for that many seconds

// Removed async because we added the Suspense component
const TicketsPage = () => {

    // const tickets = await getTickets();
    // const tickets: Ticket[] = await getTickets();
    // const [tickets, setTickets] = useState<Ticket[]>([]);

    // useEffect(() => {
    //     const fetchTickets = async () => {
    //         // const { getTickets } = await import('@/features/ticket/queries/get-tickets');
    //         const result = await getTickets();
    //         setTickets(result);
    //     };
    //     fetchTickets();
    // }, []);

    // if (tickets.length === 0) {
    //     return <div>Loading tickets...</div>;
    // }

    return (
        <div className="flex-1 flex flex-col gap-y-8">
            <Heading title="Tickets Page" description="All your tickets at one place" />
            {/* <div>
                <h2 className="text-3xl font-bold tracking-tight">Tickets Page</h2>
                <p className="text-sm text-muted-foreground">All your tickets at one place</p>
            </div>
            <Separator /> */}
            <ErrorBoundary fallback={<Placeholder label="Failed to load tickets" />}>
                <Suspense fallback={<Spinner />}>
                    <TicketList />
                </Suspense>
            </ErrorBoundary>
            {/* <br />
            <Link href={homePath()} className="text-blue-500 underline">
                Home Page
            </Link> */}
        </div>
    );
};

export default TicketsPage;