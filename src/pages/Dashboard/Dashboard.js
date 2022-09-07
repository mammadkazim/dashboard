import React from "react";
import Chart from "../../components/Chart/Chart";
import Tickets from "../../components/Tickets/Tickets";
import Pipeline from "../../components/Pipeline/Pipeline";
import Info from "../../components/Info/Info";
const Dashboard = () => {

  return (
    <div className="dashboard">
      <h5>dashboard</h5>
      <h1>Commerce Dashboard</h1>
      <Chart/>
      <Tickets/>
      <section>
        <Pipeline/>
        <Info/>
      </section>
    </div>
  );
};

export default Dashboard;
