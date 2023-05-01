import { Box, Image, Text, Flex } from "@chakra-ui/react";
import Logo from "../assets/openai.png";

const Footer = () => {
  return (
    <Box marginTop={50}>
      <Flex justifyContent="center" alignItems="center">
        <Image src={Logo} marginRight={1} alt="Logo" />
        <Text>Powered by Open AI</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
