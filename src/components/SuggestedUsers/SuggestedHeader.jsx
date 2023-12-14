import { Box, Flex, Image, Text, Link } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"

const SuggestedHeader = () => {
  return (
    <Flex
        justifyContent={"space-between"} alignItems={"center"} gap="2">
        <Image src="public/profilepic.png" w={"4rem"}/>
        <Box>
            <Text fontWeight={600} fontSize={14}>
                likeaprogrammer
            </Text>
        </Box>
        <Box>
            <Link
                display={"flex"}
                to={"/auth"}
                as={RouterLink}
                alignItems={"center"}
                gap={4}
                fontSize={14}
                _hover={{bg:"whiteAlpha.400", color:"blue.500"}}
                borderRadius={6}
                p={2}
                w={{base:10, md:"full"}}
                justifyContent={{base:"center", md:"flex-start"}}
                mt="auto">
                    <Box>Log out</Box>
            </Link>
        </Box>
    </Flex>
  )
}
export default SuggestedHeader