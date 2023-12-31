import React from "react";

import classes from "./Menu.module.css";
import { SheetsConfigContext } from "../../utils/global.context.jsx";

// eslint-disable-next-line react/prop-types
const Menu = ({ open }) => {
  const { sheetsConfig, handleUpdateSheetsConfig } =
    React.useContext(SheetsConfigContext);
  return (
    <div className={classes.menu} data-open={open}>
      <h4 className={classes.mainHeading}>Update config to generate sheets</h4>
      <section className={classes.operatorsConfigWrapper}>
        {sheetsConfig.map((operatorConfig, operatorIndex) => {
          const { name, sizes, selectedSheetsCount } = operatorConfig;
          return (
            <div key={name} className={classes.operatorConfig}>
              <h5 className={classes.operatorHeading}>{name}</h5>
              <table className={classes.table}>
                <thead>
                  <tr className={classes.tr}>
                    <td>Number Size</td>
                    <td>Sheets Count</td>
                  </tr>
                </thead>
                <tbody>
                  {sizes.map((size, sizeIndex) => {
                    const selectedSheetCount = selectedSheetsCount[sizeIndex];
                    return (
                      <tr key={size} className={classes.tr}>
                        <td>{size}</td>
                        <td>
                          <input
                            type={"number"}
                            min={0}
                            max={10}
                            value={selectedSheetCount}
                            onChange={(e) => {
                              handleUpdateSheetsConfig(
                                operatorIndex,
                                sizeIndex,
                                Number(e.target.value),
                              );
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Menu;
