import { useTheme as useNextTheme } from "next-themes";
import { useTheme, Switch, Container, Button } from "@nextui-org/react"
import { useNavigate } from "react-router-dom";
import Avatar from "./Avatar/Avatar";
import usePersonalData from "../hooks/usePersonalData";

export default function Header() {
  const { isDark } = useTheme();
  const { setTheme } = useNextTheme();
  const navigate = useNavigate()
  const { has: { hasAvatar } } = usePersonalData()

  const onNavigate = (path: any) => path.target.textContent !== 'Home' ? navigate(path.target.textContent) : navigate('/')

  return (
    <Container display="flex" justify="space-around" alignItems="center" style={{ height: '3rem' }}>
      {hasAvatar && <Avatar />}
      <Button light onClick={onNavigate}>Home</Button>
      <Button light onClick={onNavigate}>Blog</Button>
      <Button light onClick={onNavigate}>Bookshelf</Button>
      <Switch
        checked={isDark}
        css={{ alignSelf: "center" }}
        onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
      />
    </Container >
  )
}