import { Avatar as AvatarUI, Grid } from "@nextui-org/react";

export default function Avatar() {
  return (
    <Grid.Container gap={2}>
      <Grid>
        <AvatarUI
          squared
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      </Grid>
      <Grid>
        <AvatarUI
          squared
          text="Junior" />
      </Grid>
    </Grid.Container>
  );
}
