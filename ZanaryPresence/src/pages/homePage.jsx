import { Flex, Box } from "@chakra-ui/react";
import { Sidebar } from "../components/navbar/sidebar";
import { MobileNav } from "../components/navbar/mobileNav";
import { Outlet } from "react-router-dom";

export const HomePage = () => {
    return (
        <Flex bg="#f0f8ff" minH="100vh" direction={{ base: "column", md: "row" }}>
            <Sidebar />
            <Box flex="1" display={{ base: "none", md: "block" }} ml={{ md: "5px", lg: "10px" }}>
                <MobileNav />
            </Box>
            <Box
                flex="1"
                p={{ base: "15px", md: "20px", lg: "30px" }}
                boxShadow="0 0 5px rgba(0, 0, 0, 0.1)"
                bgColor="white"
                borderRadius={{ base: "0", md: "10px" }}
                overflow="auto"
            >
                <Outlet />
            </Box>
        </Flex>
    );
};
