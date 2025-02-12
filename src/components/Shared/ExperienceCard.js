import { Card, Heading, Text, Box } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/avatar";
import { BACKGROUND_COLOR, DEFAULT_TEXT_COLOR, SECONDARY_COLOR } from "../../const";

const ExperienceCard = (props) => {
    return (
        <Card.Root
            width={{ base: "90%", md: "60%" }}
            maxW="80%"
            height={{ base: "auto", md: "300px" }}
            borderRadius="15px"
            backgroundColor={BACKGROUND_COLOR}
            variant="elevated"
            boxShadow="md"
        >
            <Card.Header gap={4}>
                <span style={{display: 'inline-flex', alignItems: 'left', justifyContent: 'space-around'}}>
                    <Avatar
                        src={props.imageSrc}
                        name={props.companyName}
                        size="lg"
                        boxSize="60px"
                        bg="gray.200"
                        borderColor={SECONDARY_COLOR}
                        borderWidth="2px"
                        borderRadius="10px"
                    />
                    <Box padding='0 5%'>
                        <Heading style={{fontFamily:'Courier New'}} color={DEFAULT_TEXT_COLOR} size="lg">{props.positionTitle}</Heading>
                        <Text color={SECONDARY_COLOR} fontSize="md">{props.companyName}</Text>
                    </Box>
                </span>
            </Card.Header>

            <Card.Body>
                <Text fontSize="sm" color={SECONDARY_COLOR}>
                    {props.description}
                </Text>
            </Card.Body>

            <Card.Footer justifyContent="flex-end">
                <Text fontSize="xs" color={DEFAULT_TEXT_COLOR}>
                    {props.dateRange}
                </Text>
            </Card.Footer>
        </Card.Root>
    );
};

export default ExperienceCard;
