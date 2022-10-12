import React from "react";
import ProImg from "../../components/profile/ProImg";
import ProLeft from "../../components/profile/ProLeft";
import ProRight from "../../components/profile/ProRight";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./profile.css";
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
      <section className="container Prosection">
        <ProLeft />
        <ProRight />
      </section>
    </>
  );
}
