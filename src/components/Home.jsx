import React from 'react'
import { Box , Text ,Image,Input,Button, Flex} from '@chakra-ui/react'
import "./home.css"

const Home = () => {
  return (
   <Box maxW='1466'  height= "993px"
   left="0px"
   top= "-3px">
     <Box className='second_box'>
      <Box className='vector_grp'>
      </Box>
      <Box className='vector5'></Box>
    
   <Box className='datify'>Datify</Box>
   <Box className='home'>Home</Box>
   <Box className='members'>Members</Box>
   <Box className='blog'>Blog</Box>
   <Box className='privacy'>Privacy</Box>
   <Box className='contact'>Contact</Box>
   <Box className='login'>Login</Box>
   <Box className='register'>
    <Text color="#F4EBE6" marginTop="12px">Register</Text>
   </Box>
   <Box className='imgbig'> 
   <Image src="https://www.linkpicture.com/q/image-1_83.png" alt="" />
   </Box>
   <Box className='left'>
    <Text>Get noticed for <span style={{color:"rgba(237, 155, 89, 1)"}}>who</span> you are, <span style={{color:"rgba(237, 155, 89, 1)"}}>not what</span> <br></br>you look like.</Text>
   </Box>
   <Box className='text'>
    <Text>You’re more than just a photo. You have stories to tell, and passions to share, and things to talk about that are more interesting than the weather. Because you deserve what dating deserves: better.</Text>
   </Box>
   <Box className='inp' display="flex">
   
   <Input placeholder='Enter your email' />
   <Button>Get Started</Button>
   </Box>
   
   <Flex className='threebox'>
    <Box className='boxthree'>
      <Text className='threetext' color="#1A1D32">15k+</Text>
    </Box>
    <Box  className='boxthree'>
    <Text className='threetext' color="#B35E21">1,456</Text>
    </Box>
    <Box  className='boxthree'>
    <Text className='threetext' color="#1A1D32">1M+</Text>
    </Box>
   </Flex>
     </Box>
   </Box>
  )
}

export default Home