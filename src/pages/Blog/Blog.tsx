import { Container, Grid, Text, Card } from "@nextui-org/react";

export default function Blog() {

  const MockGrid = ({ text }: { text: string }) => (
    <Card>
      <Text h6 size={15} color="white" css={{ mt: 0 }}>{text}</Text>
    </Card>
  )

  return (
    <Grid.Container gap={2} justify='center'>
      <Grid xs={4} css={{ h: '$24' }}>
        <MockGrid text="1 de 3" />
      </Grid>
      <Grid xs={4}>
        <MockGrid text="2 de 3" />
      </Grid>
      <Grid xs={4}>
        <MockGrid text="3 de 3" />
      </Grid>
    </Grid.Container>
  )
}