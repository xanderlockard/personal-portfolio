import { Card, Heading, Text } from "@chakra-ui/react";
import { BACKGROUND_COLOR, DEFAULT_TEXT_COLOR, SECONDARY_COLOR } from "../../const";

const ComingSoonCard = () => {
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
            height={{ base: "auto", md: "300px" }}
            borderRadius="15px"
            backgroundColor={BACKGROUND_COLOR}
            variant="elevated"
            boxShadow="md"
        >
            <Card.Header display='flex' justifyContent='center' gap={4}>
              <Heading fontSize='40px' color={DEFAULT_TEXT_COLOR} size="lg">Coming Soon!</Heading>
            </Card.Header>

            <Card.Body>
                <Text fontSize="md" color={SECONDARY_COLOR}>
                    Please pardon our dust, this page is coming soon.
                </Text>
            </Card.Body>
        </Card.Root>
      </div>
    );
};

export default ComingSoonCard;
