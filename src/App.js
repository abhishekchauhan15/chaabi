import React from "react";
import TypingTest from "./components/TypingTest";
import {
  ChakraProvider,
  Container,
  Flex,
  useColorMode,
  Heading,
  Button,
  useColorModeValue,
  flexbox,
} from "@chakra-ui/react";
import Navbar from "./components/Navbar";

const App = () => {
  const kbdBackground = useColorModeValue("gray.100", "gray.700");
  const hlBackground = useColorModeValue("#dddd", "#262b2e");

  return (
    <ChakraProvider>
      <Navbar />
      <Container
        style={{
          display: "flexbox",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
        maxW="750px"
      >
        <Flex marginTop={60} direction="column" padding={1}>
          <TypingTest
            kbdBackground={kbdBackground}
            hlBackground={hlBackground}
          />
        </Flex>
      </Container>
    </ChakraProvider>
  );
};

export default App;
