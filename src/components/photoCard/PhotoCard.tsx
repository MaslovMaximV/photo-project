import { useState } from "react";
import { Typography, Paper, Box, IconButton, Stack, Grid } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { itemData } from "../data/itemData.ts";

type PaperProps = {
  title?: string;
  description?: string;
  cardIndex?: number;
};

export const PhotoCard = (props: PaperProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === itemData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? itemData.length - 1 : prevIndex - 1
    );
  };

  const currentImage = itemData[currentImageIndex];

  return (
    <Grid item xs={3}>
      <Stack direction="row" spacing={2} alignItems="center">
        <Paper
          sx={{ width: "500px", height: "100%", m: 1, p: 2 }}
          elevation={1}
        >
          <div>
            <Typography variant="h4" sx={{ mb: 2 }}>
              {props.title || `Проект ${props.cardIndex || 1}`}
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, color: "#666" }}>
              {props.description ||
                "Описание проекта и используемых технологий. Здесь можно рассказать о процессе создания и достигнутых результатах."}
            </Typography>

            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "300px",
                mt: 2,
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              }}
            >
              <img
                src={currentImage.img}
                alt={currentImage.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.3s ease",
                }}
              />

              {/* Навигационные кнопки */}
              <IconButton
                onClick={handlePrevious}
                sx={{
                  position: "absolute",
                  left: 8,
                  top: "50%",
                  transform: "translateY(-50%)",
                  backgroundColor: "rgba(255,255,255,0.8)",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.9)",
                  },
                }}
              >
                <ChevronLeft />
              </IconButton>

              <IconButton
                onClick={handleNext}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: "50%",
                  transform: "translateY(-50%)",
                  backgroundColor: "rgba(255,255,255,0.8)",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.9)",
                  },
                }}
              >
                <ChevronRight />
              </IconButton>

              {/* Индикаторы */}
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  position: "absolute",
                  bottom: 16,
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 2,
                }}
              >
                {itemData.map((_, index) => (
                  <Box
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor:
                        index === currentImageIndex
                          ? "white"
                          : "rgba(255,255,255,0.5)",
                      cursor: "pointer",
                      transition: "background-color 0.2s ease",
                      "&:hover": {
                        backgroundColor:
                          index === currentImageIndex
                            ? "white"
                            : "rgba(255,255,255,0.7)",
                      },
                    }}
                  />
                ))}
              </Stack>
            </Box>

            {/* Информация о текущем изображении */}
            <Typography
              variant="h6"
              sx={{ mt: 2, textAlign: "center", fontWeight: "bold" }}
            >
              {currentImage.title}
            </Typography>
          </div>
        </Paper>
      </Stack>
    </Grid>
  );
};
