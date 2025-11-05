export type PropertyType = 'Villa' | 'Penthouse' | 'Apartment' | 'Townhouse'

export interface Property {
  id: string
  slug: string
  title: string
  city: string
  neighborhood: string
  price: number
  beds: number
  baths: number
  areaSqft: number
  type: PropertyType
  featured: boolean
  image: string
  gallery: string[]
  summary: string
  description: string
  amenities: string[]
}

export const properties: Property[] = [
  {
    id: 'p1',
    slug: 'serene-cliffside-villa',
    title: 'Serene Cliffside Villa',
    city: 'Malibu',
    neighborhood: 'Point Dume',
    price: 6250000,
    beds: 5,
    baths: 6,
    areaSqft: 5100,
    type: 'Villa',
    featured: true,
    image:
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80'
    ],
    summary: 'Oceanfront elegance with panoramic sunset views.',
    description:
      'A carefully composed coastal residence featuring full-height glazing, warm stone surfaces, and seamless indoor-outdoor flow for refined entertaining.',
    amenities: ['Infinity pool', 'Private cinema', 'Smart home', 'Wine cellar']
  },
  {
    id: 'p2',
    slug: 'skyline-atrium-penthouse',
    title: 'Skyline Atrium Penthouse',
    city: 'New York',
    neighborhood: 'Tribeca',
    price: 4950000,
    beds: 4,
    baths: 4,
    areaSqft: 3400,
    type: 'Penthouse',
    featured: true,
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1600&q=80'
    ],
    summary: 'Double-height city living above the skyline.',
    description:
      'An architectural penthouse with gallery walls, custom oak millwork, and a private terrace designed for high-altitude hospitality.',
    amenities: ['Doorman', 'Private terrace', 'Gym access', 'Concierge']
  },
  {
    id: 'p3',
    slug: 'parkline-reserve-apartment',
    title: 'Parkline Reserve Apartment',
    city: 'Chicago',
    neighborhood: 'Gold Coast',
    price: 2180000,
    beds: 3,
    baths: 3,
    areaSqft: 2300,
    type: 'Apartment',
    featured: false,
    image:
      'https://images.unsplash.com/photo-1616594039964-3c8d3be5d5d3?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=1600&q=80'
    ],
    summary: 'Quiet sophistication steps from the lakefront.',
    description:
      'A light-filled home with curated finishes, full-service amenities, and an efficient floor plan that prioritizes comfort and calm.',
    amenities: ['Valet parking', 'Residents lounge', 'Package room', 'Pet spa']
  },
  {
    id: 'p4',
    slug: 'courtyard-atelier-townhouse',
    title: 'Courtyard Atelier Townhouse',
    city: 'San Francisco',
    neighborhood: 'Noe Valley',
    price: 3575000,
    beds: 4,
    baths: 4,
    areaSqft: 3100,
    type: 'Townhouse',
    featured: false,
    image:
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?auto=format&fit=crop&w=1600&q=80'
    ],
    summary: 'Contemporary townhouse centered around an inner garden.',
    description:
      'An urban retreat with layered natural textures, custom lighting, and a landscaped courtyard connecting every living space.',
    amenities: ['Private garage', 'Rooftop deck', 'Radiant heating', 'EV charger']
  },
  {
    id: 'p5',
    slug: 'harborlight-residence',
    title: 'Harborlight Residence',
    city: 'Seattle',
    neighborhood: 'Queen Anne',
    price: 2890000,
    beds: 4,
    baths: 3,
    areaSqft: 2800,
    type: 'Villa',
    featured: true,
    image:
      'https://images.unsplash.com/photo-1600047509782-20d39509f26d?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1617104551722-3b2d51366485?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=80'
    ],
    summary: 'Modern Northwest design with water and city views.',
    description:
      'Designed with restrained luxury, this residence pairs serene interiors with dramatic glazing and crafted detailing.',
    amenities: ['Sauna', 'Chef kitchen', 'Home office', 'Heated patio']
  },
  {
    id: 'p6',
    slug: 'golden-hour-penthouse',
    title: 'Golden Hour Penthouse',
    city: 'Miami',
    neighborhood: 'Brickell',
    price: 4125000,
    beds: 4,
    baths: 5,
    areaSqft: 3600,
    type: 'Penthouse',
    featured: false,
    image:
      'https://images.unsplash.com/photo-1600607687644-c94bf4f0b70c?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600047509358-9dc75507daeb?auto=format&fit=crop&w=1600&q=80'
    ],
    summary: 'Waterfront penthouse with wraparound terrace.',
    description:
      'A high-design penthouse balancing soft materials and bold geometry, offering exceptional privacy and sweeping bay views.',
    amenities: ['Private elevator', 'Spa bath', 'Roof plunge pool', '24/7 security']
  }
]

export const testimonials = [
  {
    id: 't1',
    name: 'Ariana Patel',
    role: 'Founder, Atelier House',
    quote:
      'Urban Haven handled every detail with precision. The process felt curated from first tour to closing day.'
  },
  {
    id: 't2',
    name: 'Marcus Liu',
    role: 'Technology Executive',
    quote:
      'The team delivered market insight and negotiation discipline that saved us time and secured the right home.'
  },
  {
    id: 't3',
    name: 'Nora Bennett',
    role: 'Private Investor',
    quote:
      'Their portfolio quality is exceptional. Every property felt carefully selected, not simply listed.'
  }
]
