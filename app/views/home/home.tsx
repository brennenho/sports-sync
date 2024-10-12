import { Center, Stack, Title } from "@mantine/core";
import React from "react";

import style from "./home.module.scss";

import { WebcamCapture } from "../../components";

export const HomeView: React.FC = () => {
  return (
    <div>
      <Stack>
        <Center>
          <Title className={style.title}>Sports Sync</Title>
          <WebcamCapture />
        </Center>
      </Stack>
    </div>
  );
};
