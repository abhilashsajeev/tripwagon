import { db } from '@/lib/db';

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
