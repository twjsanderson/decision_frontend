import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
} from '@chakra-ui/react'

export default function Hero() {
  return (
    <Box marginBottom={'5%'}>
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            A Decision Making Tool<br />
            <Text as={'span'} color={'green.400'}>
                For Fast Moving Teams
            </Text>
          </Heading>
          <Text color={'black'} padding={'1rem'} fontSize={{ base: 'md', lg: 'lg' }}>
            Make smarter decisions about your company's growth with 
            the power of Bayesian thinking. Challenge assumptions, 
            validate processes and make high-impact predictions to scale 
            your business today.
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Button
              colorScheme={'green'}
              bg={'green.400'}
              rounded={'full'}
              px={12}
              fontSize={{ base: 'lg', lg: 'lg'}}
              _hover={{
                bg: 'green.500',
              }}>
                Get Started
            </Button>
            <Button 
              variant={'outline'} 
              rounded={'full'} 
              px={12} 
              fontSize={{ base: 'lg', lg: 'lg'}}
            >
                Find Pricing
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
