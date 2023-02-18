import React from "react";
import "./lineChart.scss";
// CHART
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import gradient from "chartjs-plugin-gradient";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  gradient
);

export default function LineChart({ title }) {
  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        fill: "start",
        data: [10, 20, 15, 32, 49, 56, 50, 30, 20, 11, 32, 49, 56, 50],
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        tension: 0.4,
        // showLine: false,
        pointStyle: false,

        gradient: {
          backgroundColor: {
            axis: "y",
            colors: {
              0: "rgba(255, 99, 132, 0)",
              50: "rgba(255, 99, 132, 0.7)",
              100: "rgba(255, 99, 132, 1)",
            },
          },
        },
      },
    ],
  };

  const options = {
    responsive: true,
    aspectRatio: 4 / 1,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          color: "grey",
        },
      },
      y: {
        ticks: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="line-chart">
      <div className="title">{title}</div>
      <div className="chart">
        <Line data={data} options={options} redraw />
      </div>
    </div>
  );
}
