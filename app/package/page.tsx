import { getAllCars, getCarCarouselImages } from '@/actions/cars';
import { Traveller } from '@/actions/traveller';
import ServerCarousel from '@/components/Carousel/ServerCarousel';
import CallUsNowButtons from '@/components/GetInTouch/CallUsNowButton';
import RateTableCar from '@/components/RateTable/RateTableCar';

import Image from 'next/image';

export const metadata = {
  title: 'Kerala Taxi Packages  | Rytham | Kerala Traveller Packages',
  description: 'List of available Bus service packages with Rytham',
  twitter: {
    card: 'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Logo/kpg21czdrjbzclztwj5r',
    url: 'https://rytham.in/package',
    title: 'Rytham | Kerala Taxi Packages',
    description: 'List of available traveller service packages with Rytham',
  },
  openGraph: {
    title: 'Kerala Taxi Packages | Rytham | Kerala Traveller Packages',
    description: 'List of available Bus service packages with Rytham',
    url: 'https://rytham.in/package',
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

export default async function Pricing() {
  const results = await getAllCars();
  const imagesList = await getCarCarouselImages();
  const isImagesExistForId = (id: string) => {
    return imagesList.filter((i: any) => i.id === id)[0]?.list?.length > 0;
  };
  const components = results?.map((item: Traveller) => (
    <div key={item.id} id={item.id}>
      {isImagesExistForId(item.id) && (
        <ServerCarousel
          title={item.description}
          data={imagesList.filter((i: any) => i.id === item.id)[0]?.list}
        />
      )}
      <RateTableCar
        key={item.id}
        id={item.id}
        extra_km={item.extra_per_km}
        description={item.description}
      />
      <CallUsNowButtons />
    </div>
  ));
  return <>{components}</>;
}
