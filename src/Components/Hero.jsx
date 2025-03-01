import { Box, Typography } from "@mui/material";
import React from "react";
import bgimg from "../Assets/Images/bmw.jpg"
export default function Hero() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
        
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          backgroundImage: `url(${bgimg})`,
          // backgroundRepeat:"no-repeat",
        }}
      >
        <Typography
          sx={{
            fontWeight: "500",
            fontSize: { xs: "100px", sm: "100px" },
            textTransform: "uppercase",
            color: "black",
          }}
          gutterBottom
        >
          Welcome to D-Mart
        </Typography>
        <Typography
          gutterBottom
          sx={{ fontWeight: "200", fontSize: "100px", color: "black" }}
        >
          Address:
        </Typography>
        <Typography
          gutterBottom
          sx={{ width: "80%", fontWeight: "600", color: "black" }}
        >
          Near thokkotu
          Ulall
        </Typography>
      </Box>
    </Box>
  );
}
