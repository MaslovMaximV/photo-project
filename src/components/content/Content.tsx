import "./content.css";
import tanyaImage from "../../assets/1.webp";

import { ImageList, ImageListItem, Typography } from "@mui/material";
import { ImageListPhoto, type ImageListProps } from "../imagelist/ImageListPhoto";
import { About } from "../about/About";


type ContentProps = {
  itemData: ImageListProps[]
};

export const Content = (props: ContentProps) => {
  return (
    <div
      style={{
        backgroundImage: `url(${tanyaImage})`,
        backgroundSize: "cover",
        backgroundPosition: "25% 25%",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "70%",
        position: "relative"
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "200px",
          left: 0,
          right: "60%",
          zIndex: 2
        }}
      >
        <About/>
      </div>
      <ImageList
        sx={{ 
          width: { xs: "100%", sm: 400, md: 500 }, 
          height: { xs: 400, sm: 480, md: 560 }, 
          borderRadius: { xs: "20px", sm: "25px", md: "30px" }, 
          position: "absolute", 
          zIndex: 1, 
          right: { xs: "10px", sm: "20px", md: "40px" }, 
          top: { xs: "50px", sm: "80px", md: "100px" },
          overflow: 'hidden',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          '&::-webkit-scrollbar': { display: 'none' }
        }}
        variant="quilted"
        cols={4}
        rowHeight={121}
      >
        {props.itemData.map((item) => {
        return (
          <ImageListPhoto
            key={item.id}
            id={item.id} 
            img={item.img}
            title={item.title}
            rows={item.rows}
            cols={item.cols}          />
        );
      })}
      </ImageList>
      
    </div>
  );
};
