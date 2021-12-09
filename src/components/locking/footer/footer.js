import React, { useState, useEffect } from "react";
import "./footer.css";
import Pdf from "../../../asset/images/pdf.pdf";
import logo1 from "../../../asset/images/logo/logo1.png";
import { useTranslation } from "react-i18next";
function Footer() {
  const { t, i18n } = useTranslation();
  return (
    // <div className="container-fluid">
    <div className="container footerone" style={{ paddingTop: "34px" }} s>
      <div className="">
        <div className="row footer">
          <div className="col-md-4">
            <img
              className="logo"
              src={logo1}
              alt="Logo"
              // class={{ width: "75px", height: "75px" }}
              // width="100px"
              // style={{ border: "2px solid red" }}
            />
            <br/>
            <span id="centercoin">CENTER COIN</span>
          </div>
          {/* <div className="col-md-3">
            <h6>{t("Poweredby.1")}</h6>
            <a href="https://www.binance.org/en/smartChain">
              {" "}
              {t("BinanceSmartChain.1")}
            </a>
          </div> */}
          
          <div className="col-md-4" style={{ paddingTop: "50px" }}>
            {/* <h6> {t("SHOWTHISINFOOTER.1")} </h6> */}
            {/* <a href={Pdf} target="_blank"> */}{" "}
            <h6>
              {t("Copyright.1")} © {t("2021CENTERCOINE.1")} |{" "}
              {t("AllRightsReserved..1")}
            </h6>
            {/* </a> */}
          </div>
          {/* <div className="col-md-3" style={{ paddingTop: "24px" }}>
            <h6> © {t("2021Allrightsreserved.1")}. </h6>
            <a href="#"> https://sthstake.pro </a>
          </div> */}
        </div>
      </div>
    </div>
    // </div >
  );
}

export default Footer;
