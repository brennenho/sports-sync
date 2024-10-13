import React from "react";
import { Button } from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";

interface HomeViewButtonProps {
  onClick: () => void;
}
export const HomeViewButton: React.FC<HomeViewButtonProps> = ({ onClick }) => (
  <div className="button-wrapper">
    <Button onClick={onClick}
      leftSection={<IconExternalLink size={20}/>}              
      variant="light"
      color="teal"
    >
      Back to Home
    </Button>
  </div>
);
