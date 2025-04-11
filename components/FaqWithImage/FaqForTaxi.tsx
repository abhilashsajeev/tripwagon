'use client';
import { Title, Container, Accordion, ThemeIcon, rem } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import classes from './FaqWithBg.module.css';

const placeholder =
    'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.';

export default function FaqForTaxi({ data }: any) {
    return (
        <div className={classes.wrapper}>
            <Container size="sm">
                <Title ta="center" className={classes.title}>
                    Frequently Asked Questions
                </Title>

                <Accordion
                    chevronPosition="right"
                    defaultValue="reset-password"
                    chevronSize={26}
                    variant="separated"
                    disableChevronRotation
                    styles={{ label: { color: 'var(--mantine-color-black)' }, item: { border: 0 } }}
                    chevron={
                        <ThemeIcon radius="xl" className={classes.gradient} size={26}>
                            <IconPlus style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                        </ThemeIcon>
                    }
                >
                    <Accordion.Item className={classes.item} value="reset-password">
                        <Accordion.Control>
                       
                            <b>What is the distance from {data?.title.replace("Taxi", "").trim()}</b>
                        </Accordion.Control>
                        <Accordion.Panel>
                            Distance from {data?.title.replace("Taxi", "").trim()} is {data.distance} by road. Travel time is about {data.time} approximately.
                        </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item className={classes.item} value="another-account">
                        <Accordion.Control>
                            <b>Is taxi available from {data?.title.replace("Taxi", "").trim()}</b>
                        </Accordion.Control>
                        <Accordion.Panel>
                            Yes, Our Kochi Aiport Taxi department is providing {data.title} services even during these difficult times caused due to pandemic
                        </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item className={classes.item} value="newsletter">
                        <Accordion.Control>
                            <b>Is Cochin Airport taxi safe and reliable for women?</b>
                        </Accordion.Control>
                        <Accordion.Panel>
                            Yes Absolutely. Our Cabs are equipped with GPS and Panic Buttons to ensure maximum safety for our passengers especially female travelers. Drivers are appointment as per all legal documentations instructed by the government.
                        </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item className={classes.item} value="credit-card">
                        <Accordion.Control>
                            <b>What are safety measures for covid-19?</b>
                        </Accordion.Control>
                        <Accordion.Panel>
                        Our cabs are approved partitioned (“cabin separated”) sanitized cars (“fumigated after each trip”) which are specifically suited as per the present situation prevailing due to this pandemic.</Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item className={classes.item} value="payment">
                        <Accordion.Control>
                            <b>Is there pick up from home to Cochin Airport?</b>
                        </Accordion.Control>
                        <Accordion.Panel>
                        Yes, We provide pick up from home and transfers to Cochin Airport as well.
                        </Accordion.Panel>
                    </Accordion.Item>
                    <Accordion.Item className={classes.item} value="km">
                        <Accordion.Control>
                            <b>How is km calculated in kerala?</b>
                        </Accordion.Control>
                        <Accordion.Panel>
                            Our Km is calculated from Cochin Airport to Cochin Airport
                        </Accordion.Panel>
                    </Accordion.Item>
                    <Accordion.Item className={classes.item} value="book">
                        <Accordion.Control>
                            <b>How can I book taxi to Cochin Airport?</b>
                        </Accordion.Control>
                        <Accordion.Panel>
                            You can call us @ <a href="tel:+9175393921784">75393921784</a> or whats app with your
                            details to undertake immediate booking with the best cab and experienced driver to
                            make your holidays memorable.
                        </Accordion.Panel>
                    </Accordion.Item>
              
                </Accordion>
            </Container>
        </div>
    );
}
