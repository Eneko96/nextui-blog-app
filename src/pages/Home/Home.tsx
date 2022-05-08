import { Container, Input, Card, Row, Text, Spacer, Button, Textarea } from "@nextui-org/react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import './styles.css'

export default function Home() {
  const navigate = useNavigate()
  const [welcomeData, setWelcomeData] = useState({})
  const [conntinue, setContinue] = useState(false)

  const handleInputs = (e: React.ChangeEvent<HTMLFormElement>) => {
    setWelcomeData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
    const _diff = Object.keys(welcomeData).filter(key => key === e.target.name)
    if (Object.keys(welcomeData).length === 2 && _diff.length === 0) setContinue(true)
  }

  const handleSubmit = () => {
    // create a hash of being welcomed and save it on localstorage
    localStorage.setItem('welcomed', 'true')
    navigate('Blog')
  }

  return (
    <Container className='container' sm>
      <Card >
        <Row justify="center" align="center">
          <Text h1 color="white" css={{ m: 0 }}>
            Let's Introduce Yourself
          </Text>
        </Row>
        <Spacer y={3} />
        <form onChange={handleInputs}>
          <Row className="row-style">
            <Input name='name' onClearClick={() => setContinue(false)} placeholder='Kiwi Milan' clearable label='Your name' />
            <Input name='email' onClearClick={() => setContinue(false)} type='email' placeholder='example@me.com' clearable label='Your email' />
          </Row>
          <Spacer y={3} />
          <Row className="row-style">
            <Textarea
              width="30rem"
              bordered
              labelPlaceholder="Bordered Textarea"
              name='description'
              label='Why are you here?'
            />
          </Row>
          <Button
            type="submit"
            onClick={handleSubmit}
            color="gradient"
            className="button-test"
            css={{ display: `${conntinue ? 'block' : 'none'}` }}
          >
            Continue
          </Button>
        </form>
      </Card>
    </Container>
  )
}