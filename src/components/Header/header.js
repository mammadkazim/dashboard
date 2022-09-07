import React from "react";
import hamburgerIcon from "../../assets/hamburger-icon.jpg";
import userIcon from "../../assets/user-image.jpg";
import arrowDown from "../../assets/arrow-down.png";
import notificationIcon from "../../assets/notification-icon.svg";
import messageIcon from "../../assets/message-icon.svg";
const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <figure>
          <img
            className="hamburger-icon"
            alt="hamburger-icon"
            src={hamburgerIcon}
          ></img>
        </figure>
        <div className="logo">
          <div className="logo__upper">PB&J</div>
          <div className="logo__lower">INTERNATIONAL</div>
        </div>
      </div>
      <div className="header__right">
        <div className="notifications">
          <figure>
            <img
              className="notification-icon"
              alt="notification-icon"
              src={notificationIcon}
            ></img>
          </figure>
            <div className="notification-count">4</div>
        </div>
        <div className="messages">
          <figure>
            <img className="message-icon" alt="message-icon" src={messageIcon}></img>
          </figure>
          <div className="message-count">4</div>
        </div>
        <div className="user">
          <p className="user__name">Indira Shree</p>
          <figure>
            <img className="user-icon" alt="user-icon" src={userIcon}></img>
          </figure>
          <figure>
            <img className="arrow-icon" alt="arrow-icon" src={arrowDown}></img>
          </figure>
        </div>
      </div>
    </header>
  );
};

export default Header;
