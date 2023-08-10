import { Flex, Table, TableContainer, Tbody, Td, Th, Thead, Tr, Box } from "@chakra-ui/react";

export const LogTable = ({ data }) => {
    return (
        <Flex direction="column" align="center" mt="20px">
            <Box w={{ base: "300px", md: "590px", lg: "1000px" }} overflowX="auto">
                <TableContainer>
                    <Table variant="striped" w="100%" size={{ base: "sm", md: "md", lg: "lg" }}>
                        <Thead bg="#FBD914" color="#0058AB">
                            <Tr>
                                <Th>Date</Th>
                                <Th>Clock In</Th>
                                <Th>Clock Out</Th>
                                <Th>Overtime</Th>
                                <Th>Notes</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {data?.map(item => {
                                const clockIn = new Date(item.clockIn);
                                const clockOut = new Date(item.clockOut);
                                const clockInOT = new Date(item.clockInOT);
                                const clockOutOT = new Date(item.clockOutOT);

                                const overtimeHours = Math.floor((clockOutOT - clockInOT) / (60 * 60 * 1000))

                                return (
                                    <Tr key={item.id}>
                                        <Td>{clockIn.toLocaleDateString("en-EN", { year: "2-digit", month: "short", day: "2-digit" })}</Td>
                                        <Td>{item.clockIn ? clockIn.toLocaleTimeString("en-EN", { hour: "2-digit", minute: "2-digit" }) : "-"}</Td>
                                        <Td>{item.clockOut ? clockOut.toLocaleTimeString("en-EN", { hour: "2-digit", minute: "2-digit" }) : "-"}</Td>
                                        <Td>{item.OvertimeIn && item.OvertimeOut ? `${overtimeHours} h` : "-"}</Td>
                                        <Td>{item.note ? item.note : "-"}</Td>
                                    </Tr>
                                );
                            })}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        </Flex>
    );
};
