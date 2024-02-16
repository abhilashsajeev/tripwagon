'use client';
import { smoochSans } from '@/app/font';
import { Container, Grid, Stack, Text, Title } from '@mantine/core';
import Image from 'next/image';

interface PlaceBannerProps {
  place: string;
}

export default function PlaceBanner({ place }: PlaceBannerProps) {
  console.log('place banner', place);
  return (
    <Container my="md">
      <Title size="h2" className={smoochSans.className}>
        EXPLORING DESTINATIONS WITH PASSION
      </Title>
      <Text>
        Trip Wagon is the most prominent holiday makers when it comes to transportation with well
        experienced chauffer cum guide. We are dedicated to providing our customers the best holiday
        experiences without compromising in service quality. We have a team of well experienced
        staff to assist and guide you to feel the beauty of nature and enjoy their holidays at God's
        Own Country.
      </Text>
      <br />
      <Grid>
        <Grid.Col span={{ base: 12, md: 4, sm: 3 }}>
          <Image
            src="https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/Kochi/s6gvgzqq9wzsxljpdgfv"
            alt="Fort kochi boat"
            width="280"
            height="200"
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 8, sm: 9 }}>
          <Stack>
            <Title size="h3" className={smoochSans.className}>
              {place.toUpperCase()}
            </Title>
            <Text>
              The Major city in Kerala also known as the Queen of Arabian Sea, Cochin (Kochi) is
              well known over the world from the ancient times as spice trade centre of India and
              was explored by many countries. The foot prints of those countries still exists in
              cochin and the visitors can experience it at the Fort Cochin, Dutch palace, Jewish
              synagogue, Chinese fishing net and the grave of Vasco Da Gama the famous Portuguese
              sailor.
            </Text>
          </Stack>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
