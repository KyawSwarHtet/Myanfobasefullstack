import "./subscribeform.css";

export default function Subscribeform() {
  return (
    <>
      <div className="subscribe">
        <div className="sub-title">
          <h2>Subscribe</h2>
          <span className="subunderline"></span>
        </div>
        <div className="email-form">
          <input type="text" placeholder="E-mail address" />
        </div>
        <div className="email-button">
          <button className="wantit">I WANT IT</button>
        </div>
      </div>
    </>
  );
}
