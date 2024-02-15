import { kv } from '@vercel/kv';

export default async function getAllTravelerInsideImages() {
  const result = await kv.get('traveller_inside');
  return result;
}
