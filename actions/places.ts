import { db } from '@/lib/db';

export interface PlaceDataType {
  id: string;
  place: string;
  description: string;
  image: string;
  category: string;
}

/**
 * Gets all places
 * @returns {Promise<PlaceDataType[]>}
 */
export const getAllPlaces = async (): Promise<PlaceDataType[]> => {
  const result = await db.touristPlace.findMany({});
  return result;
};

/**
 * Only used to add default values of places
 * @param formData
 */
export const addDefaultValues = async (formData: FormData) => {
  'use server';
  try {
    const data = [
      {
        id: 'munnar',
        place: 'Munnar',
        description:
          'The most beautiful hill station in India. God has gifted the place with the romantic climate and the sober greenery of tea plantations over the hills. Luckily travellers can have the sights of wild Elephants. Eravikulam national park situated in the Anamudi Mountain the highest peak in south India having the rare species of Nilgiri Tahr (Mountain Goat). Munnar has become one of the best tourist destination of kerala and having lots of sightseeing locations like tea estates, spice plantations and activities like elephant Rides, Jeep safari, Theme Parks which will give the travellers a memorable experience.',
        image:
          'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/places/obwycfunza05h5pfljpf',
        category: 'HillStation',
      },
      {
        id: 'alappuzha',
        place: 'Alappuzha',
        description:
          'Alleppey also known as the Venice of the East is listed as one of the top honeymoon destinations in the world by National Geographic, laid remarkable name in attracting tourists. Well known for the large networks of canals connecting small island villages. Tourists can enjoy shikara boating, house boats and motor boat cruise through the lake watching the paddy fields and endless views of coconut lagoons. The beaches of alleppey and Ravi Karunakaran museum are must see places in Alleppey.',
        image:
          'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/places/pix2jbufjgqetgdwqchj',
        category: 'Backwaters',
      },
      {
        id: 'thekkady',
        place: 'Thekkady',
        description:
          'The place is famous for its Wild life located in the border of Kerala and Tamilnadu. The nearby town is Kumily where travellers can purchase fresh and genuine spices directly from the local traders. The main attractions of thekkady is the Periyar Tiger Reserve where you can enjoy the Wild life boating, Trekking, Bamboo Rafting and nature Walk. Travellers can enjoy watching Martial Art shows, Kathakali Show (Traditional Dance form), Tribal Dance etc.. You can explore the natural Beauty of dense forest by Jungle Jeep Safari and chose a massage centre to experience the Kerala Ayurvedic massage.',
        image:
          'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/places/aefrp2ovri012uiq0r0a',
        category: 'Wildlife / Nature',
      },
      {
        id: 'kovalam',
        place: 'Kovalam',
        description:
          "Located in the vicinity of Kerala's capital city, Kovalam is famous for having many monuments of Travancore Kingdom and the place is also known as the land of padmanabha (Lord Vishnu). Recently got public attention for the treasures found in Padmanabhaswamy Temple, Visitors can explore the history of Travancore Kingdom from a couple of museums in the region. Other attractions are Kovalam Beach one of the calm beaches in South India, Trivandrum Zoo, Pridarsheny Planetarium, Poovar Estuary Island and Veli Boat Club where travellers can have some adventures water sports.",
        image:
          'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/places/a3bap2ylviuxeol9mgs8',
        category: 'Beach',
      },
      {
        id: 'vagamon',
        place: 'Vagamon',
        description:
          'Vagamon hill station is situated 45 Km away from Thekkady. The place is one of the best hideouts for honeymoon couples and travellers who expects relaxation and to stay undisturbed from maddening crowd. Vagamon has a fantastic view of Western Ghats, tea plantations and enhancing pine forests. It’s an upcoming tourist destination and not much explored by travellers.The fog, green meadows and small streams will cool your eyes and refresh your mind.',
        image:
          'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/places/nuoolmdwoip1kexfh5kg',
        category: 'Hill Station',
      },
      {
        id: 'kanyakumari',
        place: 'Kanyakumari',
        description:
          'The southern tip of India lays in the neighbouring state Tamilnadu. It’s the meeting point of the great Indian Ocean and the Arabian Sea. Kanyakumari is just 80 Km drive from Trivandrum. The place is famous for its unique Sun Set and Sun Rise View. The boating through the sea towards Vivekananda rock is a great experience, and it’s a famous pilgrim centre and visitors will not miss the Kanyakumari Devi Temple and the multi-coloured sands on the beach. ',
        image:
          'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/places/fnwf5jrgpkygxpnzlwss',
        category: 'Beach / Sunrise',
      },
      {
        id: 'kollam',
        place: 'Thenmala',
        description:
          "Thenmala, located in the eastern part of Kerala, India, is known as India's first planned ecotourism destination. Nestled amidst the Western Ghats, it offers a captivating blend of natural beauty, cultural heritage, and adventure activities",
        image:
          'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/places/k2qmsteciyxvwawb6qbs',
        category: 'Eco Tourism',
      },
    ];
    const result = await db.touristPlace.createMany({ data: data });
    return result;
  } catch (e) {
    console.log('Error in get user by email', e);
    return null;
  }
};

