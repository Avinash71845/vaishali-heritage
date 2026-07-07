export const places = [
  {
    id: 1,
    name: 'Ashokan Pillar',
    category: 'Historical',
    type: 'Ancient Monument',
    rating: 4.7,
    reviews: 230,
    distance: '1 hr  5 km',
    image: 'https://images.unsplash.com/photo-1602407294553-6ac9170b3ed0?w=800&q=80',
    builtIn: '3rd Century BCE',
    height: '12.2 m',
    material: 'Sandstone',
    bestTime: 'Oct - Mar',
    weather: '20°C - 30°C',
    description:
      'The Ashokan Pillar in Vaishali is a monolithic structure built by Emperor Ashoka in 3rd century BCE. It is a symbol of peace and harmony.',
    history:
      'This pillar was built to commemorate the visit of Lord Buddha to Vaishali. The inscription on the pillar is in Prakrit language and Brahmi script.'
  },
  {
    id: 2,
    name: 'Buddha Stupa',
    category: 'Buddhist',
    type: 'Buddhist Site',
    rating: 4.8,
    reviews: 198,
    distance: '1.5 hr  3 km',
    image: 'https://images.unsplash.com/photo-1623068387585-95dfbedd54a8?w=800&q=80',
    builtIn: '5th Century BCE',
    height: '8 m',
    material: 'Brick',
    bestTime: 'Oct - Mar',
    weather: '20°C - 30°C',
    description: 'Sacred stupa and spiritual site believed to hold relics associated with Lord Buddha.',
    history: 'Constructed to mark the place where Buddha delivered his last sermon before his journey to Kushinagar.'
  },
  {
    id: 3,
    name: 'Abhishek Pushkarini',
    category: 'Religious',
    type: 'Sacred Tank',
    rating: 4.6,
    reviews: 156,
    distance: '1 hr  4 km',
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&q=80',
    builtIn: 'Ancient',
    height: '-',
    material: 'Stone',
    bestTime: 'Oct - Mar',
    weather: '20°C - 30°C',
    description: 'Sacred tank associated with Lord Buddha used for ceremonial purification.',
    history: 'According to legend, this tank was used by the Lichhavi rulers for royal coronation ceremonies.'
  },
  {
    id: 4,
    name: 'Vaishali Museum',
    category: 'Museums',
    type: 'Historical Museum',
    rating: 4.5,
    reviews: 142,
    distance: '1 hr  2 km',
    image: 'https://images.unsplash.com/photo-1566127992631-137a642a90f4?w=800&q=80',
    builtIn: '1971',
    height: '-',
    material: 'Concrete',
    bestTime: 'Oct - Mar',
    weather: '20°C - 30°C',
    description: 'Explore the rich history of Vaishali through preserved artifacts and ancient relics.',
    history: 'Houses terracotta figurines, coins, and seals excavated from the ancient site of Vaishali.'
  },
  {
    id: 5,
    name: 'Kutagarasala',
    category: 'Buddhist',
    type: 'Buddhist Site',
    rating: 4.6,
    reviews: 110,
    distance: '2 hr  6 km',
    image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=800&q=80',
    builtIn: '5th Century BCE',
    height: '-',
    material: 'Brick',
    bestTime: 'Oct - Mar',
    weather: '20°C - 30°C',
    description: 'Site of the monastery where Buddha spent many monsoons during his ministry.',
    history: 'Considered one of the most significant sites in early Buddhist history.'
  },
  {
    id: 6,
    name: 'Raja Vishal ka Garh',
    category: 'Historical',
    type: 'Historical Site',
    rating: 4.4,
    reviews: 98,
    distance: '2.5 hr  7 km',
    image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?w=800&q=80',
    builtIn: 'Ancient',
    height: '-',
    material: 'Earth Mound',
    bestTime: 'Oct - Mar',
    weather: '20°C - 30°C',
    description: 'Remains of the ancient parliamentary hall of the Vajji confederacy.',
    history: 'Believed to be the site of the world\'s earliest known republic assembly.'
  }
]

export const hotels = [
  {
    id: 1,
    name: 'Hotel Vaishali Inn',
    rating: 4.3,
    distance: '1.2 km',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&q=80'
  },
  {
    id: 2,
    name: 'The Heritage Resort',
    rating: 4.6,
    distance: '2.5 km',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&q=80'
  },
  {
    id: 3,
    name: 'Buddha Residency',
    rating: 4.2,
    distance: '3.1 km',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&q=80'
  }
]

export const reviews = [
  {
    id: 1,
    name: 'Anjali Sharma',
    date: '2 days ago',
    rating: 5,
    comment: 'Vaishali is sooo beautiful! The history, the people, the food - everything was amazing.',
    avatar: 'https://i.pravatar.cc/100?img=47',
    photos: [
      'https://images.unsplash.com/photo-1602407294553-6ac9170b3ed0?w=200&q=80',
      'https://images.unsplash.com/photo-1623068387585-95dfbedd54a8?w=200&q=80',
      'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=200&q=80'
    ]
  },
  {
    id: 2,
    name: 'Rohit Verma',
    date: '1 week ago',
    rating: 4,
    comment: 'A must visit place for every history lover.',
    avatar: 'https://i.pravatar.cc/100?img=12',
    photos: []
  }
]

export const ratingBreakdown = [
  { star: 5, count: 180 },
  { star: 4, count: 35 },
  { star: 3, count: 10 },
  { star: 2, count: 3 },
  { star: 1, count: 2 }
]

 export const interestsList = ['History', 'Buddhism', 'Culture', 'Nature']
