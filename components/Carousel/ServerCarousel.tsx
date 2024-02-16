'use client';
import { Image, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Carousel } from '@mantine/carousel';
import classes from './TaxiCarousel.module.css';

export default function ServerCarousel({ data }: any) {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item: string) => (
    <Carousel.Slide key={item} className={classes.imageContainer}>
      <Image height={250} src={item} alt={'Image of traveller'} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize={{ base: '100%', sm: '50%', md: '18%' }}
      withIndicators
      height={250}
      loop
      align="start"
    >
      {slides}
    </Carousel>
  );
}
