import React from "react";
import { Link } from "react-router-dom";
import "./gover.css"

import "../technology/technology.css";
import "../travelling/theader.css";
import { Box, Breadcrumbs, Typography, Stack } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
export default function Goverhead() {
  return (
    <>
      <section className="container travel">
        <Box sx={{ marginButtom: "10px" }}>
          <Breadcrumbs
            aria-aria-label="breadcrumb"
            separator={<NavigateNextIcon fontSize="small" />}
          >
            <Link to="/" className="link1" fontSize="25px">
              <Typography color={"black"}>Home</Typography>
            </Link>
            <Typography>Government</Typography>
          </Breadcrumbs>
        </Box>
        <Typography
          variant="h1"
          fontSize={30}
          fontWeight={700}
          textTransform="uppercase"
          sx={{ marginTop: "10px" }}
        >
          Government
        </Typography>
        <div className="Catabutton">
          <Link to="/ministry">
            <button className="tec">Ministry</button>
          </Link>
          <Link to="/police_station">
            <button className="tec">Police Station</button>
          </Link>
          <Link to="/leader">
            <button className="tec">Leader</button>
          </Link>

          <Link to="/passport">
            <button className="tec">Passport</button>
          </Link>
          <Link to="/law">
            <button className="tec">Law</button>
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
