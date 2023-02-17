import React from "react";
import "./widget.scss";
// MUI
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import Person2Icon from "@mui/icons-material/Person2";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";

export default function Widget({ type }) {
  let data;

  // TODO:
  const amount = 1000;
  const diffrence = 20;

  switch (type) {
    case "الأعضاء":
      data = {
        title: "الأعضاء",
        isMoney: false,
        link: "مشاهدة كل الأعضاء",
        icon: (
          <Person2Icon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "المشتريات":
      data = {
        title: "المشتريات",
        isMoney: true,
        link: "مشاهدة كل المشتريات",
        icon: (
          <ShoppingCartIcon
            className="icon"
            style={{
              color: "goldenrod",
              backgroundColor: "rgba(218, 165, 32, 0.2)",
            }}
          />
        ),
      };
      break;
    case "الدخل الشهري":
      data = {
        title: "الدخل الشهري",
        isMoney: true,
        link: "مشاهدة كل الدخل الشهري",
        icon: (
          <PaymentsOutlinedIcon
            className="icon"
            style={{
              color: "green",
              backgroundColor: "rgba(0, 128, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "المتبقي في البنك":
      data = {
        title: "المتبقي في البنك",
        isMoney: true,
        link: "مشاهدة كل المتبقي في البنك",
        icon: (
          <AccountBalanceOutlinedIcon
            className="icon"
            style={{
              color: "purple",
              backgroundColor: "rgba(128, 0, 128, 0.2)",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="right">
        <span className="title">{data.title}</span>
        <span className="counter">
          {amount} {data.isMoney && "ريال"}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="left">
        <div className="percentag positive">
          <KeyboardArrowUpOutlinedIcon />
          {diffrence}%
        </div>
        {data.icon}
      </div>
    </div>
  );
}
