import React from 'react';
import { Table } from '@mantine/core';
import { TaxiData } from '../sabarimala/LocalTaxiHead';


interface TaxiTableProps {
  data: TaxiData[];
}

const TaxiTable = ({data}:TaxiTableProps) => {
 

  return (
    <Table striped withTableBorder>
       <Table.Thead>
        <Table.Tr>
          <Table.Th>Services</Table.Th>
          <Table.Th>Sedan</Table.Th>
          <Table.Th>Lodgy</Table.Th>
          <Table.Th>Innova</Table.Th>
        </Table.Tr>
        </Table.Thead>
      <Table.Tbody>
        {data?.map((row:TaxiData, index) => (
          <Table.Tr key={index}>
            <Table.Td>{row.title}</Table.Td>
            <Table.Td>{row.sedan}</Table.Td>
            <Table.Td>{row.lodgy}</Table.Td>
            <Table.Td>{row.innova}</Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
};

export default TaxiTable;
