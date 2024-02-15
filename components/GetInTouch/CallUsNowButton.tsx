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
            href="tel:+919539295705"
            target="_blank"
          >
            CALL US +919539295705
          </Button>
          <Button
            component={Link}
            variant="filled"
            color="green"
            href="tel:+917593921784"
            target="_blank"
          >
            CALL US +917593921784
          </Button>
        </Group>
      </Center>
    </Container>
  );
}
