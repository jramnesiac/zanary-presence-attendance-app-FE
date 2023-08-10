import {
    Avatar,
    Box,
    Flex,
    Heading,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
    useToast,
  } from "@chakra-ui/react";
  import { FiHome } from "react-icons/fi";
  import { FaRegCalendarCheck, FaMoneyCheck, FaUsers } from "react-icons/fa";
  import { NavItem } from "./navItem";
  import { useSelector } from "react-redux";
  import { Link, useNavigate } from "react-router-dom";
  
  export const Sidebar = () => {
    const toast = useToast()
    const navigate = useNavigate()

    const data = useSelector((state) => state.user.value)

    let LinkItems = []
    if (data.isAdmin) {
        LinkItems = [
            { name: 'Home', icon: FiHome, page: "/" },
            { name: 'Log History', icon: FaRegCalendarCheck, page: "/loghistory"},
            { name: 'Salary', icon: FaMoneyCheck, page: "/salary"},
            { name: 'Employee', icon: FaUsers, page: "/employee"}
          ]
    } else {
        LinkItems = [
            { name: 'Home', icon: FiHome, page: "/" },
            { name: 'Log History', icon: FaRegCalendarCheck, page: "/loghistory"},
            { name: 'Salary', icon: FaMoneyCheck, page: "/salary"}
          ]
    }
    

      const logOut = () => {
        localStorage.removeItem("token")
        toast({
            title: "Logged Out!",
            description: "You have successfully logged out!",
            status: "success",
            duration: 2000,
            isClosable: true,
            position: "top",
          })
        setTimeout(()=>{
            navigate("/login")
        }, 1500)
      }
  
    return (
        <Flex
        w={{ md: "80px", lg: "200px" }} // Reduced the width for both medium and large breakpoints
        bg="gray.800"
        color="white"
        direction="column"
        minH="100vh"
        position="fixed"
        p="20px"
        justifyContent="space-between"
        display={{ base: "none", md: "flex" }}
      >
        <Box>
          <Heading display={{ md: "none", lg: "block" }} mb="20px">
            ZanaryApp
          </Heading>
          <Heading display={{ md: "block", lg: "none" }} mb="20px">
            L
          </Heading>
          <Box>
            {LinkItems?.map((link) => (
              <NavItem
                color="white"
                hoverBg="gray.700"
                hoverColor="gray.100"
                key={link.name}
                icon={link.icon}
                page={link.page}
                mt="10px"
              >
                {link.name}
              </NavItem>
            ))}
          </Box>
        </Box>
        <Box>
          <Menu placement="right">
            <MenuButton>
              <Flex alignItems="center">
                <Avatar
                  bg="gray.400"
                  mr="10px"
                  src={`http://localhost:3006/${data.imgProfile}`}
                />
                <Flex
                  direction="column"
                  alignItems="flex-start"
                  display={{ md: "none", lg: "flex" }}
                >
                  <Text fontWeight="bold">{data.fullname}</Text>
                  {data.isAdmin ? (
                    <Text fontSize="14px">Admin</Text>
                  ) : (
                    <Text fontSize="14px">Employee</Text>
                  )}
                </Flex>
              </Flex>
            </MenuButton>
            <MenuList>
              <MenuItem as={Link} to="/profile">
                Settings
              </MenuItem>
              <MenuItem onClick={logOut} color="red">
                Sign Out
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    );
  };
  