import React from "react";
import "./sidebar.scss";
// MUI
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CategoryIcon from "@mui/icons-material/Category";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import SettingsIcon from "@mui/icons-material/Settings";
import WebStoriesIcon from "@mui/icons-material/WebStories";
import Person2Icon from "@mui/icons-material/Person2";
import LogoutIcon from "@mui/icons-material/Logout";
// ROUTE
import { Link } from "react-router-dom";
// Store
import { useDispatch } from "react-redux";
import { toDark, toLight } from "../../app/themeSlice";

export default function Sidebar() {
  const dispach = useDispatch();

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/">
          <span className="logo">ميزانية البنات</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">الرئيسية</p>
          <Link to="/">
            <li>
              <DashboardIcon className="icon" />
              <span>لوحة التحكم</span>
            </li>
          </Link>
          <p className="title">قوائم</p>
          <Link to="/users">
            <li>
              <GroupIcon className="icon" />
              <span>الأعضاء</span>
            </li>
          </Link>
          <Link to="/bills">
            <li>
              <ShoppingCartIcon className="icon" />
              <span>المشتريات</span>
            </li>
          </Link>
          <Link to="/products">
            <li>
              <CategoryIcon className="icon" />
              <span>المنتجات</span>
            </li>
          </Link>
          <p className="title">خدمات</p>
          <li>
            <HealthAndSafetyIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <WebStoriesIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>Sittings</span>
          </li>
          <p className="title">المستخدم</p>
          <li>
            <Person2Icon className="icon" />
            <span>الملف الشخصي</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>تسجيل الخروج</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={() => dispach(toLight())}></div>
        <div className="colorOption" onClick={() => dispach(toDark())}></div>
      </div>
    </div>
  );
}
