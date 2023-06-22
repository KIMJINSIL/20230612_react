import { Avatar, Box, Grid, GridItem, HStack, Image, Text, VStack } from "@chakra-ui/react"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom"

export default function Detail() {
    const {id} = useParams()
 

    const { isLoading, error, data } = useQuery('comicsDetail', () =>
        fetch(`https://gateway.marvel.com:443/v1/public/comics/${id}?apikey=8de17f456fd399a88335f1172f37bb59`).then(res =>
        res.json()
        )
    )

    console.log(data, isLoading, error)
  return (
    <>
    <Box>
        <VStack 
            w="full" h="650px"
            backgroundImage={`${data?.data?.results[0].thumbnail.path}.${data?.data?.results[0].thumbnail.extension}`}
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundPosition="center"
            alignItems="center"
            position="relative"
        >
            {/* 검정색 처리된 빈박스 */}
            <Box position="absolute" top="0" left="0" w="full" h="full" bg="rgba(0,0,0,0.85)"/>
            <HStack 
                w="7xl" h="full" 
                zIndex="9"
                alignItems="center"
            >
                <Grid templateColumns={"350px 1fr"} gap="16">
                    <GridItem>
                        <Box w="full" h="550px" transform={"translateY(40px)"}>
                            <Image src={`${data?.data?.results[0].thumbnail.path}.${data?.data?.results[0].thumbnail.extension}`} alt="detail Image"/>
                        </Box>
                    </GridItem>
                    <GridItem>
                        <VStack 
                            h="full" 
                            justifyContent="flex-start" alignItems="flex-start"
                            spacing="8"
                            py="16"
                        >
                            <Text 
                                color="white" 
                                fontWeight="600"
                                fontSize="xl"
                            >{data?.data?.results[0].title}
                            </Text>
                            <Text color="gray.200" fontSize="lg">
                            {data?.data?.results[0].variantDescription}
                            </Text>
                            <VStack alignItems="flex-start">
                                <Text color="white" fontWeight="600" fontSize="xl">Creator</Text>
                                <HStack w="full" justifyContent="flex-start">
                                    {data?.data?.results[0]?.creators?.items?.map(
                                        (item, i) => 
                                        <VStack>
                                            <Avatar name={item.name}/>
                                            <Text key={i} color="white">{item.name}</Text>
                                        </VStack>
                                    )}
                                </HStack>
                            </VStack>

                        </VStack>
                    </GridItem>
                </Grid>

            </HStack>
        </VStack>
    </Box>
    </>
  )
}