'use client';
import { Button, Center, Grid, Paper, Text, Title } from '@mantine/core';
import classes from './PlacesGrid.module.css';
import Link from 'next/link';

interface CardProps {
  image: string;
  title: string;
  category: string;
  link: string;
}

const data = [
  {
    id: 'kochi',
    place: 'Kochi',
    image:
      'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/places/ae4mtinb0cacwj3f8uya',
    category: 'Beach',
  },
  {
    id: 'munnar',
    place: 'Munnar',
    image:
      'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/places/obwycfunza05h5pfljpf',
    category: 'HillStation',
  },
  {
    id: 'alappuzha',
    place: 'Alappuzha',
    image:
      'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/places/pix2jbufjgqetgdwqchj',
    category: 'Backwaters',
  },
  {
    id: 'trivandrum',
    place: 'Trivandrum',
    image:
      'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/places/qtusszcmgwzzlgc2u82d',
    category: 'Cultural',
  },
  {
    id: 'kovalam',
    place: 'Kovalam',
    image:
      'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/places/a3bap2ylviuxeol9mgs8',
    category: 'Beach',
  },
  {
    id: 'vagamon',
    place: 'Vagamon',
    image:
      'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/places/nuoolmdwoip1kexfh5kg',
    category: 'Hill Station',
  },
  {
    id: 'kanyakumari',
    place: 'Kanyakumari',
    image:
      'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/places/fnwf5jrgpkygxpnzlwss',
    category: 'Beach / Sunrise',
  },
  {
    id: 'kollam',
    place: 'Thenmala',
    image:
      'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/places/k2qmsteciyxvwawb6qbs',
    category: 'Cultural',
  },
];

function Card({ image, title, category, link }: CardProps) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button variant="white" color="dark" component={Link} href={`/places/${link}`}>
        View More
      </Button>
    </Paper>
  );
}

export default function PlacesGrid() {
  return (
    <Grid>
      <Grid.Col span={12}>
        <Center>
          <Title size="h2">Places to Visit</Title>
        </Center>
      </Grid.Col>
      {data.map((item) => (
        <Grid.Col key={item.id} span={{ base: 12, md: 6, lg: 3 }}>
          <Card image={item.image} title={item.place} category={item.category} link={item.id} />
        </Grid.Col>
      ))}
    </Grid>
  );
}
