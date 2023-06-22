import { Box, Grid,HStack, Image, Text, VStack} from "@chakra-ui/react";
import CarouselSlick from "../components/CarouselSlick";
import CardItem from "../components/CardItem";
import TitleImageSkew from "../components/TitleImageSkew";
import { useQuery } from "react-query";
import Slider from "react-slick";
import { Link } from "react-router-dom";

export default function Home() {

  const settings = {
    dots:false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  const featuresLists = [
    {title:"스마트웹앱 3기",
     description:"영진직업전문학교 스마트웹앱 2기 리액트 수업",
     buttonText: "자세히 보기"
    },
    {title:"API 요청량 하루 3000번 리미트",
     description:"하루 API요청 횟수가 3,000회로 제한되어 있어 컨텐츠가 보이지 않을 수 있습니다.",
     buttonText: "자세히 보기"
    },
    {title:"React",
     description:"React + Typescript + Chakra UI를 활용한 마블페이지 제작",
     buttonText: "자세히 보기"
    }
  ]

  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('https://gateway.marvel.com:443/v1/public/comics?apikey=8de17f456fd399a88335f1172f37bb59').then(res =>
      res.json()
    )
  )

  console.log(data, isLoading, error)

  return (
    <>
      {/* 캐러셀*/}
      <Box>
        <CarouselSlick />
      </Box>

      {/* 특장점 */}
      <HStack w="full" justifyContent="center" py="16">
        <Grid w="7xl" templateColumns={"repeat(3,1fr)"} gap="4">
          {
            featuresLists.map((item, i)=>(
              <CardItem key={i} item={item}/>
            ))
          }
        
        </Grid>
      </HStack>

      {/* 기울어진 이미지 타이틀 */}
      <TitleImageSkew
        title="comics"
        description="“LONG SHADOW” Concludes! The battle for Wakanda comes to a head! T’Challa has owned the path his secrets paved for the Hatut Zeraze’s takeover"
        imgUrl="https://assets.vogue.in/photos/5ce412599cc0c0b8f5f9b4bf/4:3/w_1440,h_1080,c_limit/Everything-you-need-to-know-before-watching-Marvel-movies-this-year.jpg"
      />

      {/* Comics 컨텐츠 리스트 */}
      <VStack w="full" position="relative" h="400px">
        {/* 한박스 위로 올라오게 하는 범위지정 */}
        <Box position="absolute" w="7xl" h="420px" top="-16" bg="white" py="8" px="2">
          <Slider {...settings}>
            {data?.data?.results?.map((item, i)=>(
              <Link to={`/comics/${item.id}`} key={i}>
                <VStack  h="full" role="group" cursor="pointer" >
                  <Box w="170px" h="240px" 
                      _groupHover={{transform: "scale(1.1)"}} transition={"0.4s"} 
                      overflow="hidden">
                    <Image 
                        w="full" h="full" objectFit="cover"
                        src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt={`Comics ${i}`}/>
                  </Box>
                  <Text px="2" mt="2" 
                      _groupHover={{color: "red.500", fontWeight: "600"}} 
                      transition={"0.4s"}>{item.title.substr(0,36)}</Text>
                </VStack>
              </Link>
            ))}
          </Slider>
        </Box>
      </VStack>
    </>
  );
}
