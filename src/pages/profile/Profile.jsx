import React from "react";
import ProImg from "../../components/profile/ProImg";
import ProLeft from "../../components/profile/ProLeft";
import ProRight from "../../components/profile/ProRight";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./profilepage.css";
import { Grid } from "@mui/material";
export default function Profile() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);
  return (
    <>
      <ProImg user={user} />
      <section className="container ">
        <Grid container my={2} spacing={5}>
          <Grid md={3.6}>
            <ProLeft className="leftbar" />
          </Grid>
          <Grid xs={12} sm={12} md={8.4}>
            <ProRight />
          </Grid>
        </Grid>
      </section>
    </>
  );
}
