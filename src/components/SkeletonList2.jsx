import { HStack, Skeleton } from "@chakra-ui/react";

export default function SkeletonList2() {
  return (
    <HStack spacing="4">
    <Skeleton  w="170px" h="240px"/>
    <Skeleton  w="170px" h="240px"/>
    <Skeleton  w="170px" h="240px"/>
    <Skeleton  w="170px" h="240px"/>
    <Skeleton  w="170px" h="240px"/>
    <Skeleton  w="170px" h="240px"/>
    </HStack>
  )
}

