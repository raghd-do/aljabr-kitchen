import React, { useEffect, useState } from "react";
import "./single.scss";
// Component
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import LineChart from "../../components/lineChart/LineChart";
import ListTable from "../../components/table/ListTable";
// MUI
import Skeleton from "@mui/material/Skeleton";
// ROUTE
import { useParams } from "react-router-dom";
// API
import { useGetUserQuery } from "../../api/userApi";

export default function Single({ type }) {
  const { id } = useParams();
  const { data: user, isLoading } = useGetUserQuery(id);
  // HOCK
  const [single, setSingle] = useState({});

  useEffect(() => {
    switch (type) {
      case "users":
        !isLoading && setSingle({ ...user.data() });
        break;

      case "bills":
        break;

      case "products":
        break;

      default:
        break;
    }
  }, [type, id, user, isLoading]);

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
              {isLoading ? (
                <Skeleton variant="circular" className="img" />
              ) : (
                <img src={single.image} alt="avatar" className="img" />
              )}
              <div className="details">
                {isLoading ? (
                  <Skeleton variant="rounded" height={100} />
                ) : (
                  <>
                    <h1 className="title">{single.name}</h1>
                    <div className="info">
                      <span className="key">البريد الإلكتروني:</span>
                      <span className="value">{single.email}</span>
                    </div>
                    <div className="info">
                      <span className="key">الرصيد:</span>
                      <span className="value">200 ريال</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="left">
            {isLoading ? (
              <Skeleton variant="rounded" height={100} />
            ) : (
              <LineChart title={"مصروفات المستخدم للسنة"} single={single} />
            )}
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">آخر المصروفات</h1>
          {isLoading ? (
            <Skeleton variant="rounded" height={200} />
          ) : (
            <ListTable single={single} />
          )}
        </div>
      </div>
    </div>
  );
}
