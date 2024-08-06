import { products } from '../image/products';

const data = [
  {
    productId: 'Calf Shelter & Hopper Cones',
    products: [
      {
        id: 1,
        image: [
          products.shelter1,
          products.shelter2,
          products.shelter3,
          products.shelter4,
        ],
        title: 'Calf Shelter',
        price: 1500,
        description: '8′ X 24′ with 2′ over-hang.',
      },
      {
        id: 2,
        image: [products.cone],
        title: 'Hopper Cone',
        price: 6000,
        description: '18′ 40°.',
      },
    ],
  },
  {
    productId: 'Feed Bunks & Bale Feeders',
    products: [
      {
        id: 3,
        image: [products.bale],
        title: 'Bale Feeder',
        price: 1000,
        description: '',
      },
      {
        id: 4,
        image: [products.bunk],
        title: 'Bottomless Guardrail Bunk',
        price: 3500,
        description: 'Measurements are 4′ x 27′.',
      },
      {
        id: 5,
        image: [products.bunk2],
        title: 'Feed Bunk',
        price: 3000,
        description: '3′ X 24′.',
      },
    ],
  },
  {
    productId: 'Feed Through Panels',
    products: [
      {
        id: 6,
        image: [products.feed],
        title: 'Feed Through Panel',
        price: 1000,
        description: '24′ long with 15.5″ gaps.',
      },
      {
        id: 7,
        image: [products.feed2],
        title: 'Pipe Feed Through',
        price: 2000,
        description: '24′ long with adjustable neck rail.',
      },
    ],
  },
  {
    productId: 'Freestand Panels & Windbreak',
    products: [
      {
        id: 8,
        image: [products.free1, products.free2],
        title: 'Free Stand Panel',
        price: 400,
        description: '24.5′ long and 65″ inches tall.',
      },
      {
        id: 9,
        image: [products.free3],
        title: 'Free Standing With Gate',
        price: 800,
        description: 'Free Stand with 12′ gate.',
      },
      {
        id: 10,
        image: [products.free4],
        title: 'Free Standing WindBreak',
        price: 1500,
        description: '24′ long & 8.5′ tall.',
      },
    ],
  },
  {
    productId: 'Pipe, Sucker Rods, & Posts',
    products: [
      {
        id: 11,
        image: [products.post1],
        title: 'Wood Posts',
        price: 150,
        description: '4.25′ X 7′',
      },
      {
        id: 12,
        image: [products.post2],
        title: 'Pipe - Average ′ Long',
        price: 'Please Call for Current Pricing',
        description: '2 ⅜ pipe 2 ⅞ pipe 3 ½ pipe.',
      },
      {
        id: 13,
        image: [products.post3],
        title: 'Sucker Rods',
        price: 'Please Call for Current Pricing',
        description: '¾´´ rod ⅞´´ rod 1″ rod.',
      },
    ],
  },
  {
    productId: 'Sucker Rod Panels & Gates',
    products: [
      {
        id: 14,
        image: [products.rod1, products.rod2],
        title: 'Sucker Rod Panels, 6 bar',
        price: 150,
        description: '24′ long & 61″ tall.',
      },
      {
        id: 15,
        image: [products.rod3],
        title: 'Swing Gate',
        price: 50,
        description: '12′ swing gate, 51″ tall.',
      },
      {
        id: 16,
        image: [products.rod4],
        title: 'Tube Gate Superduty 16′',
        price: 'Please Call for Current Pricing',
        description: '',
      },
    ],
  },
  {
    productId: 'Calf Catcher',
    products: [
      {
        id: 15,
        image: [
          products.catcher,
          products.catcher2,
          products.catcher3,
          products.catcher4,
        ],
        title: 'Calf Catcher',
        price: 'Please Call for Current Pricing',
        description: '',
      },
    ],
  },
];

export default data;
