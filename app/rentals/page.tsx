import TaxiCarousel from '@/components/Carousel/TaxiCarousel';
import FaqWithBg from '@/components/FaqWithImage/FaqWithBg';
import KeralaTaxiHead from '@/components/Headings/KeralaTaxiHeader';
import LeadingTaxiHead from '@/components/Headings/LeadingTaxiHead';
import ItenaryTable from '@/components/Tables/TariffTables/ItinaryTable';
import { TariffTable } from '@/components/Tables/TariffTables/TarrifTableAll';

export default function Pricing() {
  return (
    <>
      <KeralaTaxiHead />
      <TaxiCarousel />
      <LeadingTaxiHead />
      <TariffTable />
      <ItenaryTable />
      <FaqWithBg />
    </>
  );
}
