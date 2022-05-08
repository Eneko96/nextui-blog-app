import { Avatar as AvatarUI, Grid } from "@nextui-org/react";
import usePersonalData from "../../hooks/usePersonalData";

export default function Avatar() {
  const { avatar } = usePersonalData()
  return (
    <AvatarUI
      squared
      src={avatar.url}
    />
  );
}
