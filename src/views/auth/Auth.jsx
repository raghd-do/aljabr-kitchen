import React from "react";
import "./auth.scss";
import { Outlet } from "react-router-dom";

export default function Auth() {
  return (
    <div className="auth">
      <div className="bg">
        <div className="bg_img">
          <div className="heu">
            <div className="container">
              <div className="card">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
