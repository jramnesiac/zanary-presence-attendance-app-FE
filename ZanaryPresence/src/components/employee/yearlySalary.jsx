import {
    Card,
    Flex,
    Heading,
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    Box,
  } from "@chakra-ui/react";
  import IDR from "../../helper/IDR";
  import { useEffect, useState } from "react";
  import Axios from "axios";
  
  export const YearlySalary = () => {
    const [data, setData] = useState([]);
    const token = localStorage.getItem("token");
  
    const month = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  
    const getYearlySalary = async () => {
      try {
        const response = await Axios.get("http://localhost:3006/api/salary/yearly", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(response.data.monthlyRecap);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      getYearlySalary();
    }, []);
  
    const currentMonthIndex = new Date().getMonth();
  
    return (
      <Flex direction="column" alignItems="center">
        <Box bg="white" borderRadius="10px" boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)" p="20px" w="100%">
          <Heading mb="10px" color="#0058AB">Yearly Salary Recap</Heading>
          <TableContainer mt="20px" bg="white" borderRadius="10px" boxShadow="0px 2px 4px rgba(0, 0, 0, 0.05)">
            <Table variant="striped" colorScheme="blue">
              <Thead>
                <Tr>
                  <Th>Month</Th>
                  <Th>Total Deduction</Th>
                  <Th>Total Overtime</Th>
                  <Th>Total Salary</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.slice(0, currentMonthIndex + 1).map((item, index) => (
                  <Tr key={index}>
                    <Td>{month[index]}</Td>
                    <Td>{IDR(item.totalDeduction)}</Td>
                    <Td>{IDR(item.totalSalaryOT)}</Td>
                    <Td>{IDR(item.totalSalary)}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Flex>
    );
  };
  