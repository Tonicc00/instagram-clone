import { Avatar, AvatarGroup, Flex, VStack } from "@chakra-ui/react"

const ProfileHeader = () => {
  return (
    <Flex direction={{base:"column",sm:"row"}} gap={{base:4,sm:10}} py={10}>
        <AvatarGroup size={{base:"xl", md:"2xl"}} justifySelf={"center"} alignSelf="flex-start" mx="auto">
            <Avatar src="profilepic.png" alt="Profile picture logo" name="Some Programmer"/>
        </AvatarGroup>
        <VStack>
            
        </VStack>
    </Flex>
  )
}
export default ProfileHeader