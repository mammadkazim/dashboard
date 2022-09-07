import React from "react";
import arrowRight from "../../assets/arrow-right.png";

const TicketsItem = ({item}) => {
  const { img, name } = item;

  return (
      <li>
        <div>
          <img className="avatar" alt="avatar" src={img}></img>
          {name}
        </div>
        <img className="arrow" alt="arrow" src={arrowRight}></img>
      </li>
  );
};

export default TicketsItem;
