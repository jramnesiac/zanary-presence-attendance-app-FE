import { Flex, Box } from "@chakra-ui/react";
import { RegisCard } from "../components/register/registerCard";

export const RegisterPage = () => {
    return (
        <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
            bg="linear-gradient(135deg, #f0f8ff 0%, #e1f5fe 100%)"
            minH="100vh"
        >
            <Box
                maxWidth="400px"
                width="100%"
                p={6}
                mt={-50}
                boxShadow="xl"
                borderRadius="lg"
                bg="white"
                textAlign="center"
            >
                <RegisCard />
            </Box>
        </Flex>
    );
};
