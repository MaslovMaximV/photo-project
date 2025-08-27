import { useState } from "react";
import { Box, Stack, Typography, Link, Divider } from "@mui/material";
import { ToolBar } from "../components/toolbar/ToolBar";
import { Content } from "../components/content/Content";
import { Portfolio } from "./Portfolio";
import { itemData } from "../components/data/itemData.ts";
import { buttonToolBar } from "../components/data/buttonToolBar.ts";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

type MainPageProps = {};

export const MainPage = (props: MainPageProps) => {
  const [currentPage, setCurrentPage] = useState("main");

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "portfolio":
        return <Portfolio onNavigate={handleNavigate} />;
      case "main":
      default:
        return (
          <>
            <ToolBar button={buttonToolBar} onNavigate={handleNavigate} />
            <Box
              id="about"
              sx={(theme) => ({
                flex: 1,
                display: "flex",
                flexDirection: "column",
                padding: { xs: "20px 10px 0 10px", sm: "30px 15px 0 15px", md: "40px 20px 0 20px" },
              })}
            >
              <Content itemData={itemData} />
            </Box>
            <Box
              id="contacts"
              sx={(theme) => ({
                py: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
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
                <Link href="#" underline="none" sx={{ color: "black" }} target="_blank" rel="noopener noreferrer">
                  <InstagramIcon sx={{ color: "black" }} />
                </Link>

                <Link href="#" underline="none" sx={{ color: "black" }} target="_blank" rel="noopener noreferrer">
                  <TelegramIcon sx={{ color: "black" }} />
                </Link>
                <Link href="#" underline="none" sx={{ color: "black" }} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon sx={{ color: "black" }} />
                </Link>
              </Stack>
            </Box>
          </>
        );
    }
  };

  return (
    <>
      <div className="back">
        <Stack
          direction="column"
          sx={(theme) => ({
            width: "100%",
            height: "100vh",
            background: "white",
            borderRadius: {
              xs: "20px 10px / 10px 20px",
              sm: "30px 15px / 15px 30px", 
              md: "40px 20px / 20px 40px"
            },
            paddingTop: { xs: "10px", sm: "15px", md: "20px" },
            marginTop: { xs: "5px", sm: "8px", md: "10px" },
            marginBottom: { xs: "5px", sm: "8px", md: "10px" },
            marginLeft: { xs: "5px", sm: "8px", md: "10px" },
            marginRight: { xs: "5px", sm: "8px", md: "10px" },
            display: "flex",
          })}
        >
          {renderPage()}
        </Stack>
      </div>
    </>
  );
};
