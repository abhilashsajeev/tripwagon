import { Container,  Text, Title, Box, Group, Paper } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';





const Guide = () => {
  return (
    <section id="guide">
     
      <Container size="xl" className="mt-[-60px]">
        <Box className="padding-container" pb={24}>
          <Image src="/logo.webp" alt="Camp" width={50} height={50} />
          <Text
            style={{ textTransform: 'uppercase' }}
            size="lg"
            fw={500}
            c="#1f32c4"
            mt={-1}
            mb={3}
          >
            We are here for you
          </Text>
          <Group  gap="xl">
            <Title
              order={2}
              size={40}
              style={{ fontWeight: 700, lineHeight: '120%' }}
            >
              Welcome to Rytham Holidays™
            </Title>
            <Text size="md" c="gray">
            Rytham Holidays™ is the largest most reputable service provider of <Link href={"/packages"}> Kerala taxi packages/services </Link>,<Link href={"/rentals"}> Kerala car rentals</Link>,<Link href={"/traveller"}> Kerala Tempo Traveller</Link>.

All our vehicles are completely sanitized as per government protocols providing at most safety during this period of pandemic

Rytham Holidays™ laid new foundations in the field of <Link href={"/taxi"}> Kerala taxi services </Link>(Kochi Taxi) by providing unparalleled service to our clients in exploring Kerala - "God's own country" with our owned fleet of vehicles ranging from small cabs to big luxury coaches with total strength of more than 150 in numbers. Our drivers are specially trained in tourism with good knowledge about Kerala geography and good communication skills to offer safe travel across Kerala along with our dedicated staff working 24 hours to create most cherishing memorable memories for our clients without any failure.
            </Text>
          </Group>
        </Box>

        
      </Container>
     
    </section>
  );
};

export default Guide;
