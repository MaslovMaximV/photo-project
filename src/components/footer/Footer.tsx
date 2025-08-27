import { Box, Stack, Typography, Link, Divider } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export const Footer = () => {
  return (
    <Box
      id="contacts"
      sx={(theme) => ({
        py: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderTop: "1px solid rgba(0,0,0,0.1)",
        backgroundColor: "rgba(255,255,255,0.8)",
        backdropFilter: "blur(10px)"
      })}
    >
      <Stack
        direction="row"
        spacing={{ xs: 2, sm: 3, md: 4 }}
        divider={<Divider orientation="vertical" flexItem />}
        sx={{
          alignItems: "center"
        }}
      >
        <Link 
          href="#" 
          underline="none" 
          sx={{ color: "black" }} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <InstagramIcon sx={{ color: "black" }} />
        </Link>

        <Link 
          href="#" 
          underline="none" 
          sx={{ color: "black" }} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <TelegramIcon sx={{ color: "black" }} />
        </Link>
        <Link 
          href="#" 
          underline="none" 
          sx={{ color: "black" }} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <WhatsAppIcon sx={{ color: "black" }} />
        </Link>
      </Stack>
    </Box>
  );
};
