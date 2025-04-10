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

], [

    {
        keyval: 'kochi-airport-to-kannur-taxi',
        displayname: 'Cochin Airport to Kannur Taxi',
        link: '/kochi-airport-to-kannur-taxi'
    },
    {
        keyval: 'kochi-airport-to-kannur-taxi',
        displayname: 'Cochin Airport to Kannur Taxi',
        link: '/kochi-airport-to-kannur-taxi'
    },
    {
        keyval: 'kochi-airport-to-kannur-taxi',
        displayname: 'Cochin Airport to Kannur Taxi',
        link: '/kochi-airport-to-kannur-taxi'
    },
], [
    {
        keyval: 'kochi-airport-to-kannur-taxi',
        displayname: 'Cochin Airport to Kannur Taxi',
        link: '/kochi-airport-to-kannur-taxi'
    },
    {
        keyval: 'kochi-airport-to-kannur-taxi',
        displayname: 'Cochin Airport to Kannur Taxi',
        link: '/kochi-airport-to-kannur-taxi'
    },
    {
        keyval: 'kochi-airport-to-kannur-taxi',
        displayname: 'Cochin Airport to Kannur Taxi',
        link: '/kochi-airport-to-kannur-taxi'
    },
], [
    {
        keyval: 'kochi-airport-to-kannur-taxi',
        displayname: 'Cochin Airport to Kannur Taxi',
        link: '/kochi-airport-to-kannur-taxi'
    },
    {
        keyval: 'kochi-airport-to-kannur-taxi',
        displayname: 'Cochin Airport to Kannur Taxi',
        link: '/kochi-airport-to-kannur-taxi'
    },
    {
        keyval: 'kochi-airport-to-kannur-taxi',
        displayname: 'Cochin Airport to Kannur Taxi',
        link: '/kochi-airport-to-kannur-taxi'
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