import { Stack, Title } from "@mantine/core";
import React from "react";

import style from "../home/home.module.scss";

export const AboutView: React.FC = () => {
  return (
    <div>
      <Stack justify="flex-start" align="center" gap="md">
        <Title className={style.title}>Sports Sync</Title>
      </Stack>
    </div>
  );
};
