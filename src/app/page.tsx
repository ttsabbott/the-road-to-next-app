import Link from "next/link";
import { ticketsPath, aboutPath, ticketPath } from "@/paths";
import { Heading } from "@/components/heading";

const HomePage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading title="Home Page" description="Your home place to start" />
      {/* <div>
        <h2 className="text-3xl font-bold tracking-tight">Home Page</h2>
        <p className="text-sm text-muted-foreground">Your home place to start</p>
      </div> */}
      <div className="flex-1 flex flex-col items-center">
        <Link href={aboutPath()} className="text-blue-500 underline">
          About Page
        </Link>
        <br />
        <Link href={ticketsPath()} className="text-blue-500 underline">
          Tickets Page
        </Link>
        <br />
        <Link href={ticketPath('123')} className="text-blue-500 underline">
          Ticket 123 Page
        </Link>
      </div>
    </div>
  );
};

export default HomePage;