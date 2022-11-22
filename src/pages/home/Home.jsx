import React, { Suspense } from "react";
import HomeHeader from "../../components/homeheadercompo/Homeheader";

import "./home.css";
const LastNews = React.lazy(() =>
  import("../../components/lastviedo/LastNews")
);
const Homelifestyle = React.lazy(() =>
  import("../../components/homelifestyle/Homelifestyle")
);
const HomeEducation = React.lazy(() =>
  import("../../components/homeeducation/homeEducation")
);
const Viedo = React.lazy(() => import("../../components/Vedio/Viedo"));

const Categorieslider = React.lazy(() =>
  import("../../components/categories/Categorieslider")
);
const CategoryCount = React.lazy(() =>
  import("../../components/categories/CategoryCount")
);
const Home = () => {
  return (
    <div className="HomePageDiv">
      <HomeHeader />
      <Suspense fallback={<div>Loading...</div>}>
        <LastNews />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Homelifestyle />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <HomeEducation />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Viedo />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        {/* <Categorieslider /> */}
        <CategoryCount />
      </Suspense>
    </div>
  );
};

export default Home;
