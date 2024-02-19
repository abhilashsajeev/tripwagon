import getAllBusTypes from '@/actions/bus';
import {
  AddBusDefaults,
  AddBusDetails,
  AddDefaultValuesForCars,
  AddDefaultValuesForCarsRate,
  AddDefaultValuesForTraveller,
  AddDefaultValuesForTravellerRate,
  AddImagesForCarousel,
  AddUrbaniaDefaults,
  AddUrbaniaDetails,
} from '@/actions/defaultKv';
import getAllTravelerInsideImages, { getRateTableForId } from '@/actions/traveller';
import { Button, Container, Stack } from '@mantine/core';

export default async function Defaultpage() {
  await await AddBusDetails();
  await AddDefaultValuesForTravellerRate();
  await AddDefaultValuesForTraveller();
  await AddDefaultValuesForCars();
  await AddDefaultValuesForCarsRate();
  await AddImagesForCarousel();
  await AddUrbaniaDetails();
  await AddUrbaniaDefaults();

  await AddBusDefaults();

  console.log('bus_types  ', await getAllBusTypes());

  return (
    <Container my="md">
      <Stack>
        <Button variant="filled" color="blue">
          Update Default Traveller
        </Button>
        <Button variant="filled" color="green">
          Update Default Rate
        </Button>
      </Stack>
    </Container>
  );
}
