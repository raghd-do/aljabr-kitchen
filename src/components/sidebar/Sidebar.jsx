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

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">ميزانية البنات</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">الرئيسية</p>
          <li>
            <DashboardIcon className="icon" />
            <span>لوحة التحكم</span>
          </li>
          <p className="title">قوائم</p>
          <li>
            <GroupIcon className="icon" />
            <span>الأعضاء</span>
          </li>
          <li>
            <ShoppingCartIcon className="icon" />
            <span>المشتريات</span>
          </li>
          <li>
            <CategoryIcon className="icon" />
            <span>المنتجات</span>
          </li>
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
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
}
