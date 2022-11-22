import { Link } from "react-router-dom";
import Slider from "../slider/Slider.jsx";
import "./homeheader.css";
import "swiper/css/bundle";
import Popularslider from "../popularslider/Popularslider.jsx";
import { themeContext } from "../../Context";
import { useContext } from "react";
import PopularHome from "./PopularHome.jsx";

const HomeHeader = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <section className="homeheader">
        <div className="home-banner">
          <div className="home-banner-detail">
            <h1>MyanfobasE</h1>
            <h3>MYANMAR INFORMATION BASE</h3>
            <div className="search-banner">
              <Link to="/search">
                <input
                  type="text"
                  placeholder="Search in here...."
                  id="searchinput"
                />

                <i className="search-button uil uil-search"></i>
              </Link>
            </div>
            <div className="banner-botton">
              <h2>Welcome to our Page</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Slider />

      <section className="popular-header container">
        <div className="popular-title">
          <h2
            className={darkMode ? " populartitle-white" : "populartitle-black"}
          >
            Popular Now
          </h2>
          <span className="popular-now-line"></span>
        </div>
        <div className="popular-p">
          <Popularslider />
        </div>
      </section>
      <PopularHome />
    </>
  );
};
export default HomeHeader;


// <section className="popular-body container">
  //   <Box>
  //     <div className="first-grid">
  //       <Container maxWidth="xl">
  //         <Grid container direction="row" spacing={1}>
  //           <Grid item md={7.6} sm={12} xs={12}>
  //             <div className="mask-div">
  //               <div className="maskimgdiv">
  //                 <img
  //                   loading="lazy"
  //                   src="/images/homeimgs/Wear-Mask-2.jpg"
  //                   alt=""
  //                 />
  //               </div>
  //               <div className="popular-bignew">
  //                 <Link to="/health" className="cateHealth">
  //                   <span className="health_button">Health</span>
  //                 </Link>
  //                 <Typography theme={themeC} variant="h6" color="white">
  //                   Where can I get some People is good or not?
  //                 </Typography>
  //                 <Typography variant="p" color="white" className="bignewsdesc">
  //                   popular-health Lorem Ipsum is simply dummy text of the
  //                   printing and typesetting industry. Lorem Ipsum has been the
  //                   industry's standard dummy text ever since the 1500s,
  //                 </Typography>
  //               </div>
  //             </div>
  //           </Grid>
  //           <Grid item md={4.4} sm={12} xs={12}>
  //             <div className="SecondDiv">
  //               <Grid container direction="row" spacing={1}>
  //                 <Grid
  //                   item
  //                   md={12}
  //                   sm={4}
  //                   xs={12}
  //                   className="secGridfistphoto"
  //                 >
  //                   {/* <div className="secGridfistphoto"> */}
  //                   <div className="travelpopular">
  //                     <img
  //                       loading="lazy"
  //                       src="images/homeimgs/popularland.jpg"
  //                       alt=""
  //                     />
  //                   </div>
  //                   <div className="popularsec-bg">
  //                     <div className="popular-secnew">
  //                       <Link to="/travel" className="cateTravel">
  //                         Travel
  //                       </Link>
  //                       <br></br>
  //                       <Typography variant="p" color="white">
  //                         Where can I get some?
  //                       </Typography>
  //                     </div>
  //                   </div>
  //                   {/* </div> */}
  //                 </Grid>
  //                 <Grid item md={12} sm={8} xs={12}>
  //                   <div className="sec-grid">
  //                     <Grid container direction="row" spacing={1}>
  //                       <Grid
  //                         item
  //                         md={6}
  //                         sm={6}
  //                         xs={12}
  //                         className="secGrid2ndphoto"
  //                       >
  //                         <div className="fashion-img">
  //                           <img
  //                             loading="lazy"
  //                             src="images/art/art6.jpg"
  //                             alt=""
  //                           />
  //                         </div>
  //                         <div className="popular-thirdnew">
  //                           <Link to="/beauty" className="cateBeauty">
  //                             Beauty
  //                           </Link>
  //                           <br></br>

  //                           <Typography variant="p" color="white">
  //                             Where can I get some?
  //                           </Typography>
  //                         </div>
  //                       </Grid>
  //                       <Grid
  //                         item
  //                         md={6}
  //                         sm={6}
  //                         xs={12}
  //                         className="secondGrid3rdphoto"
  //                       >
  //                         <div className="culture-img">
  //                           <img
  //                             loading="lazy"
  //                             src="images/homeimgs/bg2.jpg"
  //                             alt=""
  //                           />
  //                         </div>
  //                         <div className="popular-fouthnew">
  //                           <Link to="/history" className="cateHistory">
  //                             History
  //                           </Link>
  //                           <br></br>

  //                           <Typography variant="p" color="white">
  //                             Where can I get some?
  //                           </Typography>
  //                         </div>
  //                       </Grid>
  //                     </Grid>
  //                   </div>
  //                 </Grid>
  //               </Grid>
  //             </div>
  //           </Grid>
  //         </Grid>
  //       </Container>
  //     </div>
  //   </Box>
  // </section>;

