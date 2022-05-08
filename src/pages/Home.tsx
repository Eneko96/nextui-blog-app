import { Container, Input, Card, Row, Text, Spacer } from "@nextui-org/react"
import Header from "../components/Header"

export default function Home() {

  return (
    <Container className='container' sm>
      <Card color="primary">
        <Row justify="center" align="center">
          <Text h1 color="white" css={{ m: 0 }}>
            Let's Introduce Yourself
          </Text>
        </Row>
        <Spacer y={3} />
        <Row css={{ gap: '1rem' }} justify='center'>
          <Input placeholder='Kiwi Milan' clearable label='Your name' />
          <Input type='email' placeholder='example@me.com' clearable label='Your email' />
          <Input placeholder='Better short...' clearable label='Why are you here?' />
        </Row>
      </Card>
    </Container>
  )
}