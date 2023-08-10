import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const NavItem = ({
  icon,
  children,
  hoverColor = "white",
  hoverBg = "grey.600",
  page,
  ...rest
}) => {
  return (
    <Box
      as={Link}
      to={page}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        transition="all 0.3s ease"
        _hover={{
          bg: hoverBg,
          color: hoverColor,
          transform: "translateY(-2px)",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="20"
            _groupHover={{ color: "white" }}
            as={icon}
          />
        )}
        <Text
          fontWeight="medium"
          display={{ base: "none", md: "none", lg: "block" }}
        >
          {children}
        </Text>
      </Flex>
    </Box>
  );
};
