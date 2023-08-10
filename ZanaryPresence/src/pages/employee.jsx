import { Flex, Heading, Box } from "@chakra-ui/react";
import { EmployeeTable } from "../components/admin/employeeTable";
import { AddUser } from "../components/admin/addUser";

export const EmployeePage = () => {
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
      <Heading fontSize="26px" mb="15px" color="gray.700">
        Employee
      </Heading>
      <Flex alignItems="center" justifyContent="space-between" mb="30px">
        <Flex ml="2px" alignItems="center">
          <Heading fontSize={{ base: "18px", lg: "22px" }} color="gray.600">
            All Employee
          </Heading>
        </Flex>
        <Flex>
          <AddUser />
        </Flex>
      </Flex>
      <Box
        bgColor="white"
        borderRadius="10px"
        boxShadow="sm"
        p="20px"
        overflowX="auto"
      >
        <EmployeeTable />
      </Box>
    </Flex>
  );
};
