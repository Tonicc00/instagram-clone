import { Avatar, AvatarGroup, Button, Flex, Text, VStack } from "@chakra-ui/react"

const ProfileHeader = () => {
  return (
    <Flex direction={{base:"column",sm:"row"}} gap={{base:4,sm:10}} py={10}>
        <AvatarGroup size={{base:"xl", md:"2xl"}} justifySelf={"center"} alignSelf="flex-start" mx="auto">
            <Avatar src="profilepic.png" alt="Profile picture logo" name="Some Programmer"/>
        </AvatarGroup>
        <VStack alignItems={"start"} gap={2} mx="auto" flex={1}>
            <Flex
              gap={4}
              direction={{base:"column", sm:"row"}}
              justifyContent={{base:"center", sm:"flex-start"}}
              alignItems="center"
              w="full">
              <Text fontSize={{base:"sm", md:"lg"}}>
                someProgrammer_
              </Text>
              <Flex>
                <Button color="black" bg="white" _hover={{bg:"whiteAlpha.700"}} size={{base:"xs", md:"sm"}}>
                  Edit Profile
                </Button>
              </Flex>
            </Flex>

            <Flex gap={{base:2, sm:4}} alignItems={"center"}>
              <Text fontSize={{base:"xs",md:"sm"}}><Text as="span" fontWeight={"bold"} mr={1}>4 </Text>posts</Text>
              <Text fontSize={{base:"xs",md:"sm"}}><Text as="span" fontWeight={"bold"} mr={1}>159 </Text>followers</Text>
              <Text fontSize={{base:"xs",md:"sm"}}><Text as="span" fontWeight={"bold"} mr={1}>128 </Text>following</Text>
            </Flex>

            <Flex alignItems={"center"} gap={4}>
              <Text fontSize={"sm"} fontWeight={"bold"}>Some Programmer</Text>
            </Flex>
            <Text fontSize={"sm"}>Programming tutorials to help you learn programming</Text>
        </VStack>
    </Flex>
  )
}
export default ProfileHeader