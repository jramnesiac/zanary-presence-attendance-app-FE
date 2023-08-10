import { Flex, Heading, Box, Divider } from "@chakra-ui/react";
import { LogCard } from "../components/employee/logCard";
import { TodayLog } from "../components/employee/todayLog";

export const HomeContent = () => {
    return (
        <Flex
            direction="column"
            ml={{ base: "15px", md: "120px", lg: "220px" }}
            px={{ base: "5px", md: "15px" }}
            py={{ base: "10px", md: "20px" }}
            w={{ base: "90vw", md: "83vw" }}
            mb={{ base: "60px", md: "0px" }}
            bgColor="gray.50"
            minH="100vh"
        >
            <Box mb="20px">
                <Heading fontSize="26px" color="gray.700">Home</Heading>
            </Box>
            <Box
                p="20px"
                bgColor="white"
                borderRadius="10px"
                boxShadow="sm"
                mb="20px"
            >
                <LogCard />
            </Box>
            <Divider />
            <Box
                p="20px"
                bgColor="white"
                borderRadius="10px"
                boxShadow="sm"
                mt="20px"
            >
                <TodayLog />
            </Box>
        </Flex>
    );
};
