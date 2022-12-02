import Advtecbar from "./Advtecbar";
import LatestArticle from "./LatestArticle";
import "./latestbar.css";
import StaySocial from "./StaySocial";
import Subscribeform from "./Subscribeform";

export default function Latestbar() {
  return (
    <>
      <span className="lastestbottomline"></span>
      <Advtecbar />
      <LatestArticle />
      <span className="lastestbottomline"></span>
      <StaySocial />
      <Subscribeform />
    </>
  );
}
