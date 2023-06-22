import {
  Box,
  Grid,
  GridItem,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";
import { FaPinterest, FaSnapchatGhost, FaTumblr } from "react-icons/fa";

export default function Footer() {
  return (
    <HStack
      w="full"
      bg="gray.800"
      h="300px"
      py="20"
      justifyContent="center"
      alignItems="flex-start"
    >
      <Grid
        w={{
          md: "3xl",
          lg: "5xl",
          xl: "7xl",
        }}
        h="full"
        gap="8"
        templateColumns={{
          sm: "1fr",
          xl: "1fr 1fr 1fr 1fr",
        }}
      >
        <GridItem>
          <Box w="40">
            <Image
              src="https://seeklogo.com/images/M/Marvel_Comics-logo-D489AEB9C1-seeklogo.com.png"
              alt="Main logo"
            />
          </Box>
        </GridItem>

        <GridItem w="full">
          <HStack w="full" spacing="8">
            <VStack
              color="gray.100"
              fontWeight="600"
              alignItems="flex-start"
              textTransform="uppercase"
            >
              <Text>about marvel</Text>
              <Text>help/faqs</Text>
              <Text>careers</Text>
              <Text>internships</Text>
            </VStack>
            <VStack
              color="gray.600"
              fontWeight="400"
              alignItems="flex-start"
              textTransform="uppercase"
            >
              <Text>advertising</Text>
              <Text>disney</Text>
              <Text>mavelhq.com</Text>
              <Text>reddem digital</Text>
            </VStack>
          </HStack>
        </GridItem>

        <GridItem w="full">
          <VStack spacing="6">
            <HStack spacing="6">
              <Box w="16">
                <Image
                  src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/marvel_insider-topnav-logo-large2x.png"
                  alt="footer image"
                />
              </Box>
              <VStack alignItems="flex-start" spacing="0">
                <Text
                  fontWeight="600"
                  color="gray.100"
                  textTransform="uppercase"
                >
                  Marvel insider
                </Text>
                <Text color="gray.600">Lorem ipsum dolor sit amet.</Text>
              </VStack>
            </HStack>
            <HStack spacing="6">
              <Box w="16">
                <Image
                  src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/mu-logo-w-nav-2x-2021-02.png"
                  alt="footer image"
                />
              </Box>
              <VStack alignItems="flex-start" spacing="0">
                <Text
                  fontWeight="600"
                  color="gray.100"
                  textTransform="uppercase"
                >
                  MARVEL UNLIMITED
                </Text>
                <Text color="gray.600">Lorem ipsum dolor sit amet.</Text>
              </VStack>
            </HStack>
          </VStack>
        </GridItem>

        <GridItem w="full">
          <VStack alignItems="flex-start" spacing="4">
            <Text fontWeight="600" color="gray.100" textTransform="uppercase">
              follow marvel
            </Text>
            <Grid
              color="gray.500"
              templateColumns={"repeat(4, 1fr)"}
              gap="6"
              fontSize="20"
            >
              <GridItem>
                <Box>
                  <AiFillFacebook />
                </Box>
              </GridItem>
              <GridItem>
                <Box>
                  <AiFillTwitterCircle />
                </Box>
              </GridItem>
              <GridItem>
                <Box>
                  <AiFillInstagram />
                </Box>
              </GridItem>
              <GridItem>
                <Box>
                  <FaTumblr />
                </Box>
              </GridItem>
              <GridItem>
                <Box>
                  <AiFillYoutube />
                </Box>
              </GridItem>
              <GridItem>
                <Box>
                  <FaSnapchatGhost />
                </Box>
              </GridItem>
              <GridItem>
                <Box>
                  <FaPinterest />
                </Box>
              </GridItem>
            </Grid>
          </VStack>
        </GridItem>
      </Grid>
    </HStack>
  );
}
