import { db } from '@/lib/db';
import { kv } from '@vercel/kv';

export interface Traveller {
  id: string;
  name: string;
  extra_per_km: number;
  description: string;
  pax: number;
  image: string;
}

export interface RateList {
  id: number;
  number_of_days: string;
  vehicle_id?: string;
  max_km: number;
  ac_rate: number;
  bata: number;
}

export default async function getAllTravelerInsideImages(id?: string) {
  'use server';
  const result: any = await db.vehiclesMaster.findMany({
    where: {
      vehicle_type: 'traveller',
    },
  });
  return id ? result?.filter((i: any) => i.id === id) : result;
}

export const getRateTableForId = async (id: string) => {
  const result: RateList[] | null = await kv.get(id);
  return result;
};

export async function getTravelerCarouselImages(id?: string) {
  'use server';
  const result: any = await db.carouselImages.findMany({
    where: {
      AND: {
        vehicle_type: 'traveller',
      },
    },
  });
  return id ? result.filter((i: any) => i.id === id) : result;
}
