import React from "react";
import "../technology/technology.css";
import { Link } from "react-router-dom";
import "../technology/technology.css";
import { Box, Breadcrumbs, Typography, Stack } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
const Lifestyleheader = () => {
  return (
    <>
      <section className="container technology">
        <Box sx={{ marginButtom: "10px" }}>
          <Breadcrumbs
            aria-aria-label="breadcrumb"
            separator={<NavigateNextIcon fontSize="small" />}
          >
            <Link to="/" className="link1" fontSize="25px">
              <Typography color={"black"}>Home</Typography>
            </Link>
            <Typography>Lifestyle</Typography>
          </Breadcrumbs>
        </Box>
        <Typography
          variant="h1"
          fontSize={30}
          fontWeight={700}
          textTransform="uppercase"
          sx={{ marginTop: "10px" }}
        >
          Lifestyle
        </Typography>
        <div className="Catabutton">
          <Link to="/exercise">
            <button className="tec">Exercise</button>
          </Link>
          <Link to="/healthylife">
            <button className="tec">Healthy Life</button>
          </Link>
          <Link to="/Luxury">
            <button className="tec">Luxury</button>
          </Link>
          <Link to="/Family">
            <button className="tec">Family</button>
          </Link>
          <Link to="/Modern">
            <button className="tec">Modern</button>
          </Link>
        </div>
        <Typography
          variant="body1"
          fontFamily={("Open Sans", "Open Sans Regular", "sans - serif")}
          fontStyle={"italic"}
          align={"justify"}
          sx={{ marginTop: "18px", color: "#777" }}
        >
          Modern technology has become a total phenomenon for civilization, the
          defining force of a new social order in which efficiency is no longer
          an option but a necessity imposed on all human activity.
          tttttttttttttt ttttttttttttttttttttttt
          ttttttttttttttttttttttttttttttttttttt
          tttttttttttttttttttttttttttttttttttttttttttttttttttttt
        </Typography>
      </section>
    </>
  );
};

export default Lifestyleheader;
