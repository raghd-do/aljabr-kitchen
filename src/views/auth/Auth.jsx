import React from "react";
import { Outlet } from "react-router-dom";

export default function Auth() {
  return (
    <div className="auth_bg">
      <div className="auth_bg_img">
        <div className="heu">
          <div className="auth_container">
            <div className="card p-5">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
