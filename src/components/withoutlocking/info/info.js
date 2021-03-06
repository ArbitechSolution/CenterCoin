import React, { useState, useEffect } from "react";
import Web3 from "web3";
import {
  contractAddress,
  abi,
  tokenAddres,
  tokenAbi,
} from "../../../utils/constant";
import "./info.css";
import { useTranslation } from "react-i18next";
function Info() {
  let accountAd;
  const { t, i18n } = useTranslation();
  const [account, setAccount] = useState("Connect");
  const [showLinks, setShowLinks] = useState(false);
  const [dailyProfit, setdailyProfit] = useState(0);
  const [totalReturn, setTotalReturn] = useState(0);
  const [withdrawTime, setWithdrawTime] = useState(0);
  const [enterAmount, setEnterAmount] = useState(0);
  const [fourteenDaysReward, setfourteenDaysReward] = useState(0);
  const [days, setdays] = useState(0);
  const [contractBalance, setcontractBalance] = useState(0);
  const [totalusers, setTotalUsers] = useState(0);

  const getData = async () => {
    try {
      const web3 = window.web3;
      let tokenContract = new web3.eth.Contract(tokenAbi, tokenAddres);
      let contract = new web3.eth.Contract(abi, contractAddress);
      // console.log("data", web3);
      let accountDetails = await tokenContract.methods
        .balanceOf(contractAddress)
        .call();
      setcontractBalance(web3.utils.fromWei(accountDetails));
      // total_users
      let total_users = await contract.methods.total_users().call();
      console.log("total_users", total_users);
      setTotalUsers(total_users);
    } catch (error) {
      console.log("data", error);
      // alert("Error while checking locked account");
    }
  };
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
        let accountDetails = null;
        window.ethereum.on("accountsChanged", function (accounts) {
          // setAccount(accounts[0]);
          accountAd = accounts[0];
          setAccount(accountAd);
          // console.log(accounts);
        });
      }
      getData();
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
      // alert("Error while checking locked account");
    }
  };

  useEffect(() => {
    setInterval(() => {
      loadWeb3();
    }, 1000);
  }, []);

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <div className="info">
              <p>
                {" "}
                Total income: based on your tarrif plan
                <span> ({t("from5%to8%daily.1")})</span>
              </p>
              <p>
                {t("Basicinterestrate:.1")}
                <span> {t("+0.5%every24hours.1")}</span> - only for new deposits
              </p>
              <p>
                Minimal deposit: <span>0.05 STH</span>, no maximal limit
              </p>
              <p>
                Earnings <span>every moment</span>, withdraw{" "}
                <span>any time </span>(if you use capitalization of interest you
                can withdraw only after end of your deposit)
              </p>
            </div>
          </div>
          <div className="col-sm-4">
            <span className="infostaked">
              Total Users
              <a
                href={`https://testnet.bscscan.com/${contractAddress}`}
                target="_blank"
                className="badge"
                bg="light"
                text="dark"
              >
                contract
              </a>
            </span>
            <span className="infostakedvalue">{totalusers}</span>
            <span className="infostaked">Total Contract Balance</span>
            <span className="infostakedvalue">{contractBalance}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
