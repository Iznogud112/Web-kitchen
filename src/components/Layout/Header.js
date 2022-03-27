import React from "react";

import mealImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

function Header(props) {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Web Kitchen</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImage} alt="Table with food!" />
      </div>
    </React.Fragment>
  );
}

export default Header;
