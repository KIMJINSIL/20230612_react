import { Box, HStack } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CarouselSlick() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box w="full" h="full">
      <Slider {...settings}>
        <HStack
          w="full"
          h="450px"
          bgImage={
            'url("https://i.ytimg.com/vi/iuk77TjvfmE/maxresdefault.jpg")'
          }
          bgSize="cover"
        ></HStack>
        <HStack
          w="full"
          h="450px"
          bgImage={
            'url("https://images.mubicdn.net/images/list/130252/cache-123718-1448816960/image-original.jpg")'
          }
          bgSize="cover"
        ></HStack>
      </Slider>
    </Box>
  );
}
