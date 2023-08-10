import { Flex, Heading, Box, Text } from "@chakra-ui/react";
import Axios from "axios";
import { useEffect, useState } from "react";
import { LogTable } from "../components/employee/logTable";

export const LogHistory = () => {
    const [data, setData] = useState();
    const token = localStorage.getItem("token");

    const logHistory = async () => {
        try {
            const response = await Axios.get("http://localhost:3006/api/attendance/loghistory", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setData(response.data.result);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        logHistory();
    }, []);

    return (
        <Flex direction="column" ml={{ base: "15px", md: "120px", lg: "220px" }}
            p={{ base: "10px", md: "20px" }} w={{ base: "90vw", md: "83vw" }} mb={{ base: "60px", md: "0px" }}>
            <Heading fontSize="26px" mb="10px">My Attendances Log</Heading>
            <Text color="gray.600" mb="20px">View and manage your attendance records</Text>
            <Box borderRadius="5px" boxShadow="0px 0px 10px rgba(0,0,0,0.05)" p="20px" bg="white">
                <Flex justifyContent="center">
                    <LogTable data={data} />
                </Flex>
            </Box>
        </Flex>
    );
};
