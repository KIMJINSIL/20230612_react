import { HStack, Skeleton } from "@chakra-ui/react";

export default function SkeletonList() {
  return (
    <HStack spacing="2">
    <Skeleton  w="170px" h="240px"/>
    <Skeleton  w="170px" h="240px"/>
    <Skeleton  w="170px" h="240px"/>
    <Skeleton  w="170px" h="240px"/>
    <Skeleton  w="170px" h="240px"/>
    <Skeleton  w="170px" h="240px"/>
    <Skeleton  w="170px" h="240px"/>
    </HStack>
  )
}

