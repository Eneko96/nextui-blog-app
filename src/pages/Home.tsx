import { Container, Input, Card, Row, Text, Spacer, Button } from "@nextui-org/react"
import { useState } from "react"
import Header from "../components/Header"

export default function Home() {
  const [welcomeData, setWelcomeData] = useState({})
  const [conntinue, setContinue] = useState(false)

  const handleInputs = (e: React.ChangeEvent<HTMLFormElement>) => {
    setWelcomeData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
    const _diff = Object.keys(welcomeData).filter(key => key === e.target.name)
    console.log(_diff, welcomeData)
    if (Object.keys(welcomeData).length === 2 && _diff.length === 0) setContinue(true)
  }

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
          <form onChange={handleInputs}>
            <Input name='name' placeholder='Kiwi Milan' clearable label='Your name' />
            <Input name='email' type='email' placeholder='example@me.com' clearable label='Your email' />
            <Input name='description' placeholder='Better short...' clearable label='Why are you here?' />
          </form>
        </Row>
        {conntinue && <Button light>Continue</Button>}
      </Card>
    </Container>
  )
}