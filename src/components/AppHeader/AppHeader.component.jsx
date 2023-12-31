import React from "react";

import Menu from "../Menu/Menu.component";
import classes from "./AppHeader.module.css";

const AppHeaderComponent = () => {
  const [openMenu, setOpenMenu] = React.useState(false);

  const handleToggleMenu = () => {
    setOpenMenu((openMenu) => !openMenu);
  };

  return (
    <header className={classes.header}>
      <h1 className={classes.appHeading}>Arithmetic Worksheets Generator</h1>
      <div className={classes.menuHolder}>
        <button
          className={classes.menuButton}
          onClick={handleToggleMenu}
        ></button>
        <Menu open={openMenu} onClose={() => setOpenMenu(false)} />
      </div>
    </header>
  );
};

export default AppHeaderComponent;
