// import { initialTickets } from '@/data';
// import Link from "next/link";
// import { ticketsPath } from '@/paths';
// import { Placeholder } from '@/components/placeholder';
// import { Button } from '@/components/ui/button';
// import { TICKETS_ICONS } from '@/features/ticket/constants';
import { TicketItem } from '@/features/ticket/components/ticket-item';
import { getTicket } from '@/features/ticket/queries/get-ticket';
import { notFound } from "next/navigation";

type TicketPageProps = {
  params: {
    ticketId: string;
  };
};

const TicketPage = async ({ params }: TicketPageProps) => {
  // This is needed because --> Error: Route "/tickets/[ticketId]" used `params.ticketId`. `params` should be awaited before using its properties.
  // Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis
  const { ticketId } = await params;
  const ticket = await getTicket(ticketId); //params.ticketId);
  if (!ticket) {
    notFound();
  }
  return (
    <div className='flex justify-center animate-fade-from-top'>
      <TicketItem ticket={ticket} isDetail={true} />
    </div>
    // <div className="flex-1 flex flex-col gap-y-8">
    //   <div>
    //     <h2 className="text-3xl font-bold tracking-tight">{ticket.title}</h2>
    //     <p className="text-sm text-muted-foreground">{ticket.content}</p>
    //     <p>Status: {ticket.status} {TICKETS_ICONS[ticket.status]}</p>
    //   </div>
    //   {/* <br />
    //   <Link href={homePath()} className="text-blue-500 underline">
    //     Home Page
    //   </Link>
    //   <br />
    //   <Link href={ticketsPath()} className="text-blue-500 underline">
    //     Tickets Page
    //   </Link> */}
    // </div>
  );
};

export default TicketPage;