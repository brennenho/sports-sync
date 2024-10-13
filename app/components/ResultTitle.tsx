import React from "react";
import { Center, Title } from "@mantine/core";
import style from "../views/match-result/match-result.module.scss";

interface ResultTitleProps {
  text: string;
}

export const ResultTitle: React.FC<ResultTitleProps> = ({ text }) => (
  <Center>
    <Title className={style.title}>{text}</Title>
  </Center>
);