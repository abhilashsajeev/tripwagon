'use client';
import { rem, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Carousel } from '@mantine/carousel';
import Image from 'next/image';

const data = [
  {
    image: 'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/crysta_6',
    title: 'Best forests to visit in Munnar',
    category: 'nature',
  },
  {
    image: 'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/inside_2',
    title: 'Clean and Modern: better than you think',
    category: 'interior',
  },
  {
    image: 'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/hotel_1',
    title: 'Mountains at night: 12 best locations to enjoy the view',
    category: 'nature',
  },
  {
    image: 'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/traveller_6',
    title: 'Most modern travellers',
    category: 'traveller',
  },
  {
    image:
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Best places to visit this winter',
    category: 'tourism',
  },
  {
    image: 'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/innova_1',
    title: 'Active volcanos reviews: travel at your own risk',
    category: 'nature',
  },
  {
    image: 'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/crysta_2',
    title: 'Crysta clean and natural',
    category: 'nature',
  },
  {
    image: 'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/group_1',
    title: 'Active volcanos reviews: travel at your own risk',
    category: 'nature',
  },
];

export default function TaxiCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Image height={200} width={200} src={item.image} alt={item.title} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize={{ base: '100%', sm: '50%', md: '16%' }}
      withIndicators
      height={200}
      slideGap={{ base: 0 }}
      loop
      align="start"
    >
      {slides}
    </Carousel>
  );
}
