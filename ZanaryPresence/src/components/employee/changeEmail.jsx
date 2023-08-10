import { Button, Flex, Text, Box } from "@chakra-ui/react"
import { Form, Formik } from "formik"
import { InputField } from "../field/inputField"


export const ChangeEmail = () => {
    return (
        <Flex direction="column" bg="blue.50" p="20px" borderRadius="10px" boxShadow="md" mt="30px">
            <Text fontSize="20px" fontWeight="bold" color="blue.700">Change Email</Text>
            <Box mt="15px">
                <Formik
                    initialValues={{ email: '' }}
                    onSubmit={(values) => {
                        // Handle email change logic here
                    }}
                >
                    {(props) => (
                        <Form>
                            <Flex alignItems="center">
                                <InputField name="email" type="text" id="email" className="email" borderColor="blue.300" />
                                <Button type="submit" colorScheme="teal" ml="10px">Change</Button>
                            </Flex>
                        </Form>
                    )}
                </Formik>
            </Box> 
        </Flex>
    )
}
