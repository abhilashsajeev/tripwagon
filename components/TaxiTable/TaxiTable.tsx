import React from 'react';
import { Table } from '@mantine/core';

const TaxiTable = () => {
  const data = [
    { service: "Cochin Airport to Alleppey Taxi", sedan: 2300, lodgy: 2700, innova: 3000 },
    { service: "Cochin Airport to Ambalapuzha Taxi", sedan: 2700, lodgy: 3100, innova: 3500 },
    { service: "Cochin Airport to Changanassery Taxi", sedan: 2900, lodgy: 3300, innova: 3800 },
    { service: "Cochin Airport to Chengannur Taxi", sedan: 3500, lodgy: 4200, innova: 4200 },
    { service: "Cochin Airport to Chennithala Taxi", sedan: 3300, lodgy: 3800, innova: 4400 },
    { service: "Cochin Airport to Chavara Taxi", sedan: 4100, lodgy: 4800, innova: 5400 },
    { service: "Cochin Airport to Cherthala Taxi", sedan: 1800, lodgy: 2100, innova: 2300 },
    // Add more rows as needed...
  ];

  return (
    <Table highlightOnHover>
      <thead>
        <tr>
          <th>Services</th>
          <th>Sedan</th>
          <th>Lodgy</th>
          <th>Innova</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.service}</td>
            <td>{row.sedan}</td>
            <td>{row.lodgy}</td>
            <td>{row.innova}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TaxiTable;
