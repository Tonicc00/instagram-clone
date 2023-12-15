import { Box, Flex, Text, VStack, Link } from "@chakra-ui/react"
import SuggestedHeader from "./SuggestedHeader"
import SuggestedUser from "./SuggestedUser"

const SuggestedUsers = () => {
  return (
    <>
        <VStack py={20} px={2} gap={2}>
            <SuggestedHeader />

            <Flex w="full" justifyContent={"space-between"} alignItems={"center"}>
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

            <SuggestedUser name="Dan Abrahamov" followers={1392} avatar={'https://bit.ly/dan-abramov'}/>
            <SuggestedUser name='Kola Tioluwani' followers={1235} avatar={'https://bit.ly/tioluwani-kolawole'} />
            <SuggestedUser name='Prosper Otemuyiwa' followers={4521} avatar={'https://bit.ly/prosper-baba'} />

            <Box w="full" textAlign={"center"}> 
            Built by {" "}
            <Link href="https://github.com/Tonicc00" target="_blank" color="blue.500" fontSize={14}> Toni</Link>
            </Box>

        </VStack>
    </>
  )
}
export default SuggestedUsers