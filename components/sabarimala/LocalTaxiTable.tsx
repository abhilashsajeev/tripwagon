"use client";
import { BackgroundImage, Box, Center, Table, Text } from "@mantine/core";
import Link from "next/link";

const ELEMENTS: any = [[
    {
        keyval: 'kochi-airport-to-alleppy-taxi',
        displayname: 'Cochin Airport to Alleppey Taxi',
        link: '/kochi-airport-to-alleppy-taxi'
    },
    {
        keyval: 'kochi-airport-to-idukki-taxi',
        displayname: 'Cochin Airport to Idukky Taxi',
        link: '/kochi-airport-to-idukki-taxi'
    },
    {
        keyval: 'kochi-airport-to-kasargod-taxi',
        displayname: 'Cochin Airport to Kasargod Taxi',
        link: '/kochi-airport-to-kasargod-taxi'
    },
    {
        keyval: 'kochi-airport-to-kollam-taxi',
        displayname: 'Cochin Airport to Kollam Taxi',
        link: '/kochi-airport-to-kollam-taxi'
    },

], [
    {
        keyval: 'kochi-airport-to-calicut-taxi',
        displayname: 'Cochin Airport to Calicut Taxi',
        link: '/kochi-airport-to-calicut-taxi'
    },
    {
        keyval: 'kochi-airport-to-malappuram-taxi',
        displayname: 'Cochin Airport to Malappuram Taxi',
        link: '/kochi-airport-to-malappuram-taxi'
    },
    {
        keyval: 'kochi-airport-to-munnar-taxi',
        displayname: 'Cochin Airport to Munnar Taxi',
        link: '/kochi-airport-to-munnar-taxi'
    },
    {
        keyval: 'kochi-airport-to-palakkad-taxi',
        displayname: 'Cochin Airport to Palakkad Taxi',
        link: '/kochi-airport-to-palakkad-taxi'
    },
], [
    {
        keyval: 'kochi-airport-to-pathanamthitta-taxi',
        displayname: 'Cochin Airport to Pathanamthitta Taxi',
        link: '/kochi-airport-to-pathanamthitta-taxi'
    },
    {
        keyval: 'kochi-airport-to-ranni-taxi',
        displayname: 'Cochin Airport to Ranni Taxi',
        link: '/kochi-airport-to-ranni-taxi'
    },
    {
        keyval: 'kochi-airport-to-trivandrum-taxi',
        displayname: 'Cochin Airport to Trivandrum Taxi',
        link: '/kochi-airport-to-trivandrum-taxi'
    },
    {
        keyval: 'kochi-airport-to-waynad-taxi',
        displayname: 'Cochin Airport to Waynad Taxi',
        link: '/kochi-airport-to-waynad-taxi'
    },
]]

export default function LocalTaxiTable() {
    const rows = ELEMENTS.map((element: any[], index: number) => (
        <Table.Tr key={index}>
            {element.map((item: any) => (
                <Table.Td>
                    <Link href={`/local${item.link}`}>
                    <Text c="white"> {item.displayname} </Text>
                    </Link>
                </Table.Td>
            ))
            }


        </Table.Tr>
    ));
    return (<>
        <Box mx="auto">
            <BackgroundImage
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-6.png"
                radius="sm"
            >
                <Center>
                    <Text c="white" size="lg">Outstation Cochin Airport Taxi</Text>
                </Center>
                <Table>
                    <Table.Tbody>
                        {rows}
                    </Table.Tbody>
                </Table>
            </BackgroundImage>
        </Box>
    </>)
}