import getAllTravelerInsideImages, { RateList, Traveller } from '@/actions/traveller';
import CallUsNowButtons from '@/components/GetInTouch/CallUsNowButton';
import RateTableComponent from '@/components/RateTable/RateTable';

export default async function Pricing() {
  const results = await getAllTravelerInsideImages();
  const components = results?.map((item: Traveller) => (
    <div key={item.id}>
      <RateTableComponent
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
