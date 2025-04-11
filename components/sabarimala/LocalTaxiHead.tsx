'use client';
import { Center, Container, Box, Table, Text, Title } from '@mantine/core';
import classes from './Heading.module.css';
import TaxiTable from '../TaxiTable/TaxiTable';
import { PAGE_DATA, PageDataType } from './pageData';
import CallUsNowButtons from '../GetInTouch/CallUsNowButton';
import FaqForTaxi from '../FaqWithImage/FaqForTaxi';

export type TaxiData = {
  title: string;
  subtext: string;
  sedan: number;
  lodgy: number;
  innova: number;
  distance: string;
  time: string;
}

interface TaxiDataTableProps {
  data: TaxiData;
  id: string;

}

function removeKeyAndConvertToArray(obj: PageDataType, keyToRemove: string) {
  const { [keyToRemove]: _, ...remainingObject } = obj; // Exclude the specified key
  return Object.values(remainingObject); // Convert the remaining items to an array
}


export default function LocalTaxi({ data, id }: TaxiDataTableProps) {
  const { title, subtext } = data;

  const dataArray: TaxiData[] = [
    {
      ...data
    }
  ]

  const filtered = removeKeyAndConvertToArray(PAGE_DATA, id);




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
        With over a decade of expertise in    <b> Kerala car rental </b> services Rytham Holidays is the leading service provider of sanitized <b>{title}</b> services 24X7. We can deliver you these vehicles at any time. All our Kochi Airport Taxi cabs partitioned (“cabin separated”) sanitized cars (“fumigated after each trip”) following all safety norms which is mandate at present situation prevailing due to this Covid-19.
        With our dedicated staff ensures to offer reliable, quality and timely taxi services with our wide range of car options right from sedans to MUVs to SUVs. Book any type of car for your <b> {title} </b> service as per your need. You can easily book <b>{subtext}</b> with us by just a call or Whatsapp at the most economical rates.
      </Text>

      <TaxiTable data={dataArray} />
      <Box mt={40}>

      </Box>
      <FaqForTaxi data={data} />
      <Center>
        <Text size="h4">
          All inclusive rates (inclusive of fuel, driver expenses, sanitizing charges & toll charges)
        </Text>
      </Center>
      <Box mt={40}>

      </Box>
      <Center>
        <Title order={2}>Taxi to other destinations from kochi
        </Title>
      </Center>
      <TaxiTable data={filtered} />
      <Center>
        <CallUsNowButtons />
      </Center>
    </Container>
  );
}
