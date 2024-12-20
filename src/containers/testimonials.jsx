import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container, 
} from '@chakra-ui/react'


const Testimonial = (props) => {
  const { children } = props

  return <Box marginBottom={'7%'}>{children}</Box>
}

const TestimonialContent = (props) => {
  const { children } = props

  return (
    <Stack
      bg={'white'}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: 'white',
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  )
}

const TestimonialHeading = (props) => {
  const { children } = props

  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  )
}

const TestimonialText = (props) => {
  const { children } = props

  return (
    <Text
      textAlign={'center'}
      color={'gray.600'}
      fontSize={'sm'}>
      {children}
    </Text>
  )
}

const TestimonialAvatar = ({
  name,
  title,
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  )
}

export default function Testimonials() {
  return (
    <Box>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading
            color={'green.400'}
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
            >
              Testimonials
            </Heading>
            <Text color={'black'} padding={'1rem'} fontSize={{ base: 'md', lg: 'lg' }}>
              Check out what people are saying
            </Text>       
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Easy & Fun!</TestimonialHeading>
              <TestimonialText>
                This was so much fun to use! Tom built a really intuitive UI that makes Bayesian reasoning easy to understand. Highly recommended.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
              }
              name={'Alvin'}
              title={'Entrepreneur/Ex-Goole Software Engineer'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Great for Stakeholders</TestimonialHeading>
              <TestimonialText>
                A fast way of integrating Bayesian inference into my everyday decision making processes. Produces an easy to understand data point that stakeholders quickly grasp.  
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
              }
              name={'Devin Kahn'}
              title={'Product Manager at Amazon'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Super Helpful</TestimonialHeading>
              <TestimonialText>
                My team uses Decision Builder to assess how our choices might affect the business. With just a few clicks we have a new perspective to consider.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
              }
              name={'Lilly Zhou'}
              title={'Founder at Startup Academy'}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  )
}