export const addCarouselImages = async (formData: FormData) => {
  'use server';
  const data = [
    {
      id: 'bus_26_benz',
      vehicle_type: 'bus',
      title: '26 SEATER BENZ IN KERALA',
      list: [
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/bus/hzfx8rh6ewhahzydbfeh',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/bus/wcx1qqhmsezz8nye6umt',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/bus/o7avkq0rcdfxwagazosv',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/bus/rnm9ypzmnkveeungss8t',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/bus_new/zon0wr9mflhiugbiiveo',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/bus_new/or9vcnkpyknh2ciatu3d',
      ],
    },
    {
      id: 'bus_34',
      vehicle_type: 'bus',
      title: '34 SEATER MINI BUS IN KERALA',
      list: [
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/bus_new/vmjhfbxjsll2slgi3suy',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/bus_new/zhuzajuknhdkzwm7zhxi',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/bus_new/wki84n0cee7tu9qe8wft',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/bus_new/i5gspuvrciaazy4fdclp',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/bus_new/ik0z0otcoffo0usxuz9g',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/bus_new/qk0hiqlekermwa1w3vfs',
      ],
    },
    {
      id: 'bus_35_benz',
      vehicle_type: 'bus',
      title: '35 SEATER BENZ IN KERALA',
      list: [
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/bus/mf9jl49uagiaknh78zmd',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/bus_new/zhuzajuknhdkzwm7zhxi',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/bus/dzjzktbtffq0a6mtg7o8',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/bus_new/rkbu8yhxbexfucuc5xd1',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/bus_new/ctukjdobhhdpugrjblq6',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/bus_new/wki84n0cee7tu9qe8wft',
      ],
    },
    {
      id: 'bus_45_benz',
      vehicle_type: 'bus',
      title: '45 SEATER LUXURY BENZ GLIDER IN KERALA',
      list: [
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/bus/jypqrqwtmyn9ajlzqrsu',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/bus_new/ctukjdobhhdpugrjblq6',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/bus/bsv85p5obbkyqx6f90vh',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/bus_new/ctukjdobhhdpugrjblq6',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/bus/zwvrrfhytl0nbmjwdkja',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/bus/qiceyts4oiuyl2xgw2pe',
      ],
    },
    {
      id: 'bus_53_benz',
      vehicle_type: 'bus',
      title: '53 SEATER LUXURY MULTI BENZ GLIDER IN KERALA',
      list: [
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/bus/lknnhqkbbevdzpsuwdsk',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/bus_new/cbghp0hzz6wk2zgxsxmk',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/bus_new/sawslvy9sloriizew1j4',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/bus_new/pcqpd5d2ampudrcwvm9m',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/bus_new/biqz7qqhbinoktb3ug9h',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/bus_new/ihairm1yj3brtcabyqy4',
      ],
    },
  ];
  const result = await db.carouselImages.createMany({ data: data });
  return result;
};

/**
 * Gets the place with Id
 * @param id
 * @returns {Promise<PlaceDataType?> }
 */
export const getPlaceWithId = async (id: string): Promise<PlaceDataType | null> => {
  try {
    const result = await db.touristPlace.findFirst({
      where: {
        AND: {
          id,
        },
      },
    });
    return result;
  } catch (e) {
    return null;
  }
};

export const saveNewPlace = async (formData: FormData) => {
  'use server';
  try {
    console.log('saving new place ');

    const id = formData.get('id') ? String(formData.get('id')) : '';
    const place = formData.get('place') ? String(formData.get('place')) : '';
    const description = formData.get('description') ? String(formData.get('description')) : '';
    const category = formData.get('category') ? String(formData.get('category')) : '';
    const image = formData.get('image') ? String(formData.get('image')) : '';

    const newData = {
      id,
      place,
      description,
      category,
      image,
    };
    const user = await db.touristPlace.create({ data: newData });
    return user;
  } catch (e) {
    console.log('Error in get user by email', e);
    return null;
  }
};
