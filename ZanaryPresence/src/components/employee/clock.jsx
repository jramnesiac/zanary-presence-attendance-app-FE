import React, { useState, useEffect } from 'react';
import { Box, Text } from '@chakra-ui/react';

export const RealTimeClock = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };

  const dateString = dateTime.toLocaleDateString(undefined, options);
  const timeString = dateTime.toLocaleTimeString(undefined, timeOptions);

  return (
    <Box textAlign="center" bg="blue.50" p="20px" borderRadius="10px" boxShadow="md" mt="30px">
      <Text fontSize="20px" color="blue.700">{dateString}</Text>
      <Text fontSize="3xl" fontWeight="bold" mt="2" color="blue.900">{timeString}</Text>
    </Box>
  );
}
