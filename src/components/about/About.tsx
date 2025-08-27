import { Typography } from "@mui/material";


type AboutProps = {};

export const About = (props: AboutProps) => {
  return <div>
        <Typography
        variant="body1"
        sx={{
          color: "white",
          textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
          padding: { xs: "15px", sm: "18px", md: "20px" },
          borderRadius: "8px",
          margin: { xs: "10px", sm: "15px", md: "20px" },
          marginTop: 0,
          paddingLeft: { xs: "20px", sm: "50px", md: "100px" },
          width: { xs: "85%", sm: "90%", md: "100%" },
          fontSize: { xs: "14px", sm: "16px", md: "16px" },
          maxWidth: { xs: "300px", sm: "400px", md: "500px" }
        }}
      >
        Hello there, Nice to meet you. I am 
        <span
          style={{
            fontSize: 'clamp(32px, 8vw, 120px)',
            fontWeight: 900,
            color: '#FF5A8A',
            letterSpacing: '1.5px',
            lineHeight: 1.05,
            textShadow: '0 6px 16px rgba(0,0,0,0.4)',
            display: 'block'
          }}
        >
          Tanya
        </span>
        
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      </Typography>
  </div>;
};
