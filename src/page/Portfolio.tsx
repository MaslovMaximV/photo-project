
import { Box, Stack, Typography, Container, Grid } from "@mui/material";
import { ToolBar } from "../components/toolbar/ToolBar";
import { PhotoCard } from "../components/photoCard/PhotoCard";
import { buttonToolBar } from "../components/data/buttonToolBar.ts";

type PortfolioProps = {
  onNavigate?: (page: string) => void;
};

export const Portfolio = (props: PortfolioProps) => {
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
          <ToolBar button={buttonToolBar} onNavigate={props.onNavigate} />
          <Box
            sx={(theme) => ({
              flex: 1,
              display: "flex",
              flexDirection: "column",
              padding: { xs: "20px 10px 0 10px", sm: "30px 15px 0 15px", md: "40px 20px 0 20px" },
              overflow: "auto"
            })}
          >
            <Container maxWidth="lg">
              <Typography 
                variant="h2" 
                sx={{ 
                  textAlign: "center", 
                  mb: 4,
                  fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
                  fontWeight: "bold",
                  color: "#333"
                }}
              >
                Портфолио
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  textAlign: "center", 
                  mb: 6,
                  fontSize: { xs: "1rem", sm: "1.2rem", md: "1.4rem" },
                  color: "#666",
                  maxWidth: "800px",
                  mx: "auto"
                }}
              >
                Здесь представлены мои лучшие работы и проекты
              </Typography>
              
              {/* Сетка карточек */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "repeat(2, 1fr)",
                    md: "repeat(3, 1fr)"
                  },
                  gap: 3,
                  mt: 4
                }}
              >
                <PhotoCard 
                  title="Фотография"
                  description="Профессиональная фотосъемка портретов, свадеб и мероприятий"
                  cardIndex={1}
                />
                <PhotoCard 
                  title="Веб-дизайн"
                  description="Создание современных и адаптивных веб-сайтов"
                  cardIndex={2}
                />
                <PhotoCard 
                  title="Графический дизайн"
                  description="Разработка логотипов, брендинг и полиграфия"
                  cardIndex={3}
                />
                <PhotoCard 
                  title="UI/UX дизайн"
                  description="Проектирование пользовательских интерфейсов"
                  cardIndex={4}
                />
                <PhotoCard 
                  title="Видеомонтаж"
                  description="Создание рекламных роликов и видеоконтента"
                  cardIndex={5}
                />
                <PhotoCard 
                  title="3D моделирование"
                  description="Создание трехмерных моделей и визуализация"
                  cardIndex={6}
                />
              </Box>
            </Container>
          </Box>
        </Stack>
      </div>
    </>
  );
};
