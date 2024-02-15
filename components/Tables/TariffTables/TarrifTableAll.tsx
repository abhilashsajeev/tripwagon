'use client';
import { Table, Progress, Anchor, Text, Group, Button, Container } from '@mantine/core';
import classes from './TarifTable.module.css';

const data = [
  {
    vehicle: 'Swift Dzire/Toyota Etios/Similar',

    pax: 3,
    id: 1,
  },
  {
    vehicle: 'Suzuki Ertiga',
    id: 2,
    pax: 5,
  },
  {
    vehicle: 'Toyota Innova',
    pax: 6,
    id: 3,
  },
  {
    vehicle: 'Toyota Innova Crysta',
    pax: 6,
    id: 4,
  },
  {
    vehicle: 'Ultra Luxury Traveller',
    pax: 10,
    id: 5,
  },
  {
    vehicle: 'Premium Tempo Traveller',
    pax: 10,
    id: 6,
  },
  {
    vehicle: 'Premium Tempo Traveller',
    pax: 12,
    id: 7,
  },
  {
    vehicle: 'Executive Tempo Traveller',
    pax: 12,
    id: 8,
  },
  {
    vehicle: 'Luxury Urbania',
    pax: 15,
    id: 9,
  },
  {
    vehicle: 'Premium Urbania',
    pax: 15,
    id: 10,
  },
  {
    vehicle: 'Premium Tempo Traveller',
    pax: 17,
    id: 11,
  },
  {
    vehicle: 'Executive Tempo Traveller',
    pax: 17,
    id: 12,
  },
  {
    vehicle: 'Premium Tempo Traveller AC',
    pax: 20,
    id: 13,
  },
  {
    vehicle: 'Executive Tempo Traveller AC',
    pax: 20,
    id: 14,
  },
  {
    vehicle: 'Premium Tempo Traveller AC',
    pax: 26,
    id: 16,
  },
  {
    vehicle: 'Executive Tempo Traveller AC',
    pax: 26,
    id: 17,
  },
  {
    vehicle: 'Benz Mini Coach AC',
    pax: 26,
    id: 18,
  },
  {
    vehicle: 'Executive Mini Coach AC',
    pax: 35,
    id: 19,
  },
  {
    vehicle: 'Luxury Benz Glider AC',
    pax: 45,
    id: 20,
  },
  {
    vehicle: 'Luxury Benz Multi Glider AC',
    pax: 53,
    id: 21,
  },
];

export function TariffTable() {
  const rows = data.map((row) => {
    return (
      <Table.Tr key={row.vehicle}>
        <Table.Td>{row.vehicle}</Table.Td>
        <Table.Td>{row.pax}</Table.Td>
        <Table.Td>
          <Button variant="filled" color="violet">
            Select
          </Button>
        </Table.Td>
      </Table.Tr>
    );
  });

  return (
    <Container my="md">
      <Table verticalSpacing="xs" withColumnBorders striped highlightOnHover withTableBorder>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Vehicle</Table.Th>
            <Table.Th>Pax</Table.Th>
            <Table.Th>Rates</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Container>
  );
}
