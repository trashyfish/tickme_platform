import { eventsText } from '@/constants';
import React from 'react';

const Events = () => {
  return (
    <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
      <h2 className="h2-bold max-lg:text-center">{eventsText.headText}</h2>
      <div className="flex w-full flex-col gap-5 md:flex-row">
        Search Category Filter
      </div>
    </section>
  );
};

export default Events;
