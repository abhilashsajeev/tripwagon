import { HeroImageBackground } from '../components/hero/HeroComponent';
import { FeaturesGrid } from '@/components/Features/FeaturesGrid';
import WhatsAppFAB from '@/components/FAB/WhatsAppButton';
import { GetInTouch } from '@/components/GetInTouch/GetInTouch';
import { Suspense } from 'react';
import LoadingSkleton from '@/components/LoadingSkleton/LoadingSkleton';
import { StatsGroup } from '@/components/StatusGroup/StatusGroup';

export default function HomePage() {
  return (
    <>
      <HeroImageBackground />
      <WhatsAppFAB />

      <FeaturesGrid />
      <Suspense fallback={<LoadingSkleton />}>
        <GetInTouch />
      </Suspense>
      <StatsGroup />
    </>
  );
}
