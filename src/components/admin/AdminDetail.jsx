import react from "react";
import "./admin.css"
import { Link } from "react-router-dom";



export default function AdminDetail() {
    return (
      <>
        <div className="admindetail">
          <div>
            <Link to="/requestform" className="adminlink">
              <span>Request Form</span>
            </Link>

            <span>
              <i className="uil uil-angle-right-b"></i>
            </span>
            <span>detail page</span>
          </div>
          <div className="admindetailimg">
            <img
              className="detailimg"
              src="./images/entertainment/cartoon/barbie.jpg"
              alt=""
            />
          </div>
          <div className="postdetail">
            <h3 className="admindetail-title">
              Travel to Bagan in winter season
            </h3>
            <button className="admindetail-cate cateTravel">Travel</button>
            <div className="postman1">
              <img src="./images/homeimgs/viedo4.jpg" alt="" />
              <span className="profileName1">Paina Ta Kon</span>
              <span className="profileDate1">20.3.2022</span>
            </div>
            <p className="user-desc">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available. It is
              also used to temporarily replace text in a process called
              greeking, which allows designers to consider the form of a webpage
              or publication, without the meaning of the text influencing the
              design. Lorem ipsum is typically a corrupted version of De finibus
              bonorum et malorum, a 1st-century BC text by the Roman statesman
              and philosopher Cicero, with words altered, added, and removed to
              make it nonsensical and improper Latin. Versions of the Lorem
              ipsum text have been used in typesetting at least since the 1960s,
              when it was popularized by advertisements for Letraset transfer
              sheets.[1] Lorem ipsum was introduced to the digital world in the
              mid-1980s, when Aldus employed it in graphic and word-processing
              templates for its desktop publishing program PageMaker. Other
              popular word processors, including Pages and Microsoft Word, have
              since adopted Lorem ipsum,[2] as have many LaTeX
              packages,[3][4][5] web content managers such as Joomla! and
              WordPress, and CSS libraries such as Semantic UI.[6]
            </p>
          </div>
          <div className="admindetail-button">
            <button className="detail-button1">Accept</button>
            <button className="detail-button2">Delete</button>
          </div>
        </div>
      </>
    );
}