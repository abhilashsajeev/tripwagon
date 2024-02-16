import getAllCars from '@/actions/cars';
import { Traveller } from '@/actions/traveller';
import CallUsNowButtons from '@/components/GetInTouch/CallUsNowButton';
import RateTableCar from '@/components/RateTable/RateTableCar';

export default async function Pricing() {
  const results = await getAllCars();
  const components = results?.map((item: Traveller) => (
    <div key={item.id} id={item.id}>
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
