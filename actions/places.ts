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
        id: 'kochi',
        place: 'Kochi',
        description:
          'The Major city in Kerala also known as the Queen of Arabian Sea, Cochin (Kochi) is well known over the world from the ancient times as spice trade centre of India and was explored by many countries. The foot prints of those countries still exists in cochin and the visitors can experience it at the Fort Cochin, Dutch palace, Jewish synagogue, Chinese fishing net and the grave of Vasco Da Gama the famous Portuguese sailor.',
        image:
          'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/places/ae4mtinb0cacwj3f8uya',
        category: 'Beach',
      },
    ];
    const result = await db.touristPlace.createMany({ data: data });
    return result;
  } catch (e) {
    console.log('Error in get user by email', e);
    return null;
  }
};

export const getSightsBasedonId = async (id: string) => {
  const result = await db.sightSeeingSpots.findMany({
    where: {
      place_id: id,
    },
  });
  return result;
};

export const addSightSeeing = async (formData: FormData) => {
  'use server';
  const data = [
    {
      id: 27,
      place_id: 'kanyakumari',
      sight_name: 'KANYAKUMARI BEACH',
      sight_image:
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/places/sightseeing/fnahrgqh8ejokmzlbiyh',
      carousel_images: [],
      location: '',
    },
    {
      id: 29,
      place_id: 'kanyakumari',
      sight_name: 'VIVEKANADA ROCK',
      sight_image:
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/places/sightseeing/xkcxdvqfqndeby9rajri',
      carousel_images: [],
      location: '',
    },
    {
      id: 30,
      place_id: 'kanyakumari',
      sight_name: 'THIRUVALLUAVAR STATUTE',
      sight_image:
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/places/sightseeing/xsb1qcq44k6s26mpdm0k',
      carousel_images: [],
      location: '',
    },
    {
      id: 31,
      place_id: 'kanyakumari',
      sight_name: 'THANUMALAYAN TEMPLE',
      sight_image:
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/places/sightseeing/atfz3zhopgs4kp5ew2ec',
      carousel_images: [],
      location: '',
    },
    {
      id: 32,
      place_id: 'kanyakumari',
      sight_name: 'PADMANABHAPURAM PALACE',
      sight_image:
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/places/sightseeing/n8qu0ynppcx2axnegdkc',
      carousel_images: [],
      location: '',
    },
  ];
  const result = await db.sightSeeingSpots.createMany({ data: data });
  return result;
};
/**
 * Adding carousel images for cars
 * @param formData
 * @returns
 */

