import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useDisclosure, useToast, useColorModeValue } from "@chakra-ui/react"
import { InputField } from "../field/inputField"
import { Formik, Form } from "formik"
import { AiOutlinePlus } from "react-icons/ai"
import Axios from "axios"
import * as Yup from "yup"
import { SelectField } from "../field/selectField"
import { useEffect, useState } from "react"

export const AddUser = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const token = localStorage.getItem("token")
    const [position, setPosition] = useState()
    const toast = useToast()
    const btnBg = useColorModeValue("teal.500", "teal.200")
    const btnHoverBg = useColorModeValue("teal.600", "teal.300")

    const handleEmail = async (data) => {
        try {
            const response = await Axios.post("http://localhost:3006/api/auth/user", data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }})
            console.log(response);
            toast({
                title: "Success!",
                description: "Email successfuly sent!",
                status: "success",
                duration: 2000,
                isClosable: true,
                position: "top",
              })
        } catch (error) {
            console.log(error);
            toast({
                title: "Login Success!",
                description: "Failed to send email",
                status: "error",
                duration: 2000,
                isClosable: true,
                position: "top",
              })
        }
    }

    const getPosition = async () => {
      try {
        const response = await Axios.get("http://localhost:3006/api/users/position")
        setPosition(response.data)
      } catch (error) {
        console.log(error);
      }
    }

    const emailSchema = Yup.object().shape({
        email: Yup.string().email('Email is invalid').required('Email is required'),
      });
    
    const initialValues = {
        email: "",
        posId: ""
    }
    
    useEffect(() => {
      getPosition()
    },[])
    return (
      <>
        <Button onClick={onOpen} bg={btnBg} _hover={{ bg: btnHoverBg }} rightIcon={<AiOutlinePlus />} color="white">
            <Text ml="10px" display={{base: "none", md: "block"}}>Employee</Text>
        </Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent bg="blue.50" boxShadow="2xl">
            <ModalHeader color="blue.800">Enter Employee's Email</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
            <Formik initialValues={initialValues} validationSchema={emailSchema}
            onSubmit={(value, action) => {
                handleEmail(value)
                action.resetForm()
            }}>
                {(props) => {
                    return (
                        <Form>
                            <InputField label="Email" name="email" id="email" className="email" mb="10px" />
                            <SelectField label="Position" name="posId" id="posId" className="posId">
                              {position?.map(item => (
                                <option value={item.id}>{item.position}</option>
                              ))}
                            </SelectField>
                            <Button mt="10px" type="submit" bg={btnBg} _hover={{ bg: btnHoverBg }} color="white">Send</Button>
                        </Form>
                    )
                }}
            </Formik>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
}
