import React, { useState, useEffect } from "react";
import Web3 from "web3";
import {
  contractAddress,
  tokenAbi,
  tokenAddres,
  abi,
} from "../../../utils/constant";
import "./navbar.css";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import logo from "../../asset/images/logo.png";
import logo1 from "../../../asset/images/logo/logo1.png";
import birtish from "../../../asset/images/birtish.png";
import language from "../../../asset/images/language (2).png";
import korean from "../../../asset/images/korean.jpg";
// import language from "../asset/images/languagess.png";
// import birtish from "../asset/images/birtish.png";
// import chinese from "../asset/images/chinese.png";
// import logo from "../asset/images/mainlogo.png";
import { useTranslation } from "react-i18next";

import menuIcon from "../../../asset/images/menuIcon.png";
function Navbarr() {
  let accountAd;
  const { t, i18n } = useTranslation();
  const [account, setAccount] = useState("Connect");
  const [isaccount, setIsaccount] = useState("Connect");
  const [showLinks, setShowLinks] = useState(false);
  const contractAddresses = "0x1B3B7610D9e86e31499e43726AF25E0347CfdD92";
  const abi = [
    {
      inputs: [
        { internalType: "contract IBEP20", name: "_Token", type: "address" },
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "user",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "card",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "time",
          type: "uint256",
        },
      ],
      name: "BetAmount",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "user",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "time",
          type: "uint256",
        },
      ],
      name: "Withdraw",
      type: "event",
    },
    {
      constant: false,
      inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
      name: "Bet_Amount",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "Token",
      outputs: [{ internalType: "contract IBEP20", name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "_owner",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [{ internalType: "uint256", name: "SMSAmount", type: "uint256" }],
      name: "emergencyWithdraw",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [{ internalType: "uint256", name: "Amount", type: "uint256" }],
      name: "emergencyWithdrawBNB",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [{ internalType: "address", name: "", type: "address" }],
      name: "number_of_deposit",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "owner",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
      name: "transferOwnership",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        { internalType: "address", name: "", type: "address" },
        { internalType: "uint256", name: "", type: "uint256" },
      ],
      name: "user",
      outputs: [
        { internalType: "uint256", name: "amount", type: "uint256" },
        { internalType: "uint256", name: "id", type: "uint256" },
        { internalType: "uint256", name: "Card_No", type: "uint256" },
        { internalType: "uint256", name: "time", type: "uint256" },
        { internalType: "uint256", name: "_card_Price", type: "uint256" },
        { internalType: "uint256", name: "BetNo", type: "uint256" },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "uint256[]", name: "deposit_id", type: "uint256[]" },
      ],
      name: "withdraw",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
  ];
  //   function handleClicks(lang) {
  //     console.log("lang", lang);
  //     i18n.changeLanguage(lang);
  //   }
  function handleClicks(lang) {
    console.log("lang", lang);
    console.log(2 - 3);
    i18n.changeLanguage(lang);
  }

  function formatThousands(num) {
    var numbr = parseFloat(parseFloat(num).toFixed(6));
    // console.log("num", parseFloat(numbr));
    var values = numbr.toString().split(".");
    return (
      values[0].replace(/.(?=(?:.{3})+$)/g, "$&,") +
      (values.length == 2 ? "." + values[1] : "")
    );
  }

  const loadWeb3 = async () => {
    let isConnected = false;
    try {
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        isConnected = true;
      } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
        isConnected = true;
      } else {
        isConnected = false;
        console.log(
          "Metamask is not installed, please install it on your browser to connect."
        );
        // alert("Metamask is not installed, please install it on your browser to connect.");
      }
      if (isConnected === true) {
        let accounts = await getAccounts();
        // setAccount(accounts[0]);
        accountAd = accounts[0];
        setAccount(accountAd);
        let navAccount =
          accountAd.substring(0, 4) +
          "..." +
          accountAd.substring(accountAd.length - 4);
        setIsaccount(navAccount);

        let accountDetails = null;
        window.ethereum.on("accountsChanged", function (accounts) {
          // setAccount(accounts[0]);
          accountAd = accounts[0];
          setAccount(accountAd);
          // console.log(accounts);
        });
      }
      getContractTransferEventsByUser();
    } catch (error) {
      console.log("Error while connecting metamask", error);
      // alert("Error while connecting metamask");
    }
  };

  const getAccounts = async () => {
    const web3 = window.web3;
    try {
      let accounts = await web3.eth.getAccounts();
      // console.log(accounts);
      return accounts;
    } catch (error) {
      console.log("Error while fetching acounts: ", error);
      return null;
    }
  };

  // eslint-disable-next-line
  const isLockedAccount = async () => {
    try {
      let accounts = await getAccounts();
      if (accounts.length > 0) {
        // console.log("Metamask is unlocked");
      } else {
        console.log("Metamask is locked");
      }
    } catch (error) {
      console.log("Error while checking locked account");
    }
  };
  const getContractTransferEventsByUser = async () => {
    let newArr = [];
    let newArrSell = [];
    let newArrWithdraw = [];
    let result = [];
    // const web3 = window.web3;
    const web3 = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545");
    let contract = new web3.eth.Contract(abi, contractAddresses);
    try {
      let continueToken = "";
      var instructorEvent = await contract
        .getPastEvents(
          "BetAmount",
          {
            fromBlock: 12644314,
            toBlock: 12645914,
          },
          function (error, events) {
            if (events) {
              events.forEach((element) => {
                // console.log("Sell", web3.eth.get_block('latest'));
                // console.log("Sell", accountAd);
                if (element?.returnValues?._buyer === accountAd) {
                  let nature = element?.returnValues?.nature;
                  let _buyer = element?.returnValues?._buyer;
                  let _tokens = element?.returnValues?._tokens;
                  let _amounts = element?.returnValues._amounts;

                  newArr.push({
                    nature: nature,
                    _buyer: _buyer,
                    _tokens: web3.utils.fromWei(_tokens),
                    _amounts: web3.utils.fromWei(_amounts),
                  });
                  // console.log("newArr", newArr)
                }
              });
            }
          }
        )
        .then(function (events) {
          // console.log("getPastEvents", events)
        });

      let itemssell = newArr.slice(0, 5);
      //   setRowsSell([...itemssell]);
    } catch (error) {
      console.error("getEvents", error);
    } finally {
      return result;
    }
  };
  const handleClick = async () => {
    const web3 = window.web3;
    // let value = 100;
    try {
      console.log(account);
      let contract = new web3.eth.Contract(abi, contractAddress);
      let tokenContract = new web3.eth.Contract(tokenAbi, tokenAddres);
      // if (value >= 100 && value <= 1000) {
      await tokenContract.methods
        .approve(contractAddress, web3.utils.toWei("" + 100))
        .send({ from: accountAd });
      const result = await contract.methods
        .Bet_Amount(web3.utils.toWei("" + 100))
        .send({ from: accountAd });
      console.log(result);
      // } else {
      //     alert('Minimum Bet 100 and Maximum Bet 1000')
      // }
    } catch (error) {
      console.log("Error while fetching acounts: ", error);
    }
  };
  useEffect(() => {
    setInterval(() => {
      loadWeb3();
    }, 1000);
  }, []);

  return (
    <div className="container navbarone">
      <div className="row ">
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              {/* <span href="#home"> */}
              <img
                className="logo"
                src={logo1}
                
                alt="Logo"
          
              
              />
              {/* </span> */}
              <br/>
              <span id="centercoin">CENTER COIN</span>
            </Navbar.Brand>
            {/* <h2 style={{ border: "2px solid red", fontSize: "40px" }}>
              Center Coin
            </h2> */}
            {/* <Navbar.title>Center Coin</Navbar.title> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="offset-md-6">
              <Nav className="me-auto">
                <Nav.Link href="#home">
                  {" "}
                  <a
                    href="#"
                    className="btn btn-warning btn-sm"
                    aria-pressed="true"
                    id="connect"
                    onClick={loadWeb3}
                  >
                    {isaccount}
                  </a>
                </Nav.Link>
                <div className="dropdown">
                  <a href="#home">
                    <img src={birtish} className="birtishimage" />
                  </a>
                  <div class="dropdown-content">
                    <a className="btn" onClick={() => handleClicks("en")}>
                      <img
                        className="listflags"
                        src={language}
                        style={{
                          height: "auto",
                          width: "30px",
                          padding: "0px 5px",
                        }}
                      />
                      {t("English.1")}
                    </a>
                    <a className="btn" onClick={() => handleClicks("ko")}>
                      <img
                        className="listflags"
                        src={korean}
                        style={{
                          height: "auto",
                          width: "30px",
                          padding: "0px 5px",
                        }}
                      />
                      {t("Korean.1")}
                    </a>
                  </div>
                </div>
                {/* <NavDropdown id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">{" "}
                  <a href="#home">
                    <img src={birtish} className="birtishimage" />
                  </a>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {/* <div className="col-lg-2">
          <span href="#home">
            <img
              className="logo"
              src={logo1}
              alt="Logo"
              class={{ width: "75px", height: "75px" }}
            />
          </span>
        </div>
        <div
          className="col-lg-1 offset-lg-8 connect"
          style={{ border: "2px solid red" }}
        >
          <a
            href="#"
            className="btn btn-warning btn-sm"
            aria-pressed="true"
            id="connect"
            onClick={loadWeb3}
          >
            connect
            {account}
          </a>
        </div>
        <div class="col-lg-1">
          <div class="dropdown">
            <a href="#home">
              <img src={birtish} className="birtishimage" />
            </a>
            <div class="dropdown-content">
              <a className="btn" onClick={() => handleClicks("en")}>
                <img
                  className="listflags"
                  src={language}
                  style={{
                    height: "auto",
                    width: "30px",
                    padding: "0px 5px",
                  }}
                />
                {t("English.1")}
              </a>
              <a className="btn" onClick={() => handleClicks("ko")}>
                <img
                  className="listflags"
                  src={korean}
                  style={{
                    height: "auto",
                    width: "30px",
                    padding: "0px 5px",
                  }}
                />
                {t("Korean.1")}
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
export default Navbarr;
