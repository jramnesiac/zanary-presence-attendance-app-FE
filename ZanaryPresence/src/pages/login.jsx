import { Flex } from "@chakra-ui/react";
import { LoginCard } from "../components/login/loginCard";

export const LoginPage = () => {
    return (
        <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
            minH="100vh"
            bgGradient="linear(to-r, #f0f8ff, #e1f3f8)"
        >
            {/* Optional: Add a logo or image here */}
            <LoginCard />
        </Flex>
    );
};
