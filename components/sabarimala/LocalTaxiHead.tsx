'use client';
import { Center, Container, List, Table, Text, Title } from '@mantine/core';
import classes from './Heading.module.css';

export default function LocalTaxi({title}:any) {
  return (
    <Container my="md">
      <Center>
        <Title size="h2">
         {title}
        </Title>
      </Center>
      <Center>
        <span className={classes.borderOrange}></span>
      </Center>
      <Text>
      With over a decade of expertise in Kerala car rental services TripWagon Holidays is the leading service provider of sanitized Cochin airport to Calicut taxi services 24X7. We can deliver you these vehicles at any time. All our Kochi Airport Taxi cabs partitioned (“cabin separated”) sanitized cars (“fumigated after each trip”) following all safety norms which is mandate at present situation prevailing due to this Covid-19.
      With our dedicated staff ensures to offer reliable, quality and timely taxi services with our wide range of car options right from sedans to MUVs to SUVs. Book any type of car for your Kochi to Calicut taxi service as per your need. You can easily book Kochi to Calicut cabs with us by just a call or Whatsapp at the most economical rates.
      </Text>
      
    </Container>
  );
}
