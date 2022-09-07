import React, { useEffect, useState } from "react";
import ticketsData from "./ticketsData";
import TicketsItem from "./TicketsItem";
const Tickets = () => {
  const [columnItemsCount, setColumnItemsCount] = useState(6);
  const [columnsArray, setcolumnsArray] = useState([]);
  const [showAllUsers, setShowAllUsers] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://mocki.io/v1/352d787b-2d97-4258-af00-58ab78f20f38"
      );
      const json = await data.json();
      console.log(json);
      setcolumnsArray(json);
    };
    fetchData();
  }, []);

  // const handleItemsCount = (e) => {
  //     setShowAllUsers((prev) => !prev);
  //     if (showAllUsers) setColumnItemsCount(6);
  //     else setColumnItemsCount(25);
  //     console.log(e.target.id)
  // };
  // const columnsArray = [
  //   { count: 25, name: "new", color: "#00C1D5", color2: "#E5F9FB" },
  //   {
  //     count: 5,
  //     name: "manager feedback",
  //     color: "#0055CF",
  //     color2: "#E5EEFB",
  //   },
  //   { count: 4, name: "processing", color: "#F9B900", color2: "#FFF9E5" },
  //   {
  //     count: 3,
  //     name: "awaiting feedback",
  //     color: "#FF1E25",
  //     color2: "#FDE7E8",
  //   },
  //   { count: 15, name: "approved", color: "#00C76B", color2: "#E5FAF1" },
  // ];
  return (
    <div className="tickets">
      <h5>this weeks ticket escalations</h5>
      <div className="container">
        {columnsArray &&
          columnsArray.map((column, index) => {
            return (
              <div className="column" key={index}>
                <div
                  style={{ borderLeft: `3px solid ${column.color}` }}
                  className="heading"
                >
                  <p>{column.name}</p>
                  <div
                    style={{
                      color: column.color,
                      backgroundColor: column.color2,
                    }}
                    className="count"
                  >
                    <span>{column.count}</span>
                  </div>
                </div>
                <ul>
                  {ticketsData.map((item, index) => {
                    if (
                      item.id <= column.count &&
                      item.id <= columnItemsCount
                    ) {
                      return <TicketsItem key={index} item={item} />;
                    }
                  })}
                </ul>
                {column.count >= 6 && (
                  <button
                    id={index}
                    onClick={() => {
                      setShowAllUsers((prev) => !prev);
                      if (showAllUsers) setColumnItemsCount(6);
                      else setColumnItemsCount(column.count);
                    }}
                  >
                    {!showAllUsers ? "Show more" : "Show less"}
                  </button>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Tickets;
