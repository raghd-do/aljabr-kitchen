import React from "react";
import "./pieChart.scss";
// MUI
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

// Chart
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart() {
  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        cutout: "90%",
      },
    ],
  };

  return (
    <div className="pie-chart">
      <div className="top">
        <h1 className="title">مجموع مشتريات كل بنت</h1>
        <MoreVertOutlinedIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="chart">
          <Doughnut
            data={data}
            options={{
              plugins: {
                legend: {
                  responsive: true,
                  display: false,
                  // position: "bottom",
                },
              },
            }}
            redraw
          />
        </div>
        <p className="title">مجموع المشتريات لهذا الشهر</p>
        <p className="amount">400 ريال</p>
        <p className="desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
          repellendus molestiae iusto optio
        </p>
        <div className="summary">
          <div className="item">
            <div className="title">الشهر السابق</div>
            <div className="result positive">
              <KeyboardArrowDownOutlinedIcon fontSize="small" />
              <div className="amount">300 ريال</div>
            </div>
          </div>
          <div className="item">
            <div className="title">الشهر ما قبل السابق</div>
            <div className="result nigative">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="amount">600 ريال</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
