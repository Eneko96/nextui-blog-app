import { useTheme as useNextTheme } from "next-themes";
import { useTheme, Text, Switch, Container, StyledCardHeader, Button } from "@nextui-org/react";

export default function Header() {
  const { isDark, type, theme } = useTheme();
  const { setTheme } = useNextTheme();
  console.log(theme?.colors.accents1)
  return (
    <Container display="flex" justify="space-around" alignContent="center" style={{ height: '3rem' }}>
      <Button light>Home</Button>
      <Button light>Blog</Button>
      <Button light>Bookshelf</Button>
      <Switch
        checked={isDark}
        css={{ alignSelf: "center" }}
        onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
      />
    </Container >
  )
}