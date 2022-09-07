import React from "react";
import pipelineData from "./pipelineData";
const Pipeline = () => {
  return (
    <div className="pipeline-container">
      <div className="pipeline-container__head">
        <h3>Pipeline chart</h3>
      </div>
      <ul className="pipeline-container__body">
        {pipelineData.map((item, index) => {
          return (
            <li key={index}>
              <p>{item.name}</p>
              <div className="pipeline-wrapper">
                <div
                  className="pipeline"
                  style={{ width: `${item.ratio}` }}
                ></div>
                <span>{item.ratio}</span>
              </div>
              <div className="amount">{item.amount}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Pipeline;
