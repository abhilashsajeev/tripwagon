import { getAllPlaces } from '@/actions/places';
import TaxiCarousel from '@/components/Carousel/TaxiCarousel';
import FaqWithBg from '@/components/FaqWithImage/FaqWithBg';
import KeralaTaxiHead from '@/components/Headings/KeralaTaxiHeader';
import LeadingTaxiHead from '@/components/Headings/LeadingTaxiHead';
import PlacesGrid from '@/components/Places/PlacesGrid';
import ItenaryTable from '@/components/Tables/TariffTables/ItinaryTable';
import { TariffTable } from '@/components/Tables/TariffTables/TarrifTableAll';

export const metadata = {
  title: 'Kerala Taxi Rentals  | Rytham | Kerala Traveller Packages',
  description: 'List of available Bus service packages with Rytham',
  twitter: {
    card: 'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Logo/kpg21czdrjbzclztwj5r',
    url: 'https://rytham.in/rentals',
    title: 'Rytham | Kerala Taxi Rentals',
    description: 'List of available traveller service packages with Rytham',
  },
  openGraph: {
    title: 'Kerala Taxi Rentals | Rytham | Kerala Traveller Packages',
    description: 'List of available Bus service packages with Rytham',
    url: 'https://rytham.in/rentals',
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
  const result = await getAllPlaces();
  return (
    <>
      <KeralaTaxiHead />
      <TaxiCarousel />
      <LeadingTaxiHead />
      <TariffTable />
      <ItenaryTable />
      <PlacesGrid data={result} />
      <FaqWithBg />
    </>
  );
}
