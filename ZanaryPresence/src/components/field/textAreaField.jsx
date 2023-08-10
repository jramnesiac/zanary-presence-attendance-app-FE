import { FormControl, FormErrorMessage, FormLabel, Textarea } from "@chakra-ui/react";
import { Field, useField } from "formik";

export const TextareaField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
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
      <Field
        as={Textarea}
        borderRadius="md" // Rounded corners
        bg="white" // White background
        boxShadow="sm" // Subtle shadow for depth
        focusBorderColor="blue.500" // Blue focus border color
        p={2} // Padding for a comfortable touch area
        resize="vertical" // Allow vertical resizing only
        {...field}
        {...props}
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
