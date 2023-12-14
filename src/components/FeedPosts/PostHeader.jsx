import { Avatar, Box, Flex, Text } from "@chakra-ui/react"

const PostHeader = ({username, avatar}) => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w="full " my={2}>
        <Flex gap={2} alignItems={"center"}>
            <Avatar src={avatar} alt={username} size={"sm"} />
            <Flex gap={2} fontWeight="bold" fontSize={12}>
                {username}
                <Box color="gray.500">- 1w</Box>
            </Flex>
        </Flex>
        <Box cursor="pointer">
            <Text 
             fontWeight="bold" 
             fontSize={12}
             color={"blue.500"}
             _hover={{
                color: "whiteAlpha.500"
             }}
             transition="0.2s  ease-in-out"
             >Unfollow</Text>
        </Box>
    </Flex>
  )
}
export default PostHeader