'use client';

import { Button, Center, Container, Group } from '@mantine/core';
import Link from 'next/link';

export default function CallUsNowButtons() {
  return (
    <Container my="md">
      <Center>
        <Group>
          <Button
            component={Link}
            variant="filled"
            color="green"
            href="tel:+917907180670"
            target="_blank"
          >
            CALL US +917907180670
          </Button>
          <Button
            component={Link}
            variant="filled"
            color="green"
            href="tel:+917907180670"
            target="_blank"
          >
            CALL US +917907180670
          </Button>
        </Group>
      </Center>
    </Container>
  );
}
