import { Flex, Text, Box } from "@chakra-ui/react"

const SuggestedUser = () => {
  return (
    <>
        <Flex w={"full"} direction="column" gap={6} px={4}>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
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
            </Flex>

            <Flex direction={"column"} gap="4">
                <Box>user</Box>
                <Box>user</Box>
                <Box>user</Box>
            </Flex>
            
            <Flex justifyContent={"center"} gap="4" fontSize={12}>
                Built by <Text color="blue.500" fontWeight={400}>Toni</Text>
            </Flex>
        </Flex>
    </>
  )
}
export default SuggestedUser