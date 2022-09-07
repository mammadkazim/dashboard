import React from "react";
import ellipsis from "../../assets/ellipsis-solid.svg";
import arrowDown from "../../assets/arrow-down-solid.svg";
import arrowUp from "../../assets/arrow-up-solid.svg";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";


export default function Chart() {
  const handleClick = (e) => {
    const listItems = [...document.getElementsByTagName("li")];
    listItems.map((item) => item.classList.remove("clicked"));
    e.target.classList.add("clicked");
  }

  const data = [
    {
      name: "5/1",
      pv: 48,
    },
    {
      name: "5/15",
      pv: 58,
    },
    {
      name: "6/1",
      pv: 65,
    },
    {
      name: "6/15",
      pv: 70,
    },
    {
      name: "7/1",
      pv: 80,
    },
    {
      name: "7/15",
      pv: 85,
    },
    {
      name: "8/1",
      pv: 90,
    },
    {
      name: "8/15 ",
      pv: 100,
    },
    {
      name: "9/1 ",
      pv: 125,
    },
    {
      name: "9/15 ",
      pv: 145,
    },
    {
      name: "10/1 ",
      pv: 157,
    }
  ]

  return (
    <div className="chart">
      <div className="chart__head">
        <h3>Key performance indicators</h3>
        <div className="ellipsis">
          <img alt="ellipsis-icon" src={ellipsis}></img>
        </div>
      </div>
      <div className="chart__body">
        <div className="left-side">
          <ul onClick={handleClick}>
            <li>
              Revenue
              <span>
                <img alt="arrowDown" src={arrowUp}></img>26%
              </span>
            </li>
            <li>
              Orders
              <span>
                <img alt="arrowUp" src={arrowDown}></img>2%
              </span>
            </li>
            <li>Profit</li>
            <li>
              Average Check
              <span>
                <img alt="arrowUp" src={arrowUp}></img>5%
              </span>
            </li>
            <li>
              Canceled
              <span>
                <img alt="arrowUp" src={arrowDown}></img>18%
              </span>
            </li>
            <li>Repeat Sales</li>
          </ul>
        </div>
        <div className="right-side">
          <LineChart
            height={300}
            width={700}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              strokeWidth={2}
              fill="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </div>
      </div>
    </div>
  );
}
