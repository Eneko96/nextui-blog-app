import { Input, Text, Container, Row, Card, Spacer, Switch, useTheme } from '@nextui-org/react';
import { useTheme as useNextTheme } from 'next-themes'
import Header from './components/Header';
import './App.css'

function App() {

  return (
    <Container className='container' sm>
      <Header />
      <Spacer y={4} />
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

export default App
