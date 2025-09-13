import { initialTickets } from '@/data';
import Link from "next/link";
import { ticketsPath } from '@/paths';
import { Placeholder } from '@/components/placeholder';
import { Button } from '@/components/ui/button';
import { TICKETS_ICONS } from '@/features/ticket/constants';
import { TicketItem } from '@/features/ticket/components/ticket-item';

type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

const TicketPage = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params;
  const ticket = initialTickets.find(t => t.id === ticketId);
  if (!ticket) {
    return (
      <Placeholder
        label="Ticket not found"
        button={
          <Button asChild variant="outline">
            <Link href={ticketsPath()} className="text-blue-500 underline">Back to Tickets</Link>
          </Button>
        }
      />
    );
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