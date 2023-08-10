import React from 'react';
import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import { useField } from 'formik';

export const DatePickerField = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);

  const handleDateChange = (event) => {
    const { value } = event.target;
    helpers.setValue(value);
  };

  return (
    <FormControl
      isInvalid={meta.error && meta.touched}
      mt={4} // Margin top for spacing between form fields
    >
      <FormLabel
        fontWeight="bold" // Bold label text
        fontSize="lg" // Larger font size
        mb={1} // Margin bottom for spacing
      >
        {label}
      </FormLabel>
      <Input
        type="date"
        borderRadius="md" // Rounded corners
        bg="white" // White background
        boxShadow="sm" // Subtle shadow for depth
        focusBorderColor="blue.500" // Blue focus border color
        {...field}
        {...props}
        onChange={handleDateChange}
      />
      <FormErrorMessage
        fontSize="sm" // Smaller font size
        mt={1} // Margin top for spacing
        color="red.600" // Red color for error messages
      >
        {meta.error}
      </FormErrorMessage>
    </FormControl>
  );
};
