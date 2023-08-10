import {
    Avatar,
    Flex,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    useToast,
  } from "@chakra-ui/react";
  import { FiHome } from "react-icons/fi";
  import { FaRegCalendarCheck, FaMoneyCheck, FaUsers } from "react-icons/fa";
  import { NavItem } from "./navItem";
  import { Link, useNavigate } from "react-router-dom";
  import { useSelector } from "react-redux";
  
  export const MobileNav = () => {
    const toast = useToast()
    const navigate = useNavigate()

    const data = useSelector((state) => state.user.value)
    let LinkItems = []
    if (data.isAdmin) {
        LinkItems = [
            { name: 'Home', icon: FiHome, page: "/" },
            { name: 'Log History', icon: FaRegCalendarCheck, page: "/loghistory"},
            { name: 'Salary', icon: FaMoneyCheck, page: "/"},
            { name: 'Employee', icon: FaUsers, page: "/employee"}
          ]
    } else {
        LinkItems = [
            { name: 'Home', icon: FiHome, page: "/" },
            { name: 'Log History', icon: FaRegCalendarCheck, page: "/loghistory"},
            { name: 'Salary', icon: FaMoneyCheck, page: "/"}
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
        h="60px"
        bg="blue.700"
        display={{ base: "flex", md: "none" }}
        position="fixed"
        bottom="0"
        w="100vw"
        justifyContent="space-evenly"
        alignItems="center"
        boxShadow="0px -1px 5px rgba(0, 0, 0, 0.1)"
      >
        {LinkItems?.map((link) => (
          <NavItem
            color="white"
            hoverBg="blue.600"
            hoverColor="grey.300"
            key={link.name}
            icon={link.icon}
            page={link.page}
          >
            {link.name}
          </NavItem>
        ))}
        <Menu placement="top-start">
          <MenuButton>
            <Avatar
              size="xs"
              bg="grey.400"
              mr="10px"
              src={`http://localhost:9000/${data.imgProfile}`}
            />
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
      </Flex>
    );
  };
  