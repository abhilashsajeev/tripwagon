import { Divider, Group } from '@mantine/core';
import Link from 'next/link';

export default function ListLinks() {
  return (
    <Group>
      <Link href="#">Home</Link>
      <Divider orientation="vertical" />
      <Link href="#">Kerala Taxi Services</Link>
      <Divider orientation="vertical" />
      <Link href="#">Kochi Taxi Services</Link>
      <Divider orientation="vertical" />
      <Link href="#">Kerala Tempo Traveller</Link>
      <Divider orientation="vertical" />
      <Link href="#">Urbania Rentals</Link>
      <Divider orientation="vertical" />
      <Link href="#">Kochi Airport Taxi</Link>
      <Divider orientation="vertical" />
      <Link href="#">Alleppy House boats</Link>
      <Divider orientation="vertical" />
      <Link href="#">Kerala Bus Rentals</Link>
      <Divider orientation="vertical" />
      <Link href="#">Sabarimala</Link>
      <Divider orientation="vertical" />
      <Link href="#">Taxi Services</Link>
      <Divider orientation="vertical" />
      <Link href="#">Testimonials</Link>
      <Divider orientation="vertical" />
      <Link href="/gallery">Gallery</Link>
      <Divider orientation="vertical" />
      <Link href="#">Link to Us</Link>
      <Divider orientation="vertical" />
      <Link href="/terms">Terms and Conditions</Link>
      <Divider orientation="vertical" />
      <Link href="#">Usefull links</Link>
      <Divider orientation="vertical" />
      <Link href="#">Other links</Link>
      <Divider orientation="vertical" />
      <Link href="#">Latest news</Link>
      <Divider orientation="vertical" />
      <Link href="#">Contact Us</Link>
      <Divider orientation="vertical" />
    </Group>
  );
}
