import { db } from '@/lib/db';
import { kv } from '@vercel/kv';

export interface bus_35_benz {
  id: string;
  name: string;
  extra_per_km: number;
  description: string;
  pax: number;
  image: string;
}

export interface BusRate {
  id: number;
  number_of_days: string;
  max_km: number;
  ac_rate: number;
  bata: number;
}

export default async function getAllBusTypes(id?: string) {
  const result: any = await kv.get('bus_types');
  return id ? result?.filter((i: any) => i.id === id) : result;
}

export const getRateTableForId = async (id: string) => {
  const result: BusRate[] | null = await kv.get(id);
  return result;
};

export const getBusCarouselImages = async (id?: string) => {
  'use server';
  const result: any = await db.carouselImages.findMany({
    where: {
      AND: {
        vehicle_type: 'bus',
      },
    },
  });
  console.log('type aget bus carousel', result);
  return id ? result.filter((i: any) => i.id === id) : result;
};

export const getReviews = async () => {
  const result: any = await kv.get('reviews');
  return result;
};
