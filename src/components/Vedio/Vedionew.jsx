import React from "react";
import ReactPlayer from "react-player";
import "./vedio.css";
const Vedionew = () => {
  return (
    <div className="Vsection">
      <div className="Viedosec">
        <div className="main-video">
          <ReactPlayer
            className="firstVideo"
            width="100%"
            height="100%"
            url="https://youtu.be/8dJyRm2jJ-U"
            allowfullscreen="1"
            controls
            autoplay
            muted
          />
        </div>

        <div className="RecentViedo">
          <h4>Recently Video</h4>
          <div className="Video-playlist">
            <div className="Video">
              <ReactPlayer
                width="150px"
                height="100px"
                url="https://youtu.be/kXpOEzNZ8hQ"
              />
              <div className="VideoTitle">
                <h5>
                  BTS (방탄소년단) 'Yet To Come (The Most Beautiful Moment)'
                  Official MV
                </h5>
                <span className="minutes">12:38</span>
              </div>
            </div>

            <div className="Video">
              <ReactPlayer
                width="150px"
                height="100px"
                url="https://youtu.be/hr-325mclek"
              />
              <div className="VideoTitle">
                <h5>Hwang In Youp's fan metting in Asia</h5>

                <span className="minutes">3:38</span>
              </div>
            </div>

            <div className="Video">
              <ReactPlayer
                width="150px"
                height="100px"
                url="https://youtu.be/8dJyRm2jJ-U"
              />
              <div className="VideoTitle">
                <h5>PSY - 'That That (prod. & feat. SUGA of BTS)' MV</h5>

                <span className="minutes">3:38</span>
              </div>
            </div>

            <div className="Video">
              <ReactPlayer
                width="150px"
                height="100px"
                url="https://youtu.be/awkkyBH2zEo"
              />
              <div className="VideoTitle">
                <h5>LISA - 'LALISA' M/V</h5>

                <span className="minutes">3:26</span>
              </div>
            </div>

            <div className="Video">
              <ReactPlayer
                width="150px"
                height="100px"
                url="https://youtu.be/Y8JFxS1HlDo"
              />
              <div className="VideoTitle">
                <h5>IVE 아이브 'LOVE DIVE' MV</h5>

                <span className="minutes">2:38</span>
              </div>
            </div>

            <div className="Video">
              <ReactPlayer
                width="150px"
                height="100px"
                url="https://youtu.be/CuklIb9d3fI"
              />
              <div className="VideoTitle">
                <h5>BTS (방탄소년단) 'Permission to Dance' Official MV</h5>

                <span className="minutes">3:38</span>
              </div>
            </div>

            <div className="Video">
              <ReactPlayer
                width="150px"
                height="100px"
                url="https://youtu.be/Os_6c5j6YiQ"
              />
              <div className="VideoTitle">
                <h5>
                  TXT (투모로우바이투게더) 'Good Boy Gone Bad' Official MV
                </h5>

                <span className="minutes">3:35</span>
              </div>
            </div>

            <div className="Video">
              <ReactPlayer
                width="150px"
                height="100px"
                url="https://youtu.be/Jh4QFaPmdss"
              />
              <div className="VideoTitle">
                <h5>(G)I-DLE - 'TOMBOY' Official Music Video</h5>

                <span className="minutes">3:38</span>
              </div>
            </div>

            <div className="Video">
              <ReactPlayer
                width="150px"
                height="100px"
                url="https://youtu.be/ZJaKdBBzUYk"
              />
              <div className="VideoTitle">
                <h5>TREASURE - '직진 (JIKJIN)' M/V</h5>

                <span className="minutes">3:09</span>
              </div>
            </div>

            <div className="Video">
              <ReactPlayer
                width="150px"
                height="100px"
                url="https://youtu.be/3GWscde8rM8"
              />
              <div className="VideoTitle">
                <h5>NMIXX "O.O" M/V</h5>

                <span className="minutes">3:33</span>
              </div>
            </div>

            <div className="Video">
              <ReactPlayer
                width="150px"
                height="100px"
                url="https://youtu.be/Y8JFxS1HlDo"
              />
              <div className="VideoTitle">
                <h5>IVE 아이브 'LOVE DIVE' MV</h5>

                <span className="minutes">2:34</span>
              </div>
            </div>

            <div className="Video">
              <ReactPlayer
                width="150px"
                height="100px"
                url="https://youtu.be/0aaeUI1ucfQ"
              />
              <div className="VideoTitle">
                <h5>[HyunA&DAWN] 'PING PONG' MV</h5>

                <span className="minutes">3:09</span>
              </div>
            </div>
          </div>
          <button className="btn btnViedo">Show More</button>
        </div>
      </div>
    </div>
  );
};

export default Vedionew;
