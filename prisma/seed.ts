import { PrismaClient } from '@prisma/client';
//import { log } from 'console';

const prisma = new PrismaClient();

const tickets = [
    { id: '1', title: 'Ticket 1', content: 'Content for ticket 1 from the database', status: 'DONE' as const },
    { id: '2', title: 'Ticket 2', content: 'Content for ticket 2 from the database which is greater than 420px and should be seen as truncated on the page due to the Tailwind CSS attribute: truncate! However, we just changed the className to truncate after 3 lines of text. Content for ticket 2 which is greater than 420px and should be seen as truncated on the page due to the Tailwind CSS attribute: truncate! However, we just changed the className to truncate after 3 lines of text.', status: 'OPEN' as const },
    { id: '3', title: 'Ticket 3', content: 'Content for ticket 3 from the database', status: 'IN_PROGRESS' as const },
    { id: '4', title: 'Ticket 4', content: 'Content for ticket 4 from the database', status: 'OPEN' as const },
    { id: '5', title: 'Ticket 5', content: 'Content for ticket 5 from the database', status: 'DONE' as const },
];

const seed = async () => {
    /*
    for (const ticket of tickets) {
        console.log(`Seeding ticket: ${ticket.title}`);
        await prisma.ticket.create({
            data: ticket,
        });
    }
    console.log('Database seeded successfully.');
    */
    // Alternatively, using Promise.all for concurrent creation
    /*
    const promises = tickets.map(ticket => 
        prisma.ticket.create({
            data: ticket,
        })
    );
    await Promise.all(promises);
    console.log('Database seeded successfully with Promise.all.');
    */
    // Finally, using createMany for bulk creation
    const t0 = performance.now();
    console.log('Seeding tickets using createMany...');
    //await prisma.ticket.deleteMany(); // Clear existing data
    await prisma.ticket.createMany({
        data: tickets,
        skipDuplicates: true, // In case of rerun, skip duplicates
    });
    const t1 = performance.now();
    console.log(`Seeding completed in ${(t1 - t0).toFixed(0)} milliseconds.`);
    console.log('Database seeded successfully with createMany.');
};

seed();
