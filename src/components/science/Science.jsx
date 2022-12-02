import React from "react";
import { Link } from "react-router-dom";
import "../technology/technology.css";
import "./science.css";
import "../technology/technology.css";
import { Box, Breadcrumbs, Typography, Stack } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
export default function Science() {
  return (
    <>
      <section className="technology">
        <Box sx={{ marginButtom: "10px" }}>
          <Breadcrumbs
            aria-aria-label="breadcrumb"
            separator={<NavigateNextIcon fontSize="small" />}
          >
            <Link to="/" className="link1" fontSize="25px">
              <Typography color={"black"}>Home</Typography>
            </Link>
            <Typography>Science</Typography>
          </Breadcrumbs>
        </Box>
        <Typography
          variant="h1"
          fontSize={30}
          fontWeight={700}
          textTransform="uppercase"
          sx={{ marginTop: "10px" }}
        >
          Science
        </Typography>
        <div className="Catabutton">
          <Link to="/astronomy">
            <button className="tec">Astronomy</button>
          </Link>
          <Link to="/biology">
            <button className="tec">Biology</button>
          </Link>
          <Link to="/chemistry">
            <button className="tec">Chemistry</button>
          </Link>
          <Link to="/earthscience">
            <button className="tec">Earth science</button>
          </Link>
          {/* <Link to="/mathematics">
            <button className="tec">Mathematics</button>
          </Link> */}
          <Link to="/plants">
            <button className="tec">Plants</button>
          </Link>
          <Link to="/physics">
            <button className="tec">Physics</button>
          </Link>
          <Link to="/mammals">
            <button className="tec">Mammals</button>
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
}
