import React from "react";
import { Button } from "@mantine/core";

interface HomeViewButtonProps {
  onClick: () => void;
}
export const HomeViewButton: React.FC<HomeViewButtonProps> = ({ onClick }) => (
  <Button onClick={onClick} variant="outline">
    Back to Home
  </Button>
);
