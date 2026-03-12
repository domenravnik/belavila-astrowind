export type RentalXSlug =
  | 'home'
  | 'about'
  | 'contact-v1'
  | 'rooms'
  | 'rooms-category'
  | 'room-single'
  | 'blog'
  | 'blog-post'
  | 'blog-category'
  | 'password-protected'
  | 'not-found';

export type RentalXPage = {
  slug: RentalXSlug;
  title: string;
  description: string;
};

export const rentalXPageList: RentalXPage[] = [
  {
    slug: 'home',
    title: 'Home',
    description: 'Recharge energies in our unique hotel with cabins, activities, and guest stories.',
  },
  {
    slug: 'about',
    title: 'About',
    description: 'Discover our story, resort locations, and what makes our hospitality different.',
  },
  {
    slug: 'contact-v1',
    title: 'Contact',
    description: 'Get in touch for bookings, events, and custom stay experiences.',
  },
  {
    slug: 'rooms',
    title: 'Rooms',
    description: 'Browse our premium room types with key amenities and prices.',
  },
  {
    slug: 'rooms-category',
    title: 'Rooms Category',
    description: 'Explore room categories by stay style, group size, and service level.',
  },
  {
    slug: 'room-single',
    title: 'Room Single',
    description: 'A complete room detail page with gallery, amenities, and booking panel.',
  },
  {
    slug: 'blog',
    title: 'Blog',
    description: 'Travel ideas, local stories, and practical guides for your resort stay.',
  },
  {
    slug: 'blog-post',
    title: 'Blog Post',
    description: 'Long-form article layout with related posts and reader comments.',
  },
  {
    slug: 'blog-category',
    title: 'Blog Category',
    description: 'Category listing page for all posts in a selected topic.',
  },
  {
    slug: 'password-protected',
    title: 'Password Protected',
    description: 'Private access page for members-only or invite-only content.',
  },
  {
    slug: 'not-found',
    title: '404 Not Found',
    description: 'Error page for broken or unavailable links.',
  },
];

export const rentalXPages = Object.fromEntries(rentalXPageList.map((page) => [page.slug, page])) as Record<
  RentalXSlug,
  RentalXPage
>;

export const rentalXNav = [
  { label: 'Home', slug: 'home' },
  { label: 'About', slug: 'about' },
  { label: 'Rooms', slug: 'rooms' },
  { label: 'Blog', slug: 'blog' },
  { label: 'Contact', slug: 'contact-v1' },
] as const;

export const cabins = [
  {
    name: 'Single Rustic Cabin',
    type: '1 cabin / 2 persons',
    size: '36 m2',
    wifi: 'WiFi + breakfast',
    price: '$50',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Best Rustic Cabin',
    type: '2 cabins / 4 persons',
    size: '54 m2',
    wifi: 'WiFi + breakfast',
    price: '$90',
    image:
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Biggest Rustic Cabin',
    type: '4 cabins / 8 persons',
    size: '94 m2',
    wifi: 'WiFi + breakfast + pool',
    price: '$150',
    image:
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Family Forest Suite',
    type: '3 cabins / 6 persons',
    size: '72 m2',
    wifi: 'WiFi + breakfast + sauna',
    price: '$120',
    image:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
  },
] as const;

export const activities = [
  {
    title: 'Forest Tracking',
    text: 'Guided routes through scenic woods and lake viewpoints.',
    image:
      'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Hiking',
    text: 'Choose from gentle trails or full-day summit paths.',
    image:
      'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Mountain Biking',
    text: 'Bike-ready tracks with bike rental and local guides.',
    image:
      'https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?auto=format&fit=crop&w=1200&q=80',
  },
] as const;

export const testimonials = [
  {
    name: 'Wendi Yao',
    role: 'Product Designer',
    quote:
      'The atmosphere is warm, the cabins are spotless, and every detail felt thoughtfully planned.',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Emma Fielding',
    role: 'Travel Writer',
    quote:
      'A perfect mix of comfort and adventure. The mountain mornings were unforgettable.',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Outdoor Path',
    role: 'Blog Team',
    quote: 'We booked for two nights and stayed for five. The team made everything effortless.',
    image:
      'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Sami Brown',
    role: 'Engineer',
    quote: 'Fast internet, peaceful work corners, and great food. Ideal for work + recharge trips.',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
  },
] as const;

export const blogPosts = [
  {
    slug: 'forest-cabin-packing-guide',
    title: 'Forest Cabin Packing Guide For Any Season',
    category: 'Travel Guide',
    date: 'March 2, 2026',
    excerpt: 'What to bring for comfort, hiking, and changing weather around the resort.',
    image:
      'https://images.unsplash.com/photo-1501554728187-ce583db33af7?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'weekend-itinerary-rental-x',
    title: 'A Perfect Weekend Itinerary At Rental X',
    category: 'Itinerary',
    date: 'February 18, 2026',
    excerpt: 'A practical 3-day schedule with activities, meals, and rest stops.',
    image:
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'designing-a-calm-workcation',
    title: 'Designing A Calm Workcation In The Mountains',
    category: 'Workcation',
    date: 'January 25, 2026',
    excerpt: 'How to structure focused work blocks while enjoying the outdoors.',
    image:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'family-activities-near-lake',
    title: 'Family Activities Near The Lake District',
    category: 'Family',
    date: 'January 4, 2026',
    excerpt: 'Kid-friendly routes, picnic spots, and safe adventure choices.',
    image:
      'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80',
  },
] as const;
