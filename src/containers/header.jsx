import { useState } from "react";
import { SignedIn, SignedOut, SignInButton, SignOutButton } from '@clerk/clerk-react'

import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Button
} from "@chakra-ui/react";

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => setIsOpen(!isOpen);

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding={6}
            bg="green.400"
            color="black"
            {...props}
        >
            <Flex align="center" mr={5}>
                <Heading as="h1">
                    DecisionBuilder.io
                </Heading>
            </Flex>

            <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
                <p>Menu</p>
            </Box>

            <Stack
                direction={{ base: "column", md: "row" }}
                display={{ base: isOpen ? "block" : "none", md: "flex" }}
                width={{ base: "full", md: "auto" }}
                alignItems="center"
                gap={5}
                flexGrow={1}
                mt={{ base: 4, md: 0 }}
            >
                <Text>Pricing</Text>
                <Text>Case Studies</Text>
                <Text>About</Text>
                <Text>Contact</Text>
            </Stack>

            <Box
                display={{ base: isOpen ? "block" : "none", md: "block" }}
                mt={{ base: 4, md: 0 }}
                marginRight={'1rem'}
            >
                <SignedOut>
                    <SignInButton>
                        <Button
                            bg={"white"}
                            color={"black"}
                            rounded={"full"}
                            px={8}
                            fontSize={{ base: "lg", lg: "lg" }}
                            _hover={{
                                bg: "gray.200",
                            }}
                            >
                            Sign In
                        </Button>
                    </SignInButton>
                </SignedOut>
                <SignedIn>
                    <SignOutButton>
                        <Button
                            bg={"white"}
                            color={"black"}
                            rounded={"full"}
                            px={8}
                            fontSize={{ base: "lg", lg: "lg" }}
                            _hover={{
                                bg: "gray.200",
                            }}
                        >
                            Sign Out
                        </Button>
                    </SignOutButton>
                </SignedIn>
            </Box>
        </Flex>
    );
};

export default Header