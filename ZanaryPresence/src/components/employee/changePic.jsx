import { Avatar, Button, Flex, FormControl, Input, Text, useToast, Box } from "@chakra-ui/react";
import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Axios from "axios";
import { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";

export const ChangePic = ({ image }) => {
    const token = localStorage.getItem("token");
    const toast = useToast();
    const [file, setFile] = useState(null);

    const initialValues = { imgProfile: null };

    const fileSchema = Yup.object().shape({
        imgProfile: Yup.mixed().required("File is required"),
    });

    const handlePic = async (data) => {
        try {
            const formData = new FormData();
            formData.append("file", file); // Use data.file here
            const response = await Axios.patch(
                "http://localhost:3006/api/users/picture",
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log(response);
            toast({
                title: "Success",
                description: "Profile Picture Updated!",
                status: "success",
                duration: 1500,
                position: "top",
            });
            setTimeout(() => {
                window.location.reload()
            }, 2000)
        } catch (error) {
            console.log(error);
        }
    };

  return (
    <Flex direction="column" bg="blue.50" p="20px" borderRadius="10px" boxShadow="md" mt="30px">
      <Text fontSize="20px" fontWeight="bold" color="blue.700">Profile Picture</Text>
      <Flex mt="15px" direction={{ base: "column", md: "row" }} alignItems={{ base: "center", md: "flex-start" }}>
        <Avatar size={{ base: "lg", md: "xl" }} src={`http://localhost:3006/${image}`} mb={{ base: "10px", md: "0px"}} />
        <Box>
          <Formik
            initialValues={initialValues}
            validationSchema={fileSchema}
            onSubmit={(values) => {
              handlePic(values);
            }}
          >
            {(props) => (
              <Form>
                <Flex alignItems={{ base: "flex-start", md: "center" }} direction={{ base: "column", md: "row" }}>
                  <Field name="imgProfile">
                    {({ field }) => (
                      <FormControl>
                        <Input
                          {...field}
                          onChange={(e) => {
                            field.onChange(e);
                            setFile(e.target.files[0]);
                          }}
                          type="file"
                          id="imgProfile"
                          borderColor="blue.300"
                          ml="15px"
                          w={{ base: "220px", md: "300px" }}
                        />
                      </FormControl>
                    )}
                  </Field>
                  <ErrorMessage
                    style={{ color: "red" }}
                    name="imgProfile"
                    component="div"
                  />
                  <Button
                    h="31px"
                    isDisabled={!props.dirty}
                    type="submit"
                    colorScheme="teal"
                    size="md"
                    ml="20px"
                    mt={{ base: "10px", md: "0px" }}
                  >
                    <FiUploadCloud />
                  </Button>
                </Flex>
              </Form>
            )}
          </Formik>
        </Box>
      </Flex>
    </Flex>
  );
};
