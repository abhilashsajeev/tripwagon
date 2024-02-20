import { HeroImageBackground } from '../components/hero/HeroComponent';
import { FeaturesGrid } from '@/components/Features/FeaturesGrid';
import WhatsAppFAB from '@/components/FAB/WhatsAppButton';
import { GetInTouch } from '@/components/GetInTouch/GetInTouch';
import { Suspense } from 'react';
import LoadingSkleton from '@/components/LoadingSkleton/LoadingSkleton';
import { StatsGroup } from '@/components/StatusGroup/StatusGroup';
import { getReviews } from '@/actions/bus';
import TestimonialCarousel from '@/components/Carousel/Testimonial';

export default async function HomePage() {
  const reviews = await getReviews();
  console.log('reviews ', reviews);
  return (
    <>
      <HeroImageBackground />
      <WhatsAppFAB />

      <FeaturesGrid />
      <TestimonialCarousel data={reviews} title="Testimonials" />
      <Suspense fallback={<LoadingSkleton />}>
        <GetInTouch />
      </Suspense>
      <StatsGroup />
    </>
  );
}
