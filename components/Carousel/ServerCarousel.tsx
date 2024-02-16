'use client';
import { Center, Image, Text, Title, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Carousel } from '@mantine/carousel';
import classes from './TaxiCarousel.module.css';
import { quicksand } from '@/app/font';

export default function ServerCarousel({ data, title }: any) {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item: string) => (
    <Carousel.Slide key={item} className={classes.imageContainer}>
      <Image height={250} src={item} alt={'Image of traveller'} />
    </Carousel.Slide>
  ));

  return (
    <>
      <Center>
        <Text className={quicksand.className}>{title}</Text>
      </Center>
      <Carousel
        slideSize={{ base: '100%', sm: '50%', md: '18%' }}
        withIndicators
        height={250}
        loop
        align="start"
      >
        {slides}
      </Carousel>
    </>
  );
}
