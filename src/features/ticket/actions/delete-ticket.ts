"use server";

import { prisma } from '@/lib/prisma';
import {
    // ticketPath,
    ticketsPath } from '@/paths';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const deleteTicket = async (ticketId: string) => {
    await prisma.ticket.delete({
        where: {
            id: ticketId,
        },
    });
    revalidatePath(ticketsPath()); // on-demaind caching revalidation
    // revalidatePath(ticketPath(ticketId)); // on-demaind caching revalidation
    redirect(ticketsPath());
};
