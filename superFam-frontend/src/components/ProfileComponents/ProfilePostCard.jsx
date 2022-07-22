import {
  Box,
  Center,
  useColorModeValue,
  Text,
  Stack,
  Image,
  Flex,
  HStack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import React, { useState } from "react";

import PostCardHeart from "../HomeComponents/PostCardHeart";
import shareIcon from "../../assets/instagram-share.svg";
import commentIcon from "../../assets/instagram-comment.svg";

export default function ProfilePostCard() {
  const [isClick, setClick] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        p={".4rem"}
        bg={"linear-gradient(145deg, #f0f0f0, #dfdfdf)"}
        // boxShadow=" rgba(136, 165, 191, 0) 4px 2px 16px 0px, rgba(189, 195, 220, 0.646) -4px -0px 16px 6px"
        boxShadow=" 10px 10px 20px #b0afaf, -10px -10px 16px #ffffff"
        pos={"relative"}
        //
        // w={["20rem","24rem","24rem","24rem","24rem"]}
        w="100%"
        zIndex={1}
        borderRadius="20px"
      >
        <Box
          onClick={onOpen}
          borderRadius="16px"
          cursor={"pointer"}
          pos={"relative"}
          height={"360px"}
          overflow="hidden"
        >
          <Image
          transition= "all 0.4s ease"
          _hover={{
            transition: "all 0.4s ease",
            transform:"scale(1.1)"
          }}
            height={360}
            width={"full"}
            objectFit={"cover"}
            src="https://images.unsplash.com/photo-1653760538719-4721be6ad863?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80"
          />
        </Box>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size={["sm","md","2xl","4xl","6xl"]}>
        <ModalOverlay
          bg="#0000007f"
          backdropFilter="blur(10px) hue-rotate(10deg)"
        />
        <ModalContent borderRadius="12px" mt="7rem" overflow="hidden">
          <ModalCloseButton color="black" fontSize="15px" />
          <ModalBody p="0">
            <Flex h={["16rem","20rem","25rem","35rem"]} w="full" direction="row" align="start" justify="space-between">
              <Flex   h="100%" w="50%" align="center">
                <Image
                  height={["full"]}
                  width={["12rem","20rem","30rem","40rem","50rem"]}
                  objectFit={"cover"}
                  src="https://images.unsplash.com/photo-1653760538719-4721be6ad863?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80"
                  
                />
              </Flex>
              <Box  w="50%" >
                <Flex
                  w="80%"
                  p="6"
                  pb="0"
                  overflow="hidden"
                  justify="start"
                  align="center"
                  zIndex={1}
                >
                  <Flex  align="center" justify="start" mr="1rem">
                    <Image
                       width={["1.5rem","1.5rem","2rem","2.5rem","2.6rem"]}
                      h={["1.5rem","1.5rem","2rem","2.5rem","2.6rem"]}
                      cursor={"pointer"}
                      boxShadow="rgba(136, 165, 191, 0.48) 2px 2px 6px 0px, rgba(255, 255, 255, 0.8) -2px -2px 6px 0px"
                      borderRadius="50%"
                      src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                    />
                  </Flex>
                  <Text
                    // color={"gray.700"}
                    color="#32526a"
                    fontSize={"15px"}
                    fontWeight={"600"}
                    noOfLines={1}
                    cursor={"pointer"}
                    className="userPostFont"
                    w={["14","20","30","40","60"]}
                  >
                    Sudhir Chavan fsfsfsfafsdfasdfdsffsfsfsfsafsadfdsafdsasaffsf
                  </Text>
                </Flex>
                <Stack p="6" >
                  <Flex justify={"space-between"} align="center" py="2" width={["0","40rem","48rem","60rem","68rem"]}>
                    <Flex className="leftLikeDiv" align="center" py="1" width={["0","6rem","14rem","22rem","30rem"]}>
                      <PostCardHeart />
                      <Image w="1.2rem" src={commentIcon} />
                      <Image mx="8px" w="1.2rem" mt="1.5px" src={shareIcon} />
                    </Flex>
                    <Text color={"gray.600"}  fontSize={["0","12px"]} cursor="pointer" width={["0","32rem","34rem","40rem","40rem"]}>
                      comments
                    </Text>
                  </Flex>
                  <HStack align={"end"}  >
                    <Text
                      fontWeight={500}
                      fontSize={[showMore ? "11px" : "12px",showMore ? "11px" : "12px",showMore ? "12px" : "13px",showMore ? "13px" : "14px"]}
                      noOfLines={[showMore ? "6" : "4",showMore ? "9" : "4",showMore ? "12" : "5",showMore ? "20" : "6",showMore ? "20" : "7"]}
                      color={"gray.600"}
                      // py="10px"
                     
                    >
                      There are 1052 different Google Font families available for
                      free (at the time of writing this article). That’s a lot of
                      choices! So it’s no wonder you need help finding that needle
                      in a haystack with a list of the best Google Fonts. We’ve
                      got it for you, and then we’ll also share some best
                      practices for using Google Fonts in WordPress. Choosing a
                      font is more than just an aesthetic choice — it can have a
                      substantial effect on your site’s bounce rates and
                      conversion rates, especially if you choose a font that’s
                      hard to read. Therefore, it pays to take a little time to
                      pick the perfect Google Fonts family for your website,
                      rather than using the first font that you come across. If
                      you need even more fonts, look at our post on 50+ Modern
                      Fonts to Use on Your WordPress Website.
                      There are 1052 different Google Font families available for
                      free (at the time of writing this article). That’s a lot of
                      choices! So it’s no wonder you need help finding that needle
                      in a haystack with a list of the best Google Fonts.
                      There are 1052 different Google Font families available for
                      free (at the time of writing this article). That’s a lot of
                      choices! So it’s no wonder you need help finding that needle
                      in a haystack with a list of the best Google Fonts. We’ve
                      got it for you, and then we’ll also share some best
                      practices for using Google Fonts in WordPress. Choosing a
                      font is more than just an aesthetic choice — it can have a
                      substantial effect on your site’s bounce rates and
                      conversion rates, especially if you choose a font that’s
                      hard to read. Therefore, it pays to take a little time to
                      pick the perfect Google Fonts family for your website,
                      rather than using the first font that you come across. If
                      you need even more fonts, look at our post on 50+ Modern
                      Fonts to Use on Your WordPress Website.
                      There are 1052 different Google Font families available for
                      free (at the time of writing this article). That’s a lot of
                      choices! So it’s no wonder you need help finding that needle
                      in a haystack with a list of the best Google Fonts.
                    </Text>
                    {!showMore && (
                      <Text
                        color={"gray.500"}
                        fontSize="12px"
                        cursor="pointer"
                        onClick={() => setShowMore(!showMore)}
                      >
                        more...
                      </Text>
                    )}
                  </HStack>
                </Stack>
              </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}