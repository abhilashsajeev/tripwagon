import { kv } from '@vercel/kv';
import { RateList } from './traveller';

/**
 * Gets all cars avaiable
 * @param id
 * @returns
 */
export default async function getAllCars(id?: string) {
  const result: any = await kv.get('cars');
  return id ? result?.filter((i: any) => i.id === id) : result;
}

/**
 * Gets rate table for car Id
 * @param id
 * @returns
 */
export const getRateTableForId = async (id: string) => {
  const result: RateList[] | null = await kv.get(id);
  return result;
};
