import React from "react";
import "./Home.css";
import Rules from "./Rules";
import Languages from "./Languages";
import Rank from "./Rank";

const Home = () => {
  return (
    <div>
      <h1 className="project-title">{"{ D E V D U E L S }"}</h1>

      <div className="ui three column centered grid">
        <div className="ui column segment">
          <Languages />
          <Rank />
        </div>
        <div className="ui column segment" style={{marginTop: "0px"}}>
          <Rules />
        </div>
      </div>

    </div>
  );
};

export default Home;
