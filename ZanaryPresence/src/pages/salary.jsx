import { Flex, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Box } from "@chakra-ui/react";
import { MonthlySalary } from "../components/employee/monthlySalary";
import { useEffect, useState } from "react";
import Axios from "axios";
import { YearlySalary } from "../components/employee/yearlySalary";

export const SalaryPage = () => {
  const [salary, setSalary] = useState();
  const token = localStorage.getItem("token");

  const getSalary = async () => {
    try {
      const response = await Axios.get("http://localhost:3006/api/salary", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response);
      setSalary(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSalary();
  }, []);
  return (
    <Flex
      direction="column"
      ml={{ base: "15px", md: "120px", lg: "220px" }}
      p={{ base: "10px", md: "20px" }}
      w={{ base: "90vw", md: "83vw" }}
      mb={{ base: "60px", md: "0px" }}
      bg="white"
    >
      <Heading fontSize="26px" mb="10px">
        My Salary Recap
      </Heading>
      <Box borderRadius="md" boxShadow="lg" bg="white" p="20px">
        <Tabs colorScheme="blue" variant="enclosed" size="md">
          <TabList mb="1em">
            <Tab>Monthly Salary</Tab>
            <Tab>Yearly Salary</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <MonthlySalary data={salary} />
            </TabPanel>
            <TabPanel>
              <YearlySalary />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
  );
};
