import Advtecbar from "../catepagerightbar/Advtecbar";
import LatestArticle from "../catepagerightbar/LatestArticle";
import "../catepagerightbar/latestbar.css";
import PopularNews from "../catepagerightbar/PopularNews";
import StaySocial from "../catepagerightbar/StaySocial";
import Subscribeform from "../catepagerightbar/Subscribeform";
import Travlast from "../travelling/Travlast";

const BeautyRighrbar = () => {
  return (
    <>
      <div className="allrightbar">
        {/* <Travlast /> */}
        <PopularNews />
        <span className="lastestbottomline "></span>
        <Advtecbar />
        <LatestArticle />
        <span className="lastestbottomline "></span>
        <StaySocial />
        <Subscribeform />
      </div>
    </>
  );
};

export default BeautyRighrbar;
