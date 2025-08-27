import { ImageListItem } from "@mui/material";

export type ImageListProps = {
  id: number;
  img: string;
  title: string;
  rows: number;
  cols: number;
};

export const ImageListPhoto = (props: ImageListProps) => {
  return (
    <ImageListItem
      key={props.id}
      cols={props.cols || 1}
      rows={props.rows || 1}
      sx={{
        borderRadius: { xs: "12px", sm: "14px", md: "16px" },
        overflow: "hidden",
        position: "relative",
        boxShadow: { xs: "0 4px 12px rgba(0,0,0,0.12)", sm: "0 6px 18px rgba(0,0,0,0.12)", md: "0 8px 24px rgba(0,0,0,0.12)" },
        transition: "transform 300ms ease, box-shadow 300ms ease",
        outline: "1px solid rgba(255,255,255,0.15)",
        cursor: "pointer",
        '&:hover': {
          transform: { xs: 'translateY(-2px)', sm: 'translateY(-3px)', md: 'translateY(-4px)' },
          boxShadow: { xs: '0 8px 16px rgba(0,0,0,0.24)', sm: '0 12px 24px rgba(0,0,0,0.24)', md: '0 16px 32px rgba(0,0,0,0.24)' }
        },
        '& img': {
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'transform 400ms ease, filter 400ms ease',
          filter: 'grayscale(10%)',
          willChange: 'transform, filter'
        },
        '&:hover img': {
          transform: { xs: 'scale(1.03)', sm: 'scale(1.04)', md: 'scale(1.05)' },
          filter: 'grayscale(0%)'
        },
        '& .overlay': {
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.35) 100%)',
          opacity: 0,
          transition: 'opacity 300ms ease',
          pointerEvents: 'none'
        },
        '&:hover .overlay': {
          opacity: 1
        }
      }}
    >
      <img
        src={props.img}
        alt={props.title}
        loading="lazy"
      />
      <div className="overlay" />
    </ImageListItem>
  );
};
