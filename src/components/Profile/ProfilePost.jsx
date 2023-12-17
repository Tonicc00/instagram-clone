import { Avatar, Box, Flex, GridItem, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react"
import {AiFillHeart} from "react-icons/ai"
import {FaComment} from "react-icons/fa"

const ProfilePost = ({img}) => {

  const { isOpen, onOpen, onClose } = useDisclosure();


  return (
    <>
      <GridItem
        cursor="pointer"
        borderRadius={4}
        overflow="hidden"
        border="1px solid"
        borderColor="whiteAlpha.300"
        position="relative"
        aspectRatio={1/1}
        onClick={onOpen}
        >
          <Flex
            opacity={0}
            _hover={{opacity:1}}
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bg={"blackAlpha.700"}
            transition={"all 0.3s ease"}
            zIndex={1}
            justifyContent={"center"}
            >
              <Flex 
                alignItems={"center"} justifyContent={"center"} gap={50}>
                <Flex  alignItems={"center"}>
                  <AiFillHeart size={20} />
                  <Text fontWeight={"bold"} ml={2}>7</Text>
                </Flex>
                <Flex alignItems={"center"}>
                  <FaComment size={20} />
                  <Text fontWeight={"bold"} ml={2}>7</Text>
                </Flex>
              </Flex>
          </Flex>

          <Image src={img} alt="profile post" h={"100%"} w={"100%"} objectFit={"cover"}/>

      </GridItem>

      <Modal isOpen={isOpen} onClose={onClose}
        isCentered={true}
        size={{base:"3xl", md:"5xl"}}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody bg="black" pb={5}>
            <Flex gap="4" w={{base:"90%", sm:"70%", md:"full"}} mx="auto">
              <Box 
                borderRadius={4}
                overflow="hidden"
                border="1px solid"
                borderColor="whiteALpha.300"
                flex="1.5">
                <Image src={img} alt="profile post" />
              </Box>
              <Flex flex={1} flexDir="column" px={10} display={{base:"none",md:"flex"}}>
                <Flex>
                  <Avatar />
                  <Text>

                  </Text>

                </Flex>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
export default ProfilePost