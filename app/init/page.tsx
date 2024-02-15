import {
  AddDefaultValuesForTraveller,
  AddDefaultValuesForTravellerRate,
} from '@/actions/defaultKv';
import getAllTravelerInsideImages, { getRateTableForId } from '@/actions/traveller';
import { Button, Container, Stack } from '@mantine/core';

export default async function Defaultpage() {
  await AddDefaultValuesForTravellerRate();
  await AddDefaultValuesForTraveller();

  console.log('tragvasdflerer ', await getAllTravelerInsideImages());
  console.log('traveller_premium_17', await getRateTableForId('traveller_premium_17'));
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
