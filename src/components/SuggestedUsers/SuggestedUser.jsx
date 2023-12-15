import { Avatar, Box, Button, Flex, VStack } from "@chakra-ui/react"
import { useState } from "react"

const SuggestedUser = ({name, followers, avatar }) => {
    const [isFollowed, setIsFollowed] = useState(false);
  return (
    <>
        {/* <Flex w={"full"} direction="column" gap={6} px={4}> */}
            {/* <Flex justifyContent={"space-between"} alignItems={"center"}>
                <Text fontSize={14}>Suggested for you</Text>
                <Text 
                    fontSize={14} 
                    color="blue.500" 
                    fontWeight={700}
                    alignItems={"center"}
                    gap={4}
                    _hover={{color:"whiteAlpha.500", cursor:"pointer"}}
                    borderRadius={6}
                    p={2}>See all</Text>
            </Flex> */}

            <Flex w="full" alignItems={"center"} justifyContent={"space-between"}>
                <Flex alignItems="center" gap={2}>
                    <Avatar src={avatar} name={name} size={"md"}/>
                    <VStack spacing={2} alignItems={"flex-start"}>
                        <Box fontSize={12} fontWeight="bold">
                            {name}
                        </Box>
                        <Box fontSize={11} color="gray.500">
                            {followers} followers
                        </Box>
                    </VStack>
                </Flex>
                <Button 
                    fontSize={13}
                    p={0}
                    h={"max-content"}
                    _hover={{color:"blue.500"}} 
                    bg="transparent" 
                    ml="auto"
                    onClick={() => setIsFollowed(!isFollowed)}>
                    {isFollowed ? "Unfollow" : "Follow"}
                </Button>
            </Flex>
           
        {/* </Flex> */}
    </>
  )
}
export default SuggestedUser