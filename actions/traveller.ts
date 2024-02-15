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
  max_km: number;
  ac_rate: number;
  bata: number;
}

export default async function getAllTravelerInsideImages(id?: string) {
  const result: any = await kv.get('traveller');
  return id ? result?.filter((i: any) => i.id === id) : result;
}

export const getRateTableForId = async (id: string) => {
  const result: RateList[] | null = await kv.get(id);
  return result;
};
