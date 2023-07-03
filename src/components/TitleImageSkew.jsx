import { Box, Button, HStack, Image, Text, VStack } from "@chakra-ui/react"
import {RxEnter} from "react-icons/rx"

export default function TitleImageSkew({title,description,imgUrl}) {
  return (
        <HStack w="full" h="400px" bg="gray.800" position="relative" overflow="hidden">
        <Box w="50%" h="full">
        {/* 빈박스_기울어진(왼쪽) */}
        <Box bg="gray.800" w="full" h="full"
            transform={"rotate(-15deg) scale(1.5) translateY(60px)"}
        />
        </Box>
        {/* 두번째 자식_이미지(오른쪽) */}
        <Box w="50%" h="full" bg="blue.100">
        <Image 
            w="full" h="full"
            objectFit="cover"
            objectPosition="center"
            src={imgUrl} alt="Marvel Img1"/>
        </Box>
        {/* 세번째 자식이지만 영역만 잡아줌 */}
        <VStack position="absolute" top="0" left="0" w="full" h="full" alignItems="center">
        <VStack w="7xl" h="full" alignItems="flex-start" justifyContent="center">
            <Text color="white" fontWeight="700" fontSize="32" textTransform="uppercase">
            {title}
            </Text>
            <Text color="white" w="3xl">
            {description}
            </Text>
            <Button 
                marginTop="6" textTransform="uppercase" 
                variant="outline" 
                colorScheme="red"
                aria-label="Comics Button"
                rightIcon={<RxEnter/>}>
            List more
            </Button>
        </VStack>
        </VStack>
    </HStack>
    )
}
