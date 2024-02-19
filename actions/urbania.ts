import { kv } from '@vercel/kv';

export interface Urbania {
  id: string;
  name: string;
  extra_per_km: number;
  description: string;
  pax: number;
  image: string;
}

export interface UrbaniaRate {
  id: number;
  number_of_days: string;
  max_km: number;
  ac_rate: number;
  bata: number;
}

export default async function getAllUrbaniaTypes(id?: string) {
  const result: any = await kv.get('urbania');
  return id ? result?.filter((i: any) => i.id === id) : result;
}

export const getRateTableForId = async (id: string) => {
  const result: UrbaniaRate[] | null = await kv.get(id);
  return result;
};

export const getUrbaniaCarouselImages = async (id?: string) => {
  const result: any = await kv.get('urbania_images');
  return id ? result?.filter((i: any) => i.id === id) : result;
};
