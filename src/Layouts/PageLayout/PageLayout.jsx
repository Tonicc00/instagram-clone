import { Box, Flex } from "@chakra-ui/react"
import SIdebar from "../../components/AuthForm/Sidebar/SIdebar"
import { useLocation } from "react-router-dom"


const PageLayout = ({children}) => {
    const {pathname} = useLocation();
  return (
    <Flex>
        {/* Sidebar */}
        {pathname !== "/auth" ?  
        <Box border={"1px solid gray"} flex={1} w={{base: "70px", md:"240px"}}>
            <SIdebar />
        </Box>
        : null}

        {/* Content */}
        <Box w={{base:"calc(100% - 70px)", md:"calc(100% - 240px)"}}>
            {children}
        </Box>
    </Flex>
  )
}
export default PageLayout