export const addCarouselImages = async (formData: FormData) => {
  'use server';
  const data = [
    {
      id: 'traveller_ultra_luxury_08',
      vehicle_type: 'traveller',
      title: 'ULTRA LUXURY TEMPO TRAVELLER IMAGES',
      list: [
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/glwbzppvwrqlmlfs7hnm',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/j3ncafbvumzzg0sau245',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/yevhmurjudhwjz63pkhi',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/hnmhphfn9vd0nddosku2',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/traveller_1',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/inside_2',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/j3ncafbvumzzg0sau245',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/chi36huby8tlul2nbvz3',
      ],
    },
    {
      id: 'traveller_ultra_luxury_10',
      vehicle_type: 'traveller',
      title: '10 SEATER LUXURY TEMPO TRAVELLER IMAGES',
      list: [
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/traveller_2',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/euf1asoo8ozsxg1prz42',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/dj4jd0rqjjzqvq0is1oh',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/f8ppiwq0u5wobuwnbfm6',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/jhx7gyldxejlbmq6jtlj',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/s1bx3ed4grfujssv0xt6',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/k8kqmmrkbbs9ksgultw2',
      ],
    },
    {
      id: 'traveller_premium_10',
      vehicle_type: 'traveller',
      title: '10 SEATER PREMIUM TEMPO TRAVELLER IMAGES',
      list: [
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/ivygitotxycfzxibrivd',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/zmboxeuuxb9sx2lvhnb0',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/tbtcv5ouq8atoxaimc29',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/traveller_2',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/traveller_3',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/jgbaw4yifjdd2vpvx7uk',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/a2ny9xm7mvmfib9rprso',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/chi36huby8tlul2nbvz3',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/ivygitotxycfzxibrivd',
      ],
    },
    {
      id: 'traveller_premium_12',
      vehicle_type: 'traveller',
      title: '10-12 SEATER EXECUTIVE TEMPO TRAVELLER IMAGES',
      list: [
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/jgbaw4yifjdd2vpvx7uk',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/traveller_2',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/ez2mrbrjsb7bear64wmx',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/dj4jd0rqjjzqvq0is1oh',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/f8ppiwq0u5wobuwnbfm6',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/jhx7gyldxejlbmq6jtlj',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/s1bx3ed4grfujssv0xt6',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/k8kqmmrkbbs9ksgultw2',
      ],
    },
    {
      id: 'traveller_premium_17',
      vehicle_type: 'traveller',
      title: '17 SEATER PREMIUM TEMPO TRAVELLER IMAGES',
      list: [
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/traveller_2',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/euf1asoo8ozsxg1prz42',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/dj4jd0rqjjzqvq0is1oh',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/f8ppiwq0u5wobuwnbfm6',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/jhx7gyldxejlbmq6jtlj',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/s1bx3ed4grfujssv0xt6',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/k8kqmmrkbbs9ksgultw2',
      ],
    },
    {
      id: 'traveller_premium_20',
      title: '20 SEATER PREMIUM TEMPO TRAVELLER IMAGES',
      vehicle_type: 'traveller',
      list: [
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/traveller_5',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/euf1asoo8ozsxg1prz42',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/dj4jd0rqjjzqvq0is1oh',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/traveller_6',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/k8kqmmrkbbs9ksgultw2',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/jhx7gyldxejlbmq6jtlj',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/s1bx3ed4grfujssv0xt6',
      ],
    },
    {
      id: 'traveller_premium_26',
      title: '26 SEATER PREMIUM TEMPO TRAVELLER IMAGES',
      vehicle_type: 'traveller',
      list: [
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/hyuiiiw4zccol9jatwhj',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/euf1asoo8ozsxg1prz42',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/dj4jd0rqjjzqvq0is1oh',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/traveller_4',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/jhx7gyldxejlbmq6jtlj',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/s1bx3ed4grfujssv0xt6',
      ],
    },
    {
      id: 'traveller_executive_12',
      vehicle_type: 'traveller',
      title: '12 SEATER EXECUTIVE TEMPO TRAVELLER IMAGES',
      list: [
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/traveller_2',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/euf1asoo8ozsxg1prz42',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/dj4jd0rqjjzqvq0is1oh',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/f8ppiwq0u5wobuwnbfm6',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/jhx7gyldxejlbmq6jtlj',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/s1bx3ed4grfujssv0xt6',
      ],
    },
    {
      id: 'traveller_executive_17',
      vehicle_type: 'traveller',
      title: '17 SEATER EXECUTIVE TEMPO TRAVELLER IMAGES',
      list: [
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/traveller_2',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/euf1asoo8ozsxg1prz42',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/dj4jd0rqjjzqvq0is1oh',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/f8ppiwq0u5wobuwnbfm6',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/jhx7gyldxejlbmq6jtlj',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/s1bx3ed4grfujssv0xt6',
      ],
    },
    {
      id: 'traveller_executive_20',
      vehicle_type: 'traveller',
      title: '20 SEATER EXECUTIVE TEMPO TRAVELLER IMAGES',
      list: [
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/rmup4b6wvkg3rh1iepwu',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/euf1asoo8ozsxg1prz42',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/dj4jd0rqjjzqvq0is1oh',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/f8ppiwq0u5wobuwnbfm6',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/jhx7gyldxejlbmq6jtlj',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/s1bx3ed4grfujssv0xt6',
      ],
    },
    {
      id: 'traveller_executive_26',
      vehicle_type: 'traveller',
      title: '26 SEATER EXECUTIVE TEMPO TRAVELLER IMAGES',
      list: [
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/traveller_2',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/euf1asoo8ozsxg1prz42',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/or9qny9fxtczbepwvo3r',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/f8ppiwq0u5wobuwnbfm6',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/jhx7gyldxejlbmq6jtlj',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/s1bx3ed4grfujssv0xt6',
      ],
    },
  ];
  const result = await db.carouselImages.createMany({ data: data });
  return result;
};

export const addCarouselImagesUrbania = async (formData: FormData) => {
  'use server';
  const data = [
    {
      id: 'urbania_15_premium',
      vehicle_type: 'urbania',
      title: '15 SEATER PREMIUM URBANIA IN KERALA',
      list: [
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/urbania/nff58q9vbs5gd8n5l1nl',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/urbania/zp5vnssxozioffctpqoe',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/urbania/lui6keqwuzn7cabnrkim',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/urbania/dzx6d0qbubi7ewctmktm',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/urbania/bmucesyidjtbpq5okrcb',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/urbania/dzx6d0qbubi7ewctmktm',
      ],
    },
    {
      id: 'urbania_15_luxury',
      title: '15 SEATER LUXURY URBANIA IN KERALA',
      vehicle_type: 'urbania',
      list: [
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/urbania/nff58q9vbs5gd8n5l1nl',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/urbania/zp5vnssxozioffctpqoe',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/urbania/lui6keqwuzn7cabnrkim',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/urbania/dzx6d0qbubi7ewctmktm',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/urbania/bmucesyidjtbpq5okrcb',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/urbania/dzx6d0qbubi7ewctmktm',
      ],
    },
  ];
  const result = await db.carouselImages.createMany({ data: data });
  return result;
};

export const addCarouselImagesBus = async (formData: FormData) => {
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
