import { Button, Divider, Flex, Text, useToast } from "@chakra-ui/react";
import { RealTimeClock } from "./clock";
import { Form, Formik } from "formik";
import { TextareaField } from "../field/textAreaField";
import * as Yup from "yup";
import Axios from "axios";

export const LogCard = () => {
    const token = localStorage.getItem("token")
    const toast = useToast()
    const noteSchema = Yup.object().shape({
        note: Yup.string().max(140, "Maximum 140 characters"),
      });

      const initialValues = {
        note: ""
      }

      const clockIn = async (data) => {
        try {
            await Axios.post("http://localhost:3006/api/attendance/clockin", data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            toast({
                title: "Clock In Success!",
                description: "You have clocked in!",
                status: "success",
                duration: 2000,
                isClosable: true,
                position: "top",
              })
            setTimeout(()=>{
                window.location.reload()
            }, 1500)
        } catch (error) {
            toast({
                title: "Clock In Failed!",
                description: error.response.data.message,
                status: "error",
                duration: 2000,
                isClosable: true,
                position: "top",
              })
        }
      }

      const clockOut = async () => {
        try {
            await Axios.post("http://localhost:9000/api/attendance/clockout", {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            toast({
                title: "Clock Out Success!",
                description: "You have clocked out!",
                status: "success",
                duration: 2000,
                isClosable: true,
                position: "top",
              })
            setTimeout(()=>{
                window.location.reload()
            }, 1500)
        } catch (error) {
            toast({
                title: "Clock Out Failed!",
                description: error.response.data.message,
                status: "error",
                duration: 2000,
                isClosable: true,
                position: "top",
              })
        }
      }

      const clockInOT = async (data) => {
        try {
            await Axios.post("http://localhost:9000/api/overtime", {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            toast({
                title: "Clock In Success!",
                description: "You have clocked in for OT!",
                status: "success",
                duration: 2000,
                isClosable: true,
                position: "top",
              })
            setTimeout(()=>{
                window.location.reload()
            }, 1500)
        } catch (error) {
            toast({
                title: "Clock In OT Failed!",
                description: error.response.data.message,
                status: "error",
                duration: 2000,
                isClosable: true,
                position: "top",
              })
        }
      }

      const clockOutOT = async () => {
        try {
            await Axios.patch("http://localhost:9000/api/overtime", {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            toast({
                title: "Clock Out Success!",
                description: "You have clocked out from OT!",
                status: "success",
                duration: 2000,
                isClosable: true,
                position: "top",
              })
            setTimeout(()=>{
                window.location.reload()
            }, 1500)
        } catch (error) {
            toast({
                title: "Clock Out Failed!",
                description: error.response.data.message,
                status: "error",
                duration: 2000,
                isClosable: true,
                position: "top",
              })
        }
      }

  return (
    <Flex alignItems="center" direction="column" mt="30px">
      <Flex
        bg="red.100"
        direction="column"
        p="20px"
        borderRadius="10px"
        w={{ base: "280px", md: "350px", lg: "400px" }}
        boxShadow="md"
      >
        <RealTimeClock />
        <Divider mt="10px" />
        <Flex mt="10px" alignItems="center" direction="column">
          <Text>Your Schedule Time Today</Text>
          <Text fontWeight="bold">09:00 - 16:00</Text>
          <Formik
            validationSchema={noteSchema}
            initialValues={initialValues}
            onSubmit={(value, action) => {
              clockIn(value);
              action.resetForm();
            }}
          >
            {(props) => {
              return (
                <Form>
                  <TextareaField
                    label="Notes"
                    name="note"
                    w={{ base: "250px", md: "300px", lg: "350px" }}
                    borderColor="red.500"
                  />
                  <Flex justifyContent="center" mt="10px">
                    <Button mr="10px" type="submit">
                      Clock In
                    </Button>
                    <Button onClick={clockOut}>Clock Out</Button>
                  </Flex>
                  <Flex justifyContent="center" mt="10px">
                    <Button mr="10px" onClick={clockInOT}>
                      Clock In OT
                    </Button>
                    <Button onClick={clockOutOT}>Clock Out OT</Button>
                  </Flex>
                </Form>
              );
            }}
          </Formik>
        </Flex>
      </Flex>
    </Flex>
  );
};
