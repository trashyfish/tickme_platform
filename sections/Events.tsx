import Collection from '@/components/shared/Collection';
import Search from '@/components/shared/Search';
import { eventsText } from '@/constants';
import { getAllEvents } from '@/lib/actions/event.actions';
import { SearchParamProps } from '@/types';
import React from 'react';

const Events = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || '';
  const category = (searchParams?.category as string) || '';

  const events = await getAllEvents({
    query: searchText,
    category,
    page,
    limit: 6,
  });

  // console.log(events);
  return (
    <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
      <h2 className="h2-bold max-lg:text-center">{eventsText.headText}</h2>
      <div className="flex w-full flex-col gap-5 md:flex-row">
        <Search /> Category Filter
      </div>

      <Collection
        data={events?.data}
        emptyTitle="No Events Found"
        emptyStateSubtext="Come back later"
        collectionType="All_Events"
        limit={6}
        page={1}
        totalPages={events?.totalPages}
      />
    </section>
  );
};

export default Events;
