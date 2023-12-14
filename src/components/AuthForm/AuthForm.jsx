import { Box, VStack, Image, Input, Button, Flex, Text } from "@chakra-ui/react"
import { useState } from "react"
import { useNavigate } from "react-router-dom";


const AuthForm = () => {

  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  })


  const handleAuth = () => {
    if(!inputs.email || !inputs.password) {
      alert("Please fill out the information");
      return
    }
    console.log(inputs);

    navigate("/")
  }

  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5} mt={2} mb={2}>
        <VStack spacing={4}>
          <Image src="public/logo.png"/>
          <Input 
            fontSize={14} 
            placeholder="Email" 
            type="email"
            value={inputs.email}
            onChange={(e) => setInputs({...inputs,email:e.target.value})}/>
          <Input 
            fontSize={14} 
            placeholder="Password" 
            type="password" 
            value={inputs.password}
            onChange={(e) => setInputs({...inputs,password:e.target.value})}/>

          {!isLogin ? 
            <Input 
              value={inputs.confirmPassword} 
              onChange={(e) => setInputs({...inputs,confirmPassword:e.target.value})} 
              placeholder="Confirm password" 
              fontSize={14} 
              type="password"/> 
              : null}

          <Button w={"full"} fontSize={14} size={"sm"} onClick={handleAuth} >
            {isLogin ? 'Log In' : 'Sign Up'}
          </Button>

          <Flex alignItems={"center"} justifyContent={"centere"} w="full"  my={4} gap={1}>
            <Box h={"1px"} bg={"gray.400"} flex={2} />
            <Text mx={1} color={"white"} >OR</Text>
            <Box h={"1px"} bg={"gray.400"} flex={2} />
          </Flex>
          
          <Flex cursor={"pointer"} alignItems={"center"} justifyContent={"center"}>
            <Image src="public/google.png" w={5} alt="Google logo"/>
            <Text mx={2} color={"blue.500"}>Use google account</Text>
          </Flex>
        </VStack>
      </Box>

      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Box mx={2} fontSize={14}>{isLogin ? "Don't have an account?" : "Already have an account."}</Box>
          <Box cursor={"pointer"} mx={2} fontSize={14} color={"blue.500"} onClick={() => setIsLogin(!isLogin)}>{isLogin ? "Sign up" : "Log in"}</Box>
        </Flex>
      </Box>
    </>
  )
}
export default AuthForm