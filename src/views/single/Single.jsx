import React from "react";
import "./single.scss";
// Component
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import LineChart from "../../components/lineChart/LineChart";
import ListTable from "../../components/table/ListTable";

export default function Single() {
  return (
    <div className="single">
      <Sidebar />
      <div className="container">
        <Navbar />
        <div className="top">
          <div className="right">
            <div className="edit">تعديل</div>
            <h1 className="title">معلومات</h1>
            <div className="item">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
                alt="avatar"
                className="img"
              />
              <div className="details">
                <h1 className="title">رغد الجبر</h1>
                <div className="info">
                  <span className="key">البريد الإلكتروني:</span>
                  <span className="value">alraghad188@gmail.com</span>
                </div>
                <div className="info">
                  <span className="key">الرصيد:</span>
                  <span className="value">200 ريال</span>
                </div>
              </div>
            </div>
          </div>
          <div className="left">
            <LineChart title={"مصروفات المستخدم للسنة"} />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">آخر المصروفات</h1>
          <ListTable />
        </div>
      </div>
    </div>
  );
}
