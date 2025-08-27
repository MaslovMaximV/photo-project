import { Toolbar, Stack, Avatar, Link } from "@mui/material";
import { Button } from "../button/Button";
import type { ButtonToolBar } from "../data/buttonToolBar";

type ToolBarProps = {
  button: ButtonToolBar[];
  onNavigate?: (page: string) => void;
};

export const ToolBar = (props: ToolBarProps) => {
  const name = "John Doe";
  return (
    <Toolbar sx={{ display: "flex", flexWrap: { xs: "wrap", sm: "nowrap" } }}>
      <Link 
        href="#" 
        underline="none"
        onClick={(e) => {
          e.preventDefault();
          if (props.onNavigate) {
            props.onNavigate("main");
          }
        }}
        sx={{ cursor: "pointer" }}
      >
        <Avatar 
          sx={{
            width: { xs: 40, sm: 50, md: 60 },
            height: { xs: 40, sm: 50, md: 60 },
            transition: "transform 0.2s ease",
            "&:hover": {
              transform: "scale(1.05)"
            }
          }}
        >
          {"Tanya"}
        </Avatar>
      </Link>
      <Stack
        direction={"row"}
        spacing={{ xs: 2, sm: 4, md: 8 }}
        sx={{
          marginLeft: "auto",
          fontSize: { xs: "14px", sm: "16px", md: "20px" },
          flexWrap: { xs: "wrap", sm: "nowrap" },
        }}
      >
        {props.button.map((b) => {
          return (
            <Button key={b.id} text={b.name} onNavigate={props.onNavigate} />
          );
        })}
      </Stack>
    </Toolbar>
  );
};
