import { Flex, Heading, VStack, Box, Divider } from "@chakra-ui/react";
import { ChangePic } from "../components/employee/changePic";
import { useSelector } from "react-redux";
import { ChangeEmail } from "../components/employee/changeEmail";
import { ChangeName } from "../components/employee/changeName";

export const Profile = () => {
    const data = useSelector((state) => state.user.value);
    return (
        <Flex
            direction="column"
            bg="#f0f8ff"
            p={{ base: "20px", md: "40px" }}
            borderRadius="10px"
            ml={{ base: "15px", md: "120px", lg: "220px" }}
            w={{ base: "90vw", md: "83vw" }}
            mb={{ base: "60px", md: "0px" }}
        >
            <Heading fontSize="26px">Profile Settings</Heading>
            <VStack spacing={6} align="stretch" mt={6}>
                <Box>
                    <Heading fontSize="18px">Profile Picture</Heading>
                    <ChangePic image={data.imgProfile} />
                </Box>
                <Divider />
                <Box>
                    <Heading fontSize="18px">Change Name</Heading>
                    <ChangeName />
                </Box>
                <Divider />
                <Box>
                    <Heading fontSize="18px">Change Email</Heading>
                    <ChangeEmail />
                </Box>
            </VStack>
        </Flex>
    );
};
