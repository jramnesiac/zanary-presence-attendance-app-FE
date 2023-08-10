import { Box, Flex, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import IDR from "../../helper/IDR"

export const MonthlySalary = ({ data }) => {
    return (
        <Flex direction="column" align="center" mt="20px">
            <Box w={{ base: "300px", md: "590px", lg: "1000px" }} overflowX="auto">
                <TableContainer>
                    <Table variant="striped" w="100%">
                        <Thead bg="#FBD914" color="#0058AB">
                            <Tr>
                                <Th>Date</Th>
                                <Th>Salary</Th>
                                <Th>Overtime</Th>
                                <Th>Deduction</Th>
                                <Th>Total Salary</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {data?.result.map(item => (
                                <Tr key={item.id}>
                                    <Td>
                                        {new Date(new Date(`${item.clockIn}`) - (7 * 3600 * 1000)).toLocaleDateString("en-EN", {
                                            year: "2-digit",
                                            month: "short",
                                            day: "2-digit"
                                        })}
                                    </Td>
                                    <Td>{IDR(item.User.Position.salary)}</Td>
                                    <Td>{IDR(item.salaryOT)}</Td>
                                    <Td color="red">{IDR(item.deduction)}</Td>
                                    <Td>{IDR(item.User.Position.salary + item.salaryOT - item.deduction)}</Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        </Flex>
    )
}
