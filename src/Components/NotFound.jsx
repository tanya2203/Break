import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import error from "../img/error.jpg";

const NotFound = () => {
  return (
    <Flex
      width={"full"}
      justifyContent="center"
      alignItems={"center"}
      direction="column"
    >
      <Image src={error} width={600} />
      <Text fontSize={40} fontWeight="semibold" fontFamily={"cursive"}>
        Not Found
      </Text>
    </Flex>
  );
};

export default NotFound;
