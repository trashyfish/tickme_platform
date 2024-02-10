import Collection from '@/components/shared/Collection';
import { Button } from '@/components/ui/button';
import { getEventsByUser } from '@/lib/actions/event.actions';
import { auth } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';

const Profilepage = async () => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const organizedEvents = await getEventsByUser({ userId, page: 1 });
  return (
    <>
      {/* My Tickets */}

      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">My Tickets</h3>
          <Button asChild size="lg" className="button hidden sm:flex">
            <Link href="/#events">Explore more Events</Link>
          </Button>
        </div>
      </section>
      <section className="wrapper my-8">
        {/* <Collection
          data={events?.data}
          emptyTitle="No event tickets purchased yet"
          emptyStateSubtext="There are lots of events to attend"
          collectionType="My_Tickets"
          limit={3}
          page={1}
          urlParamName='ordersPage'
          totalPages={2}
        /> */}
      </section>

      {/* Events Organized */}
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">Events Organized</h3>
          <Button asChild size="lg" className="button hidden sm:flex">
            <Link href="/#events">Create New Event</Link>
          </Button>
        </div>
      </section>
      <section className="wrapper my-8">
        <Collection
          data={organizedEvents?.data}
          emptyTitle="You do not have any events created"
          emptyStateSubtext="Go create an event."
          collectionType="Events_Organized"
          limit={6}
          page={1}
          urlParamName="eventsPage"
          totalPages={2}
        />
      </section>
    </>
  );
};

export default Profilepage;