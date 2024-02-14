import { HeaderTabs } from '@/components/HeaderTabs/HeaderTabs';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { HeroImageBackground } from '../components/hero/HeroComponent';
import { FooterLinks } from '@/components/FooterLinks/FooterLinks';
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
      <FooterLinks />
    </>
  );
}
