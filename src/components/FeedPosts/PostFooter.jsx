import { Box, Button, Flex, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react"
import { CommentLogo, NotificationsLogo, UnlikeLogo } from "../../assets/constants"
import { useState } from "react"

const PostFooter = ({username}) => {

    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(1000);

    const handleClick =() => {
        if (liked){
            setLiked(false);
            setLikes(likes - 1);
        } else {
            setLiked(true);
            setLikes(likes + 1);
        }
    }

  return (
    <Box my={10}>
        <Flex gap={4} alignItems={"ceter"} w="full" pt={0} mb={2} mt={4}>
            <Box cursor={"pointer"} fontSize={18} onClick={handleClick}>
                {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
            </Box>
            <Box cursor="pointer" fontSize={18}>
                <CommentLogo />
            </Box>
        </Flex>
        <Text fontWeight={600} size={"sm"}>
            {likes} likes
        </Text>
        <Text  fontWeight={700} size={"sm"}>
        {username}{" "}
            <Text as="pan" fontWeight={400}>Feeling good</Text>
        </Text>
        <Text color="gray" size={"sm"}>
            view all 100 comments
        </Text>

        <Flex alignItems="center" gap={2} justifyContent={"space-between"} w="full">
            <InputGroup>
            <Input fontSIze={14} placeholder="Add a comment..." color={"gray.400"} variant="flushed" />
            <InputRightElement>
                <Button
                    fontSize={14}
                    color={"blue.500"}
                    cursor="pointer"
                    fontWeight={600}
                    _hover={{ color:"white" }}
                    bg="transparent">
                    Post
                </Button>
            </InputRightElement>
            </InputGroup>
        </Flex>
    </Box>
  )
}
export default PostFooter