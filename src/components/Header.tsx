import { useTheme as useNextTheme } from "next-themes";
import { useTheme, Text, Switch, Container, StyledCardHeader } from "@nextui-org/react";

export default function Header() {
  const { isDark, type, theme } = useTheme();
  const { setTheme } = useNextTheme();
  console.log(theme?.colors.accents1)
  return (
    <Container display="flex" alignContent="center" style={{ height: '3rem' }}>
      <Text>This is Header</Text>
      <Switch
        checked={isDark}
        onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
      />
    </Container >
  )
}