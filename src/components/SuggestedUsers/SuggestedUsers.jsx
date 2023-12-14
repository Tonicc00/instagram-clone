import { Flex } from "@chakra-ui/react"
import SuggestedHeader from "./SuggestedHeader"
import SuggestedUser from "./SuggestedUser"

const SuggestedUsers = () => {
  return (
    <>
        <Flex 
            flexDirection={"column"} 
            justifyContent={"flex-start"}
            alignItems={"center"}
            h={"auto"}
            gap={4} 
            my={4}
            py={20}>
            <SuggestedHeader />
            <SuggestedUser />
        </Flex>
    </>
  )
}
export default SuggestedUsers