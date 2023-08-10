import { Button, Flex, Heading, Text, useToast } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { InputField } from "../field/inputField";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { setValue } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";

export const LoginCard = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const loginSchema = Yup.object().shape({
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password contains minimal 6 characters')
      .required('Password is required'),
  });

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = async (data) => {
      try {
          const response = await Axios.post("http://localhost:3006/api/auth/login", data)
          console.log(response.data.result);
          dispatch(setValue(response.data.result))
          localStorage.setItem("token", response.data.token)
          toast({
              title: "Login Success!",
              description: "You have successfully logged in!",
              status: "success",
              duration: 2000,
              isClosable: true,
              position: "top",
            })
          setTimeout(()=>{
              navigate("/")
          }, 1500)
      } catch (error) {
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
    <Flex justifyContent="center" align="center" minHeight="100vh" bg="gray.50">
      <Flex
        direction="column"
        alignItems="center"
        bg="white"
        p="40px"
        borderRadius="10px"
        boxShadow="xl"
        width={["100%", "80%", "60%", "400px"]}
        textAlign="center"
      >
        <Heading color="blue.600" mb="10px">
          Hello Again!
        </Heading>
        <Text color="gray.600" mb="20px">
          Please log in to your account
        </Text>
        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={(values, action) => {
            handleSubmit(values);
            action.resetForm();
          }}
        >
          {(props) => (
            <Form>
              <Flex direction="column">
                <InputField
                  label="Email"
                  name="email"
                  id="email"
                  type="text"
                  mb="15px"
                />
                <InputField
                  label="Password"
                  name="password"
                  id="password"
                  type="password"
                  mb="15px"
                />
                <Button
                  type="submit"
                  bg="blue.600"
                  color="white"
                  _hover={{ bg: "blue.500" }}
                >
                  Submit
                </Button>
              </Flex>
            </Form>
          )}
        </Formik>
      </Flex>
    </Flex>
  );
};
