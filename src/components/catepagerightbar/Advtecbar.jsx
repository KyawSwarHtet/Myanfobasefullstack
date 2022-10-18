import "./advtecbar.css";
import "animate.css";

export default function Advtecbar() {
  return (
    <>
      <div className="adv-connection">
        <div className="adv-image">
          <img src="/images/homeimgs/tecadv.jpg" alt="" />
        </div>
        <div className="advdata">
          <div className="advh4">
            <h4>
              Best Selling BLOG and MAGAZING <br />
              Theme of All Time
            </h4>
          </div>
          <div className="adv-button">
            <button className="advbuynow">
              <span> Buy Now</span>
            </button>
          </div>

          <p className="adv-size"> 300*250 Ad</p>
        </div>
      </div>
      {/* star connected */}
    </>
  );
}
