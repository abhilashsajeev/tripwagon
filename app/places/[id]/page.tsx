import { PlaceDataType, getPlaceWithId } from '@/actions/places';
import PlaceBanner from '@/components/PlaceDescription/PlaceBanner';

export default async function Page({ params }: any) {
  const { id } = params;
  const result: PlaceDataType | null = await getPlaceWithId(id);

  return (
    <>
      <PlaceBanner result={result} />
    </>
  );
}

export async function generateStaticParams() {
  const posts = ['kochi', 'kovalam', 'munnar', 'vagamon', 'thekkady', 'kanyakumari', 'kollam'];

  return posts.map((post) => ({
    id: post,
  }));
}
