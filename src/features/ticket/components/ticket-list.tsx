import { TicketItem } from '@/features/ticket/components/ticket-item';
import { getTickets } from '@/features/ticket/queries/get-tickets';

const TicketList = async () => {

    const tickets = await getTickets();

    return (
        <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-from-top">
            {tickets.map((ticket) => (
                <TicketItem key={ticket.id} ticket={ticket} />
                // <Card key={ticket.id}
                //     className="w-full max-w-[420px]"
                // // className="w-full max-w-[420px] p-4 border border-slate-100 rounded"
                // >
                //     <CardHeader>
                //         <CardTitle className='flex gap-x-2'>
                //             <span>{TICKETS_ICONS[ticket.status]}</span>
                //             <span className="truncate">{ticket.title}</span>
                //         </CardTitle>
                //     </CardHeader>
                //     {/* <h3 className="text-lg font-semibold truncate">{ticket.title}</h3> */}
                //     <CardContent>
                //         <span className="line-clamp-3 whitespace-break-spaces">{ticket.content}</span>
                //     </CardContent>
                //     {/* <p className={clsx("text-sm text-slate-500 truncate", { "line-through": ticket.status === "DONE", })}>{ticket.content}</p> */}
                //     {/* <p className="text-sm text-slate-500 truncate">{TICKETS_ICONS[ticket.status]} {ticket.status}</p> */}
                //     <CardFooter>
                //         <Link href={ticketPath(ticket.id)} className="text-blue-500 underline">View Ticket</Link>
                //     </CardFooter>
                // </Card>
            ))}
        </div>

    );
};

export { TicketList };
