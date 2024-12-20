import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Box,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'

export default function HowItWorks() {
  return (
    <Box marginBottom={'7%'}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
      <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
        <Stack spacing={6} w={'full'} maxW={'lg'} marginBottom={'5%'}>
          <Text
            as={'span'}
            position={'relative'}
            _after={{
              content: "''",
              width: 'full',
              height: useBreakpointValue({ base: '20%', md: '50%' }),
              position: 'absolute',
              bottom: -1.45,
              left: 0,
              bg: 'green.400',
              zIndex: -1,
            }}>
            How It Works
          </Text>
          <Text color={'green.400'} as={'span'} marginTop={'2%'}>
            Bayesian Thinking
          </Text>
        </Stack>
      </Heading>
      </Flex>
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Text fontWeight="bold" marginTop='3%' fontSize={{ base: 'md', xl: 'xl' }}as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '50%' }),
                  position: 'absolute',
                  bottom: -1.45,
                  left: 0,
                  bg: 'green.400',
                  zIndex: -1,
                }}>
              Theorem
            </Text>
            <Text marginBottom='5%' fontSize={{ base: 'md', lg: 'lg' }}>
              A mathematical formula used to determine the likelihood of an 
              event occurring based on prior knowledge of related conditions.
            </Text>
            <Image
              height="110px"
              src="src/assets/theorem_1.png"
            />
            <Text fontWeight="bold" marginTop='3%' fontSize={{ base: 'md', xl: 'xl' }}as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '50%' }),
                  position: 'absolute',
                  bottom: -1.45,
                  left: 0,
                  bg: 'green.400',
                  zIndex: -1,
                }}>
              Inference
            </Text>
            <Text marginBottom='5%' fontSize={{ base: 'md', lg: 'lg' }}>
              To update a belief or hypothesis as new evidence is acquired. 
              This is essentially the process of reasoning and learning from 
              data via a Bayesian framework.
            </Text>
            <Image
              height="110px"
              src="src/assets/theorem_2.png"
            />
            <Text fontWeight="bold" marginTop='3%' fontSize={{ base: 'md', xl: 'xl' }}as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '50%' }),
                  position: 'absolute',
                  bottom: -1.45,
                  left: 0,
                  bg: 'green.400',
                  zIndex: -1,
                }}>
              Execution
            </Text>
            <Text marginBottom='5%' fontSize={{ base: 'md', lg: 'lg' }}>
              Predicting the likelihood of a customer action (buying a sepecific product) 
              given certain known data (click-through-rate, attribution models, etc.).
            </Text>
            <Image
              height="110px"
              src="src/assets/theorem_3.png"
            />
            <Text marginBottom='5%' fontSize={{ base: 'md', lg: 'lg' }}>
              There is a 25% chance a customer will buy your product after clicking the ad.
            </Text>
          </Stack>
        </Flex>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <video hieght='300px' autoPlay loop muted playsInline width="60%" src={'src/assets/3_vid.mp4'} />
          <video hieght='300px' autoPlay loop muted playsInline width="60%" src={'src/assets/1_vid.mp4'} />
          <video hieght='300px' autoPlay loop muted playsInline width="60%" src={'src/assets/2_vid.mp4'} />
        </Stack>
      </Stack>
      <Stack direction={{ base: 'column', md: 'row' }} justifyContent={'center'} spacing={4}>
        <Button
          colorScheme={'green'}
          bg={'green.400'}
          rounded={'full'}
          px={12}
          fontSize={{ base: 'lg', lg: 'lg'}}
          _hover={{
            bg: 'green.500',
          }}>
            Build A Prediction
        </Button>
      </Stack>
    </Box>
  )
}