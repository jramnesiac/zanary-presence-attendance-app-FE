import { Button, Flex, Heading, Text, useToast, Box } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { InputField } from "../field/inputField";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { SelectField } from "../field/selectField";
import { DatePickerField } from "../field/dateField";

export const RegisCard = () => {
    const toast = useToast()
    const navigate = useNavigate()
    const { token } = useParams()
    const regisSchema = Yup.object().shape({
        firstName: Yup.string().required("Please enter your first name"),
        lastName: Yup.string().required("Please enter your last name"),
        password: Yup.string()
            .required("Password is required")
            .min(6, "Password is too short")
            .matches(/^(?=.*[A-Z])/, "Must contain at least one uppercase character")
            .matches(/^(?=.*(\W|_))/, "Must contain at least one symbol"),
        confirmPassword: Yup.string()
            .required("Please confirm your password")
            .min(6, "Password is too short")
            .oneOf([Yup.ref('password')], 'Password did not match'),
        phone: Yup.string()
            .required('Phone number is required')
            .matches(/^\d{12}$/, 'Phone number is not valid'),
        gender: Yup.string().required("Please choose your gender"),
        birthdate: Yup.string()
            .required("Please enter your birthdate")
            .max(new Date(), "Invalid birthdate")
        
    });
  
    const initialValues = {
      fullname: '',
      password: '',
      confirmPassword: '',
      phone: '',
      birthdate: '',
    };

    const handleSubmit = async (data) => {
        try {
            const response = await Axios.post("http://localhost:3006/api/auth", data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(response.data.result);
            toast({
                title: "Login Success!",
                description: "You have successfully logged in!",
                status: "success",
                duration: 2000,
                isClosable: true,
                position: "top",
              })
            setTimeout(()=>{
                navigate("/login")
            }, 1500)
        } catch (error) {
            console.log(error);
            toast({
                title: "Login Failed!",
                description: error.response.data.message,
                status: "error",
                duration: 2000,
                isClosable: true,
                position: "top",
              })
        }
    }
  

  return (
    <Flex justifyContent="center" align="center" direction="column" minH="100vh" bg="gray.50">
      <Box
        width={{ base: "90%", sm: "70%", md: "60%", lg: "40%" }}
        p="40px"
        borderRadius="10px"
        boxShadow="sm"
        bg="white"
      >
        <Flex direction="column" alignItems="center">
          <Heading fontSize="24px" mb="10px" color="gray.700">
            Welcome, New Employee!
          </Heading>
          <Text fontSize="18px" mb="20px" color="gray.500">
            Please register your account
          </Text>
          <Formik
            initialValues={initialValues}
            validationSchema={regisSchema}
            onSubmit={(values, action) => {
              handleSubmit(values);
              action.resetForm();
            }}
          >
            {(props) => (
              <Form>
                <Flex direction="column">
                  <InputField
                    placeholder="Full Name"
                    name="fullname"
                    id="fullname"
                    type="text"
                    w="100%"
                    mb="15px"
                  />
                  <InputField
                    placeholder="Password"
                    name="password"
                    id="password"
                    className="password"
                    type="password"
                    w="300px"
                  />
                  <InputField
                    placeholder="Confrim Password"
                    name="confirmPassword"
                    id="confirmPassword"
                    className="confirmPassword"
                    type="password"
                    w="300px"
                  />
                  <InputField
                    placeholder="Phone Number"
                    name="phone"
                    id="phone"
                    className="phone"
                    type="text"
                    w="300px"
                  />
                  <DatePickerField label="Birthdate" name="birthdate" />
                  <Button type="submit" mt="15px" bg="#0058AB" color="#FBD914">
                    Submit
                  </Button>
                </Flex>
              </Form>
            )}
          </Formik>
        </Flex>
      </Box>
    </Flex>
  );
};
