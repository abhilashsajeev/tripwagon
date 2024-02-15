'use client';

import {
  AddDefaultValuesForTraveller,
  AddDefaultValuesForTravellerRate,
} from '@/actions/defaultKv';
import { Button, Container, Stack } from '@mantine/core';

export default function Defaultpage() {
  const updateRate = async () => {
    await AddDefaultValuesForTravellerRate();
  };

  const updateMain = async () => {
    await AddDefaultValuesForTraveller();
  };
  return (
    <Container my="md">
      <Stack>
        <Button variant="filled" color="blue" onClick={updateMain}>
          Update Default Traveller
        </Button>
        <Button variant="filled" color="green" onClick={updateRate}>
          Update Default Rate
        </Button>
      </Stack>
    </Container>
  );
}
