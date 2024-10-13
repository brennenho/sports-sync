import React from "react";
import { Button } from "@mantine/core";

interface MatchViewButtonProps {
  onClick: () => void;
}
export const MatchViewButton: React.FC<MatchViewButtonProps> = ({ onClick }) => (
  <Button onClick={onClick} variant="outline">
    Find your match!
  </Button>
);