import React from "react";
import "./lastnews.css";

const Todaylist = () => {
  return (
    <>
      <div className="todaylist">
        <div className="CurrencyExchange">
          <h3>Today Currency Exchange</h3>
          {/* <span className="underline1"></span> */}
          <div className="today">
            <div className="foreignmoney">
              <img src="./images/homeimgs/usd.jpg" alt="" />
              <span>1USD</span>
            </div>
            <div className="myanmarKyats">
              <span>1840KYATS</span>
            </div>
          </div>
          <div className="today">
            <div className="foreignmoney">
              <img src="./images/homeimgs/sgd.jpg" alt="" />
              <span>1SGD</span>
            </div>
            <div className="myanmarKyats">
              <span>1342KYATS</span>
            </div>
          </div>
          <div className="today">
            <div className="foreignmoney">
              <img src="./images/homeimgs/yuan.png" alt="" />
              <span>1YUAN</span>
            </div>
            <div className="myanmarKyats">
              <span>278KYATS</span>
            </div>
          </div>
          <div className="today">
            <div className="foreignmoney">
              <img src="./images/homeimgs/won.jpg" alt="" />
              <span>1Won</span>
            </div>
            <div className="myanmarKyats">
              <span>1.5KYATS</span>
            </div>
          </div>
          <div className="today">
            <div className="foreignmoney">
              <img src="./images/homeimgs/ren.png" alt="" />
              <span>1REN</span>
            </div>
            <div className="myanmarKyats">
              <span>14KYATS</span>
            </div>
          </div>
          <div className="today">
            <div className="foreignmoney">
              <img src="./images/homeimgs/pound.png" alt="" />
              <span>1POUND</span>
            </div>
            <div className="myanmarKyats">
              <span>2314KYATS</span>
            </div>
          </div>
          <div className="today">
            <div className="foreignmoney">
              <img src="./images/homeimgs/euro.png" alt="" />
              <span>1EURO</span>
            </div>
            <div className="myanmarKyats">
              <span>1979KYATS</span>
            </div>
          </div>
          {/* <p className="today">1USD = 1840KYAT</p>
          <p className="today">1SGD = 1342KYAT</p>
          <p className="today">1YUAN = 278KYAT</p>
          <p className="today">1WON = 1.5KYAT</p>
          <p className="today">1REN = 14KYAT</p>
          <p className="today">1POUND = 2314KYAT</p>
          <p className="today">1EUROP = 1979KYAT</p> */}
        </div>
        <div className="Goldprice">
          <h3>Today Glod Price</h3>
          <h5>(1 Kyat Thar)</h5>
          <div className="today">
            <div className="goldprices">
              <span>Sell price</span>
            </div>
            <div className="myanmarKyats">
              <span>3,437,591.67KYATS</span>
            </div>
          </div>
          <div className="today">
            <div className="goldprices">
              <span>Buy price</span>
            </div>
            <div className="myanmarKyats">
              <span>2,737,591.67KYATS</span>
            </div>
          </div>
          {/* <p className="today">Sell price = 3,437,591.67KYAT</p>
          <p className="today">Buy price = 2,737,591.67KYAT</p> */}
        </div>
        <div className="FuelPrice">
          <h3>Today Fuel Price</h3>
          <h5>(1 Liter)</h5>
          <div className="today">
            <div className="goldprices">
              <span>Diesel</span>
            </div>
            <div className="myanmarKyats">
              <span> 2410KYATS</span>
            </div>
          </div>
          <div className="today">
            <div className="goldprices">
              <span>Premiun Diesel</span>
            </div>
            <div className="myanmarKyats">
              <span>2440KYATS</span>
            </div>
          </div>
          <div className="today">
            <div className="goldprices">
              <span>Octane 95</span>
            </div>
            <div className="myanmarKyats">
              <span>2210KYATS</span>
            </div>
          </div>
          <div className="today">
            <div className="goldprices">
              <span>Octane 92</span>
            </div>
            <div className="myanmarKyats">
              <span>2160KYATS</span>
            </div>
          </div>

          {/* <p className="today">Diesel = 2410KYAT</p>
          <p className="today">Premiun Diesel = 2440KYAT</p>
          <p className="today">Octane 95 = 2210KYAT</p>
          <p className="today">Octane 92 = 2160KYAT</p> */}
        </div>
      </div>
    </>
  );
};

export default Todaylist;
