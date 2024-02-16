import PlaceBanner from '@/components/PlaceDescription/PlaceBanner';

export default function Page({ params }: any) {
  const { id } = params;

  return (
    <>
      <PlaceBanner place={id} />
    </>
  );
}

export async function generateStaticParams() {
  const posts = ['kochi', 'trivandrum', 'munnar'];

  return posts.map((post) => ({
    id: post,
  }));
}
