import getAllBusTypes, { getBusCarouselImages } from '@/actions/bus';
import { Urbania } from '@/actions/urbania';
import ServerCarousel from '@/components/Carousel/ServerCarousel';
import CallUsNowButtons from '@/components/GetInTouch/CallUsNowButton';
import RateTableComponent from '@/components/RateTable/RateTable';

import BusHead from '@/components/bus/BusHead';

export const metadata = {
  title: 'Kerala Bus Rentals | Rytham | Kerala Traveller Packages',
  description: 'List of available Bus service packages with Rytham',
  twitter: {
    card: 'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Logo/kpg21czdrjbzclztwj5r',
    url: 'https://rytham.in/bus',
    title: 'Rytham | Kerala Traveller Packages',
    description: 'List of available traveller service packages with Rytham',
  },
  openGraph: {
    title: 'Kerala Bus Rentals | Rytham | Kerala Traveller Packages',
    description: 'List of available Bus service packages with Rytham',
    url: 'https://rytham.in/bus',
    siteName: 'Rytham Taxi Service',
    images: [
      {
        url: 'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Logo/kpg21czdrjbzclztwj5r', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Logo/kpg21czdrjbzclztwj5r', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'Kerala Bus Rentals by Cochin Dream Destinations',
      },
    ],
    videos: [
      {
        url: 'https://nextjs.org/video.mp4', // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    audio: [
      {
        url: 'https://nextjs.org/audio.mp3', // Must be an absolute URL
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default async function BusPage() {
  const results = await getAllBusTypes();
  const imagesList = await getBusCarouselImages();
  const components = results?.map((item: Urbania) => (
    <div key={item.id} id={item.id}>
      <ServerCarousel
        title={item.description}
        data={imagesList.filter((i: any) => i.id === item.id)[0]?.list}
      />
      <RateTableComponent
        key={item.id}
        id={item.id}
        extra_km={item.extra_per_km}
        description={item.description}
      />
      <CallUsNowButtons />
    </div>
  ));
  return (
    <>
      <BusHead />
      {components}
    </>
  );
}
