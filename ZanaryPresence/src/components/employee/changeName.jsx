import { Button, Flex, Text, Box } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { InputField } from "../field/inputField";

export const ChangeName = () => {
  return (
    <Flex direction="column" bg="blue.50" p="20px" borderRadius="10px" boxShadow="md" mt="30px">
      <Text fontSize="20px" fontWeight="bold" color="blue.700">Change Name</Text>
      <Box mt="15px">
        <Formik
          initialValues={{ fullname: '' }}
          onSubmit={(values) => {
            // Handle name change logic here
          }}
        >
          {(props) => (
            <Form>
              <Flex alignItems="center">
                <InputField name="fullname" type="text" id="fullname" className="fullname" placeholder="fullname" borderColor="blue.300" />
                <Button type="submit" colorScheme="teal" ml="10px">Change</Button>
              </Flex>
            </Form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
};
