export const headerLinks = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'Create Event',
    route: '/events/create',
  },
  {
    label: 'My Profile',
    route: '/profile',
  },
];

export const eventDefaultValues = {
  title: '',
  description: '',
  location: '',
  imageUrl: '',
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: '',
  price: '',
  isFree: false,
  url: '',
};

export const heroText = {
  headText: 'Get Tickets For Your Favorite Upcoming Events!',
  subHeadText:
    'Music, Film, Opera, Web Seminars, Workshops, Conventions, we have it all for you! ',
};

export const eventsText = {
  headText: 'Events At Your Finger Tips.',
};
