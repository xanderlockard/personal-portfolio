import { Card, Heading, Text } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/avatar";
import { BACKGROUND_COLOR, DEFAULT_TEXT_COLOR, SECONDARY_COLOR } from "../../const";

const Home = () => {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5%'
      }}>
        <Card.Root
            width={{ base: "90%", md: "60%" }}
            maxW="1000px"
            height={{ base: "auto", md: "50%" }}
            borderRadius="15px"
            backgroundColor={BACKGROUND_COLOR}
            variant="elevated"
            boxShadow="md"
        >
            <Card.Header>
              <span style={{display: 'inline-flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                <Avatar
                    src={'https://avatars.githubusercontent.com/u/181026198?v=4'}
                    name={'Alexander Lockard'}
                    size="lg"
                    boxSize="150px"
                    bg="gray.200"
                    borderColor={SECONDARY_COLOR}
                    borderWidth="2px"
                    borderRadius="10px"
                />
                <Heading style={{ margin: '1rem',
                      fontFamily: 'Courier New'
                 }} fontSize='40px' color={DEFAULT_TEXT_COLOR} size="lg">Alexander Lockard</Heading>
              </span>
            </Card.Header>

            <Card.Body>
                <Text fontSize="md" color={SECONDARY_COLOR}>
                My name is Alexander Lockard, and I am a full-stack engineer with a Bachelor's degree in Computer Science from the Florida Institute of Technology. Currently, I’m working at SafeRide Health, where I contribute to building impactful software solutions.

I’m based in Atlanta, Georgia, and beyond my work in software engineering, I have a deep passion for music, rock climbing, running, and weightlifting, which keep me energized and motivated both in and outside of the office.
                </Text>
            </Card.Body>
        </Card.Root>
      </div>
    );
};

export default Home;
