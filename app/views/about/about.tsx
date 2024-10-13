import { Blockquote, Button, Group, Stack, Title } from "@mantine/core";
import React from "react";

import { IconBrandGithub, IconInfoCircle } from "@tabler/icons-react";
import style from "../home/home.module.scss";

export const AboutView: React.FC = () => {
  const icon = <IconInfoCircle />;
  return (
    <div>
      <Stack justify="flex-start" align="center" gap="md">
        <Group className={style.title} gap="xs">
          <Title c="teal">Sports</Title>
          <Title>Sync</Title>
        </Group>
        <Blockquote
          color="teal"
          icon={icon}
          mt="lg"
          radius="md"
          style={{ width: "60%" }}
        >
          SportsSync is an innovative new interactive experience for sports
          fans. Using AI and computer vision, SportsSync compares your swing to
          professionals.
        </Blockquote>
        <a
          href="https://github.com/brennenho/sports-sync"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            leftSection={<IconBrandGithub size={20} />}
            variant="light"
            color="teal"
            size="md"
            radius="md"
          >
            View Source Code
          </Button>
        </a>
      </Stack>
    </div>
  );
};
