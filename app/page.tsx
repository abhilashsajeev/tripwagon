import { HeroImageBackground } from '../components/hero/HeroComponent';
import { FeaturesGrid } from '@/components/Features/FeaturesGrid';
import WhatsAppFAB from '@/components/FAB/WhatsAppButton';
import { GetInTouch } from '@/components/GetInTouch/GetInTouch';
import { Suspense } from 'react';
import LoadingSkleton from '@/components/LoadingSkleton/LoadingSkleton';
import { StatsGroup } from '@/components/StatusGroup/StatusGroup';
import { getReviews } from '@/actions/bus';
import TestimonialCarousel from '@/components/Carousel/Testimonial';
import { TaxiPackagesCarousel } from '@/components/Carousel/TaxiPackagesCarousel';
import ServerCarousel from '@/components/Carousel/ServerCarousel';
import { DefaultReviews } from '@/actions/defaultKv';

const taxiData = [
  {
    id: 1,
    name: 'KOCHI AIRPORT TAXI',
    image:
      'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Stylsed/yznwtp50tjtjlyeiejgi',
    link: '/taxi',
  },
  {
    id: 2,
    name: 'SABARIMALA TAXI PACKAGES',
    image: 'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/crysta_4',
    link: '/sabarimala',
  },
  {
    id: 3,
    name: 'KERALA TAXI PACAKGES',
    image:
      'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Innova/mzfpypbsgml2ysv64hxl',
    link: '/package',
  },
  {
    id: 3,
    name: 'KERALA TEMPO TRAVELLER',
    image:
      'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/prlrpohyx89eiun8h11d',
    link: '/traveller',
  },
  {
    id: 4,
    name: 'KERALA URBANIA RENTALS',
    link: '/urbania',
    image:
      'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/urbania/zp5vnssxozioffctpqoe',
  },
];


export const metadata = {
  title: 'Kerala Taxi - Kerala Taxi Packages - Kochi Taxi| Cochin Dream Destinations ',
  description: 'Kerala Taxi - Kerala Taxi Packages - Kochi Taxi Cochin dream destinations',
  twitter: {
    card: 'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Logo/kpg21czdrjbzclztwj5r',
    url: 'https://cochindreamdestinations.in',
    title: 'Kerala Taxi - Kerala Taxi Packages - Kochi Taxi | Cochin Dream Destinations | Kerala Taxi Cab Services | Other Links',
    description: 'Kerala Taxi - Kerala Taxi Packages - Kochi Taxi taxi service packages with Cochin dream destinations',
  },
  openGraph: {
    title: 'Kerala Taxi - Kerala Taxi Packages - Kochi Taxi | Cochin Dream Destinations | Kerala Taxi Cab Services',
    description: 'List of available taxi service packages with Cochin dream destinations',
    url: 'https://cochindreamdestinations.in',
    siteName: 'Cochin Dream Destinations Taxi Service',
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
        alt: 'My custom alt',
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



export default async function HomePage() {
  
  
  return (
    <>
      <HeroImageBackground />
      <WhatsAppFAB />

      <FeaturesGrid />
      <TaxiPackagesCarousel data={taxiData} />
      

      <GetInTouch />

      <ServerCarousel
        title="Happy Customers"
        data={[
          'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/enqyhgentwj1etwxehcn',
          'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/customers/nyn0vpxuc6hbp1lxkddz',
          'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/customers/bzjitcbhc2krzbkvvvld',
          'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/customers/k5n0ptylg7meebzfenpq',
          'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/customers/lewkwqqfsw9pdkju8bnb',
        ]}
      />
    </>
  );
}
